/* =========================================================
   FrPD Corporate Portal — Vanilla JavaScript
   Edit ORGANIZATIONS, REFERENCES, NEWS_ITEMS and FEATURED_VIDEO to update
   most reusable website content without touching the layout.
   ========================================================= */

const ORGANIZATIONS = {
  wna: {
    code: 'WNA',
    name: 'Western North Area',
    description: 'Supporting safe, reliable and efficient operations across the Western North coverage area through strong field presence and disciplined execution.',
    region: 'Western North',
    leader: {
      name: 'Eng. Khalid Al Rashid',
      role: 'WNA Manager',
      quote: '“Consistent performance starts with clear priorities, strong field presence and teams that support one another.”',
      bio: 'Leads the Western North Area with a focus on safe execution, operational reliability, people development and strong coordination across field and support teams.'
    },
    coverageDescription: 'WNA coordinates field and operational support across a broad Western North footprint, connecting local teams with shared standards and responsive technical support.',
    locations: ['North Hub', 'Coastal Operations', 'Field Area A', 'Field Area B', 'Maintenance Center', 'Support Office'],
    teams: ['Operations', 'Maintenance', 'Safety', 'Technical'],
    teamCount: 5
  },
  wsa: {
    code: 'WSA',
    name: 'Western South Area',
    description: 'Enabling integrated operational support across the Western South region with a strong emphasis on safety, reliability and responsive field service.',
    region: 'Western South',
    leader: {
      name: 'Eng. Omar Al Zahrani',
      role: 'WSA Manager',
      quote: '“Our goal is to make every team better connected, better supported and ready to deliver safely.”',
      bio: 'Leads the Western South Area and works across disciplines to strengthen field execution, operational readiness and continuous improvement.'
    },
    coverageDescription: 'WSA supports distributed facilities and field locations through a coordinated model designed for fast response, clear ownership and consistent service quality.',
    locations: ['South Operations Hub', 'Coastal South', 'Field Area C', 'Field Area D', 'Technical Center', 'Regional Office'],
    teams: ['Operations', 'Inspection', 'Safety', 'Technical'],
    teamCount: 6
  },
  cs: {
    code: 'CS',
    name: 'Central Services',
    description: 'A flexible organization profile ready to be renamed and populated with your official FrPD structure, leadership and coverage information.',
    region: 'Central',
    leader: { name: 'Eng. Abdullah Al Salem', role: 'CS Manager', quote: '“Clarity, ownership and teamwork are the foundation of dependable performance.”', bio: 'Provides leadership across operational priorities, people development and service delivery for Central Services.' },
    coverageDescription: 'Central Services coverage details are ready for your official locations, operating areas and service statistics.',
    locations: ['Location 3A', 'Location 3B', 'Location 3C', 'Location 3D', 'Location 3E'],
    teams: ['Operations', 'Maintenance', 'Safety', 'Planning'],
    teamCount: 7
  },
  org4: {
    code: 'ORG 4', name: 'Organization 4', region: 'Region 4',
    description: 'A reusable organization profile designed to present leadership, team structure and coverage clearly and consistently.',
    leader: { name: 'Eng. Nasser Al Mutairi', role: 'Organization 4 Manager', quote: '“Strong results come from disciplined systems and empowered people.”', bio: 'Leads Organization 4 with a focus on delivery discipline, capability and cross-team collaboration.' },
    coverageDescription: 'Replace these placeholders with the official Organization 4 coverage statement, locations and operating statistics.',
    locations: ['Location 4A', 'Location 4B', 'Location 4C', 'Location 4D'],
    teams: ['Operations', 'Technical', 'Safety', 'Support'],
    teamCount: 6
  },
  org5: {
    code: 'ORG 5', name: 'Organization 5', region: 'Region 5',
    description: 'A modern organization profile that can be quickly adapted to official FrPD business units and operational areas.',
    leader: { name: 'Eng. Faisal Al Dosari', role: 'Organization 5 Manager', quote: '“We simplify the work, strengthen the controls and support people to perform.”', bio: 'Provides strategic and operational leadership across Organization 5 priorities and stakeholder needs.' },
    coverageDescription: 'Organization 5 can display its geographic footprint, operational sites and key coverage metrics in this section.',
    locations: ['Location 5A', 'Location 5B', 'Location 5C', 'Location 5D', 'Location 5E', 'Location 5F'],
    teams: ['Operations', 'Maintenance', 'Compliance', 'Technical'],
    teamCount: 7
  },
  org6: {
    code: 'ORG 6', name: 'Organization 6', region: 'Region 6',
    description: 'A consistent FrPD organization page focused on people, operational scope, leadership and team accessibility.',
    leader: { name: 'Eng. Majed Al Anazi', role: 'Organization 6 Manager', quote: '“Reliable service begins with strong standards and visible leadership.”', bio: 'Leads Organization 6 with emphasis on service quality, safety and effective coordination.' },
    coverageDescription: 'Use this area to explain Organization 6 operational reach and the locations supported by the team.',
    locations: ['Location 6A', 'Location 6B', 'Location 6C', 'Location 6D', 'Location 6E'],
    teams: ['Operations', 'Field Services', 'Safety', 'Planning'],
    teamCount: 2
  },
  org7: {
    code: 'ORG 7', name: 'Organization 7', region: 'Region 7',
    description: 'An editable business-unit page aligned with the same FrPD visual identity and navigation experience.',
    leader: { name: 'Eng. Turki Al Shammari', role: 'Organization 7 Manager', quote: '“Collaboration turns complex operations into clear, coordinated action.”', bio: 'Guides Organization 7 through operational planning, stakeholder alignment and continuous performance improvement.' },
    coverageDescription: 'Add the real operational coverage, sites, facilities or service territories for Organization 7 here.',
    locations: ['Location 7A', 'Location 7B', 'Location 7C', 'Location 7D'],
    teams: ['Operations', 'Inspection', 'Technical', 'Support'],
    teamCount: 2
  },
  org8: {
    code: 'ORG 8', name: 'Organization 8', region: 'Region 8',
    description: 'A professional, scalable organization profile ready for FrPD-specific content, contacts and operating locations.',
    leader: { name: 'Eng. Bader Al Harbi', role: 'Organization 8 Manager', quote: '“Performance improves when information, people and decisions are connected.”', bio: 'Leads Organization 8 and supports reliable execution through clear priorities, data visibility and team development.' },
    coverageDescription: 'This coverage section can be customized with official Organization 8 sites, geographic areas and operating statistics.',
    locations: ['Location 8A', 'Location 8B', 'Location 8C', 'Location 8D', 'Location 8E'],
    teams: ['Operations', 'Maintenance', 'Safety', 'Data & Support']
  }
};

