# ♔ ChessOpenings

A free, offline, open source chess opening trainer for Mac and Windows.

Learn and practice 80+ chess openings — from beginner classics like the Italian Game to advanced lines like the Sicilian Najdorf, plus fun gambits like the Bongcloud. No account, no ads, no internet required.

## Features

- **Learn mode** — step through every move of an opening with plain-language explanations
- **Practice mode** — play the moves yourself on the board; the opponent replies automatically, wrong moves show you which piece punishes them
- **Daily Review** — a 5-question daily quiz on openings you've already learned, with accuracy tracking
- **Statistics page** — activity heatmap, accuracy over time, most-trained openings and progress by difficulty
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

### ⚠️ First launch — please read

This app is **free and unsigned** (Apple/Microsoft code-signing certificates cost money), so your system blocks it once, the first time. The app is safe — here is how to open it:

**🍎 Mac**

1. Move **ChessOpenings** to your Applications folder.
2. **Right-click** the app → **Open** → **Open**. (Right-click, *not* double-click.)

If macOS still says **"ChessOpenings is damaged and can't be opened"**, that is just the download being flagged — it is not actually damaged. Open the **Terminal** app and paste this one line, then press Enter:

```bash
xattr -cr "/Applications/ChessOpenings.app"
```

Now open the app normally. You only ever need to do this once.

**🪟 Windows**

If a blue **"Windows protected your PC"** screen appears, click **More info** → **Run anyway**. Only needed the first time.

## Run from source

Requires [Node.js](https://nodejs.org) 18+.

```bash
git clone https://github.com/primewaypoint/chess-openings.git
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

## Found a bug? Have an idea?

All feedback is welcome — from crashes and visual glitches to new openings or feature requests.

👉 **[Open an issue](https://github.com/primewaypoint/chess-openings/issues/new/choose)** — takes 30 seconds, no account needed beyond a free GitHub login.

Not sure if something is a bug or intentional? Open an issue anyway — there are no silly questions.

## License

[GPL-3.0](LICENSE) — free to use, study, modify and share. Any derivative work must remain open source under the same license.

Created by **primewaypoint**.
