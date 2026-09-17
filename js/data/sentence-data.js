/**
 * Sentence Construction Data Module
 * Progressive Tiers from Simple 2-Word sentences to Complex Quranic Constructions
 */

window.SENTENCE_DATA = {
  tiers: [
    {
      id: 1,
      title: "المستوى الأول: الجملة البسيطة (فعل + فاعل)",
      tierNameEn: "Level 1: Two-word sentences (Verb + Doer)",
      description: "Build short sentences combining the verb قَالَ with who is speaking.",
      missions: [
        {
          id: "t1_m1",
          targetSentence: "قَالَ زَيْدٌ",
          english: "Zayd said",
          tokens: ["قَالَ", "زَيْدٌ", "زَيْدًا", "يَقُولُ"],
          solution: ["قَالَ", "زَيْدٌ"],
          explanation: "«قَالَ» is a past verb ('he said'). «زَيْدٌ» is the doer (subject), marked with ḍammah / tanween ḍamm (-un)."
        },
        {
          id: "t1_m2",
          targetSentence: "قَالَتْ مَرْيَمُ",
          english: "Maryam said",
          tokens: ["قَالَتْ", "مَرْيَمُ", "قَالَ", "مَرْيَمَ"],
          solution: ["قَالَتْ", "مَرْيَمُ"],
          explanation: "«قَالَتْ» has a silent تْ because the speaker is female. «مَرْيَمُ» is the doer (subject)."
        },
        {
          id: "t1_m3",
          targetSentence: "يَقُولُ الْمُؤْمِنُ",
          english: "The believer says",
          tokens: ["يَقُولُ", "الْمُؤْمِنُ", "قَالَ", "الْمُؤْمِنَ"],
          solution: ["يَقُولُ", "الْمُؤْمِنُ"],
          explanation: "«يَقُولُ» is present tense ('he says'). «الْمُؤْمِنُ» is the doer (subject) with ḍammah."
        },
        {
          id: "t1_m4",
          targetSentence: "قُلْتُ الْحَقَّ",
          english: "I told the truth",
          tokens: ["قُلْتُ", "الْحَقَّ", "قَالَ", "الْحَقُّ"],
          solution: ["قُلْتُ", "الْحَقَّ"],
          explanation: "«قُلْتُ» means 'I said' (the ending ـتُ represents 'I'). «الْحَقَّ» is what was spoken (object), marked with fatḥah (-a)."
        }
      ]
    },

    {
      id: 2,
      title: "المستوى الثاني: القول ومقول القول (فعل + فاعل + جملة القول)",
      tierNameEn: "Level 2: Quoting what someone said",
      description: "Connect the verb and speaker with the direct quote.",
      missions: [
        {
          id: "t2_m1",
          targetSentence: "قَالَ الْمُعَلِّمُ الْعِلْمُ نُورٌ",
          english: "The teacher said: Knowledge is light",
          tokens: ["قَالَ", "الْمُعَلِّمُ", "الْعِلْمُ", "نُورٌ", "قَالَتْ", "نُورًا"],
          solution: ["قَالَ", "الْمُعَلِّمُ", "الْعِلْمُ", "نُورٌ"],
          explanation: "«قَالَ» is the verb, «الْمُعَلِّمُ» is the teacher (subject), and «الْعِلْمُ نُورٌ» ('Knowledge is light') is the quoted statement."
        },
        {
          id: "t2_m2",
          targetSentence: "قَالَتِ الْأُمُّ الصِّدْقُ طُمَأْنِينَةٌ",
          english: "The mother said: Truthfulness is tranquility",
          tokens: ["قَالَتِ", "الْأُمُّ", "الصِّدْقُ", "طُمَأْنِينَةٌ", "قَالَ", "الصِّدْقَ"],
          solution: ["قَالَتِ", "الْأُمُّ", "الصِّدْقُ", "طُمَأْنِينَةٌ"],
          explanation: "«قَالَتِ» takes a connecting kasrah to bridge into «الْأُمُّ». The quote is «الصِّدْقُ طُمَأْنِينَةٌ»."
        },
        {
          id: "t2_m3",
          targetSentence: "يَقُولُ الْحَكِيمُ الصَّبْرُ مِفْتَاحُ الْفَرَجِ",
          english: "The wise one says: Patience is the key to relief",
          tokens: ["يَقُولُ", "الْحَكِيمُ", "الصَّبْرُ", "مِفْتَاحُ", "الْفَرَجِ", "قَالَ"],
          solution: ["يَقُولُ", "الْحَكِيمُ", "الصَّبْرُ", "مِفْتَاحُ", "الْفَرَجِ"],
          explanation: "Present verb «يَقُولُ» + subject «الْحَكِيمُ» + the wisdom quote acting as the direct quote."
        }
      ]
    },

    {
      id: 3,
      title: "المستوى الثالث: النفي والجزم والنصب (أدوات الإعراب مع قال)",
      tierNameEn: "Level 3: Saying 'did not' and 'will not'",
      description: "Notice how particles like لَمْ (did not) and لَنْ (will not) change the verb ending and drop the middle letter.",
      missions: [
        {
          id: "t3_m1",
          targetSentence: "لَمْ يَقُلْ زَيْدٌ كَذِبًا",
          english: "Zayd did not tell a lie",
          tokens: ["لَمْ", "يَقُلْ", "زَيْدٌ", "كَذِبًا", "يَقُولُ", "كَذِبٌ"],
          solution: ["لَمْ", "يَقُلْ", "زَيْدٌ", "كَذِبًا"],
          explanation: "«لَمْ» gives the verb a sukūn ending: «يَقُلْ» (the middle و drops). «كَذِبًا» is the object with fatḥah."
        },
        {
          id: "t3_m2",
          targetSentence: "لَنْ نَقُولَ إِلَّا الْحَقَّ",
          english: "We will say nothing but the truth",
          tokens: ["لَنْ", "نَقُولَ", "إِلَّا", "الْحَقَّ", "نَقُولُ", "الْحَقُّ"],
          solution: ["لَنْ", "نَقُولَ", "إِلَّا", "الْحَقَّ"],
          explanation: "«لَنْ» gives the present verb a fatḥah ending: «نَقُولَ». «الْحَقَّ» is the object."
        },
        {
          id: "t3_m3",
          targetSentence: "وَلَا تَقُل لَّهُمَا أُفٍّ",
          english: "And do not say even 'uff' to them",
          tokens: ["وَلَا", "تَقُل", "لَّهُمَا", "أُفٍّ", "تَقُولُ", "تَقُولَا"],
          solution: ["وَلَا", "تَقُل", "لَّهُمَا", "أُفٍّ"],
          explanation: "Negative command: «وَلَا تَقُلْ» (Do not say!). The middle و drops before the sukūn on the Lam."
        }
      ]
    },

    {
      id: 4,
      title: "المستوى الرابع: المبني للمجهول والنداء (قِيلَ + نائب الفاعل)",
      tierNameEn: "Level 4: Passive sentences ('It was said')",
      description: "Practice sentences where the speaker is left unnamed (قِيلَ / يُقَالُ).",
      missions: [
        {
          id: "t4_m1",
          targetSentence: "قِيلَ لَهُمُ ادْخُلُوا الْجَنَّةَ",
          english: "It was said to them: Enter Paradise",
          tokens: ["قِيلَ", "لَهُمُ", "ادْخُلُوا", "الْجَنَّةَ", "قَالَ", "الْجَنَّةُ"],
          solution: ["قِيلَ", "لَهُمُ", "ادْخُلُوا", "الْجَنَّةَ"],
          explanation: "«قِيلَ» means 'it was said' (passive past). The quoted command «ادْخُلُوا الْجَنَّةَ» serves as the quote received."
        },
        {
          id: "t4_m2",
          targetSentence: "يُقَالُ الْحَقُّ فِي كُلِّ مَكَانٍ",
          english: "The truth is spoken in every place",
          tokens: ["يُقَالُ", "الْحَقُّ", "فِي", "كُلِّ", "مَكَانٍ", "يَقُولُ", "الْحَقَّ"],
          solution: ["يُقَالُ", "الْحَقُّ", "فِي", "كُلِّ", "مَكَانٍ"],
          explanation: "«يُقَالُ» means 'is said' (present passive). «الْحَقُّ» is the subject with ḍammah."
        },
        {
          id: "t4_m3",
          targetSentence: "وَقِيلَ يَا أَرْضُ ابْلَعِي مَاءَكِ",
          english: "And it was said: O earth, swallow your water",
          tokens: ["وَقِيلَ", "يَا", "أَرْضُ", "ابْلَعِي", "مَاءَكِ", "قَالَ", "أَرْضَ"],
          solution: ["وَقِيلَ", "يَا", "أَرْضُ", "ابْلَعِي", "مَاءَكِ"],
          explanation: "«وَقِيلَ» ('And it was said') opens the majestic divine command to the earth."
        }
      ]
    },

    {
      id: 5,
      title: "المستوى الخامس: الإعجاز القرآني والتركيب المركب",
      tierNameEn: "Level 5: Full Quranic sentences",
      description: "Reconstruct beautiful multi-part Quranic verses using قَالَ and its forms.",
      missions: [
        {
          id: "t5_m1",
          targetSentence: "وَإِذْ قَالَ رَبُّكَ لِلْمَلَائِكَةِ إِنِّي جَاعِلٌ فِي الْأَرْضِ خَلِيفَةً",
          english: "And [mention] when your Lord said to the angels: Indeed, I will make upon the earth a successive authority",
          tokens: ["وَإِذْ", "قَالَ", "رَبُّكَ", "لِلْمَلَائِكَةِ", "إِنِّي", "جَاعِلٌ", "فِي", "الْأَرْضِ", "خَلِيفَةً", "قَالُوا"],
          solution: ["وَإِذْ", "قَالَ", "رَبُّكَ", "لِلْمَلَائِكَةِ", "إِنِّي", "جَاعِلٌ", "فِي", "الْأَرْضِ", "خَلِيفَةً"],
          explanation: "Full sentence: Time marker «وَإِذْ» + past verb «قَالَ» + Lord «رَبُّكَ» + to the angels «لِلْمَلَائِكَةِ» + direct proclamation."
        },
        {
          id: "t5_m2",
          targetSentence: "قُلِ ادْعُوا اللَّهَ أَوِ ادْعُوا الرَّحْمَٰنَ",
          english: "Say: Call upon Allah or call upon the Most Merciful",
          tokens: ["قُلِ", "ادْعُوا", "اللَّهَ", "أَوِ", "ادْعُوا", "الرَّحْمَٰنَ", "قُلْ", "اللَّهُ"],
          solution: ["قُلِ", "ادْعُوا", "اللَّهَ", "أَوِ", "ادْعُوا", "الرَّحْمَٰنَ"],
          explanation: "«قُلِ» has a temporary connecting kasrah to smoothly connect with «ادْعُوا»."
        },
        {
          id: "t5_m3",
          targetSentence: "وَقَالُوا لَوْ كُنَّا نَسْمَعُ أَوْ نَعْقِلُ مَا كُنَّا فِي أَصْحَابِ السَّعِيرِ",
          english: "And they said: If only we had been listening or reasoning, we would not be among the companions of the Blaze",
          tokens: ["وَقَالُوا", "لَوْ", "كُنَّا", "نَسْمَعُ", "أَوْ", "نَعْقِلُ", "مَا", "كُنَّا", "فِي", "أَصْحَابِ", "السَّعِيرِ", "قَالَ"],
          solution: ["وَقَالُوا", "لَوْ", "كُنَّا", "نَسْمَعُ", "أَوْ", "نَعْقِلُ", "مَا", "كُنَّا", "فِي", "أَصْحَابِ", "السَّعِيرِ"],
          explanation: "«وَقَالُوا» ('And they said') with plural و + the expression of regret."
        }
      ]
    }
  ]
};
