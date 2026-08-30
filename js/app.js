/**
 * Main Application Orchestrator
 * Handles navigation, state management, theming, and footer versioning
 */

const APP_VERSION = "v1.0.1";
const LAST_UPDATED = "2026-08-30 14:59";

class App {
  constructor() {
    this.currentTab = 'sarf';
    this.theme = localStorage.getItem('qala_theme') || 'dark';
  }

  init() {
    this.applyTheme();
    this.setupNavigation();
    this.setupThemeToggle();
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

    window.soundEngine.playClick();

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

    // Resize canvas if switching to games
    if (tabId === 'games' && window.qalaTetrisGame) {
      setTimeout(() => window.qalaTetrisGame.adjustCanvasSize(), 100);
    }
  }

  setupGamesSubtabs() {
    const tabs = document.querySelectorAll('.game-subtab-btn');
    tabs.forEach(t => {
      t.addEventListener('click', (e) => {
        const gameId = e.currentTarget.dataset.game;
        window.soundEngine.playClick();

        tabs.forEach(b => b.classList.remove('active'));
        e.currentTarget.classList.add('active');

        document.querySelectorAll('.game-panel-section').forEach(p => {
          p.classList.toggle('active', p.id === `game-${gameId}`);
        });

        if (gameId === 'tetris' && window.qalaTetrisGame) {
          setTimeout(() => window.qalaTetrisGame.adjustCanvasSize(), 100);
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
        window.soundEngine.playClick();
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

  setupFooterVersion() {
    const versionEl = document.getElementById('footer-version-text');
    if (versionEl) {
      versionEl.textContent = `${APP_VERSION} (updated ${LAST_UPDATED})`;
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.app = new App();
  window.app.init();
});