const REFERENCES = [
  { title: 'Home Portal', subtitle: 'Corporate home', icon: 'house', url: '#' },
  { title: 'AGME Portal', subtitle: 'Business portal', icon: 'panels-top-left', url: '#' },
  { title: 'Employee Portal', subtitle: 'Employee services', icon: 'user', url: '#' },
  { title: 'SharePoint', subtitle: 'Teams & collaboration', icon: 'folder-kanban', url: '#' },
  { title: 'Safety Portal', subtitle: 'Safety resources', icon: 'shield-check', url: '#' },
  { title: 'Documents Portal', subtitle: 'Controlled documents', icon: 'files', url: '#' },
  { title: 'Service Desk', subtitle: 'IT & portal support', icon: 'headset', url: '#' },
  { title: 'Other References', subtitle: 'More useful links', icon: 'link-2', url: '#' }
];

const NEWS_ITEMS = [
  {
    category: 'Operations',
    date: '18 Sep 2026',
    isoDate: '2026-09-18',
    title: 'FrPD launches a refreshed operating rhythm for stronger cross-team alignment',
    summary: 'Clearer touchpoints now connect priorities, risks, decisions and field support across FrPD.',
    body: [
      'FrPD has introduced a refreshed operating rhythm designed to make cross-team coordination more consistent and practical. The approach creates clearer touchpoints for priorities, emerging risks, decisions and support requirements.',
      'The updated rhythm is intended to improve visibility across teams while keeping discussions focused on actions, ownership and timely escalation. Content in this placeholder can be replaced with the official internal announcement when available.'
    ],
    image: 'images/news/news-1.svg',
    alt: 'FrPD operational update visual'
  },
  {
    category: 'Safety',
    date: '15 Sep 2026',
    isoDate: '2026-09-15',
    title: 'New safety focus campaign reinforces field readiness',
    summary: 'A practical safety campaign puts field preparation, hazard awareness and stop-work responsibility in focus.',
    body: [
      'A new FrPD safety focus campaign is reinforcing the simple actions that help teams prepare for field activities with confidence. The campaign highlights pre-job checks, hazard awareness, communication and the responsibility to stop work when conditions change.',
      'Teams can use the campaign material during toolbox talks, site discussions and routine planning activities. Replace this placeholder copy with the approved Safety communication before publishing.'
    ],
    image: 'images/news/news-2.svg',
    alt: 'FrPD safety update visual'
  },
  {
    category: 'People',
    date: '10 Sep 2026',
    isoDate: '2026-09-10',
    title: 'FrPD teams complete capability development sessions',
    summary: 'Recent learning sessions focused on practical capability, collaboration and consistent ways of working.',
    body: [
      'FrPD teams recently completed a series of capability development sessions focused on practical skills, cross-functional collaboration and consistent ways of working. The sessions combined shared learning with discussions based on day-to-day operational scenarios.',
      'Future sessions can build on the same approach by connecting development topics directly to business priorities and team needs. This article text is editable placeholder content.'
    ],
    image: 'images/news/news-3.svg',
    alt: 'FrPD people development update visual'
  },
  {
    category: 'Technology',
    date: '04 Sep 2026',
    isoDate: '2026-09-04',
    title: 'Digital improvements simplify access to operational information',
    summary: 'Portal improvements are helping users reach frequently used information and resources with fewer steps.',
    body: [
      'Recent digital improvements are simplifying how FrPD users reach frequently used operational information, internal references and shared resources. The focus is on reducing unnecessary navigation and making common tasks easier to complete.',
      'The portal will continue to evolve as official tools, links and content owners are confirmed. Replace this placeholder with the final technology update whenever it is ready.'
    ],
    image: 'images/news/news-4.svg',
    alt: 'FrPD digital improvement update visual'
  }
];

