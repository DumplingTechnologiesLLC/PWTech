const handleAccordionClick = (element) => {
  const panel = element.nextElementSibling;
  const toggled = panel.getAttribute('data-toggled');
  if (toggled === 'true') {
    panel.style.maxHeight = '0px';
    panel.style.boxShadow = null;
    panel.style.paddingTop = null;
    panel.style.paddingBottom = null;
    panel.style.overflow = null;
    panel.style.marginBottom = null;
    panel.setAttribute('data-toggled', false);
  } else {
    const additionalPadding = 32;
    const remainingDistanceToBottomOfPage = window.innerHeight - panel.getBoundingClientRect().bottom - additionalPadding;
    const scrollHeightWithPadding = panel.scrollHeight + additionalPadding;
    panel.style.maxHeight = `${Math.min(remainingDistanceToBottomOfPage, scrollHeightWithPadding)}px`;
    panel.style.boxShadow = '0px 2px 2px 2px rgba(0,0,0, 0.1)';
    panel.style.paddingTop = '1em';
    panel.style.paddingBottom = '1em';
    panel.style.overflow = 'auto';
    panel.style.marginBottom = '4em';
    panel.setAttribute('data-toggled', true);
  }
};
