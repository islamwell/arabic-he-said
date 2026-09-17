/**
 * Conjugation Engine & Morphology (Sarf) Interactive Controller (English Interface)
 */

class ConjugationEngine {
  constructor() {
    this.currentTense = 'madi_active';
    this.currentPronoun = 'huwa';
    this.currentPronounCategory = 'all'; // 'all' | '3rd' | '2nd' | '1st'
    this.currentAjwafStep = 0;
  }

  init() {
    this.renderBeginnerPath();
    this.renderSideBySideComparison();
    this.setupSubnavQuickBar();
    this.setupPronounCategoryBar();
    this.renderTenseTabs();
    this.renderPronounChips();
    this.renderActiveConjugation();
    this.renderAjwafSteps();
    this.renderDerivedForms();
    this.renderNominals();
    this.setupEventListeners();
  }

  renderBeginnerPath() {
    const container = document.getElementById('beginner-path-container');
    if (!container || !window.SARF_DATA.beginnerFourWords) return;

    const words = window.SARF_DATA.beginnerFourWords;
    let selectedIdx = 0;

    const renderCard = () => {
      const activeWord = words[selectedIdx];
      container.innerHTML = `
        <div class="guided-beginner-panel">
          <div class="beginner-panel-header">
            <h3 class="beginner-panel-title">🌟 Start with these four words</h3>
            <p class="beginner-panel-instruction">Tap a word to see its meaning and what changes.</p>
          </div>

          <div class="beginner-four-grid">
            ${words.map((w, idx) => `
              <div class="beginner-word-card ${idx === selectedIdx ? 'active' : ''}" data-idx="${idx}">
                <div class="b-word-arabic">${w.word}</div>
                <div class="b-word-meaning">${w.meaning}</div>
                ${w.role ? `<div class="b-word-role">${w.role}</div>` : ''}
              </div>
            `).join('')}
          </div>

          <div class="beginner-insight-box">
            <div class="insight-meaning-row">
              <span>«${activeWord.word}»${activeWord.phonetic ? ` — <em>${activeWord.phonetic}</em>` : ''} (${activeWord.meaning})</span>
              <button class="b-word-speaker-btn" title="Listen" onclick="if(window.soundEngine){window.soundEngine.playPop();window.soundEngine.speakArabic('${activeWord.word}');}">🔊 Listen</button>
            </div>
            <div class="insight-point"><strong>What to notice:</strong> ${activeWord.notice}</div>
            <div class="insight-point"><strong>Why:</strong> ${activeWord.why}</div>
          </div>

          <div class="beginner-actions-row">
            <button class="btn-start-learning" id="beginner-start-btn">Start learning ➔</button>
            <button class="btn-show-all-forms" id="beginner-show-all-btn">Show all verb forms ▾</button>
          </div>
        </div>
      `;

      container.querySelectorAll('.beginner-word-card').forEach(c => {
        c.addEventListener('click', (e) => {
          selectedIdx = parseInt(e.currentTarget.dataset.idx, 10);
          if (window.soundEngine) window.soundEngine.playClick();
          renderCard();
        });
      });

      const startBtn = container.querySelector('#beginner-start-btn');
      if (startBtn) {
        startBtn.addEventListener('click', () => {
          const compSection = document.getElementById('side-by-side-section');
          if (compSection) {
            compSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            if (window.soundEngine) window.soundEngine.playClick();
          }
        });
      }

      const showAllBtn = container.querySelector('#beginner-show-all-btn');
      if (showAllBtn) {
        showAllBtn.addEventListener('click', () => {
          const allSection = document.getElementById('full-conjugation-section');
          if (allSection) {
            allSection.classList.remove('hidden');
            allSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            if (window.soundEngine) window.soundEngine.playClick();
          }
        });
      }
    };

    renderCard();
  }

  renderSideBySideComparison() {
    const container = document.getElementById('side-by-side-section');
    if (!container || !window.SARF_DATA.sideBySideComparison) return;

    const data = window.SARF_DATA.sideBySideComparison;
    const items = data.items || data.words || [];
    const takeaway = data.takeaway || "The verb stem (قُلْـ) is identical. Just look or listen for the final vowel: -tu = I, -ta = you (m.), -ti = you (f.).";

    container.innerHTML = `
      <div class="side-by-side-panel">
        <div class="side-by-side-header">
          <h3 class="side-by-side-title">${data.title}</h3>
          <p class="side-by-side-sub">${data.subtitle}</p>
        </div>

        <div class="side-by-side-grid">
          ${items.map(item => `
            <div class="comparison-card card-${item.pronounKey || 'ana'}">
              <div class="comp-vowel-pill">${item.vowel || (item.highlightPart || '')}</div>
              <div class="comp-word">${item.word}</div>
              <div class="comp-meaning">“${item.meaning}”</div>
              <div class="comp-person">${item.person || item.explanation || ''}</div>
            </div>
          `).join('')}
        </div>

        <div class="comparison-takeaway">
          💡 <strong>Takeaway:</strong> ${takeaway}
        </div>
      </div>
    `;
  }

