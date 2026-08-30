/**
 * Harakah Blitz Game Engine (لعبة برق الحركات الإعرابية)
 * Fast-paced timed quiz to solidify the final vowel intuition
 */

class HarakahBlitzGame {
  constructor() {
    this.timeLeft = 45;
    this.timerInterval = null;
    this.score = 0;
    this.streak = 0;
    this.multiplier = 1;
    this.currentCard = null;
    this.isRunning = false;
    this.history = [];

    this.cards = [
      {
        prompt: "حَتَّىٰ يَقُول[_] الرَّسُولُ",
        word: "يَقُولَ",
        correctVowel: "fatha",
        reason: "منصوب بالفتحة بعد «حتى»"
      },
      {
        prompt: "قُل[_] ادْعُوا اللَّهَ",
        word: "قُلِ",
        correctVowel: "kasrah",
        reason: "كسرة عارضة لمنع التقاء الساكنين"
      },
      {
        prompt: "مَا قُلْت[_] لَهُمْ إِلَّا مَا أَمَرْتَنِي",
        word: "قُلْتُ",
        correctVowel: "dammah",
        reason: "ضمير المتكلم (أنا) مبني على الضم"
      },
      {
        prompt: "وَلَا تَقُل[_] لَّهُمَا أُفٍّ",
        word: "تَقُلْ",
        correctVowel: "sukun",
        reason: "مضارع مجزوم بالسكون بلا الناهية"
      },
      {
        prompt: "يَقُول[_] الْإِنسَانُ يَوْمَئِذٍ أَيْنَ الْمَفَرُّ",
        word: "يَقُولُ",
        correctVowel: "dammah",
        reason: "مضارع مرفوع بالضمة لتجرده"
      },
      {
        prompt: "قَالَ قَائِل[_] مِّنْهُمْ",
        word: "قَائِلٌ",
        correctVowel: "dammah",
        reason: "فاعل مرفوع بالضمة"
      },
      {
        prompt: "قَال[_] اللَّهُ هَٰذَا يَوْمُ يَنفَعُ الصَّادِقِينَ",
        word: "قَالَ",
        correctVowel: "fatha",
        reason: "ماضٍ مبني على الفتح"
      },
      {
        prompt: "قُل[_] هُوَ اللَّهُ أَحَدٌ",
        word: "قُلْ",
        correctVowel: "sukun",
        reason: "فعل أمر مبني على السكون"
      },
      {
        prompt: "قُل[_] اللَّهُمَّ مَالِكَ الْمُلْكِ",
        word: "قُلِ",
        correctVowel: "kasrah",
        reason: "كسرة عارضة لمنع التقاء الساكنين مع لفظ الجلالة"
      },
      {
        prompt: "لَنْ نَّقُول[_] إِلَّا الْحَقَّ",
        word: "نَقُولَ",
        correctVowel: "fatha",
        reason: "مضارع منصوب بالفتحة بعد «لن»"
      },
      {
        prompt: "قُلْن[_] يَا نَارُ كُونِي بَرْدًا",
        word: "قُلْنَا",
        correctVowel: "sukun",
        reason: "الماضي مبني على السكون على اللام مع (نا)"
      },
      {
        prompt: "وَقِيل[_] يَا أَرْضُ ابْلَعِي مَاءَكِ",
        word: "قِيلَ",
        correctVowel: "fatha",
        reason: "ماضٍ مبني للمجهول مبني على الفتح"
      }
    ];
  }

  init() {
    this.setupEventListeners();
  }

