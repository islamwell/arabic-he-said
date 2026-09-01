/**
 * Main Application Orchestrator
 * Handles navigation, state management, theming, font size scaling, language switching (i18n), and footer versioning
 */

const APP_VERSION = "v1.0.5";
const LAST_UPDATED = "2026-09-02 00:48";

class App {
  constructor() {
    this.currentTab = 'sarf';
    this.theme = localStorage.getItem('qala_theme') || 'dark';
    this.currentLang = localStorage.getItem('qala_lang') || 'ar';
    this.fontScale = localStorage.getItem('qala_font_scale') || 'normal'; // 'normal' | 'large' | 'xlarge'
  }

  init() {
    this.applyTheme();
    this.applyFontScale();
    this.setupNavigation();
    this.setupThemeToggle();
    this.setupFontScaleToggle();
    this.setupSoundToggle();
    this.setupLanguageToggle();
    this.setupFooterVersion();

    // Initialize all subsystems
    if (window.conjugationEngine) window.conjugationEngine.init();
    if (window.vowelGym) window.vowelGym.init();
    if (window.quranExplorer) window.quranExplorer.init();
    if (window.sentenceBuilder) window.sentenceBuilder.init();
    if (window.qalaTetrisGame) window.qalaTetrisGame.init();
    if (window.harakahBlitzGame) window.harakahBlitzGame.init();

    // Subtab switching in Games arena (Tetris vs Blitz)
    this.setupGamesSubtabs();

    // Apply current language strings
    this.applyLanguage(this.currentLang);
  }

  setupNavigation() {
    const navItems = document.querySelectorAll('.bottom-nav-item, .desktop-nav-link');
    navItems.forEach(item => {
      item.addEventListener('click', (e) => {
        const tabId = e.currentTarget.dataset.tab;
        this.switchTab(tabId);
      });
    });
  }

