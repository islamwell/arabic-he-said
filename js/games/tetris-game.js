/**
 * Qāla Tetris Game (لعبة تيتريس الكلمات وقواعد قال)
 * HTML5 Canvas Tetris-style falling blocks matched with Arabic Grammar Conjugations!
 * Enhanced with larger squares and high-contrast typography for effortless reading.
 */

class QalaTetrisGame {
  constructor() {
    this.canvas = null;
    this.ctx = null;
    this.gridWidth = 6;  // 6 columns for large, readable squares
    this.gridHeight = 9; // 9 rows for comfortable mobile vertical view
    this.blockSize = 56; // Dynamic large block size
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
  }

  adjustCanvasSize() {
    if (!this.canvas) return;
    const parentWidth = this.canvas.parentElement.clientWidth || 340;
    // Calculate large block size (e.g. 52px to 62px)
    const availableWidth = Math.min(parentWidth - 16, 390);
    const idealBlock = Math.floor(availableWidth / this.gridWidth);
    this.blockSize = Math.max(idealBlock, 48);
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

    // Touch Buttons
    const btnLeft = document.getElementById('tetris-btn-left');
    const btnRight = document.getElementById('tetris-btn-right');
    const btnDown = document.getElementById('tetris-btn-down');
    const btnRotate = document.getElementById('tetris-btn-rotate');
    const startBtn = document.getElementById('tetris-start-btn');
    const pauseBtn = document.getElementById('tetris-pause-btn');

    if (btnLeft) btnLeft.addEventListener('click', () => { this.moveLeft(); window.soundEngine.playClick(); });
    if (btnRight) btnRight.addEventListener('click', () => { this.moveRight(); window.soundEngine.playClick(); });
    if (btnDown) btnDown.addEventListener('click', () => { this.dropPiece(); window.soundEngine.playClick(); });
    if (btnRotate) btnRotate.addEventListener('click', () => { this.cyclePieceWord(); window.soundEngine.playClick(); });

    if (startBtn) {
      startBtn.addEventListener('click', () => {
        const lang = window.app ? window.app.currentLang : 'ar';
        const t = window.I18N[lang];
        if (!this.isRunning) {
          this.startGame();
          startBtn.textContent = t.restartTetris;
        } else {
          this.startGame();
        }
      });
    }

    if (pauseBtn) {
      pauseBtn.addEventListener('click', () => {
        const lang = window.app ? window.app.currentLang : 'ar';
        const t = window.I18N[lang];
        this.togglePause();
        pauseBtn.textContent = this.isPaused ? t.resumeTetris : t.pauseTetris;
      });
    }
  }

  startGame() {
    this.adjustCanvasSize();
    this.resetGrid();
    this.score = 0;
    this.linesCleared = 0;
    this.level = 1;
    this.dropInterval = 900;
    this.isRunning = true;
    this.isPaused = false;
    this.updateStats();
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
    if (!this.isPaused) {
      this.lastDropTime = performance.now();
      this.gameLoop(performance.now());
    }
  }

  spawnPiece() {
    const randomType = this.blockTypes[Math.floor(Math.random() * this.blockTypes.length)];
    this.currentPiece = {
      x: Math.floor(this.gridWidth / 2) - 1,
      y: 0,
      width: 2, // 2-block domino
      blocks: [
        { ...randomType, relX: 0, relY: 0 },
        { ...this.blockTypes[Math.floor(Math.random() * this.blockTypes.length)], relX: 1, relY: 0 }
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
      if (gy >= 0 && this.grid[gy][gx] !== null) {
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
    // Rotate blocks orientation
    const b0 = this.currentPiece.blocks[0];
    const b1 = this.currentPiece.blocks[1];

    const isHorizontal = b1.relY === 0;
    const newBlocks = isHorizontal 
      ? [{ ...b0, relX: 0, relY: 0 }, { ...b1, relX: 0, relY: 1 }]
      : [{ ...b0, relX: 0, relY: 0 }, { ...b1, relX: 1, relY: 0 }];

    if (!this.checkCollision(this.currentPiece.x, this.currentPiece.y, newBlocks)) {
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
    let matchesFound = false;

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
            matchesFound = true;
            window.soundEngine.playSuccess();
          }
        }

        // Check vertical neighbor
        if (r + 1 < this.gridHeight && this.grid[r + 1][c]) {
          const neighbor = this.grid[r + 1][c];
          if (cell.pairTag === neighbor.text || cell.text === neighbor.pairTag) {
            this.grid[r][c] = null;
            this.grid[r + 1][c] = null;
            this.score += 50;
            matchesFound = true;
            window.soundEngine.playSuccess();
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
        window.soundEngine.playLineClear();
        r++; // check same row again after shift
      }
    }

    // Gravity drop floating cells
    this.applyGravity();

    // Level up
    if (this.linesCleared >= this.level * 3) {
      this.level++;
      this.dropInterval = Math.max(300, 900 - (this.level - 1) * 80);
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
    window.soundEngine.playError();
    const lang = window.app ? window.app.currentLang : 'ar';
    const msg = lang === 'en' 
      ? `Game Over! Total Score: ${this.score}` 
      : `انتهت اللعبة! مجموع نقاطك: ${this.score}`;
    alert(msg);
    const startBtn = document.getElementById('tetris-start-btn');
    if (startBtn) {
      const t = window.I18N[lang];
      startBtn.textContent = t.startTetris;
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

    // Outer rounded rectangle
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.roundRect(x + 2, y + 2, bw - 4, bw - 4, 8);
    ctx.fill();

    // Bevel / Highlight border
    ctx.strokeStyle = isFalling ? '#ffffff' : 'rgba(255, 255, 255, 0.3)';
    ctx.lineWidth = isFalling ? 2.5 : 1;
    ctx.stroke();

    // Large, clear, high-contrast Arabic typography using Tanzil Quran Othman Madinah font
    ctx.fillStyle = '#ffffff';
    const fontSize = Math.floor(bw * 0.44); // ~25px font!
    ctx.font = `bold ${fontSize}px 'KFGQPC HAFS Uthmanic Script', 'hafs', 'KFGQPC Uthman Taha Naskh', 'Scheherazade New', 'Amiri', serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.shadowColor = 'rgba(0,0,0,0.5)';
    ctx.shadowBlur = 4;
    ctx.fillText(text, x + bw / 2, y + bw / 2 + 1);
    ctx.shadowBlur = 0;
  }
}

window.qalaTetrisGame = new QalaTetrisGame();
