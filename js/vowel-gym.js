/**
 * Vowel Gym (صالة أسرار الحركات الإعرابية) Controller
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
      { id: 'fatha', symbol: 'ـَ', name: 'الفتحة' },
      { id: 'dammah', symbol: 'ـُ', name: 'الضمة' },
      { id: 'kasrah', symbol: 'ـِ', name: 'الكسرة' },
      { id: 'sukun', symbol: 'ـْ', name: 'السكون' }
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
        window.soundEngine.playClick();
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
          <p class="vowel-guide-sub">متى ولماذا تظهر هذه الحركة على كلمة «قال» ومشتقاتها؟</p>
        </div>
      </div>

      <div class="vowel-rules-list">
        ${guide.rules.map(r => `
          <div class="rule-card">
            <h4 class="rule-title">${r.title}</h4>
            <p class="rule-detail">${r.detail}</p>
            <div class="rule-examples-box">
              <span class="examples-header">أمثلة تطبيقية:</span>
              ${r.examples.map(ex => `
                <div class="example-item">
                  <div class="example-text">
                    <span class="ex-sentence">${ex.text}</span>
                    <button class="mini-speaker-btn" onclick="window.soundEngine.speakArabic('${ex.text.replace(/'/g, "\\'")}')">🔊</button>
                  </div>
                  <div class="example-reason"><strong>التعليل:</strong> ${ex.reason}</div>
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
    this.updateStatsDisplay();
  }

  renderCurrentQuestion() {
    const container = document.getElementById('drill-card-container');
    const feedbackBox = document.getElementById('drill-feedback-box');
    const nextBtn = document.getElementById('drill-next-btn');

    if (!container) return;

    this.hasAnswered = false;
    if (feedbackBox) feedbackBox.classList.add('hidden');
    if (nextBtn) nextBtn.classList.add('hidden');

    const questions = window.NAHW_DATA.drillQuestions;
    const q = questions[this.currentQuestionIndex % questions.length];

    // Highlight target word in sentence
    const highlightedSentence = q.sentence.replace(
      new RegExp(q.wordFocus, 'g'),
      `<span class="target-word-highlight">${q.wordFocus}</span>`
    );

    container.innerHTML = `
      <div class="drill-question-box animate-fade-in">
        <div class="drill-sentence-display">
          <div class="sentence-arabic-text">${highlightedSentence}</div>
          <button class="audio-listen-btn mini-btn" id="drill-audio-btn" title="Listen / استمع">
            🔊
          </button>
        </div>

        <div class="drill-prompt">
          <h4 class="prompt-arabic">${q.question}</h4>
          <p class="prompt-english">${q.questionEn}</p>
        </div>

        <div class="drill-options-grid" id="drill-options-grid">
          ${q.options.map((opt, idx) => `
            <button class="drill-option-btn" data-index="${idx}">
              <span class="option-indicator">${String.fromCharCode(65 + idx)}</span>
              <span class="option-label">${opt.label}</span>
            </button>
          `).join('')}
        </div>
      </div>
    `;

    // Listen button
    const audioBtn = container.querySelector('#drill-audio-btn');
    if (audioBtn) {
      audioBtn.addEventListener('click', () => {
        window.soundEngine.speakArabic(q.sentence);
      });
    }

    // Option clicks
    container.querySelectorAll('.drill-option-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        if (this.hasAnswered) return;
        const idx = parseInt(e.currentTarget.dataset.index, 10);
        this.checkAnswer(idx, q);
      });
    });
  }

  checkAnswer(selectedIndex, question) {
    this.hasAnswered = true;
    const selectedOption = question.options[selectedIndex];
    const isCorrect = selectedOption.correct;
    const optionButtons = document.querySelectorAll('.drill-option-btn');

    optionButtons.forEach((btn, idx) => {
      btn.disabled = true;
      if (question.options[idx].correct) {
        btn.classList.add('correct');
      } else if (idx === selectedIndex) {
        btn.classList.add('incorrect');
      }
    });

    if (isCorrect) {
      this.score += 10;
      this.streak += 1;
      window.soundEngine.playSuccess();
    } else {
      this.streak = 0;
      window.soundEngine.playError();
    }

    this.updateStatsDisplay();
    this.showFeedback(selectedOption, question, isCorrect);
  }

  showFeedback(selectedOption, question, isCorrect) {
    const feedbackBox = document.getElementById('drill-feedback-box');
    const nextBtn = document.getElementById('drill-next-btn');
    if (!feedbackBox) return;

    feedbackBox.className = `drill-feedback-box ${isCorrect ? 'feedback-success' : 'feedback-error'} animate-slide-up`;
    feedbackBox.innerHTML = `
      <div class="feedback-header">
        <span class="feedback-badge">${isCorrect ? '✅ إجابة صحيحة ومتقنة!' : '❌ حاول مراجعة القاعدة أدناه'}</span>
      </div>
      <p class="feedback-explanation">${selectedOption.feedback}</p>
      <div class="full-irab-summary">
        <strong>📌 الإعراب الكامل والدقيق:</strong>
        <p>${question.fullIrab}</p>
      </div>
    `;
    feedbackBox.classList.remove('hidden');

    if (nextBtn) {
      nextBtn.classList.remove('hidden');
    }
  }

  nextQuestion() {
    window.soundEngine.playClick();
    this.currentQuestionIndex++;
    this.renderCurrentQuestion();
  }

  updateStatsDisplay() {
    const scoreEl = document.getElementById('drill-score-count');
    const streakEl = document.getElementById('drill-streak-count');
    if (scoreEl) scoreEl.textContent = this.score;
    if (streakEl) streakEl.textContent = `${this.streak} 🔥`;
  }
}

window.vowelGym = new VowelGym();
