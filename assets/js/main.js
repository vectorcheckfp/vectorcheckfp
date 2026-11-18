// Vector Check Financial Planning — small site behaviors. No dependencies.

// Mobile menu
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.getElementById('nav-links');
  if (!toggle || !links) return;
  toggle.addEventListener('click', function () {
    var open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && links.classList.contains('open')) {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.focus();
    }
  });
})();

// Click-to-load YouTube videos.
// Only loads YouTube (privacy-enhanced domain) after the visitor clicks play,
// which keeps pages fast and avoids third-party cookies until then.
// Usage in HTML: <div class="video-frame" data-youtube="VIDEO_ID" data-title="Title"></div>
(function () {
  var frames = document.querySelectorAll('.video-frame[data-youtube]');
  frames.forEach(function (frame) {
    var id = (frame.getAttribute('data-youtube') || '').trim();
    if (!/^[A-Za-z0-9_-]{6,20}$/.test(id)) return;
    var title = frame.getAttribute('data-title') || 'Video';
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'video-play';
    btn.style.backgroundImage = 'url(https://i.ytimg.com/vi/' + id + '/hqdefault.jpg)';
    btn.setAttribute('aria-label', 'Play video: ' + title);
    btn.innerHTML = '<span class="play"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg></span>';
    btn.addEventListener('click', function () {
      var iframe = document.createElement('iframe');
      iframe.src = 'https://www.youtube-nocookie.com/embed/' + id + '?autoplay=1&rel=0';
      iframe.title = title;
      iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
      iframe.allowFullscreen = true;
      frame.innerHTML = '';
      frame.appendChild(iframe);
    });
    frame.innerHTML = '';
    frame.appendChild(btn);
  });
})();

// Topic filter chips on the Resources page
(function () {
  var bar = document.querySelector('[data-filter-bar]');
  if (!bar) return;
  var target = document.querySelector(bar.getAttribute('data-filter-bar'));
  if (!target) return;
  bar.addEventListener('click', function (e) {
    var chip = e.target.closest('.chip');
    if (!chip) return;
    var topic = chip.getAttribute('data-topic');
    bar.querySelectorAll('.chip').forEach(function (c) {
      c.setAttribute('aria-pressed', c === chip ? 'true' : 'false');
    });
    target.querySelectorAll('[data-topics]').forEach(function (item) {
      var topics = item.getAttribute('data-topics').split(/\s+/);
      item.hidden = !(topic === 'all' || topics.indexOf(topic) !== -1);
    });
  });
})();

// Footer year
(function () {
  var y = document.querySelector('[data-year]');
  if (y) y.textContent = new Date().getFullYear();
})();