  switchTab(tabId) {
    if (!tabId || tabId === this.currentTab) return;
    this.currentTab = tabId;

    if (window.soundEngine) window.soundEngine.playClick();

    // Update bottom nav items
    document.querySelectorAll('.bottom-nav-item, .desktop-nav-link').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tab === tabId);
    });

    // Update tab view panels
    document.querySelectorAll('.tab-view-panel').forEach(panel => {
      panel.classList.toggle('active', panel.id === `tab-${tabId}`);
    });

    // Scroll to top of panel smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Resize and draw canvas if switching to games
    if (tabId === 'games' && window.qalaTetrisGame) {
      setTimeout(() => {
        window.qalaTetrisGame.adjustCanvasSize();
        if (!window.qalaTetrisGame.isRunning) {
          window.qalaTetrisGame.drawInitialScreen();
        }
      }, 100);
    }
  }

  setupGamesSubtabs() {
    const tabs = document.querySelectorAll('.game-subtab-btn');
    tabs.forEach(t => {
      t.addEventListener('click', (e) => {
        const gameId = e.currentTarget.dataset.game;
        if (window.soundEngine) window.soundEngine.playClick();

        tabs.forEach(b => b.classList.remove('active'));
        e.currentTarget.classList.add('active');

        document.querySelectorAll('.game-panel-section').forEach(p => {
          p.classList.toggle('active', p.id === `game-${gameId}`);
        });

        if (gameId === 'tetris' && window.qalaTetrisGame) {
          setTimeout(() => {
            window.qalaTetrisGame.adjustCanvasSize();
            if (!window.qalaTetrisGame.isRunning) {
              window.qalaTetrisGame.drawInitialScreen();
            }
          }, 100);
        }
      });
    });
  }

  applyTheme() {
    document.documentElement.setAttribute('data-theme', this.theme);
    const themeBtn = document.getElementById('theme-toggle-btn');
    if (themeBtn) {
      themeBtn.innerHTML = this.theme === 'dark' ? '☀️' : '🌙';
    }
  }

  setupThemeToggle() {
    const themeBtn = document.getElementById('theme-toggle-btn');
    if (themeBtn) {
      themeBtn.addEventListener('click', () => {
        this.theme = this.theme === 'dark' ? 'light' : 'dark';
        localStorage.setItem('qala_theme', this.theme);
        this.applyTheme();
        if (window.soundEngine) window.soundEngine.playClick();
      });
    }
  }

  applyFontScale() {
    document.documentElement.setAttribute('data-font-scale', this.fontScale);
    const fontBtn = document.getElementById('font-size-toggle-btn');
    if (fontBtn) {
      const label = this.fontScale === 'xlarge' ? '🔠 A++' : (this.fontScale === 'large' ? '🔠 A+' : '🔠 A');
      fontBtn.innerHTML = label;
    }
  }

  setupFontScaleToggle() {
    const fontBtn = document.getElementById('font-size-toggle-btn');
    if (fontBtn) {
      fontBtn.addEventListener('click', () => {
        if (this.fontScale === 'normal') {
          this.fontScale = 'large';
        } else if (this.fontScale === 'large') {
          this.fontScale = 'xlarge';
        } else {
          this.fontScale = 'normal';
        }
        localStorage.setItem('qala_font_scale', this.fontScale);
        this.applyFontScale();
        if (window.soundEngine) window.soundEngine.playClick();

        const lang = this.currentLang || 'ar';
        const msg = lang === 'en'
          ? `Font Size: ${this.fontScale.toUpperCase()}`
          : `حجم الخط: ${this.fontScale === 'xlarge' ? 'كبير جداً' : (this.fontScale === 'large' ? 'كبير' : 'عادي')}`;
        this.showCacheToast(msg);
      });
    }
  }

  setupSoundToggle() {
    const soundBtn = document.getElementById('sound-toggle-btn');
    if (soundBtn) {
      soundBtn.addEventListener('click', () => {
        window.soundEngine.muted = !window.soundEngine.muted;
        soundBtn.innerHTML = window.soundEngine.muted ? '🔇' : '🔊';
      });
    }
  }

  setupLanguageToggle() {
    const langBtn = document.getElementById('lang-toggle-btn');
    if (langBtn) {
      langBtn.addEventListener('click', () => {
        this.currentLang = this.currentLang === 'ar' ? 'en' : 'ar';
        localStorage.setItem('qala_lang', this.currentLang);
        this.applyLanguage(this.currentLang);
        if (window.soundEngine) window.soundEngine.playClick();
      });
    }
  }

  applyLanguage(lang) {
    if (!window.I18N || !window.I18N[lang]) return;
    const t = window.I18N[lang];

    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'en' ? 'ltr' : 'rtl');

    // Header & Toggle Buttons
    const langBtn = document.getElementById('lang-toggle-btn');
    if (langBtn) langBtn.textContent = t.langToggle;

    const brandTitle = document.getElementById('brand-title');
    if (brandTitle) brandTitle.textContent = t.appTitle;

    const brandSubtitle = document.getElementById('brand-subtitle');
    if (brandSubtitle) brandSubtitle.textContent = t.appSubtitle;

    // Bottom Navigation Labels
    const navSarf = document.querySelector('.bottom-nav-item[data-tab="sarf"] .nav-label');
    const navVowels = document.querySelector('.bottom-nav-item[data-tab="vowel-gym"] .nav-label');
    const navQuran = document.querySelector('.bottom-nav-item[data-tab="quran"] .nav-label');
    const navBuilder = document.querySelector('.bottom-nav-item[data-tab="builder"] .nav-label');
    const navGames = document.querySelector('.bottom-nav-item[data-tab="games"] .nav-label');

    if (navSarf) navSarf.textContent = t.navSarf;
    if (navVowels) navVowels.textContent = t.navVowels;
    if (navQuran) navQuran.textContent = t.navQuran;
    if (navBuilder) navBuilder.textContent = t.navBuilder;
    if (navGames) navGames.textContent = t.navGames;

    // Tab 1: Sarf Section
    const sarfBadge = document.getElementById('sarf-hero-badge');
    const sarfTitle = document.getElementById('sarf-hero-title');
    const sarfSub = document.getElementById('sarf-hero-sub');
    if (sarfBadge) sarfBadge.textContent = t.sarfBadge;
    if (sarfTitle) sarfTitle.textContent = t.sarfTitle;
    if (sarfSub) sarfSub.textContent = t.sarfSub;

    const ajwafBadge = document.getElementById('ajwaf-title-text');
    const ajwafSub = document.getElementById('ajwaf-sub-text');
    const ajwafPrev = document.getElementById('ajwaf-prev-btn');
    const ajwafNext = document.getElementById('ajwaf-next-btn');
    if (ajwafBadge) ajwafBadge.textContent = t.ajwafBadge;
    if (ajwafSub) ajwafSub.textContent = t.ajwafSub;
    if (ajwafPrev) ajwafPrev.textContent = t.ajwafPrev;
    if (ajwafNext) ajwafNext.textContent = t.ajwafNext;

    const derivedBadge = document.getElementById('derived-hero-badge');
    const derivedTitle = document.getElementById('derived-hero-title');
    const derivedSub = document.getElementById('derived-hero-sub');
    if (derivedBadge) derivedBadge.textContent = t.derivedBadge;
    if (derivedTitle) derivedTitle.textContent = t.derivedTitle;
    if (derivedSub) derivedSub.textContent = t.derivedSub;

    const nominalsBadge = document.getElementById('nominals-hero-badge');
    const nominalsTitle = document.getElementById('nominals-hero-title');
    if (nominalsBadge) nominalsBadge.textContent = t.nominalsBadge;
    if (nominalsTitle) nominalsTitle.textContent = t.nominalsTitle;

    // Tab 2: Vowel Gym
    const vowelsBadge = document.getElementById('vowels-hero-badge');
    const vowelsTitle = document.getElementById('vowels-hero-title');
    const vowelsSub = document.getElementById('vowels-hero-sub');
    if (vowelsBadge) vowelsBadge.textContent = t.vowelsBadge;
    if (vowelsTitle) vowelsTitle.textContent = t.vowelsTitle;
    if (vowelsSub) vowelsSub.textContent = t.vowelsSub;

    const drillTitle = document.getElementById('drill-hero-title');
    if (drillTitle) drillTitle.textContent = t.drillTitle;

    const scoreLabel = document.getElementById('drill-score-label');
    const streakLabel = document.getElementById('drill-streak-label');
    if (scoreLabel) scoreLabel.textContent = t.scoreLabel;
    if (streakLabel) streakLabel.textContent = t.streakLabel;

    // Tab 3: Quran
    const quranBadge = document.getElementById('quran-hero-badge');
    const quranTitle = document.getElementById('quran-hero-title');
    const quranSub = document.getElementById('quran-hero-sub');
    if (quranBadge) quranBadge.textContent = t.quranBadge;
    if (quranTitle) quranTitle.textContent = t.quranTitle;
    if (quranSub) quranSub.textContent = t.quranSub;

    const quranSearchInput = document.getElementById('quran-search-input');
    if (quranSearchInput) quranSearchInput.placeholder = t.quranSearchPlaceholder;

    // Tab 4: Sentence Builder
    const builderBadge = document.getElementById('builder-hero-badge');
    const builderTitle = document.getElementById('builder-hero-title');
    const builderSub = document.getElementById('builder-hero-sub');
    if (builderBadge) builderBadge.textContent = t.builderBadge;
    if (builderTitle) builderTitle.textContent = t.builderTitle;
    if (builderSub) builderSub.textContent = t.builderSub;

    const resetBtn = document.getElementById('sb-reset-btn');
    const checkBtn = document.getElementById('sb-check-btn');
    if (resetBtn) resetBtn.textContent = t.resetBtn;
    if (checkBtn) checkBtn.textContent = t.checkBtn;

    // Tab 5: Games
    const gamesBadge = document.getElementById('games-hero-badge');
    const gamesTitle = document.getElementById('games-hero-title');
    const gamesSub = document.getElementById('games-hero-sub');
    if (gamesBadge) gamesBadge.textContent = t.gamesBadge;
    if (gamesTitle) gamesTitle.textContent = t.gamesTitle;
    if (gamesSub) gamesSub.textContent = t.gamesSub;

    const tabTetris = document.querySelector('.game-subtab-btn[data-game="tetris"]');
    const tabBlitz = document.querySelector('.game-subtab-btn[data-game="blitz"]');
    if (tabTetris) tabTetris.textContent = t.tabTetris;
    if (tabBlitz) tabBlitz.textContent = t.tabBlitz;

    // Tetris Score Labels
    const tetrisScoreLbl = document.getElementById('tetris-score-lbl');
    const tetrisLinesLbl = document.getElementById('tetris-lines-lbl');
    const tetrisLevelLbl = document.getElementById('tetris-level-lbl');
    const tetrisStartBtn = document.getElementById('tetris-start-btn');
    const tetrisPauseBtn = document.getElementById('tetris-pause-btn');
    const tetrisRulesTitle = document.getElementById('tetris-rules-title');
    const tetrisRulesText = document.getElementById('tetris-rules-text');

    if (tetrisScoreLbl) tetrisScoreLbl.textContent = t.score;
    if (tetrisLinesLbl) tetrisLinesLbl.textContent = t.lines;
    if (tetrisLevelLbl) tetrisLevelLbl.textContent = t.level;
    if (tetrisStartBtn && !window.qalaTetrisGame.isRunning) tetrisStartBtn.textContent = t.startTetris;
    if (tetrisPauseBtn) tetrisPauseBtn.textContent = t.pauseTetris;
    if (tetrisRulesTitle) tetrisRulesTitle.textContent = t.tetrisRulesTitle;
    if (tetrisRulesText) tetrisRulesText.textContent = t.tetrisRulesText;

    // Blitz Labels
    const blitzTimeLbl = document.getElementById('blitz-time-lbl');
    const blitzScoreLbl = document.getElementById('blitz-score-lbl');
    const blitzStreakLbl = document.getElementById('blitz-streak-lbl');
    const blitzMultiLbl = document.getElementById('blitz-multi-lbl');
    const blitzIntroTitle = document.getElementById('blitz-intro-title');
    const blitzIntroDesc = document.getElementById('blitz-intro-desc');
    const blitzStartBtn = document.getElementById('blitz-start-btn');

    if (blitzTimeLbl) blitzTimeLbl.textContent = t.blitzTime;
    if (blitzScoreLbl) blitzScoreLbl.textContent = t.blitzScore;
    if (blitzStreakLbl) blitzStreakLbl.textContent = t.blitzStreak;
    if (blitzMultiLbl) blitzMultiLbl.textContent = t.blitzMultiplier;
    if (blitzIntroTitle) blitzIntroTitle.textContent = t.blitzIntroTitle;
    if (blitzIntroDesc) blitzIntroDesc.textContent = t.blitzIntroDesc;
    if (blitzStartBtn) blitzStartBtn.textContent = t.blitzStartBtn;

    // Footer
    const footerTitle = document.getElementById('footer-title');
    const footerCredits = document.getElementById('footer-credits');
    if (footerTitle) footerTitle.textContent = t.footerTitle;
    if (footerCredits) footerCredits.textContent = t.footerCredits;

    this.setupFooterVersion();

    // Trigger updates in components if needed
    if (window.conjugationEngine) window.conjugationEngine.renderActiveConjugation();
  }

  showCacheToast(message) {
    const existing = document.querySelector('.cache-toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'cache-toast';
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.remove();
    }, 2800);
  }

  setupFooterVersion() {
    const versionEl = document.getElementById('footer-version-text');
    if (!versionEl) return;

    const lang = this.currentLang || 'ar';
    const t = window.I18N && window.I18N[lang] ? window.I18N[lang] : window.I18N['ar'];
    const hint = t.footerReloadHint || (lang === 'en' ? 'Tap to clear cache & reload' : 'اضغط لمسح الكاش وتحديث التطبيق');
    
    versionEl.innerHTML = `<span class="reload-icon">🔄</span> <strong>${APP_VERSION}</strong> (updated ${LAST_UPDATED}) • <span class="version-hint">${hint}</span>`;
    versionEl.setAttribute('title', hint);

    // Tap/Click handler to clear all cache & hard reload
    versionEl.onclick = async (e) => {
      e.preventDefault();
      
      if (window.soundEngine) {
        window.soundEngine.playPop();
        window.soundEngine.vibrate([40, 60, 40]);
      }
      
      const toastMsg = t.toastClearingCache || (lang === 'en' ? '🧹 Clearing Cache & Reloading...' : '🧹 جاري مسح الذاكرة المؤقتة وتحديث الصفحة...');
      this.showCacheToast(toastMsg);

      // 1. Clear Cache Storage API
      if ('caches' in window) {
        try {
          const cacheKeys = await caches.keys();
          await Promise.all(cacheKeys.map(k => caches.delete(k)));
        } catch (err) {
          console.warn('Cache clear error:', err);
        }
      }

      // 2. Unregister any active Service Workers
      if ('serviceWorker' in navigator) {
        try {
          const registrations = await navigator.serviceWorker.getRegistrations();
          for (let reg of registrations) {
            await reg.unregister();
          }
        } catch (err) {}
      }

      // 3. Clear session storage
      try {
        sessionStorage.clear();
      } catch (err) {}

      // 4. Force hard reload bypassing cache with timestamp query
      setTimeout(() => {
        const url = new URL(window.location.href);
        url.searchParams.set('_nocache', Date.now().toString());
        window.location.replace(url.toString());
      }, 500);
    };
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.app = new App();
  window.app.init();
});
