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
    const clearBtn = document.getElementById('quran-search-clear-btn');

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value.trim();
        if (clearBtn) {
          clearBtn.classList.toggle('hidden', this.searchQuery.length === 0);
        }
        this.renderVerses();
      });
    }

    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        if (searchInput) searchInput.value = '';
        this.searchQuery = '';
        clearBtn.classList.add('hidden');
        this.renderVerses();
        if (window.soundEngine) window.soundEngine.playClick();
      });
    }
  }

  renderVerses() {
    const container = document.getElementById('quran-verse-list');
    const counter = document.getElementById('quran-match-counter');
    if (!container) return;

    let verses = window.QURAN_DATA.verses;

    // Filter by category
    if (this.currentCategory !== 'all') {
      verses = verses.filter(v => v.category === this.currentCategory);
    }

    // Filter by search query (supports both English and Arabic with/without diacritics)
    if (this.searchQuery) {
      const q = this.searchQuery.trim().toLowerCase();
      const stripTashkeel = (s) => (s || '').replace(/[\u064B-\u065F\u0670]/g, '').toLowerCase();
      const cleanQ = stripTashkeel(q);

      verses = verses.filter(v => 
        stripTashkeel(v.text).includes(cleanQ) || 
        v.translation.toLowerCase().includes(q) ||
        stripTashkeel(v.surah).includes(cleanQ) ||
        v.surahEn.toLowerCase().includes(q) ||
        stripTashkeel(v.focusWord).includes(cleanQ) ||
        (v.speaker && stripTashkeel(v.speaker).includes(cleanQ))
      );
    }

    if (counter) {
      counter.textContent = `Showing ${verses.length} of ${window.QURAN_DATA.verses.length} verses`;
    }

    if (verses.length === 0) {
      container.innerHTML = `
        <div class="empty-quran-state" style="text-align: center; padding: 36px 16px; color: var(--text-muted);">
          <p style="margin-bottom: 16px; font-size: 0.95rem;">No matching verses found for this search or category filter.</p>
          <button class="primary-btn" id="reset-quran-filters-btn">Reset Filters</button>
        </div>
      `;

      const resetBtn = document.getElementById('reset-quran-filters-btn');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          this.currentCategory = 'all';
          this.searchQuery = '';
          const sInput = document.getElementById('quran-search-input');
          const cBtn = document.getElementById('quran-search-clear-btn');
          if (sInput) sInput.value = '';
          if (cBtn) cBtn.classList.add('hidden');
          document.querySelectorAll('#quran-category-chips .category-chip').forEach(c => c.classList.toggle('active', c.dataset.cat === 'all'));
          this.renderVerses();
          if (window.soundEngine) window.soundEngine.playClick();
        });
      }
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
          <span class="vowel-focus-tag">🎯 Final Vowel Insight: <bdi>${v.vowelFocus}</bdi></span>
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
          <button class="verse-copy-btn" data-id="${v.id}" title="Copy verse and translation">
            📋 Copy Verse
          </button>
          <button class="verse-action-btn play-audio" onclick="window.soundEngine.speakArabic('${v.text.replace(/'/g, "\\'")}')" title="Listen">
            🔊 Recitation
          </button>
        </div>
      </div>
    `).join('');

    // Setup Copy button listener
    container.querySelectorAll('.verse-copy-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const vId = parseInt(e.currentTarget.dataset.id, 10);
        const verse = window.QURAN_DATA.verses.find(v => v.id === vId);
        if (verse) {
          const copyText = `${verse.text}\n"${verse.translation}"\n— Surah ${verse.surahEn} (${verse.surah}) : Ayah ${verse.ayah}`;
          if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(copyText).then(() => {
              if (window.app && window.app.showCacheToast) {
                window.app.showCacheToast('📋 Verse copied to clipboard!');
              }
              if (window.soundEngine) window.soundEngine.playPop();
            }).catch(() => {
              this.fallbackCopy(copyText);
            });
          } else {
            this.fallbackCopy(copyText);
          }
        }
      });
    });
  }

  fallbackCopy(text) {
    const tempInput = document.createElement('textarea');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    try {
      document.execCommand('copy');
      if (window.app && window.app.showCacheToast) {
        window.app.showCacheToast('📋 Verse copied to clipboard!');
      }
      if (window.soundEngine) window.soundEngine.playPop();
    } catch (err) {}
    document.body.removeChild(tempInput);
  }
}

window.quranExplorer = new QuranExplorer();
