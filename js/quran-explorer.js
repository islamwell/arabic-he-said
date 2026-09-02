/**
 * Quranic Explorer & Nouman Ali Khan (Bayyinah) Balaghah Controller (English Interface)
 */

class QuranExplorer {
  constructor() {
    this.currentCategory = 'all';
    this.searchQuery = '';
  }

  init() {
    this.renderCategoryChips();
    this.renderVerses();
    this.setupSearch();
  }

  renderCategoryChips() {
    const container = document.getElementById('quran-category-chips');
    if (!container) return;

    container.innerHTML = window.QURAN_DATA.categories.map(c => `
      <button class="category-chip ${c.id === this.currentCategory ? 'active' : ''}" data-cat="${c.id}">
        ${c.name}
      </button>
    `).join('');

    container.querySelectorAll('.category-chip').forEach(chip => {
      chip.addEventListener('click', (e) => {
        this.currentCategory = e.currentTarget.dataset.cat;
        if (window.soundEngine) window.soundEngine.playClick();
        container.querySelectorAll('.category-chip').forEach(c => c.classList.remove('active'));
        e.currentTarget.classList.add('active');
        this.renderVerses();
      });
    });
  }

  setupSearch() {
    const searchInput = document.getElementById('quran-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value.trim();
        this.renderVerses();
      });
    }
  }

  renderVerses() {
    const container = document.getElementById('quran-verse-list');
    if (!container) return;

    let verses = window.QURAN_DATA.verses;

    // Filter by category
    if (this.currentCategory !== 'all') {
      verses = verses.filter(v => v.category === this.currentCategory);
    }

    // Filter by search query
    if (this.searchQuery) {
      const q = this.searchQuery.toLowerCase();
      verses = verses.filter(v => 
        v.text.includes(q) || 
        v.translation.toLowerCase().includes(q) ||
        v.surah.includes(q) ||
        v.surahEn.toLowerCase().includes(q) ||
        v.focusWord.includes(q)
      );
    }

    if (verses.length === 0) {
      container.innerHTML = `
        <div class="empty-quran-state" style="text-align: center; padding: 24px; color: var(--text-muted);">
          <p>No matching verses found for this search or category filter.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = verses.map(v => `
      <div class="quran-verse-card animate-fade-in" id="verse-${v.id}">
        <div class="verse-card-header">
          <div class="surah-ayah-badge">Surah ${v.surahEn} (${v.surah}) : Ayah ${v.ayah}</div>
          <div class="focus-word-pill">Target Word: <strong>${v.focusWord}</strong></div>
        </div>

        <div class="verse-arabic-text">
          «${v.text}»
        </div>

        <div class="verse-translation">
          "${v.translation}"
        </div>

        <div class="verse-dialogue-context">
          <span class="context-item">🗣️ <strong>Speaker:</strong> ${v.speaker}</span>
          <span class="context-item">👂 <strong>Addressee:</strong> ${v.listener}</span>
        </div>

        <div class="verse-vowel-highlight">
          <span class="vowel-focus-tag">🎯 Final Vowel Insight: ${v.vowelFocus}</span>
        </div>

        <!-- Word Breakdown -->
        <div class="verse-breakdown-box">
          <span class="breakdown-title">Grammatical & Morphological Breakdown:</span>
          <div class="breakdown-grid">
            ${v.breakdown.map(b => `
              <div class="breakdown-pill-row">
                <span class="breakdown-word tag-${b.tag}">${b.word}</span>
                <span class="breakdown-role">${b.role}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Nouman Ali Khan Balaghah Gem Drawer -->
        ${v.nakGem ? `
          <div class="nak-gem-box">
            <div class="gem-badge-header">
              <span class="gem-sparkle">✨</span>
              <strong>Rhetorical Gem (Nouman Ali Khan / Bayyinah Insight):</strong>
            </div>
            <p class="gem-text">${v.nakGem}</p>
          </div>
        ` : ''}

        <div class="verse-card-actions">
          <button class="verse-action-btn play-audio" onclick="window.soundEngine.speakArabic('${v.text.replace(/'/g, "\\'")}')" title="Listen">
            🔊 Listen to Recitation
          </button>
        </div>
      </div>
    `).join('');
  }
}

window.quranExplorer = new QuranExplorer();
