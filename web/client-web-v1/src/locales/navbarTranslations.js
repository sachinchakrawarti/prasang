// src/locales/navbarTranslations.js
export const navbarTranslations = {
  en: {
    // Main navigation
    "Home": "Home",
    "Poems": "Poems",
    "Prose": "Prose",
    "Poets": "Poets",
    "Contributors": "Contributors",
    "About": "About",
    "Test Page": "Test Page",
    
    // Poems dropdown
    "All Poems": "All Poems",
    "Popular": "Popular",
    "New": "New",
    "Classics": "Classics",
    "Categories": "Categories",
    "Poem Types": "Poem Types",
    
    // Prose dropdown
    "All Prose": "All Prose",
    "Short Stories": "Short Stories",
    "Essays": "Essays",
    "Articles": "Articles",
    "Memoirs": "Memoirs",
    "Literary Criticism": "Literary Criticism",
    
    // Poets dropdown
    "All Poets": "All Poets",
    "Featured": "Featured",
    "New Poets": "New Poets",
    "Interviews": "Interviews",
    
    // Contributors dropdown
    "All Contributors": "All Contributors",
    "Translators": "Translators",
    "Scholars": "Scholars",
    "Editors": "Editors",
    "Commentators": "Commentators",
    
    // UI elements
    "Search": "Search poems, poets...",
    "Sign Up": "Sign Up",
    "Login": "Login",
    "Profile": "Profile",
    "Settings": "Settings",
    "Notifications": "Notifications",
    "Theme": "Theme",
    "Language": "Language",
    "AI Assistant": "AI Assistant",
    "AI Tools": "AI Tools",
    "Poem Generator": "Poem Generator",
    "Rhyme Finder": "Rhyme Finder",
    "Meter Analyzer": "Meter Analyzer",
    "Translation Assistant": "Translation Assistant",
    "Writing Prompts": "Writing Prompts",
    "Account": "Account",
    "Menu": "Menu"
  },
  hi: {
    // Main navigation
    "Home": "होम",
    "Poems": "कविताएँ",
    "Prose": "गद्य",
    "Poets": "कवि",
    "Contributors": "योगदानकर्ता",
    "About": "हमारे बारे में",
    "Test Page": "टेस्ट पेज",
    
    // Poems dropdown
    "All Poems": "सभी कविताएँ",
    "Popular": "लोकप्रिय",
    "New": "नई",
    "Classics": "क्लासिक्स",
    "Categories": "श्रेणियाँ",
    "Poem Types": "कविता के प्रकार",
    
    // Prose dropdown
    "All Prose": "सभी गद्य",
    "Short Stories": "लघु कथाएँ",
    "Essays": "निबंध",
    "Articles": "लेख",
    "Memoirs": "संस्मरण",
    "Literary Criticism": "साहित्यिक आलोचना",
    
    // Poets dropdown
    "All Poets": "सभी कवि",
    "Featured": "विशेष",
    "New Poets": "नए कवि",
    "Interviews": "साक्षात्कार",
    
    // Contributors dropdown
    "All Contributors": "सभी योगदानकर्ता",
    "Translators": "अनुवादक",
    "Scholars": "विद्वान",
    "Editors": "संपादक",
    "Commentators": "टीकाकार",
    
    // UI elements
    "Search": "कविताएँ, कवि खोजें...",
    "Sign Up": "साइन अप",
    "Login": "लॉग इन",
    "Profile": "प्रोफ़ाइल",
    "Settings": "सेटिंग्स",
    "Notifications": "सूचनाएँ",
    "Theme": "थीम",
    "Language": "भाषा",
    "AI Assistant": "एआई सहायक",
    "AI Tools": "एआई उपकरण",
    "Poem Generator": "कविता जनरेटर",
    "Rhyme Finder": "तुक खोजक",
    "Meter Analyzer": "छंद विश्लेषक",
    "Translation Assistant": "अनुवाद सहायक",
    "Writing Prompts": "लेखन संकेत",
    "Account": "खाता",
    "Menu": "मेनू"
  },
  ur: {
    // Main navigation
    "Home": "ہوم",
    "Poems": "شعری",
    "Prose": "نثر",
    "Poets": "شعرا",
    "Contributors": "تعاون کنندگان",
    "About": "تعارف",
    "Test Page": "ٹیسٹ صفحہ",
    
    // Poems dropdown
    "All Poems": "تمام شعری",
    "Popular": "مقبول",
    "New": "نئے",
    "Classics": "کلاسیکی",
    "Categories": "اقسام",
    "Poem Types": "شعری اقسام",
    
    // Prose dropdown
    "All Prose": "تمام نثر",
    "Short Stories": "افسانے",
    "Essays": "مقالے",
    "Articles": "مضامین",
    "Memoirs": "یاداشتیں",
    "Literary Criticism": "ادبی تنقید",
    
    // Poets dropdown
    "All Poets": "تمام شعرا",
    "Featured": "نمایاں",
    "New Poets": "نئے شعرا",
    "Interviews": "انٹرویوز",
    
    // Contributors dropdown
    "All Contributors": "تمام تعاون کنندگان",
    "Translators": "مترجمین",
    "Scholars": "علماء",
    "Editors": "مدیران",
    "Commentators": "مفسرین",
    
    // UI elements
    "Search": "شعری، شعرا تلاش کریں...",
    "Sign Up": "سائن اپ",
    "Login": "لاگ ان",
    "Profile": "پروفائل",
    "Settings": "ترتیبات",
    "Notifications": "اطلاعات",
    "Theme": "تھیم",
    "Language": "زبان",
    "AI Assistant": "اے آئی اسسٹنٹ",
    "AI Tools": "اے آئی ٹولز",
    "Poem Generator": "شعر جنریٹر",
    "Rhyme Finder": "قافیہ تلاش کریں",
    "Meter Analyzer": "وزن تجزیہ کار",
    "Translation Assistant": "ترجمہ معاون",
    "Writing Prompts": "تحریری اشارے",
    "Account": "اکاؤنٹ",
    "Menu": "مینو"
  }
};

// Helper function to get translated text
export const translate = (text, language) => {
  return navbarTranslations[language]?.[text] || text;
};