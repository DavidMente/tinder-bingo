const THATS_A_BINGO_SELECTOR = '#bingo-image';
const NAVBAR_SELECTOR = '.desktopNavbar';
const ASIDE_SELECTOR = 'aside';
const MAIN_SELECTOR = 'main';
const NOPE_SELECTOR = 'div.recsCardboard__cardsContainer > div:nth-child(2) > div:nth-child(2) button';
const YISS_SELECTOR = 'div.recsCardboard__cardsContainer > div:nth-child(2) > div:nth-child(4) button';
const PROFILE_TEXT_SELECTOR = 'div.recCard.active div.BreakWord';
const NAME_SELECTOR = 'div.recCard.active div.Ell span';
const AGE_SELECTOR = 'div.recCard.active span:nth-child(2)';
const DISTANCE_SELECTOR = 'div.recCard.active > div > div > div > div > div > div > div:nth-child(2)';

export function setupDom(callback) {
  waitForElement(NAVBAR_SELECTOR, () => {
    createControlSection();
    hideSidebar();
    makeTextSelectable();
    changeOverflow();
    callback();
  });
}

function waitForElement(selector, callback) {
  const interval = setInterval(() => {
    const element = document.querySelector(selector);
    if (element !== null) {
      callback();
      clearInterval(interval);
    }
  }, 100);
}

function createControlSection() {
  const controls = document.createElement('div');
  controls.id = 'bingo-controls';
  document.querySelector(ASIDE_SELECTOR).appendChild(controls);
  document.querySelector(ASIDE_SELECTOR).style.flexBasis = '75%';
  document.querySelector(ASIDE_SELECTOR).style.maxWidth = '1000px';
}

function makeTextSelectable() {
  document.querySelector('html').style.userSelect = 'auto';
  document.querySelector('html').style['-webkit-user-select'] = 'auto';
  document.querySelector('body').style.userSelect = 'auto';
  document.querySelector('body').style['-webkit-user-select'] = 'auto';
}

function changeOverflow() {
  document.querySelector(MAIN_SELECTOR).style.overflow = 'hidden';
  document.querySelector('.desktop--recs').style.overflow = 'auto';
  document.querySelector('body').style.userSelect = 'auto';
}

function hideSidebar() {
  document.querySelector('nav').style.display = 'none';
  document.querySelector(NAVBAR_SELECTOR).style.display = 'none';
}

export function getProfile() {
  const name = getProfileName();
  const profileText = getProfileText();
  const age = getProfileAge();
  return {name: name, age: age, description: profileText, processed: false};
}

function getProfileName() {
  return getTextContentIfExists(NAME_SELECTOR);
}

function getProfileAge() {
  return getTextContentIfExists(AGE_SELECTOR);
}

function getProfileText() {
  return getTextContentIfExists(PROFILE_TEXT_SELECTOR);
}

function getTextContentIfExists(selector) {
  const element = document.querySelector(selector);
  return element !== null ? element.textContent : null;
}

export function nope() {
  document.querySelector(NOPE_SELECTOR).click();
}

export function yiss() {
  document.querySelector(YISS_SELECTOR).click();
}

export function thatsABingo() {
  const audio = new Audio(chrome.runtime.getURL('bingo.mp3'));
  audio.play();
  document.querySelector(THATS_A_BINGO_SELECTOR).style.display = 'block';
  setTimeout(() => {
    document.querySelector(THATS_A_BINGO_SELECTOR).style.display = 'none';
  }, 8000);
}
