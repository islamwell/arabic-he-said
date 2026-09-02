/**
 * Harakah Blitz Game Engine (Rapid Final Vowel Challenge)
 * Fast-paced timed quiz to solidify ending vowel intuition (English Interface)
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
        reason: "Subjunctive with Fatḥah after 'ḥattā' (حَتَّىٰ)"
      },
      {
        prompt: "قُل[_] ادْعُوا اللَّهَ",
        word: "قُلِ",
        correctVowel: "kasrah",
        reason: "Connecting Kasrah to prevent silent letter clash (التقاء الساكنين)"
      },
      {
        prompt: "مَا قُلْت[_] لَهُمْ إِلَّا مَا أَمَرْتَنِي",
        word: "قُلْتُ",
        correctVowel: "dammah",
        reason: "1st-person subject pronoun 'I' built on Ḍammah (تاء المتكلم)"
      },
      {
        prompt: "وَلَا تَقُل[_] لَّهُمَا أُفٍّ",
        word: "تَقُلْ",
        correctVowel: "sukun",
        reason: "Jussive with Sukūn after prohibitive 'lā' (لا الناهية)"
      },
      {
        prompt: "يَقُول[_] الْإِنسَانُ يَوْمَئِذٍ أَيْنَ الْمَفَرُّ",
        word: "يَقُولُ",
        correctVowel: "dammah",
        reason: "Default indicative present with Ḍammah (مرفوع بالضمة)"
      },
      {
        prompt: "قَالَ قَائِل[_] مِّنْهُمْ",
        word: "قَائِلٌ",
        correctVowel: "dammah",
        reason: "Subject / Doer with Ḍammah tanwīn (فاعل مرفوع)"
      },
      {
        prompt: "قَال[_] اللَّهُ هَٰذَا يَوْمُ يَنفَعُ الصَّادِقِينَ",
        word: "قَالَ",
        correctVowel: "fatha",
        reason: "Past active verb built on fixed Fatḥah (مبني على الفتح)"
      },
      {
        prompt: "قُل[_] هُوَ اللَّهُ أَحَدٌ",
        word: "قُلْ",
        correctVowel: "sukun",
        reason: "Command / Imperative verb built on Sukūn (أمر مبني على السكون)"
      },
      {
        prompt: "قُل[_] اللَّهُمَّ مَالِكَ الْمُلْكِ",
        word: "قُلِ",
        correctVowel: "kasrah",
        reason: "Connecting Kasrah before the Name of Allah (كسرة عارضة)"
      },
      {
        prompt: "لَنْ نَّقُول[_] إِلَّا الْحَقَّ",
        word: "نَقُولَ",
        correctVowel: "fatha",
        reason: "Subjunctive with Fatḥah after 'lan' (منصوب بعد لن)"
      },
      {
        prompt: "قُلْن[_] يَا نَارُ كُونِي بَرْدًا",
        word: "قُلْنَا",
        correctVowel: "sukun",
        reason: "Past verb built on Sukūn on the Lam with 'nā' (مبني على السكون)"
      },
      {
        prompt: "وَقِيل[_] يَا أَرْضُ ابْلَعِي مَاءَكِ",
        word: "قِيلَ",
        correctVowel: "fatha",
        reason: "Past passive verb built on Fatḥah (ماضٍ مبني للمجهول)"
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
      promptEl.innerHTML = this.currentCard.prompt.replace('[_]', `<span class="blitz-blank-slot">?</span>`);
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
      if (window.soundEngine) window.soundEngine.playSuccess();

      if (flashFeedback) {
        flashFeedback.textContent = `+${10 * this.multiplier} Correct!`;
        flashFeedback.className = 'blitz-feedback-flash flash-correct animate-pop';
      }
    } else {
      this.streak = 0;
      this.multiplier = 1;
      if (window.soundEngine) window.soundEngine.playError();

      if (flashFeedback) {
        flashFeedback.textContent = `Incorrect! ${this.currentCard.reason}`;
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
      startBtn.textContent = 'Play Again (45s)';
      startBtn.classList.remove('hidden');
    }

    if (overlay) {
      overlay.innerHTML = `
        <div class="blitz-gameover-box animate-pop">
          <div class="gameover-trophy">🏆</div>
          <h3 class="gameover-title">Round Complete!</h3>
          <div class="gameover-score-pill">Final Score: ${this.score} pts</div>
          <p class="gameover-sub">Highest Streak: ${this.streak} consecutive answers</p>
          
          <div class="blitz-review-list">
            <h4>Quick Answer Review:</h4>
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

    if (window.soundEngine) window.soundEngine.playSuccess();
  }
}

window.harakahBlitzGame = new HarakahBlitzGame();
