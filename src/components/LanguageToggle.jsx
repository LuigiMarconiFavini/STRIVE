import { useLanguage } from "../context/LanguageContext";

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="text-xs px-3 py-1 rounded-md bg-gray-800 text-gray-300 hover:bg-gray-700 transition"
    >
      {language === "es" ? "EN 🇺🇸" : "ES 🇦🇷"}
    </button>
  );
};

export default LanguageToggle;