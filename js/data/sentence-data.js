/**
 * Sentence Construction Data Module
 * Progressive Tiers from Simple 2-Word sentences to Complex Quranic Constructions
 */

window.SENTENCE_DATA = {
  tiers: [
    {
      id: 1,
      title: "المستوى الأول: الجملة البسيطة (فعل + فاعل)",
      tierNameEn: "Tier 1: Simple (Verb + Subject)",
      description: "Build fundamental sentences combining the verb قَالَ with a subject (فَاعِل مرفوع بالضمة).",
      missions: [
        {
          id: "t1_m1",
          targetSentence: "قَالَ زَيْدٌ",
          english: "Zayd said",
          tokens: ["قَالَ", "زَيْدٌ", "زَيْدًا", "يَقُولُ"],
          solution: ["قَالَ", "زَيْدٌ"],
          explanation: "«قَالَ» فعل ماضٍ مبني على الفتح، و«زَيْدٌ» فاعل مرفوع بالضمة الظاهرة."
        },
        {
          id: "t1_m2",
          targetSentence: "قَالَتْ مَرْيَمُ",
          english: "Maryam said",
          tokens: ["قَالَتْ", "مَرْيَمُ", "قَالَ", "مَرْيَمَ"],
          solution: ["قَالَتْ", "مَرْيَمُ"],
          explanation: "«قَالَتْ» فعل ماضٍ بتاء التأنيث الساكنة لمطابقة الفاعل المؤنث «مَرْيَمُ» (فاعل مرفوع بالضمة)."
        },
        {
          id: "t1_m3",
          targetSentence: "يَقُولُ الْمُؤْمِنُ",
          english: "The believer says",
          tokens: ["يَقُولُ", "الْمُؤْمِنُ", "قَالَ", "الْمُؤْمِنَ"],
          solution: ["يَقُولُ", "الْمُؤْمِنُ"],
          explanation: "«يَقُولُ» فعل مضارع مرفوع بالضمة، و«الْمُؤْمِنُ» فاعل مرفوع بالضمة."
        },
        {
          id: "t1_m4",
          targetSentence: "قُلْتُ الْحَقَّ",
          english: "I said the truth",
          tokens: ["قُلْتُ", "الْحَقَّ", "قَالَ", "الْحَقُّ"],
          solution: ["قُلْتُ", "الْحَقَّ"],
          explanation: "«قُلْتُ» فعل ماضٍ مبني على السكون والتاء فاعل، و«الْحَقَّ» مفعول به منصوب بالفتحة."
        }
      ]
    },

    {
      id: 2,
      title: "المستوى الثاني: القول ومقول القول (فعل + فاعل + جملة القول)",
      tierNameEn: "Tier 2: Direct Speech (Verb + Speaker + Quote)",
      description: "Construct sentences featuring direct speech clauses (مقول القول في محل نصب مفعول به).",
      missions: [
        {
          id: "t2_m1",
          targetSentence: "قَالَ الْمُعَلِّمُ الْعِلْمُ نُورٌ",
          english: "The teacher said: Knowledge is light",
          tokens: ["قَالَ", "الْمُعَلِّمُ", "الْعِلْمُ", "نُورٌ", "قَالَتْ", "نُورًا"],
          solution: ["قَالَ", "الْمُعَلِّمُ", "الْعِلْمُ", "نُورٌ"],
          explanation: "«قَالَ» فعل، «الْمُعَلِّمُ» فاعل مرفوع، وجملة «الْعِلْمُ نُورٌ» (مبتدأ وخبر) مقول القول في محل نصب مفعول به."
        },
        {
          id: "t2_m2",
          targetSentence: "قَالَتِ الْأُمُّ الصِّدْقُ طُمَأْنِينَةٌ",
          english: "The mother said: Truthfulness is tranquility",
          tokens: ["قَالَتِ", "الْأُمُّ", "الصِّدْقُ", "طُمَأْنِينَةٌ", "قَالَ", "الصِّدْقَ"],
          solution: ["قَالَتِ", "الْأُمُّ", "الصِّدْقُ", "طُمَأْنِينَةٌ"],
          explanation: "«قَالَتِ» كُسرت التاء لالتقاء الساكنين مع لام التعريف، وجملة «الصِّدْقُ طُمَأْنِينَةٌ» مقول القول."
        },
        {
          id: "t2_m3",
          targetSentence: "يَقُولُ الْحَكِيمُ الصَّبْرُ مِفْتَاحُ الْفَرَجِ",
          english: "The wise one says: Patience is the key to relief",
          tokens: ["يَقُولُ", "الْحَكِيمُ", "الصَّبْرُ", "مِفْتَاحُ", "الْفَرَجِ", "قَالَ"],
          solution: ["يَقُولُ", "الْحَكِيمُ", "الصَّبْرُ", "مِفْتَاحُ", "الْفَرَجِ"],
          explanation: "مضارع مرفوع + فاعل + جملة اسمية مركبة من مبتدأ وخبر ومضاف إليه في محل نصب مقول القول."
        }
      ]
    },

    {
      id: 3,
      title: "المستوى الثالث: النفي والجزم والنصب (أدوات الإعراب مع قال)",
      tierNameEn: "Tier 3: Negation, Jussive & Subjunctive",
      description: "Master the shifts in vowels and weak letter deletion when using لَمْ, لَنْ, and لَا.",
      missions: [
        {
          id: "t3_m1",
          targetSentence: "لَمْ يَقُلْ زَيْدٌ كَذِبًا",
          english: "Zayd did not say a lie",
          tokens: ["لَمْ", "يَقُلْ", "زَيْدٌ", "كَذِبًا", "يَقُولُ", "كَذِبٌ"],
          solution: ["لَمْ", "يَقُلْ", "زَيْدٌ", "كَذِبًا"],
          explanation: "«لَمْ» حرف جزم، «يَقُلْ» مضارع مجزوم بالسكون وحذفت الواو لالتقاء الساكنين، «كَذِبًا» مفعول به منصوب."
        },
        {
          id: "t3_m2",
          targetSentence: "لَنْ نَقُولَ إِلَّا الْحَقَّ",
          english: "We will never say except the truth",
          tokens: ["لَنْ", "نَقُولَ", "إِلَّا", "الْحَقَّ", "نَقُولُ", "الْحَقُّ"],
          solution: ["لَنْ", "نَقُولَ", "إِلَّا", "الْحَقَّ"],
          explanation: "«لَنْ» حرف نصب، «نَقُولَ» مضارع منصوب بالفتحة الظاهرة على اللام، «الْحَقَّ» مفعول به منصوب بأسلوب الحصر."
        },
        {
          id: "t3_m3",
          targetSentence: "وَلَا تَقُل لَّهُمَا أُفٍّ",
          english: "And do not say to them [parents] 'uff'",
          tokens: ["وَلَا", "تَقُل", "لَّهُمَا", "أُفٍّ", "تَقُولُ", "تَقُولَا"],
          solution: ["وَلَا", "تَقُل", "لَّهُمَا", "أُفٍّ"],
          explanation: "«وَلَا» ناهية جازمة، «تَقُلْ» مضارع مجزوم بالسكون وحذفت الواو، و«لَّهُمَا» جار ومجرور."
        }
      ]
    },

    {
      id: 4,
      title: "المستوى الرابع: المبني للمجهول والنداء (قِيلَ + نائب الفاعل)",
      tierNameEn: "Tier 4: Passive Constructions & Directives",
      description: "Construct passive voice sentences where the speaker is elevated or concealed (قِيلَ / يُقَالُ).",
      missions: [
        {
          id: "t4_m1",
          targetSentence: "قِيلَ لَهُمُ ادْخُلُوا الْجَنَّةَ",
          english: "It was said to them: Enter Paradise",
          tokens: ["قِيلَ", "لَهُمُ", "ادْخُلُوا", "الْجَنَّةَ", "قَالَ", "الْجَنَّةُ"],
          solution: ["قِيلَ", "لَهُمُ", "ادْخُلُوا", "الْجَنَّةَ"],
          explanation: "«قِيلَ» فعل ماضٍ مبني للمجهول مبني على الفتح، وجملة «ادْخُلُوا الْجَنَّةَ» مقول القول في محل رفع نائب فاعل."
        },
        {
          id: "t4_m2",
          targetSentence: "يُقَالُ الْحَقُّ فِي كُلِّ مَكَانٍ",
          english: "The truth is spoken in every place",
          tokens: ["يُقَالُ", "الْحَقُّ", "فِي", "كُلِّ", "مَكَانٍ", "يَقُولُ", "الْحَقَّ"],
          solution: ["يُقَالُ", "الْحَقُّ", "فِي", "كُلِّ", "مَكَانٍ"],
          explanation: "«يُقَالُ» مضارع مبني للمجهول مرفوع بالضمة، «الْحَقُّ» نائب فاعل مرفوع بالضمة الظاهرة."
        },
        {
          id: "t4_m3",
          targetSentence: "وَقِيلَ يَا أَرْضُ ابْلَعِي مَاءَكِ",
          english: "And it was said: O earth, swallow your water",
          tokens: ["وَقِيلَ", "يَا", "أَرْضُ", "ابْلَعِي", "مَاءَكِ", "قَالَ", "أَرْضَ"],
          solution: ["وَقِيلَ", "يَا", "أَرْضُ", "ابْلَعِي", "مَاءَكِ"],
          explanation: "آية قرآنية عظيمة: ماضٍ مبني للمجهول وجملة النداء والأمر في محل رفع نائب فاعل."
        }
      ]
    },

    {
      id: 5,
      title: "المستوى الخامس: الإعجاز القرآني والتركيب المركب",
      tierNameEn: "Tier 5: Quranic Multi-Clause Mastery",
      description: "Reconstruct profound multi-clause Quranic dialogues and rhetorical masterworks.",
      missions: [
        {
          id: "t5_m1",
          targetSentence: "وَإِذْ قَالَ رَبُّكَ لِلْمَلَائِكَةِ إِنِّي جَاعِلٌ فِي الْأَرْضِ خَلِيفَةً",
          english: "And [mention] when your Lord said to the angels: Indeed, I will make upon the earth a successive authority",
          tokens: ["وَإِذْ", "قَالَ", "رَبُّكَ", "لِلْمَلَائِكَةِ", "إِنِّي", "جَاعِلٌ", "فِي", "الْأَرْضِ", "خَلِيفَةً", "قَالُوا"],
          solution: ["وَإِذْ", "قَالَ", "رَبُّكَ", "لِلْمَلَائِكَةِ", "إِنِّي", "جَاعِلٌ", "فِي", "الْأَرْضِ", "خَلِيفَةً"],
          explanation: "تركيب قرآني متكامل: ظرف زمان + فعل ماضٍ + فاعل مضاف + جار ومجرور + جملة مقول القول المؤكدة بإن مع اسم الفاعل العامل والمفعول به."
        },
        {
          id: "t5_m2",
          targetSentence: "قُلِ ادْعُوا اللَّهَ أَوِ ادْعُوا الرَّحْمَٰنَ",
          english: "Say: Call upon Allah or call upon the Most Merciful",
          tokens: ["قُلِ", "ادْعُوا", "اللَّهَ", "أَوِ", "ادْعُوا", "الرَّحْمَٰنَ", "قُلْ", "اللَّهُ"],
          solution: ["قُلِ", "ادْعُوا", "اللَّهَ", "أَوِ", "ادْعُوا", "الرَّحْمَٰنَ"],
          explanation: "فعل أمر حرك بالكسر لمنع التقاء الساكنين + جملة التخيير في مقول القول."
        },
        {
          id: "t5_m3",
          targetSentence: "وَقَالُوا لَوْ كُنَّا نَسْمَعُ أَوْ نَعْقِلُ مَا كُنَّا فِي أَصْحَابِ السَّعِيرِ",
          english: "And they said: If only we had been listening or reasoning, we would not be among the companions of the Blaze",
          tokens: ["وَقَالُوا", "لَوْ", "كُنَّا", "نَسْمَعُ", "أَوْ", "نَعْقِلُ", "مَا", "كُنَّا", "فِي", "أَصْحَابِ", "السَّعِيرِ", "قَالَ"],
          solution: ["وَقَالُوا", "لَوْ", "كُنَّا", "نَسْمَعُ", "أَوْ", "نَعْقِلُ", "مَا", "كُنَّا", "فِي", "أَصْحَابِ", "السَّعِيرِ"],
          explanation: "تركيب شرطي بلاغي عميق في مقول القول مبدوء بلو الامتناعية لبيان فوات الأوان والحسرة."
        }
      ]
    }
  ]
};
