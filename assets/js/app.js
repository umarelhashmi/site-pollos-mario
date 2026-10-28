/**
 * Pollos Mario — 5-Location Unified Colombian Rotisserie, Steak & Seafood Application
 * Defaults to Orlando, FL (`orlando`) and dynamically switches store info, online ordering,
 * daily soups, and complete store-specific menus across all 5 locations.
 */
(function () {
  'use strict';

  const DATA = window.POLLOS_MARIO_DATA;
  if (!DATA || !Array.isArray(DATA.locations)) return;

  const LOCATIONS_BY_ID = {};
  DATA.locations.forEach((loc) => {
    LOCATIONS_BY_ID[loc.id] = loc;
  });

  let activeLocationId = DATA.defaultLocationId || 'orlando';
  let activeSancochoIdx = 0;
  let searchQuery = '';

  // DOM Elements
  const headerPhoneLink = document.getElementById('headerPhoneLink');
  const headerPhoneText = document.getElementById('headerPhoneText');
  const headerPrimaryOrderBtn = document.getElementById('headerPrimaryOrderBtn');
  const headerOrderPlatform = document.getElementById('headerOrderPlatform');

  const heroStoreTitle = document.getElementById('heroStoreTitle');
  const heroStoreAddress = document.getElementById('heroStoreAddress');
  const heroStorePhone = document.getElementById('heroStorePhone');
  const heroOrderBadges = document.getElementById('heroOrderBadges');
  const heroBottomStoreName = document.getElementById('heroBottomStoreName');
  const heroBottomItemCount = document.getElementById('heroBottomItemCount');

  const storePassportImg = document.getElementById('storePassportImg');
  const storeCodeBadge = document.getElementById('storeCodeBadge');
  const storePassportName = document.getElementById('storePassportName');
  const storePassportTagline = document.getElementById('storePassportTagline');
  const storePhoneBtn = document.getElementById('storePhoneBtn');
  const storePhoneLabel = document.getElementById('storePhoneLabel');
  const storeDirectionsBtn = document.getElementById('storeDirectionsBtn');
  const storeOrderCount = document.getElementById('storeOrderCount');
  const sidebarOrderList = document.getElementById('sidebarOrderList');
  const storeHoursList = document.getElementById('storeHoursList');
  const storeSocialsList = document.getElementById('storeSocialsList');

  const sancochoDayTabs = document.getElementById('sancochoDayTabs');
  const sancochoActiveDisplay = document.getElementById('sancochoActiveDisplay');
  const categoryNavList = document.getElementById('categoryNavList');

  const menuStageHeading = document.getElementById('menuStageHeading');
  const menuSourceBadge = document.getElementById('menuSourceBadge');
  const menuSearchInput = document.getElementById('menuSearchInput');
  const clearSearchBtn = document.getElementById('clearSearchBtn');
  const fiveStoresStrip = document.querySelector('.five-stores-strip');
  const menuCategoriesContainer = document.getElementById('menuCategoriesContainer');

  const reviewsGrid = document.getElementById('reviewsGrid');
  const aboutAttributesBoard = document.getElementById('aboutAttributesBoard');
  const footerLocationsGrid = document.getElementById('footerLocationsGrid');

  const photoLightbox = document.getElementById('photoLightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxCloseBtn = document.getElementById('lightboxCloseBtn');

  function escapeHtml(str) {
    return String(str || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function getTotalItems(loc) {
    return (loc.categories || []).reduce((acc, c) => acc + (c.items ? c.items.length : 0), 0);
  }

  function openLightbox(src, caption) {
    if (!photoLightbox || !src) return;
    lightboxImg.src = src;
    lightboxImg.alt = caption || 'Pollos Mario photo';
    lightboxCaption.textContent = caption || '';
    if (typeof photoLightbox.showModal === 'function') {
      photoLightbox.showModal();
    } else {
      photoLightbox.setAttribute('open', 'open');
    }
  }

  if (lightboxCloseBtn && photoLightbox) {
    lightboxCloseBtn.addEventListener('click', () => photoLightbox.close());
    photoLightbox.addEventListener('click', (e) => {
      if (e.target === photoLightbox) photoLightbox.close();
    });
  }

  function renderSancochoWheel(loc) {
    const soups = loc.dailySoups || [];
    if (!soups.length) {
      sancochoDayTabs.innerHTML = '';
      sancochoActiveDisplay.innerHTML = '';
      return;
    }
    if (activeSancochoIdx >= soups.length) activeSancochoIdx = 0;

    sancochoDayTabs.innerHTML = soups
      .map(
        (s, idx) => `
        <button
          type="button"
          class="sancocho-day-btn ${idx === activeSancochoIdx ? 'is-active' : ''}"
          data-soup-idx="${idx}"
          role="tab"
          aria-selected="${idx === activeSancochoIdx ? 'true' : 'false'}"
        >
          ${escapeHtml(s.dayEs || s.day)}
        </button>`
      )
      .join('');

    const activeSoup = soups[activeSancochoIdx];
    sancochoActiveDisplay.innerHTML = `
      <span class="sancocho-dish-title">${escapeHtml(activeSoup.name)}</span>
      <span class="sancocho-dish-price">${escapeHtml(activeSoup.price)}</span>
    `;
  }

  sancochoDayTabs.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-soup-idx]');
    if (!btn) return;
    activeSancochoIdx = parseInt(btn.getAttribute('data-soup-idx'), 10) || 0;
    renderSancochoWheel(LOCATIONS_BY_ID[activeLocationId]);
  });

  function renderFiveStoresStrip() {
    if (!fiveStoresStrip) return;
    fiveStoresStrip.innerHTML = DATA.locations
      .map((loc) => {
        const isActive = loc.id === activeLocationId;
        const platforms = (loc.orderingLinks || []).map((o) => o.platform).join(' · ');
        return `
          <div class="mini-store-card ${isActive ? 'is-active' : ''}" data-loc-card="${escapeHtml(loc.id)}" role="button" tabindex="0">
            <div>
              <div class="mini-store-top">
                <span class="mini-store-city">${escapeHtml(loc.shortName)}</span>
                <span class="mini-store-code">${escapeHtml(loc.code)}</span>
              </div>
              <div class="mini-store-addr">${escapeHtml(loc.address)}</div>
            </div>
            <div class="mini-store-links">
              <span class="mini-store-phone">${escapeHtml(loc.phone)}</span>
              <span class="mini-store-order-tag">${escapeHtml(platforms)}</span>
            </div>
          </div>
        `;
      })
      .join('');
  }

  if (fiveStoresStrip) {
    fiveStoresStrip.addEventListener('click', (e) => {
      const card = e.target.closest('[data-loc-card]');
      if (!card) return;
      setLocation(card.getAttribute('data-loc-card'), true);
    });
    fiveStoresStrip.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        const card = e.target.closest('[data-loc-card]');
        if (card) {
          e.preventDefault();
          setLocation(card.getAttribute('data-loc-card'), true);
        }
      }
    });
  }

  function renderMenu(loc) {
    const q = searchQuery.trim().toLowerCase();
    const categories = loc.categories || [];
    const filteredCats = [];

    categories.forEach((cat, idx) => {
      const items = (cat.items || []).filter((item) => {
        if (!q) return true;
        return (
          (item.name && item.name.toLowerCase().includes(q)) ||
          (item.description && item.description.toLowerCase().includes(q)) ||
          (cat.name && cat.name.toLowerCase().includes(q))
        );
      });
      if (items.length > 0) {
        filteredCats.push({
          idx,
          id: `cat-${loc.id}-${idx}`,
          name: cat.name,
          items
        });
      }
    });

    // Category Navigation Rail
    categoryNavList.innerHTML = filteredCats
      .map(
        (c, i) => `
        <button type="button" class="cat-nav-btn ${i === 0 ? 'is-active' : ''}" data-cat-target="${escapeHtml(c.id)}">
          <span>${escapeHtml(c.name)}</span>
          <span class="cat-count-pill">${c.items.length}</span>
        </button>`
      )
      .join('');

    if (!filteredCats.length) {
      menuCategoriesContainer.innerHTML = `
        <div class="menu-category-block">
          <p style="font-weight:700;">No dishes matched "${escapeHtml(searchQuery)}" at ${escapeHtml(loc.shortName)}. Try clearing the search filter.</p>
        </div>
      `;
      return;
    }

    menuCategoriesContainer.innerHTML = filteredCats
      .map(
        (c) => `
        <section class="menu-category-block" id="${escapeHtml(c.id)}">
          <header class="category-block-header">
            <h3 class="category-block-title">${escapeHtml(c.name)}</h3>
            <span class="category-block-badge">${c.items.length} ${c.items.length === 1 ? 'Item' : 'Items'}</span>
          </header>
          <div class="dish-ticket-grid">
            ${c.items
              .map((it) => {
                const thumbHtml = it.image
                  ? `<button type="button" class="dish-thumb-btn" data-lightbox-src="${escapeHtml(it.image)}" data-lightbox-cap="${escapeHtml(it.name + ' (' + loc.shortName + ' · ' + it.price + ')')}" aria-label="View photo of ${escapeHtml(it.name)}">
                      <img src="${escapeHtml(it.image)}" alt="${escapeHtml(it.name)}" class="dish-thumb" width="60" height="60" loading="lazy" />
                    </button>`
                  : '';
                return `
                  <article class="dish-item-ticket">
                    ${thumbHtml}
                    <div class="dish-info">
                      <div class="dish-title-row">
                        <h4 class="dish-name">${escapeHtml(it.name)}</h4>
                        ${it.price ? `<span class="dish-price-tag">${escapeHtml(it.price)}</span>` : ''}
                      </div>
                      ${it.description ? `<p class="dish-desc">${escapeHtml(it.description)}</p>` : ''}
                    </div>
                  </article>
                `;
              })
              .join('')}
          </div>
        </section>`
      )
      .join('');
  }

  categoryNavList.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-cat-target]');
    if (!btn) return;
    categoryNavList.querySelectorAll('.cat-nav-btn').forEach((b) => b.classList.remove('is-active'));
    btn.classList.add('is-active');
    const targetEl = document.getElementById(btn.getAttribute('data-cat-target'));
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });

  menuCategoriesContainer.addEventListener('click', (e) => {
    const thumbBtn = e.target.closest('[data-lightbox-src]');
    if (!thumbBtn) return;
    openLightbox(thumbBtn.getAttribute('data-lightbox-src'), thumbBtn.getAttribute('data-lightbox-cap'));
  });

  function setLocation(locId, updateHash) {
    const loc = LOCATIONS_BY_ID[locId] || LOCATIONS_BY_ID[DATA.defaultLocationId];
    if (!loc) return;
    activeLocationId = loc.id;

    // Default sancocho day to current weekday if 7 days present
    const dayMap = [6, 0, 1, 2, 3, 4, 5]; // Sun->6, Mon->0...
    const todayIdx = dayMap[new Date().getDay()] || 0;
    activeSancochoIdx = loc.dailySoups && loc.dailySoups.length === 7 ? todayIdx : 0;

    // 1. Update top navbar location buttons
    document.querySelectorAll('[data-loc-btn]').forEach((btn) => {
      const isMatch = btn.getAttribute('data-loc-btn') === loc.id;
      btn.classList.toggle('is-active', isMatch);
      btn.setAttribute('aria-current', isMatch ? 'page' : 'false');
    });

    // 2. Update header phone & primary order button
    headerPhoneLink.href = `tel:${loc.phoneTel}`;
    headerPhoneText.textContent = loc.phone;
    headerPrimaryOrderBtn.href = loc.primaryOrderUrl;
    headerOrderPlatform.textContent = loc.primaryOrderPlatform;

    // 3. Update Hero Top HUD
    heroStoreTitle.textContent = loc.name;
    heroStoreAddress.textContent = loc.address;
    heroStorePhone.href = `tel:${loc.phoneTel}`;
    heroStorePhone.textContent = loc.phone;

    heroOrderBadges.innerHTML = (loc.orderingLinks || [])
      .map(
        (o) => `
        <a href="${escapeHtml(o.url)}" target="_blank" rel="noopener noreferrer" class="hero-platform-pill">
          ${o.icon ? `<img src="${escapeHtml(o.icon)}" alt="${escapeHtml(o.platform)}" width="44" height="16" />` : ''}
          <span>Order ${escapeHtml(o.platform)} ↗</span>
        </a>`
      )
      .join('');

    // 4. Update Hero Triptych Prices for Active Store
    (DATA.heroTriptych || []).forEach((t, idx) => {
      const priceEl = document.getElementById(`heroPrice${idx}`);
      if (priceEl && t.pricesByStore) {
        priceEl.textContent = t.pricesByStore[loc.id] || t.pricesByStore.orlando;
      }
    });

    const totalItems = getTotalItems(loc);
    heroBottomStoreName.textContent = loc.shortName;
    heroBottomItemCount.textContent = String(totalItems);

    // 5. Update Left Sidebar Store Passport
    storePassportImg.src = loc.storefrontImage;
    storePassportImg.alt = `${loc.name} Storefront`;
    storeCodeBadge.textContent = loc.code;
    storePassportName.textContent = loc.name;
    storePassportTagline.textContent = loc.address;
    storePhoneBtn.href = `tel:${loc.phoneTel}`;
    storePhoneLabel.textContent = loc.phone;
    storeDirectionsBtn.href = loc.directionsUrl;

    const orderLinks = loc.orderingLinks || [];
    storeOrderCount.textContent = String(orderLinks.length);
    sidebarOrderList.innerHTML = orderLinks
      .map(
        (o) => `
        <a
          href="${escapeHtml(o.url)}"
          target="_blank"
          rel="noopener noreferrer"
          class="order-platform-chip ${o.primary ? 'is-primary' : ''}"
        >
          ${o.icon ? `<img src="${escapeHtml(o.icon)}" alt="${escapeHtml(o.platform)}" width="52" height="20" loading="lazy" />` : ''}
          <span>${escapeHtml(o.platform)} ↗</span>
        </a>`
      )
      .join('');

    storeHoursList.innerHTML = (loc.hours || [])
      .map(
        (h) => `
        <li>
          <span class="h-days">${escapeHtml(h.days)}</span>
          <span class="h-time">${escapeHtml(h.time)}</span>
        </li>`
      )
      .join('');

    storeSocialsList.innerHTML = (loc.socials || [])
      .map(
        (s) => `
        <a href="${escapeHtml(s.url)}" target="_blank" rel="noopener noreferrer" class="social-pill-link">
          <span>${escapeHtml(s.platform)}: ${escapeHtml(s.handle)} ↗</span>
        </a>`
      )
      .join('');

    // 6. Update Sancocho Rotary Card
    renderSancochoWheel(loc);

    // 7. Update Menu Heading, 5-Store Compare Strip & Menu Items
    menuStageHeading.textContent = `${loc.shortName} Menu`;
    menuSourceBadge.textContent = `${loc.menuSourceLabel} · ${totalItems} Items`;
    renderFiveStoresStrip();
    renderMenu(loc);

    if (updateHash) {
      history.replaceState(null, '', `#${loc.id}`);
    }
  }

  // Wire top navbar location buttons
  document.querySelectorAll('[data-loc-btn]').forEach((btn) => {
    btn.addEventListener('click', () => {
      setLocation(btn.getAttribute('data-loc-btn'), true);
    });
  });

  // Wire logo click to reset to Orlando default
  const logoLink = document.querySelector('[data-loc-trigger]');
  if (logoLink) {
    logoLink.addEventListener('click', (e) => {
      e.preventDefault();
      setLocation('orlando', true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Wire Hero Triptych panels to jump to that dish in the menu
  document.querySelectorAll('.triptych-panel[data-jump-query]').forEach((panel) => {
    panel.addEventListener('click', () => {
      const q = panel.getAttribute('data-jump-query') || '';
      searchQuery = q;
      if (menuSearchInput) menuSearchInput.value = q;
      if (clearSearchBtn) clearSearchBtn.hidden = !q;
      renderMenu(LOCATIONS_BY_ID[activeLocationId]);
      const board = document.getElementById('comanda-board');
      if (board) board.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // Wire Menu Search Input
  if (menuSearchInput) {
    menuSearchInput.addEventListener('input', () => {
      searchQuery = menuSearchInput.value || '';
      if (clearSearchBtn) clearSearchBtn.hidden = !searchQuery;
      renderMenu(LOCATIONS_BY_ID[activeLocationId]);
    });
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      searchQuery = '';
      menuSearchInput.value = '';
      clearSearchBtn.hidden = true;
      renderMenu(LOCATIONS_BY_ID[activeLocationId]);
    });
  }

  // Render Google Maps Reviews & About Attributes
  function renderReviewsAndAbout() {
    const g = DATA.googleReviews || {};
    if (reviewsGrid && Array.isArray(g.reviews)) {
      reviewsGrid.innerHTML = g.reviews
        .map(
          (r) => `
          <article class="review-ticket">
            <div>
              <div class="review-top">
                <span class="review-author">${escapeHtml(r.author)}</span>
                <span class="review-stars" aria-label="${r.rating} stars">${'★'.repeat(r.rating || 5)}</span>
              </div>
              <span class="review-dish-pill">${escapeHtml(r.dish)}</span>
              <p class="review-quote">“${escapeHtml(r.text)}”</p>
            </div>
          </article>`
        )
        .join('');
    }

    if (aboutAttributesBoard && g.aboutGroups) {
      const groups = [
        { title: 'Service Options', items: g.aboutGroups.service_options || ['Outdoor seating', 'Curbside pickup', 'Delivery', 'Takeout', 'Dine-in'] },
        { title: 'Highlights & Popular For', items: [...(g.aboutGroups.highlights || []), ...(g.aboutGroups.popular_for || [])] },
        { title: 'Offerings & Bar', items: g.aboutGroups.offerings || ['Cocktails', 'Beer', 'Wine', 'Coffee', 'Comfort food', 'Happy hour drinks', 'Late-night food'] },
        { title: 'Dining, Parking & Access', items: [...(g.aboutGroups.dining_options || []), ...(g.aboutGroups.parking || []), 'Wheelchair accessible'] }
      ];

      aboutAttributesBoard.innerHTML = groups
        .map(
          (grp) => `
          <div class="about-group-box">
            <div class="about-group-title">${escapeHtml(grp.title)}</div>
            <div class="about-chips-wrap">
              ${(grp.items || [])
                .slice(0, 10)
                .map((chip) => `<span class="about-chip">✓ ${escapeHtml(chip)}</span>`)
                .join('')}
            </div>
          </div>`
        )
        .join('');
    }
  }

  // Render Footer 5-Location Directory
  function renderFooterLocations() {
    if (!footerLocationsGrid) return;
    footerLocationsGrid.innerHTML = DATA.locations
      .map(
        (loc) => `
        <div class="footer-loc-col">
          <h3><a href="#${escapeHtml(loc.id)}" data-footer-loc="${escapeHtml(loc.id)}">${escapeHtml(loc.shortName)}</a></h3>
          <div>${escapeHtml(loc.address)}</div>
          <a href="tel:${escapeHtml(loc.phoneTel)}" class="footer-loc-phone">${escapeHtml(loc.phone)}</a>
          <div class="footer-loc-links">
            ${(loc.orderingLinks || [])
              .map(
                (o) =>
                  `<a href="${escapeHtml(o.url)}" target="_blank" rel="noopener noreferrer" class="footer-mini-badge">${escapeHtml(o.platform)} ↗</a>`
              )
              .join('')}
            ${(loc.socials || [])
              .map(
                (s) =>
                  `<a href="${escapeHtml(s.url)}" target="_blank" rel="noopener noreferrer" class="footer-mini-badge">${escapeHtml(s.platform)} ↗</a>`
              )
              .join('')}
          </div>
        </div>`
      )
      .join('');

    footerLocationsGrid.addEventListener('click', (e) => {
      const link = e.target.closest('[data-footer-loc]');
      if (!link) return;
      e.preventDefault();
      setLocation(link.getAttribute('data-footer-loc'), true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Initialize from hash or default to Orlando
  function init() {
    renderReviewsAndAbout();
    renderFooterLocations();

    const hashId = (window.location.hash || '').replace(/^#/, '').trim();
    const startId = LOCATIONS_BY_ID[hashId] ? hashId : DATA.defaultLocationId;
    setLocation(startId, false);

    window.addEventListener('hashchange', () => {
      const h = (window.location.hash || '').replace(/^#/, '').trim();
      if (LOCATIONS_BY_ID[h] && h !== activeLocationId) {
        setLocation(h, false);
      }
    });
  }

  init();
})();