// Change type to 'youtube' and add a YouTube video ID, or use 'mp4' with a local file path.
const FEATURED_VIDEO = {
  type: 'placeholder', // 'youtube' | 'mp4' | 'placeholder'
  youtubeId: '',
  mp4Path: 'assets/frpd-feature.mp4'
};

const TEAM_NAMES = [
  ['Ahmed Al Qahtani', 'Senior Operations Engineer'],
  ['Sarah Al Otaibi', 'Safety Specialist'],
  ['Mohammed Al Dossary', 'Maintenance Engineer'],
  ['Reem Al Shammari', 'Planning Analyst'],
  ['Khalid Al Ghamdi', 'Field Supervisor'],
  ['Noura Al Harbi', 'Compliance Specialist'],
  ['Abdullah Al Zahrani', 'Technical Engineer'],
  ['Lama Al Salem', 'Operations Coordinator']
];

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

function initIcons() {
  if (window.lucide) window.lucide.createIcons({ attrs: { 'aria-hidden': 'true' } });
}

function buildOrganizationDropdown() {
  const dropdown = $('#orgDropdown');
  if (!dropdown) return;
  const organizationKeys = ['wna', 'wsa', 'cs'];
  dropdown.innerHTML = organizationKeys.map(key => {
    const org = ORGANIZATIONS[key];
    return `<a href="organization.html?org=${key}">${org.code}<span class="sr-only"> — ${org.name}</span></a>`;
  }).join('');
}

