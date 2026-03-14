// src/public_app/layout/navbar/navbarmobile/hooks/useMobileNavTranslation.js
import { useLanguage } from "../../../../../context/LanguageContext";
import { translateMobile } from "../../../../../locales/mobileNavbarTranslations";
import { mobileNavItemsConfig } from "../public_app/layout/navbar/navbarmobile/components/NavbarMobileData";

export const useMobileNavTranslation = () => {
  const { language } = useLanguage();

  const translatedNavItems = mobileNavItemsConfig.map(item => ({
    ...item,
    label: translateMobile(item.labelKey, language)
  }));

  const t = (text) => translateMobile(text, language);

  return {
    navItems: translatedNavItems,
    t,
    language
  };
};