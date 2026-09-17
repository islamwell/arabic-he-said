/**
 * Nahw (Syntax & I'rab) Data Module for the Word قَالَ
 * Deep focus on the rationale behind the last vowel (الحركات الإعرابية والبنائية)
 */

window.NAHW_DATA = {
  vowelGuides: {
    fatha: {
      name: "الْفَتْحَة (Fatḥah ـَ)",
      symbol: "ـَ",
      colorClass: "vowel-fatha",
      rules: [
        {
          title: "1. البناء على الفتح في الفعل الماضي (Past Active Built on Fatḥah)",
          detail: "فعل ماضٍ مبني على الفتح الظاهر إذا لم يتصل به شيء أو اتصلت به تاء التأنيث الساكنة أو ألف الاثنين.\n(Easy English: Past active verbs are permanently built on a fixed short 'a' vowel unless attached to plural Waw or a subject pronoun suffix.)",
          examples: [
            { text: "قَالَ اللَّهُ هَٰذَا يَوْمُ يَنفَعُ الصَّادِقِينَ", target: "قَالَ", reason: "فعل ماضٍ مبني على الفتح (Past active verb built on Fatḥah [fixed 'a'])" },
            { text: "قَالَتْ رَبِّ إِنِّي ظَلَمْتُ نَفْسِي", target: "قَالَتْ", reason: "مبني على الفتح مع تاء التأنيث (Built on Fatḥah with feminine marker 'at')" },
            { text: "قَالَا رَبَّنَا ظَلَمْنَا أَنفُسَنَا", target: "قَالَا", reason: "مبني على الفتح لاتصاله بألف الاثنين (Built on Fatḥah with dual 'ā' suffix)" }
          ]
        },
        {
          title: "2. النصب بالفتحة في المضارع المنصوب (Subjunctive with Fatḥah)",
          detail: "فعل مضارع منصوب بالفتحة الظاهرة إذا سُبِقَ بإحدى أدوات النصب (أَنْ، لَنْ، كَيْ، حَتَّىٰ، لَام التَّعْلِيل).\n(Easy English: Present tense verbs take a Fatḥah ending when preceded by subjunctive particles like 'lan' [never] or 'ḥattā' [until].)",
          examples: [
            { text: "حَتَّىٰ يَقُولَ الرَّسُولُ وَالَّذِينَ آمَنُوا مَعَهُ", target: "يَقُولَ", reason: "مضارع منصوب بالفتحة بعد «حتى» (Present subjunctive verb with Fatḥah after 'ḥattā')" },
            { text: "لَنْ نَّقُولَ لَكَ إِلَّا الْحَقَّ", target: "نَقُولَ", reason: "مضارع منصوب بالفتحة بعد «لَنْ» (Present subjunctive verb with Fatḥah after 'lan')" }
          ]
        },
        {
          title: "3. النصب في المفعول به ومقول القول (Direct Quote Object)",
          detail: "جملة مقول القول أو المصدر المنصوب الواقع مفعولاً به.\n(Easy English: The quoted speech or cognate noun functioning as the direct object of 'he said' is in the accusative / Mansūb state.)",
          examples: [
            { text: "قَالَ رَجُلٌ قَوْلًا حَسَنًا", target: "قَوْلًا", reason: "مفعول مطلق منصوب بالفتحة (Cognate accusative noun with Fatḥah)" },
            { text: "قَالَ: «الْعِلْمُ نُورٌ»", target: "الجملة", reason: "جملة مقول القول في محل نصب مفعول به (Direct quote clause acting as direct object)" }
          ]
        }
      ]
    },

    dammah: {
      name: "الضَّمَّة (Ḍammah ـُ)",
      symbol: "ـُ",
      colorClass: "vowel-dammah",
      rules: [
        {
          title: "1. الرفع بالضمة في الفعل المضارع المجرد (Indicative Present with Ḍammah)",
          detail: "فعل مضارع مرفوع بالضمة الظاهرة على آخره لتجرده من الناصب والجازم.\n(Easy English: Default present tense verbs take a Ḍammah ['u'] ending when not affected by any preceding particle.)",
          examples: [
            { text: "يَقُولُ الْإِنسَانُ يَوْمَئِذٍ أَيْنَ الْمَفَرُّ", target: "يَقُولُ", reason: "مضارع مرفوع بالضمة لتجرده (Present indicative verb with Ḍammah - 'he says')" },
            { text: "أَقُولُ قَوْلِي هَٰذَا وَأَسْتَغْفِرُ اللَّهَ", target: "أَقُولُ", reason: "مضارع مرفوع بالضمة (Present indicative verb with Ḍammah - 'I say')" }
          ]
        },
        {
          title: "2. البناء على الضم في الماضي مع واو الجماعة (Past Active Built on Ḍammah)",
          detail: "فعل ماضٍ مبني على الضم لاتصاله بواو الجماعة.\n(Easy English: Past verbs become built on a Ḍammah ['u'] ending when attached to plural 'Waw' ['they said'].)",
          examples: [
            { text: "وَقَالُوا الْحَمْدُ لِلَّهِ الَّذِي هَدَانَا لِهَٰذَا", target: "قَالُوا", reason: "فعل ماضٍ مبني على الضم لاتصاله بواو الجماعة (Past verb built on Ḍammah before plural Waw)" },
            { text: "قَالُوا سَمِعْنَا وَأَطَعْنَا", target: "قَالُوا", reason: "ماضٍ مبني على الضم (Past verb built on Ḍammah - 'they said')" }
          ]
        },
        {
          title: "3. رفع الفاعل ونائب الفاعل بالضمة (Subject / Deputy Subject with Ḍammah)",
          detail: "الاسم المرفوع الذي قام بالفعل أو وقع عليه القول بعد المبني للمجهول.\n(Easy English: The doer [Fā'il] or passive receiver [Nā'ib Fā'il] is in the nominative state with Ḍammah ['u'].)",
          examples: [
            { text: "قَالَ اللَّهُ إِنِّي مُنَزِّلُهَا عَلَيْكُمْ", target: "اللَّهُ", reason: "لفظ الجلالة فاعل مرفوع بالضمة (Divine Name as Subject / Doer with Ḍammah)" },
            { text: "قَالَ رَجُلٌ مُؤْمِنٌ مِنْ آلِ فِرْعَوْنَ", target: "رَجُلٌ", reason: "فاعل مرفوع بالضمة (Subject / Doer with Ḍammah - 'a man said')" },
            { text: "قِيلَ الْحَقُّ", target: "الْحَقُّ", reason: "نائب فاعل مرفوع بالضمة بعد المبني للمجهول (Deputy Subject with Ḍammah after passive verb - 'the truth was spoken')" }
          ]
        },
        {
          title: "4. تاء المتكلم (ضمير الرفع المتحرك ـتُ / 'I' Subject Pronoun)",
          detail: "التاء المتحركة بالضم الدالة على المتكلم.\n(Easy English: The 1st person subject pronoun 'I' [Qultu] takes a Ḍammah while causing the preceding verb base to freeze on Sukūn.)",
          examples: [
            { text: "مَا قُلْتُ لَهُمْ إِلَّا مَا أَمَرْتَنِي بِهِ", target: "قُلْتُ", reason: "التاء ضمير فاعل مبني على الضم (1st-person subject pronoun 'I' built on Ḍammah)" }
          ]
        }
      ]
    },

    kasrah: {
      name: "الْكَسْرَة (Kasrah ـِ)",
      symbol: "ـِ",
      colorClass: "vowel-kasrah",
      rules: [
        {
          title: "1. الكسرة العارضة لمنع التقاء الساكنين (Connecting Kasrah to Avoid Silent Clash)",
          detail: "الأصل في فعل الأمر 'قُلْ' أن يبنى على السكون على اللام. فإذا جاء بعده اسم يبدأ بساكن، كُسِرَتِ اللامُ وصلاً منعاً لالتقاء ساكنين.\n(Easy English: The command 'Qul' normally has Sukūn, but shifts to temporary Kasrah 'Quli' when followed by another silent letter to allow smooth pronunciation.)",
          examples: [
            { text: "قُلِ ادْعُوا اللَّهَ أَوِ ادْعُوا الرَّحْمَٰنَ", target: "قُلِ", reason: "🚨 فعل أمر مبني على السكون وحُرك بالكسر لالتقاء الساكنين (Command built on Sukūn, shifted to Kasrah to connect with silent consonant)" },
            { text: "قُلِ اللَّهُمَّ مَالِكَ الْمُلْكِ", target: "قُلِ", reason: "🚨 حُرّكت اللام بالكسر لالتقاء الساكنين (Connecting Kasrah before the Name of Allah)" },
            { text: "قُلِ انظُرُوا مَاذَا فِي السَّمَاوَاتِ وَالْأَرْضِ", target: "قُلِ", reason: "🚨 كُسرت اللام للتخلص من التقاء الساكنين (Connecting Kasrah to prevent meeting two Sukūns)" }
          ]
        },
        {
          title: "2. تاء المخاطبة المؤنثة (Feminine 'You' Suffix ـْتِ)",
          detail: "تاء الخطاب للمؤنث تبنى على الكسر للتفرقة بينها وبين تاء المذكر (قُلْتَ للمذكر / قُلْتِ للمؤنث).\n(Easy English: The 2nd-person feminine pronoun suffix takes a Kasrah ['Qulti'] to distinguish from masculine 'Qulta'.)",
          examples: [
            { text: "هَلْ قُلْتِ الصِّدْقَ يَا فَاطِمَةُ؟", target: "قُلْتِ", reason: "التاء ضمير فاعل مبني على الكسر للمخاطبة (2nd-person feminine pronoun 'you' built on Kasrah)" }
          ]
        },
        {
          title: "3. الجر بالكسرة في المشتقات والأسماء (Genitive Nouns with Kasrah)",
          detail: "الاسم المجرور بحرف جر أو بالإضافة.\n(Easy English: Nouns and derived verbal nouns preceded by prepositions take a Kasrah ['i'] ending in the genitive state.)",
          examples: [
            { text: "آمَنَّا بِقَوْلِهِ وَصَدَّقْنَاهُ", target: "بِقَوْلِهِ", reason: "اسم مجرور بالباء بالكسرة (Genitive noun taking Kasrah after the preposition 'bi')" },
            { text: "مِنْ قَوْلِ رَسُولٍ كَرِيمٍ", target: "قَوْلِ", reason: "اسم مجرور بمن بالكسرة (Genitive noun taking Kasrah after the preposition 'min')" }
          ]
        }
      ]
    },

    sukun: {
      name: "السُّكُون (Sukūn ـْ)",
      symbol: "ـْ",
      colorClass: "vowel-sukun",
      rules: [
        {
          title: "1. البناء على السكون في الماضي مع ضمائر الرفع (Past Built on Sukūn with Pronouns)",
          detail: "يبنى الفعل الماضي على السكون إذا اتصل به: تاء الفاعل (قُلْتُ، قُلْتَ، قُلْتِ)، أو نون النسوة (قُلْنَ)، أو نا الفاعلين (قُلْنَا). ويترتب على ذلك حذف حرف العلة (الواو/الألف) منعاً لالتقاء الساكنين.\n(Easy English: When past tense takes pronoun suffixes like 'I', 'You', or 'We', the Lam freezes on Sukūn and the middle Alif is dropped to avoid two silent letters.)",
          examples: [
            { text: "قُلْتُ لَهُمَا تَعَالَيَا", target: "قُلْـ", reason: "ماضٍ مبني على السكون لاتصاله بتاء الفاعل (Past verb built on Sukūn before 'I' pronoun)" },
            { text: "وَقُلْنَ حَاشَ لِلَّهِ مَا هَٰذَا بَشَرًا", target: "قُلْنَ", reason: "ماضٍ مبني على السكون لاتصاله بنون النسوة (Past verb built on Sukūn before feminine 'they')" },
            { text: "قُلْنَا يَا نَارُ كُونِي بَرْدًا وَسَلَامًا", target: "قُلْنَا", reason: "ماضٍ مبني على السكون لاتصاله بنا الفاعلين (Past verb built on Sukūn before 'We' pronoun)" }
          ]
        },
        {
          title: "2. الجزم بالسكون في المضارع (Jussive Present with Sukūn)",
          detail: "يجزم الفعل المضارع بالسكون إذا سبقه جازم (لَمْ، لَا الناهية، لام الأمر). ويسقط حرف العلة الواو من جوف الكلمة منعاً لالتقاء الساكنين: يَقُولْ -> يَقُلْ.\n(Easy English: Jussive particles like 'lam' [did not] make the present verb end with Sukūn, causing the middle long Waw to drop: Yaqūl -> Yaqul.)",
          examples: [
            { text: "وَلَمْ يَقُلْ إِلَّا الْحَقَّ", target: "يَقُلْ", reason: "مضارع مجزوم بالسكون بعد «لَمْ» وحذفت الواو (Present jussive with Sukūn after 'lam'; middle Waw dropped)" },
            { text: "وَلَا تَقُل لَّهُمَا أُفٍّ وَلَا تَنْهَرْهُمَا", target: "تَقُلْ", reason: "مضارع مجزوم بلا الناهية بالسكون (Present jussive with Sukūn after prohibitive 'lā')" }
          ]
        },
        {
          title: "3. البناء على السكون في فعل الأمر للمفرد (Command Built on Sukūn)",
          detail: "يبنى فعل الأمر على السكون إذا كان للمفرد المذكر المخاطب، وتحذف واوه منعاً لالتقاء الساكنين.\n(Easy English: Singular masculine commands permanently end with a Sukūn: 'Qul' [Say!].)",
          examples: [
            { text: "قُلْ هُوَ اللَّهُ أَحَدٌ", target: "قُلْ", reason: "فعل أمر مبني على السكون (Command verb built on Sukūn - 'Say!')" },
            { text: "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ", target: "قُلْ", reason: "فعل أمر مبني على السكون (Command verb built on Sukūn - 'Say!')" }
          ]
        }
      ]
    }
  },

  // Interactive Final Vowel Gym Drill Challenges
  drillQuestions: [
    {
      id: "q1",
      sentence: "قَالَ رَبِّ إِنِّي لَا أَمْلِكُ إِلَّا نَفْسِي وَأَخِي",
      wordFocus: "قَالَ",
      question: "لماذا ينتهي الفعل «قَالَ» بالفتحة (ـَ) على اللام؟",
      questionEn: "Why does the verb «قَالَ» end with a Fatḥah on the Lam?",
      options: [
        { label: "لأنه فعل ماضٍ مبني على الفتح الظاهر (Past active verb built on Fatḥah)", correct: true, feedback: "Well done! Past active verbs in the basic form permanently carry a fixed Fatḥah ('a') ending." },
        { label: "لأنه مفعول به منصوب بالفتحة (Direct object in accusative)", correct: false, feedback: "Remember: «قَالَ» is an action verb ('he said'), not an object receiving an action." },
        { label: "لأنه فعل مضارع منصوب (Subjunctive present verb)", correct: false, feedback: "Notice the tense: «قَالَ» happened in the past, not present tense." },
        { label: "لتفادي التقاء الساكنين (To prevent silent letter clash)", correct: false, feedback: "The Fatḥah here is the standard, original past tense ending." }
      ],
      grammarRuleId: "fatha",
      fullIrab: "قَالَ: فعل ماضٍ مبني على الفتح الظاهر على آخره لا محل له من الإعراب.\n(Easy English: 'Qāla' is a past active verb built on clear Fatḥah ['a'], with no independent grammatical position.)"
    },
    {
      id: "q2",
      sentence: "حَتَّىٰ يَقُولَ الرَّسُولُ وَالَّذِينَ آمَنُوا مَعَهُ",
      wordFocus: "يَقُولَ",
      question: "لماذا جاءت اللام في «يَقُولَ» مفتوحة (ـَ) بدلاً من الضمة؟",
      questionEn: "Why is the Lam in «يَقُولَ» marked with a Fatḥah instead of a Ḍammah?",
      options: [
        { label: "لأنه مضارع منصوب بأن المضمرة بعد «حَتَّىٰ» (Subjunctive present with Fatḥah after 'ḥattā')", correct: true, feedback: "Great eye! Particles like 'ḥattā' (until) and 'lan' change the present ending from -u to -a." },
        { label: "لأنه فعل ماضٍ مبني على الفتح (Past verb built on Fatḥah)", correct: false, feedback: "«يَقُولَ» begins with the present prefix يـ, so it is present tense." },
        { label: "لأنه فاعل مرفوع بالضمة المقدرة (Subject in nominative)", correct: false, feedback: "«يَقُولَ» is the verb itself; the subject who speaks is «الرَّسُولُ»." },
        { label: "لأنه جواب الشرط (Conditional response)", correct: false, feedback: "There is no conditional ('if... then') here, only the time particle «حَتَّىٰ»." }
      ],
      grammarRuleId: "fatha",
      fullIrab: "يَقُولَ: فعل مضارع منصوب بأن المضمرة بعد حتى وعلامة نصبه الفتحة الظاهرة على آخره.\n(Easy English: 'Yaqūla' is a present subjunctive verb marked with Fatḥah ['a'] after 'ḥattā'.)"
    },
    {
      id: "q3",
      sentence: "قُلِ ادْعُوا اللَّهَ أَوِ ادْعُوا الرَّحْمَٰنَ",
      wordFocus: "قُلِ",
      question: "لماذا كُسِرَت اللام في «قُلِ» بالكسرة (ـِ) بدلاً من السكون الأصلي؟",
      questionEn: "Why is the Lam in «قُلِ» marked with a Kasrah instead of its original Sukūn?",
      options: [
        { label: "كسرة عارضة لمنع التقاء الساكنين (Connecting Kasrah to avoid silent consonant clash)", correct: true, feedback: "Exactly! The base word is «قُلْ» with sukūn, but when connecting to the next word starting with a silent consonant, Arabic uses a light kasrah to bridge them." },
        { label: "لأنه فعل أمر مبني على الكسر (Command built on Kasrah)", correct: false, feedback: "Arabic command verbs are never naturally built on kasrah." },
        { label: "لأنه موجه للمؤنث المخاطب (Feminine 'you' command)", correct: false, feedback: "The command to one woman has a ya: «قُولِي» (Qūlī)." },
        { label: "لأنه اسم مجرور بحرف جر مقدر (Genitive noun)", correct: false, feedback: "«قُلْ» is an action command ('Say!'), not a noun." }
      ],
      grammarRuleId: "kasrah",
      fullIrab: "قُلِ: فعل أمر مبني على السكون، وحُرك بالكسر منعاً لالتقاء الساكنين، والفاعل ضمير مستتر تقديره أنت.\n(Easy English: 'Quli' is an imperative command verb built on Sukūn, shifted to temporary Kasrah ['i'] to avoid silent letter clash; the subject pronoun 'You' is implied.)"
    },
    {
      id: "q4",
      sentence: "مَا قُلْتُ لَهُمْ إِلَّا مَا أَمَرْتَنِي بِهِ",
      wordFocus: "قُلْتُ",
      question: "ما إعراب التاء المضمومة (ـتُ) وحركة اللام الساكنة في «قُلْتُ»؟",
      questionEn: "What is the function of the Ḍammah on the Ta (ـتُ) and the Sukūn on the Lam in «قُلْتُ»?",
      options: [
        { label: "الفعل مبني على السكون لاتصاله بالتاء، والتاء ضمير فاعل مبني على الضم (Past built on Sukūn with 'I' pronoun)", correct: true, feedback: "Spot on! The ending ـتُ represents 'I'. Attaching it gives the Lam a sukūn, which in turn causes the middle Alif to drop." },
        { label: "التاء علامة تأنيث ساكنة (Feminine marker)", correct: false, feedback: "The feminine marker is silent with a sukūn: «قَالَتْ» (she said)." },
        { label: "الفعل مرفوع بالضمة الظاهرة على التاء (Verb in nominative)", correct: false, feedback: "Past verbs are fixed (mabnī), not nominative (marfoo')." },
        { label: "التاء للمخاطب المذكر (Masculine 'you' pronoun)", correct: false, feedback: "The masculine 'you' ending has a fatḥah: «قُلْتَ» (you said)." }
      ],
      grammarRuleId: "dammah",
      fullIrab: "قُلْتُ: فعل ماضٍ مبني على السكون لاتصاله بتاء الفاعل، وحذفت الألف لالتقاء الساكنين، والتاء ضمير متصل مبني على الضم في محل رفع فاعل.\n(Easy English: 'Qultu' is a past verb built on Sukūn with 'tu', where 'tu' is the 1st person subject pronoun 'I' built on Ḍammah ['u'].)"
    },
    {
      id: "q5",
      sentence: "وَلَا تَقُل لَّهُمَا أُفٍّ وَلَا تَنْهَرْهُمَا",
      wordFocus: "تَقُلْ",
      question: "لماذا سكنت اللام وسقطت الواو من «تَقُلْ»؟",
      questionEn: "Why is the Lam marked with a Sukūn and the Waw omitted in «تَقُلْ»?",
      options: [
        { label: "مضارع مجزوم بـ «لا الناهية» بالسكون، وسقطت الواو لالتقاء الساكنين (Jussive with Sukūn and dropped Waw)", correct: true, feedback: "Brilliant! Prohibitive «لَا» ('do not') makes the present tense take a sukūn on the Lam. Because two unvowelled letters meet, the middle long Waw is dropped." },
        { label: "لأنه فعل أمر مبني على حذف حرف العلة (Command verb)", correct: false, feedback: "This is a negative command using the present tense: «لَا تَقُلْ» (do not say)." },
        { label: "لأنه معطوف على اسم مجرور (Conjoined genitive)", correct: false, feedback: "Verbs never take genitive case (jarr)." },
        { label: "لأنه مبني على السكون لاتصاله بنون النسوة (Attached to feminine Nūn)", correct: false, feedback: "There is no feminine noon (ـْنَ) on this verb." }
      ],
      grammarRuleId: "sukun",
      fullIrab: "تَقُلْ: فعل مضارع مجزوم بلا الناهية وعلامة جزمه السكون الظاهر على آخره، وحذفت الواو لالتقاء الساكنين.\n(Easy English: 'Taqul' is a present jussive verb marked with Sukūn after prohibitive 'lā', with the middle Waw dropped to avoid two silent letters.)"
    },
    {
      id: "q6",
      sentence: "يَقُولُونَ بِأَفْوَاهِهِم مَّا لَيْسَ فِي قُلُوبِهِمْ",
      wordFocus: "يَقُولُونَ",
      question: "في «يَقُولُونَ» (هم يقولون)، ما الذي يدل على أن الفعل في حالة الرفع الأصلية؟",
      questionEn: "In «يَقُولُونَ» (they say), what tells you this verb is in its default present state (Marfoo')?",
      options: [
        { label: "ثبوت النون في آخره لأنه من الأفعال الخمسة (The final Nūn is kept)", correct: true, feedback: "Perfect! In forms like 'they say' (يَقُولُونَ) and 'you all say' (تَقُولُونَ), keeping the final Noon (ـُونَ) shows the normal present state. When preceded by particles like 'lan' or 'lam', this Noon disappears." },
        { label: "الضمة المقدرة على الواو (Hidden ḍammah on the Waw)", correct: false, feedback: "The Waw here is the pronoun representing 'they', not the ending marker." },
        { label: "الفتحة التي على النون (Fatḥah on the Nūn)", correct: false, feedback: "The fatḥah on the letter Noon is just phonetic; what matters is the presence of the letter Noon itself." },
        { label: "لأنه مبني على الضم (Built on ḍammah)", correct: false, feedback: "Present tense with plural Waw is inflected (mu'rab), not built on ḍammah." }
      ],
      grammarRuleId: "dammah",
      fullIrab: "يَقُولُونَ: فعل مضارع مرفوع وعلامة رفعه ثبوت النون لأنه من الأفعال الخمسة، والواو ضمير متصل مبني على السكون في محل رفع فاعل.\n(Easy English: 'Yaqūlūna' is a present indicative verb marked by retained Nūn [Five Verbs], and the Waw is the subject pronoun 'they'.)"
    },
    {
      id: "q7",
      sentence: "وَقِيلَ يَا أَرْضُ ابْلَعِي مَاءَكِ",
      wordFocus: "قِيلَ",
      question: "لماذا بُني الفعل «قِيلَ» للمجهول بالياء والكسرة؟",
      questionEn: "Why is the passive form «قِيلَ» formed with a Ya and Kasrah?",
      options: [
        { label: "لأنه ماضٍ مبني للمجهول؛ أصله «قُوِلَ» ونُقلت كسرة الواو للقاف (Past passive verb 'It was said')", correct: true, feedback: "Exact! In passive past, the middle vowel becomes 'ee' (Qīla = 'it was said'), leaving the speaker unnamed." },
        { label: "لأنه فعل أمر للمؤنث (Feminine command)", correct: false, feedback: "The command to one female is «قُولِي» (Say!). «قِيلَ» means 'it was said'." },
        { label: "لأنه مضارع مجزوم (Jussive present)", correct: false, feedback: "«قِيلَ» is past passive, not present tense." },
        { label: "لأنه جمع تكسير (Broken plural)", correct: false, feedback: "«قِيلَ» is a verb ('it was said'), not a plural noun." }
      ],
      grammarRuleId: "fatha",
      fullIrab: "قِيلَ: فعل ماضٍ مبني للمجهول (لما لم يسمَّ فاعله) مبني على الفتح الظاهر.\n(Easy English: 'Qīla' is a past passive verb ['it was said'] built on a clear, fixed Fatḥah ['a'].)"
    }
  ]
};
