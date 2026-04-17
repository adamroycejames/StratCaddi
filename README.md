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
- **Voice Transcription:** OpenAI Whisper (planned)
- **Charting:** TradingView

---

## What It Does

- **Pre-trade checklist** — evaluates ALPHA criteria in real time, scores setup 0-6
- **Auto position sizing** — recommends exact dollar risk based on market conditions, timeframe, and confirmation conviction
- **Contract calculator** — takes entry, SL, and TP prices and calculates contracts, trade risk, potential profit, and R:R ratio
- **Direction-aware SL/TP** — labels and validates based on long or short direction
- **ALPHA detection** — auto-identifies when a setup is approaching ALPHA status
- **Pre-entry preparation check** — 4-point checklist before entry
- **Hold timer** — counts down to first 5m candle close, fires caddy message at close
- **Tilt detection** — monitors trade count and warns when tilt risk is elevated
- **AI caddy chat** — powered by Claude AI, knows full trading plan and mistake patterns
- **Chart screenshot upload** — upload via 📎 button or Ctrl+V paste directly into chat
- **Voice input** — hold-to-lock mic feature (Whisper integration pending)
- **Caddy voice output** — StratCaddi speaks responses aloud (voice selector in settings)
- **Drag to reorder** — customize checklist panel layout, locked by default
- **Light and dark mode** — with timezone and time format in settings gear
- **Alerts banner** — real-time warnings for conflicts, R:R, daily limits, calendar, ALPHA, prep, tilt
- **Secure API key management** — API key loaded from .env file, never stored in code or GitHub

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
On 1m, 2m, 3m, and 15m timeframes conviction drops one tier automatically. Max Risk On = $300. DO NOT TRADE fires if result is too low after capping.

### Overall Conviction (Auto-Calculated)
| Condition | Conviction |
|---|---|
| 6/6 + IDEAL market | High |
| 5/6 or FAIR market | Standard |
| 4/6 or below or POOR market | Low |

---

## ALPHA Criteria (Risk On Requirements)
1. 1HR / 4HR Structure Clear
2. BOS or KLMV
3. Market in Confluence
4. Trend (3+ Candles)
5. Strong Vol Above 50MA
6. Confirmation Candle

---

## Pre-Entry Preparation Checklist
Added April 16, 2026 — based on live trade journal. Incomplete preparation is the #1 trigger for early exits.

1. I was at my desk when this set up
2. I had adequate time to assess before entry
3. SL and TP defined before entry
4. I am at peace — not rushed, not FOMO

---

## Hold Timer Rule
Added April 16, 2026 — based on live trade journal.

- ▶ ENTER at entry — counts up to first 5m candle close
- At 5 minutes caddy fires: evaluate now, only act if something materially changed
- ■ EXIT when out — resets timer
- No trimming, exiting, or adjusting within first 5 minutes unless SL is hit

---

## Playbooks

### Low Volume Retest (LVR) — Primary Setup
Always with trend, never counter-trend.
1. Clean Break — rising vol above 50MA
2. With the Trend
3. Low Vol Pullback to Level
4. Pinbar / Doji + Vol Pickup

Applies across: 1m, 2m, 3m, 5m, 15m

### Mean Reversion
Macro supply/demand, decreasing vol into level, strong CC.

### Break + Retest (1HR+)
Structure break, clean retest, continuation with trend.

---

## ALPHA Setup Definition
- LVR or Break + Retest at macro level on watch for multiple sessions
- Full confluence across all correlated instruments
- Pre-planned before the session
- IDEAL market conditions, clear 4HR picture
- Trade visualized before it set up
- At peace at entry — no rushing, no FOMO
- SL and TP defined before entry

Auto-detected when 5/6 criteria checked, only CC missing, TF=5m, MC not Poor, CC not Low. Chip stays persistent until dismissed with ✕.

---

## Key Rules

**Economic Calendar** — Avoid 2-3★ events (investing.com/economic-calendar). Exception: Crude Oil Inventories doesn't apply to index trades.

**R:R Minimum** — Never take a trade under 2:1. App warns automatically.

**Confluence Conflict** — Market in Confluence cannot be selected with Poor Market Conditions. Red flash + alert.

**One Instrument** — One at a time. No multi-position trading.

**Preparation Rule** — Not at desk when setup formed = reduce size or wait. A rushed entry is not an ALPHA entry.

