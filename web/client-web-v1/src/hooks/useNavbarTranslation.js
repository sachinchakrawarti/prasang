// src/hooks/useNavbarTranslation.js
import { useLanguage } from "../context/LanguageContext";
import { translate } from "../locales/navbarTranslations"; // Make sure this path is correct
import desktopNavItems from "../public_app/layout/navbar/navbardesktop/components/NavbarDesktopData";

export const useNavbarTranslation = () => {
  const { language } = useLanguage();
  
  console.log("useNavbarTranslation - language:", language);
  console.log("useNavbarTranslation - desktopNavItems:", desktopNavItems);

  // Deep translate nav items
  const translateNavItems = (items) => {
    if (!items) return [];
    
    return items.map(item => {
      const translatedItem = {
        ...item,
        label: translate(item.label, language)
      };
      
      if (item.dropdown) {
        translatedItem.dropdown = item.dropdown.map(subItem => ({
          ...subItem,
          label: translate(subItem.label, language)
        }));
      }
      
      return translatedItem;
    });
  };

  const translatedNavItems = translateNavItems(desktopNavItems);
  console.log("useNavbarTranslation - translatedNavItems:", translatedNavItems);

  // Helper to translate any text
  const t = (text) => translate(text, language);

  return {
    navItems: translatedNavItems,
    t,
    language
  };
};