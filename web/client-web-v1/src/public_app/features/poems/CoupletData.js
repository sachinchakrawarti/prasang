// src/public_app/features/poems/CoupletData.js

export const coupletsData = [
  // Hindi Couplets (Doha)
  {
    id: "hindi-kabir-1",
    type: "couplet",
    form: "Doha",
    language: "Hindi",
    script: "Devanagari",
    poet: {
      name: "Kabir Das",
      era: "15th Century",
      region: "India",
      bio: "Mystical poet and saint of India, whose writings influenced the Bhakti movement."
    },
    original: {
      text: "बुरा जो देखन मैं चला, बुरा न मिलिया कोय।\nजो दिल खोजा आपना, मुझसे बुरा न कोय।।",
      romanization: "Bura jo dekhan main chala, bura na miliya koy.\nJo dil khoja aapna, mujhse bura na koy."
    },
    year: "15th century",
    themes: ["Self-reflection", "Humility", "Wisdom"],
    aiTranslations: {
      english: "I went looking for evil, but found none.\nWhen I searched my own heart, there was none worse than me.",
      urdu: "میں برائی ڈھونڈنے نکلا، برائی کوئی نہ ملی۔\nجب میں نے اپنے دل کو دیکھا، مجھ سے برا کوئی نہ تھا۔",
      arabic: "ذهبت أبحث عن الشر، فلم أجد شرًا.\nعندما فتشت في قلبي، لم أجد أسوأ مني.",
      persian: "رفتم به دنبال بدی، بدی نیافتم هیچ.\nچون دل خود را جستم، از من بدتر نبود هیچ.",
      french: "Je suis allé chercher le mal, mais n'en ai trouvé aucun.\nQuand j'ai cherché dans mon propre cœur, il n'y avait pire que moi."
    }
  },
  {
    id: "hindi-kabir-2",
    type: "couplet",
    form: "Doha",
    language: "Hindi",
    script: "Devanagari",
    poet: {
      name: "Kabir Das",
      era: "15th Century",
      region: "India"
    },
    original: {
      text: "माटी कहे कुम्हार से, तू क्या रौंदे मोहे।\nएक दिन ऐसा आएगा, मैं रौंदूंगा तोहे।।",
      romanization: "Mati kahe kumhar se, tu kya ronde mohe.\nEk din aisa aayega, main rondunga tohe."
    },
    year: "15th century",
    themes: ["Humility", "Death", "Equality"],
    aiTranslations: {
      english: "The clay says to the potter, 'Why do you trample me?\nOne day will come when I will trample you.'",
      urdu: "مٹی کہتی ہے کمہار سے، تو کیوں مجھے روندتا ہے؟\nایک دن ایسا آئے گا، میں تجھے روندوں گا۔",
      arabic: "يقول الطين للخزاف: لماذا تدوسني؟\nسيأتي يوم وأنا أدوسك.",
      persian: "گل به کوزه‌گر گوید: چرا مرا می‌فشاری؟\nروزی خواهد آمد که من تو را فشارم.",
      french: "L'argile dit au potier: 'Pourquoi me foules-tu?\nUn jour viendra où je te foulerai.'"
    }
  },
  {
    id: "hindi-rahim-1",
    type: "couplet",
    form: "Doha",
    language: "Hindi",
    script: "Devanagari",
    poet: {
      name: "Rahim",
      era: "16th Century",
      region: "India",
      bio: "Court poet in Mughal Emperor Akbar's court, known for his dohas on ethics and life."
    },
    original: {
      text: "रहिमन पानी राखिये, बिन पानी सब सून।\nपानी गए न ऊबरे, मोती मानुष चून।।",
      romanization: "Rahiman pani rakhiye, bin pani sab soon.\nPani gaye na ubare, moti manush choon."
    },
    year: "16th century",
    themes: ["Water", "Life", "Essence"],
    aiTranslations: {
      english: "Rahim says, keep water (dignity), without water all is empty.\nWithout water, nothing survives - pearls, humans, or flour.",
      urdu: "رحیم کہتے ہیں، پانی (عزت) رکھو، پانی کے بغیر سب خالی۔\nپانی کے بغیر کچھ نہیں بچتا - موتی، انسان یا آٹا۔",
      arabic: "يقول رحيم، حافظ على الماء (الكرامة)، بدون الماء كل شيء فارغ.\nبدون الماء لا يبقى شيء - اللؤلؤ، الإنسان أو الدقيق.",
      persian: "رحیم گوید، آب (حرمت) را نگه دار، بی آب همه تهی است.\nبی آب هیچ نماند - مروارید، آدمی یا آرد.",
      french: "Rahim dit, garde l'eau (la dignité), sans eau tout est vide.\nSans eau, rien ne survit - les perles, les humains ou la farine."
    }
  },

  // Urdu Couplets (Sher)
  {
    id: "urdu-ghalib-1",
    type: "couplet",
    form: "Sher",
    language: "Urdu",
    script: "Arabic (Nastaliq)",
    poet: {
      name: "Mirza Ghalib",
      era: "19th Century",
      region: "India",
      bio: "One of the most influential Urdu and Persian poets of the Mughal era."
    },
    original: {
      text: "हज़ारों ख्वाहिशें ऐसी कि हर ख्वाहिश पे दम निकले\nबहुत निकले मेरे अरमान लेकिन फिर भी कम निकले",
      urduText: "ہزاروں خواہشیں ایسی کہ ہر خواہش پہ دم نکلے\nبہت نکلے میرے ارمان لیکن پھر بھی کم نکلے",
      romanization: "Hazaaron khwahishein aisi ke har khwahish pe dam nikle\nBahut nikle mere armaan lekin phir bhi kam nikle"
    },
    year: "19th century",
    themes: ["Desire", "Longing", "Unfulfilled dreams"],
    aiTranslations: {
      english: "Thousands of desires, each worth dying for,\nMany of my wishes were fulfilled, but still not enough.",
      hindi: "हज़ारों ख्वाहिशें ऐसी कि हर ख्वाहिश पे दम निकले,\nबहुत निकले मेरे अरमान लेकिन फिर भी कम निकले।",
      arabic: "آلاف الرغبات، كل منها يستحق الموت من أجلها،\nالكثير من أمنياتي تحققت، ولكن لا يزال غير كاف.",
      persian: "هزاران آرزو چنان کز هر آرزویی جان رود\nبسیار برآمد آرزوهایم ولی باز هم کم بود",
      french: "Des milliers de désirs, chacun valant la peine de mourir pour,\nBeaucoup de mes souhaits ont été exaucés, mais pas encore assez."
    }
  },
  {
    id: "urdu-faiz-1",
    type: "couplet",
    form: "Sher",
    language: "Urdu",
    script: "Arabic (Nastaliq)",
    poet: {
      name: "Faiz Ahmed Faiz",
      era: "20th Century",
      region: "Pakistan",
      bio: "Nobel Prize-nominated Urdu poet known for his revolutionary and romantic poetry."
    },
    original: {
      text: "मुझ से पहली सी मुहब्बत मेरे महबूब न माँग\nमैं ने समझा था के तू है तो दरख्शाँ है हयात",
      urduText: "مجھ سے پہلی سی محبت میرے محبوب نہ مانگ\nمیں نے سمجھا تھا کہ تو ہے تو درخشاں ہے حیات",
      romanization: "Mujh se pehli si mohabbat mere mehboob na maang\nMain ne samjha tha ke tu hai to darakhshan hai hayat"
    },
    year: "20th century",
    themes: ["Love", "Change", "Loss"],
    aiTranslations: {
      english: "Do not ask me for that same love again, my beloved\nI had thought that if you exist, life is radiant.",
      hindi: "मुझ से पहली सी मुहब्बत मेरे महबूब न माँग\nमैंने समझा था कि तू है तो दरख़्शाँ है हयात।",
      arabic: "لا تطلب مني ذلك الحب القديم مرة أخرى، يا حبيبي\nظننت أنك إن وجدت فالحياة مشرقة.",
      persian: "از من آن عشق نخستین مخواه ای معشوق من\nپنداشتم که تویی و زندگی تابان است",
      french: "Ne me demande plus cet amour d'antan, mon aimé\nJe croyais que si tu existais, la vie était radieuse."
    }
  },

  // Japanese Couplets (from Haiku/Tanka)
  {
    id: "japanese-basho-1",
    type: "couplet",
    form: "Haiku excerpt",
    language: "Japanese",
    script: "Kanji/Kana",
    poet: {
      name: "Matsuo Bashō",
      era: "17th Century",
      region: "Japan",
      bio: "The most famous poet of the Edo period in Japan, master of haiku."
    },
    original: {
      text: "古池や\n蛙飛びこむ\n水の音",
      romanization: "Furu ike ya\nkawazu tobikomu\nmizu no oto"
    },
    year: "1686",
    themes: ["Nature", "Stillness", "Sound"],
    aiTranslations: {
      english: "Old pond,\na frog jumps in —\nsound of water.",
      hindi: "पुराना तालाब,\nमेंढक कूदता है —\nपानी की आवाज़।",
      urdu: "پرانا تالاب،\nمیں مینڈک کودتا ہے —\nپانی کی آواز۔",
      arabic: "بركة قديمة،\nضفدع يقفز —\nصوت الماء.",
      french: "Vieux étang,\nune grenouille saute —\nle bruit de l'eau."
    }
  },
  {
    id: "japanese-basho-2",
    type: "couplet",
    form: "Haiku excerpt",
    language: "Japanese",
    script: "Kanji/Kana",
    poet: {
      name: "Matsuo Bashō",
      era: "17th Century",
      region: "Japan"
    },
    original: {
      text: "旅に病んで\n夢は枯野を\nかけ廻る",
      romanization: "Tabi ni yande\nyume wa kareno wo\nkake meguru"
    },
    year: "1694",
    themes: ["Travel", "Illness", "Dreams"],
    aiTranslations: {
      english: "Sick on a journey,\nmy dreams wander\nover a withered field.",
      hindi: "यात्रा में बीमार,\nमेरे सपने भटकते हैं\nसूखे मैदान पर।",
      urdu: "سفر میں بیمار،\nمیرے خواب گھومتے ہیں\nایک سوکھے میدان پر۔",
      arabic: "مريض في رحلة،\nأحلامي تتجول\nفوق حقل يابس.",
      french: "Malade en voyage,\nmes rêves errent\nsur un champ desséché."
    }
  },
  {
    id: "japanese-issho-1",
    type: "couplet",
    form: "Senryu",
    language: "Japanese",
    script: "Kanji/Kana",
    poet: {
      name: "Kobayashi Issa",
      era: "19th Century",
      region: "Japan",
      bio: "Known for his haiku expressing empathy for the small creatures of the world."
    },
    original: {
      text: "やせ蛙\n負けるな一茶\nこれにあり",
      romanization: "Yase gaeru\nmakeruna Issa\nkoko ni ari"
    },
    year: "19th century",
    themes: ["Perseverance", "Empathy", "Struggle"],
    aiTranslations: {
      english: "Skinny frog,\ndon't lose! — Issa\nis here.",
      hindi: "दुबला मेंढक,\nहार मत मानो! — इशा\nयहाँ है।",
      urdu: "دبلا مینڈک،\nہار مت مانو! — عیسیٰ\nیہاں ہے۔",
      arabic: "أيها الضفدع النحيل،\nلا تستسلم! — عيسى\nهنا.",
      french: "Grenouille maigre,\nne perds pas! — Issa\nest là."
    }
  },

  // Arabic Couplets
  {
    id: "arabic-mutanabbi-1",
    type: "couplet",
    form: "Qasida excerpt",
    language: "Arabic",
    script: "Arabic",
    poet: {
      name: "Al-Mutanabbi",
      era: "10th Century",
      region: "Iraq",
      bio: "Considered one of the greatest poets in the Arabic language."
    },
    original: {
      text: "الخيل والليل والبيداء تعرفني\nوالسيف والرمح والقرطاس والقلم",
      romanization: "Al-khaylu wal-laylu wal-bayda'u ta'rifuni\nWas-sayfu war-rumhu wal-qirtasu wal-qalam"
    },
    year: "10th century",
    themes: ["Pride", "Poetry", "Warrior spirit"],
    aiTranslations: {
      english: "The horse, the night, and the desert know me,\nAs do the sword, the spear, the paper, and the pen.",
      hindi: "घोड़ा, रात और रेगिस्तान मुझे जानते हैं,\nजैसे तलवार, भाला, कागज़ और कलम।",
      urdu: "گھوڑا، رات اور صحرا مجھے جانتے ہیں،\nجیسے تلوار، نیزہ، کاغذ اور قلم۔",
      persian: "اسب و شب و بیابان مرا می‌شناسند\nچو شمشیر و سنان و کاغذ و قلم",
      french: "Le cheval, la nuit et le désert me connaissent,\nAinsi que l'épée, la lance, le papier et la plume."
    }
  },
  {
    id: "arabic-rumi-1",
    type: "couplet",
    form: "Mathnawi excerpt",
    language: "Arabic",
    script: "Arabic",
    poet: {
      name: "Jalal al-Din Rumi",
      era: "13th Century",
      region: "Persia",
      bio: "Persian poet and Sufi mystic, one of the most widely read poets in the world."
    },
    original: {
      text: "بشنو از نی چون حکایت می‌کند\nاز جدایی‌ها شکایت می‌کند",
      romanization: "Bishnav az nay chun hikayat mi-kunad\nAz juda'i-ha shikayat mi-kunad"
    },
    year: "13th century",
    themes: ["Separation", "Longing", "Spiritual journey"],
    aiTranslations: {
      english: "Listen to the reed how it tells a tale,\nComplaining of separations.",
      hindi: "सुनो बांसुरी कैसे कहानी कहती है,\nजुदाई की शिकायत करती है।",
      urdu: "سنو نی کیسے قصہ بیان کرتی ہے،\nجدائیوں کی شکایت کرتی ہے۔",
      persian: "بشنو از نی چون حکایت می‌کند\nاز جدایی‌ها شکایت می‌کند",
      french: "Écoute le roseau comment il conte une histoire,\nSe plaignant des séparations."
    }
  },

  // Persian Couplets
  {
    id: "persian-hafez-1",
    type: "couplet",
    form: "Ghazal",
    language: "Persian",
    script: "Arabic (Persian)",
    poet: {
      name: "Hafez",
      era: "14th Century",
      region: "Iran",
      bio: "Persian poet whose collected works are a pinnacle of Persian literature."
    },
    original: {
      text: "اگر آن ترک شیرازی به دست آرد دل ما را\nبه خال هندی‌اش بخشم سمرقند و بخارا را",
      romanization: "Agar an tork-e shirazi be dast arad del-e ma ra\nBe khal-e hendu-yash bakhsham samarqand o bokhara ra"
    },
    year: "14th century",
    themes: ["Love", "Sacrifice", "Beauty"],
    aiTranslations: {
      english: "If that Shirazi Turk would take my heart in hand,\nFor his Hindu mole I would give Samarkand and Bukhara.",
      hindi: "अगर वह शिराज़ी तुर्क मेरा दिल हाथ में ले ले,\nउसके हिंदू तिल के लिए मैं समरकंद और बुखारा दे दूं।",
      urdu: "اگر وہ شیرازی ترک میرے دل کو ہاتھ میں لے لے،\nاس کے ہندو تل کے لیے میں سمرقند و بخارا دے دوں۔",
      arabic: "إذا أخذ ذلك التركي الشيرازي قلبي في يده،\nلشامة هندوسيه أعطي سمرقند وبخارى.",
      french: "Si ce Turc de Shiraz prenait mon cœur en main,\nPour sa tache hindoue je donnerais Samarcande et Boukhara."
    }
  },
  {
    id: "persian-khayyam-1",
    type: "couplet",
    form: "Rubai",
    language: "Persian",
    script: "Arabic (Persian)",
    poet: {
      name: "Omar Khayyam",
      era: "12th Century",
      region: "Iran",
      bio: "Persian polymath, philosopher, and poet known for his rubaiyat (quatrains)."
    },
    original: {
      text: "ای دوست بیا تا غم فردا نخوریم\nوین یکدم عمر را غنیمت شمریم",
      romanization: "Ey dust, biya ta gham-e farda nakhorim\nVin yekdam-e omr ra ghanimat shomarim"
    },
    year: "12th century",
    themes: ["Carpe diem", "Present moment", "Friendship"],
    aiTranslations: {
      english: "O friend, come, let us not worry about tomorrow's sorrow,\nAnd count this single moment of life as a treasure.",
      hindi: "ऐ दोस्त, आओ कल के ग़म की चिंता न करें,\nऔर जीवन के इस एक पल को ख़ज़ाना समझें।",
      urdu: "اے دوست، آؤ کل کے غم کی فکر نہ کریں،\nاور زندگی کے اس ایک پل کو خزانہ سمجھیں۔",
      arabic: "أيها الصديق، تعال لا نقلق على حزن الغد،\nونعد هذه اللحظة الوحيدة من العمر كنزًا.",
      french: "Ô ami, viens, ne nous soucions pas du chagrin de demain,\nEt comptons ce seul moment de vie comme un trésor."
    }
  },

  // French Couplets
  {
    id: "french-hugo-1",
    type: "couplet",
    form: "Alexandrine",
    language: "French",
    script: "Latin",
    poet: {
      name: "Victor Hugo",
      era: "19th Century",
      region: "France",
      bio: "One of France's greatest poets and novelists, leader of the Romantic movement."
    },
    original: {
      text: "Ceux qui vivent, ce sont ceux qui luttent ; ce sont\nCeux dont un dessein ferme emplit l'âme et le front.",
      romanization: "Ceux qui vivent, ce sont ceux qui luttent ; ce sont\nCeux dont un dessein ferme emplit l'âme et le front."
    },
    year: "19th century",
    themes: ["Struggle", "Purpose", "Life"],
    aiTranslations: {
      english: "Those who live are those who fight; they are\nThose whose firm purpose fills the soul and brow.",
      hindi: "जो जीते हैं वे वही हैं जो लड़ते हैं; वे हैं\nजिनका दृढ़ उद्देश्य आत्मा और माथे को भर देता है।",
      urdu: "جو جیتے ہیں وہ وہی ہیں جو لڑتے ہیں؛ وہ ہیں\nجن کا پختہ مقصد روح اور پیشانی کو بھر دیتا ہے۔",
      arabic: "الذين يعيشون هم الذين يقاتلون؛ هم\nالذين يملأ الهدف الثابت الروح والجبهة.",
      persian: "آنان که زندگی می‌کنند آنان که می‌جنگند؛ آنانند\nکه هدف استوارشان جان و پیشانی را پر می‌کند."
    }
  },
  {
    id: "french-baudelaire-1",
    type: "couplet",
    form: "Alexandrine",
    language: "French",
    script: "Latin",
    poet: {
      name: "Charles Baudelaire",
      era: "19th Century",
      region: "France",
      bio: "Poet and critic, pioneer of symbolism and modern poetry."
    },
    original: {
      text: "Là, tout n'est qu'ordre et beauté,\nLuxe, calme et volupté.",
      romanization: "Là, tout n'est qu'ordre et beauté,\nLuxe, calme et volupté."
    },
    year: "1857",
    themes: ["Beauty", "Order", "Pleasure"],
    aiTranslations: {
      english: "There, all is order and beauty,\nLuxury, calm, and pleasure.",
      hindi: "वहाँ, सब कुछ क्रम और सुंदरता है,\nविलास, शांति और आनंद।",
      urdu: "وہاں، سب کچھ ترتیب اور خوبصورتی ہے،\nعیش، سکون اور لذت۔",
      arabic: "هناك، كل شيء نظام وجمال،\nترف، هدوء ولذة.",
      persian: "آنجا، همه نظم و زیبایی است،\nتجمل، آرامش و لذت."
    }
  }
];

// Helper function to get couplets by language
export const getCoupletsByLanguage = (language) => {
  return coupletsData.filter(couplet => 
    couplet.language.toLowerCase() === language.toLowerCase()
  );
};

// Helper function to get couplet by ID
export const getCoupletById = (id) => {
  return coupletsData.find(couplet => couplet.id === id);
};

// Helper function to get all unique poets
export const getAllPoets = () => {
  const poets = coupletsData.map(c => c.poet);
  const uniquePoets = poets.filter((poet, index, self) =>
    index === self.findIndex(p => p.name === poet.name)
  );
  return uniquePoets;
};

// Helper function to get couplets by poet
export const getCoupletsByPoet = (poetName) => {
  return coupletsData.filter(couplet => 
    couplet.poet.name.toLowerCase().includes(poetName.toLowerCase())
  );
};