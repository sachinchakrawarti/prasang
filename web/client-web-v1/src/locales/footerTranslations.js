// src/locales/footerTranslations.js

export const footerTranslations = {
  en: {
    // Brand section
    "brandDescription": "A sanctuary for poets and poetry lovers to connect, share, and inspire. Where words dance on paper and emotions find their voice.",
    
    // Quick Links
    "quickLinks": "Quick Links",
    "home": "Home",
    "poems": "Poems",
    "poets": "Poets",
    "poetryForms": "Poetry Forms",
    "about": "About",
    
    // Resources
    "resources": "Resources",
    "writingTips": "Writing Tips",
    "poetryGlossary": "Poetry Glossary",
    "famousPoets": "Famous Poets",
    "contests": "Contests",
    "workshops": "Workshops",
    
    // Contact
    "getInTouch": "Get in Touch",
    "subscribe": "Subscribe to our newsletter",
    "yourEmail": "Your email",
    "subscribeBtn": "Subscribe",
    
    // Bottom bar
    "allRightsReserved": "All rights reserved",
    "privacy": "Privacy",
    "terms": "Terms",
    "sitemap": "Sitemap",
    "madeWith": "Made with",
    "for": "for",
    "poetryLovers": "poetry lovers",
    "languages": "languages",
    "backToTop": "Back to top",
  },
  hi: {
    // Brand section
    "brandDescription": "कवियों और कविता प्रेमियों के लिए जुड़ने, साझा करने और प्रेरित होने का स्थान। जहाँ शब्द कागज पर नाचते हैं और भावनाएँ अपनी आवाज़ पाती हैं।",
    
    // Quick Links
    "quickLinks": "त्वरित लिंक",
    "home": "होम",
    "poems": "कविताएँ",
    "poets": "कवि",
    "poetryForms": "कविता के प्रकार",
    "about": "हमारे बारे में",
    
    // Resources
    "resources": "संसाधन",
    "writingTips": "लेखन युक्तियाँ",
    "poetryGlossary": "कविता शब्दकोश",
    "famousPoets": "प्रसिद्ध कवि",
    "contests": "प्रतियोगिताएँ",
    "workshops": "कार्यशालाएँ",
    
    // Contact
    "getInTouch": "संपर्क करें",
    "subscribe": "हमारे न्यूज़लेटर की सदस्यता लें",
    "yourEmail": "आपका ईमेल",
    "subscribeBtn": "सदस्यता लें",
    
    // Bottom bar
    "allRightsReserved": "सर्वाधिकार सुरक्षित",
    "privacy": "गोपनीयता",
    "terms": "शर्तें",
    "sitemap": "साइटमैप",
    "madeWith": "के साथ बनाया गया",
    "for": "के लिए",
    "poetryLovers": "कविता प्रेमियों",
    "languages": "भाषाएँ",
    "backToTop": "ऊपर जाएं",
  },
  ur: {
    // Brand section
    "brandDescription": "شاعروں اور شاعری سے محبت کرنے والوں کے لیے جڑنے، اشتراک کرنے اور متاثر ہونے کی جگہ۔ جہاں الفاظ کاغذ پر رقص کرتے ہیں اور جذبات اپنی آواز پاتے ہیں۔",
    
    // Quick Links
    "quickLinks": "فوری روابط",
    "home": "ہوم",
    "poems": "شعری",
    "poets": "شعرا",
    "poetryForms": "شعری اقسام",
    "about": "تعارف",
    
    // Resources
    "resources": "وسائل",
    "writingTips": "تحریری نکات",
    "poetryGlossary": "شاعری کی لغت",
    "famousPoets": "مشہور شعرا",
    "contests": "مقابلے",
    "workshops": "ورکشاپس",
    
    // Contact
    "getInTouch": "رابطہ کریں",
    "subscribe": "نیوز لیٹر کے لیے سبسکرائب کریں",
    "yourEmail": "آپ کا ای میل",
    "subscribeBtn": "سبسکرائب",
    
    // Bottom bar
    "allRightsReserved": "جملہ حقوق محفوظ ہیں",
    "privacy": "پرائیویسی",
    "terms": "شرائط",
    "sitemap": "سائٹ میپ",
    "madeWith": "کے ساتھ بنایا گیا",
    "for": "کے لیے",
    "poetryLovers": "شاعری سے محبت کرنے والوں",
    "languages": "زبانیں",
    "backToTop": "اوپر جائیں",
  }
};

// Helper function to get translated footer text
export const translateFooter = (text, language) => {
  const lang = language && footerTranslations[language] ? language : 'en';
  return footerTranslations[lang]?.[text] || text;
};