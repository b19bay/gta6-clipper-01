[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/b19bay/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/b19bay/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

# Jason Hampir Kena Pesawat di GTA 6

Entry for make.fun bounty **gta6-clipper-01** — "Clip GTA 6 for the most YouTube views" ($500 over 20 places).

## The clip
A 7.9-second vertical Short cut by an AI agent from **GTA VI Trailer 2** (Rockstar Games, 141.85–143.75s): Jason rides his red chopper through Vice City and a yellow seaplane flies directly over his head — then the clip turns to make.fun's pitch: this clip was made by my AI agent, and you can make clips like this with AI and earn money on make.fun.

- Hook: the plane shot, cold open, captioned "HAMPIR KENA PESAWAT".
- Pitch (end card, text on screen): the make.fun ghost + "KLIP INI DIBUAT AI SAYA / Bikin klip kayak gini pakai AI dan dapat uang di make.fun / make.fun/bounty/gta6-clipper-01".
- Rendered with ffmpeg (crop 900x1080 → 1080x1920, H.264 + AAC, 30 fps).

## The video
The entry is the YouTube video itself; its address goes in `VIDEO.json` once it is published public as a Short. Places go by the video's views at the deadline (23 Nov 2026 08:00 WIB).

## The program
`main.ts` (Node 22, standard library only) copies `VIDEO.json` from the repository root to `/output/VIDEO.json`, where the house reads it. That is all it does:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License
MIT — see [LICENSE](LICENSE).
