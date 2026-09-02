/**
 * Vowel Gym (Syntax & I'rab Master Gym) Controller (English Interface)
 * Interactive drills and deep grammatical rationale for Fatḥah, Ḍammah, Kasrah, and Sukūn
 */

class VowelGym {
  constructor() {
    this.currentRuleTab = 'fatha';
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.streak = 0;
    this.hasAnswered = false;
  }

  init() {
    this.renderRuleTabs();
    this.renderActiveRuleContent();
    this.initDrill();
    this.setupEventListeners();
  }

  setupEventListeners() {
    const nextBtn = document.getElementById('drill-next-btn');
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        this.nextQuestion();
      });
    }
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

    container.innerHTML = `
      <div class="vowel-guide-header ${guide.colorClass}">
        <div class="vowel-big-symbol">${guide.symbol}</div>
        <div class="vowel-guide-title-block">
          <h3 class="vowel-guide-title">${guide.name}</h3>
          <p class="vowel-guide-sub">When and why does this vowel mark appear on root Q-W-L and its forms?</p>
        </div>
      </div>

      <div class="vowel-rules-list">
        ${guide.rules.map(r => `
          <div class="rule-card">
            <h4 class="rule-title">${r.title}</h4>
            <p class="rule-detail">${r.detail}</p>
            <div class="rule-examples-box">
              <span class="examples-header">Applied Quranic Examples:</span>
              ${r.examples.map(ex => `
                <div class="example-item">
                  <div class="example-text">
                    <span class="ex-sentence">${ex.text}</span>
                    <button class="mini-speaker-btn" onclick="window.soundEngine.speakArabic('${ex.text.replace(/'/g, "\\'")}')" title="Listen">🔊</button>
                  </div>
                  <div class="example-reason"><strong>Grammar Rule:</strong> ${ex.reason}</div>
                </div>
              `).join('')}
            </div>
          </div>
        `).join('')}
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

    this.hasAnswered = false;
    if (feedbackBox) feedbackBox.classList.add('hidden');
    if (nextBtn) nextBtn.classList.add('hidden');

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
