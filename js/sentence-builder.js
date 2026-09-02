/**
 * Sentence Builder Engine (Interactive Arabic Sentence Construction Lab)
 * Progressive drag/tap interactive sentence constructor with live grammatical validation (English Interface)
 */

class SentenceBuilder {
  constructor() {
    this.currentTier = 1;
    this.currentMissionIndex = 0;
    this.selectedTokens = [];
    this.availableTokens = [];
  }

  init() {
    this.renderTierButtons();
    this.loadMission();
    this.setupEventListeners();
  }

  setupEventListeners() {
    const checkBtn = document.getElementById('sb-check-btn');
    const resetBtn = document.getElementById('sb-reset-btn');
    const nextBtn = document.getElementById('sb-next-btn');

    if (checkBtn) {
      checkBtn.addEventListener('click', () => this.validateSentence());
    }

    if (resetBtn) {
      resetBtn.addEventListener('click', () => this.resetCurrentMission());
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => this.nextMission());
    }
  }

  renderTierButtons() {
    const container = document.getElementById('sb-tier-tabs');
    if (!container) return;

    container.innerHTML = window.SENTENCE_DATA.tiers.map(t => `
      <button class="sb-tier-tab ${t.id === this.currentTier ? 'active' : ''}" data-tier="${t.id}">
        <span class="tier-num">Tier ${t.id}</span>
        <span class="tier-label">${t.tierNameEn.split(':')[1]?.trim() || t.tierNameEn}</span>
      </button>
    `).join('');

    container.querySelectorAll('.sb-tier-tab').forEach(tab => {
      tab.addEventListener('click', (e) => {
        const tier = parseInt(e.currentTarget.dataset.tier, 10);
        this.currentTier = tier;
        this.currentMissionIndex = 0;
        if (window.soundEngine) window.soundEngine.playClick();
        container.querySelectorAll('.sb-tier-tab').forEach(t => t.classList.remove('active'));
        e.currentTarget.classList.add('active');
        this.loadMission();
      });
    });
  }

  loadMission() {
    const tierData = window.SENTENCE_DATA.tiers.find(t => t.id === this.currentTier);
    if (!tierData) return;

    const mission = tierData.missions[this.currentMissionIndex % tierData.missions.length];
    this.selectedTokens = [];
    
    // Shuffle available tokens
    this.availableTokens = [...mission.tokens].sort(() => Math.random() - 0.5);

    this.renderMissionUI(tierData, mission);
  }

  renderMissionUI(tierData, mission) {
    const headerEl = document.getElementById('sb-mission-header');
    const targetPromptEl = document.getElementById('sb-target-prompt');
    const feedbackBox = document.getElementById('sb-feedback-box');
    const nextBtn = document.getElementById('sb-next-btn');
    const checkBtn = document.getElementById('sb-check-btn');

    if (headerEl) {
      headerEl.innerHTML = `
        <div class="mission-tier-tag">${tierData.tierNameEn}</div>
        <div class="mission-counter">Challenge ${this.currentMissionIndex + 1} of ${tierData.missions.length}</div>
      `;
    }

    if (targetPromptEl) {
      targetPromptEl.innerHTML = `
        <div class="prompt-instruction">Arrange the words in the correct Arabic grammatical order:</div>
        <div class="prompt-english-meaning">"${mission.english}"</div>
      `;
    }

    if (feedbackBox) feedbackBox.classList.add('hidden');
    if (nextBtn) nextBtn.classList.add('hidden');
    if (checkBtn) checkBtn.disabled = false;

    this.renderSlots();
    this.renderTokenBank();
  }

  renderSlots() {
    const container = document.getElementById('sb-slots-container');
    if (!container) return;

    if (this.selectedTokens.length === 0) {
      container.innerHTML = `<div class="empty-slot-placeholder">Tap words below in order to build your sentence here...</div>`;
      return;
    }

    container.innerHTML = this.selectedTokens.map((token, idx) => `
      <button class="placed-token-chip animate-pop" data-index="${idx}">
        <span class="token-text">${token}</span>
        <span class="remove-cross">×</span>
      </button>
    `).join('');

    container.querySelectorAll('.placed-token-chip').forEach(chip => {
      chip.addEventListener('click', (e) => {
        const idx = parseInt(e.currentTarget.dataset.index, 10);
        this.removeToken(idx);
      });
    });
  }

  renderTokenBank() {
    const container = document.getElementById('sb-token-bank');
    if (!container) return;

    container.innerHTML = this.availableTokens.map((token, idx) => `
      <button class="bank-token-btn" data-index="${idx}">
        ${token}
      </button>
    `).join('');

    container.querySelectorAll('.bank-token-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const idx = parseInt(e.currentTarget.dataset.index, 10);
        this.addToken(idx);
      });
    });
  }

  addToken(bankIndex) {
    const token = this.availableTokens[bankIndex];
    if (!token) return;

    this.selectedTokens.push(token);
    this.availableTokens.splice(bankIndex, 1);

    if (window.soundEngine) window.soundEngine.playPop();
    this.renderSlots();
    this.renderTokenBank();
  }

  removeToken(selectedIndex) {
    const token = this.selectedTokens[selectedIndex];
    if (!token) return;

    this.selectedTokens.splice(selectedIndex, 1);
    this.availableTokens.push(token);

    if (window.soundEngine) window.soundEngine.playClick();
    this.renderSlots();
    this.renderTokenBank();
  }

  resetCurrentMission() {
    const tierData = window.SENTENCE_DATA.tiers.find(t => t.id === this.currentTier);
    const mission = tierData.missions[this.currentMissionIndex % tierData.missions.length];
    
    this.selectedTokens = [];
    this.availableTokens = [...mission.tokens].sort(() => Math.random() - 0.5);

    const feedbackBox = document.getElementById('sb-feedback-box');
    if (feedbackBox) feedbackBox.classList.add('hidden');

    if (window.soundEngine) window.soundEngine.playClick();
    this.renderSlots();
    this.renderTokenBank();
  }

  validateSentence() {
    const tierData = window.SENTENCE_DATA.tiers.find(t => t.id === this.currentTier);
    const mission = tierData.missions[this.currentMissionIndex % tierData.missions.length];
    const feedbackBox = document.getElementById('sb-feedback-box');
    const nextBtn = document.getElementById('sb-next-btn');

    if (this.selectedTokens.length === 0) {
      return;
    }

    const constructed = this.selectedTokens.join(' ');
    const expected = mission.solution.join(' ');
    const isCorrect = (constructed === expected) || (constructed === mission.targetSentence);

    if (feedbackBox) {
      feedbackBox.className = `drill-feedback-box ${isCorrect ? 'feedback-success' : 'feedback-error'} animate-slide-up`;
      feedbackBox.innerHTML = `
        <div class="feedback-header">
          <span class="feedback-badge">${isCorrect ? '🎉 Excellent! 100% Correct Arabic Syntax' : '⚠️ Word order needs adjustment'}</span>
        </div>
        <div class="constructed-phrase-row">
          <span class="phrase-text">${constructed}</span>
          <button class="mini-speaker-btn" onclick="window.soundEngine.speakArabic('${constructed.replace(/'/g, "\\'")}')" title="Listen">🔊 Listen</button>
        </div>
        <div class="sentence-rule-explanation">
          <strong>Grammatical Breakdown:</strong>
          <p>${mission.explanation}</p>
        </div>
      `;
      feedbackBox.classList.remove('hidden');
    }

    if (isCorrect) {
      if (window.soundEngine) window.soundEngine.playSuccess();
      if (nextBtn) nextBtn.classList.remove('hidden');
    } else {
      if (window.soundEngine) window.soundEngine.playError();
    }
  }

  nextMission() {
    if (window.soundEngine) window.soundEngine.playClick();
    const tierData = window.SENTENCE_DATA.tiers.find(t => t.id === this.currentTier);
    this.currentMissionIndex++;
    if (this.currentMissionIndex >= tierData.missions.length) {
      this.currentMissionIndex = 0;
      if (this.currentTier < 5) {
        this.currentTier++;
        this.renderTierButtons();
      }
    }
    this.loadMission();
  }
}

window.sentenceBuilder = new SentenceBuilder();
