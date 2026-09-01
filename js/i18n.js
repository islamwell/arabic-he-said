/**
 * Internationalization (i18n) Module
 * Supports seamless bilingual switching (Arabic & English) across all UI elements & game modes
 */

window.I18N = {
  ar: {
    appTitle: "موسوعة «قَالَ» التفاعلية",
    appSubtitle: "All Forms, I'rab & Quranic Balaghah",
    langToggle: "🌐 English",
    soundTitle: "كتم / تشغيل الصوت",
    themeTitle: "تغيير النمط",
    
    // Bottom Nav
    navSarf: "الصرف",
    navVowels: "الحركات",
    navQuran: "القرآن",
    navBuilder: "الجمل",
    navGames: "الألعاب",

    // Tab 1: Sarf
    sarfBadge: "علم الصرف والأوزان (Morphology)",
    sarfTitle: "شجرة تصاريف الفعل «قَالَ»",
    sarfSub: "تعلم جميع تصاريف الجذر (ق-و-ل) عبر الضمائر الأربعة عشر في الماضي والمضارع والأمر والمبني للمجهول.",
    ajwafBadge: "🔬 سر الفعل الأجوف والتخلص من الساكنين",
    ajwafSub: "The Science of Hollow Verbs & Why the Waw Disappears",
    ajwafPrev: "السابق",
    ajwafNext: "التالي",
    derivedBadge: "الأوزان القياسية المزيدة (Forms II - X)",
    derivedTitle: "المشتقات والأفعال المزيدة من الجذر",
    derivedSub: "كيف تتغير دلالة القول عند الانتقال إلى أوزان التكلف والإقالة والافتراء.",
    nominalsBadge: "المصادر وأسماء الفاعل والمفعول",
    nominalsTitle: "الأسماء والمصطلحات المشتقة",

    // Tab 2: Vowel Gym
    vowelsBadge: "أسرار النحو والإعراب (Nahw & I'rab Gym)",
    vowelsTitle: "صالة أسرار الحركات الإعرابية",
    vowelsSub: "لماذا جاءت فتحة أم ضمة أم كسرة أم سكون؟ افهم العلل النحوية العميقة بدقة.",
    drillTitle: "⚡ تمارين تعليل الحركات (I'rab Mastery Drill)",
    scoreLabel: "النقاط:",
    streakLabel: "المتتالية:",
    nextQuestionBtn: "السؤال التالي ⭠",

    // Tab 3: Quran
    quranBadge: "الشواهد القرآنية واللطائف البيانية (Bayyinah Gems)",
    quranTitle: "مستكشف آيات القول في القرآن الكريم",
    quranSub: "تحليل نحوي وبلاغي مستلهم من دروس الأستاذ نعمان علي خان وبلاغة القرآن المعجزة.",
    quranSearchPlaceholder: "🔍 ابحث في نص الآية، السورة، أو الشاهد...",

    // Tab 4: Sentence Builder
    builderBadge: "التطبيق العملي (Sentence Synthesizer)",
    builderTitle: "مختبر تركيب الجمل الإعرابي",
    builderSub: "تدرج من الجمل البسيطة (فعل وفاعل) إلى التراكيب القرآنية المعقدة (أدوات النفي، الشرط، ومقول القول).",
    resetBtn: "🔄 مسح وإعادة",
    checkBtn: "✔️ تحقق من الإعراب",
    nextMissionBtn: "التحدي التالي ⭠",

    // Tab 5: Games
    gamesBadge: "الألعاب اللغوية التفاعلية (Grammar Games Arena)",
    gamesTitle: "صالة الألعاب اللغوية",
    gamesSub: "رسخ قواعد وتصاريف وحركات «قال» من خلال الألعاب الحركية والتحديات السريعة.",
    tabTetris: "🎮 تيتريس الكلمات (Qāla Tetris)",
    tabBlitz: "⚡ برق الحركات (Harakah Blitz)",

    // Tetris
    score: "النقاط",
    lines: "الصفوف",
    level: "المستوى",
    startTetris: "ابدأ اللعبة (Start)",
    pauseTetris: "إيقاف مؤقت",
    resumeTetris: "استئناف (Resume)",
    restartTetris: "إعادة البدء (Restart)",
    tetrisRulesTitle: "قواعد اللعبة:",
    tetrisRulesText: "قم بمطابقة الضمائر مع أفعالها المناسبة (مثل هُوَ مع قَالَ، أو هُمْ مع قَالُوا) أو إكمال صفوف أفقية كاملة لمسح الكلمات وجمع النقاط!",

    // Blitz
    blitzTime: "الوقت",
    blitzScore: "النقاط",
    blitzStreak: "المتتالية",
    blitzMultiplier: "المضاعف",
    blitzIntroTitle: "تحدي برق الحركات السريع",
    blitzIntroDesc: "اختر الحركة الإعرابية الصحيحة (فتحة، ضمة، كسرة، سكون) قبل انتهاء الوقت وحقق أعلى مضاعف نقاط!",
    blitzStartBtn: "ابدأ التحدي (45 ثانية)",

    // Footer
    footerTitle: "موسوعة الفعل «قَالَ» في القرآن واللغة العربية",
    footerCredits: "مبنية على أصول النحو والصرف ولطائف التفسير البياني"
  },

  en: {
    appTitle: "Qāla (قال) Encyclopedia",
    appSubtitle: "All Forms, I'rab & Quranic Balaghah",
    langToggle: "🌐 العربية",
    soundTitle: "Toggle Sound",
    themeTitle: "Toggle Theme",

    // Bottom Nav
    navSarf: "Morphology",
    navVowels: "Vowels (I'rab)",
    navQuran: "Quran",
    navBuilder: "Sentences",
    navGames: "Games",

    // Tab 1: Sarf
    sarfBadge: "Morphology & Verb Forms (Sarf)",
    sarfTitle: "Conjugation Tree of «Qāla» (قال)",
    sarfSub: "Master all conjugations of root (Q-W-L) across all 14 pronouns in Past, Present, Imperative, and Passive voices.",
    ajwafBadge: "🔬 Hollow Verb Mystery & Dropping Weak Letters",
    ajwafSub: "The Science of Hollow Verbs (Fi'l Ajwaf) & Iltiqa' al-Sakinayn",
    ajwafPrev: "Previous",
    ajwafNext: "Next",
    derivedBadge: "Derived Verb Forms (Forms II - X)",
    derivedTitle: "Derived Forms & Nominals of Q-W-L",
    derivedSub: "Explore how meanings transform when moving from base saying to forging, excusing, or resigning.",
    nominalsBadge: "Verbal Nouns & Participles",
    nominalsTitle: "Nouns & Participles Derived from Q-W-L",

    // Tab 2: Vowel Gym
    vowelsBadge: "Syntax & Vowel Reasons (Nahw Gym)",
    vowelsTitle: "The Final Vowel (I'rab) Master Gym",
    vowelsSub: "Why Fatḥah, Ḍammah, Kasrah, or Sukūn? Understand the exact grammatical rationale step-by-step.",
    drillTitle: "⚡ Final Vowel Grammar Drills (I'rab Mastery)",
    scoreLabel: "Score:",
    streakLabel: "Streak:",
    nextQuestionBtn: "Next Question ⭢",

    // Tab 3: Quran
    quranBadge: "Quranic Corpus & Bayyinah Balaghah Gems",
    quranTitle: "Quranic Verses Explorer for «Qāla»",
    quranSub: "Syntactic analysis & Balaghah gems inspired by Ustadh Nouman Ali Khan and classical rhetoric.",
    quranSearchPlaceholder: "🔍 Search by verse text, surah name, or target word...",

    // Tab 4: Sentence Builder
    builderBadge: "Hands-on Synthesis (Sentence Builder)",
    builderTitle: "Interactive Sentence Construction Lab",
    builderSub: "Progress from simple 2-word sentences to complex multi-clause Quranic constructions.",
    resetBtn: "🔄 Reset",
    checkBtn: "✔️ Check Grammar",
    nextMissionBtn: "Next Challenge ⭢",

    // Tab 5: Games
    gamesBadge: "Interactive Learning Games Arena",
    gamesTitle: "Grammar Games Arena",
    gamesSub: "Solidify root conjugations and ending vowel intuition with fast-paced tactile challenges.",
    tabTetris: "🎮 Qāla Tetris (Falling Words)",
    tabBlitz: "⚡ Harakah Blitz (Speed Vowels)",

    // Tetris
    score: "Score",
    lines: "Lines",
    level: "Level",
    startTetris: "Start Game",
    pauseTetris: "Pause",
    resumeTetris: "Resume",
    restartTetris: "Restart",
    tetrisRulesTitle: "How to Play:",
    tetrisRulesText: "Match subject pronouns with their corresponding verbs (e.g. هُوَ with قَالَ, or هُمْ with قَالُوا) or complete full horizontal lines to clear blocks and score points!",

    // Blitz
    blitzTime: "Time",
    blitzScore: "Score",
    blitzStreak: "Streak",
    blitzMultiplier: "Multiplier",
    blitzIntroTitle: "Rapid Final Vowel Challenge",
    blitzIntroDesc: "Choose the correct final vowel (Fatha, Dammah, Kasrah, Sukun) before the countdown expires to build combo multipliers!",
    blitzStartBtn: "Start Challenge (45s)",

    // Footer
    footerTitle: "Encyclopedia of the Word «Qāla» in Quran & Arabic",
    footerCredits: "Engineered on classical Nahw, Sarf, and Quranic Balaghah insights"
  }
};
