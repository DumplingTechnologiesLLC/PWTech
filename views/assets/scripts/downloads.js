
const closePanel = (panel) => {
  panel.style.zIndex = 0;
  panel.style.maxHeight = '0px';
  panel.style.boxShadow = null;
  panel.style.paddingTop = null;
  panel.style.paddingBottom = null;
  panel.style.overflow = null;
  panel.style.marginBottom = null;
  panel.setAttribute('data-toggled', false);
}

const openPanel = (panel) => {
  const additionalPadding = 32;
    const remainingDistanceToBottomOfPage = (
      document.body.scrollHeight - panel.getBoundingClientRect().bottom - additionalPadding
    );
    const scrollHeightWithPadding = panel.scrollHeight + additionalPadding;
    panel.style.zIndex = 1;
    panel.style.maxHeight = `${Math.min(remainingDistanceToBottomOfPage, scrollHeightWithPadding)}px`;
    panel.style.boxShadow = '0px 2px 2px 2px rgba(0,0,0, 0.1)';
    panel.style.paddingTop = '1em';
    panel.style.paddingBottom = '1em';
    panel.style.marginBottom = '4em';
    panel.setAttribute('data-toggled', true);
    setTimeout(() => {
      panel.style.overflow = 'auto';
    }, 200) // equivalent to waiting for the animation of the accordion opening to complete.
}
const handleAccordionClick = (element) => {
  const otherPanels = document.querySelectorAll('div[data-toggled="true"]');
  otherPanels.forEach((panel) => {
    if (!panel.isSameNode(element.nextElementSibling)) {
      // close the other panels
      closePanel(panel);
    }
  })
  const panel = element.nextElementSibling;
  const toggled = panel.getAttribute('data-toggled');
  if (toggled === 'true') {
    closePanel(panel)
  } else {
    openPanel(panel);
  }
};
