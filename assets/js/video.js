// VIDEO - turns the click-to-play area into the real YouTube player, only after a click.
// Before the click nothing is loaded from YouTube (no cookies, no tracking).
// Without JavaScript the area is a normal link that opens the video on YouTube.

document.querySelectorAll('[data-youtube]').forEach(function (link) {
  link.addEventListener('click', function (event) {
    event.preventDefault(); // stay on this page instead of following the link to youtube.com

    const player = document.createElement('iframe'); // build the real player
    // youtube-nocookie.com = YouTube's privacy mode; autoplay=1 starts it right away (you just clicked play)
    player.src = 'https://www.youtube-nocookie.com/embed/' + link.dataset.youtube + '?autoplay=1';
    player.title = link.dataset.title;          // screen readers need a name for every frame
    player.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
    player.className = 'video-player';

    link.replaceWith(player); // swap the play area for the player
    player.focus();           // keyboard users land on the player, not at the top of the page
  });
});
