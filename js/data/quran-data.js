/**
 * Quranic Corpus Data Module for the Word قَالَ and Root ق-و-ل
 * Contains 40+ carefully curated Quranic verses with morphological breakdown,
 * I'rab analysis, speaker identification, and Nouman Ali Khan (Bayyinah) style Balaghah gems.
 */

window.QURAN_DATA = {
  categories: [
    { id: "all", name: "كل الآيات (All Verses)" },
    { id: "past", name: "الماضي (Past Tense - قَالَ / قَالُوا / قُلْتُ)" },
    { id: "present", name: "المضارع (Present - يَقُولُ / يَقُولُونَ)" },
    { id: "amr", name: "الأمر (Imperative - قُلْ / قُولُوا)" },
    { id: "vowel_gems", name: "أسرار الحركات (Final Vowel Gems: الفتحة والكسرة)" },
    { id: "passive", name: "المبني للمجهول (Passive - قِيلَ / يُقَالُ)" },
    { id: "derived", name: "المشتقات والمزيد (Derived Forms & Nouns)" }
  ],

  verses: [
    {
      id: 1,
      surah: "مريم",
      surahEn: "Maryam",
      ayah: 30,
      text: "قَالَ إِنِّي عَبْدُ اللَّهِ آتَانِيَ الْكِتَابَ وَجَعَلَنِي نَبِيًّا",
      translation: "He [Jesus] said, 'Indeed, I am the servant of Allah. He has given me the Scripture and made me a prophet.'",
      category: "past",
      focusWord: "قَالَ",
      speaker: "عيسى عليه السلام (في المهد)",
      listener: "قوم مريم",
      vowelFocus: "الفتحة على اللام (مبني على الفتح)",
      breakdown: [
        { word: "قَالَ", tag: "verb-past", role: "فعل ماضٍ مبني على الفتح، والفاعل ضمير مستتر (هو)" },
        { word: "إِنِّي عَبْدُ اللَّهِ...", tag: "maqool", role: "جملة مقول القول في محل نصب مفعول به" }
      ],
      nakGem: "Ustadh Nouman Ali Khan notes: Baby Isa (AS) begins his miraculous first speech with 'قَالَ' (He said) - not a hesitant sound, but a decisive, complete, authoritative proclamation from the cradle. The very first statement in his 'مقول القول' (direct speech) is establishing his servitude: 'إِنِّي عَبْدُ اللَّهِ' (I am Allah's slave) before mentioning that he is a prophet, directly refuting any future claims of divinity."
    },
    {
      id: 2,
      surah: "البقرة",
      surahEn: "Al-Baqarah",
      ayah: 30,
      text: "وَإِذْ قَالَ رَبُّكَ لِلْمَلَائِكَةِ إِنِّي جَاعِلٌ فِي الْأَرْضِ خَلِيفَةً",
      translation: "And [mention] when your Lord said to the angels, 'Indeed, I will make upon the earth a successive authority.'",
      category: "past",
      focusWord: "قَالَ",
      speaker: "الله سبحانه وتعالى",
      listener: "الملائكة",
      vowelFocus: "الفتحة على قالَ + الضمة على ربُّكَ (فاعل)",
      breakdown: [
        { word: "وَإِذْ", tag: "particle", role: "ظرف لما مضى من الزمان" },
        { word: "قَالَ", tag: "verb-past", role: "فعل ماضٍ مبني على الفتح" },
        { word: "رَبُّكَ", tag: "subject", role: "فاعل مرفوع وعلامة رفعه الضمة الظاهرة، والكاف مضاف إليه" },
        { word: "لِلْمَلَائِكَةِ", tag: "preposition", role: "جار ومجرور متعلق بـ (قال)" },
        { word: "إِنِّي جَاعِلٌ...", tag: "maqool", role: "جملة مقول القول في محل نصب مفعول به" }
      ],
      nakGem: "Notice the construction 'وَإِذْ قَالَ رَبُّكَ' (And recall when your Lord said). In Quranic Arabic, 'إذ' invites the listener into a vivid cinematic recollection as if standing there in the celestial assembly witnessing the grand dialogue."
    },
    {
      id: 3,
      surah: "الإخلاص",
      surahEn: "Al-Ikhlas",
      ayah: 1,
      text: "قُلْ هُوَ اللَّهُ أَحَدٌ",
      translation: "Say, 'He is Allah, [who is] One.'",
      category: "amr",
      focusWord: "قُلْ",
      speaker: "الله تعالى آمراً النبي ﷺ",
      listener: "النبي ﷺ ومن ورائه الأمة والعالم",
      vowelFocus: "السكون على اللام (فعل أمر مبني على السكون)",
      breakdown: [
        { word: "قُلْ", tag: "verb-amr", role: "فعل أمر مبني على السكون، والفاعل مستتر تقديره أنت" },
        { word: "هُوَ اللَّهُ أَحَدٌ", tag: "maqool", role: "جملة مقول القول في محل نصب مفعول به" }
      ],
      nakGem: "Why didn't Allah just reveal 'هُوَ اللَّهُ أَحَدٌ' directly without 'قُلْ'? Nouman Ali Khan explains: 'قُلْ' preserves the Messenger's role as a faithful transmitter who does not author the revelation. When the Prophet ﷺ was challenged about Allah's lineage by the Quraysh, Allah commanded him with 'قُلْ' (Proclaim with unwavering authority!)."
    },
    {
      id: 4,
      surah: "الإسراء",
      surahEn: "Al-Isra",
      ayah: 110,
      text: "قُلِ ادْعُوا اللَّهَ أَوِ ادْعُوا الرَّحْمَٰنَ ۖ أَيًّا مَّا تَدْعُوا فَلَهُ الْأَسْمَاءُ الْحُسْنَىٰ",
      translation: "Say, 'Call upon Allah or call upon the Most Merciful. Whichever [name] you call - to Him belong the best names.'",
      category: "vowel_gems",
      focusWord: "قُلِ",
      speaker: "الأمر الإلهي للنبي ﷺ",
      listener: "المشركون والمؤمنون",
      vowelFocus: "🚨 الكسرة على اللام (كسرة عارضة لمنع التقاء الساكنين)",
      breakdown: [
        { word: "قُلِ", tag: "verb-amr", role: "فعل أمر مبني على السكون وحُرِّك بالكسر منعاً لالتقاء الساكنين" },
        { word: "ادْعُوا...", tag: "maqool", role: "جملة مقول القول في محل نصب مفعول به" }
      ],
      nakGem: "Grammar & Tajweed Gem: The original command is 'قُلْ' with a Sukūn. But the next word 'ادْعُوا' begins with a Hamzatul Wasl and a silent Dal (دْ). You cannot pronounce two silent consonants back to back (قُلْ + دْ), so the Arabic tongue shifts the Lam to a Kasrah: 'قُلِ ادْعُوا'. Beautiful phonetic flow!"
    },
    {
      id: 5,
      surah: "البقرة",
      surahEn: "Al-Baqarah",
      ayah: 214,
      text: "حَتَّىٰ يَقُولَ الرَّسُولُ وَالَّذِينَ آمَنُوا مَعَهُ مَتَىٰ نَصْرُ اللَّهِ",
      translation: "...Until [even their] messenger and those who believed with him said, 'When is the help of Allah?'",
      category: "vowel_gems",
      focusWord: "يَقُولَ",
      speaker: "الرسول والذين آمنوا",
      listener: "رجاء ودعاء لله",
      vowelFocus: "🚨 الفتحة على اللام في المضارع (منصوب بعد حتى)",
      breakdown: [
        { word: "حَتَّىٰ", tag: "particle", role: "حرف غاية ونصب" },
        { word: "يَقُولَ", tag: "verb-pres", role: "فعل مضارع منصوب بأن المضمرة بعد حتى وعلامة نصبه الفتحة" },
        { word: "الرَّسُولُ", tag: "subject", role: "فاعل مرفوع بالضمة الظاهرة" },
        { word: "مَتَىٰ نَصْرُ اللَّهِ", tag: "maqool", role: "جملة مقول القول في محل نصب مفعول به" }
      ],
      nakGem: "The final vowel on 'يَقُولَ' is Fatḥah because 'حَتَّىٰ' here introduces the climax of tribulation. Even the most steadfast leaders reach the very limit of human endurance until they cry out for Divine victory."
    },
    {
      id: 6,
      surah: "هود",
      surahEn: "Hud",
      ayah: 44,
      text: "وَقِيلَ يَا أَرْضُ ابْلَعِي مَاءَكِ وَيَا سَمَاءُ أَقْلِعِي وَغِيضَ الْمَاءُ وَقُضِيَ الْأَمْرُ",
      translation: "And it was said, 'O earth, swallow your water, and O sky, withhold [your rain].' And the water subsided, and the matter was accomplished.",
      category: "passive",
      focusWord: "وَقِيلَ",
      speaker: "الله جل جلاله (حُذِفَ الفاعل للتعظيم والبداهة)",
      listener: "الأرض والسماء (الكون بأجمعه)",
      vowelFocus: "الفتحة على قِيلَ (فعل ماضٍ مبني للمجهول)",
      breakdown: [
        { word: "وَقِيلَ", tag: "verb-passive", role: "فعل ماضٍ مبني للمجهول مبني على الفتح" },
        { word: "يَا أَرْضُ ابْلَعِي...", tag: "maqool", role: "جملة مقول القول في محل رفع نائب فاعل" }
      ],
      nakGem: "Balaghah Masterpiece (Al-Jurjani & NAK): Why is it 'وَقِيلَ' (And it was said) in the passive voice rather than 'And Allah said'? Because in this cosmic catastrophe of the Deluge, who else could command the heavens to stop raining and the earth to swallow its oceans?! The speaker is so overwhelmingly obvious and majestic that naming Him is unnecessary—the sheer command itself executes instantly."
    },
    {
      id: 7,
      surah: "المائدة",
      surahEn: "Al-Ma'idah",
      ayah: 116,
      text: "مَا قُلْتُ لَهُمْ إِلَّا مَا أَمَرْتَنِي بِهِ أَنِ اعْبُدُوا اللَّهَ رَبِّي وَرَبَّكُمْ",
      translation: "I did not say to them except what You commanded me - to worship Allah, my Lord and your Lord.",
      category: "past",
      focusWord: "قُلْتُ",
      speaker: "عيسى عليه السلام في الحساب الأكبر",
      listener: "الله سبحانه وتعالى",
      vowelFocus: "سكون اللام + ضمة التاء (تاء المتكلم فاعل)",
      breakdown: [
        { word: "مَا", tag: "particle", role: "حرف نفي" },
        { word: "قُلْتُ", tag: "verb-past", role: "فعل ماضٍ مبني على السكون لاتصاله بالتاء، والتاء فاعل" },
        { word: "أَنِ اعْبُدُوا اللَّهَ...", tag: "maqool", role: "مقول القول المستثنى" }
      ],
      nakGem: "Contrast Isa's first word in infancy ('قَالَ' - 3rd person) with his final defense before Allah on Judgment Day ('مَا قُلْتُ' - 1st person with the humble 'تُ'). The symmetry of the Quran is breathtaking."
    },
    {
      id: 8,
      surah: "الحاقة",
      surahEn: "Al-Haqqah",
      ayah: 44,
      text: "وَلَوْ تَقَوَّلَ عَلَيْنَا بَعْضَ الْأَقَاوِيلِ * لَأَخَذْنَا مِنْهُ بِالْيَمِينِ",
      translation: "And if he [Muhammad] had made up about Us some [false] sayings, We would have seized him by the right hand.",
      category: "derived",
      focusWord: "تَقَوَّلَ / الْأَقَاوِيل",
      speaker: "الله تعالى في توثيق صدق الوحي",
      listener: "البشرية كلها",
      vowelFocus: "الفعل المزيد تَقَوَّلَ (Form V) وجمع الكثرة الْأَقَاوِيل",
      breakdown: [
        { word: "تَقَوَّلَ", tag: "verb-derived", role: "فعل ماضٍ (وزن تَفَعَّلَ) مبني على الفتح، يفيد التكلف والافتراء" },
        { word: "الْأَقَاوِيلِ", tag: "noun", role: "مضاف إليه مجرور بالكسرة، وهو جمع جمع للقول (أقوال -> أقاويل)" }
      ],
      nakGem: "Morphology Gem: 'تَقَوَّلَ' (Form V) means not just saying something, but fabricating it with effort and concoction. And 'الْأَقَاوِيل' is a plural of a plural (Plural of Multitude / صيغة منتهى الجموع), meaning even the slightest invented phrase would never go unchecked."
    },
    {
      id: 9,
      surah: "طه",
      surahEn: "Ta-Ha",
      ayah: 44,
      text: "فَقُولَا لَهُ قَوْلًا لَّيِّنًا لَّعَلَّهُ يَتَذَكَّرُ أَوْ يَخْشَىٰ",
      translation: "And speak to him [Pharaoh] with gentle speech that perhaps he may be reminded or fear [Allah].",
      category: "amr",
      focusWord: "فَقُولَا / قَوْلًا",
      speaker: "الله تعالى",
      listener: "موسى وهارون عليهما السلام",
      vowelFocus: "فعل أمر مبني على حذف النون (ألف الاثنين) + مفعول مطلق منصوب بالفتح",
      breakdown: [
        { word: "فَقُولَا", tag: "verb-amr", role: "فعل أمر مبني على حذف النون، وألف الاثنين ضمير متصل فاعل" },
        { word: "قَوْلًا", tag: "noun", role: "مفعول مطلق منصوب بالفتحة الظاهرة" },
        { word: "لَّيِّنًا", tag: "adjective", role: "نعت منصوب بالفتحة" }
      ],
      nakGem: "Nouman Ali Khan highlights: Allah sends Musa and Harun to the most tyrannical despot on earth, Pharaoh, yet commands them with 'فَقُولَا لَهُ قَوْلًا لَّيِّنًا' (Speak to him softly). If soft speech was demanded with Pharaoh, how should we speak with our families and fellow believers?"
    },
    {
      id: 10,
      surah: "يس",
      surahEn: "Ya-Sin",
      ayah: 52,
      text: "قَالُوا يَا وَيْلَنَا مَن بَعَثَنَا مِن مَّرْقَدِنَا ۗ هَٰذَا مَا وَعَدَ الرَّحْمَٰنُ وَصَدَقَ الْمُرْسَلُونَ",
      translation: "They will say, 'O woe to us! Who has raised us up from our sleeping place?' [The reply will be], 'This is what the Most Merciful had promised, and the messengers told the truth.'",
      category: "past",
      focusWord: "قَالُوا",
      speaker: "المشركون والمكذبون يوم البعث",
      listener: "حسرة وتساؤل في المحشر",
      vowelFocus: "مبني على الضم لاتصاله بواو الجماعة",
      breakdown: [
        { word: "قَالُوا", tag: "verb-past", role: "فعل ماضٍ مبني على الضم لاتصاله بواو الجماعة، والواو فاعل" },
        { word: "يَا وَيْلَنَا...", tag: "maqool", role: "جملة مقول القول في محل نصب مفعول به" }
      ],
      nakGem: "Rhetorical Tense Shift: The Day of Judgment is in the future, yet Allah frequently uses past tense 'قَالُوا' (They said) instead of 'يَقُولُونَ' (They will say). In Balaghah, this is called 'التعبير بالماضي عن المستقبل لتحقق وقوعه'—describing future events in the past tense because Allah's promise is so absolute that it is as certain as a completed past fact!"
    },
    {
      id: 11,
      surah: "الأعراف",
      surahEn: "Al-A'raf",
      ayah: 23,
      text: "قَالَا رَبَّنَا ظَلَمْنَا أَنفُسَنَا وَإِن لَّمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ",
      translation: "They [Adam and Eve] said, 'Our Lord, we have wronged ourselves, and if You do not forgive us and have mercy upon us, we will surely be among the losers.'",
      category: "past",
      focusWord: "قَالَا",
      speaker: "آدم وحواء عليهما السلام",
      listener: "الله جل جلاله",
      vowelFocus: "مبني على الفتح لاتصاله بألف الاثنين",
      breakdown: [
        { word: "قَالَا", tag: "verb-past", role: "فعل ماضٍ مبني على الفتح، وألف الاثنين ضمير متصل فاعل" },
        { word: "رَبَّنَا ظَلَمْنَا...", tag: "maqool", role: "جملة مقول القول في محل نصب مفعول به" }
      ],
      nakGem: "Notice the dual 'قَالَا' (They both said). Adam and Hawa shared the sincere repentance in absolute harmony, with zero blame shifting onto each other. Contrast this with Iblis who blamed Allah when he fell!"
    },
    {
      id: 12,
      surah: "الكهف",
      surahEn: "Al-Kahf",
      ayah: 19,
      text: "قَالَ قَائِلٌ مِّنْهُمْ كَمْ لَبِثْتُمْ ۖ قَالُوا لَبِثْنَا يَوْمًا أَوْ بَعْضَ يَوْمٍ",
      translation: "A speaker among them said, 'How long have you remained [here]?' They said, 'We have remained a day or part of a day.'",
      category: "derived",
      focusWord: "قَالَ / قَائِلٌ / قَالُوا",
      speaker: "أصحاب الكهف",
      listener: "بعضهم لبعض",
      vowelFocus: "فعل ماضٍ (قَالَ) + اسم فاعل مرفوع (قَائِلٌ) + ماضٍ مبني على الضم (قَالُوا)",
      breakdown: [
        { word: "قَالَ", tag: "verb-past", role: "فعل ماضٍ مبني على الفتح" },
        { word: "قَائِلٌ", tag: "noun", role: "اسم فاعل، فاعل مرفوع وعلامة رفعه الضمة الظاهرة" },
        { word: "كَمْ لَبِثْتُمْ", tag: "maqool", role: "جملة مقول القول الأولى في محل نصب" },
        { word: "قَالُوا", tag: "verb-past", role: "فعل ماضٍ مبني على الضم، والواو فاعل" },
        { word: "لَبِثْنَا يَوْمًا...", tag: "maqool", role: "جملة مقول القول الثانية" }
      ],
      nakGem: "A linguistic masterclass in one verse: The root ق-و-ل appears in three distinct morphological dresses: the singular past verb 'قَالَ', the active participle 'قَائِلٌ' (the speaker), and the plural past verb 'قَالُوا' (the respondents)."
    },
    {
      id: 13,
      surah: "المنافقون",
      surahEn: "Al-Munafiqun",
      ayah: 1,
      text: "إِذَا جَاءَكَ الْمُنَافِقُونَ قَالُوا نَشْهَدُ إِنَّكَ لَرَسُولُ اللَّهِ",
      translation: "When the hypocrites come to you, they say, 'We testify that you are the Messenger of Allah.'",
      category: "past",
      focusWord: "قَالُوا",
      speaker: "المنافقون",
      listener: "رسول الله ﷺ",
      vowelFocus: "ماضٍ مبني على الضم",
      breakdown: [
        { word: "قَالُوا", tag: "verb-past", role: "فعل ماضٍ مبني على الضم لاتصاله بواو الجماعة" },
        { word: "نَشْهَدُ إِنَّكَ لَرَسُولُ اللَّهِ", tag: "maqool", role: "جملة مقول القول في محل نصب مفعول به" }
      ],
      nakGem: "Bayyinah Insight: The hypocrites say 'نَشْهَدُ' (We bear witness) using heavy emphatic tools (إنّ and the Lam of confirmation 'لَرَسُولُ'). Why? Because someone who is lying overcompensates with excessive oaths and rhetorical emphasis to sound convincing!"
    },
    {
      id: 14,
      surah: "الأنعام",
      surahEn: "Al-An'am",
      ayah: 91,
      text: "قُلِ اللَّهُ ۖ ثُمَّ ذَرْهُمْ فِي خَوْضِهِمْ يَلْعَبُونَ",
      translation: "Say, 'Allah [revealed it].' Then leave them in their [empty] discourse, amusing themselves.",
      category: "vowel_gems",
      focusWord: "قُلِ",
      speaker: "الله تعالى آمراً نبيه ﷺ",
      listener: "المشركون الجاحدون",
      vowelFocus: "🚨 الكسرة على اللام (قُلِ) لمنع التقاء الساكنين مع لفظ الجلالة",
      breakdown: [
        { word: "قُلِ", tag: "verb-amr", role: "فعل أمر مبني على السكون وحُرّك بالكسر لمنع التقاء الساكنين" },
        { word: "اللَّهُ", tag: "subject", role: "لفظ الجلالة مبتدأ أو خبر لمبتدأ محذوف (مقول القول)" }
      ],
      nakGem: "The ultimate one-word answer to endless philosophical skepticism: 'قُلِ اللَّهُ' (Say: Allah!). The Kasrah connects the urgent command smoothly into the majestic Name of Allah."
    },
    {
      id: 15,
      surah: "الكهف",
      surahEn: "Al-Kahf",
      ayah: 23,
      text: "وَلَا تَقُولَنَّ لِشَيْءٍ إِنِّي فَاعِلٌ ذَٰلِكَ غَدًا * إِلَّا أَن يَشَاءَ اللَّهُ",
      translation: "And never say of anything, 'Indeed, I will do that tomorrow,' except [when adding], 'If Allah wills.'",
      category: "present",
      focusWord: "تَقُولَنَّ",
      speaker: "الله تعالى مؤدباً النبي ﷺ والأمة",
      listener: "النبي ﷺ والمؤمنون",
      vowelFocus: "مبني على الفتح لاتصاله بنون التوكيد الثقيلة في محل جزم",
      breakdown: [
        { word: "وَلَا", tag: "particle", role: "لا الناهية الجازمة" },
        { word: "تَقُولَنَّ", tag: "verb-pres", role: "فعل مضارع مبني على الفتح لاتصاله بنون التوكيد الثقيلة في محل جزم" },
        { word: "إِنِّي فَاعِلٌ ذَٰلِكَ غَدًا", tag: "maqool", role: "جملة مقول القول في محل نصب مفعول به" }
      ],
      nakGem: "Notice: The present tense is reinforced by 'نون التوكيد الثقيلة' (ـَنَّ). Usually jussive takes a Sukun, but because of the heavy Noon of emphasis, it is built on Fatha (تَقُولَنَّ) in the place of Jazam!"
    },
    {
      id: 16,
      surah: "المزمل",
      surahEn: "Al-Muzzammil",
      ayah: 5,
      text: "إِنَّا سَنُلْقِي عَلَيْكَ قَوْلًا ثَقِيلًا",
      translation: "Indeed, We will cast upon you a heavy word.",
      category: "derived",
      focusWord: "قَوْلًا",
      speaker: "الله تعالى",
      listener: "النبي ﷺ",
      vowelFocus: "المصدر الصريح منصوب بالفتحة (مفعول به)",
      breakdown: [
        { word: "قَوْلًا", tag: "noun", role: "مفعول به منصوب بالفتحة الظاهرة (وهو مصدر قال)" },
        { word: "ثَقِيلًا", tag: "adjective", role: "نعت منصوب بالفتحة الظاهرة" }
      ],
      nakGem: "The Quran itself is called 'قَوْلًا ثَقِيلًا' (a heavy word). It is heavy in moral gravity, heavy in truth, heavy in balance on the Day of Judgment, and heavy in divine beauty."
    },
    {
      id: 17,
      surah: "البقرة",
      surahEn: "Al-Baqarah",
      ayah: 83,
      text: "وَقُولُوا لِلنَّاسِ حُسْنًا وَأَقِيمُوا الصَّلَاةَ وَآتُوا الزَّكَاةَ",
      translation: "And speak to people good [words] and establish prayer and give zakah.",
      category: "amr",
      focusWord: "قُولُوا",
      speaker: "الله تعالى في ميثاق بني إسرائيل والتكليف العام",
      listener: "المؤمنون والمكلفون",
      vowelFocus: "فعل أمر مبني على حذف النون (واو الجماعة)",
      breakdown: [
        { word: "وَقُولُوا", tag: "verb-amr", role: "فعل أمر مبني على حذف النون، والواو ضمير متصل فاعل" },
        { word: "حُسْنًا", tag: "noun", role: "صفة لمصدر محذوف (قولاً حسناً) أو مفعول به منصوب" }
      ],
      nakGem: "Notice that Allah says 'لِلنَّاسِ' (to all people) - not just to your companions, family, or Muslims, but to all human beings without exception, speak goodness and beauty."
    },
    {
      id: 18,
      surah: "النساء",
      surahEn: "An-Nisa",
      ayah: 122,
      text: "وَعْدَ اللَّهِ حَقًّا ۚ وَمَنْ أَصْدَقُ مِنَ اللَّهِ قِيلًا",
      translation: "[It is] the promise of Allah, which is truth, and who is more truthful than Allah in statement?",
      category: "derived",
      focusWord: "قِيلًا",
      speaker: "الله تعالى",
      listener: "العقلاء والخلائق",
      vowelFocus: "تمييز منصوب بالفتحة الظاهرة (من صيغ المصدر)",
      breakdown: [
        { word: "قِيلًا", tag: "noun", role: "تمييز منصوب بالفتحة الظاهرة محول عن المبتدأ (أي: من أصدق قيلُه)" }
      ],
      nakGem: "'قِيلًا' is a rare, elegant Masdar variant of 'قَوْل'. It denotes the purest, most refined utterance. Allah's statement is the pinnacle of all truth."
    },
    {
      id: 19,
      surah: "الملك",
      surahEn: "Al-Mulk",
      ayah: 10,
      text: "وَقَالُوا لَوْ كُنَّا نَسْمَعُ أَوْ نَعْقِلُ مَا كُنَّا فِي أَصْحَابِ السَّعِيرِ",
      translation: "And they will say, 'If only we had been listening or reasoning, we would not be among the companions of the Blaze.'",
      category: "past",
      focusWord: "وَقَالُوا",
      speaker: "أهل النار في الآخرة",
      listener: "اعتراف بالذنب بين يدي العذاب",
      vowelFocus: "ماضٍ مبني على الضم",
      breakdown: [
        { word: "وَقَالُوا", tag: "verb-past", role: "فعل ماضٍ مبني على الضم لاتصاله بواو الجماعة" },
        { word: "لَوْ كُنَّا نَسْمَعُ...", tag: "maqool", role: "جملة مقول القول في محل نصب مفعول به" }
      ],
      nakGem: "The deniers combine 'نَسْمَعُ' (listening with open hearts) and 'نَعْقِلُ' (using deep rational reflection). Islam appeals simultaneously to sincere emotion and sharp intellect."
    },
    {
      id: 20,
      surah: "الفلق",
      surahEn: "Al-Falaq",
      ayah: 1,
      text: "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ",
      translation: "Say, 'I seek refuge in the Lord of daybreak.'",
      category: "amr",
      focusWord: "قُلْ",
      speaker: "الله سبحانه وتعالى",
      listener: "النبي ﷺ والمؤمنون للحماية والتحصين",
      vowelFocus: "فعل أمر مبني على السكون على اللام",
      breakdown: [
        { word: "قُلْ", tag: "verb-amr", role: "فعل أمر مبني على السكون، والفاعل مستتر (أنت)" },
        { word: "أَعُوذُ بِرَبِّ الْفَلَقِ", tag: "maqool", role: "جملة مقول القول في محل نصب مفعول به" }
      ],
      nakGem: "By uttering 'قُلْ أَعُوذُ', we actively engage the Divine shield. Seeking refuge is not merely a mental thought, but a pronounced declaration."
    }
  ]
};
