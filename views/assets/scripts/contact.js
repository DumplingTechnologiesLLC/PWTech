(() => {
  const STATE_REP_SELECT = 'stateSelect';
  const PROVINCE_REP_SELECT = 'provinceSelect';
  const LOCAL_REP_COUNTRY_SELECT = 'countrySelect';
  const OPEN_CONTACT_FORM_ELEMENTS = 'button[data-contact="true"],a[data-contact="true"]';
  const CLOSE_CONTACT_FORM_ELEMENTS = '*[data-contact="false"]';
  const REP_DATA_SECTION = 'repSection';
  const DEFAULT_STATE = 'Alabama';
  const PARAGRAPH_CLASS = 'contactModal__paragraph';
  const BUTTON_CLASS = 'button button--primary button--block';
  const MODAL_CONTAINER = 'modalContainer';
  const MODAL = 'modal';
  const CLOSE_MODAL_CLASS = 'contactModal--closed';
  const REPS_FORM = 'localRepsForm';
  const CONTACT_FORM = 'directContact';
  const TOGGLE_TO_DIRECT_BUTTON = 'toggleToDirect';
  const TOGGLE_TO_REPS_BUTTON = 'toggleToReps';
  const RESET_FORM_BUTTON = 'clearForm';
  const DIRECT_CONTACT_COUNTRY_SELECT = 'country';
  const DIRECT_CONTACT_STATE_SELECTS_AREA = 'stateArea';
  const UNITED_STATES_VERBOSE = 'United States of America';
  const CANADA_VERBOSE = 'Canada';
  const DIRECT_CONTACT_STATE_SELECT = 'state';
  const DIRECT_CONTACT_PROVINCE_SELECT = 'province';

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
    const { value } = document.getElementById(LOCAL_REP_COUNTRY_SELECT) ?? window.USA;
    let stateOrProvince;
    resetRepData();
    switch (value) {
      case window.USA:
        stateOrProvince = document.getElementById(STATE_REP_SELECT).value ?? DEFAULT_STATE;
        toggleVisibility(STATE_REP_SELECT, 'block');
        toggleVisibility(PROVINCE_REP_SELECT, 'none');
        updateRepData(value, stateOrProvince);
        break;
      case window.CAN:
        stateOrProvince = document.getElementById(PROVINCE_REP_SELECT).value;
        toggleVisibility(STATE_REP_SELECT, 'none');
        toggleVisibility(PROVINCE_REP_SELECT, 'block');
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
   * @function toggleDirectState
   * @listens onchange of #country
   * Toggles the selects for state or province if the user selects US or CAN
   */
  const toggleDirectState = () => {
    const { value } = document.getElementById(DIRECT_CONTACT_COUNTRY_SELECT);
    switch (value) {
      case UNITED_STATES_VERBOSE:
        document.getElementById(DIRECT_CONTACT_STATE_SELECTS_AREA).style.display = 'block';
        document.getElementById(labelSelecter(DIRECT_CONTACT_STATE_SELECT)).style.display = 'block';
        document.getElementById(DIRECT_CONTACT_STATE_SELECT).style.display = 'block';
        document.getElementById(labelSelecter(DIRECT_CONTACT_PROVINCE_SELECT)).style.display = 'none';
        document.getElementById(DIRECT_CONTACT_PROVINCE_SELECT).style.display = 'none';
        break;
      case CANADA_VERBOSE:
        document.getElementById(DIRECT_CONTACT_STATE_SELECTS_AREA).style.display = 'block';
        document.getElementById(labelSelecter(DIRECT_CONTACT_STATE_SELECT)).style.display = 'none';
        document.getElementById(DIRECT_CONTACT_STATE_SELECT).style.display = 'none';
        document.getElementById(labelSelecter(DIRECT_CONTACT_PROVINCE_SELECT)).style.display = 'block';
        document.getElementById(DIRECT_CONTACT_PROVINCE_SELECT).style.display = 'block';
        break;
      default:
        document.getElementById(labelSelecter(DIRECT_CONTACT_STATE_SELECT)).style.display = 'block';
        document.getElementById(DIRECT_CONTACT_STATE_SELECT).style.display = 'block';
        document.getElementById(labelSelecter(DIRECT_CONTACT_PROVINCE_SELECT)).style.display = 'none';
        document.getElementById(DIRECT_CONTACT_PROVINCE_SELECT).style.display = 'none';
        document.getElementById(DIRECT_CONTACT_STATE_SELECTS_AREA).style.display = 'none';
    }
  };

  /**
   * @function resetDirectForm
   * @listens onclick of reset button
   * Resets the contact form to original state
   */
  const resetDirectForm = () => {
    const inputEls = document.querySelectorAll('.directContact input,.directContact select,.directContact textarea');
    inputEls.forEach((el) => {
      /**
       * Disabled because we want to modify the HTML element
       */
      /* eslint-disable no-param-reassign */
      switch (el.nodeName) {
        case 'TEXTAREA':
        case 'INPUT':
          if (el.getAttribute('type') === 'checkbox') {
            el.checked = false;
          } else {
            el.value = '';
          }
          break;
        case 'SELECT':
          el.selectedIndex = 0;
          break;
        default:
          el.value = '';
          break;
      }
    });
    toggleDirectState();
  };

  /**
   * @function openDirectForm
   * @see handleRepSelect
   * @see toggleDirectState
   * @listens onclick of switch button
   * Switches modal content to the direct contact form
   */
  const openDirectForm = () => {
    document.getElementById(LOCAL_REP_COUNTRY_SELECT).removeEventListener('change', handleRepSelect);
    document.getElementById(STATE_REP_SELECT).removeEventListener('change', handleRepSelect);
    document.getElementById(PROVINCE_REP_SELECT).removeEventListener('change', handleRepSelect);
    document.getElementById(DIRECT_CONTACT_COUNTRY_SELECT).addEventListener('change', toggleDirectState);
    document.getElementById(REPS_FORM).style.display = 'none';
    document.getElementById(CONTACT_FORM).style.display = 'block';
    toggleDirectState();
  };

  /**
   * @function openLocalReps
   * @see openDirectForm
   * @see handleRepSelect
   * Switches modal content to the local reps form
   */
  const openLocalReps = () => {
    document.getElementById(REPS_FORM).style.display = 'block';
    document.getElementById(CONTACT_FORM).style.display = 'none';
    document.getElementById(TOGGLE_TO_DIRECT_BUTTON).addEventListener('click', openDirectForm);
    document.getElementById(LOCAL_REP_COUNTRY_SELECT).addEventListener('change', handleRepSelect);
    document.getElementById(STATE_REP_SELECT).addEventListener('change', handleRepSelect);
    document.getElementById(PROVINCE_REP_SELECT).addEventListener('change', handleRepSelect);
    handleRepSelect();
  };

  /**
   * @function openContactForm
   * @see openDirectForm
   * @see focusFirstModalElement
   * @see openLocalReps
   * @see captureModalFocus
   * @listens onclick of data-contact="true" elements
   * Opens the contact modal and captures keyboard focus
   */
  const openContactForm = () => {
    document.addEventListener('keydown', captureModalFocus);
    document.getElementById(TOGGLE_TO_REPS_BUTTON).addEventListener('click', openLocalReps);
    document.getElementById(RESET_FORM_BUTTON).addEventListener('click', resetDirectForm);
    openDirectForm();

    const modal = document.getElementById(MODAL);
    document.getElementById(MODAL_CONTAINER).style.display = 'flex';
    setTimeout(() => {
      modal.classList.remove(CLOSE_MODAL_CLASS);
      focusFirstModalElement();
    }, 10); // wait for the element to come in
  };

  /**
   * @function closeContactForm
   * @see captureModalFocus
   * @see resetDirectForm
   * @see toggleDirectState
   * @listens onclick of data-contact="false" elements
   * Closes the contact modal and releases keyboard focus
   */
  const closeContactForm = () => {
    openDirectForm();
    resetDirectForm();

    document.removeEventListener('keydown', captureModalFocus);
    document.getElementById(DIRECT_CONTACT_COUNTRY_SELECT).removeEventListener('change', toggleDirectState);
    document.getElementById(RESET_FORM_BUTTON).removeEventListener('click', resetDirectForm);
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
