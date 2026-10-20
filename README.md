# Alt-C-R Cookie Nuker

A lightweight, zero-dependency Chrome extension that destroys stubborn cookie walls, marketing popups, and scroll locks on demand.

## Shortcuts

* **Alt + C + R (Auto-Nuke):** Scans the regular DOM, Shadow DOM, and iframes. Targets known consent managers and button text like "Accept all" to delete the banner instantly.
* **Alt + K (Nuclear Option):** Wipes all fixed, high z-index overlays blocking the screen, regardless of random classes or IDs.
* **Alt + X (Smart Zapper):** Turns the cursor into a crosshair with a red hover box. Click any stubborn element to delete it and its underlying fixed container.

## How It Works

* **Guaranteed Scroll Unlock:** Forces `overflow: auto !important` through an isolated Manifest V3 stylesheet so sites cannot freeze your page.
* **2-Second Watchdog:** Runs an observer for exactly 2 seconds after triggering to crush delayed scripts, then fully disconnects. No CPU drain. No infinite loops. No freezing on complex web apps.

## Tech Stack

* Vanilla JavaScript (ES6+)
* CSS3
* Chrome Extensions Manifest V3

## Installation

1. Clone or download this repository to a folder on your machine.
2. Confirm `manifest.json`, `content.js`, `nuke.css`, and `logo.png` are in the same directory.
3. Open Chrome and go to `chrome://extensions/`.
4. Turn on **Developer mode** using the toggle in the top-right corner.
5. Click **Load unpacked** in the top-left corner.
6. Select your extension folder.

Hit **Alt + C + R** whenever a banner blocks your screen. Use **Alt + K** or **Alt + X** if a non-standard marketing modal ignores the primary command.
