# StratCaddi
### Where Strategy Meets Execution

StratCaddi is an AI-powered pre-trade decision support tool built for active futures day traders. It functions as an intelligent trading caddy — knowing your plan, reading your conditions in real time, and telling you exactly what size to use and whether to take the trade.

Built on a 570-trade historical dataset, a defined playbook system, and a proprietary risk management framework, StratCaddi is designed to eliminate emotional decision-making and enforce trading discipline at the point of entry.

---

## Platform

- **Desktop App:** Electron (Windows) — standalone .exe installer
- **Browser:** HTML single file — open in Chrome or Edge
- **Mobile:** Planned via Capacitor (iOS + Android)
- **AI Engine:** Claude Sonnet (Anthropic API)
- **Charting:** TradingView

---

## What It Does

- **Pre-trade checklist** — evaluates your ALPHA criteria in real time and scores your setup 0-6
- **Auto position sizing** — recommends exact dollar risk based on market conditions, timeframe, and confirmation conviction
- **Contract calculator** — takes entry, stop loss, and take profit prices and calculates contracts, trade risk, potential profit, and R:R ratio
- **Direction-aware SL/TP** — labels and validates stop loss and take profit based on long or short direction
- **ALPHA detection** — automatically identifies when a setup is approaching ALPHA status and alerts you
- **Pre-entry preparation check** — 4-point checklist confirming you were at your desk, had adequate time, defined SL/TP before entry, and are at peace going in
- **Hold timer** — starts at entry, counts down to first 5m candle close, fires a caddy message when it's time to evaluate
- **Tilt detection** — monitors trade count and conditions and warns when tilt risk is elevated
- **AI caddy chat** — powered by Claude AI, knows your full trading plan, playbooks, and historical mistake patterns
- **Voice input** — speak to StratCaddi hands-free during active trading
- **Drag to reorder** — customize checklist panel layout, locked by default
- **Light and dark mode** — with timezone and time format settings in gear menu
- **Alerts banner** — real-time warnings for conflicts, R:R violations, daily loss limits, economic calendar, ALPHA setups, prep issues, and tilt

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
On 1m, 2m, 3m, and 15m timeframes conviction drops one tier automatically due to higher risk. Maximum Risk On sizing on these timeframes is $300. If the result after capping is too low the app fires a DO NOT TRADE warning.

### Overall Conviction (Auto-Calculated)
Overall conviction is derived automatically — never manually selected.

| Condition | Conviction |
|---|---|
| 6/6 + IDEAL market | High |
| 5/6 or FAIR market | Standard |
| 4/6 or below or POOR market | Low |

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

## Pre-Entry Preparation Checklist
Added April 16, 2026 based on live trade journal analysis. Incomplete preparation is the #1 trigger for early exits and improper trade management.

1. I was at my desk when this set up
2. I had adequate time to assess before entry
3. SL and TP defined before entry
4. I am at peace — not rushed, not FOMO

If any of these are unchecked the alerts banner fires a specific warning. If preparation is incomplete StratCaddi will tell you directly before entry.

---

## Hold Timer Rule
Added April 16, 2026 based on live trade journal analysis.

- Hit ▶ ENTER when you get into a trade
- Timer counts up and shows countdown to first 5m candle close
- At 5 minutes the caddy fires: "First 5m candle just closed. Time to evaluate. Only make a decision if something has materially changed from your plan."
- No trimming, no exiting, no adjusting within the first 5 minutes unless stop loss is hit
- Hit ■ EXIT when out — timer resets

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
An ALPHA trade is the highest quality setup in the system:
- LVR or Break + Retest at a macro level on watch for multiple sessions
- Full confluence across all correlated instruments
- Pre-planned before the session
- IDEAL market conditions
- Crystal clear 4HR picture
- Trade visualized before it set up
- At peace at entry — no rushing, no FOMO
- SL and TP defined before entry

ALPHA is auto-detected when 5/6 criteria are checked, only CC is missing, timeframe is 5m, market conditions are not Poor, and confirmation conviction is not Low. The alert chip stays persistent until manually dismissed with ✕.

---

## Key Rules

**Economic Calendar**
Avoid being in trades during 2-3 star economic data releases (investing.com/economic-calendar).
Exception: Crude Oil Inventories does not apply when trading indices.

**R:R Minimum**
Never take a trade under 2:1 Risk to Reward. App warns automatically when R:R falls below 2:1.

**Confluence Conflict**
Market in Confluence cannot be selected simultaneously with Poor Market Conditions. App blocks and warns with red flashing bubble.

