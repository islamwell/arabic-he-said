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
          explanation: "«قَالَ» فعل ماضٍ مبني على الفتح، و«زَيْدٌ» فاعل مرفوع بالضمة الظاهرة.\n(Easy English: 'Qāla' is a past active verb built on Fatḥah ['a'], and 'Zaydun' is the subject / doer in nominative state with Ḍammah ['u'].)"
        },
        {
          id: "t1_m2",
          targetSentence: "قَالَتْ مَرْيَمُ",
          english: "Maryam said",
          tokens: ["قَالَتْ", "مَرْيَمُ", "قَالَ", "مَرْيَمَ"],
          solution: ["قَالَتْ", "مَرْيَمُ"],
          explanation: "«قَالَتْ» فعل ماضٍ بتاء التأنيث الساكنة لمطابقة الفاعل المؤنث «مَرْيَمُ» (فاعل مرفوع بالضمة).\n(Easy English: 'Qālat' is a past verb with silent feminine marker 't' to match female subject 'Maryam', who takes Ḍammah.)"
        },
        {
          id: "t1_m3",
          targetSentence: "يَقُولُ الْمُؤْمِنُ",
          english: "The believer says",
          tokens: ["يَقُولُ", "الْمُؤْمِنُ", "قَالَ", "الْمُؤْمِنَ"],
          solution: ["يَقُولُ", "الْمُؤْمِنُ"],
          explanation: "«يَقُولُ» فعل مضارع مرفوع بالضمة، و«الْمُؤْمِنُ» فاعل مرفوع بالضمة.\n(Easy English: 'Yaqūlu' is a present indicative verb with Ḍammah ['u'], and 'al-Mu'minu' [the believer] is the subject with Ḍammah.)"
        },
        {
          id: "t1_m4",
          targetSentence: "قُلْتُ الْحَقَّ",
          english: "I said the truth",
          tokens: ["قُلْتُ", "الْحَقَّ", "قَالَ", "الْحَقُّ"],
          solution: ["قُلْتُ", "الْحَقَّ"],
          explanation: "«قُلْتُ» فعل ماضٍ مبني على السكون والتاء فاعل، و«الْحَقَّ» مفعول به منصوب بالفتحة.\n(Easy English: 'Qultu' is a past verb built on Sukūn with 'tu' as 'I' subject, and 'al-Haqqa' [the truth] is the direct object with Fatḥah ['a'].)"
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
          explanation: "«قَالَ» فعل، «الْمُعَلِّمُ» فاعل مرفوع، وجملة «الْعِلْمُ نُورٌ» مقول القول في محل نصب مفعول به.\n(Easy English: 'Qāla' is the verb, 'al-Mu'allimu' is the subject with Ḍammah, and 'Knowledge is light' is the quoted speech acting as the direct object.)"
        },
        {
          id: "t2_m2",
          targetSentence: "قَالَتِ الْأُمُّ الصِّدْقُ طُمَأْنِينَةٌ",
          english: "The mother said: Truthfulness is tranquility",
          tokens: ["قَالَتِ", "الْأُمُّ", "الصِّدْقُ", "طُمَأْنِينَةٌ", "قَالَ", "الصِّدْقَ"],
          solution: ["قَالَتِ", "الْأُمُّ", "الصِّدْقُ", "طُمَأْنِينَةٌ"],
          explanation: "«قَالَتِ» كُسرت التاء لالتقاء الساكنين مع لام التعريف، وجملة «الصِّدْقُ طُمَأْنِينَةٌ» مقول القول.\n(Easy English: 'Qālati' uses connecting Kasrah to avoid silent consonant clash before 'al-Ummu', and 'Truthfulness is tranquility' is the direct quote object.)"
        },
        {
          id: "t2_m3",
          targetSentence: "يَقُولُ الْحَكِيمُ الصَّبْرُ مِفْتَاحُ الْفَرَجِ",
          english: "The wise one says: Patience is the key to relief",
          tokens: ["يَقُولُ", "الْحَكِيمُ", "الصَّبْرُ", "مِفْتَاحُ", "الْفَرَجِ", "قَالَ"],
          solution: ["يَقُولُ", "الْحَكِيمُ", "الصَّبْرُ", "مِفْتَاحُ", "الْفَرَجِ"],
          explanation: "مضارع مرفوع + فاعل + جملة اسمية في محل نصب مقول القول.\n(Easy English: Present indicative verb 'Yaqūlu' + subject 'al-Hakīmu' + noun clause acting as the direct quote object.)"
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
          explanation: "«لَمْ» حرف جزم، «يَقُلْ» مضارع مجزوم بالسكون وحذفت الواو لالتقاء الساكنين، «كَذِبًا» مفعول به منصوب.\n(Easy English: 'Lam' is a jussive particle making 'yaqul' end with Sukūn [middle Waw dropped], and 'kadhiban' is the direct object with Fatḥah.)"
        },
        {
          id: "t3_m2",
          targetSentence: "لَنْ نَقُولَ إِلَّا الْحَقَّ",
          english: "We will never say except the truth",
          tokens: ["لَنْ", "نَقُولَ", "إِلَّا", "الْحَقَّ", "نَقُولُ", "الْحَقُّ"],
          solution: ["لَنْ", "نَقُولَ", "إِلَّا", "الْحَقَّ"],
          explanation: "«لَنْ» حرف نصب، «نَقُولَ» مضارع منصوب بالفتحة الظاهرة، «الْحَقَّ» مفعول به منصوب.\n(Easy English: 'Lan' is a subjunctive particle causing 'naqūla' to end in Fatḥah ['a'], and 'al-Haqqa' [the truth] is the direct object with Fatḥah.)"
        },
        {
          id: "t3_m3",
          targetSentence: "وَلَا تَقُل لَّهُمَا أُفٍّ",
          english: "And do not say to them [parents] 'uff'",
          tokens: ["وَلَا", "تَقُل", "لَّهُمَا", "أُفٍّ", "تَقُولُ", "تَقُولَا"],
          solution: ["وَلَا", "تَقُل", "لَّهُمَا", "أُفٍّ"],
          explanation: "«وَلَا» ناهية جازمة، «تَقُلْ» مضارع مجزوم بالسكون وحذفت الواو، و«لَّهُمَا» جار ومجرور.\n(Easy English: 'Lā' is a prohibitive jussive particle giving 'taqul' a Sukūn and dropping the middle Waw; 'lahumā' is 'to them both'.)"
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
          explanation: "«قِيلَ» فعل ماضٍ مبني للمجهول مبني على الفتح، وجملة «ادْخُلُوا الْجَنَّةَ» مقول القول في محل رفع نائب فاعل.\n(Easy English: 'Qīla' is a past passive verb ['it was said'] built on Fatḥah, and 'Enter Paradise' is the quoted speech acting as the deputy subject.)"
        },
        {
          id: "t4_m2",
          targetSentence: "يُقَالُ الْحَقُّ فِي كُلِّ مَكَانٍ",
          english: "The truth is spoken in every place",
          tokens: ["يُقَالُ", "الْحَقُّ", "فِي", "كُلِّ", "مَكَانٍ", "يَقُولُ", "الْحَقَّ"],
          solution: ["يُقَالُ", "الْحَقُّ", "فِي", "كُلِّ", "مَكَانٍ"],
          explanation: "«يُقَالُ» مضارع مبني للمجهول مرفوع بالضمة، «الْحَقُّ» نائب فاعل مرفوع بالضمة الظاهرة.\n(Easy English: 'Yuqālu' is a present passive verb ['is said'] with Ḍammah, and 'al-Haqqu' [the truth] is the deputy subject in nominative state with Ḍammah.)"
        },
        {
          id: "t4_m3",
          targetSentence: "وَقِيلَ يَا أَرْضُ ابْلَعِي مَاءَكِ",
          english: "And it was said: O earth, swallow your water",
          tokens: ["وَقِيلَ", "يَا", "أَرْضُ", "ابْلَعِي", "مَاءَكِ", "قَالَ", "أَرْضَ"],
          solution: ["وَقِيلَ", "يَا", "أَرْضُ", "ابْلَعِي", "مَاءَكِ"],
          explanation: "«وَقِيلَ» ماضٍ مبني للمجهول، وجملة النداء والأمر «يَا أَرْضُ ابْلَعِي مَاءَكِ» في محل رفع نائب فاعل.\n(Easy English: 'Wa-qīla' is a past passive verb ['And it was said'], and the divine command clause functions as the deputy subject.)"
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
          explanation: "تركيب قرآني: ظرف زمان + فعل ماضٍ + فاعل مضاف + جار ومجرور + جملة مقول القول المؤكدة بإن.\n(Easy English: Multi-clause Quranic structure: Time particle + past verb 'Qāla' + subject 'Rabbuka' + prepositional phrase + direct quote object clause.)"
        },
        {
          id: "t5_m2",
          targetSentence: "قُلِ ادْعُوا اللَّهَ أَوِ ادْعُوا الرَّحْمَٰنَ",
          english: "Say: Call upon Allah or call upon the Most Merciful",
          tokens: ["قُلِ", "ادْعُوا", "اللَّهَ", "أَوِ", "ادْعُوا", "الرَّحْمَٰنَ", "قُلْ", "اللَّهُ"],
          solution: ["قُلِ", "ادْعُوا", "اللَّهَ", "أَوِ", "ادْعُوا", "الرَّحْمَٰنَ"],
          explanation: "«قُلِ» فعل أمر حُرّك بالكسر لمنع التقاء الساكنين + جملة التخيير في مقول القول في محل نصب.\n(Easy English: 'Quli' is a command verb shifted to Kasrah to connect with silent consonant + direct quote clause acting as direct object.)"
        },
        {
          id: "t5_m3",
          targetSentence: "وَقَالُوا لَوْ كُنَّا نَسْمَعُ أَوْ نَعْقِلُ مَا كُنَّا فِي أَصْحَابِ السَّعِيرِ",
          english: "And they said: If only we had been listening or reasoning, we would not be among the companions of the Blaze",
          tokens: ["وَقَالُوا", "لَوْ", "كُنَّا", "نَسْمَعُ", "أَوْ", "نَعْقِلُ", "مَا", "كُنَّا", "فِي", "أَصْحَابِ", "السَّعِيرِ", "قَالَ"],
          solution: ["وَقَالُوا", "لَوْ", "كُنَّا", "نَسْمَعُ", "أَوْ", "نَعْقِلُ", "مَا", "كُنَّا", "فِي", "أَصْحَابِ", "السَّعِيرِ"],
          explanation: "«وَقَالُوا» ماضٍ مبني على الضم مع واو الجماعة + تركيب شرطي في مقول القول لبيان الندم.\n(Easy English: 'Wa-qālū' is a past verb built on Ḍammah with plural Waw + conditional regret clause functioning as the direct quote object.)"
        }
      ]
    }
  ]
};
