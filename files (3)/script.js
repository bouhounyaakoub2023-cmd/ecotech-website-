document.addEventListener('DOMContentLoaded', () => {

  // ── Navbar scroll ──────────────────────
  const navbar = document.getElementById('navbar');
  const backToTop = document.createElement('button');
  backToTop.className = 'back-to-top';
  backToTop.innerHTML = '<svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5"/></svg>';
  backToTop.setAttribute('aria-label', 'Back to top');
  document.body.appendChild(backToTop);

  // ── Populate Content from CONFIG ────────
  function populateContent() {
    if (typeof CONFIG === 'undefined') return;

    // Helper to get nested value
    const getValue = (path) => {
      return path.split('.').reduce((obj, key) => obj && obj[key], CONFIG);
    };

    // Populate elements with [data-config]
    document.querySelectorAll('[data-config]').forEach(el => {
      const path = el.getAttribute('data-config');
      const value = getValue(path);
      if (value) {
        if (el.tagName === 'IMG') el.src = value;
        else if (el.tagName === 'A') el.href = value;
        else el.innerHTML = value;
      }
    });

    // Populate Global Branding
    const brandNames = document.querySelectorAll('.brand-name, .footer-brand-name');
    brandNames.forEach(el => el.textContent = CONFIG.global.clubName);
    
    const brandSubs = document.querySelectorAll('.brand-sub, .footer-brand-sub');
    brandSubs.forEach(el => el.textContent = CONFIG.global.university);

    const contactEmails = document.querySelectorAll('a[href^="mailto:"]');
    contactEmails.forEach(el => {
      el.href = `mailto:${CONFIG.global.contactEmail}`;
      el.textContent = CONFIG.global.contactEmail;
    });

    // Populate Footer
    const footerDesc = document.querySelector('.footer-desc');
    if (footerDesc) footerDesc.textContent = CONFIG.global.footer.description;

    const footerBottomInner = document.querySelector('.footer-bottom-inner');
    if (footerBottomInner) {
      footerBottomInner.innerHTML = `
        <span>${CONFIG.global.footer.copyright}</span>
        <span>${CONFIG.global.footer.credits}</span>
      `;
    }

    // Populate Footer Socials
    const footerSocials = CONFIG.global.footer.socials;
    if (footerSocials) {
      const ig = document.querySelector('.instagram-link');
      if (ig) ig.href = footerSocials.instagram || '#';
      
      const li = document.querySelector('.linkedin-link');
      if (li) li.href = footerSocials.linkedin || '#';
      
      const fb = document.querySelector('.facebook-link');
      if (fb) fb.href = footerSocials.facebook || '#';
      
      const gh = document.querySelector('.github-link');
      if (gh) gh.href = footerSocials.github || '#';
    }

    // Render Lists
    renderList('departments.items', '.dept-grid', (item) => `
      <div class="dept-card reveal">
        <div class="dept-card-img"><img src="${item.image}" alt="${item.title}" loading="lazy"/></div>
        <div class="dept-card-body">
          <span class="dept-num">${item.num}</span>
          <h3>${item.title}</h3>
          <p>${item.text}</p>
          <div class="dept-tags">${item.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}</div>
        </div>
      </div>
    `);

    renderList('events.items', '.events-grid', (item) => `
      <div class="event-card reveal" data-status="${item.status}">
        <div class="event-img">
          <img src="${item.image}" alt="${item.title}" loading="lazy"/>
          <span class="event-status ${item.status}">${item.status.charAt(0).toUpperCase() + item.status.slice(1)}</span>
        </div>
        <div class="event-body">
          <span class="event-date">${item.date}</span>
          <h3>${item.title}</h3>
          <p>${item.text}</p>
          <div class="event-footer">
            <a href="${item.status === 'upcoming' ? 'join.html' : '#'}" class="event-link">${item.cta}</a>
            <span class="event-info">${item.info}</span>
          </div>
        </div>
      </div>
    `);

    renderList('team.members', '.team-grid', (item) => `
      <div class="member-card reveal">
        <div class="member-img"><img src="${item.image}" alt="${item.name}" loading="lazy"/></div>
        <div class="member-body">
          <h3>${item.name}</h3>
          <span class="member-role">${item.role}</span>
          <p class="member-bio">${item.bio}</p>
          <div class="member-socials">
            ${item.socials && item.socials.instagram ? `<a href="${item.socials.instagram}" class="member-social" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg></a>` : ''}
            ${item.socials && item.socials.linkedin ? `<a href="${item.socials.linkedin}" class="member-social" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg></a>` : ''}
            ${item.socials && item.socials.github ? `<a href="${item.socials.github}" class="member-social" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/></svg></a>` : ''}
          </div>
        </div>
      </div>
    `);

    renderList('home.pillars.items', '.pillars-bento', (item, index) => {
      const isWide = index === 4; // Assuming 5th item might be wide or similar logic
      const isImg = item.image && (index === 2 || index === 3);
      if (isImg) {
        return `
          <div class="pillar-card pillar-img-card reveal">
            <img src="${item.image}" alt="${item.title}" loading="lazy"/>
            <div class="pillar-img-label">${item.title}</div>
          </div>
        `;
      }
      return `
        <div class="pillar-card pillar-text-card reveal ${isWide ? 'pillar-wide' : ''}">
          <h3>${item.title}</h3>
          <p>${item.text}</p>
        </div>
      `;
    });

    // Home Page Stories
    renderList('home.stories', '.stories-grid', (item) => `
       <div class="story-card reveal">
         <p class="story-quote">"${item.quote}"</p>
         <div class="story-author">
           <img src="${item.image}" alt="${item.author}" loading="lazy"/>
           <div><strong>${item.author}</strong><br><small>${item.role}, EcoTech Club</small></div>
         </div>
       </div>
     `);
    }

  function renderList(path, selector, templateFn) {
    const container = document.querySelector(selector);
    if (!container) return;
    
    const items = path.split('.').reduce((obj, key) => obj && obj[key], CONFIG);
    if (!items || !Array.isArray(items)) return;

    container.innerHTML = items.map(templateFn).join('');
  }

  populateContent();

  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.style.boxShadow = window.scrollY > 40
        ? '0 4px 32px rgba(0,0,0,0.4)' : '';
      
      if (window.scrollY > 400) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    }, { passive: true });
  }

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ── Mobile menu ────────────────────────
  const hamburger = document.querySelector('.nav-hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileClose = document.getElementById('mobileClose');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', isOpen);
    });
    mobileClose?.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
    mobileMenu.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      })
    );
  }

  // ── Scroll reveal ──────────────────────
  const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // stagger children if parent
        const children = entry.target.querySelectorAll('.delay-1, .delay-2, .delay-3, .delay-4');
        entry.target.classList.add('visible');
        children.forEach(c => c.classList.add('visible'));
        revealObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  revealEls.forEach(el => revealObs.observe(el));

  // ── Counter animation ──────────────────
  const counters = document.querySelectorAll('[data-target]');
  const counterObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-target'));
        const suffix = el.getAttribute('data-suffix') || '';
        let current = 0;
        const duration = 2000;
        const step = target / (duration / 16);
        
        const updateCounter = () => {
          current += step;
          if (current < target) {
            el.textContent = Math.floor(current) + suffix;
            requestAnimationFrame(updateCounter);
          } else {
            el.textContent = target + suffix;
          }
        };
        updateCounter();
        counterObs.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => counterObs.observe(c));

  // ── Hero Parallax Effect ────────────────
  const hero = document.querySelector('.hero');
  const heroImg = document.querySelector('.hero-img-overlap img');
  if (hero && heroImg) {
    hero.addEventListener('mousemove', (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 20;
      const y = (clientY / innerHeight - 0.5) * 20;
      heroImg.style.transform = `scale(1.1) translate(${x}px, ${y}px)`;
    }, { passive: true });

    hero.addEventListener('mouseleave', () => {
      heroImg.style.transform = 'scale(1) translate(0, 0)';
    });
  }

  // ── News / events filter tabs ──────────
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const parent = btn.closest('.events-section');
      const tabGroup = btn.closest('.filter-row');
      tabGroup?.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      const cards = parent?.querySelectorAll('[data-status]');
      cards?.forEach(card => {
        const val = card.dataset.status;
        card.style.display = (filter === 'all' || val === filter) ? '' : 'none';
      });
    });
  });

  // ── Join form ──────────────────────────
  const joinForm = document.getElementById('join-form');
  const successMsg = document.querySelector('.success-msg');
  if (joinForm && successMsg) {
    joinForm.addEventListener('submit', e => {
      e.preventDefault();
      joinForm.style.display = 'none';
      successMsg.classList.add('show');
    });
  }

  // ── Smooth anchor scroll ───────────────
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

});