---

## Top Mistake Patterns (570-trade historical dataset)
1. Not in the plan
2. Selling too early
3. Over leveraging
4. Double entry / chasing
5. Execution errors
6. Going on tilt (Jan 6 2026: 20 MNQ trades)
7. Late entry after loss
8. Not enough size on ALPHA setups
9. Improper planning

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

### Immediate Next Session
- [ ] Wire in OpenAI Whisper for voice transcription
- [ ] Test hold-to-lock mic feature end to end
- [ ] Test caddy voice output with voice selector
- [ ] Rebuild .exe installer with all latest changes
- [ ] Commit all latest files to GitHub

### In Progress
- [ ] Polygon.io or NinjaTrader live price feed
- [ ] Economic calendar API auto-check
- [ ] NinjaTrader C# algo trading system (separate project)

### Planned
- [ ] Capacitor mobile app (iOS + Android)
- [ ] Mean Reversion playbook sub-checklist
- [ ] Break + Retest playbook sub-checklist
- [ ] Dynamic position sizing expansion
- [ ] Daily P&L auto-pull from Tradovate
- [ ] Private hosting on Netlify or GitHub Pages

### Completed
- [x] Core pre-trade checklist with ALPHA scoring (6 criteria)
- [x] Auto position sizing + auto-derived Overall Conviction
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
- [x] Settings gear (timezone, time format, dark mode, section lock, voice selector)
- [x] Chart screenshot upload via 📎 button
- [x] Ctrl+V paste image directly into chat
- [x] Caddy voice output with voice selector and speed control
- [x] Hold-to-lock mic architecture (pending Whisper integration)
- [x] Micro/Mini toggle with full instrument descriptions
- [x] AI caddy chat powered by Claude Sonnet
- [x] LVR sub-checklist with yellow prompt system
- [x] Account name editable inline
- [x] Electron desktop app — Windows .exe installer
- [x] .env file for secure API key management
- [x] preload.js for secure key injection via IPC
- [x] Private GitHub repo with version control
- [x] Custom S mark icon

---

## Environment Setup

### Required files (never commit to GitHub)
```
.env
```

### .env contents
```
ANTHROPIC_API_KEY=sk-ant-your-key-here
OPENAI_API_KEY=sk-your-openai-key-here  (add when Whisper is wired in)
```

### .gitignore contents
```
node_modules/
dist/
.env
```

---

## Project Structure
```
StratCaddi/
  ├── index.html        — full app (checklist, calculator, chat, UI)
  ├── main.js           — Electron main process, permissions, IPC
  ├── preload.js        — secure bridge between main and renderer
  ├── package.json      — project config and dependencies
  ├── package-lock.json — dependency lock file
  ├── icon.ico          — app icon (S mark)
  ├── .gitignore        — excludes node_modules, dist, .env
  ├── README.md         — this file
  └── .env              — API keys (local only, never committed)
```

---

## Tech Stack
- HTML / CSS / JavaScript (single file app)
- Manrope font (Google Fonts)
- Electron (desktop — Windows)
- Claude Sonnet API (Anthropic) — AI caddy chat
- OpenAI Whisper API (planned) — voice transcription
- Web Speech Synthesis API — caddy voice output
- TradingView — charting
- GitHub Desktop — version control
- Planned: Capacitor (mobile), Polygon.io or NinjaTrader (live prices), ForexFactory/TradingEconomics (calendar)

---

## Version History

### v1.1.0 — April 17, 2026
Chart screenshot upload (📎 button + Ctrl+V paste), caddy voice output with voice selector, hold-to-lock mic architecture, .env secure API key management, preload.js IPC bridge, microphone permission fixes.

### v1.0.0 — April 16, 2026
Full initial build. Core checklist, auto position sizing, AI chat, contract calculator, alerts, drag to reorder, light/dark mode, voice input, pre-entry prep checklist, hold timer, Electron desktop app, Windows installer, GitHub repo.

---

## Commit Workflow
1. Make changes to files in `Documents\GitHub\StratCaddi`
2. Open GitHub Desktop
3. Write commit message describing what changed
4. Commit to main → Push origin

Never commit `.env`. Never commit `node_modules` or `dist`.

---

## Notes
**Private repository.** Do not make public. Contains proprietary trading rules, position sizing logic, and playbook definitions.

Never commit API keys. Store in `.env` locally only.