  setupSubnavQuickBar() {
    const bar = document.getElementById('sarf-subnav');
    if (!bar) return;
    bar.querySelectorAll('.subnav-pill').forEach(pill => {
      pill.addEventListener('click', (e) => {
        const targetId = e.currentTarget.dataset.target;
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          bar.querySelectorAll('.subnav-pill').forEach(p => p.classList.remove('active'));
          e.currentTarget.classList.add('active');
          targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  setupPronounCategoryBar() {
    const bar = document.getElementById('pronoun-category-bar');
    if (!bar) return;
    bar.querySelectorAll('.pronoun-cat-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        this.currentPronounCategory = e.currentTarget.dataset.cat;
        if (window.soundEngine) window.soundEngine.playClick();
        bar.querySelectorAll('.pronoun-cat-btn').forEach(b => b.classList.remove('active'));
        e.currentTarget.classList.add('active');
        this.renderPronounChips();
      });
    });
  }

  setupEventListeners() {
    // Ajwaf stepper buttons
    const prevBtn = document.getElementById('ajwaf-prev-btn');
    const nextBtn = document.getElementById('ajwaf-next-btn');

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        if (this.currentAjwafStep > 0) {
          this.currentAjwafStep--;
          this.renderAjwafStepContent();
          if (window.soundEngine) window.soundEngine.playClick();
        }
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        const total = window.SARF_DATA.ajwafMechanics.steps.length;
        if (this.currentAjwafStep < total - 1) {
          this.currentAjwafStep++;
          this.renderAjwafStepContent();
          if (window.soundEngine) window.soundEngine.playClick();
        }
      });
    }

    // Speech synthesis feedback animation
    window.addEventListener('speech:start', () => {
      const audioBtn = document.getElementById('listen-word-btn');
      const wordEl = document.getElementById('spoken-word-target');
      if (audioBtn) audioBtn.classList.add('playing');
      if (wordEl) wordEl.classList.add('speaking');
    });

