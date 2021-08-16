const toggleNavbar = () => {
  const navbarBackdrop = document.getElementById('navbarBackdrop');
  const collapsedNavbar = document.getElementById('collapsedNavbar');
  const navbarClassList = [ ...collapsedNavbar.classList ];
  if (navbarClassList.some((cls) => cls.includes('--opened'))) {
    // navbar is currently opened, we need to close it.
    document.body.style.overflowY = null;
    document.body.style.paddingRight = null;
    let openClass = navbarClassList.find((cls) => cls.includes('--opened'))
    collapsedNavbar.classList.remove(openClass)
    openClass = [...navbarBackdrop.classList].find((cls) => cls.includes('--opened'))
    navbarBackdrop.classList.remove(openClass)
    setTimeout(() => {
      collapsedNavbar.style.display = 'none';
      navbarBackdrop.style.display = 'none';
    }, 300); // navbar animations take 300 ms, so we want then set display to none to hide it again.
  } else {
    // navbar is currently closed, we need to open it
    document.body.style.overflowY = 'hidden';
    const manualAdjustment = 18;
    const scrollbarWidth = window.innerWidth - document.documentElement.offsetWidth + manualAdjustment;

    // the scrollbar disappearing causes a layout shift. This stops that.
    document.body.style.paddingRight = `${scrollbarWidth}px`;  
    collapsedNavbar.style.display = 'block';
    navbarBackdrop.style.display = 'block';
    setTimeout(() => {
      collapsedNavbar.classList.add(`${collapsedNavbar.classList[0]}--opened`);
      navbarBackdrop.classList.add(`${navbarBackdrop.classList[0]}--opened`);
    }, 10);
  }
}