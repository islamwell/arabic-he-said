/**
 * Sarf (Morphology) Data Module for the Root ق-و-ل (Q-W-L)
 * Comprehensive morphological paradigm for Classical and Quranic Arabic
 */

window.SARF_DATA = {
  root: "ق-و-ل",
  rootMeaning: "to say, speak, utter, state, articulate",
  verbClass: "الأجوف الواوي (Hollow Wawi Verb) - Form I (فَعَلَ - يَفْعُلُ)",
  baseTransformed: "قَالَ - يَقُولُ",

  beginnerFourWords: [
    {
      id: "qala",
      word: "قَالَ",
      phonetic: "qāla",
      role: "Past (he)",
      meaning: "He said",
      notice: "The ل has a fatḥah: لَ.",
      why: "This is the usual ending of this past-tense form.",
      grammarDetails: "فعل ماضٍ مبني على الفتح الظاهر (Past active verb built on Fatḥah). Root: ق-و-ل. The middle weak letter و turned into an ا because it had a vowel preceded by a fatḥah (قَوَلَ ➔ قَالَ)."
    },
    {
      id: "qalat",
      word: "قَالَتْ",
      phonetic: "qālat",
      role: "Past (she)",
      meaning: "She said",
      notice: "The added تْ shows that the speaker is female.",
      why: "The letter تْ with sukūn is the female past-tense marker.",
      grammarDetails: "فعل ماضٍ مبني على الفتح، والتاء للتأنيث الساكنة. Notice the ل retains its fatḥah."
    },
    {
      id: "qultu",
      word: "قُلْتُ",
      phonetic: "qultu",
      role: "Past (I)",
      meaning: "I said",
      notice: "The ending تُ tells us “I.” Notice that the ا from قَالَ has disappeared.",
      why: "The ل takes sukūn before تُ, so the middle letter drops.",
      grammarDetails: "فعل ماضٍ مبني على السكون لاتصاله بضمير الرفع (التاء). The base becomes قَالْـتُ. When the ل takes sukūn, the weak ا is dropped, and the ق takes a ḍammah (قُ) to reflect the root letter و."
    },
    {
      id: "qul",
      word: "قُلْ",
      phonetic: "qul",
      role: "Command (you m.)",
      meaning: "Say! — speaking to one male",
      notice: "It ends with sukūn: قُلْ. The middle letter is also gone.",
      why: "This is a command to one male.",
      grammarDetails: "فعل أمر مبني على السكون (Command built on Sukūn). Origin: تَقُولُ ➔ (jussive) تَقُلْ ➔ (command) قُلْ."
    }
  ],

  sideBySideComparison: {
    title: "Notice how one vowel changes who is speaking",
    subtitle: "Compare قُلْتُ / قُلْتَ / قُلْتِ. Only the vowel on the last letter changes!",
    items: [
      {
        word: "قُلْتُ",
        pronounKey: "ana",
        vowel: "-tu (ḍammah)",
        meaning: "I said",
        person: "1st Person (I)",
        explanation: "The ending تُ with ḍammah tells us: “I” spoke."
      },
      {
        word: "قُلْتَ",
        pronounKey: "anta",
        vowel: "-ta (fatḥah)",
        meaning: "You said",
        person: "2nd Person (You male)",
        explanation: "The ending تَ with fatḥah tells us: “you” (one male) spoke."
      },
      {
        word: "قُلْتِ",
        pronounKey: "anti",
        vowel: "-ti (kasrah)",
        meaning: "You said",
        person: "2nd Person (You female)",
        explanation: "The ending تِ with kasrah tells us: “you” (one female) spoke."
      }
    ],
    words: [
      {
        word: "قُلْتُ",
        basePart: "قُلْـ",
        highlightPart: "تُ",
        meaning: "I said",
        explanation: "The ending تُ with ḍammah tells us: “I” spoke."
      },
      {
        word: "قُلْتَ",
        basePart: "قُلْـ",
        highlightPart: "تَ",
        meaning: "You said — to one male",
        explanation: "The ending تَ with fatḥah tells us: “you” (one male) spoke."
      },
      {
        word: "قُلْتِ",
        basePart: "قُلْـ",
        highlightPart: "تِ",
        meaning: "You said — to one female",
        explanation: "The ending تِ with kasrah tells us: “you” (one female) spoke."
      }
    ],
    takeaway: "The verb stem (قُلْـ) is identical. Just look or listen for the final vowel: -tu = I, -ta = you (m.), -ti = you (f.)."
  },
  
  pronouns: [
    { id: "huwa", ar: "هُوَ", en: "He", category: "3rd-masc-sg" },
    { id: "huma_m", ar: "هُمَا", en: "Both of them (male)", category: "3rd-masc-dl" },
    { id: "hum", ar: "هُمْ", en: "They (male group)", category: "3rd-masc-pl" },
    { id: "hiya", ar: "هِيَ", en: "She", category: "3rd-fem-sg" },
    { id: "huma_f", ar: "هُمَا", en: "Both of them (female)", category: "3rd-fem-dl" },
    { id: "hunna", ar: "هُنَّ", en: "They (female group)", category: "3rd-fem-pl" },
    { id: "anta", ar: "أَنْتَ", en: "You (one male)", category: "2nd-masc-sg" },
    { id: "antuma_m", ar: "أَنْتُمَا", en: "You two (male)", category: "2nd-masc-dl" },
    { id: "antum", ar: "أَنْتُمْ", en: "You all (male group)", category: "2nd-masc-pl" },
    { id: "anti", ar: "أَنْتِ", en: "You (one female)", category: "2nd-fem-sg" },
    { id: "antuma_f", ar: "أَنْتُمَا", en: "You two (female)", category: "2nd-fem-dl" },
    { id: "antunna", ar: "أَنْتُنَّ", en: "You all (female group)", category: "2nd-fem-pl" },
    { id: "ana", ar: "أَنَا", en: "I", category: "1st-sg" },
    { id: "nahnu", ar: "نَحْنُ", en: "We", category: "1st-pl" }
  ],

  conjugations: {
    // 1. PAST TENSE ACTIVE (الماضي المعلوم)
    madi_active: {
      title: "الماضي المعلوم (Past Active)",
      description: "Expresses completed actions. Notice how the middle Alif is kept when the ending has a vowel, but disappears when the ل takes sukūn (such as in قُلْتُ).",
      forms: {
        huwa: { word: "قَالَ", phonetic: "Qāla", ending: "ـَ (fatḥah)", meaning: "He said", notice: "The ل has a fatḥah: لَ.", why: "This is the usual ending of this past-tense form.", grammarDetails: "مبني على الفتح (Past active built on Fatḥah - fixed 'a'). Origin: قَوَلَ -> Waw turned into Alif." },
        huma_m: { word: "قَالَا", phonetic: "Qālā", ending: "ـَا", meaning: "Both of them said (males)", notice: "The added ا indicates two people.", why: "Dual marker attached to the past verb.", grammarDetails: "مبني على الفتح (Built on Fatḥah - dual 'ā')." },
        hum: { word: "قَالُوا", phonetic: "Qālū", ending: "ـُوا", meaning: "They said (male group)", notice: "The ل takes a ḍammah: لُوا.", why: "The plural و requires a ḍammah before it.", grammarDetails: "مبني على الضم (Built on Ḍammah before plural Waw)." },
        hiya: { word: "قَالَتْ", phonetic: "Qālat", ending: "ـَتْ", meaning: "She said", notice: "The added تْ shows that the speaker is female.", why: "Female marker added to the past verb.", grammarDetails: "مبني على الفتح (Built on Fatḥah - feminine 'at')." },
        huma_f: { word: "قَالَتَا", phonetic: "Qālatā", ending: "ـَتَا", meaning: "Both of them said (females)", notice: "Has both female ت and dual ا.", why: "Dual feminine past form.", grammarDetails: "مبني على الفتح (Built on Fatḥah - feminine dual 'atā')." },
        hunna: { word: "قُلْنَ", phonetic: "Qulna", ending: "ـْنَ", meaning: "They said (female group)", notice: "The middle letter drops, and it ends in نَ.", why: "The ل takes sukūn before the ending نَ used for a group of females.", grammarDetails: "مبني على السكون (Built on Sukūn before feminine 'na')." },
        anta: { word: "قُلْتَ", phonetic: "Qulta", ending: "ـْتَ", meaning: "You said — to one male", notice: "Ends with تَ with fatḥah.", why: "The ending تَ tells us who spoke.", grammarDetails: "مبني على السكون (Built on Sukūn - with masculine 'you')." },
        antuma_m: { word: "قُلْتُمَا", phonetic: "Qultumā", ending: "ـْتُمَا", meaning: "You two said (males)", notice: "Ends with تُمَا.", why: "Dual 'you' pronoun suffix.", grammarDetails: "مبني على السكون (Built on Sukūn - dual 'you two')." },
        antum: { word: "قُلْتُمْ", phonetic: "Qultum", ending: "ـْتُمْ", meaning: "You all said (male group)", notice: "Ends with تُمْ.", why: "Plural masculine 'you' pronoun suffix.", grammarDetails: "مبني على السكون (Built on Sukūn - plural 'you all')." },
        anti: { word: "قُلْتِ", phonetic: "Qulti", ending: "ـْتِ", meaning: "You said — to one female", notice: "Compare تِ with تَ. One vowel changes who we are speaking to.", why: "The ending تِ with kasrah is for one female.", grammarDetails: "مبني على السكون (Built on Sukūn - feminine 'you')." },
        antuma_f: { word: "قُلْتُمَا", phonetic: "Qultumā", ending: "ـْتُمَا", meaning: "You two said (females)", notice: "Ends with تُمَا.", why: "Dual feminine 'you' pronoun suffix.", grammarDetails: "مبني على السكون (Built on Sukūn - feminine dual)." },
        antunna: { word: "قُلْتُنَّ", phonetic: "Qultunna", ending: "ـْتُنَّ", meaning: "You all said (female group)", notice: "Ends with تُنَّ.", why: "Plural feminine 'you' pronoun suffix.", grammarDetails: "مبني على السكون (Built on Sukūn - feminine plural)." },
        ana: { word: "قُلْتُ", phonetic: "Qultu", ending: "ـْتُ", meaning: "I said", notice: "The ending تُ tells us “I.” Notice that the ا from قَالَ has disappeared.", why: "The ل takes sukūn before تُ, so the middle letter drops.", grammarDetails: "مبني على السكون (Built on Sukūn - with 'I' pronoun)." },
        nahnu: { word: "قُلْنَا", phonetic: "Qulnā", ending: "ـْنَا", meaning: "We said", notice: "Ends with نَا.", why: "The ending نَا tells us “we.” The ل takes sukūn.", grammarDetails: "مبني على السكون (Built on Sukūn - with 'We' pronoun)." }
      }
    },

    // 2. PRESENT TENSE INDICATIVE (المضارع المرفوع)
    mudari_marfoo: {
      title: "المضارع المرفوع (Present Indicative)",
      description: "Default present tense (Marfoo' with Dammah or Noon). Notice the long 'ū' (يَقُولُ) restored because the Lam is vocalized with Dammah.",
      forms: {
        huwa: { word: "يَقُولُ", phonetic: "Yaqūlu", ending: "ـُ (ضمة ظاهرة)", endingType: "مرفوع بالضمة (Present Indicative - 'u' ending)", notes: "Origin: يَقْوُلُ -> heavy Dammah on weak Waw shifted back to Qaf: يَقُولُ." },
        huma_m: { word: "يَقُولَانِ", phonetic: "Yaqūlāni", ending: "ـَانِ (ثبوت النون)", endingType: "مرفوع بثبوت النون (Present Indicative - retained Nūn)", notes: "From the Five Verbs (الأفعال الخمسة)." },
        hum: { word: "يَقُولُونَ", phonetic: "Yaqūlūna", ending: "ـُونَ (ثبوت النون)", endingType: "مرفوع بثبوت النون (Present Indicative - retained Nūn)", notes: "From the Five Verbs (الأفعال الخمسة)." },
        hiya: { word: "تَقُولُ", phonetic: "Taqūlu", ending: "ـُ (ضمة ظاهرة)", endingType: "مرفوع بالضمة (Present Indicative - 'u' ending)", notes: "Standard 3rd person feminine singular." },
        huma_f: { word: "تَقُولَانِ", phonetic: "Taqūlāni", ending: "ـَانِ (ثبوت النون)", endingType: "مرفوع بثبوت النون (Present Indicative - retained Nūn)", notes: "From the Five Verbs." },
        hunna: { word: "يَقُلْنَ", phonetic: "Yaqulna", ending: "ـْنَ (نون النسوة)", endingType: "مبني على السكون (Built on Sukūn - feminine plural)", notes: "🚨 Waw dropped due to Sukun on Lam before Noon of women!" },
        anta: { word: "تَقُولُ", phonetic: "Taqūlu", ending: "ـُ (ضمة ظاهرة)", endingType: "مرفوع بالضمة (Present Indicative - 'u' ending)", notes: "2nd person masculine singular." },
        antuma_m: { word: "تَقُولَانِ", phonetic: "Taqūlāni", ending: "ـَانِ (ثبوت النون)", endingType: "مرفوع بثبوت النون (Present Indicative - retained Nūn)", notes: "From the Five Verbs." },
        antum: { word: "تَقُولُونَ", phonetic: "Taqūlūna", ending: "ـُونَ (ثبوت النون)", endingType: "مرفوع بثبوت النون (Present Indicative - retained Nūn)", notes: "From the Five Verbs." },
        anti: { word: "تَقُولِينَ", phonetic: "Taqūlīna", ending: "ـِينَ (ثبوت النون)", endingType: "مرفوع بثبوت النون (Present Indicative - retained Nūn)", notes: "From the Five Verbs." },
        antuma_f: { word: "تَقُولَانِ", phonetic: "Taqūlāni", ending: "ـَانِ (ثبوت النون)", endingType: "مرفوع بثبوت النون (Present Indicative - retained Nūn)", notes: "From the Five Verbs." },
        antunna: { word: "تَقُلْنَ", phonetic: "Taqulna", ending: "ـْنَ (نون النسوة)", endingType: "مبني على السكون (Built on Sukūn - feminine plural)", notes: "🚨 Waw dropped due to Sukun on Lam!" },
        ana: { word: "أَقُولُ", phonetic: "Aqūlu", ending: "ـُ (ضمة ظاهرة)", endingType: "مرفوع بالضمة (Present Indicative - 'u' ending)", notes: "1st person singular." },
        nahnu: { word: "نَقُولُ", phonetic: "Naqūlu", ending: "ـُ (ضمة ظاهرة)", endingType: "مرفوع بالضمة (Present Indicative - 'u' ending)", notes: "1st person plural." }
      }
    },

    // 3. PRESENT TENSE SUBJUNCTIVE (المضارع المنصوب)
    mudari_mansoob: {
      title: "المضارع المنصوب (Present Subjunctive)",
      description: "When preceded by accusative particles (أَنْ، لَنْ، كَيْ، حَتَّىٰ، لِـ). The final vowel becomes Fatḥah (ـَ), or the Noon is deleted from the 5 Verbs!",
      forms: {
        huwa: { word: "لَنْ يَقُولَ", phonetic: "Lan yaqūla", ending: "ـَ (فتحة ظاهرة)", endingType: "منصوب بالفتحة (Subjunctive - with Fatḥah 'a' ending)", notes: "The Lam takes a clear Fatha." },
        huma_m: { word: "لَنْ يَقُولَا", phonetic: "Lan yaqūlā", ending: "حذف النون", endingType: "منصوب بحذف النون (Subjunctive - dropped Nūn)", notes: "Noon of Five Verbs dropped." },
        hum: { word: "لَنْ يَقُولُوا", phonetic: "Lan yaqūlū", ending: "حذف النون", endingType: "منصوب بحذف النون (Subjunctive - dropped Nūn)", notes: "Noon dropped, Alif of protection added." },
        hiya: { word: "لَنْ تَقُولَ", phonetic: "Lan taqūla", ending: "ـَ (فتحة ظاهرة)", endingType: "منصوب بالفتحة (Subjunctive - with Fatḥah 'a' ending)", notes: "Lam takes Fatha." },
        huma_f: { word: "لَنْ تَقُولَا", phonetic: "Lan taqūlā", ending: "حذف النون", endingType: "منصوب بحذف النون (Subjunctive - dropped Nūn)", notes: "Noon dropped." },
        hunna: { word: "لَنْ يَقُلْنَ", phonetic: "Lan yaqulna", ending: "ـْنَ (نون النسوة)", endingType: "مبني على السكون في محل نصب (Built on Sukūn in Subjunctive state)", notes: "Built on Sukun because of Nun al-Niswa." },
        anta: { word: "لَنْ تَقُولَ", phonetic: "Lan taqūla", ending: "ـَ (فتحة ظاهرة)", endingType: "منصوب بالفتحة (Subjunctive - with Fatḥah 'a' ending)", notes: "Lam takes Fatha." },
        antuma_m: { word: "لَنْ تَقُولَا", phonetic: "Lan taqūlā", ending: "حذف النون", endingType: "منصوب بحذف النون (Subjunctive - dropped Nūn)", notes: "Noon dropped." },
        antum: { word: "لَنْ تَقُولُوا", phonetic: "Lan taqūlū", ending: "حذف النون", endingType: "منصوب بحذف النون (Subjunctive - dropped Nūn)", notes: "Noon dropped." },
        anti: { word: "لَنْ تَقُولِي", phonetic: "Lan taqūlī", ending: "حذف النون", endingType: "منصوب بحذف النون (Subjunctive - dropped Nūn)", notes: "Noon dropped from تقولي." },
        antuma_f: { word: "لَنْ تَقُولَا", phonetic: "Lan taqūlā", ending: "حذف النون", endingType: "منصوب بحذف النون (Subjunctive - dropped Nūn)", notes: "Noon dropped." },
        antunna: { word: "لَنْ تَقُلْنَ", phonetic: "Lan taqulna", ending: "ـْنَ", endingType: "مبني على السكون في محل نصب (Built on Sukūn in Subjunctive state)", notes: "Built on Sukun." },
        ana: { word: "لَنْ أَقُولَ", phonetic: "Lan aqūla", ending: "ـَ (فتحة ظاهرة)", endingType: "منصوب بالفتحة (Subjunctive - with Fatḥah 'a' ending)", notes: "Lam takes Fatha." },
        nahnu: { word: "لَنْ نَقُولَ", phonetic: "Lan naqūla", ending: "ـَ (فتحة ظاهرة)", endingType: "منصوب بالفتحة (Subjunctive - with Fatḥah 'a' ending)", notes: "Lam takes Fatha." }
      }
    },

    // 4. PRESENT TENSE JUSSIVE (المضارع المجزوم)
    mudari_majzoom: {
      title: "المضارع المجزوم (Present Jussive)",
      description: "When preceded by jussive particles (لَمْ، لَمَّا، لَامُ الأَمْرِ، لَا النَّاهِيَةِ). 🚨 KEY AJWAF RULE: The Lam receives a Sukun, so the middle long Waw is dropped to prevent two sukoons meeting (يَقُولْ -> يَقُلْ)!",
      forms: {
        huwa: { word: "لَمْ يَقُلْ", phonetic: "Lam yaqul", ending: "ـْ (سكون)", endingType: "مجزوم بالسكون (Jussive - with Sukūn [no vowel])", notes: "🚨 Waw dropped! Origin: يَقُولْ -> Two silent letters met -> Waw deleted." },
        huma_m: { word: "لَمْ يَقُولَا", phonetic: "Lam yaqūlā", ending: "حذف النون", endingType: "مجزوم بحذف النون (Jussive - dropped Nūn)", notes: "Lam has vowel 'a', so Waw remains!" },
        hum: { word: "لَمْ يَقُولُوا", phonetic: "Lam yaqūlū", ending: "حذف النون", endingType: "مجزوم بحذف النون (Jussive - dropped Nūn)", notes: "Waw of stem remains, Noon dropped." },
        hiya: { word: "لَمْ تَقُلْ", phonetic: "Lam taqul", ending: "ـْ (سكون)", endingType: "مجزوم بالسكون (Jussive - with Sukūn [no vowel])", notes: "🚨 Waw dropped due to Sukun on Lam." },
        huma_f: { word: "لَمْ تَقُولَا", phonetic: "Lam taqūlā", ending: "حذف النون", endingType: "مجزوم بحذف النون (Jussive - dropped Nūn)", notes: "Noon dropped." },
        hunna: { word: "لَمْ يَقُلْنَ", phonetic: "Lam yaqulna", ending: "ـْنَ", endingType: "مبني على السكون في محل جزم (Built on Sukūn in Jussive state)", notes: "Waw dropped." },
        anta: { word: "لَمْ تَقُلْ", phonetic: "Lam taqul", ending: "ـْ (سكون)", endingType: "مجزوم بالسكون (Jussive - with Sukūn [no vowel])", notes: "🚨 Waw dropped: Lam has Sukun." },
        antuma_m: { word: "لَمْ تَقُولَا", phonetic: "Lam taqūlā", ending: "حذف النون", endingType: "مجزوم بحذف النون (Jussive - dropped Nūn)", notes: "Noon dropped." },
        antum: { word: "لَمْ تَقُولُوا", phonetic: "Lam taqūlū", ending: "حذف النون", endingType: "مجزوم بحذف النون (Jussive - dropped Nūn)", notes: "Noon dropped." },
        anti: { word: "لَمْ تَقُولِي", phonetic: "Lam taqūlī", ending: "حذف النون", endingType: "مجزوم بحذف النون (Jussive - dropped Nūn)", notes: "Noon dropped." },
        antuma_f: { word: "لَمْ تَقُولَا", phonetic: "Lam taqūlā", ending: "حذف النون", endingType: "مجزوم بحذف النون (Jussive - dropped Nūn)", notes: "Noon dropped." },
        antunna: { word: "لَمْ تَقُلْنَ", phonetic: "Lam taqulna", ending: "ـْنَ", endingType: "مبني على السكون في محل جزم (Built on Sukūn in Jussive state)", notes: "Waw dropped." },
        ana: { word: "لَمْ أَقُلْ", phonetic: "Lam aqul", ending: "ـْ (سكون)", endingType: "مجزوم بالسكون (Jussive - with Sukūn [no vowel])", notes: "🚨 Waw dropped: Lam has Sukun." },
        nahnu: { word: "لَمْ نَقُلْ", phonetic: "Lam naqul", ending: "ـْ (سكون)", endingType: "مجزوم بالسكون (Jussive - with Sukūn [no vowel])", notes: "🚨 Waw dropped: Lam has Sukun." }
      }
    },

    // 5. IMPERATIVE (فعل الأمر)
    amr: {
      title: "Command forms (فعل الأمر)",
      description: "Commands you give directly to someone. Notice how the prefix drops and the word ends with a sukūn or drops the letter noon.",
      forms: {
        anta: { word: "قُلْ", phonetic: "Qul", meaning: "Say! (to one male)", ending: "ـْ (سكون)", endingType: "Command with Sukūn", notes: "The classic command: Qul! The middle vowel drops because the Lam has a sukūn." },
        antuma_m: { word: "قُولَا", phonetic: "Qūlā", meaning: "Say! (to two people)", ending: "حذف النون", endingType: "Command with dropped Nūn", notes: "Dual command (e.g. {فَقُولَا لَهُ قَوْلًا لَّيِّنًا} 'Speak to him gently')." },
        antum: { word: "قُولُوا", phonetic: "Qūlū", meaning: "Say! (to a group)", ending: "حذف النون", endingType: "Command with dropped Nūn", notes: "Plural command (e.g. {وَقُولُوا لِلنَّاسِ حُسْنًا} 'Speak good words to people')." },
        anti: { word: "قُولِي", phonetic: "Qūlī", meaning: "Say! (to one female)", ending: "حذف النون", endingType: "Command with dropped Nūn", notes: "Feminine singular (e.g. {فَقُولِي إِنِّي نَذَرْتُ} 'Say: Indeed, I have vowed')." },
        antuma_f: { word: "قُولَا", phonetic: "Qūlā", meaning: "Say! (to two women)", ending: "حذف النون", endingType: "Command with dropped Nūn", notes: "Dual feminine command." },
        antunna: { word: "قُلْنَ", phonetic: "Qulna", meaning: "Say! (to women)", ending: "ـْنَ (نون النسوة)", endingType: "Command with Sukūn", notes: "Plural feminine command (e.g. {وَقُلْنَ قَوْلًا مَّعْرُوفًا} 'Speak honorable words')." }
      }
    },

    // 6. PASSIVE (المبني للمجهول)
    passive: {
      title: "Passive voice (المبني للمجهول)",
      description: "قَالَ means 'he said.' قِيلَ means 'it was said.' In the second form, the sentence does not name the speaker.",
      forms: {
        huwa_past: { pronoun: "هُوَ (Past)", word: "قِيلَ", phonetic: "Qīla", meaning: "It was said", ending: "ـَ (Fatḥah)", endingType: "Past passive", notes: "Original root form was قُوِلَ. The kasrah shifted back, softening the weak letter to Ya: قِيلَ." },
        hum_past: { pronoun: "هُمْ (Past)", word: "قِيلَ لَهُمْ", phonetic: "Qīla lahum", meaning: "It was said to them", ending: "ـَ (Fatḥah)", endingType: "Past passive phrase", notes: "Quranic idiom: 'And when it was said to them' (وَإِذَا قِيلَ لَهُمْ)." },
        hiya_past: { pronoun: "هِيَ (Past)", word: "قِيلَتْ", phonetic: "Qīlat", meaning: "It was said (f.)", ending: "ـَتْ (Fatḥah + Ta)", endingType: "Past passive feminine", notes: "Used when referring to a feminine word or statement." },
        hunna_past: { pronoun: "هُنَّ (Past)", word: "قِلْنَ", phonetic: "Qilna", meaning: "They were told (f. pl.)", ending: "ـْنَ (Sukūn)", endingType: "Past passive feminine plural", notes: "Ya is dropped before the silent Lam: Qilna." },
        huwa_pres: { pronoun: "هُوَ (Present)", word: "يُقَالُ", phonetic: "Yuqālu", meaning: "It is said", ending: "ـُ (Ḍammah)", endingType: "Present passive", notes: "Original form was يُقْوَلُ. The vowel shifts to an Alif: يُقَالُ ('It is said')." },
        hum_pres: { pronoun: "هُمْ (Present)", word: "يُقَالُونَ", phonetic: "Yuqālūna", meaning: "They are told", ending: "ـُونَ (Retained Nūn)", endingType: "Present passive plural", notes: "Present passive plural." },
        hiya_pres: { pronoun: "هِيَ (Present)", word: "تُقَالُ", phonetic: "Tuqālu", meaning: "It is said (f.)", ending: "ـُ (Ḍammah)", endingType: "Present passive feminine", notes: "Present passive feminine singular." }
      }
    }
  },

  // 7. DERIVED FORMS (الأوزان المزيدة)
  derivedForms: [
    {
      form: "Form I (فَعَلَ)",
      name: "Base Form",
      past: "قَالَ",
      present: "يَقُولُ",
      masdar: "قَوْلًا",
      arabicPattern: "قَالَ - يَقُولُ - قَوْلًا",
      meaning: "To say, to utter, to speak",
      quranExample: "قَالَ إِنِّي عَبْدُ اللَّهِ (Maryam: 30)",
      notes: "Base form, hollow wawi verb."
    },
    {
      form: "Form II (فَعَّلَ)",
      name: "Causative / Intensive",
      past: "قَوَّلَ",
      present: "يُقَوِّلُ",
      masdar: "تَقْوِيلًا",
      arabicPattern: "قَوَّلَ - يُقَوِّلُ - تَقْوِيلًا",
      meaning: "To put words in someone's mouth; falsely attribute speech",
      quranExample: "مُشْتَقّ مِنْهَا: تَقَوُّل",
      notes: "Causative / Intensive / Attributive. Doubling the weak Waw strengthens it into a full consonant (قوّل)."
    },
    {
      form: "Form IV (أَفْعَلَ)",
      name: "Causative / Relieving",
      past: "أَقَالَ",
      present: "يُقِيلُ",
      masdar: "إِقَالَةً",
      arabicPattern: "أَقَالَ - يُقِيلُ - إِقَالَةً",
      meaning: "To annul, relieve, excuse a transaction/fault; to dismiss",
      quranExample: "الحديث: مَنْ أَقَالَ مُسْلِمًا أَقَالَهُ اللَّهُ عَثْرَتَهُ",
      notes: "The Masdar takes an ending Ta Marbuta (إِقَالَة) compensating for the deleted Waw."
    },
    {
      form: "Form V (تَفَعَّلَ)",
      name: "Reflexive / Fabricating",
      past: "تَقَوَّلَ",
      present: "يَتَقَوَّلُ",
      masdar: "تَقَوُّلًا",
      arabicPattern: "تَقَوَّلَ - يَتَقَوَّلُ - تَقَوُّلًا",
      meaning: "To fabricate lies, forge speech, invent statements against someone",
      quranExample: "وَلَوْ تَقَوَّلَ عَلَيْنَا بَعْضَ الْأَقَاوِيلِ (Al-Haqqah: 44–45)",
      notes: "Reflexive of Form II. Conveys strenuous effort to forge words that were never spoken."
    },
    {
      form: "Form X (اسْتَفْعَلَ)",
      name: "Seeking / Requesting",
      past: "اسْتَقَالَ",
      present: "يَسْتَقِيلُ",
      masdar: "اسْتِقَالَةً",
      arabicPattern: "اسْتَقَالَ - يَسْتَقِيلُ - اسْتِقَالَةً",
      meaning: "To ask to be relieved, to resign from a position",
      quranExample: "الاستعمال الفقهي والمعاصر",
      notes: "Seeking (طلب) an 'Iqalah' (relief/release)."
    }
  ],

  // 8. NOUNS & DERIVATIVES (الأسماء والمشتقات)
  nominals: [
    {
      type: "Masdar (المصدر الصريح)",
      word: "قَوْل",
      plural: "أَقْوَال / أَقَاوِيل",
      meaning: "Speech, saying, word, utterance",
      quran: "إِنَّا سَنُلْقِي عَلَيْكَ قَوْلًا ثَقِيلًا (Al-Muzzammil: 5)"
    },
    {
      type: "Masdar (مصدر بديل)",
      word: "قِيل",
      plural: "-",
      meaning: "Talk, conversation, utterance",
      quran: "وَمَنْ أَصْدَقُ مِنَ اللَّهِ قِيلًا (An-Nisa: 122)"
    },
    {
      type: "Active Participle (اسم الفاعل)",
      word: "قَائِل",
      plural: "قَائِلُونَ / قُوَّل",
      meaning: "Speaker, one who says",
      quran: "قَالَ قَائِلٌ مِّنْهُمْ كَمْ لَبِثْتُمْ (Al-Kahf: 19)"
    },
    {
      type: "Passive Participle (اسم المفعول)",
      word: "مَقُول / مَقُولَة",
      plural: "مَقُولَات",
      meaning: "Said, spoken, statement, proposition (مقول القول = direct speech)",
      quran: "مقول القول في الإعراب"
    },
    {
      type: "Noun of Place / Discourse",
      word: "مَقَال / مَقَالَة",
      plural: "مَقَالَات",
      meaning: "Article, essay, discourse, speech",
      quran: "فَصْلُ المَقَال"
    }
  ],

  // 9. AJWAF WEAK-LETTER MECHANICS
  ajwafMechanics: {
    title: "Why does the middle vowel disappear? (The Hollow Verb Rule)",
    subtitle: "How قَالَ becomes قُلْتُ and قُلْ",
    steps: [
      {
        step: 1,
        title: "The 3 root letters",
        formula: "ق + و + ل",
        explanation: "The base root has three letters: Q-W-L. Originally in ancient root structure, it was Qawala."
      },
      {
        step: 2,
        title: "Smoothing to an Alif",
        formula: "قَوَلَ  ⟶  قَالَ",
        explanation: "Because pronouncing 'qawala' is heavy, the vowel smooths naturally into a long 'aa' sound: قَالَ (Qāla)."
      },
      {
        step: 3,
        title: "Adding a pronoun ending adds a sukūn",
        formula: "قَالَ + تُ (I)  ⟶  قَالْـتُ",
        explanation: "When attaching endings like تُ (I), تَ (you), or نَا (we), the last letter (ل) must take a sukūn (no vowel): Q-Ā-L-T-U."
      },
      {
        step: 4,
        title: "Two unvowelled letters meet in connected speech",
        formula: "قَ [اْ] + [لْ] + تُ",
        explanation: "The long Alif carries an unwritten sukūn, and the Lam now also has a sukūn. In connected Arabic speech, two consecutive unvowelled letters are avoided in the middle of a word."
      },
      {
        step: 5,
        title: "The long vowel drops, leaving a clue",
        formula: "قَالْتُ  ⟶  قُلْتُ",
        explanation: "The long Alif drops to keep speech flowing easily. To show that the original root had a Waw (و), the first letter gets a ḍammah (u): قُلْتُ (Qultu)."
      }
    ]
  }
};
