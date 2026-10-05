// THEME TOGGLE - switches between the dark and light theme and remembers the choice.
//
// How it fits together:
// - tokens.css has the colors for both themes. It listens to data-theme="light" / "dark" on <html>.
// - A small script in <head> (_includes/head.html) re-applies a saved choice before the page is drawn.
// - This file makes the button work. Without JavaScript the button stays hidden and the
//   site simply follows the visitor's system setting.

(function () {
  const button = document.getElementById('theme-toggle');
  if (!button) return; // page without a toggle: nothing to do

  const root = document.documentElement; // the <html> element
  const systemLight = window.matchMedia('(prefers-color-scheme: light)'); // the visitor's OS setting

  // Which theme is showing right now? An explicit choice wins, otherwise the OS setting.
  function currentTheme() {
    return root.dataset.theme || (systemLight.matches ? 'light' : 'dark');
  }

  const label = button.querySelector('.label') || button; // the text part of the button (next to the icon)

  // The button says where it will take you: "Licht thema" while dark, "Donker thema" while light.
  // The words come from data- attributes, so every language gets its own label (_data/i18n.yml).
  function updateButton() {
    const next = currentTheme() === 'dark' ? 'light' : 'dark';
    button.dataset.next = next; // CSS shows the sun icon when next is light, the moon when next is dark
    label.textContent = next === 'light' ? button.dataset.labelLight : button.dataset.labelDark;
  }

  button.addEventListener('click', function () {
    const next = currentTheme() === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;                        // tokens.css switches all colors
    try {
      localStorage.setItem('theme', next);            // remember for the next page and next visit
    } catch (e) { /* storage blocked: the choice just lasts for this page */ }
    document.dispatchEvent(new Event('themechange')); // waves.js listens to this to recolor its lines
    updateButton();
  });

  // If the OS switches between light and dark (e.g. at sunset) and the visitor never chose, follow it.
  systemLight.addEventListener('change', updateButton);

  updateButton();
  button.hidden = false; // JavaScript works, so show the button
})();
