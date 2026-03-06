document.addEventListener('DOMContentLoaded', () => {
  const getValue = (path) => path.split('.').reduce((obj, key) => obj && obj[key], CONFIG);

  const setDataConfigContent = () => {
    document.querySelectorAll('[data-config]').forEach((el) => {
      const path = el.getAttribute('data-config');
      const value = getValue(path);
      if (!value) return;

      if (el.tagName === 'IMG') {
        el.src = value;
      } else if (el.tagName === 'A') {
        const isUrlField = path.endsWith('.url') || /^https?:|^mailto:|^#/.test(value);
        if (isUrlField) el.href = value;
        else el.textContent = value;
      } else {
        el.innerHTML = value;
      }
    });
  };

  const setGlobalBranding = () => {
    document.querySelectorAll('.brand-name').forEach((el) => {
      el.textContent = CONFIG.global.clubName;
    });

    document.querySelectorAll('.brand-sub').forEach((el) => {
      el.textContent = CONFIG.global.university;
    });

    document.querySelectorAll('.instagram-link').forEach((el) => {
      el.href = CONFIG.global.footer.socials.instagram || '#';
    });
    document.querySelectorAll('.linkedin-link').forEach((el) => {
      el.href = CONFIG.global.footer.socials.linkedin || '#';
    });
    document.querySelectorAll('.facebook-link').forEach((el) => {
      el.href = CONFIG.global.footer.socials.facebook || '#';
    });
    document.querySelectorAll('.github-link').forEach((el) => {
      el.href = CONFIG.global.footer.socials.github || '#';
    });
  };

  const renderProjects = () => {
    const grid = document.getElementById('projectsGrid');
    if (!grid) return;

    grid.innerHTML = CONFIG.home.projects.map((project, i) => `
      <article class="project-card reveal delay-${(i % 3) + 1}">
        <img src="${project.image}" alt="${project.title}" loading="lazy" />
        <div class="project-content">
          <span class="tag">${project.tag}</span>
          <h3>${project.title}</h3>
          <p>${project.description}</p>
        </div>
      </article>
    `).join('');
  };

  const renderEvents = () => {
    const grid = document.getElementById('eventsGrid');
    if (!grid) return;

    grid.innerHTML = CONFIG.events.items.map((event) => `
      <article class="event-card reveal" data-status="${event.status}">
        <div class="event-meta">
          <span class="pill ${event.status}">${event.status}</span>
          <span>${event.date}</span>
        </div>
        <h3>${event.title}</h3>
        <p>${event.text}</p>
        <small>${event.info}</small>
      </article>
    `).join('');
  };

  const renderTeam = () => {
    const grid = document.getElementById('teamGrid');
    if (!grid) return;

    grid.innerHTML = CONFIG.team.members.map((member) => `
      <article class="member-card reveal">
        <img src="${member.image}" alt="${member.name}" loading="lazy" />
        <div class="member-body">
          <h3>${member.name}</h3>
          <p class="member-role">${member.role}</p>
          <p>${member.bio}</p>
          <div class="member-socials">
            ${member.socials?.linkedin ? `<a href="${member.socials.linkedin}" target="_blank" rel="noopener noreferrer" aria-label="${member.name} LinkedIn">LinkedIn</a>` : ''}
            ${member.socials?.instagram ? `<a href="${member.socials.instagram}" target="_blank" rel="noopener noreferrer" aria-label="${member.name} Instagram">Instagram</a>` : ''}
          </div>
        </div>
      </article>
    `).join('');
  };

  const renderPartners = () => {
    const grid = document.getElementById('partnersGrid');
    if (!grid) return;

    grid.innerHTML = CONFIG.home.partners.map((partner) => `
      <article class="partner-card reveal">
        <span>${partner.name}</span>
      </article>
    `).join('');
  };

  const setupMenu = () => {
    const toggle = document.getElementById('menuToggle');
    const menu = document.getElementById('mobileMenu');
    if (!toggle || !menu) return;

    toggle.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });

    menu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        menu.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  };

  const setupEventFilters = () => {
    document.querySelectorAll('.filter-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;
        document.querySelectorAll('#eventsGrid [data-status]').forEach((card) => {
          const visible = filter === 'all' || card.dataset.status === filter;
          card.style.display = visible ? '' : 'none';
        });
      });
    });
  };

  const setupRevealAnimations = () => {
    const items = document.querySelectorAll('.reveal, .reveal-right');
    if (!('IntersectionObserver' in window)) {
      items.forEach((el) => el.classList.add('visible'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    items.forEach((el) => observer.observe(el));
  };

  const setupSmoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', (event) => {
        const target = document.querySelector(anchor.getAttribute('href'));
        if (!target) return;
        event.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  };

  const setupBackToTop = () => {
    const button = document.querySelector('.back-to-top');
    if (!button) return;

    window.addEventListener('scroll', () => {
      button.classList.toggle('visible', window.scrollY > 500);
    }, { passive: true });

    button.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  };

  setDataConfigContent();
  setGlobalBranding();
  renderProjects();
  renderEvents();
  renderTeam();
  renderPartners();
  setupMenu();
  setupEventFilters();
  setupRevealAnimations();
  setupSmoothScroll();
  setupBackToTop();
});