function buildReferences() {
  const grid = $('#referenceGrid');
  if (!grid) return;
  grid.innerHTML = REFERENCES.map(item => `
    <a class="reference-card" href="${item.url}" ${item.url.startsWith('http') ? 'target="_blank" rel="noopener"' : ''}>
      <span><i data-lucide="${item.icon}"></i></span>
      <span><strong>${item.title}</strong><small>${item.subtitle}</small></span>
      <i data-lucide="arrow-up-right"></i>
    </a>`).join('');
}

function initHeaderAndNavigation() {
  const header = $('#siteHeader');
  const nav = $('#primaryNav');
  const toggle = $('#navToggle');
  const dropdownWraps = $$('.nav-dropdown');
  const dropdownToggles = $$('.dropdown-toggle');
  const backTop = $('#backTop');
  let lastY = window.scrollY;

  const updateHeader = () => {
    const y = window.scrollY;
    header?.classList.toggle('scrolled', y > 24);
    backTop?.classList.toggle('visible', y > 520);
    if (y > 500 && y > lastY + 7 && !nav?.classList.contains('open')) header?.classList.add('hidden');
    if (y < lastY - 7 || y < 120) header?.classList.remove('hidden');
    lastY = y;
  };
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  toggle?.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.classList.toggle('active', open);
    toggle.setAttribute('aria-expanded', open);
    toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });

  dropdownToggles.forEach(toggleButton => {
    toggleButton.addEventListener('click', (event) => {
      event.preventDefault();
      const wrap = toggleButton.closest('.nav-dropdown');
      const willOpen = !wrap.classList.contains('open');

      dropdownWraps.forEach(item => {
        item.classList.remove('open');
        item.querySelector('.dropdown-toggle')?.setAttribute('aria-expanded', 'false');
      });

      if (willOpen) {
        wrap.classList.add('open');
        toggleButton.setAttribute('aria-expanded', 'true');
      }
    });
  });

  document.addEventListener('click', (event) => {
    if (!event.target.closest('.nav-dropdown')) {
      dropdownWraps.forEach(item => {
        item.classList.remove('open');
        item.querySelector('.dropdown-toggle')?.setAttribute('aria-expanded', 'false');
      });
    }
  });

  $$('.primary-nav a').forEach(link => link.addEventListener('click', () => {
    if (window.innerWidth <= 860) {
      nav?.classList.remove('open');
      toggle?.classList.remove('active');
      toggle?.setAttribute('aria-expanded', 'false');
    }
  }));

  backTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

function initRevealAnimations() {
  const elements = $$('.reveal');
  if (!('IntersectionObserver' in window)) {
    elements.forEach(el => el.classList.add('visible'));
    return;
  }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = Number(entry.target.dataset.delay || 0);
        setTimeout(() => entry.target.classList.add('visible'), delay);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px' });
  elements.forEach(el => observer.observe(el));
}

function initActiveNavigation() {
  if (document.body.dataset.page !== 'home') return;
  const links = $$('.primary-nav a.nav-link[href^="#"]');
  const items = links.map(link => ({ link, section: $(link.getAttribute('href')) })).filter(item => item.section);
  if (!items.length) return;

  let ticking = false;
  const update = () => {
    const headerOffset = ($('#siteHeader')?.offsetHeight || 0) + 42;
    const marker = window.scrollY + headerOffset;
    let current = items[0];
    items.forEach(item => {
      if (item.section.offsetTop <= marker) current = item;
    });
    links.forEach(link => link.classList.toggle('active', link === current.link));
    ticking = false;
  };

  const requestUpdate = () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  };
  update();
  window.addEventListener('scroll', requestUpdate, { passive: true });
  window.addEventListener('resize', requestUpdate);
  window.addEventListener('hashchange', requestUpdate);
  links.forEach(link => link.addEventListener('click', () => {
    link.blur();
    setTimeout(requestUpdate, 80);
  }));
}

