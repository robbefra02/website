// MENU - on phones the menu is a sideways-scrolling strip. If you're on "Herstellingen",
// that item may be off-screen to the right. This scrolls the strip so the active item is in view.
// Without JavaScript nothing breaks: the strip just starts at the beginning.

(function () {
  const nav = document.querySelector('.site-nav');
  const active = nav && nav.querySelector('[aria-current]'); // the menu item of the page/section you're on
  if (!active) return;

  // Only needed when the strip actually overflows (phones, small tablets)
  if (nav.scrollWidth <= nav.clientWidth) return;

  // Put the active item in the middle of the strip: its left position, minus half the leftover space
  nav.scrollLeft = active.offsetLeft - (nav.clientWidth - active.offsetWidth) / 2;
})();
