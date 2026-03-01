import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";
import { Link } from "react-router-dom";

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language].footer;

  const columns = [
    {
      title: t.training,
      links: [
        { name: t.routines, to: "/routines" },
        { name: t.strength, to: "/routines" },
        { name: t.fatloss, to: "/routines" }
      ]
    },
    {
      title: t.nutrition,
      links: [
        { name: t.nutritionGuide, to: "/nutrition" },
        { name: t.supplements, to: "/supplements" },
        { name: t.habits, to: "/nutrition" }
      ]
    },
    {
      title: t.company,
      links: [
        { name: t.about, to: "/" },
        { name: t.contact, to: "/contact" },
        { name: "FAQ", to: "/dashboard#faq" }
      ]
    }
  ];

  return (
    <footer className="w-full bg-gray-950 border-t border-blue-900/40 pt-20 pb-8 text-gray-400">
      <div className="w-full px-6 lg:px-16">

        {/* Main Footer */}
        <div className="grid md:grid-cols-3 gap-16 mb-16">

          {/* Brand */}
          <div>

            <Link
              to="/"
              className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 tracking-wide"
            >
              STRIVE
            </Link>

            <p className="mt-6 text-sm text-gray-400 leading-relaxed max-w-sm">
              {t.description}
            </p>

            <p className="mt-4 text-xs text-blue-400 font-medium">
              {t.motivation}
            </p>

          </div>

          {/* Navigation */}
          <div>

            <h4 className="text-sm font-semibold text-blue-400 mb-6 uppercase tracking-wider">
              {t.navigation}
            </h4>

            <ul className="space-y-4 text-sm">

              <li>
                <Link to="/routines" className="hover:text-blue-400 transition">
                  {t.routines}
                </Link>
              </li>

              <li>
                <Link to="/nutrition" className="hover:text-blue-400 transition">
                  {t.nutrition}
                </Link>
              </li>

              <li>
                <Link to="/supplements" className="hover:text-blue-400 transition">
                  {t.supplements}
                </Link>
              </li>

              <li>
                <Link to="/results" className="hover:text-blue-400 transition">
                  {t.results}
                </Link>
              </li>

              <li>
                <Link to="/contact" className="hover:text-blue-400 transition">
                  {t.contact}
                </Link>
              </li>

            </ul>

          </div>

          {/* Contact */}
          <div>

            <h4 className="text-sm font-semibold text-blue-400 mb-6 uppercase tracking-wider">
              {t.connect}
            </h4>

            <div className="space-y-4 text-sm">

              <a
                href="mailto:luigimarconifavini@gmail.com?subject=Consulta%20sobre%20entrenamiento&body=Hola!%20Me%20interesa%20mejorar%20mis%20hábitos%20y%20mi%20físico."
                className="flex items-center gap-3 hover:text-blue-400 transition"
              >
                📧 {t.email}
              </a>

              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-blue-400 transition"
              >
                📸 Instagram
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-blue-400 transition"
              >
                💼 LinkedIn
              </a>

            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-blue-900/30 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} STRIVE — {t.rights}
          </p>

          <div className="flex gap-6 text-xs text-gray-500">

            <Link to="/privacy" className="hover:text-blue-400 transition">
              {t.privacy}
            </Link>

            <Link to="/terms" className="hover:text-blue-400 transition">
              {t.terms}
            </Link>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;