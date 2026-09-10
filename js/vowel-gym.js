/**
 * Vowel Gym (Syntax & I'rab Master Gym) Controller (English Interface)
 * Interactive drills and deep grammatical rationale for Fatḥah, Ḍammah, Kasrah, and Sukūn
 */

class VowelGym {
  constructor() {
    this.currentMode = 'study'; // 'study' | 'drill'
    this.currentRuleTab = 'fatha';
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.streak = 0;
    this.hasAnswered = false;
  }

  init() {
    this.setupModeSwitcher();
    this.renderRuleTabs();
    this.renderActiveRuleContent();
    this.initDrill();
    this.setupEventListeners();
  }

  setupModeSwitcher() {
    const switchContainer = document.getElementById('vowel-mode-switch');
    if (!switchContainer) return;
    const studyWrapper = document.getElementById('vowel-study-wrapper');
    const drillWrapper = document.getElementById('vowel-drill-wrapper');

    switchContainer.querySelectorAll('.vowel-mode-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const mode = e.currentTarget.dataset.mode;
        this.currentMode = mode;
        if (window.soundEngine) window.soundEngine.playClick();
        switchContainer.querySelectorAll('.vowel-mode-btn').forEach(b => b.classList.remove('active'));
        e.currentTarget.classList.add('active');

        if (mode === 'study') {
          if (studyWrapper) studyWrapper.style.display = 'block';
          if (drillWrapper) drillWrapper.style.display = 'block';
        } else {
          if (studyWrapper) studyWrapper.style.display = 'none';
          if (drillWrapper) {
            drillWrapper.style.display = 'block';
            drillWrapper.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      });
    });
  }

  setupEventListeners() {
    const nextBtn = document.getElementById('drill-next-btn');
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        this.nextQuestion();
      });
    }

    // Keyboard shortcuts for drills
    window.addEventListener('keydown', (e) => {
      if (window.app && window.app.currentTab !== 'vowel-gym') return;
      if (this.hasAnswered) {
        if (e.key === 'Enter' || e.key === ' ') {
          const nBtn = document.getElementById('drill-next-btn');
          if (nBtn && !nBtn.classList.contains('hidden')) {
            this.nextQuestion();
            e.preventDefault();
          }
        }
        return;
      }
      const keyMap = { '1': 0, '2': 1, '3': 2, '4': 3, 'a': 0, 'b': 1, 'c': 2, 'd': 3 };
      const keyLower = e.key.toLowerCase();
      if (keyMap[keyLower] !== undefined) {
        const questions = window.NAHW_DATA && window.NAHW_DATA.drillQuestions ? window.NAHW_DATA.drillQuestions : [];
        const q = questions[this.currentQuestionIndex % questions.length];
        const container = document.getElementById('drill-card-container');
        if (q && container) {
          this.handleAnswer(q, keyMap[keyLower], container);
          e.preventDefault();
        }
      }
    });
  }

  renderRuleTabs() {
    const container = document.getElementById('vowel-rule-tabs');
    if (!container) return;

    const vowels = [
      { id: 'fatha', symbol: 'ـَ', name: 'Fatḥah (ـَ)' },
      { id: 'dammah', symbol: 'ـُ', name: 'Ḍammah (ـُ)' },
      { id: 'kasrah', symbol: 'ـِ', name: 'Kasrah (ـِ)' },
      { id: 'sukun', symbol: 'ـْ', name: 'Sukūn (ـْ)' }
    ];

    container.innerHTML = vowels.map(v => `
      <button class="vowel-tab-btn ${v.id === this.currentRuleTab ? 'active' : ''} tab-${v.id}" data-vowel="${v.id}">
        <span class="vowel-tab-symbol">${v.symbol}</span>
        <span class="vowel-tab-name">${v.name}</span>
      </button>
    `).join('');

    container.querySelectorAll('.vowel-tab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        this.currentRuleTab = e.currentTarget.dataset.vowel;
        if (window.soundEngine) window.soundEngine.playClick();
        container.querySelectorAll('.vowel-tab-btn').forEach(b => b.classList.remove('active'));
        e.currentTarget.classList.add('active');
        this.renderActiveRuleContent();
      });
    });
  }

  renderActiveRuleContent() {
    const container = document.getElementById('vowel-rule-details');
    if (!container) return;

    const guide = window.NAHW_DATA.vowelGuides[this.currentRuleTab];
    if (!guide) return;

    const guideNameMatch = guide.name.match(/^(.*?)\s*\((.*?)\)$/);
    const guideTitleHtml = guideNameMatch
      ? `${guideNameMatch[2]} • <span class="ar-inline" dir="rtl">${guideNameMatch[1]}</span>`
      : guide.name;

    container.innerHTML = `
      <div class="vowel-guide-header ${guide.colorClass}">
        <div class="vowel-big-symbol">${guide.symbol}</div>
        <div class="vowel-guide-title-block">
          <h3 class="vowel-guide-title">${guideTitleHtml}</h3>
          <p class="vowel-guide-sub">When and why does this vowel mark appear on root Q-W-L and its forms?</p>
        </div>
      </div>

      <div class="vowel-rules-list">
        ${guide.rules.map(r => {
          const titleMatch = r.title.match(/^(.*?)\s*\((.*?)\)$/);
          let titleHtml;
          if (titleMatch) {
            const numMatch = titleMatch[1].match(/^(\d+\.)\s*(.*)$/);
            const num = numMatch ? numMatch[1] : '';
            const ar = numMatch ? numMatch[2] : titleMatch[1];
            const en = titleMatch[2];
            titleHtml = `<span class="rule-num-tag">${num}</span> <span class="rule-name-en">${en}</span> <span class="rule-sep">•</span> <span class="rule-name-ar" dir="rtl">${ar}</span>`;
          } else {
            titleHtml = `<span dir="auto">${r.title}</span>`;
          }
          return `
          <div class="rule-card">
            <h4 class="rule-title">${titleHtml}</h4>
            <p class="rule-detail">${r.detail}</p>
            <div class="rule-examples-box">
              <span class="examples-header">Applied Quranic Examples:</span>
              ${r.examples.map(ex => `
                <div class="example-item">
                  <div class="example-text">
                    <span class="ex-sentence">${ex.text}</span>
                    <button class="mini-speaker-btn" onclick="window.soundEngine.speakArabic('${ex.text.replace(/'/g, "\\'")}')" title="Listen">🔊</button>
                  </div>
                  <div class="example-reason"><strong>Grammar Rule:</strong> <span dir="auto">${ex.reason}</span></div>
                </div>
              `).join('')}
            </div>
          </div>
        `;}).join('')}
      </div>
    `;
  }

  initDrill() {
    this.renderCurrentQuestion();
  }

  renderCurrentQuestion() {
    const questions = window.NAHW_DATA && window.NAHW_DATA.drillQuestions ? window.NAHW_DATA.drillQuestions : [];
    if (!questions || questions.length === 0) return;

    const q = questions[this.currentQuestionIndex % questions.length];
    const container = document.getElementById('drill-card-container');
    const feedbackBox = document.getElementById('drill-feedback-box');
    const nextBtn = document.getElementById('drill-next-btn');
    const progressText = document.getElementById('drill-progress-text');
    const progressFill = document.getElementById('drill-progress-fill');

    this.hasAnswered = false;
    if (feedbackBox) feedbackBox.classList.add('hidden');
    if (nextBtn) nextBtn.classList.add('hidden');

    if (progressText) {
      progressText.textContent = `Question ${(this.currentQuestionIndex % questions.length) + 1} of ${questions.length}`;
    }
    if (progressFill) {
      const pct = (((this.currentQuestionIndex % questions.length) + 1) / questions.length) * 100;
      progressFill.style.width = `${pct}%`;
    }

    if (!container || !q) return;

    const targetWord = q.wordFocus || 'قَالَ';
    const highlightedSentence = q.sentence.replace(
      targetWord,
      `<strong class="target-word-highlight">${targetWord}</strong>`
    );

    container.innerHTML = `
      <div class="drill-sentence-display">
        <div class="sentence-arabic-text">${highlightedSentence}</div>
        <button class="mini-speaker-btn" onclick="window.soundEngine.speakArabic('${q.sentence.replace(/'/g, "\\'")}')" title="Listen">🔊</button>
      </div>

      <div class="drill-prompt">
        <div class="prompt-arabic">${q.question}</div>
        <div class="prompt-english">${q.questionEn}</div>
      </div>

      <div class="drill-options-grid">
        ${q.options.map((opt, idx) => `
          <button class="drill-option-btn" data-index="${idx}">
            <span class="option-indicator">${['A', 'B', 'C', 'D'][idx]}</span>
            <span class="option-text">${opt.label}</span>
          </button>
        `).join('')}
      </div>
    `;

    container.querySelectorAll('.drill-option-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        if (this.hasAnswered) return;
        const selectedIdx = parseInt(e.currentTarget.dataset.index, 10);
        this.handleAnswer(q, selectedIdx, container);
      });
    });
  }

  handleAnswer(question, selectedIdx, container) {
    this.hasAnswered = true;
    const selectedOpt = question.options[selectedIdx];
    const isCorrect = selectedOpt && selectedOpt.correct === true;
    const optionBtns = container.querySelectorAll('.drill-option-btn');
    const feedbackBox = document.getElementById('drill-feedback-box');
    const nextBtn = document.getElementById('drill-next-btn');

    optionBtns.forEach((btn, idx) => {
      btn.disabled = true;
      if (question.options[idx] && question.options[idx].correct) {
        btn.classList.add('correct');
      } else if (idx === selectedIdx && !isCorrect) {
        btn.classList.add('incorrect');
      }
    });

    if (isCorrect) {
      this.score += 10;
      this.streak += 1;
      if (window.soundEngine) window.soundEngine.playSuccess();
    } else {
      this.streak = 0;
      if (window.soundEngine) window.soundEngine.playError();
    }

    this.updateStats();

    if (feedbackBox) {
      feedbackBox.className = `drill-feedback-box ${isCorrect ? 'feedback-success' : 'feedback-error'} animate-slide-up`;
      feedbackBox.innerHTML = `
        <div class="feedback-header">
          <span class="feedback-badge">${isCorrect ? '🎉 Correct Answer!' : '❌ Incorrect!'}</span>
        </div>
        <p class="feedback-explanation">${selectedOpt ? selectedOpt.feedback : ''}</p>
        <div class="full-irab-summary">
          <strong>Full Syntactic I'rab Breakdown:</strong>
          <p>${question.fullIrab}</p>
        </div>
      `;
      feedbackBox.classList.remove('hidden');
      feedbackBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    if (nextBtn) {
      nextBtn.classList.remove('hidden');
    }
  }

  nextQuestion() {
    this.currentQuestionIndex++;
    if (window.soundEngine) window.soundEngine.playClick();
    this.renderCurrentQuestion();
  }

  updateStats() {
    const scoreEl = document.getElementById('drill-score-count');
    const streakEl = document.getElementById('drill-streak-count');
    if (scoreEl) scoreEl.textContent = this.score;
    if (streakEl) streakEl.textContent = `${this.streak} 🔥`;
  }
}

window.vowelGym = new VowelGym();
