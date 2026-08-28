# China Payment Radar Project

This Codex project is dedicated to the Nova Group China payment radar workflow.

Scope:
- Maintain the Nova Group employee portal and all its sections.
- Run the China payment-risk radar research and publish flow.
- Keep weekly radar threads and automation runs in this project.

Key files:
- `payment-radar-automation.md` contains the publication criteria and output schema.
- `publish-radar-items.mjs` publishes approved radar items to the team portal.
- `work/` stores generated weekly JSON files.

Working rules:
- Prefer concise, operational radar outputs.
- Write item content in Russian and keep schema field names unchanged.
- Use primary regulatory and enforcement sources first.
- If no item passes the criteria, report that there are no sufficiently important China payment-risk signals this week.
