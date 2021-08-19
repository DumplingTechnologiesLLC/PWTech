const navbarBackdrop = document.getElementById('navbarBackdrop');
const collapsedNavbar = document.getElementById('collapsedNavbar');

/**
   * @function focusFirstElement
   * When a Navbar pops up, screen readers won't detect it as a flaoted navbar, so we need to pull the user's focus
   * into the Navbar by focusing the first element.
   */
const focusFirstNavbarElement = () => {
  const focusableElements = 'button, [href], a, input, select, textarea, [tabindex]:not([tabindex="-1"])';
  const element = collapsedNavbar;
  const focusableContent = element.querySelectorAll(focusableElements);
  const firstFocusableElement = focusableContent[0];
  if (firstFocusableElement) { firstFocusableElement.focus(); }
};

/**
 * @function captureFocus
 * @param {Event} e, the keyboard event
 * @listens window.onkeydown
 * Keeps keyboard focus inside of the Navbar
 */
const captureNavbarFocus = (e) => {
  const focusableElements = 'button, [href], a, input, select, textarea, [tabindex]:not([tabindex="-1"])';
  const element = collapsedNavbar;
  const focusableContent = element.querySelectorAll(focusableElements);
  const firstFocusableElement = focusableContent[0];
  const lastFocusableElement = focusableContent[focusableContent.length - 1];
  const isTabPressed = e.key === 'Tab' || e.keyCode === 9;

  if (isTabPressed) {
    if (e.shiftKey) {
      if (document.activeElement === firstFocusableElement) {
        lastFocusableElement.focus(); // add focus for the last focusable element
        e.preventDefault();
      }
    } else if (document.activeElement === lastFocusableElement) {
      firstFocusableElement.focus(); // add focus for the first focusable element
      e.preventDefault();
    }
  }
};

/**
 * @function openNavbar
 * @see captureNavbarFocus
 * @see focusFirstNavbarElement
 * Opens the navbar and captures focus
 */
const openNavbar = () => {
  document.body.style.overflowY = 'hidden';
  const manualAdjustment = 18;
  const scrollbarWidth = window.innerWidth - document.documentElement.offsetWidth + manualAdjustment;

  // the scrollbar disappearing causes a layout shift. This stops that.
  if (!window.matchMedia('(max-width: 500px)').matches) {
    document.body.style.paddingRight = `${scrollbarWidth}px`; // we don't need the scrollbar adjustment for mobile
  }
  collapsedNavbar.style.display = 'block';
  navbarBackdrop.style.display = 'block';
  setTimeout(() => {
    collapsedNavbar.classList.add(`${collapsedNavbar.classList[0]}--opened`);
    navbarBackdrop.classList.add(`${navbarBackdrop.classList[0]}--opened`);
    document.addEventListener('keydown', captureNavbarFocus);
    focusFirstNavbarElement();
  }, 10);
};

/**
 * @function closeNavbar
 * @param {HTMLClassList} navbarClassList
 * @see captureNavbarFocus
 * closes the Navbar navbar and removes the event listener capturing focus
 */
const closeNavbar = (navbarClassList) => {
  document.body.style.overflowY = null;
  document.body.style.paddingRight = null;
  let openClass = navbarClassList.find((cls) => cls.includes('--opened')) ?? '';
  collapsedNavbar.classList.remove(openClass);
  openClass = [...navbarBackdrop.classList].find((cls) => cls.includes('--opened')) ?? '';
  navbarBackdrop.classList.remove(openClass);
  setTimeout(() => {
    collapsedNavbar.style.display = 'none';
    navbarBackdrop.style.display = 'none';
    document.removeEventListener('keydown', captureNavbarFocus);
  }, 300); // navbar animations take 300 ms, so we want then set display to none to hide it again.
};

/**
 * @function toggleNavbar
 * @see closeNavbar
 * @see openNavbar
 * @listens onclick of navbar toggler
 * Toggles navbar visibility
 */
const toggleNavbar = () => {
  const navbarClassList = [...collapsedNavbar.classList];
  if (navbarClassList.some((cls) => cls.includes('--opened'))) {
    // navbar is currently opened, we need to close it.
    closeNavbar(navbarClassList);
  } else {
    // navbar is currently closed, we need to open it
    openNavbar();
  }
};
