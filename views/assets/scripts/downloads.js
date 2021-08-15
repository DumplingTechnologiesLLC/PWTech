const handleAccordionClick = (element) => {
  const panel = element.nextElementSibling;
  const toggled = panel.getAttribute('data-toggled');
  if (toggled === 'true') {
    panel.style.maxHeight = '0px';
    panel.style.boxShadow = null;
    panel.style.paddingTop = null;
    panel.style.paddingBottom = null;
    panel.setAttribute('data-toggled', false);
  } else {
    const additionalPadding = 32;
    panel.style.maxHeight = `${panel.scrollHeight + additionalPadding}px`;
    panel.style.boxShadow = '0px 2px 2px 2px rgba(0,0,0, 0.1)';
    panel.style.paddingTop = '1em';
    panel.style.paddingBottom = '1em';
    panel.setAttribute('data-toggled', true);
  }
};
