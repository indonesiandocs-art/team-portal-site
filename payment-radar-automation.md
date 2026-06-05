# Payment Radar Automation

Weekly scope: China only.

Goal: publish only operationally useful payment-risk signals for a trading company that uses Chinese banks and wants to avoid resembling payment agents, sanctions-evasion intermediaries, or fake-trade structures.

## Publish Criteria

Create a radar item only when the signal affects at least one practical decision:

- Move volume away from or toward a specific bank.
- Prepare additional bank documents before payment.
- Avoid a payment route, third-party payer, jurisdiction, or counterparty pattern.
- Review a product category because it looks dual-use, high-priority, sanctions-sensitive, or AML-sensitive.
- Understand a newly observed typology used by bad actors to bypass bank requirements.
- Track a regulatory signal from OFAC, BIS, FinCEN, PBOC, SAFE, NFRA, Hong Kong regulators, or other primary compliance sources.

Reject generic news, broad geopolitics, repeated sanctions commentary without payment impact, and stories with no bank/payment/document/route consequence.

## Source Priority

Use primary sources first:

- OFAC, BIS, FinCEN, US State Department, EU sanctions pages when China banking/payment impact is explicit.
- PBOC, SAFE, NFRA, HKMA, SFC.
- Court cases, enforcement actions, regulator advisories.

Use reputable reporting for market behavior:

- Reuters, Bloomberg, Financial Times, South China Morning Post, Caixin, Nikkei Asia, CNBC.
- Specialized sanctions/compliance research when it cites concrete cases.

## China Search Themes

English:

- China banks Russia payments OFAC
- Chinese bank compliance Russia sanctions payment delay
- Hong Kong trading company sanctions evasion payment agent
- China trade based money laundering sanctions evasion
- Chinese banks due diligence end user third country payments
- China cross-border payment compliance Russia Iran

Chinese:

- 中国 银行 俄罗斯 付款 合规
- 跨境支付 俄罗斯 合规 银行
- 香港 贸易公司 制裁 规避
- 贸易型洗钱 中国 银行
- 最终用户 审查 跨境付款
- 付款代理 制裁 合规

## Output Shape

Write 0-5 radar items per week. Most weeks should be 0-3.

Each item must fit this JSON schema:

```json
{
  "id": "stable-slug-with-date",
  "region": "China",
  "category": "Banking | Sanctions | Typology | Documents | Payment route | Platform",
  "importance": "critical | high | medium | background",
  "signalType": "Bank behavior | Regulatory guidance | Enforcement case | Typology | Market reporting",
  "title": "Short Russian title",
  "summary": "One short paragraph in Russian.",
  "impact": "Practical effect for trading payments, in Russian.",
  "action": "Recommended internal action, in Russian.",
  "typology": "How bad actors use or abuse this pattern, if relevant; write as a red-flag explanation in Russian.",
  "bank": "Specific bank if known, otherwise empty string",
  "jurisdiction": "China / Hong Kong / relevant route",
  "sourceTitle": "Source name or article title",
  "sourceUrl": "https://...",
  "publishedAt": "YYYY-MM-DD",
  "status": "published"
}
```

The visible portal currently uses English UI text, but radar item content must be in Russian. Keep items concise and operational. Avoid instructions for evading controls; describe bad-actor typologies only as red flags and compliance context.

## Publishing

Save generated items as JSON, then publish with:

```sh
PAYMENT_RADAR_ADMIN_TOKEN=... node publish-radar-items.mjs <items-json-file> https://team.drnova.org
```

If no item passes the publish criteria, do not publish anything. Report "No publishable China payment-risk signals this week."
