# StratCaddi
### Where Strategy Meets Execution

StratCaddi is an AI-powered pre-trade decision support tool built for active futures day traders. It functions as an intelligent trading caddy — knowing your plan, reading your conditions in real time, and telling you exactly what size to use and whether to take the trade.

Built on a 570-trade historical dataset, a defined playbook system, and a proprietary risk management framework, StratCaddi is designed to eliminate emotional decision-making and enforce trading discipline at the point of entry.

---

## What It Does

- **Pre-trade checklist** — evaluates your ALPHA criteria in real time and scores your setup from 0-6
- **Auto position sizing** — recommends exact dollar risk based on market conditions, timeframe, and confirmation conviction
- **Contract calculator** — takes your entry, stop loss, and take profit prices and calculates contracts, trade risk, potential profit, and R:R ratio
- **ALPHA detection** — automatically identifies when a setup is approaching ALPHA status and alerts you
- **Tilt detection** — monitors trade count and conditions and warns you when tilt risk is elevated
- **AI caddy chat** — powered by Claude AI, knows your full trading plan, playbooks, and historical mistake patterns
- **Voice input** — speak to StratCaddi hands-free during active trading
- **Drag to reorder** — customize your checklist panel layout and lock it in place
- **Light and dark mode** — with time zone and time format settings
- **Alerts banner** — real-time warnings for conflicts, R:R violations, daily loss limits, economic calendar, and ALPHA setups

---

## Account Configuration

| Parameter | Value |
|---|---|
| Platform | Apex Trader Funding Legacy |
| Account Size | $50,000 |
| Max Trailing Drawdown | $2,500 |
| Max Daily Loss | $600 |
| Trading Hours | 8:00am — 12:00pm EST |
| Instruments | Micros and Minis — Indices, Metals, Energy |

---

## Position Sizing System

### Risk Off
| Conviction | Size |
|---|---|
| Standard | $50 |
| High | $150 |

### Risk On (all 6 ALPHA criteria required)
| Conviction | Size |
|---|---|
| Low | $100 |
| Standard | $300 |
| High | $600 |

### Timeframe Cap
On 1m, 2m, 3m, and 15m timeframes conviction is automatically dropped one tier due to higher risk. Maximum Risk On sizing on these timeframes is $300.

---

## ALPHA Criteria (Risk On Requirements)
All 6 must be checked for Risk On status:

1. 1HR / 4HR Structure Clear
2. BOS or KLMV (Break of Structure or Key Level Mean Reversion)
3. Market in Confluence
4. Trend (3+ Candles)
5. Strong Vol Above 50MA
6. Confirmation Candle

---

## Overall Conviction (Auto-Calculated)
Overall conviction is derived automatically from checklist score and market conditions — it is never manually selected.

| Condition | Conviction |
|---|---|
| 6/6 + IDEAL market | High |
| 5/6 or FAIR market | Standard |
| 4/6 or below or POOR market | Low |

---

## Playbooks

### Low Volume Retest (LVR) — Primary Setup
The bread and butter. Always with the trend, never counter-trend.
1. Clean Break — strong break through level with volume above 50MA
2. With the Trend — confirms direction alignment
3. Low Vol Pullback to Level — decreasing volume on the retest
4. Pinbar / Doji + Vol Pickup — confirmation candle with volume increasing

Applies across all timeframes: 1m, 2m, 3m, 5m, 15m

### Mean Reversion
Counter-trend setup at macro supply or demand levels. Requires decreasing volume into the level and strong confirmation candle.

### Break + Retest (1HR+)
Significant structure break with a clean retest. Continuation trade with the trend.

---

## ALPHA Setup Definition
An ALPHA trade is the highest quality setup in the system. Criteria:
- LVR or Break + Retest at a macro level on watch for multiple sessions
- Full confluence across all correlated instruments
- Pre-planned before the session
- IDEAL market conditions
- Crystal clear 4HR picture
- Trade visualized before it set up
- At peace at entry — no rushing, no FOMO
- SL and TP defined before entry

ALPHA is auto-detected in the app when 5/6 criteria are checked, only CC is missing, timeframe is 5m, market conditions are not Poor, and confirmation conviction is not Low.

---

## Key Rules

