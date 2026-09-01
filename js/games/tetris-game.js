/**
 * Qāla Tetris Game (لعبة تيتريس الكلمات وقواعد قال)
 * HTML5 Canvas Tetris-style falling blocks matched with Arabic Grammar Conjugations!
 * Robust physics, large squares, touch swipe controls, and non-blocking in-game overlay.
 */

class QalaTetrisGame {
  constructor() {
    this.canvas = null;
    this.ctx = null;
    this.gridWidth = 6;   // 6 columns for extra-large, ultra-readable squares
    this.gridHeight = 9;  // 9 rows for comfortable mobile vertical view
    this.blockSize = 56;  // Dynamic large block size
    this.grid = [];
    
    this.currentPiece = null;
    this.dropInterval = 950; // ms
    this.lastDropTime = 0;
    this.score = 0;
    this.linesCleared = 0;
    this.level = 1;
    this.isRunning = false;
    this.isPaused = false;
    this.animationFrameId = null;

    // Word Blocks Bank (Morphemes & Words of Qala)
    this.blockTypes = [
      { text: "قَالَ", color: "#10b981", tag: "past-3ms", pairTag: "هُوَ" },
      { text: "هُوَ", color: "#059669", tag: "pronoun-3ms", pairTag: "قَالَ" },
      { text: "قَالُوا", color: "#3b82f6", tag: "past-3mp", pairTag: "هُمْ" },
      { text: "هُمْ", color: "#2563eb", tag: "pronoun-3mp", pairTag: "قَالُوا" },
      { text: "قُلْتُ", color: "#f59e0b", tag: "past-1s", pairTag: "أَنَا" },
      { text: "أَنَا", color: "#d97706", tag: "pronoun-1s", pairTag: "قُلْتُ" },
      { text: "يَقُولُ", color: "#8b5cf6", tag: "pres-3ms", pairTag: "ـُ" },
      { text: "ـُ", color: "#7c3aed", tag: "vowel-dammah", pairTag: "يَقُولُ" },
      { text: "قُلِ", color: "#ec4899", tag: "amr-kasrah", pairTag: "ادْعُوا" },
      { text: "ادْعُوا", color: "#db2777", tag: "word-sakin", pairTag: "قُلِ" },
      { text: "قِيلَ", color: "#6366f1", tag: "passive", pairTag: "مجهول" },
      { text: "قُلْ", color: "#14b8a6", tag: "amr-sukun", pairTag: "أَنْتَ" }
    ];
  }

  init() {
    this.canvas = document.getElementById('tetris-canvas');
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    
    this.adjustCanvasSize();
    this.resetGrid();
    this.setupControls();
    this.setupTouchSwipe();
    this.drawInitialScreen();

    window.addEventListener('resize', () => {
      this.adjustCanvasSize();
      if (!this.isRunning) this.drawInitialScreen();
    });
  }

  adjustCanvasSize() {
    if (!this.canvas) return;
    // Calculate reliable parent width even when initialized in hidden tab
    let parentWidth = 340;
    if (this.canvas.parentElement && this.canvas.parentElement.clientWidth > 80) {
      parentWidth = this.canvas.parentElement.clientWidth;
    }
    const availableWidth = Math.min(parentWidth - 16, 390);
    const idealBlock = Math.floor(availableWidth / this.gridWidth);
    this.blockSize = Math.max(idealBlock, 52);
    this.canvas.width = this.gridWidth * this.blockSize;
    this.canvas.height = this.gridHeight * this.blockSize;
  }

  resetGrid() {
    this.grid = [];
    for (let r = 0; r < this.gridHeight; r++) {
      const row = [];
      for (let c = 0; c < this.gridWidth; c++) {
        row.push(null);
      }
      this.grid.push(row);
    }
  }

