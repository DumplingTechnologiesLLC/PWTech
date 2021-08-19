/**
 * Disabled because we want to modify an element's appearance so we need to modify the parameter's data
 */
/* eslint-disable no-param-reassign */
(() => {
  /**
   * @function closePanel
   * @param {HTMLElement} panel
   * Closes the accordion panel
   */
  const closePanel = (panel) => {
    panel.style.overflow = 'hidden';
    panel.style.maxHeight = '0px';
    panel.classList.remove(`${panel.classList[0]}--opened`);
    panel.setAttribute('data-toggled', false);
  };

  /**
   * @function openPanel
   * @param {HTMLElement} panel
   * Opens the html panel
   */
  const openPanel = (panel) => {
    // when we open the element, we also add 1em of padding on top and bottom. so we need to add additional padding
    // to max height
    const additionalPadding = 32;
    const scrollHeightWithPadding = panel.scrollHeight + additionalPadding;

    // we use this to prevent the accordion from clipping the bottom of the screen
    const remainingDistanceToBottomOfPage = (
      document.body.scrollHeight - panel.getBoundingClientRect().bottom - additionalPadding
    );

    // we set max height in style so we can transition between them.
    panel.style.maxHeight = `${Math.min(remainingDistanceToBottomOfPage, scrollHeightWithPadding)}px`;

    // the --opened modifier class adds all the necessary styling to open the accordion
    // we need aside from the max height.
    panel.classList.add(`${panel.classList[0]}--opened`);
    panel.setAttribute('data-toggled', true);

    // equivalent to waiting for the animation of the accordion opening to complete.
    // we do this to avoid the hideous expanding scrollbar as the accordion opens
    setTimeout(() => {
      panel.style.overflow = 'auto';
    }, 200);
  };

  /**
   * @function handleAccordionClick
   * @param {HTMLElement} element the element that called this function
   * @listens onclick of accordion toggle buttons
   * Opens or closes the panel, closing all other panels
   */
  function handleAccordionClick() {
    const otherPanels = document.querySelectorAll('div[data-toggled="true"]');
    otherPanels.forEach((panel) => {
      if (!panel.isSameNode(this.nextElementSibling)) {
        // close the other panels
        closePanel(panel);
      }
    });
    const panel = this.nextElementSibling;
    const toggled = panel.getAttribute('data-toggled');
    if (toggled === 'true') {
      closePanel(panel);
    } else {
      openPanel(panel);
    }
  }

  const accordionTogglers = document.querySelectorAll('button[data-accordion="true"]');
  accordionTogglers.forEach((toggler) => {
    toggler.addEventListener('click', handleAccordionClick);
  });
})();
