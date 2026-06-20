/* ==========================================================================
   INTERVIEW WIDGET — Quick Interview With Joy
   Vanilla JS. No frameworks. No build step.
   ==========================================================================

   HOW TO EDIT QUESTIONS
   ----------------------
   Edit the INTERVIEW_QUESTIONS array below. Each item supports:
     {
       q:     "Question text (required)",
       a:     "Answer paragraph. Use \n\n for paragraph breaks. (required)",
       video: "YouTube ID, e.g. 'dQw4w9WgXcQ'  (optional)",
       image: "URL to image                    (optional)",
       cta:   { label: "Button text", href: "URL or #anchor" }  (optional)
     }

   To add a question: append a new object to the array.
   To remove: delete the object.
   To reorder: change array position.
   ========================================================================== */

(function () {
  'use strict';

  /* ---------- DATA ---------- */
  const INTERVIEW_QUESTIONS = [
    {
      q: 'Tell me about yourself',
      a: "I'm Joy Nicolas, a product designer based in Pune with 12 years across enterprise SaaS, design systems, and AI-driven interfaces.\n\nI've shipped UX for Microsoft's Data & AI demos at Xoriant, contributed to the shared design system at Thinkproject, and most recently used AI as a coding partner to take two side projects from blank page to deployed in under seven hours each.\n\nWhat I'm best at is spotting the second-order problem in a product — the one nobody's named yet — and building the system that fixes it."
      //video: 'qzGxK6Uiu04'
    },
    {
      q: 'Why should we hire you?',
      a: "Three reasons.\n\nFirst, I've already shipped at the scale you operate at — enterprise SaaS, design systems, complex AI interfaces. I won't need a ramp.\n\nSecond, I bridge craft and influence. I can sit in a stakeholder room and frame a problem, then jump into Figma and build the system that solves it.\n\nThird, I move. Two AI side projects from idea to deployed in under seven hours each — that's the pace I bring to real work.",
      cta: { label: 'See my work', href: '#work' }
    },
    {
      q: 'Explain your UX process',
      a: "My process has four beats, but they're not always linear.\n\n**Frame** — I start by naming the actual problem, not the surface request. Stakeholder interviews, usage data, and user conversations.\n\n**Explore** — Wide before narrow. I sketch multiple directions before committing, often in low-fi to keep options cheap.\n\n**Build** — High-fidelity in Figma, against the design system, with real content and edge cases.\n\n**Validate** — Usability tests, async reviews, dev handoff QA. The work isn't done when it ships; it's done when it works."
    },
    {
      q: 'How do you work with developers?',
      a: "Early and often. I don't throw designs over the wall.\n\nI loop developers in during exploration — they catch feasibility issues before I've committed three days to a direction. I design against the existing component library so handoff is closer to spec than to interpretation.\n\nDuring build, I review staging environments and file tickets for visual or behavior drift. After ship, I QA in production. Developers I've worked with tend to want to work with me again."
    },
    {
      q: 'Describe a challenging project',
      a: "At Xoriant, I led the migration of Microsoft's DREAM demo suite from a legacy theme to Fluent Design System — across retail, healthcare, sustainability, and education scenarios.\n\nThe challenge wasn't visual. It was that the existing demos had drifted into 40+ inconsistent variants. I had to build a shared design vocabulary, retrofit it backward, and ship forward at the same time.\n\nThe result: a unified demo platform that scaled to new AI scenarios without rebuilding from scratch each time."
    },
    {
      q: 'What makes you different from other designers?',
      a: "I treat design as a systems problem, not a screens problem.\n\nMost designers I respect are great at making one screen beautiful. I'm interested in the rules that make a thousand screens consistent — and the second-order effects nobody else is tracking.\n\nI also code now. Not to replace developers, but to prototype faster and to make handoff conversations sharper. The Loop and Guestchat side projects exist because I stopped waiting for engineering bandwidth and built them myself.",
      cta: { label: 'See side projects', href: '#side' }
    }
  ];

  /* ---------- ICONS (inline SVG, kept tiny) ---------- */
  const ICONS = {
    minimize: '<svg viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M3 7h8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',
    close:    '<svg viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M3.5 3.5l7 7M10.5 3.5l-7 7" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',
    plus:     '<svg viewBox="0 0 10 10" fill="none" aria-hidden="true"><path d="M5 1.5v7M1.5 5h7" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>',
    chat:     '<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 4.5C3 3.67 3.67 3 4.5 3h7c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5H7l-2.5 2v-2H4.5C3.67 11 3 10.33 3 9.5v-5z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/></svg>',
    arrow:    '<svg class="iw-cta-arrow" viewBox="0 0 12 12" fill="none" aria-hidden="true" width="10" height="10"><path d="M2.5 6h7M6 2.5L9.5 6 6 9.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>'
  };

  /* ---------- DOM HELPERS ---------- */
  const el = (tag, attrs = {}, html = '') => {
    const node = document.createElement(tag);
    Object.entries(attrs).forEach(([k, v]) => {
      if (k === 'class') node.className = v;
      else if (k.startsWith('on')) node.addEventListener(k.slice(2), v);
      else node.setAttribute(k, v);
    });
    if (html) node.innerHTML = html;
    return node;
  };

  /* ---------- ANSWER CONTENT BUILDER ---------- */
  // Builds the inner answer markup. Video is NOT injected here — it loads
  // lazily on first expand to keep the page light.
  const buildAnswerInner = (item) => {
    const wrap = el('div', { class: 'iw-answer-inner' });

    // Paragraphs (split on double-newline)
    item.a.split(/\n\n+/).forEach((para) => {
      // Allow **bold** inline
      const html = para
        .replace(/\n/g, '<br>')
        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
      wrap.appendChild(el('p', {}, html));
    });

    // Video placeholder (iframe injected on demand)
    if (item.video) {
      const vWrap = el('div', { class: 'iw-video', 'data-video-id': item.video });
      vWrap.innerHTML = `
        <div class="iw-video-placeholder">
          <div class="iw-play-icon"></div>
          <span>Loading video…</span>
        </div>`;
      wrap.appendChild(vWrap);
    }

    // Optional image
    if (item.image) {
      const img = el('img', {
        class: 'iw-image',
        src: item.image,
        alt: '',
        loading: 'lazy'
      });
      wrap.appendChild(img);
    }

    // Optional CTA
    if (item.cta && item.cta.href && item.cta.label) {
      const a = el('a', { class: 'iw-cta', href: item.cta.href });
      a.innerHTML = `${item.cta.label} ${ICONS.arrow}`;
      wrap.appendChild(a);
    }

    return wrap;
  };

  /* ---------- ACCORDION ITEM ---------- */
  const buildItem = (item, index) => {
    const itemEl = el('div', { class: 'iw-item', 'data-index': index });
    const btnId = `iw-q-${index}`;
    const panelId = `iw-a-${index}`;

    const btn = el('button', {
      class: 'iw-question',
      type: 'button',
      id: btnId,
      'aria-expanded': 'false',
      'aria-controls': panelId
    });
    btn.innerHTML = `
      <span class="iw-q-text">${item.q}</span>
      <span class="iw-q-icon" aria-hidden="true">${ICONS.plus}</span>
    `;

    const answer = el('div', {
      class: 'iw-answer',
      id: panelId,
      role: 'region',
      'aria-labelledby': btnId
    });
    answer.appendChild(buildAnswerInner(item));

    itemEl.appendChild(btn);
    itemEl.appendChild(answer);
    return itemEl;
  };

  /* ---------- LAZY YOUTUBE INJECTION ---------- */
  const mountVideo = (videoWrap) => {
    const id = videoWrap.dataset.videoId;
    if (!id || videoWrap.querySelector('iframe')) return;
    const iframe = el('iframe', {
      src: `https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1`,
      title: 'Interview answer video',
      loading: 'lazy',
      allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
      allowfullscreen: ''
    });
    // Replace placeholder
    const placeholder = videoWrap.querySelector('.iw-video-placeholder');
    if (placeholder) placeholder.remove();
    videoWrap.appendChild(iframe);
  };

  const unmountVideo = (videoWrap) => {
    const iframe = videoWrap.querySelector('iframe');
    if (!iframe) return;
    iframe.remove();
    // Restore placeholder so it's ready next time
    videoWrap.innerHTML = `
      <div class="iw-video-placeholder">
        <div class="iw-play-icon"></div>
        <span>Loading video…</span>
      </div>`;
  };

  /* ---------- WIDGET BUILD ---------- */
  const buildWidget = () => {
    const root = el('div', { class: 'iw-root' });

    // ---- Launcher (visible only when closed) ----
    const launcher = el('button', {
      class: 'iw-launcher',
      type: 'button',
      'aria-label': 'Open Quick Interview With Joy'
    });
    launcher.innerHTML = `
      <span class="iw-launcher-dot" aria-hidden="true"></span>
      Quick Interview
    `;

    // ---- Panel ----
    const panel = el('div', {
      class: 'iw-panel',
      role: 'dialog',
      'aria-label': 'Quick Interview With Joy'
    });

    // Header
    const header = el('header', { class: 'iw-header' });
    header.innerHTML = `
      <div class="iw-header-top">
        <div class="iw-title-wrap">
          <span class="iw-status-dot" aria-hidden="true"></span>
          <h2 class="iw-title">Quick Interview With Joy</h2>
        </div>
        <div class="iw-header-actions">
          <button class="iw-icon-btn" type="button" data-action="minimize" aria-label="Minimize">${ICONS.minimize}</button>
          <button class="iw-icon-btn" type="button" data-action="close" aria-label="Close">${ICONS.close}</button>
        </div>
      </div>
      <p class="iw-subtitle">These are the most common questions recruiters ask. Click any question to see the answers instantly.</p>
    `;

    // Body — accordion list
    const body = el('div', { class: 'iw-body' });
    INTERVIEW_QUESTIONS.forEach((item, i) => body.appendChild(buildItem(item, i)));

    // Footer
    const footer = el('footer', { class: 'iw-footer' });
    footer.innerHTML = `
      <span>${INTERVIEW_QUESTIONS.length} questions ready</span>
      <span class="iw-footer-typing" aria-hidden="true">
        <span></span><span></span><span></span>
      </span>
    `;

    panel.appendChild(header);
    panel.appendChild(body);
    panel.appendChild(footer);

    root.appendChild(launcher);
    root.appendChild(panel);

    return { root, launcher, panel, body };
  };

  /* ---------- STATE + BEHAVIOR ---------- */
  const initWidget = () => {
    const { root, launcher, panel, body } = buildWidget();
    document.body.appendChild(root);

    let isOpen = true;       // Open by default per spec
    let isMinimized = false;
    let openIndex = -1;

    const showPanel = () => {
      panel.classList.remove('iw-hidden', 'iw-minimized');
      launcher.classList.remove('iw-visible');
      isOpen = true;
      isMinimized = false;
    };

    const hidePanel = () => {
      panel.classList.add('iw-hidden');
      launcher.classList.add('iw-visible');
      isOpen = false;
      // Tear down any open video to free resources
      if (openIndex >= 0) collapseItem(openIndex);
    };

    const minimizePanel = () => {
      // Compact bar (just the header) — feels lighter than a full close
      panel.classList.toggle('iw-minimized');
      isMinimized = panel.classList.contains('iw-minimized');
      if (isMinimized && openIndex >= 0) collapseItem(openIndex);
    };

    // Expand item by index; collapses any other open one
    const expandItem = (index) => {
      const items = body.querySelectorAll('.iw-item');
      items.forEach((it, i) => {
        const ans = it.querySelector('.iw-answer');
        const btn = it.querySelector('.iw-question');
        if (i === index) {
          it.classList.add('iw-open');
          btn.setAttribute('aria-expanded', 'true');
          // Set max-height to actual content height for smooth animation
          ans.style.maxHeight = ans.scrollHeight + 'px';
          // Lazy-mount video on this item
          const video = ans.querySelector('.iw-video');
          if (video) {
            mountVideo(video);
            // Recalculate height after iframe injection (slight delay for paint)
            requestAnimationFrame(() => {
              ans.style.maxHeight = ans.scrollHeight + 'px';
            });
          }
          openIndex = index;
          // Smooth scroll question into view
          setTimeout(() => {
            it.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }, 100);
        } else if (it.classList.contains('iw-open')) {
          it.classList.remove('iw-open');
          btn.setAttribute('aria-expanded', 'false');
          ans.style.maxHeight = '0px';
          // Unmount any iframe in this item
          const video = ans.querySelector('.iw-video');
          if (video) unmountVideo(video);
        }
      });
    };

    const collapseItem = (index) => {
      const item = body.querySelector(`.iw-item[data-index="${index}"]`);
      if (!item) return;
      const ans = item.querySelector('.iw-answer');
      const btn = item.querySelector('.iw-question');
      item.classList.remove('iw-open');
      btn.setAttribute('aria-expanded', 'false');
      ans.style.maxHeight = '0px';
      const video = ans.querySelector('.iw-video');
      if (video) unmountVideo(video);
      openIndex = -1;
    };

    // ---- Event wiring ----

    // Question clicks (delegated)
    body.addEventListener('click', (e) => {
      const btn = e.target.closest('.iw-question');
      if (!btn) return;
      const item = btn.closest('.iw-item');
      const index = parseInt(item.dataset.index, 10);
      if (index === openIndex) collapseItem(index);
      else expandItem(index);
    });

    // Header action buttons
    panel.querySelector('[data-action="minimize"]').addEventListener('click', minimizePanel);
    panel.querySelector('[data-action="close"]').addEventListener('click', hidePanel);

    // Launcher re-opens
    launcher.addEventListener('click', showPanel);

    // Keyboard: Escape closes (when not minimized)
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && isOpen && !isMinimized) {
        hidePanel();
      }
    });

    // If user clicks header in minimized state, expand again
    panel.querySelector('.iw-header').addEventListener('click', (e) => {
      if (isMinimized && !e.target.closest('.iw-icon-btn')) {
        panel.classList.remove('iw-minimized');
        isMinimized = false;
      }
    });

    // Open by default (after page load, with a small delay for polish)
    requestAnimationFrame(() => panel.classList.remove('iw-hidden'));
  };

  /* ---------- INIT ---------- */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initWidget);
  } else {
    initWidget();
  }
})();
