/**
 * Quranic Explorer & Nouman Ali Khan (Bayyinah) Balaghah Controller
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
        window.soundEngine.playClick();
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

    // Filter by search
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
        <div class="empty-quran-state">
          <p>لا توجد آيات مطابقة للبحث أو التصنيف المحدد.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = verses.map(v => `
      <div class="quran-verse-card animate-fade-in" id="verse-${v.id}">
        <div class="verse-card-header">
          <div class="surah-ayah-badge">سورة ${v.surah} : ${v.ayah} (${v.surahEn})</div>
          <div class="focus-word-pill">شاهد القول: <strong>${v.focusWord}</strong></div>
        </div>

        <div class="verse-arabic-text">
          «${v.text}»
        </div>

        <div class="verse-translation">
          "${v.translation}"
        </div>

        <div class="verse-dialogue-context">
          <span class="context-item">🗣️ <strong>القائل:</strong> ${v.speaker}</span>
          <span class="context-item">👂 <strong>المخاطب:</strong> ${v.listener}</span>
        </div>

        <div class="verse-vowel-highlight">
          <span class="vowel-focus-tag">🎯 سر الحركة: ${v.vowelFocus}</span>
        </div>

        <!-- Word Breakdown -->
        <div class="verse-breakdown-box">
          <span class="breakdown-title">التحليل النحوي والصرفي للكلمات:</span>
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
              <strong>لفتة بيانية (Nouman Ali Khan / Bayyinah Gem):</strong>
            </div>
            <p class="gem-text">${v.nakGem}</p>
          </div>
        ` : ''}

        <div class="verse-card-actions">
          <button class="verse-action-btn play-audio" onclick="window.soundEngine.speakArabic('${v.text.replace(/'/g, "\\'")}')">
            🔊 استمع للآية
          </button>
        </div>
      </div>
    `).join('');
  }
}

window.quranExplorer = new QuranExplorer();
