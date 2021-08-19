(() => {
  const STATE_REP_SELECTOR = 'stateSelect';
  const PROVINCE_REP_SELECTOR = 'provinceSelect';
  const COUNTRY_SELECTOR = 'countrySelect';
  const OPEN_CONTACT_FORM_ELEMENTS = 'button[data-contact="true"],a[data-contact="true"]';
  const CLOSE_CONTACT_FORM_ELEMENTS = '*[data-contact="false"]';
  const REP_DATA_SECTION = 'repSection';
  const DEFAULT_STATE = 'Alabama';
  const PARAGRAPH_CLASS = 'contactModal__paragraph';
  const BUTTON_CLASS = 'button button--primary button--block';
  const MODAL_CONTAINER = 'modalContainer';
  const MODAL = 'modal';
  const CLOSE_MODAL_CLASS = 'contactModal--closed';

  /**
   * @function resetRepData
   * Clears the innerHTML of the #repSection
   */
  const resetRepData = () => {
    const repDataSection = document.getElementById(REP_DATA_SECTION);
    repDataSection.innerHTML = '';
  };

  /**
   * @function labelSelecter
   * @param {String} selecter
   * @returns {String} label selector
   * A label's selecter is the same as the input selecter but suffixed with Label, so this generates that selecter.
   */
  const labelSelecter = (selecter) => `${selecter}Label`;

  /**
   * @function toggleVisibility
   * @param {String} selecter
   * @param {String} state
   * Toggles the visibility of an element with a given selecter by setting style.display to the state param
   */
  const toggleVisibility = (selecter, state) => {
    const elLabel = document.getElementById(labelSelecter(selecter));
    elLabel.style.display = state;
    const el = document.getElementById(selecter);
    el.style.display = state;
  };

  /**
   * @function updateRepData
   * @param {String} country
   * @param {String} stateOrProvince
   * Updates #repSection with the rep information for that country and state/province
   */
  const updateRepData = (country, stateOrProvince) => {
    const repHTMLSection = document.getElementById(REP_DATA_SECTION);
    window.REP_LOOKUP[country][stateOrProvince].forEach((rep) => {
      // reps always have a title
      const title = document.createElement('p');
      title.setAttribute('class', `${PARAGRAPH_CLASS}--sectionTitle`);
      title.textContent = rep.text;
      repHTMLSection.append(title);

      // if rep has a number, we add it
      if (rep.number) {
        const numberLink = document.createElement('a');
        numberLink.setAttribute('class', BUTTON_CLASS);
        numberLink.setAttribute('href', `tel:${rep.number.replace(/[^.\d]/g, '')}`);
        numberLink.textContent = `Give them a call: ${rep.number}`;
        repHTMLSection.append(numberLink);
      }

      // if rep has an email, we add it
      if (rep.email) {
        const emailLink = document.createElement('a');
        emailLink.setAttribute('href', `mailto:${rep.email}`);
        emailLink.setAttribute('target', '_blank');
        emailLink.setAttribute('class', BUTTON_CLASS);
        emailLink.textContent = 'Send them an email';
        repHTMLSection.append(emailLink);
      }
    });
  };

  /**
   * @function handleRepSelect
   * @listens onchange of any select dropdown in contact form
   * @see toggleVisibility
   * @see updateRepData
   * Updates the HTML that displays the rep contact information and updates the rep selection form
   */
  const handleRepSelect = () => {
    const { value } = document.getElementById(COUNTRY_SELECTOR) ?? window.USA;
    let stateOrProvince;
    resetRepData();
    switch (value) {
      case window.USA:
        stateOrProvince = document.getElementById(STATE_REP_SELECTOR).value ?? DEFAULT_STATE;
        toggleVisibility(STATE_REP_SELECTOR, 'block');
        toggleVisibility(PROVINCE_REP_SELECTOR, 'none');
        updateRepData(value, stateOrProvince);
        break;
      case window.CAN:
        stateOrProvince = document.getElementById(PROVINCE_REP_SELECTOR).value;
        toggleVisibility(STATE_REP_SELECTOR, 'none');
        toggleVisibility(PROVINCE_REP_SELECTOR, 'block');
        updateRepData(value, stateOrProvince);
        break;
      default:
        break;
    }
  };

  /**
   * @function focusFirstElement
   * When a modal pops up, screen readers won't detect it as a modal, so we need to pull the user's focus
   * into the modal by focusing the first element.
   */
  const focusFirstModalElement = () => {
    const focusableElements = 'button, [href], a, input, select, textarea, [tabindex]:not([tabindex="-1"])';
    const element = document.getElementById(MODAL);
    const focusableContent = element.querySelectorAll(focusableElements);
    const firstFocusableElement = focusableContent[0];
    if (firstFocusableElement) { firstFocusableElement.focus(); }
  };

  /**
   * @function captureFocus
   * @param {Event} e, the keyboard event
   * @listens window.onkeydown
   * Keeps keyboard focus inside of the modal
   */
  const captureModalFocus = (e) => {
    const focusableElements = 'button, [href], a, input, select, textarea, [tabindex]:not([tabindex="-1"])';
    const element = document.getElementById(MODAL);
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
   * @function openContactForm
   * @listens onclick of data-contact="true" elements
   * Opens the contact modal and captures keyboard focus
   */
  const openContactForm = () => {
    document.getElementById(COUNTRY_SELECTOR).addEventListener('change', handleRepSelect);
    document.getElementById(STATE_REP_SELECTOR).addEventListener('change', handleRepSelect);
    document.getElementById(PROVINCE_REP_SELECTOR).addEventListener('change', handleRepSelect);
    document.addEventListener('keydown', captureModalFocus);
    handleRepSelect();
    const modal = document.getElementById(MODAL);
    document.getElementById(MODAL_CONTAINER).style.display = 'flex';
    setTimeout(() => {
      modal.classList.remove(CLOSE_MODAL_CLASS);
      focusFirstModalElement();
    }, 10); // wait for the element to come in
  };

  /**
   * @function closeContactForm
   * @listens onclick of data-contact="false" elements
   * Clsoes the contact modal and releases keyboard focus
   */
  const closeContactForm = () => {
    document.getElementById(COUNTRY_SELECTOR).removeEventListener('change', handleRepSelect);
    document.getElementById(STATE_REP_SELECTOR).removeEventListener('change', handleRepSelect);
    document.getElementById(PROVINCE_REP_SELECTOR).removeEventListener('change', handleRepSelect);
    document.removeEventListener('keydown', captureModalFocus);
    const modal = document.getElementById(MODAL);
    modal.classList.add(CLOSE_MODAL_CLASS);
    setTimeout(() => {
      document.getElementById(MODAL_CONTAINER).style.display = 'none';
    }, 300); // wait for the animation to conclude
  };

  document.querySelectorAll(OPEN_CONTACT_FORM_ELEMENTS).forEach((toggler) => {
    toggler.addEventListener('click', openContactForm);
  });
  document.querySelectorAll(CLOSE_CONTACT_FORM_ELEMENTS).forEach((toggler) => {
    toggler.addEventListener('click', closeContactForm);
  });
})();
