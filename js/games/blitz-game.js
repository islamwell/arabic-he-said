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
    this.bestScore = parseInt(localStorage.getItem('qala_blitz_best') || '0', 10);
    this.currentCard = null;
    this.isRunning = false;
    this.history = [];

    this.mode = 'timed'; // 'timed' or 'untimed'
    this.mistakes = JSON.parse(localStorage.getItem('qala_blitz_mistakes') || '[]');

    this.cards = [
      {
        prompt: "حَتَّىٰ يَقُول[_] الرَّسُولُ",
        word: "يَقُولَ",
        correctVowel: "fatha",
        reason: "Subjunctive with Fatḥah after 'ḥattā' (حَتَّىٰ يَقُولَ)"
      },
      {
        prompt: "قُل[_] ادْعُوا اللَّهَ",
        word: "قُلِ",
        correctVowel: "kasrah",
        reason: "Connecting Kasrah to prevent silent letter clash (قُلِ ادْعُوا)"
      },
      {
        prompt: "مَا قُلْت[_] لَهُمْ إِلَّا مَا أَمَرْتَنِي",
        word: "قُلْتُ",
        correctVowel: "dammah",
        reason: "1st-person subject pronoun 'I' built on Ḍammah (قُلْتُ)"
      },
      {
        prompt: "وَلَا تَقُل[_] لَّهُمَا أُفٍّ",
        word: "تَقُلْ",
        correctVowel: "sukun",
        reason: "Jussive with Sukūn after prohibitive 'lā' (وَلَا تَقُلْ)"
      },
      {
        prompt: "يَقُول[_] الْإِنسَانُ يَوْمَئِذٍ أَيْنَ الْمَفَرُّ",
        word: "يَقُولُ",
        correctVowel: "dammah",
        reason: "Default indicative present with Ḍammah (يَقُولُ)"
      },
      {
        prompt: "قَالَ قَائِل[_] مِّنْهُمْ",
        word: "قَائِلٌ",
        correctVowel: "dammah",
        reason: "Subject / Doer marked with Ḍammah tanwīn (قَائِلٌ)"
      },
      {
        prompt: "قَال[_] اللَّهُ هَٰذَا يَوْمُ يَنفَعُ الصَّادِقِينَ",
        word: "قَالَ",
        correctVowel: "fatha",
        reason: "Past active verb built on fixed Fatḥah (قَالَ)"
      },
      {
        prompt: "قُل[_] هُوَ اللَّهُ أَحَدٌ",
        word: "قُلْ",
        correctVowel: "sukun",
        reason: "Command / Imperative verb built on Sukūn (قُلْ)"
      },
      {
        prompt: "قُل[_] اللَّهُمَّ مَالِكَ الْمُلْكِ",
        word: "قُلِ",
        correctVowel: "kasrah",
        reason: "Connecting Kasrah before the Name of Allah (قُلِ اللَّهُمَّ)"
      },
      {
        prompt: "لَنْ نَّقُول[_] إِلَّا الْحَقَّ",
        word: "نَقُولَ",
        correctVowel: "fatha",
        reason: "Subjunctive with Fatḥah after 'lan' (لَنْ نَقُولَ)"
      },
      {
        prompt: "قُ[_]نَا يَا نَارُ كُونِي بَرْدًا",
        word: "قُلْنَا",
        correctVowel: "sukun",
        reason: "The letter Lam has a sukūn (قُلْنَا) before the pronoun 'nā' (we)"
      },
      {
        prompt: "وَقِيل[_] يَا أَرْضُ ابْلَعِي مَاءَكِ",
        word: "قِيلَ",
        correctVowel: "fatha",
        reason: "Past passive verb built on Fatḥah (وَقِيلَ)"
      }
    ];
  }

  init() {
    this.setupEventListeners();
    this.updateStatsDisplay();
  }

  setupEventListeners() {
    const startBtn = document.getElementById('blitz-start-btn');
    if (startBtn) {
      startBtn.addEventListener('click', () => this.startGame());
    }

    const timedModeBtn = document.getElementById('blitz-mode-timed');
    const untimedModeBtn = document.getElementById('blitz-mode-untimed');

    if (timedModeBtn && untimedModeBtn) {
      timedModeBtn.addEventListener('click', () => {
        this.mode = 'timed';
        timedModeBtn.classList.add('active');
        untimedModeBtn.classList.remove('active');
        const startB = document.getElementById('blitz-start-btn');
        if (startB) startB.textContent = 'Start Challenge (45s)';
        this.updateStatsDisplay();
      });

      untimedModeBtn.addEventListener('click', () => {
        this.mode = 'untimed';
        untimedModeBtn.classList.add('active');
        timedModeBtn.classList.remove('active');
        const startB = document.getElementById('blitz-start-btn');
        if (startB) startB.textContent = 'Start Untimed Practice';
        this.updateStatsDisplay();
      });
    }

    const vowelBtns = document.querySelectorAll('.blitz-vowel-btn');
    vowelBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        if (!this.isRunning) return;
        const selected = e.currentTarget.dataset.vowel;
        this.handleVowelChoice(selected);
      });
    });

    // Keyboard Shortcuts: 1 (fatha), 2 (dammah), 3 (kasrah), 4 (sukun)
    window.addEventListener('keydown', (e) => {
      if (!this.isRunning) return;
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.isContentEditable) return;

      let chosenVowel = null;
      if (e.key === '1') chosenVowel = 'fatha';
      else if (e.key === '2') chosenVowel = 'dammah';
      else if (e.key === '3') chosenVowel = 'kasrah';
      else if (e.key === '4') chosenVowel = 'sukun';

      if (chosenVowel) {
        e.preventDefault();
        this.handleVowelChoice(chosenVowel);
      }
    });
  }

  startGame() {
    this.timeLeft = this.mode === 'untimed' ? 999 : 45;
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
    if (this.mode === 'timed') {
      this.timerInterval = setInterval(() => {
        this.timeLeft--;
        this.updateStatsDisplay();
        if (this.timeLeft <= 0) {
          this.endGame();
        }
      }, 1000);
    }
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

    if (!isCorrect) {
      // Save mistake to review list
      this.mistakes.unshift({
        prompt: this.currentCard.prompt,
        word: this.currentCard.word,
        reason: this.currentCard.reason,
        correctVowel: this.currentCard.correctVowel,
        date: new Date().toISOString()
      });
      // Cap at 20 mistakes
      if (this.mistakes.length > 20) this.mistakes.pop();
      try {
        localStorage.setItem('qala_blitz_mistakes', JSON.stringify(this.mistakes));
      } catch (err) {}
    }

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

    const delay = this.mode === 'untimed' ? 1200 : 800;
    setTimeout(() => {
      if (flashFeedback) flashFeedback.className = 'blitz-feedback-flash hidden';
      this.nextCard();
    }, delay);

    this.updateStatsDisplay();
  }

  updateStatsDisplay() {
    if (this.mode === 'timed' && this.score > this.bestScore) {
      this.bestScore = this.score;
      try {
        localStorage.setItem('qala_blitz_best', this.bestScore.toString());
      } catch (err) {}
    }

    const timerEl = document.getElementById('blitz-timer-val');
    const scoreEl = document.getElementById('blitz-score-val');
    const streakEl = document.getElementById('blitz-streak-val');
    const multiEl = document.getElementById('blitz-multiplier-val');
    const bestEl = document.getElementById('blitz-best-val');
    const timerFill = document.getElementById('blitz-timer-fill');

    if (timerEl) {
      timerEl.textContent = this.mode === 'untimed' ? 'Untimed' : `${this.timeLeft}s`;
    }
    if (scoreEl) scoreEl.textContent = this.score;
    if (streakEl) streakEl.textContent = `${this.streak} 🔥`;
    if (multiEl) multiEl.textContent = `x${this.multiplier}`;
    if (bestEl) bestEl.textContent = this.bestScore;

    if (timerFill) {
      if (this.mode === 'untimed') {
        timerFill.style.width = '100%';
        timerFill.style.background = 'linear-gradient(90deg, var(--gold-primary), #10b981)';
      } else {
        const pct = Math.max(0, Math.min(100, (this.timeLeft / 45) * 100));
        timerFill.style.width = `${pct}%`;
        if (this.timeLeft <= 10) {
          timerFill.style.background = 'linear-gradient(90deg, #ef4444, #f87171)';
        } else {
          timerFill.style.background = 'linear-gradient(90deg, var(--gold-primary), #3b82f6)';
        }
      }
    }
  }

  endGame() {
    this.isRunning = false;
    clearInterval(this.timerInterval);
    this.updateStatsDisplay();

    const overlay = document.getElementById('blitz-overlay');
    const startBtn = document.getElementById('blitz-start-btn');
    const gameArea = document.getElementById('blitz-active-card');

    if (gameArea) gameArea.classList.add('hidden');
    if (startBtn) {
      startBtn.textContent = this.mode === 'untimed' ? 'Practice Again' : 'Play Again (45s)';
      startBtn.classList.remove('hidden');
    }

    const isNewBest = this.mode === 'timed' && this.score >= this.bestScore && this.score > 0;

    if (overlay) {
      overlay.innerHTML = `
        <div class="blitz-gameover-box animate-pop">
          <div class="gameover-trophy">${isNewBest ? '🏆' : '⚡'}</div>
          <h3 class="gameover-title">${isNewBest ? 'New High Score Record!' : 'Round Complete!'}</h3>
          <div class="gameover-score-pill">Final Score: ${this.score} pts</div>
          <p class="gameover-sub">Highest Streak: ${this.streak} • Best: ${this.bestScore} pts</p>
          
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
