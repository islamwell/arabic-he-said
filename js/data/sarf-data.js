/**
 * Sarf (Morphology) Data Module for the Root ق-و-ل (Q-W-L)
 * Comprehensive morphological paradigm for Classical and Quranic Arabic
 */

window.SARF_DATA = {
  root: "ق-و-ل",
  rootMeaning: "to say, speak, utter, state, articulate",
  verbClass: "الأجوف الواوي (Hollow Wawi Verb) - Form I (فَعَلَ - يَفْعُلُ)",
  baseTransformed: "قَالَ - يَقُولُ",
  
  pronouns: [
    { id: "huwa", ar: "هُوَ", en: "He (3MS)", category: "3rd-masc-sg" },
    { id: "huma_m", ar: "هُمَا", en: "They two (3MD)", category: "3rd-masc-dl" },
    { id: "hum", ar: "هُمْ", en: "They (3MP)", category: "3rd-masc-pl" },
    { id: "hiya", ar: "هِيَ", en: "She (3FS)", category: "3rd-fem-sg" },
    { id: "huma_f", ar: "هُمَا", en: "They two (3FD)", category: "3rd-fem-dl" },
    { id: "hunna", ar: "هُنَّ", en: "They (3FP)", category: "3rd-fem-pl" },
    { id: "anta", ar: "أَنْتَ", en: "You (2MS)", category: "2nd-masc-sg" },
    { id: "antuma_m", ar: "أَنْتُمَا", en: "You two (2MD)", category: "2nd-masc-dl" },
    { id: "antum", ar: "أَنْتُمْ", en: "You all (2MP)", category: "2nd-masc-pl" },
    { id: "anti", ar: "أَنْتِ", en: "You (2FS)", category: "2nd-fem-sg" },
    { id: "antuma_f", ar: "أَنْتُمَا", en: "You two (2FD)", category: "2nd-fem-dl" },
    { id: "antunna", ar: "أَنْتُنَّ", en: "You all (2FP)", category: "2nd-fem-pl" },
    { id: "ana", ar: "أَنَا", en: "I (1S)", category: "1st-sg" },
    { id: "nahnu", ar: "نَحْنُ", en: "We (1P)", category: "1st-pl" }
  ],

  conjugations: {
    // 1. PAST TENSE ACTIVE (الماضي المعلوم)
    madi_active: {
      title: "الماضي المعلوم (Past Active)",
      description: "Expresses completed actions. Notice how the middle Alif is kept when the ending has a vowel (متحرك), but dropped to a Dammah on the Qaf (قُـ) when the ending has a Sukun to avoid meeting two sukoons!",
      forms: {
        huwa: { word: "قَالَ", phonetic: "Qāla", ending: "ـَ (فتحة)", endingType: "مبني على الفتح", notes: "Origin: قَوَلَ -> The Waw had a Fatha and preceded by Fatha, turning into Alif." },
        huma_m: { word: "قَالَا", phonetic: "Qālā", ending: "ـَا (ألف الاثنين)", endingType: "مبني على الفتح", notes: "Alif of duality attached; built on Fatha." },
        hum: { word: "قَالُوا", phonetic: "Qālū", ending: "ـُوا (واو الجماعة)", endingType: "مبني على الضم", notes: "Built on Dammah due to connection with Waw of plural." },
        hiya: { word: "قَالَتْ", phonetic: "Qālat", ending: "ـَتْ (تاء التأنيث الساكنة)", endingType: "مبني على الفتح", notes: "Feminine marker 'تْ' is a non-agent particle, so it stays on Fatha." },
        huma_f: { word: "قَالَتَا", phonetic: "Qālatā", ending: "ـَتَا", endingType: "مبني على الفتح", notes: "Feminine dual marker; built on Fatha." },
        hunna: { word: "قُلْنَ", phonetic: "Qulna", ending: "ـْنَ (نون النسوة)", endingType: "مبني على السكون", notes: "🚨 The Alif drops! قَالْ + نَ -> Two sukoons met -> Alif dropped -> Qaf takes Dammah (قُلْنَ)." },
        anta: { word: "قُلْتَ", phonetic: "Qulta", ending: "ـْتَ (تاء المخاطب)", endingType: "مبني على السكون", notes: "🚨 Lam is Sukun, weak Alif dropped, Qaf takes Dammah." },
        antuma_m: { word: "قُلْتُمَا", phonetic: "Qultumā", ending: "ـْتُمَا", endingType: "مبني على السكون", notes: "Dual masculine pronoun with Sukun base." },
        antum: { word: "قُلْتُمْ", phonetic: "Qultum", ending: "ـْتُمْ", endingType: "مبني على السكون", notes: "Plural masculine pronoun with Sukun base." },
        anti: { word: "قُلْتِ", phonetic: "Qulti", ending: "ـْتِ (تاء المخاطبة)", endingType: "مبني على السكون", notes: "🚨 Notice the ending Kasrah on the Ta is for the feminine 'you', but the verb base is built on Sukun on the Lam." },
        antuma_f: { word: "قُلْتُمَا", phonetic: "Qultumā", ending: "ـْتُمَا", endingType: "مبني على السكون", notes: "Dual feminine pronoun with Sukun base." },
        antunna: { word: "قُلْتُنَّ", phonetic: "Qultunna", ending: "ـْتُنَّ", endingType: "مبني على السكون", notes: "Plural feminine pronoun with Sukun base." },
        ana: { word: "قُلْتُ", phonetic: "Qultu", ending: "ـْتُ (تاء المتكلم)", endingType: "مبني على السكون", notes: "🚨 The speaker 'I': The Lam has Sukun, the Ta has Dammah (فَاعِل)." },
        nahnu: { word: "قُلْنَا", phonetic: "Qulnā", ending: "ـْنَا (نا الفاعلين)", endingType: "مبني على السكون", notes: "The 'We' pronoun: Built on Sukun on the Lam." }
      }
    },

    // 2. PRESENT TENSE INDICATIVE (المضارع المرفوع)
    mudari_marfoo: {
      title: "المضارع المرفوع (Present Indicative)",
      description: "Default present tense (Marfoo' with Dammah or Noon). Notice the long 'ū' (يَقُولُ) restored because the Lam is vocalized with Dammah.",
      forms: {
        huwa: { word: "يَقُولُ", phonetic: "Yaqūlu", ending: "ـُ (ضمة ظاهرة)", endingType: "مرفوع بالضمة", notes: "Origin: يَقْوُلُ -> heavy Dammah on weak Waw shifted back to Qaf: يَقُولُ." },
        huma_m: { word: "يَقُولَانِ", phonetic: "Yaqūlāni", ending: "ـَانِ (ثبوت النون)", endingType: "مرفوع بثبوت النون", notes: "From the Five Verbs (الأفعال الخمسة)." },
        hum: { word: "يَقُولُونَ", phonetic: "Yaqūlūna", ending: "ـُونَ (ثبوت النون)", endingType: "مرفوع بثبوت النون", notes: "From the Five Verbs (الأفعال الخمسة)." },
        hiya: { word: "تَقُولُ", phonetic: "Taqūlu", ending: "ـُ (ضمة ظاهرة)", endingType: "مرفوع بالضمة", notes: "Standard 3rd person feminine singular." },
        huma_f: { word: "تَقُولَانِ", phonetic: "Taqūlāni", ending: "ـَانِ (ثبوت النون)", endingType: "مرفوع بثبوت النون", notes: "From the Five Verbs." },
        hunna: { word: "يَقُلْنَ", phonetic: "Yaqulna", ending: "ـْنَ (نون النسوة)", endingType: "مبني على السكون", notes: "🚨 Waw dropped due to Sukun on Lam before Noon of women!" },
        anta: { word: "تَقُولُ", phonetic: "Taqūlu", ending: "ـُ (ضمة ظاهرة)", endingType: "مرفوع بالضمة", notes: "2nd person masculine singular." },
        antuma_m: { word: "تَقُولَانِ", phonetic: "Taqūlāni", ending: "ـَانِ (ثبوت النون)", endingType: "مرفوع بثبوت النون", notes: "From the Five Verbs." },
        antum: { word: "تَقُولُونَ", phonetic: "Taqūlūna", ending: "ـُونَ (ثبوت النون)", endingType: "مرفوع بثبوت النون", notes: "From the Five Verbs." },
        anti: { word: "تَقُولِينَ", phonetic: "Taqūlīna", ending: "ـِينَ (ثبوت النون)", endingType: "مرفوع بثبوت النون", notes: "From the Five Verbs." },
        antuma_f: { word: "تَقُولَانِ", phonetic: "Taqūlāni", ending: "ـَانِ (ثبوت النون)", endingType: "مرفوع بثبوت النون", notes: "From the Five Verbs." },
        antunna: { word: "تَقُلْنَ", phonetic: "Taqulna", ending: "ـْنَ (نون النسوة)", endingType: "مبني على السكون", notes: "🚨 Waw dropped due to Sukun on Lam!" },
        ana: { word: "أَقُولُ", phonetic: "Aqūlu", ending: "ـُ (ضمة ظاهرة)", endingType: "مرفوع بالضمة", notes: "1st person singular." },
        nahnu: { word: "نَقُولُ", phonetic: "Naqūlu", ending: "ـُ (ضمة ظاهرة)", endingType: "مرفوع بالضمة", notes: "1st person plural." }
      }
    },

    // 3. PRESENT TENSE SUBJUNCTIVE (المضارع المنصوب)
    mudari_mansoob: {
      title: "المضارع المنصوب (Present Subjunctive)",
      description: "When preceded by accusative particles (أَنْ، لَنْ، كَيْ، حَتَّىٰ، لِـ). The final vowel becomes Fatḥah (ـَ), or the Noon is deleted from the 5 Verbs!",
      forms: {
        huwa: { word: "لَنْ يَقُولَ", phonetic: "Lan yaqūla", ending: "ـَ (فتحة ظاهرة)", endingType: "منصوب بالفتحة", notes: "The Lam takes a clear Fatha." },
        huma_m: { word: "لَنْ يَقُولَا", phonetic: "Lan yaqūlā", ending: "حذف النون", endingType: "منصوب بحذف النون", notes: "Noon of Five Verbs dropped." },
        hum: { word: "لَنْ يَقُولُوا", phonetic: "Lan yaqūlū", ending: "حذف النون", endingType: "منصوب بحذف النون", notes: "Noon dropped, Alif of protection added." },
        hiya: { word: "لَنْ تَقُولَ", phonetic: "Lan taqūla", ending: "ـَ (فتحة ظاهرة)", endingType: "منصوب بالفتحة", notes: "Lam takes Fatha." },
        huma_f: { word: "لَنْ تَقُولَا", phonetic: "Lan taqūlā", ending: "حذف النون", endingType: "منصوب بحذف النون", notes: "Noon dropped." },
        hunna: { word: "لَنْ يَقُلْنَ", phonetic: "Lan yaqulna", ending: "ـْنَ (نون النسوة)", endingType: "مبني على السكون في محل نصب", notes: "Built on Sukun because of Nun al-Niswa." },
        anta: { word: "لَنْ تَقُولَ", phonetic: "Lan taqūla", ending: "ـَ (فتحة ظاهرة)", endingType: "منصوب بالفتحة", notes: "Lam takes Fatha." },
        antuma_m: { word: "لَنْ تَقُولَا", phonetic: "Lan taqūlā", ending: "حذف النون", endingType: "منصوب بحذف النون", notes: "Noon dropped." },
        antum: { word: "لَنْ تَقُولُوا", phonetic: "Lan taqūlū", ending: "حذف النون", endingType: "منصوب بحذف النون", notes: "Noon dropped." },
        anti: { word: "لَنْ تَقُولِي", phonetic: "Lan taqūlī", ending: "حذف النون", endingType: "منصوب بحذف النون", notes: "Noon dropped from تقولي." },
        antuma_f: { word: "لَنْ تَقُولَا", phonetic: "Lan taqūlā", ending: "حذف النون", endingType: "منصوب بحذف النون", notes: "Noon dropped." },
        antunna: { word: "لَنْ تَقُلْنَ", phonetic: "Lan taqulna", ending: "ـْنَ", endingType: "مبني على السكون في محل نصب", notes: "Built on Sukun." },
        ana: { word: "لَنْ أَقُولَ", phonetic: "Lan aqūla", ending: "ـَ (فتحة ظاهرة)", endingType: "منصوب بالفتحة", notes: "Lam takes Fatha." },
        nahnu: { word: "لَنْ نَقُولَ", phonetic: "Lan naqūla", ending: "ـَ (فتحة ظاهرة)", endingType: "منصوب بالفتحة", notes: "Lam takes Fatha." }
      }
    },

    // 4. PRESENT TENSE JUSSIVE (المضارع المجزوم)
    mudari_majzoom: {
      title: "المضارع المجزوم (Present Jussive)",
      description: "When preceded by jussive particles (لَمْ، لَمَّا، لَامُ الأَمْرِ، لَا النَّاهِيَةِ). 🚨 KEY AJWAF RULE: The Lam receives a Sukun, so the middle long Waw is dropped to prevent two sukoons meeting (يَقُولْ -> يَقُلْ)!",
      forms: {
        huwa: { word: "لَمْ يَقُلْ", phonetic: "Lam yaqul", ending: "ـْ (سكون)", endingType: "مجزوم بالسكون", notes: "🚨 Waw dropped! Origin: يَقُولْ -> Two silent letters met -> Waw deleted." },
        huma_m: { word: "لَمْ يَقُولَا", phonetic: "Lam yaqūlā", ending: "حذف النون", endingType: "مجزوم بحذف النون", notes: "Lam has vowel 'a', so Waw remains!" },
        hum: { word: "لَمْ يَقُولُوا", phonetic: "Lam yaqūlū", ending: "حذف النون", endingType: "مجزوم بحذف النون", notes: "Waw of stem remains, Noon dropped." },
        hiya: { word: "لَمْ تَقُلْ", phonetic: "Lam taqul", ending: "ـْ (سكون)", endingType: "مجزوم بالسكون", notes: "🚨 Waw dropped due to Sukun on Lam." },
        huma_f: { word: "لَمْ تَقُولَا", phonetic: "Lam taqūlā", ending: "حذف النون", endingType: "مجزوم بحذف النون", notes: "Noon dropped." },
        hunna: { word: "لَمْ يَقُلْنَ", phonetic: "Lam yaqulna", ending: "ـْنَ", endingType: "مبني على السكون في محل جزم", notes: "Waw dropped." },
        anta: { word: "لَمْ تَقُلْ", phonetic: "Lam taqul", ending: "ـْ (سكون)", endingType: "مجزوم بالسكون", notes: "🚨 Waw dropped: Lam has Sukun." },
        antuma_m: { word: "لَمْ تَقُولَا", phonetic: "Lam taqūlā", ending: "حذف النون", endingType: "مجزوم بحذف النون", notes: "Noon dropped." },
        antum: { word: "لَمْ تَقُولُوا", phonetic: "Lam taqūlū", ending: "حذف النون", endingType: "مجزوم بحذف النون", notes: "Noon dropped." },
        anti: { word: "لَمْ تَقُولِي", phonetic: "Lam taqūlī", ending: "حذف النون", endingType: "مجزوم بحذف النون", notes: "Noon dropped." },
        antuma_f: { word: "لَمْ تَقُولَا", phonetic: "Lam taqūlā", ending: "حذف النون", endingType: "مجزوم بحذف النون", notes: "Noon dropped." },
        antunna: { word: "لَمْ تَقُلْنَ", phonetic: "Lam taqulna", ending: "ـْنَ", endingType: "مبني على السكون في محل جزم", notes: "Waw dropped." },
        ana: { word: "لَمْ أَقُلْ", phonetic: "Lam aqul", ending: "ـْ (سكون)", endingType: "مجزوم بالسكون", notes: "🚨 Waw dropped: Lam has Sukun." },
        nahnu: { word: "لَمْ نَقُلْ", phonetic: "Lam naqul", ending: "ـْ (سكون)", endingType: "مجزوم بالسكون", notes: "🚨 Waw dropped: Lam has Sukun." }
      }
    },

    // 5. IMPERATIVE (فعل الأمر)
    amr: {
      title: "فعل الأمر (Imperative / Command)",
      description: "Commands (2nd person). Derived from the jussive by stripping the prefix (تَقُلْ -> قُلْ). Built on Sukun or deletion of Noon.",
      forms: {
        anta: { word: "قُلْ", phonetic: "Qul", ending: "ـْ (سكون)", endingType: "مبني على السكون", notes: "🚨 The world-famous command: QUL! Built on Sukun, Waw dropped." },
        antuma_m: { word: "قُولَا", phonetic: "Qūlā", ending: "حذف النون", endingType: "مبني على حذف النون", notes: "Dual command: 'Say, you two' (e.g., {فَقُولَا لَهُ قَوْلًا لَّيِّنًا})." },
        antum: { word: "قُولُوا", phonetic: "Qūlū", ending: "حذف النون", endingType: "مبني على حذف النون", notes: "Plural masculine: 'Say, you all' (e.g., {وَقُولُوا لِلنَّاسِ حُسْنًا})." },
        anti: { word: "قُولِي", phonetic: "Qūlī", ending: "حذف النون", endingType: "مبني على حذف النون", notes: "Feminine singular: 'Say (O woman)' (e.g., {فَكُلِي وَاشْرَبِي وَقَرِّي عَيْنًا... فَقُولِي})." },
        antuma_f: { word: "قُولَا", phonetic: "Qūlā", ending: "حذف النون", endingType: "مبني على حذف النون", notes: "Dual feminine command." },
        antunna: { word: "قُلْنَ", phonetic: "Qulna", ending: "ـْنَ (نون النسوة)", endingType: "مبني على السكون", notes: "Plural feminine command: 'Say (O women)' (e.g., {وَقُلْنَ قَوْلًا مَّعْرُوفًا})." }
      }
    },

    // 6. PASSIVE (المبني للمجهول)
    passive: {
      title: "المبني للمجهول (Passive Voice)",
      description: "Used when the speaker is omitted to direct attention entirely to the statement itself or the majesty of the speaker.",
      forms: {
        huwa_past: { pronoun: "هُوَ (ماضٍ)", word: "قِيلَ", phonetic: "Qīla", ending: "ـَ (فتحة)", endingType: "مبني على الفتح", notes: "Origin: قُوِلَ -> Kasrah on Waw shifted, causing Waw to become Ya: قِيلَ." },
        hum_past: { pronoun: "هُمْ (ماضٍ)", word: "قِيلُوا", phonetic: "Qīlū", ending: "ـُوا (ضم)", endingType: "مبني على الضم", notes: "Passive plural." },
        hiya_past: { pronoun: "هِيَ (ماضٍ)", word: "قِيلَتْ", phonetic: "Qīlat", ending: "ـَتْ (فتح)", endingType: "مبني على الفتح", notes: "Passive feminine singular." },
        hunna_past: { pronoun: "هُنَّ (ماضٍ)", word: "قِلْنَ", phonetic: "Qilna", ending: "ـْنَ (سكون)", endingType: "مبني على السكون", notes: "Ya dropped due to Sukun on Lam: Qilna." },
        huwa_pres: { pronoun: "هُوَ (مضارع)", word: "يُقَالُ", phonetic: "Yuqālu", ending: "ـُ (ضمة)", endingType: "مرفوع بالضمة", notes: "Origin: يُقْوَلُ -> Waw with Fatha becomes Alif: يُقَالُ ('It is said')." },
        hum_pres: { pronoun: "هُمْ (مضارع)", word: "يُقَالُونَ", phonetic: "Yuqālūna", ending: "ـُونَ (ثبوت النون)", endingType: "مرفوع بثبوت النون", notes: "Passive present plural." },
        hiya_pres: { pronoun: "هِيَ (مضارع)", word: "تُقَالُ", phonetic: "Tuqālu", ending: "ـُ (ضمة)", endingType: "مرفوع بالضمة", notes: "Passive present feminine singular." }
      }
    }
  },

  // 7. DERIVED FORMS (الأوزان المزيدة)
  derivedForms: [
    {
      form: "Form I (فَعَلَ)",
      arabicPattern: "قَالَ - يَقُولُ - قَوْلًا",
      meaning: "To say, to utter, to speak",
      quranExample: "قَالَ إِنِّي عَبْدُ اللَّهِ (Maryam: 30)",
      notes: "Base form, hollow wawi verb."
    },
    {
      form: "Form II (فَعَّلَ)",
      arabicPattern: "قَوَّلَ - يُقَوِّلُ - تَقْوِيلًا",
      meaning: "To put words in someone's mouth; falsely attribute speech",
      quranExample: "مُشْتَقّ مِنْهَا: تَقَوُّل",
      notes: "Causative / Intensive / Attributive. Doubling the weak Waw strengthens it into a full consonant (قوّل)."
    },
    {
      form: "Form IV (أَفْعَلَ)",
      arabicPattern: "أَقَالَ - يُقِيلُ - إِقَالَةً",
      meaning: "To annul, relieve, excuse a transaction/fault; to dismiss",
      quranExample: "الحديث: مَنْ أَقَالَ مُسْلِمًا أَقَالَهُ اللَّهُ عَثْرَتَهُ",
      notes: "The Masdar takes an ending Ta Marbuta (إِقَالَة) compensating for the deleted Waw."
    },
    {
      form: "Form V (تَفَعَّلَ)",
      arabicPattern: "تَقَوَّلَ - يَتَقَوَّلُ - تَقَوُّلًا",
      meaning: "To fabricate lies, forge speech, invent statements against someone",
      quranExample: "وَلَوْ تَقَوَّلَ عَلَيْنَا بَعْضَ الْأَقَاوِيلِ (Al-Haqqah: 44)",
      notes: "Reflexive of Form II. Conveys strenuous effort to forge words that were never spoken."
    },
    {
      form: "Form X (اسْتَفْعَلَ)",
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
      type: "Noun of Instrument / Extent",
      word: "مَقَال / مَقَالَة",
      plural: "مَقَالَات",
      meaning: "Article, essay, discourse, speech",
      quran: "فَصْلُ المَقَال"
    }
  ],

  // 9. AJWAF WEAK-LETTER MECHANICS
  ajwafMechanics: {
    title: "سر الفعل الأجوف: لماذا تختفي الواو؟",
    subtitle: "The Science of Hollow Verbs & The Meeting of Two Sukoons",
    steps: [
      {
        step: 1,
        title: "الأصل قبل الإعلال (The Original Root)",
        formula: "قَ + وَ + لَ = قَوَلَ",
        explanation: "Every Arabic trilateral root starts with 3 consonants. Here the root is (ق-و-ل). The past tense was originally 'QAWALA'."
      },
      {
        step: 2,
        title: "قلب الواو ألفاً (Waw Becomes Alif)",
        formula: "قَوَلَ  ⟶  قَالَ",
        explanation: "Arabic phonetic law: When a weak letter (Waw or Ya) has a vowel (متحرك) and is preceded by a Fatha, the mouth naturally smooths it into a long vowel Alif: QAWALA -> QĀLA."
      },
      {
        step: 3,
        title: "اتصال ضمائر الرفع المتحركة وسكون اللام",
        formula: "قَالَ + تُ (أنا)  ⟶  قَالْـتُ",
        explanation: "When you attach pronouns like (تُ، تَ، تِ، نا، نَ), the last root letter (اللام) MUST take a Sukun (مبني على السكون). So we get: Q-Ā-L-T-U."
      },
      {
        step: 4,
        title: "كارثة التقاء الساكنين! (Meeting of Two Sukoons)",
        formula: "قَ [اْ] + [لْ] + تُ",
        explanation: "Notice: The Alif is silent (سكون ميت), and the Lam is now silent (سكون حي). Arabic pronunciation strictly forbids two consecutive silent letters in one syllable!"
      },
      {
        step: 5,
        title: "التضحية بالضعيف والضمة الدالة (Resolution)",
        formula: "قَالْتُ  ⟶  قُلْتُ",
        explanation: "The weak Alif is deleted. To remind us that the deleted root letter was a Waw (و), the Qaf receives a Dammah! Result: قُلْتُ (Qultu) - perfect, smooth harmony!"
      }
    ]
  }
};
