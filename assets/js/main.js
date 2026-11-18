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

// Click-to-load videos (YouTube or Loom).
// The video player only loads after the visitor clicks play,
// which keeps pages fast and avoids third-party cookies until then.
// Usage in HTML:
//   <div class="video-frame" data-youtube="VIDEO_ID" data-title="Title"></div>
//   <div class="video-frame" data-loom="VIDEO_ID" data-title="Title"></div>
// (Loom ID = the long code at the end of the share link.)
(function () {
  var frames = document.querySelectorAll('.video-frame[data-youtube], .video-frame[data-loom]');
  frames.forEach(function (frame) {
    var yt = (frame.getAttribute('data-youtube') || '').trim();
    var loom = (frame.getAttribute('data-loom') || '').trim();
    var src, poster = '';
    if (/^[A-Za-z0-9_-]{6,20}$/.test(yt)) {
      src = 'https://www.youtube-nocookie.com/embed/' + yt + '?autoplay=1&rel=0';
      poster = 'https://i.ytimg.com/vi/' + yt + '/hqdefault.jpg';
    } else if (/^[a-f0-9]{20,40}$/i.test(loom)) {
      src = 'https://www.loom.com/embed/' + loom + '?autoplay=1&hide_owner=true&hide_share=true&hideEmbedTopBar=true';
    } else {
      return;
    }
    var title = frame.getAttribute('data-title') || 'Video';
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'video-play' + (poster ? '' : ' video-play-plain');
    if (poster) btn.style.backgroundImage = 'url(' + poster + ')';
    btn.setAttribute('aria-label', 'Play video: ' + title);
    btn.innerHTML = '<span class="play"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg></span>' +
      (poster ? '' : '<span class="play-title"></span>');
    if (!poster) btn.querySelector('.play-title').textContent = title;
    btn.addEventListener('click', function () {
      var iframe = document.createElement('iframe');
      iframe.src = src;
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
