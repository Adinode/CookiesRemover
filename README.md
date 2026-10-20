# Alt-C-R Cookie Nuker

A lightweight, no-nonsense Chrome extension that wipes out annoying cookie banners, destroys marketing overlays, and instantly restores broken scrollbars using simple keyboard shortcuts.

Built without external tracking, libraries, or bloat. It stays completely inactive until you press a shortcut.

---

## What It Does

Most websites freeze your screen with consent banners and newsletter popups. Even if you hide them, they often lock the page so you cannot scroll. 

This extension fixes that instantly:
* Targets modern cookie platforms (OneTrust, Cookiebot, Didomi, Shopify consent apps, and custom banners).
* Pierces through Shadow DOM boundaries and cross-origin iframes.
* Destroys hidden backdrop overlays blocking your mouse clicks.
* Forcefully unlocks the page scrollbar.
* Runs a temporary two second watchdog to crush delayed popups, then shuts down completely to prevent browser freezing.

---

## Keyboard Shortcuts

### 1. Alt + C + R (Smart Auto-Nuke)
The primary weapon. Press this combination on any website to scan for cookie popups, accept buttons, and consent banners. It deletes the banner and instantly restores your ability to scroll.

### 2. Alt + X (Sniper Zapper)
For stubborn elements that escape automatic detection:
1. Press `Alt + X`. Your cursor turns into a red crosshair.
2. Hover over the annoying element until it highlights in red.
3. Click it. The script climbs the page tree, deletes the element along with its invisible background wrapper, and unlocks the page.

### 3. Alt + K (The Nuclear Button)
For aggressive full-page promotional modals and discount popups. This ignores element names entirely and deletes any full-screen overlay fixed to your viewport.

---

## Tech Stack

* **Manifest V3:** Fully compliant with modern Chrome extension standards.
* **Vanilla JavaScript:** Zero external dependencies, fast execution, zero telemetry.
* **Dedicated CSS Injection:** Bypasses aggressive Content Security Policies to force open frozen scrollbars.

---

## How to Install (Takes 30 Seconds)

Because this tool is shared directly from GitHub and not the Chrome Web Store, you load it manually:

1. Click the green **Code** button at the top of this repository and select **Download ZIP** (or clone the repository).
2. Extract the downloaded folder on your computer.
3. Open Google Chrome and type `chrome://extensions/` in the address bar.
4. Toggle on **Developer mode** in the top-right corner.
5. Click **Load unpacked** in the top-left corner.
6. Select the folder containing `manifest.json`, `content.js`, `nuke.css`, and `logo.png`.

The extension is now live. Open any website, test the shortcuts, and browse without popups.
