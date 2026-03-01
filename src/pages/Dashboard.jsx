import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";
import { Link } from "react-router-dom";
import FAQ from "./FAQ";

const Dashboard = () => {
  const { language } = useLanguage();
  const t = translations[language].dashboard;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 px-6 lg:px-16 pt-24">

      {/* HERO */}
      <section className="grid lg:grid-cols-2 gap-16 items-center mb-24">

        {/* TEXT */}
        <div>

          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
              {t.title}
            </span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-xl">
            {t.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">

            <Link
              to="/routines"
              className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:scale-105 transition px-8 py-3 rounded-xl text-sm font-semibold text-white shadow-lg shadow-blue-900/30"
            >
              {t.primaryButton}
            </Link>

            <Link
              to="/results"
              className="border border-blue-800 hover:border-blue-500 hover:bg-blue-900/30 transition px-8 py-3 rounded-xl text-sm text-gray-300 hover:text-white"
            >
              {t.secondaryButton}
            </Link>

          </div>

        </div>


        {/* IMAGE */}
        <div className="relative">

          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 blur-3xl rounded-full"></div>

          <img
            src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b"
            alt="Fitness training"
            className="relative rounded-2xl shadow-2xl border border-blue-900/30"
          />

        </div>

      </section>


      {/* STATS */}
      <section className="mb-24 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

        <div className="bg-gray-900 border border-blue-900/30 p-6 rounded-xl hover:border-blue-500 transition">
          <h3 className="text-3xl font-bold text-blue-400">+5kg</h3>
          <p className="text-gray-500 text-sm mt-2">{t.stat1}</p>
        </div>

        <div className="bg-gray-900 border border-blue-900/30 p-6 rounded-xl hover:border-blue-500 transition">
          <h3 className="text-3xl font-bold text-blue-400">12%</h3>
          <p className="text-gray-500 text-sm mt-2">{t.stat2}</p>
        </div>

        <div className="bg-gray-900 border border-blue-900/30 p-6 rounded-xl hover:border-blue-500 transition">
          <h3 className="text-3xl font-bold text-blue-400">4x</h3>
          <p className="text-gray-500 text-sm mt-2">{t.stat3}</p>
        </div>

        <div className="bg-gray-900 border border-blue-900/30 p-6 rounded-xl hover:border-blue-500 transition">
          <h3 className="text-3xl font-bold text-blue-400">100%</h3>
          <p className="text-gray-500 text-sm mt-2">{t.stat4}</p>
        </div>

      </section>


      {/* FEATURES */}
      <section className="grid md:grid-cols-3 gap-8 mb-24">

        <div className="bg-gray-900 border border-blue-900/30 p-8 rounded-2xl hover:border-blue-500 hover:scale-105 transition">

          <h3 className="text-xl font-semibold text-blue-400 mb-3">
            {t.feature1Title}
          </h3>

          <p className="text-gray-400 text-sm">
            {t.feature1Desc}
          </p>

        </div>

        <div className="bg-gray-900 border border-blue-900/30 p-8 rounded-2xl hover:border-blue-500 hover:scale-105 transition">

          <h3 className="text-xl font-semibold text-blue-400 mb-3">
            {t.feature2Title}
          </h3>

          <p className="text-gray-400 text-sm">
            {t.feature2Desc}
          </p>

        </div>

        <div className="bg-gray-900 border border-blue-900/30 p-8 rounded-2xl hover:border-blue-500 hover:scale-105 transition">

          <h3 className="text-xl font-semibold text-blue-400 mb-3">
            {t.feature3Title}
          </h3>

          <p className="text-gray-400 text-sm">
            {t.feature3Desc}
          </p>

        </div>

      </section>


      {/* FAQ */}
      <section className="mb-12">
        <FAQ />
      </section>

    </div>
  );
};

export default Dashboard;