  setupControls() {
    // Keyboard Controls
    window.addEventListener('keydown', (e) => {
      if (!this.isRunning || this.isPaused) return;
      if (e.key === 'ArrowLeft') {
        this.moveLeft();
        e.preventDefault();
      } else if (e.key === 'ArrowRight') {
        this.moveRight();
        e.preventDefault();
      } else if (e.key === 'ArrowDown') {
        this.dropPiece();
        e.preventDefault();
      } else if (e.key === 'ArrowUp' || e.key === ' ') {
        this.cyclePieceWord();
        e.preventDefault();
      }
    });

    // Touch / Click Control Buttons
    const btnLeft = document.getElementById('tetris-btn-left');
    const btnRight = document.getElementById('tetris-btn-right');
    const btnDown = document.getElementById('tetris-btn-down');
    const btnRotate = document.getElementById('tetris-btn-rotate');
    const startBtn = document.getElementById('tetris-start-btn');
    const pauseBtn = document.getElementById('tetris-pause-btn');

    if (btnLeft) btnLeft.onclick = () => { this.moveLeft(); if (window.soundEngine) window.soundEngine.playClick(); };
    if (btnRight) btnRight.onclick = () => { this.moveRight(); if (window.soundEngine) window.soundEngine.playClick(); };
    if (btnDown) btnDown.onclick = () => { this.dropPiece(); if (window.soundEngine) window.soundEngine.playClick(); };
    if (btnRotate) btnRotate.onclick = () => { this.cyclePieceWord(); if (window.soundEngine) window.soundEngine.playClick(); };

    if (startBtn) {
      startBtn.onclick = () => {
        this.startGame();
      };
    }

    if (pauseBtn) {
      pauseBtn.onclick = () => {
        this.togglePause();
      };
    }
  }