function initNewsReader() {
  const selector = $('#newsSelector');
  const reader = $('#newsReader');
  if (!selector || !reader || !NEWS_ITEMS.length) return;

  selector.innerHTML = NEWS_ITEMS.map((item, index) => `
    <button class="news-selector-card ${index === 0 ? 'active' : ''}" type="button" data-news-index="${index}" aria-pressed="${index === 0 ? 'true' : 'false'}">
      <span class="news-selector-number">${String(index + 1).padStart(2, '0')}</span>
      <span class="news-selector-content">
        <span class="news-selector-meta"><strong>${item.category}</strong><time datetime="${item.isoDate}">${item.date}</time></span>
        <span class="news-selector-title">${item.title}</span>
        <span class="news-selector-summary">${item.summary}</span>
      </span>
    </button>`).join('');

  const showNews = (index, scrollOnMobile = false) => {
    const item = NEWS_ITEMS[index];
    if (!item) return;
    const image = $('#newsReaderImage');
    const date = $('#newsReaderDate');
    if (image) { image.src = item.image; image.alt = item.alt; }
    setText('newsReaderCategory', item.category);
    setText('newsReaderTitle', item.title);
    if (date) { date.textContent = item.date; date.setAttribute('datetime', item.isoDate); }
    const body = $('#newsReaderBody');
    if (body) body.innerHTML = item.body.map(paragraph => `<p>${paragraph}</p>`).join('');

    $$('.news-selector-card', selector).forEach((button, buttonIndex) => {
      const active = buttonIndex === index;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });

    if (scrollOnMobile && window.innerWidth <= 900) {
      $('.news-reader-main')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  selector.addEventListener('click', event => {
    const button = event.target.closest('.news-selector-card');
    if (!button) return;
    showNews(Number(button.dataset.newsIndex), true);
  });

  showNews(0);
}

function renderVideo() {
  const area = $('#modalVideoArea');
  if (!area) return;
  if (FEATURED_VIDEO.type === 'youtube' && FEATURED_VIDEO.youtubeId) {
    area.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(FEATURED_VIDEO.youtubeId)}?autoplay=1" title="FrPD featured video" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`;
  } else if (FEATURED_VIDEO.type === 'mp4' && FEATURED_VIDEO.mp4Path) {
    area.innerHTML = `<video controls autoplay playsinline><source src="${FEATURED_VIDEO.mp4Path}" type="video/mp4">Your browser does not support HTML5 video.</video>`;
  } else {
    area.innerHTML = `<div class="video-placeholder"><i data-lucide="video"></i><h3>Featured video ready</h3><p>Add a YouTube ID or local MP4 path in <strong>js/script.js</strong> to publish your FrPD video.</p></div>`;
    initIcons();
  }
}

function initVideoModal() {
  const modal = $('#videoModal');
  if (!modal) return;
  const openers = [$('#videoOpen'), $('#videoOpenText')].filter(Boolean);
  const close = () => {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    const area = $('#modalVideoArea');
    if (area) area.innerHTML = '';
  };
  openers.forEach(opener => opener.addEventListener('click', () => {
    renderVideo();
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    $('.modal-close', modal)?.focus();
  }));
  $$('[data-close-modal]', modal).forEach(el => el.addEventListener('click', close));
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && modal.classList.contains('open')) close(); });
}

function getCurrentOrgKey() {
  const params = new URLSearchParams(window.location.search);
  const key = params.get('org') || 'wna';
  return ORGANIZATIONS[key] ? key : 'wna';
}

function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}


