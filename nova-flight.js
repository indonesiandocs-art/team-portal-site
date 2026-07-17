(() => {
  const canvas = document.querySelector("#flightCanvas");

  if (!canvas) {
    return;
  }

  const context = canvas.getContext("2d");
  const game = document.querySelector("#flightGame");
  const overlay = document.querySelector("#flightOverlay");
  const overlayTitle = document.querySelector("#flightOverlayTitle");
  const overlayText = document.querySelector("#flightOverlayText");
  const startButton = document.querySelector("#flightStartButton");
  const scoreElement = document.querySelector("#flightScore");
  const timeElement = document.querySelector("#flightTime");
  const speedElement = document.querySelector("#flightSpeed");
  const bestElement = document.querySelector("#flightBestScore");
  const keys = new Set();
  const rings = [];
  const clouds = Array.from({ length: 10 }, (_, index) => ({
    x: ((index * 197) % 900) / 900,
    y: 0.08 + ((index * 71) % 420) / 1000,
    size: 0.5 + ((index * 37) % 50) / 100,
  }));
  const bestScoreKey = "novaFlightBestScore";
  const state = {
    running: false,
    score: 0,
    time: 60,
    speed: 1,
    planeX: 0,
    planeY: 0.15,
    bank: 0,
    pitch: 0,
    lastTime: 0,
    spawnTimer: 0,
    flash: 0,
    message: "",
  };

  let bestScore = Number.parseInt(localStorage.getItem(bestScoreKey) || "0", 10);
  bestElement.textContent = bestScore;

  function resizeCanvas() {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    const bounds = canvas.getBoundingClientRect();
    canvas.width = Math.max(1, Math.round(bounds.width * ratio));
    canvas.height = Math.max(1, Math.round(bounds.height * ratio));
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
  }

  function spawnRing(depth = 1) {
    rings.push({
      x: (Math.random() * 1.45) - 0.725,
      y: (Math.random() * 1.05) - 0.38,
      z: depth,
      checked: false,
      hue: Math.random() > 0.5 ? "#f45b3f" : "#0a3159",
    });
  }

  function resetGame() {
    state.running = true;
    state.score = 0;
    state.time = 60;
    state.speed = 1;
    state.planeX = 0;
    state.planeY = 0.15;
    state.bank = 0;
    state.pitch = 0;
    state.lastTime = performance.now();
    state.spawnTimer = 0;
    state.flash = 0;
    rings.length = 0;
    spawnRing(0.55);
    spawnRing(1.05);
    spawnRing(1.55);
    overlay.hidden = true;
    updateHud();
  }

  function endGame() {
    state.running = false;

    if (state.score > bestScore) {
      bestScore = state.score;
      localStorage.setItem(bestScoreKey, String(bestScore));
      bestElement.textContent = bestScore;
      overlayTitle.textContent = "New best flight!";
    } else {
      overlayTitle.textContent = "Flight complete";
    }

    overlayText.textContent = `You scored ${state.score} points and passed ${Math.floor(state.score / 100)} rings.`;
    startButton.textContent = "Fly again";
    overlay.hidden = false;
  }

  function updateHud() {
    scoreElement.textContent = state.score;
    timeElement.textContent = Math.max(0, Math.ceil(state.time));
    speedElement.textContent = `${state.speed.toFixed(1)}x`;
  }

  function update(delta) {
    if (!state.running) {
      return;
    }

    const boost = keys.has("boost");
    const movement = delta * (boost ? 1.25 : 0.85);
    state.speed = Math.min(2.2, 1 + (60 - state.time) * 0.012 + (boost ? 0.45 : 0));

    if (keys.has("left")) state.planeX -= movement;
    if (keys.has("right")) state.planeX += movement;
    if (keys.has("up")) state.planeY -= movement;
    if (keys.has("down")) state.planeY += movement;

    const targetBank = (keys.has("left") ? -0.34 : 0) + (keys.has("right") ? 0.34 : 0);
    const targetPitch = (keys.has("up") ? -0.18 : 0) + (keys.has("down") ? 0.18 : 0);
    state.bank += (targetBank - state.bank) * Math.min(1, delta * 9);
    state.pitch += (targetPitch - state.pitch) * Math.min(1, delta * 9);

    state.planeX = Math.max(-0.86, Math.min(0.86, state.planeX));
    state.planeY = Math.max(-0.55, Math.min(0.72, state.planeY));
    state.time -= delta;
    state.spawnTimer -= delta;
    state.flash = Math.max(0, state.flash - delta);

    if (state.spawnTimer <= 0) {
      spawnRing(1.35);
      state.spawnTimer = Math.max(0.72, 1.25 - (60 - state.time) * 0.006);
    }

    for (let index = rings.length - 1; index >= 0; index -= 1) {
      const ring = rings[index];
      ring.z -= delta * 0.36 * state.speed;

      if (!ring.checked && ring.z <= 0.13) {
        ring.checked = true;
        const distance = Math.hypot(state.planeX - ring.x, state.planeY - ring.y);

        if (distance < 0.32) {
          state.score += boost ? 150 : 100;
          state.flash = 0.35;
          state.message = boost ? "+150 BOOST" : "+100";
        } else {
          state.time = Math.max(0, state.time - 2);
          state.message = "MISSED  -2s";
          state.flash = 0.35;
        }
      }

      if (ring.z < -0.08) {
        rings.splice(index, 1);
      }
    }

    updateHud();

    if (state.time <= 0) {
      endGame();
    }
  }

  function drawCloud(x, y, size) {
    context.fillStyle = "rgba(255, 255, 255, 0.72)";
    context.beginPath();
    context.arc(x, y, 28 * size, 0, Math.PI * 2);
    context.arc(x + 28 * size, y - 8 * size, 22 * size, 0, Math.PI * 2);
    context.arc(x + 54 * size, y, 30 * size, 0, Math.PI * 2);
    context.fill();
  }

  function drawBackground(width, height, time) {
    const sky = context.createLinearGradient(0, 0, 0, height);
    sky.addColorStop(0, "#78ccea");
    sky.addColorStop(0.65, "#d8f2f7");
    sky.addColorStop(1, "#f7d6a3");
    context.fillStyle = sky;
    context.fillRect(0, 0, width, height);

    context.fillStyle = "rgba(255, 241, 178, 0.7)";
    context.beginPath();
    context.arc(width * 0.82, height * 0.18, Math.min(width, height) * 0.08, 0, Math.PI * 2);
    context.fill();

    clouds.forEach((cloud, index) => {
      const drift = ((time * (5 + index % 3)) + cloud.x * width) % (width + 160) - 100;
      drawCloud(drift, cloud.y * height, cloud.size);
    });

    context.fillStyle = "#7aa77a";
    context.beginPath();
    context.moveTo(0, height);
    context.lineTo(0, height * 0.86);
    context.quadraticCurveTo(width * 0.18, height * 0.68, width * 0.35, height * 0.86);
    context.quadraticCurveTo(width * 0.57, height * 0.63, width * 0.78, height * 0.86);
    context.quadraticCurveTo(width * 0.9, height * 0.74, width, height * 0.84);
    context.lineTo(width, height);
    context.closePath();
    context.fill();

    context.fillStyle = "#537f67";
    context.fillRect(0, height * 0.91, width, height * 0.09);
  }

  function drawRing(ring, width, height) {
    const perspective = 1 / Math.max(0.11, ring.z + 0.18);
    const centerX = width / 2 + ring.x * width * 0.34 * perspective;
    const centerY = height * 0.47 + ring.y * height * 0.32 * perspective;
    const radius = Math.min(width, height) * 0.055 * perspective;

    context.save();
    context.globalAlpha = Math.min(1, 1.5 - ring.z * 0.35);
    context.strokeStyle = "rgba(255, 255, 255, 0.55)";
    context.lineWidth = Math.max(5, radius * 0.28);
    context.beginPath();
    context.ellipse(centerX + 3, centerY + 4, radius, radius * 0.82, 0, 0, Math.PI * 2);
    context.stroke();
    context.strokeStyle = ring.hue;
    context.lineWidth = Math.max(3, radius * 0.16);
    context.beginPath();
    context.ellipse(centerX, centerY, radius, radius * 0.82, 0, 0, Math.PI * 2);
    context.stroke();
    context.restore();
  }

  function drawPlane(width, height) {
    const x = width / 2 + state.planeX * width * 0.34;
    const y = height * 0.47 + state.planeY * height * 0.32;
    const scale = Math.max(0.72, Math.min(1.15, width / 900));

    context.save();
    context.translate(x, y);
    context.rotate(state.bank);
    context.scale(scale, scale * (1 - Math.abs(state.pitch) * 0.7));
    context.fillStyle = "rgba(7, 31, 57, 0.18)";
    context.beginPath();
    context.moveTo(6, -50 + state.pitch * 34);
    context.lineTo(58, 14);
    context.lineTo(17, 5);
    context.lineTo(11, 38);
    context.lineTo(-5, 27);
    context.lineTo(-11, 38);
    context.lineTo(-17, 5);
    context.lineTo(-58, 14);
    context.closePath();
    context.fill();
    context.fillStyle = "#ffffff";
    context.strokeStyle = "#0a3159";
    context.lineWidth = 2;
    context.beginPath();
    context.moveTo(0, -62 + state.pitch * 28);
    context.lineTo(60, 18);
    context.lineTo(15, 7);
    context.lineTo(9, 39);
    context.lineTo(0, 30);
    context.lineTo(-9, 39);
    context.lineTo(-15, 7);
    context.lineTo(-60, 18);
    context.closePath();
    context.fill();
    context.stroke();
    context.beginPath();
    context.moveTo(0, -62 + state.pitch * 28);
    context.lineTo(0, 30);
    context.moveTo(-60, 18);
    context.lineTo(0, -8);
    context.lineTo(60, 18);
    context.stroke();
    context.fillStyle = "#f45b3f";
    context.beginPath();
    context.moveTo(0, -62 + state.pitch * 28);
    context.lineTo(8, -38 + state.pitch * 18);
    context.lineTo(-8, -38 + state.pitch * 18);
    context.closePath();
    context.fill();
    context.restore();
  }

  function draw(time) {
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    context.clearRect(0, 0, width, height);
    drawBackground(width, height, time / 1000);
    [...rings].sort((a, b) => b.z - a.z).forEach((ring) => drawRing(ring, width, height));
    drawPlane(width, height);

    if (state.flash > 0) {
      context.fillStyle = state.message.includes("MISSED") ? "#9c2f20" : "#0a3159";
      context.font = "800 24px Inter, system-ui, sans-serif";
      context.textAlign = "center";
      context.fillText(state.message, width / 2, height * 0.2);
    }
  }

  function frame(time) {
    const delta = Math.min(0.04, (time - state.lastTime) / 1000 || 0);
    state.lastTime = time;

    if (!document.querySelector('[data-page="flight"]')?.hidden) {
      update(delta);
      draw(time);
    }

    requestAnimationFrame(frame);
  }

  const controlMap = {
    ArrowLeft: "left",
    ArrowRight: "right",
    ArrowUp: "up",
    ArrowDown: "down",
    Space: "boost",
  };

  window.addEventListener("keydown", (event) => {
    const control = controlMap[event.code];

    if (!control || document.querySelector('[data-page="flight"]')?.hidden) {
      return;
    }

    event.preventDefault();
    keys.add(control);
  });

  window.addEventListener("keyup", (event) => {
    const control = controlMap[event.code];
    if (control) keys.delete(control);
  });

  game.querySelectorAll("[data-flight-control]").forEach((button) => {
    const control = button.dataset.flightControl;
    const press = (event) => {
      event.preventDefault();
      keys.add(control);
    };
    const release = (event) => {
      event.preventDefault();
      keys.delete(control);
    };
    button.addEventListener("pointerdown", press);
    button.addEventListener("pointerup", release);
    button.addEventListener("pointercancel", release);
    button.addEventListener("pointerleave", release);
  });

  startButton.addEventListener("click", resetGame);
  window.addEventListener("resize", resizeCanvas);
  const canvasResizeObserver = new ResizeObserver((entries) => {
    if (entries.some((entry) => entry.contentRect.width > 0 && entry.contentRect.height > 0)) {
      resizeCanvas();
    }
  });
  canvasResizeObserver.observe(canvas);
  resizeCanvas();
  spawnRing(0.65);
  spawnRing(1.15);
  requestAnimationFrame((time) => {
    state.lastTime = time;
    requestAnimationFrame(frame);
  });
})();