  setupTouchSwipe() {
    if (!this.canvas) return;
    let touchStartX = 0;
    let touchStartY = 0;
    let touchStartTime = 0;

    this.canvas.addEventListener('touchstart', (e) => {
      if (!this.isRunning || this.isPaused) return;
      const touch = e.changedTouches[0];
      touchStartX = touch.clientX;
      touchStartY = touch.clientY;
      touchStartTime = performance.now();
      e.preventDefault();
    }, { passive: false });

    this.canvas.addEventListener('touchmove', (e) => {
      if (!this.isRunning || this.isPaused) return;
      e.preventDefault();
    }, { passive: false });

    this.canvas.addEventListener('touchend', (e) => {
      if (!this.isRunning || this.isPaused) return;
      const touch = e.changedTouches[0];
      const dx = touch.clientX - touchStartX;
      const dy = touch.clientY - touchStartY;
      const dt = performance.now() - touchStartTime;

      if (Math.abs(dx) < 15 && Math.abs(dy) < 15 && dt < 300) {
        // Tap -> Rotate / Cycle
        this.cyclePieceWord();
        if (window.soundEngine) window.soundEngine.playClick();
      } else if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 20) {
        // Horizontal Swipe
        if (dx > 0) {
          this.moveRight();
        } else {
          this.moveLeft();
        }
        if (window.soundEngine) window.soundEngine.playClick();
      } else if (dy > 25) {
        // Downward Swipe -> Drop
        this.dropPiece();
        if (window.soundEngine) window.soundEngine.playClick();
      }
      e.preventDefault();
    }, { passive: false });
  }

  drawInitialScreen() {
    if (!this.ctx) return;
    const ctx = this.ctx;
    ctx.fillStyle = '#0a0f1d';
    ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    // Draw grid lines
    const bw = this.blockSize;
    ctx.strokeStyle = '#1e293b';
    ctx.lineWidth = 1;
    for (let r = 0; r <= this.gridHeight; r++) {
      ctx.beginPath();
      ctx.moveTo(0, r * bw);
      ctx.lineTo(this.canvas.width, r * bw);
      ctx.stroke();
    }
    for (let c = 0; c <= this.gridWidth; c++) {
      ctx.beginPath();
      ctx.moveTo(c * bw, 0);
      ctx.lineTo(c * bw, this.canvas.height);
      ctx.stroke();
    }

    // Centered Welcome Prompt
    ctx.fillStyle = '#f59e0b';
    ctx.font = "bold 22px 'Amiri', 'Tajawal', sans-serif";
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText("🎮 تيتريس الكلمات", this.canvas.width / 2, this.canvas.height / 2 - 20);

    ctx.fillStyle = '#94a3b8';
    ctx.font = "14px 'Tajawal', sans-serif";
    ctx.fillText("اضغط «ابدأ اللعبة» للبدء", this.canvas.width / 2, this.canvas.height / 2 + 15);
  }

  startGame() {
    // Hide overlay if open
    const overlay = document.getElementById('tetris-overlay');
    if (overlay) overlay.classList.add('hidden');

    this.adjustCanvasSize();
    this.resetGrid();
    this.score = 0;
    this.linesCleared = 0;
    this.level = 1;
    this.dropInterval = 950;
    this.isRunning = true;
    this.isPaused = false;
    this.updateStats();

    const startBtn = document.getElementById('tetris-start-btn');
    const pauseBtn = document.getElementById('tetris-pause-btn');
    const lang = window.app ? window.app.currentLang : 'ar';
    const t = window.I18N ? window.I18N[lang] : { restartTetris: 'إعادة البدء', pauseTetris: 'إيقاف مؤقت' };

    if (startBtn) startBtn.textContent = t.restartTetris || 'إعادة البدء (Restart)';
    if (pauseBtn) pauseBtn.textContent = t.pauseTetris || 'إيقاف مؤقت (Pause)';

    this.spawnPiece();
    this.lastDropTime = performance.now();

    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
    this.gameLoop(performance.now());
  }

  togglePause() {
    if (!this.isRunning) return;
    this.isPaused = !this.isPaused;
    const pauseBtn = document.getElementById('tetris-pause-btn');
    const lang = window.app ? window.app.currentLang : 'ar';
    const t = window.I18N ? window.I18N[lang] : { resumeTetris: 'استئناف', pauseTetris: 'إيقاف مؤقت' };

    if (pauseBtn) {
      pauseBtn.textContent = this.isPaused ? (t.resumeTetris || 'استئناف') : (t.pauseTetris || 'إيقاف مؤقت');
    }

    if (!this.isPaused) {
      this.lastDropTime = performance.now();
      this.gameLoop(performance.now());
    }
  }

  spawnPiece() {
    const pool = this.blockTypes;
    const b0Type = pool[Math.floor(Math.random() * pool.length)];
    const b1Type = pool[Math.floor(Math.random() * pool.length)];

    this.currentPiece = {
      x: 2, // Centered in 6-column grid
      y: 0,
      blocks: [
        { ...b0Type, relX: 0, relY: 0 },
        { ...b1Type, relX: 1, relY: 0 }
      ]
    };

    // Check collision on spawn
    if (this.checkCollision(this.currentPiece.x, this.currentPiece.y, this.currentPiece.blocks)) {
      this.gameOver();
    }
  }

  checkCollision(px, py, blocks) {
    for (const b of blocks) {
      const gx = px + b.relX;
      const gy = py + b.relY;

      if (gx < 0 || gx >= this.gridWidth || gy >= this.gridHeight) {
        return true;
      }
      if (gy >= 0 && this.grid[gy] && this.grid[gy][gx] !== null) {
        return true;
      }
    }
    return false;
  }

  moveLeft() {
    if (!this.currentPiece) return;
    if (!this.checkCollision(this.currentPiece.x - 1, this.currentPiece.y, this.currentPiece.blocks)) {
      this.currentPiece.x--;
    }
  }

  moveRight() {
    if (!this.currentPiece) return;
    if (!this.checkCollision(this.currentPiece.x + 1, this.currentPiece.y, this.currentPiece.blocks)) {
      this.currentPiece.x++;
    }
  }

  cyclePieceWord() {
    if (!this.currentPiece) return;
    const b0 = this.currentPiece.blocks[0];
    const b1 = this.currentPiece.blocks[1];

    const isHorizontal = b1.relY === 0;
    const newBlocks = isHorizontal 
      ? [{ ...b0, relX: 0, relY: 0 }, { ...b1, relX: 0, relY: 1 }]
      : [{ ...b0, relX: 0, relY: 0 }, { ...b1, relX: 1, relY: 0 }];

    // Normal rotation check
    if (!this.checkCollision(this.currentPiece.x, this.currentPiece.y, newBlocks)) {
      this.currentPiece.blocks = newBlocks;
    } else if (this.currentPiece.x > 0 && !this.checkCollision(this.currentPiece.x - 1, this.currentPiece.y, newBlocks)) {
      // Wall kick left
      this.currentPiece.x--;
      this.currentPiece.blocks = newBlocks;
    }
  }

  dropPiece() {
    if (!this.currentPiece) return;
    if (!this.checkCollision(this.currentPiece.x, this.currentPiece.y + 1, this.currentPiece.blocks)) {
      this.currentPiece.y++;
      this.score += 1;
      this.updateStats();
    } else {
      this.lockPiece();
    }
  }

  lockPiece() {
    for (const b of this.currentPiece.blocks) {
      const gx = this.currentPiece.x + b.relX;
      const gy = this.currentPiece.y + b.relY;
      if (gy >= 0 && gy < this.gridHeight && gx >= 0 && gx < this.gridWidth) {
        this.grid[gy][gx] = { text: b.text, color: b.color, tag: b.tag, pairTag: b.pairTag };
      }
    }

    this.checkMatchesAndLines();
    this.spawnPiece();
  }

  checkMatchesAndLines() {
    // 1. Check Grammar Pair Matches (Adjacency)
    for (let r = 0; r < this.gridHeight; r++) {
      for (let c = 0; c < this.gridWidth; c++) {
        const cell = this.grid[r][c];
        if (!cell) continue;

        // Check horizontal neighbor
        if (c + 1 < this.gridWidth && this.grid[r][c + 1]) {
          const neighbor = this.grid[r][c + 1];
          if (cell.pairTag === neighbor.text || cell.text === neighbor.pairTag) {
            this.grid[r][c] = null;
            this.grid[r][c + 1] = null;
            this.score += 50;
            if (window.soundEngine) window.soundEngine.playSuccess();
          }
        }

        // Check vertical neighbor
        if (r + 1 < this.gridHeight && this.grid[r + 1][c]) {
          const neighbor = this.grid[r + 1][c];
          if (cell.pairTag === neighbor.text || cell.text === neighbor.pairTag) {
            this.grid[r][c] = null;
            this.grid[r + 1][c] = null;
            this.score += 50;
            if (window.soundEngine) window.soundEngine.playSuccess();
          }
        }
      }
    }

    // 2. Check Full Lines
    for (let r = this.gridHeight - 1; r >= 0; r--) {
      const isFull = this.grid[r].every(cell => cell !== null);
      if (isFull) {
        this.grid.splice(r, 1);
        const newEmptyRow = new Array(this.gridWidth).fill(null);
        this.grid.unshift(newEmptyRow);
        this.linesCleared++;
        this.score += 100 * this.level;
        if (window.soundEngine) window.soundEngine.playLineClear();
        r++; // Recheck same row index after array shift
      }
    }

    // Gravity drop floating cells
    this.applyGravity();

    // Level up
    if (this.linesCleared >= this.level * 3) {
      this.level++;
      this.dropInterval = Math.max(300, 950 - (this.level - 1) * 80);
    }

    this.updateStats();
  }

  applyGravity() {
    for (let c = 0; c < this.gridWidth; c++) {
      for (let r = this.gridHeight - 2; r >= 0; r--) {
        if (this.grid[r][c] !== null && this.grid[r + 1][c] === null) {
          let targetR = r;
          while (targetR + 1 < this.gridHeight && this.grid[targetR + 1][c] === null) {
            targetR++;
          }
          this.grid[targetR][c] = this.grid[r][c];
          this.grid[r][c] = null;
        }
      }
    }
  }

  gameOver() {
    this.isRunning = false;
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
    if (window.soundEngine) window.soundEngine.playError();

    const overlay = document.getElementById('tetris-overlay');
    const startBtn = document.getElementById('tetris-start-btn');
    const lang = window.app ? window.app.currentLang : 'ar';
    const t = window.I18N ? window.I18N[lang] : {};

    if (startBtn) {
      startBtn.textContent = t.startTetris || 'ابدأ اللعبة (Start)';
    }

    if (overlay) {
      const title = lang === 'en' ? 'Game Over!' : 'انتهت اللعبة!';
      const scoreText = lang === 'en' ? `Score: ${this.score}` : `مجموع النقاط: ${this.score}`;
      const linesText = lang === 'en' ? `Lines Cleared: ${this.linesCleared}` : `الصفوف المكتملة: ${this.linesCleared}`;
      const playAgain = lang === 'en' ? 'Play Again' : 'العب مرة أخرى';

      overlay.innerHTML = `
        <div class="blitz-gameover-box animate-pop">
          <div class="gameover-trophy">🎮</div>
          <h3 class="gameover-title">${title}</h3>
          <div class="gameover-score-pill">${scoreText}</div>
          <p class="gameover-sub">${linesText}</p>
          <button class="primary-btn" id="tetris-overlay-restart" style="margin-top: 14px;">${playAgain}</button>
        </div>
      `;
      overlay.classList.remove('hidden');

      const rBtn = document.getElementById('tetris-overlay-restart');
      if (rBtn) {
        rBtn.onclick = () => {
          overlay.classList.add('hidden');
          this.startGame();
        };
      }
    }
  }

  updateStats() {
    const scoreEl = document.getElementById('tetris-score-val');
    const linesEl = document.getElementById('tetris-lines-val');
    const levelEl = document.getElementById('tetris-level-val');

    if (scoreEl) scoreEl.textContent = this.score;
    if (linesEl) linesEl.textContent = this.linesCleared;
    if (levelEl) levelEl.textContent = this.level;
  }

  gameLoop(currentTime) {
    if (!this.isRunning) return;

    if (!this.isPaused) {
      if (currentTime - this.lastDropTime > this.dropInterval) {
        this.dropPiece();
        this.lastDropTime = currentTime;
      }
      this.render();
    }

    this.animationFrameId = requestAnimationFrame((t) => this.gameLoop(t));
  }

  render() {
    if (!this.ctx) return;
    const ctx = this.ctx;
    const bw = this.blockSize;

    // Clear Canvas
    ctx.fillStyle = '#0a0f1d';
    ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    // Draw Grid Lines
    ctx.strokeStyle = '#1e293b';
    ctx.lineWidth = 1;
    for (let r = 0; r <= this.gridHeight; r++) {
      ctx.beginPath();
      ctx.moveTo(0, r * bw);
      ctx.lineTo(this.canvas.width, r * bw);
      ctx.stroke();
    }
    for (let c = 0; c <= this.gridWidth; c++) {
      ctx.beginPath();
      ctx.moveTo(c * bw, 0);
      ctx.lineTo(c * bw, this.canvas.height);
      ctx.stroke();
    }

    // Draw Placed Grid Blocks
    for (let r = 0; r < this.gridHeight; r++) {
      for (let c = 0; c < this.gridWidth; c++) {
        const cell = this.grid[r][c];
        if (cell) {
          this.drawBlock(c * bw, r * bw, cell.text, cell.color);
        }
      }
    }

    // Draw Current Falling Piece
    if (this.currentPiece) {
      for (const b of this.currentPiece.blocks) {
        const px = (this.currentPiece.x + b.relX) * bw;
        const py = (this.currentPiece.y + b.relY) * bw;
        this.drawBlock(px, py, b.text, b.color, true);
      }
    }
  }

  drawBlock(x, y, text, color, isFalling = false) {
    const ctx = this.ctx;
    const bw = this.blockSize;

    // Outer rounded block
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.roundRect(x + 2, y + 2, bw - 4, bw - 4, 8);
    ctx.fill();

    // Subtle gloss highlight
    ctx.strokeStyle = isFalling ? '#ffffff' : 'rgba(255, 255, 255, 0.35)';
    ctx.lineWidth = isFalling ? 2.5 : 1;
    ctx.stroke();

    // Extra-large, high-contrast Arabic typography
    ctx.fillStyle = '#ffffff';
    const fontSize = Math.floor(bw * 0.44); // ~25px - 28px font!
    ctx.font = `bold ${fontSize}px 'KFGQPC HAFS Uthmanic Script', 'hafs', 'Scheherazade New', 'Amiri', serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.shadowColor = 'rgba(0,0,0,0.6)';
    ctx.shadowBlur = 4;
    ctx.fillText(text, x + bw / 2, y + bw / 2 + 1);
    ctx.shadowBlur = 0;
  }
}

window.qalaTetrisGame = new QalaTetrisGame();