**Economic Calendar**
Avoid being in trades during 2-3 star economic data releases (investing.com/economic-calendar).
Exception: Crude Oil Inventories does not apply when trading indices.

**R:R Minimum**
Never take a trade under 2:1 Risk to Reward. App warns automatically when R:R falls below 2:1.

**Confluence Conflict**
Market in Confluence cannot be selected simultaneously with Poor Market Conditions. App blocks and warns.

**One Instrument**
One instrument at a time. No multi-position trading.

---

## Top Mistake Patterns (from 570-trade historical dataset)
1. Not in the plan — most common
2. Selling too early — watching P&L instead of price action
3. Over leveraging
4. Double entry / chasing after stop out
5. Execution errors — rushing, wrong contract size
6. Going on tilt — rapid-fire trades after losses
7. Late entry — hesitating after a prior loss
8. Not enough size on ALPHA setups
9. Improper planning — missing context before entry

---

## Tilt Detection Signals
App automatically flags when:
- 5 or more trades taken in a session
- Daily loss approaching $600 limit
- Daily remaining risk drops below $200

---

## Instruments Traded

### Micros
| Ticker | Description |
|---|---|
| MNQ | Micro NASDAQ 100 |
| MES | Micro S&P 500 |
| MYM | Micro Dow Jones |
| M2K | Micro Russell 2000 |
| MGC | Micro Gold |
| MSI | Micro Silver |
| MCL | Micro Crude Oil |

### Minis
| Ticker | Description |
|---|---|
| NQ | NASDAQ 100 |
| ES | S&P 500 |
| YM | Dow Jones |
| RTY | Russell 2000 |
| GC | Gold |
| SI | Silver |
| CL | Crude Oil |
| PL | Platinum |

---

## Roadmap

### In Progress
- [ ] Electron desktop app build
- [ ] Polygon.io live price feed integration
- [ ] Economic calendar API integration
- [ ] Image upload for chart analysis inside app chat
- [ ] StratCaddi voice and personality refinement

### Planned
- [ ] Capacitor mobile app (iOS + Android)
- [ ] Mean Reversion playbook sub-checklist
- [ ] Break + Retest playbook sub-checklist
- [ ] Dynamic position sizing system expansion
- [ ] NinjaTrader algo trading system (separate project)
- [ ] Private hosting on Netlify or GitHub Pages

### Completed
- [x] Core pre-trade checklist with ALPHA scoring
- [x] Auto position sizing recommendation engine
- [x] Contract calculator with entry/SL/TP price inputs
- [x] ALPHA setup auto-detection
- [x] Timeframe conviction cap (1m/2m/3m/15m)
- [x] Market Conditions single-select (Poor/Fair/Ideal)
- [x] Confluence conflict detection and warning
- [x] R:R minimum warning (below 2:1)
- [x] Tilt detection alerts
- [x] Economic calendar reminder chip
- [x] Daily loss limit tracker
- [x] Drag to reorder sections with lock toggle
- [x] Light and dark mode
- [x] Settings gear (timezone, time format, dark mode)
- [x] Voice input
- [x] Micro/Mini toggle with full instrument descriptions
- [x] AI caddy chat powered by Claude
- [x] Direction-aware SL/TP labels and validation
- [x] LVR sub-checklist with yellow prompt system
- [x] Sections locked by default on startup
- [x] Account name editable inline

---

## Data Sources
- **Historical trade data:** 570 trades exported from Tradezella (Oct 2024 — Jan 2026)
- **Journal data:** Pre and post session analysis from Tradezella
- **Chart screenshots:** Markup screenshots from TradingView sessions
- **AI engine:** Claude Sonnet (Anthropic)

---

## Tech Stack
- HTML / CSS / JavaScript (single file)
- Manrope font (Google Fonts)
- Claude API (Anthropic) for AI caddy chat
- TradingView for charting
- Planned: Electron for desktop, Capacitor for mobile, Polygon.io for live data

---

## Version History

### v1.0 — April 2026
Initial build. Core checklist, position sizing, AI chat, contract calculator, alerts system, drag to reorder, light/dark mode, voice input.

---

## Notes
This repository is **private**. Do not make public. Contains proprietary trading rules, position sizing logic, and strategic playbook definitions.

If sharing with collaborators, share read-only access only and never include API keys in committed files.