**One Instrument**
One instrument at a time. No multi-position trading.

**Preparation Rule**
If you were not at your desk when the setup formed, or did not have adequate time to assess, reduce size or wait for the next setup. A rushed entry is not an ALPHA entry.

---

## Top Mistake Patterns (from 570-trade historical dataset)
1. Not in the plan — most common
2. Selling too early — watching P&L instead of price action
3. Over leveraging
4. Double entry / chasing after stop out
5. Execution errors — rushing, wrong contract size
6. Going on tilt — rapid-fire trades after losses (Jan 6 2026: 20 MNQ trades)
7. Late entry — hesitating after a prior loss
8. Not enough size on ALPHA setups
9. Improper planning — missing context before entry

---

## Tilt Detection
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
- [ ] Polygon.io live price feed integration
- [ ] Economic calendar API integration (auto-check before entry)
- [ ] Image upload for chart analysis inside app chat
- [ ] StratCaddi voice and personality refinement
- [ ] Move working folder to Documents for clean GitHub sync

### Planned
- [ ] Capacitor mobile app (iOS + Android)
- [ ] Mean Reversion playbook sub-checklist
- [ ] Break + Retest playbook sub-checklist
- [ ] Dynamic position sizing system expansion
- [ ] NinjaTrader algo trading system (separate project)
- [ ] Private hosting on Netlify or GitHub Pages
- [ ] Daily P&L tracker integration

### Completed
- [x] Core pre-trade checklist with ALPHA scoring (6 criteria)
- [x] Auto position sizing recommendation engine
- [x] Auto-derived Overall Conviction from checklist + market conditions
- [x] Contract calculator with entry/SL/TP price inputs
- [x] Direction-aware SL/TP labels and validation
- [x] R:R calculation with 2:1 minimum warning
- [x] ALPHA setup auto-detection with persistent dismissible chip
- [x] Timeframe conviction cap (1m/2m/3m/15m)
- [x] Market Conditions single-select (Poor/Fair/Ideal)
- [x] Confluence conflict detection — red flash + alert
- [x] Pre-entry preparation checklist (4 points)
- [x] Hold timer with 5m candle countdown and caddy message
- [x] Tilt detection alerts
- [x] Economic calendar reminder chip with dismiss
- [x] Daily loss limit tracker with warnings
- [x] Drag to reorder sections with lock toggle (locked by default)
- [x] Lock/unlock moved into Settings gear
- [x] Light and dark mode
- [x] Settings gear (timezone, time format, dark mode, section lock)
- [x] Voice input
- [x] Micro/Mini toggle with full instrument descriptions
- [x] AI caddy chat powered by Claude Sonnet
- [x] LVR sub-checklist with yellow prompt system
- [x] Account name editable inline
- [x] Electron desktop app — Windows .exe installer built
- [x] Private GitHub repo with version control
- [x] Custom S mark icon

---

## Data Sources
- **Historical trade data:** 570 trades exported from Tradezella (Oct 2024 — Jan 2026)
- **Journal data:** Pre and post session analysis from Tradezella
- **Chart screenshots:** Markup screenshots from TradingView sessions
- **Live journal integration:** Apr 16 2026 MES trade analysis fed directly into app rules
- **AI engine:** Claude Sonnet (Anthropic)

---

## Tech Stack
- HTML / CSS / JavaScript (single file)
- Manrope font (Google Fonts)
- Electron (desktop app — Windows)
- Claude API (Anthropic) for AI caddy chat
- TradingView for charting
- GitHub Desktop for version control
- Planned: Capacitor for mobile, Polygon.io for live data, ForexFactory/TradingEconomics for calendar

---

## Version History

### v1.0.0 — April 16, 2026
Full initial build. Core checklist, auto position sizing, AI chat, contract calculator, alerts system, drag to reorder, light/dark mode, voice input, pre-entry prep checklist, hold timer, Electron desktop app, Windows installer, GitHub repo established.

---

## Commit Workflow
Every update follows this process:
1. Make changes to `index.html` in the GitHub repo folder (Documents\StratCaddi)
2. Open GitHub Desktop
3. Changed files appear automatically
4. Write a commit message describing what changed
5. Commit to main
6. Push origin

---

## Notes
This repository is **private**. Do not make public. Contains proprietary trading rules, position sizing logic, and strategic playbook definitions.

Never commit the Anthropic API key to any file in this repo. Store it locally in your working copy only.

If sharing with collaborators, share read-only access only.
