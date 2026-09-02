/**
 * Main Application Orchestrator
 * Handles navigation, state management, theming, font size scaling, and footer versioning (English Interface)
 */

const APP_VERSION = "v1.0.5";
const LAST_UPDATED = "2026-09-02 05:53";

class App {
  constructor() {
    this.currentTab = 'sarf';
    this.theme = localStorage.getItem('qala_theme') || 'dark';
    this.fontScale = localStorage.getItem('qala_font_scale') || 'normal'; // 'normal' | 'large' | 'xlarge'
  }

  init() {
    this.applyTheme();
    this.applyFontScale();
    this.setupNavigation();
    this.setupThemeToggle();
    this.setupFontScaleToggle();
    this.setupSoundToggle();
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

        const msg = `Font Size: ${this.fontScale === 'xlarge' ? 'Extra Large (135%)' : (this.fontScale === 'large' ? 'Large (118%)' : 'Normal (100%)')}`;
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

    const hint = 'Tap to clear cache & reload';
    versionEl.innerHTML = `<span class="reload-icon">🔄</span> <strong>${APP_VERSION}</strong> (updated ${LAST_UPDATED}) • <span class="version-hint">${hint}</span>`;
    versionEl.setAttribute('title', hint);

    // Tap/Click handler to clear all cache & hard reload
    versionEl.onclick = async (e) => {
      e.preventDefault();
      
      if (window.soundEngine) {
        window.soundEngine.playPop();
        window.soundEngine.vibrate([40, 60, 40]);
      }
      
      this.showCacheToast('🧹 Clearing Cache & Reloading...');

      // 1. Clear Cache Storage API
      if ('caches' in window) {
        try {
          const cacheKeys = await caches.keys();
          await Promise.all(cacheKeys.map(k => caches.delete(k)));
        } catch (err) {
          console.warn('Cache clear error:', err);
        }
      }

      // 2. Unregister active Service Workers
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