    window.addEventListener('speech:end', () => {
      const audioBtn = document.getElementById('listen-word-btn');
      const wordEl = document.getElementById('spoken-word-target');
      if (audioBtn) audioBtn.classList.remove('playing');
      if (wordEl) wordEl.classList.remove('speaking');
    });
  }

  renderTenseTabs() {
    const container = document.getElementById('tense-tabs-container');
    if (!container) return;

    const tenses = [
      { id: 'madi_active', label: 'الماضي المعلوم', en: 'Past Active' },
      { id: 'mudari_marfoo', label: 'المضارع المرفوع', en: 'Present Indicative' },
      { id: 'mudari_mansoob', label: 'المضارع المنصوب', en: 'Subjunctive (Lan)' },
      { id: 'mudari_majzoom', label: 'المضارع المجزوم', en: 'Jussive (Lam)' },
      { id: 'amr', label: 'الأمر', en: 'Imperative (Say!)' },
      { id: 'passive', label: 'المبني للمجهول', en: 'Passive Voice' }
    ];

    container.innerHTML = tenses.map(t => `
      <button class="tense-tab-btn ${t.id === this.currentTense ? 'active' : ''}" data-tense="${t.id}">
        <span class="ar-tab-label">${t.en}</span>
        <span class="en-tab-sub">${t.label}</span>
      </button>
    `).join('');

    container.querySelectorAll('.tense-tab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const tense = e.currentTarget.dataset.tense;
        this.currentTense = tense;
        if (window.soundEngine) window.soundEngine.playClick();
        
        container.querySelectorAll('.tense-tab-btn').forEach(b => b.classList.remove('active'));
        e.currentTarget.classList.add('active');

        // Adjust pronoun if amr (only 2nd person available)
        if (tense === 'amr' && !this.currentPronoun.startsWith('ant')) {
          this.currentPronoun = 'anta';
        }

        this.renderPronounChips();
        this.renderActiveConjugation();
      });
    });
  }

  renderPronounChips() {
    const container = document.getElementById('pronoun-chips-container');
    if (!container) return;

    let pronouns = window.SARF_DATA.pronouns;
    
    // Filter for Amr (only 2nd person)
    if (this.currentTense === 'amr') {
      pronouns = pronouns.filter(p => p.id.startsWith('ant'));
    } else if (this.currentPronounCategory !== 'all') {
      // Filter by category: 3rd, 2nd, 1st
      pronouns = pronouns.filter(p => p.category.startsWith(this.currentPronounCategory));
    }

    // Ensure current pronoun is valid in this view
    if (!pronouns.some(p => p.id === this.currentPronoun)) {
      if (pronouns.length > 0) {
        this.currentPronoun = pronouns[0].id;
        this.renderActiveConjugation();
      }
    }

    container.innerHTML = pronouns.map(p => `
      <button class="pronoun-chip ${p.id === this.currentPronoun ? 'active' : ''}" data-pronoun="${p.id}">
        <span class="ar-pronoun">${p.ar}</span>
        <span class="en-pronoun">${p.en}</span>
      </button>
    `).join('');

    container.querySelectorAll('.pronoun-chip').forEach(chip => {
      chip.addEventListener('click', (e) => {
        this.currentPronoun = e.currentTarget.dataset.pronoun;
        if (window.soundEngine) window.soundEngine.playClick();
        container.querySelectorAll('.pronoun-chip').forEach(c => c.classList.remove('active'));
        e.currentTarget.classList.add('active');
        this.renderActiveConjugation();
      });
    });
  }

  renderActiveConjugation() {
    const card = document.getElementById('active-conjugation-card');
    if (!card) return;

    const tenseData = window.SARF_DATA.conjugations[this.currentTense];
    if (!tenseData) return;

    let formData = tenseData.forms[this.currentPronoun];

    // Handle passive object structure
    if (this.currentTense === 'passive') {
      const keys = Object.keys(tenseData.forms);
      const matchedKey = keys.find(k => k.startsWith(this.currentPronoun)) || keys[0];
      formData = tenseData.forms[matchedKey];
    }

    if (!formData) {
      const firstKey = Object.keys(tenseData.forms)[0];
      formData = tenseData.forms[firstKey];
    }

    const pronounObj = window.SARF_DATA.pronouns.find(p => p.id === this.currentPronoun) || { ar: 'الضمير', en: 'Pronoun' };

    const endingRaw = formData.endingType || formData.ending || '';
    const endingMatch = endingRaw.match(/^(.*?)\s*\((.*?)\)$/);
    const endingHtml = endingMatch 
      ? `<span class="ending-en" dir="ltr">${endingMatch[2]}</span> <span class="ending-sep">•</span> <span class="ending-ar" dir="rtl">${endingMatch[1]}</span>`
      : `<span dir="auto">${endingRaw}</span>`;

    const tenseMatch = tenseData.title.match(/^(.*?)\s*\((.*?)\)$/);
    const tenseBadgeText = tenseMatch ? tenseMatch[2] : tenseData.title;

    card.innerHTML = `
      <div class="conjugation-hero">
        <div class="conjugation-header">
          <div class="tense-badge">${tenseBadgeText}</div>
          <div class="pronoun-badge"><strong>${pronounObj.en}</strong> <span class="badge-sep">•</span> <span class="badge-ar" dir="rtl">${pronounObj.ar}</span></div>
        </div>

        <div class="word-display-row">
          <h2 class="main-arabic-word" id="spoken-word-target">${formData.word}</h2>
          <button class="audio-listen-btn" id="listen-word-btn" title="Listen to Pronunciation">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
            </svg>
          </button>
        </div>
        
        <div class="phonetic-text">${formData.phonetic || ''} • <strong>${formData.meaning || pronounObj.en}</strong></div>

        <!-- Explanation: Meaning → What to notice → Why -->
        <div class="morphology-note-box">
          <div class="note-content" style="width: 100%;">
            ${formData.meaning ? `<p style="margin-bottom: 6px;"><strong>Meaning:</strong> “${formData.meaning}”</p>` : ''}
            ${formData.notice ? `<p style="margin-bottom: 6px;"><strong>What to notice:</strong> ${formData.notice}</p>` : ''}
            ${formData.why ? `<p style="margin-bottom: 6px;"><strong>Why:</strong> ${formData.why}</p>` : ''}
            ${!formData.notice && formData.notes ? `<p>${formData.notes}</p>` : ''}

            <!-- Grammar Details Drawer Toggle -->
            <div class="grammar-toggle-wrap">
              <button class="grammar-toggle-btn" id="grammar-toggle-btn" type="button">
                <span id="grammar-toggle-text">Show grammar details</span> <span id="grammar-toggle-arrow">▾</span>
              </button>
              <div class="grammar-details-drawer hidden" id="grammar-details-drawer">
                <p style="margin-bottom: 6px;"><strong>Ending:</strong> ${formData.ending || endingHtml}</p>
                <p><strong>Grammar note:</strong> ${formData.grammarDetails || formData.endingType || formData.notes || 'Built on fixed vowel'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    const audioBtn = card.querySelector('#listen-word-btn');
    if (audioBtn) {
      audioBtn.addEventListener('click', () => {
        if (window.soundEngine) {
          window.soundEngine.playPop();
          window.soundEngine.speakArabic(formData.word);
        }
      });
    }

    const toggleBtn = card.querySelector('#grammar-toggle-btn');
    const drawer = card.querySelector('#grammar-details-drawer');
    const toggleText = card.querySelector('#grammar-toggle-text');
    const toggleArrow = card.querySelector('#grammar-toggle-arrow');

    if (toggleBtn && drawer) {
      toggleBtn.addEventListener('click', () => {
        const isHidden = drawer.classList.contains('hidden');
        drawer.classList.toggle('hidden');
        if (toggleText) toggleText.textContent = isHidden ? 'Hide grammar details' : 'Show grammar details';
        if (toggleArrow) toggleArrow.textContent = isHidden ? '▴' : '▾';
        if (window.soundEngine) window.soundEngine.playClick();
      });
    }
  }

  renderAjwafSteps() {
    this.renderAjwafStepContent();
  }

  renderAjwafStepContent() {
    const steps = window.SARF_DATA.ajwafMechanics.steps;
    const step = steps[this.currentAjwafStep];
    const container = document.getElementById('ajwaf-step-container');
    const indicator = document.getElementById('ajwaf-step-indicator');
    const dotsContainer = document.getElementById('ajwaf-step-dots');
    const prevBtn = document.getElementById('ajwaf-prev-btn');
    const nextBtn = document.getElementById('ajwaf-next-btn');

    if (!container || !step) return;

    if (indicator) {
      indicator.textContent = `Step ${this.currentAjwafStep + 1} of ${steps.length}`;
    }

    // Render clickable step dots
    if (dotsContainer) {
      dotsContainer.innerHTML = steps.map((s, idx) => `
        <button class="step-dot ${idx === this.currentAjwafStep ? 'active' : ''}" data-step="${idx}" title="Step ${idx + 1}">${idx + 1}</button>
      `).join('');

      dotsContainer.querySelectorAll('.step-dot').forEach(dot => {
        dot.addEventListener('click', (e) => {
          this.currentAjwafStep = parseInt(e.currentTarget.dataset.step, 10);
          if (window.soundEngine) window.soundEngine.playClick();
          this.renderAjwafStepContent();
        });
      });
    }

    if (prevBtn) prevBtn.disabled = this.currentAjwafStep === 0;
    if (nextBtn) nextBtn.disabled = this.currentAjwafStep === steps.length - 1;

    container.innerHTML = `
      <div class="ajwaf-step-card animate-fade-in">
        <div class="step-num-bubble">${this.currentAjwafStep + 1}</div>
        <h4 class="step-title">${step.title}</h4>
        <div class="step-formula-box">${step.formula}</div>
        <p class="step-explanation">${step.explanation}</p>
      </div>
    `;
  }

  renderDerivedForms() {
    const container = document.getElementById('derived-forms-table-body');
    if (!container || !window.SARF_DATA.derivedForms) return;

    const forms = window.SARF_DATA.derivedForms;
    container.innerHTML = forms.map(f => {
      const title = f.name ? `${f.form}: ${f.name}` : (f.form || '');
      const pattern = f.arabicPattern || (f.past && f.present ? `${f.past} - ${f.present}${f.masdar ? ` - ${f.masdar}` : ''}` : '');

      return `
        <div class="derived-form-card">
          <div class="form-header">
            <span class="form-title-badge">${title}</span>
            <span class="form-arabic-pattern" dir="rtl">${pattern}</span>
          </div>
          <div class="form-meaning"><strong>Meaning:</strong> ${f.meaning || ''}</div>
          ${f.quranExample ? `
            <div class="form-quran-box">
              <strong>Example:</strong> «${f.quranExample}»
            </div>
          ` : ''}
          ${f.notes ? `<div class="form-notes-detail">${f.notes}</div>` : ''}
        </div>
      `;
    }).join('');
  }

  renderNominals() {
    const container = document.getElementById('nominals-container');
    if (!container || !window.SARF_DATA.nominals) return;

    const nominals = window.SARF_DATA.nominals;
    container.innerHTML = nominals.map(n => `
      <div class="nominal-card">
        <div class="nominal-header">
          <span class="nominal-type-badge">${n.type || ''}</span>
          <span class="nominal-arabic-word">${n.word || ''}</span>
        </div>
        <div class="nominal-meaning"><strong>Definition:</strong> ${n.meaning || ''}</div>
        <div class="nominal-plural"><strong>Plural / Pattern:</strong> ${n.plural || n.pattern || '—'}</div>
        ${(n.quran || n.quranRef) ? `<div class="nominal-quran"><strong>Quran Context:</strong> «${n.quran || n.quranRef}»</div>` : ''}
      </div>
    `).join('');
  }
}

window.conjugationEngine = new ConjugationEngine();