function initHorizontalTeamCarousel(directory, prevButton, nextButton) {
  if (!directory) return;

  const visibleCards = () => [...directory.querySelectorAll('.team-member:not([hidden])')];

  const updateCardVisibility = () => {
    const rail = directory.getBoundingClientRect();
    const cards = visibleCards();
    cards.forEach(card => {
      const r = card.getBoundingClientRect();
      const overlap = Math.max(0, Math.min(r.right, rail.right) - Math.max(r.left, rail.left));
      const ratio = r.width ? overlap / r.width : 0;
      card.classList.toggle('carousel-active', ratio >= .72);
    });
    if (prevButton) prevButton.disabled = directory.scrollLeft <= 4;
    if (nextButton) nextButton.disabled = directory.scrollLeft + directory.clientWidth >= directory.scrollWidth - 4;
  };

  const step = () => {
    const card = visibleCards()[0];
    if (!card) return directory.clientWidth * .8;
    const gap = parseFloat(getComputedStyle(directory).gap) || 18;
    return card.getBoundingClientRect().width + gap;
  };

  prevButton?.addEventListener('click', () => directory.scrollBy({ left: -step(), behavior: 'smooth' }));
  nextButton?.addEventListener('click', () => directory.scrollBy({ left: step(), behavior: 'smooth' }));

  let dragging = false, startX = 0, startScroll = 0, moved = false;
  directory.addEventListener('pointerdown', e => {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    dragging = true; moved = false; startX = e.clientX; startScroll = directory.scrollLeft;
    directory.classList.add('is-dragging');
    directory.setPointerCapture?.(e.pointerId);
  });
  directory.addEventListener('pointermove', e => {
    if (!dragging) return;
    const dx = e.clientX - startX;
    if (Math.abs(dx) > 4) moved = true;
    directory.scrollLeft = startScroll - dx;
  });
  const endDrag = e => {
    if (!dragging) return; dragging = false; directory.classList.remove('is-dragging');
    try { directory.releasePointerCapture?.(e.pointerId); } catch (_) {}
    window.setTimeout(updateCardVisibility, 40);
  };
  directory.addEventListener('pointerup', endDrag);
  directory.addEventListener('pointercancel', endDrag);
  directory.addEventListener('click', e => { if (moved) { e.preventDefault(); e.stopPropagation(); moved = false; } }, true);

  directory.addEventListener('scroll', updateCardVisibility, { passive:true });
  window.addEventListener('resize', updateCardVisibility, { passive:true });

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => entry.target.classList.toggle('carousel-active', entry.intersectionRatio >= .72));
    }, { root: directory, threshold:[0,.35,.72,1] });
    visibleCards().forEach(card => observer.observe(card));
    directory._teamObserver?.disconnect?.();
    directory._teamObserver = observer;
  }

  directory._refreshTeamCarousel = () => {
    directory._teamObserver?.disconnect?.();
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => entry.target.classList.toggle('carousel-active', entry.intersectionRatio >= .72));
      }, { root: directory, threshold:[0,.35,.72,1] });
      visibleCards().forEach(card => observer.observe(card));
      directory._teamObserver = observer;
    }
    directory.scrollTo({ left:0, behavior:'smooth' });
    requestAnimationFrame(updateCardVisibility);
  };

  requestAnimationFrame(updateCardVisibility);
}

function initHomeTeamCarousel() {
  const directory = $('#homeTeamDirectory');
  if (!directory) return;
  const input = $('#homeTeamSearch');
  const clear = $('#clearHomeTeamSearch');
  const empty = $('#homeTeamEmpty');
  const cards = [...directory.querySelectorAll('.team-member')];

  const applySearch = () => {
    const q = (input?.value || '').trim().toLowerCase();
    let visible = 0;
    cards.forEach(card => {
      const text = card.textContent.toLowerCase();
      const show = !q || text.includes(q);
      card.hidden = !show;
      if (show) visible++;
    });
    empty?.classList.toggle('is-hidden', visible > 0);
    directory._refreshTeamCarousel?.();
  };

  input?.addEventListener('input', applySearch);
  clear?.addEventListener('click', e => { e.preventDefault(); if (input) { input.value=''; input.focus(); } applySearch(); });
  initHorizontalTeamCarousel(directory, $('#homeTeamPrev'), $('#homeTeamNext'));
}

