# ♔ ChessOpenings

A free, offline, open source chess opening trainer for Mac and Windows.

Learn and practice 80+ chess openings — from beginner classics like the Italian Game to advanced lines like the Sicilian Najdorf, plus fun gambits like the Bongcloud. No account, no ads, no internet required.

## Features

- **Learn mode** — step through every move of an opening with plain-language explanations
- **Practice mode** — play the moves yourself on the board; the opponent replies automatically, wrong moves show you which piece punishes them
- **80+ openings** across Beginner, Intermediate, Advanced and Fun categories, each with multiple lines
- **Progress tracking** — completed lines and openings are saved per opening
- **Daily streak** — keep your training habit alive, with a weekly calendar view
- **Favorites, search and filters** — find the opening you want fast
- **Dark and light themes**, subtle sound effects, keyboard shortcuts
- **100% offline** — everything runs locally, nothing is ever sent anywhere

## Download

Grab the installer for your system from the [Releases](../../releases) page:

| System | File |
|---|---|
| Mac with Apple chip (M1 or newer) | `ChessOpenings-x.x.x-Mac-AppleSilicon.dmg` |
| Mac with Intel chip | `ChessOpenings-x.x.x-Mac-Intel.dmg` |
| Windows | `ChessOpenings-x.x.x-Windows-Setup.exe` |

**First launch note:** this app is free and unsigned (code-signing certificates cost money), so your system will warn you once:

- **Mac:** right-click the app → **Open** → **Open**. Only needed the first time.
- **Windows:** if SmartScreen appears, click **More info** → **Run anyway**.

## Run from source

Requires [Node.js](https://nodejs.org) 18+.

```bash
git clone https://github.com/PrimeWaypoint/chess-openings.git
cd chess-openings
npm install
npm start
```

Build the installers yourself:

```bash
npm run build        # Mac + Windows
npm run build:mac    # Mac only (Apple Silicon + Intel DMGs)
npm run build:win    # Windows only (x64 installer)
```

## Tech

Plain HTML/CSS/JavaScript in an [Electron](https://www.electronjs.org) shell, with [chess.js](https://github.com/jhlywa/chess.js) for move validation and [chessboard.js](https://chessboardjs.com) for the board. No frameworks, no build step for the UI.

## License

[GPL-3.0](LICENSE) — free to use, study, modify and share. Any derivative work must remain open source under the same license.

Created by **PrimeWaypoint**.
