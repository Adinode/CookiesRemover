# Alt-C-R Cookie Nuker 🍪💥

A ruthless, zero-dependency Chrome extension built to obliterate cookie consent banners, marketing overlays, and screen-locking pop-ups. 

Unlike standard adblockers that rely on static databases, this extension actively hunts down banners using text heuristics, pierces through Shadow DOMs, crosses iframe boundaries, and uses a Mutation Observer to permanently force-unlock your scrollbar.

## ⚡ Features & Controls

* **`Alt + C + R` : Auto-Nuke**
  Scans the page for common consent frameworks and "Accept All" buttons. Destroys them and unlocks the page scroll.
* **`Alt + X` : Smart Zapper Mode**
  Turns your cursor into a crosshair. Hover over any stubborn element, click it, and the script will automatically climb the DOM tree to destroy the invisible wrapper holding it.
* **`Alt + K` : Kill All Overlays**
  The nuclear option. Ignores names entirely and deletes *any* element fixed to your screen with a high z-index.

## 🛠️ Tech Stack

This extension is built for maximum speed and zero bloat. 
* **Vanilla JavaScript (ES6+)** - Core logic, Shadow DOM traversal, and Mutation Observers.
* **CSS3** - "God-mode" `!important` stylesheets to override website security policies (CSP) and force scroll unlocking.
* **Manifest V3** - Modern Chrome Extension API architecture.

## 🚀 How to Install (Developer Mode)

Since this extension is not on the Chrome Web Store, you will need to install it manually. It takes 10 seconds:

1. **Download the code:** Click the green **"Code"** button at the top of this repository and select **"Download ZIP"**.
2. **Extract the files:** Unzip the downloaded folder somewhere on your computer (like your Documents or Desktop).
3. **Open Extensions page:** Open Chrome and type `chrome://extensions/` into your URL bar and hit Enter.
4. **Enable Developer Mode:** Toggle the **"Developer mode"** switch in the top right corner of the screen.
5. **Load the extension:** Click the **"Load unpacked"** button that appears in the top left. Select the unzipped folder containing the `manifest.json` file.

You're done! Open any website in a new tab (or Incognito mode) and use the shortcuts to take back your screen. 