function buildTeam(org) {
  const directory = $('#teamDirectory');
  const filters = $('#teamFilters');
  if (!directory || !filters) return;

  const departments = ['All', ...org.teams];
  filters.innerHTML = departments.map((d, i) => `<button class="team-filter ${i === 0 ? 'active' : ''}" data-dept="${d}">${d}</button>`).join('');

  const teamCount = Math.min(org.teamCount ?? TEAM_NAMES.length, TEAM_NAMES.length);
  const people = TEAM_NAMES.slice(0, teamCount).map((person, index) => ({
    name: person[0],
    role: person[1],
    department: org.teams[index % org.teams.length],
    photo: `images/team/leader-${(index % 3) + 1}.jpg`,
    email: `team${index + 1}@example.com`
  }));

  const render = () => {
    const query = ($('#teamSearch')?.value || '').trim().toLowerCase();
    const activeDept = $('.team-filter.active')?.dataset.dept || 'All';
    const filtered = people.filter(person => {
      const matchesQuery = `${person.name} ${person.role} ${person.department}`.toLowerCase().includes(query);
      const matchesDept = activeDept === 'All' || person.department === activeDept;
      return matchesQuery && matchesDept;
    });
    directory.innerHTML = filtered.map((person, index) => `
      <article class="team-member reveal visible" style="transition-delay:${Math.min(index * 35, 200)}ms">
        <img src="${person.photo}" alt="${person.name} placeholder photo">
        <div class="team-member-copy">
          <small>${person.department}</small>
          <h3>${person.name}</h3>
          <p>${person.role}</p>
          <a href="mailto:${person.email}" aria-label="Email ${person.name}"><i data-lucide="mail"></i></a>
        </div>
      </article>`).join('');
    $('#teamEmpty')?.classList.toggle('is-hidden', filtered.length > 0);
    initIcons();
    if (!directory._carouselInitialized) {
      initHorizontalTeamCarousel(directory, $('#teamPrev'), $('#teamNext'));
      directory._carouselInitialized = true;
    } else {
      directory._refreshTeamCarousel?.();
    }
  };

  filters.addEventListener('click', event => {
    const button = event.target.closest('.team-filter');
    if (!button) return;
    $$('.team-filter', filters).forEach(b => b.classList.remove('active'));
    button.classList.add('active');
    render();
  });
  $('#teamSearch')?.addEventListener('input', render);
  $('#clearTeamSearch')?.addEventListener('click', event => {
    event.preventDefault();
    const input = $('#teamSearch');
    if (input) { input.value = ''; input.focus(); }
    render();
  });
  render();
}

function buildLocations(org) {
  const list = $('#locationList');
  if (!list) return;
  list.innerHTML = org.locations.map((location, index) => `
    <div class="location-card">
      <span><i data-lucide="map-pin"></i></span>
      <span><strong>${location}</strong><small>Operational coverage location ${index + 1}</small></span>
      <i data-lucide="chevron-right"></i>
    </div>`).join('');
}

function buildOrgSwitcher(currentKey) {
  const switcher = $('#orgSwitcher');
  if (!switcher) return;
  switcher.innerHTML = Object.entries(ORGANIZATIONS).map(([key, org]) => `
    <a class="org-switch-card ${key === currentKey ? 'active' : ''}" data-code="${org.code}" href="organization.html?org=${key}">
      <span>${org.code}</span><h3>${org.name}</h3>
    </a>`).join('');
}

function initOrganizationPage() {
  if (document.body.dataset.page !== 'organization') return;
  const key = getCurrentOrgKey();
  const org = ORGANIZATIONS[key];
  document.title = `${org.code} | FrPD`;

  setText('breadcrumbOrg', org.code);
  setText('orgCode', org.code);
  setText('orgName', org.name);
  setText('orgDescription', org.description);
  setText('orgMonogram', org.code);
  setText('orgAreaCount', `${org.locations.length} Areas`);
  setText('orgLeaderName', org.leader.name);
  setText('orgLeaderRole', org.leader.role);
  setText('orgLeaderQuote', org.leader.quote);
  setText('orgLeaderBio', org.leader.bio);
  setText('orgRegionFact', org.region);
  setText('coverageDescription', org.coverageDescription);
  setText('coverageLocationsCount', String(org.locations.length));
  setText('mapLabel', org.code);

  buildTeam(org);
  buildLocations(org);
}

