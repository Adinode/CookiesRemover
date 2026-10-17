let keysPressed = {};
let zapperMode = false;
let hoveredElement = null;

window.addEventListener('message', (event) => {
  if (event.data === 'EXECUTE_NUKE') nukeCookiePopups();
  if (event.data === 'EXECUTE_KILL_ALL') killAllOverlays();
});

document.addEventListener('keydown', (e) => {
  keysPressed[e.key.toLowerCase()] = true;

  if (e.altKey && keysPressed['c'] && keysPressed['r']) {
    e.preventDefault();
    if (window !== window.top) window.top.postMessage('EXECUTE_NUKE', '*');
    else nukeCookiePopups();
    keysPressed['c'] = false;
    keysPressed['r'] = false;
  }

  if (e.altKey && keysPressed['k']) {
    e.preventDefault();
    if (window !== window.top) window.top.postMessage('EXECUTE_KILL_ALL', '*');
    else killAllOverlays();
    keysPressed['k'] = false;
  }

  if (e.altKey && keysPressed['x']) {
    zapperMode = !zapperMode;
    document.body.style.cursor = zapperMode ? 'crosshair' : 'default';
    keysPressed['x'] = false;
  }
});

document.addEventListener('keyup', (e) => {
  keysPressed[e.key.toLowerCase()] = false;
});

// ZAPPER MODE LOGIC
document.addEventListener('mouseover', (e) => {
  if (!zapperMode) return;
  e.stopPropagation();
  hoveredElement = e.target;
  hoveredElement.style.outline = '3px solid red';
  hoveredElement.style.outlineOffset = '-3px';
});

document.addEventListener('mouseout', (e) => {
  if (!zapperMode) return;
  if (hoveredElement) hoveredElement.style.outline = '';
});

document.addEventListener('click', (e) => {
  if (!zapperMode) return;
  
  e.preventDefault();
  e.stopPropagation();

  let target = e.target;
  target.style.outline = ''; 

  let current = target;
  let elementToDestroy = target;
  
  while (current && current !== document.body && current !== document.documentElement) {
    const style = window.getComputedStyle(current);
    if (style.position === 'fixed' || style.position === 'absolute') {
      elementToDestroy = current;
      break; 
    }
    current = current.parentElement;
  }

  elementToDestroy.remove(); 
  forceUnlockScroll();

  zapperMode = false;
  document.body.style.cursor = 'default';
}, true);

// AUTO NUKE LOGIC
function nukeCookiePopups() {
  const selectors = [
    'iframe[id^="sp_message"]', 'iframe[title*="consent" i]', 'div[id^="sp_message_container"]',
    '#onetrust-consent-sdk', '#CybotCookiebotDialog', '#didomi-host', '#usercentrics-root',    
    '#cookie-notice', '.cookie-banner', '.cc-window', '[id*="cookie" i]', '[class*="cookie" i]',   
    '[id*="consent" i]', '[class*="consent" i]', '#pandectes-core', '#tinycookie-root', 'cookie-banner'
  ];

  function destroyInNode(node) {
    const elements = node.querySelectorAll(selectors.join(', '));
    elements.forEach(el => {
      const style = window.getComputedStyle(el);
      if (style.position === 'fixed' || style.position === 'absolute' || style.position === 'sticky' || el.tagName === 'IFRAME') {
        el.remove();
      }
    });

    const backdrops = node.querySelectorAll('div[class*="backdrop" i], div[class*="overlay" i], div[id*="backdrop" i], div[id*="overlay" i]');
    backdrops.forEach(el => {
      const style = window.getComputedStyle(el);
      if (style.position === 'fixed' || style.position === 'absolute') el.remove();
    });

    const triggerWords = ['accept all', 'accept cookies', 'allow cookies', 'got it', 'i agree', 'allow all', 'reject all', 'customize'];
    const clickables = node.querySelectorAll('button, a, [role="button"]');
    
    clickables.forEach(btn => {
      const text = (btn.innerText || btn.textContent).toLowerCase().trim();
      const isTrigger = triggerWords.some(word => text === word || text.includes(word));

      if (isTrigger) {
        let current = btn;
        let wrapper = null;

        while (current && current !== document.body && current !== document.documentElement) {
          const style = window.getComputedStyle(current);
          if (style.position === 'fixed' || style.position === 'absolute' || style.position === 'sticky' || parseInt(style.zIndex, 10) > 50) {
            wrapper = current;
          }
          current = current.parentElement;
        }

        if (wrapper) wrapper.remove();
      }
    });

    const allChildren = node.querySelectorAll('*');
    allChildren.forEach(child => {
      if (child.shadowRoot) destroyInNode(child.shadowRoot); 
    });
  }

  destroyInNode(document);
  forceUnlockScroll();
}

function killAllOverlays() {
  function destroyFixed(node) {
    const allElements = node.querySelectorAll('*');
    allElements.forEach(el => {
      const style = window.getComputedStyle(el);
      if (style.position === 'fixed') {
        const zIndex = parseInt(style.zIndex, 10);
        if (zIndex > 10 || (style.width === '100vw' && style.height === '100vh') || style.inset === '0px') el.remove();
      }
      if (el.shadowRoot) destroyFixed(el.shadowRoot);
    });
  }
  
  destroyFixed(document);
  forceUnlockScroll();
}

function forceUnlockScroll() {
  document.documentElement.classList.add('nuked-scroll-lock');
}

// MUTATION OBSERVER
const scrollObserver = new MutationObserver(() => {
  const root = document.documentElement;
  const body = document.body;
  
  if (!root || !body) return;

  const rootStyle = window.getComputedStyle(root);
  const bodyStyle = window.getComputedStyle(body);
  
  const isLocked = rootStyle.overflow === 'hidden' || bodyStyle.overflow === 'hidden' || rootStyle.position === 'fixed' || bodyStyle.position === 'fixed';
  
  if (isLocked) {
    forceUnlockScroll();
  }
});

scrollObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['style', 'class'] });
scrollObserver.observe(document.body, { attributes: true, attributeFilter: ['style', 'class'] });