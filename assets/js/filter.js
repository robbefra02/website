// SUBTAG FILTER - on a category page, the buttons above the list show only the posts with that subtag.
// Without JavaScript the buttons stay hidden and every post is listed, so nothing breaks.

(function () {
  const group = document.querySelector('[data-filter-group]'); // the row of filter buttons
  if (!group) return; // this category has no subtags yet: nothing to do

  const chips = group.querySelectorAll('[data-filter]');      // the buttons themselves
  const posts = document.querySelectorAll('.post-list > li'); // one <li> per post
  const counter = document.querySelector('[data-post-count]'); // the "5 berichten" line

  // Show only the posts that have the wanted subtag ("all" = show everything)
  function apply(wanted) {
    let shown = 0;

    chips.forEach(function (chip) {
      // aria-pressed tells screen readers (and the CSS) which button is active
      chip.setAttribute('aria-pressed', String(chip.dataset.filter === wanted));
    });

    posts.forEach(function (post) {
      const tags = post.dataset.tags.split(' ');               // "motorcycle roadtrip" -> ["motorcycle", "roadtrip"]
      post.hidden = wanted !== 'all' && !tags.includes(wanted); // hide posts without that subtag
      if (!post.hidden) shown++;
    });

    // "1 bericht" or "3 berichten": the words come from data- attributes (one per language)
    const words = shown === 1 ? counter.dataset.one : counter.dataset.many;
    counter.textContent = words.replace('%n', shown); // "%n berichten" -> "3 berichten"

    // Put the filter in the address (/nl/travel/#motorcycle), so a filtered list can be shared
    history.replaceState(null, '', wanted === 'all' ? location.pathname : '#' + wanted);
  }

  chips.forEach(function (chip) {
    chip.addEventListener('click', function () { apply(chip.dataset.filter); });
  });

  // Arrived with a subtag in the address (e.g. clicked #motorcycle on a post)? Start with that filter.
  const fromAddress = decodeURIComponent(location.hash.slice(1)); // "#motorcycle" -> "motorcycle"
  const isKnown = Array.from(chips).some(function (chip) { return chip.dataset.filter === fromAddress; });
  if (isKnown) apply(fromAddress);

  group.hidden = false; // JavaScript works: show the buttons
})();