function addScreenReaderUtility() {
  if ($('#frpdUtilityStyles')) return;
  const style = document.createElement('style');
  style.id = 'frpdUtilityStyles';
  style.textContent = '.sr-only{position:absolute!important;width:1px!important;height:1px!important;padding:0!important;margin:-1px!important;overflow:hidden!important;clip:rect(0,0,0,0)!important;white-space:nowrap!important;border:0!important}';
  document.head.appendChild(style);
}

function init() {
  addScreenReaderUtility();
  buildOrganizationDropdown();
  buildReferences();
  initOrganizationPage();
  initHomeTeamCarousel();
  initHeaderAndNavigation();
  initRevealAnimations();
  initActiveNavigation();
  initNewsReader();
  initVideoModal();
  initIcons();
}

document.addEventListener('DOMContentLoaded', init);

/* =========================================================
   UI ENHANCEMENT INTERACTIONS
   ========================================================= */
(function enhanceFrpdUI(){
  function initScrollProgress(){
    if (document.querySelector('.scroll-progress')) return;
    const bar = document.createElement('div');
    bar.className = 'scroll-progress';
    bar.setAttribute('aria-hidden', 'true');
    document.body.appendChild(bar);
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(1, window.scrollY / max) : 0;
      bar.style.transform = `scaleX(${progress})`;
    };
    update();
    window.addEventListener('scroll', update, { passive:true });
    window.addEventListener('resize', update, { passive:true });
  }

  function initPointerGlow(){
    if (!window.matchMedia('(pointer:fine)').matches) return;
    window.addEventListener('pointermove', (e) => {
      document.documentElement.style.setProperty('--pointer-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--pointer-y', `${e.clientY}px`);
    }, { passive:true });
  }

  function initCardTilt(){
    if (!window.matchMedia('(pointer:fine)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const targets = document.querySelectorAll('.service-card, .team-member, .purpose-feature, .reference-card, .org-switch-card');
    targets.forEach(card => {
      card.classList.add('tilt-surface');
      card.addEventListener('pointermove', e => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - .5;
        const y = (e.clientY - r.top) / r.height - .5;
        card.style.transform = `perspective(900px) rotateX(${(-y*3).toFixed(2)}deg) rotateY(${(x*4).toFixed(2)}deg) translateY(-5px)`;
      });
      card.addEventListener('pointerleave', () => { card.style.transform = ''; });
    });
  }

  function initMagneticButtons(){
    if (!window.matchMedia('(pointer:fine)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    document.querySelectorAll('.hero-actions .btn, .contact-actions .btn, .header-cta').forEach(btn => {
      btn.addEventListener('pointermove', e => {
        const r = btn.getBoundingClientRect();
        const x = (e.clientX - (r.left + r.width / 2)) * .08;
        const y = (e.clientY - (r.top + r.height / 2)) * .12;
        btn.style.transform = `translate(${x}px, ${y}px)`;
      });
      btn.addEventListener('pointerleave', () => { btn.style.transform = ''; });
    });
  }

  function initImageParallax(){
    if (!window.matchMedia('(pointer:fine)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const visual = document.querySelector('.hero-visual');
    if (!visual) return;
    visual.addEventListener('pointermove', e => {
      const r = visual.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - .5;
      const y = (e.clientY - r.top) / r.height - .5;
      visual.querySelectorAll('.floating-card').forEach((el, i) => {
        const strength = i ? 12 : -10;
        el.style.translate = `${x * strength}px ${y * strength}px`;
      });
    });
    visual.addEventListener('pointerleave', () => {
      visual.querySelectorAll('.floating-card').forEach(el => { el.style.translate = ''; });
    });
  }

  function bootEnhancements(){
    initScrollProgress();
    initPointerGlow();
    initCardTilt();
    initMagneticButtons();
    initImageParallax();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', bootEnhancements);
  else bootEnhancements();
})();
