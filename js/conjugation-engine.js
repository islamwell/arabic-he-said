/**
 * Conjugation Engine & Morphology (Sarf) Interactive Controller
 */

class ConjugationEngine {
  constructor() {
    this.currentTense = 'madi_active';
    this.currentPronoun = 'huwa';
    this.currentAjwafStep = 0;
  }

  init() {
    this.renderTenseTabs();
    this.renderPronounChips();
    this.renderActiveConjugation();
    this.renderAjwafSteps();
    this.renderDerivedForms();
    this.renderNominals();
    this.setupEventListeners();
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
          window.soundEngine.playClick();
        }
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        const total = window.SARF_DATA.ajwafMechanics.steps.length;
        if (this.currentAjwafStep < total - 1) {
          this.currentAjwafStep++;
          this.renderAjwafStepContent();
          window.soundEngine.playClick();
        }
      });
    }
  }

  renderTenseTabs() {
    const container = document.getElementById('tense-tabs-container');
    if (!container) return;

    const tenses = [
      { id: 'madi_active', label: 'الماضي المعلوم', en: 'Past Active' },
      { id: 'mudari_marfoo', label: 'المضارع المرفوع', en: 'Present Indicative' },
      { id: 'mudari_mansoob', label: 'المضارع المنصوب (لَنْ)', en: 'Subjunctive' },
      { id: 'mudari_majzoom', label: 'المضارع المجزوم (لَمْ)', en: 'Jussive' },
      { id: 'amr', label: 'الأمر', en: 'Imperative' },
      { id: 'passive', label: 'المبني للمجهول', en: 'Passive Voice' }
    ];

    container.innerHTML = tenses.map(t => `
      <button class="tense-tab-btn ${t.id === this.currentTense ? 'active' : ''}" data-tense="${t.id}">
        <span class="ar-tab-label">${t.label}</span>
        <span class="en-tab-sub">${t.en}</span>
      </button>
    `).join('');

    container.querySelectorAll('.tense-tab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const tense = e.currentTarget.dataset.tense;
        this.currentTense = tense;
        window.soundEngine.playClick();
        
        // Update active class
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
        window.soundEngine.playClick();
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
      // Fallback
      const firstKey = Object.keys(tenseData.forms)[0];
      formData = tenseData.forms[firstKey];
    }

    const pronounObj = window.SARF_DATA.pronouns.find(p => p.id === this.currentPronoun) || { ar: 'الضمير', en: '' };

    card.innerHTML = `
      <div class="conjugation-hero">
        <div class="conjugation-header">
          <div class="tense-badge">${tenseData.title}</div>
          <div class="pronoun-badge">${pronounObj.ar} (${pronounObj.en})</div>
        </div>

        <div class="word-display-row">
          <h2 class="main-arabic-word" id="spoken-word-target">${formData.word}</h2>
          <button class="audio-listen-btn" id="listen-word-btn" title="Listen / استمع">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
            </svg>
          </button>
        </div>
        
        <div class="phonetic-text">${formData.phonetic || ''}</div>

        <div class="irab-ending-tag">
          <span class="ending-label">حركة البناء / الإعراب:</span>
          <span class="ending-pill">${formData.endingType || formData.ending}</span>
        </div>

        <div class="morphology-note-box">
          <div class="note-icon">💡</div>
          <div class="note-content">
            <strong>تحليل القاعدة الصرفية:</strong>
            <p>${formData.notes}</p>
          </div>
        </div>
      </div>
    `;

    const audioBtn = card.querySelector('#listen-word-btn');
    if (audioBtn) {
      audioBtn.addEventListener('click', () => {
        window.soundEngine.playPop();
        window.soundEngine.speakArabic(formData.word);
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
    const prevBtn = document.getElementById('ajwaf-prev-btn');
    const nextBtn = document.getElementById('ajwaf-next-btn');

    if (!container || !step) return;

    if (indicator) {
      indicator.textContent = `خطوة ${step.step} من ${steps.length}`;
    }

    if (prevBtn) prevBtn.disabled = this.currentAjwafStep === 0;
    if (nextBtn) nextBtn.disabled = this.currentAjwafStep === steps.length - 1;

    container.innerHTML = `
      <div class="ajwaf-step-card animate-fade-in">
        <div class="step-num-bubble">${step.step}</div>
        <h4 class="step-title">${step.title}</h4>
        <div class="step-formula-box">${step.formula}</div>
        <p class="step-explanation">${step.explanation}</p>
      </div>
    `;
  }

  renderDerivedForms() {
    const container = document.getElementById('derived-forms-table-body');
    if (!container) return;

    container.innerHTML = window.SARF_DATA.derivedForms.map(f => `
      <div class="derived-form-card">
        <div class="form-header">
          <span class="form-title-badge">${f.form}</span>
          <span class="form-arabic-pattern">${f.arabicPattern}</span>
        </div>
        <div class="form-meaning"><strong>المعنى:</strong> ${f.meaning}</div>
        <div class="form-quran-box">
          <span class="quran-quote">📖 ${f.quranExample}</span>
        </div>
        <div class="form-notes-detail">${f.notes}</div>
      </div>
    `).join('');
  }

  renderNominals() {
    const container = document.getElementById('nominals-container');
    if (!container) return;

    container.innerHTML = window.SARF_DATA.nominals.map(n => `
      <div class="nominal-card">
        <div class="nominal-header">
          <span class="nominal-type-badge">${n.type}</span>
          <span class="nominal-arabic-word">${n.word}</span>
        </div>
        <div class="nominal-meaning"><strong>المعنى:</strong> ${n.meaning}</div>
        ${n.plural !== '-' ? `<div class="nominal-plural"><strong>الجمع:</strong> ${n.plural}</div>` : ''}
        <div class="nominal-quran"><strong>الشاهد القرآني:</strong> ${n.quran}</div>
      </div>
    `).join('');
  }
}

window.conjugationEngine = new ConjugationEngine();
