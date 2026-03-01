import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

const Nutrition = () => {
  const { language } = useLanguage();
  const t = translations[language].nutrition;

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white px-6 lg:px-16 py-20">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <h1 className="text-4xl lg:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          {t.title}
        </h1>

        <p className="text-gray-400 mb-16 max-w-3xl text-lg leading-relaxed">
          {t.intro}
        </p>

        {/* Grid principal */}
        <div className="grid md:grid-cols-2 gap-10 mb-20">

          <div className="bg-gray-800/60 backdrop-blur-sm border border-blue-500/20 hover:border-blue-400 transition-all duration-300 p-8 rounded-2xl shadow-xl hover:shadow-blue-500/10">
            <h3 className="text-xl font-semibold mb-4 text-blue-400">
              {t.muscleTitle}
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              {t.muscleDesc}
            </p>
            <p className="text-gray-500 text-sm">
              {t.muscleExtra}
            </p>
          </div>

          <div className="bg-gray-800/60 backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-400 transition-all duration-300 p-8 rounded-2xl shadow-xl hover:shadow-cyan-500/10">
            <h3 className="text-xl font-semibold mb-4 text-cyan-400">
              {t.fatTitle}
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              {t.fatDesc}
            </p>
            <p className="text-gray-500 text-sm">
              {t.fatExtra}
            </p>
          </div>

        </div>

        {/* Enfoque humano */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-850 border border-blue-500/20 p-10 rounded-2xl shadow-xl mb-20">
          <h3 className="text-2xl font-semibold mb-6 text-blue-400">
            {t.mindsetTitle}
          </h3>
          <p className="text-gray-300 mb-4 leading-relaxed">
            {t.mindsetDesc1}
          </p>
          <p className="text-gray-400 leading-relaxed">
            {t.mindsetDesc2}
          </p>
        </div>

        {/* Nutrientes esenciales */}
        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-gray-800/60 border border-gray-700 hover:border-blue-400 transition-all duration-300 p-8 rounded-2xl shadow-lg hover:shadow-blue-500/10">
            <h4 className="font-semibold mb-3 text-blue-400">
              {t.proteinTitle}
            </h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              {t.proteinDesc}
            </p>
          </div>

          <div className="bg-gray-800/60 border border-gray-700 hover:border-cyan-400 transition-all duration-300 p-8 rounded-2xl shadow-lg hover:shadow-cyan-500/10">
            <h4 className="font-semibold mb-3 text-cyan-400">
              {t.carbsTitle}
            </h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              {t.carbsDesc}
            </p>
          </div>

          <div className="bg-gray-800/60 border border-gray-700 hover:border-blue-300 transition-all duration-300 p-8 rounded-2xl shadow-lg hover:shadow-blue-400/10">
            <h4 className="font-semibold mb-3 text-blue-300">
              {t.fatsTitle}
            </h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              {t.fatsDesc}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Nutrition;