# 1863 — The Escape (play build)

**[▶ Play in your browser](https://beeem33.github.io/1863-escape-play/)** — desktop (keyboard + mouse) or phone (touch controls, full screen), headphones recommended.

This repo only holds the published build of the game. It is replaced on every release.


## Phone support

`mobile.js` / `mobile.css` add on-screen touch controls and full screen. They only switch on for touch-first devices, so desktop is unchanged. The built bundle carries one small hook (`window.__escapeInput = this` in the input class). **Re-apply these when publishing a new build**, or port them into the source repo.
