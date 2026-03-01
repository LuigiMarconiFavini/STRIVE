import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";
import LanguageToggle from "./LanguageToggle";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { language } = useLanguage();
  const t = translations[language].navbar;

  const links = [
    { name: t.workouts, to: "/routines" },
    { name: t.nutrition, to: "/nutrition" },
    { name: t.supplements, to: "/supplements" },
    { name: t.results, to: "/results" },
    { name: t.contact, to: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-gray-950/80 border-b border-gray-800">
      <div className="w-full px-6 lg:px-16 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold tracking-wide text-white">
          STRIVE
        </Link>

        <div className="hidden md:flex gap-8 text-sm text-gray-400">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className="hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <LanguageToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;