import { FaDumbbell, FaFire, FaClock } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

const Routines = () => {
  const { language } = useLanguage();
  const t = translations[language].routines;

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

        {/* Planes */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">

          <div className="bg-gray-800/60 backdrop-blur-sm border border-blue-500/20 hover:border-blue-400 transition-all duration-300 p-8 rounded-2xl shadow-xl hover:shadow-blue-500/10">
            <FaDumbbell className="text-3xl text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-blue-400">
              {t.strengthTitle}
            </h3>
            <p className="text-gray-300 mb-3 leading-relaxed">
              {t.strengthDesc}
            </p>
            <p className="text-gray-500 text-sm">
              {t.strengthExtra}
            </p>
          </div>

          <div className="bg-gray-800/60 backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-400 transition-all duration-300 p-8 rounded-2xl shadow-xl hover:shadow-cyan-500/10">
            <FaFire className="text-3xl text-cyan-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-cyan-400">
              {t.fatLossTitle}
            </h3>
            <p className="text-gray-300 mb-3 leading-relaxed">
              {t.fatLossDesc}
            </p>
            <p className="text-gray-500 text-sm">
              {t.fatLossExtra}
            </p>
          </div>

          <div className="bg-gray-800/60 backdrop-blur-sm border border-blue-300/20 hover:border-blue-300 transition-all duration-300 p-8 rounded-2xl shadow-xl hover:shadow-blue-400/10">
            <FaClock className="text-3xl text-blue-300 mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-blue-300">
              {t.beginnerTitle}
            </h3>
            <p className="text-gray-300 mb-3 leading-relaxed">
              {t.beginnerDesc}
            </p>
            <p className="text-gray-500 text-sm">
              {t.beginnerExtra}
            </p>
          </div>

        </div>

        {/* Organización y disciplina */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-850 border border-blue-500/20 p-10 rounded-2xl shadow-xl">
          <h3 className="text-2xl font-semibold mb-6 text-blue-400">
            {t.structureTitle}
          </h3>
          <p className="text-gray-300 mb-4 leading-relaxed">
            {t.structureDesc1}
          </p>
          <p className="text-gray-400 mb-4 leading-relaxed">
            {t.structureDesc2}
          </p>
          <p className="text-gray-500 leading-relaxed">
            {t.structureDesc3}
          </p>
        </div>

      </div>
    </section>
  );
};

export default Routines;