  setupEventListeners() {
    const startBtn = document.getElementById('blitz-start-btn');
    if (startBtn) {
      startBtn.addEventListener('click', () => this.startGame());
    }

    const vowelBtns = document.querySelectorAll('.blitz-vowel-btn');
    vowelBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        if (!this.isRunning) return;
        const selected = e.currentTarget.dataset.vowel;
        this.handleVowelChoice(selected);
      });
    });
  }

  startGame() {
    this.timeLeft = 45;
    this.score = 0;
    this.streak = 0;
    this.multiplier = 1;
    this.isRunning = true;
    this.history = [];

    const overlay = document.getElementById('blitz-overlay');
    const startBtn = document.getElementById('blitz-start-btn');
    const gameArea = document.getElementById('blitz-active-card');

    if (overlay) overlay.classList.add('hidden');
    if (startBtn) startBtn.classList.add('hidden');
    if (gameArea) gameArea.classList.remove('hidden');

    this.updateStatsDisplay();
    this.nextCard();

    clearInterval(this.timerInterval);
    this.timerInterval = setInterval(() => {
      this.timeLeft--;
      this.updateStatsDisplay();
      if (this.timeLeft <= 0) {
        this.endGame();
      }
    }, 1000);
  }

  nextCard() {
    const pool = this.cards;
    this.currentCard = pool[Math.floor(Math.random() * pool.length)];

    const promptEl = document.getElementById('blitz-prompt-text');
    if (promptEl) {
      promptEl.innerHTML = this.currentCard.prompt.replace('[_]', `<span class="blitz-blank-slot">؟</span>`);
    }
  }

  handleVowelChoice(vowelKey) {
    if (!this.currentCard) return;

    const isCorrect = vowelKey === this.currentCard.correctVowel;
    this.history.push({
      card: this.currentCard,
      userChoice: vowelKey,
      isCorrect
    });

    const flashFeedback = document.getElementById('blitz-feedback-flash');

    if (isCorrect) {
      this.streak++;
      this.multiplier = Math.min(4, 1 + Math.floor(this.streak / 3));
      this.score += 10 * this.multiplier;
      window.soundEngine.playSuccess();

      if (flashFeedback) {
        flashFeedback.textContent = `+${10 * this.multiplier} أحسنت!`;
        flashFeedback.className = 'blitz-feedback-flash flash-correct animate-pop';
      }
    } else {
      this.streak = 0;
      this.multiplier = 1;
      window.soundEngine.playError();

      if (flashFeedback) {
        flashFeedback.textContent = `خطأ! ${this.currentCard.reason}`;
        flashFeedback.className = 'blitz-feedback-flash flash-incorrect animate-pop';
      }
    }

    setTimeout(() => {
      if (flashFeedback) flashFeedback.className = 'blitz-feedback-flash hidden';
    }, 900);

    this.updateStatsDisplay();
    this.nextCard();
  }

  updateStatsDisplay() {
    const timerEl = document.getElementById('blitz-timer-val');
    const scoreEl = document.getElementById('blitz-score-val');
    const streakEl = document.getElementById('blitz-streak-val');
    const multiEl = document.getElementById('blitz-multiplier-val');

    if (timerEl) timerEl.textContent = `${this.timeLeft}s`;
    if (scoreEl) scoreEl.textContent = this.score;
    if (streakEl) streakEl.textContent = `${this.streak} 🔥`;
    if (multiEl) multiEl.textContent = `x${this.multiplier}`;
  }

  endGame() {
    this.isRunning = false;
    clearInterval(this.timerInterval);

    const overlay = document.getElementById('blitz-overlay');
    const startBtn = document.getElementById('blitz-start-btn');
    const gameArea = document.getElementById('blitz-active-card');

    if (gameArea) gameArea.classList.add('hidden');
    if (startBtn) {
      startBtn.textContent = 'العب مرة أخرى (Play Again)';
      startBtn.classList.remove('hidden');
    }

    if (overlay) {
      overlay.innerHTML = `
        <div class="blitz-gameover-box animate-pop">
          <div class="gameover-trophy">🏆</div>
          <h3 class="gameover-title">انتهت الجولة!</h3>
          <div class="gameover-score-pill">النقاط: ${this.score}</div>
          <p class="gameover-sub">أعلى متتالية صحيحة: ${this.streak} إجابات متتالية</p>
          
          <div class="blitz-review-list">
            <h4>مراجعة سريعة للإجابات:</h4>
            ${this.history.slice(-5).map(h => `
              <div class="review-item ${h.isCorrect ? 'rev-correct' : 'rev-wrong'}">
                <span class="rev-word">${h.card.word}</span>
                <span class="rev-reason">${h.card.reason}</span>
                <span class="rev-status">${h.isCorrect ? '✅' : '❌'}</span>
              </div>
            `).join('')}
          </div>
        </div>
      `;
      overlay.classList.remove('hidden');
    }

    window.soundEngine.playSuccess();
  }
}

window.harakahBlitzGame = new HarakahBlitzGame();
