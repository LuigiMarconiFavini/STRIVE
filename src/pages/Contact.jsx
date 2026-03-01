import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

const Contact = () => {
  const { language } = useLanguage();
  const t = translations[language].contact;

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 px-6 lg:px-16 py-24">
      <div className="max-w-4xl mx-auto text-center">

        {/* Title */}
        <h1 className="text-4xl lg:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          {t.title}
        </h1>

        <p className="text-gray-400 text-lg mb-6">
          {t.subtitle}
        </p>

        <p className="text-gray-500 max-w-2xl mx-auto mb-16 leading-relaxed">
          {t.intro}
        </p>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Email */}
          <a
            href="mailto:luigimarconifavini@gmail.com?subject=Consulta%20sobre%20entrenamiento&body=Hola!%20Me%20interesa%20mejorar%20mis%20hábitos%20y%20mi%20físico."
            className="group bg-gray-800/60 backdrop-blur border border-gray-700 hover:border-blue-500 transition-all duration-300 p-8 rounded-2xl shadow-lg"
          >
            <div className="text-4xl mb-4">📧</div>

            <h3 className="text-xl font-semibold text-blue-400 mb-2">
              Email
            </h3>

            <p className="text-gray-400 text-sm">
              {language === "es"
                ? "Envíame un correo para consultas, sugerencias o simplemente para saludar."
                : "Send me an email for inquiries, suggestions or just to say hi."}
            </p>

            <p className="text-gray-500 text-xs mt-4">
              luigimarconifavini@gmail.com
            </p>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gray-800/60 backdrop-blur border border-gray-700 hover:border-cyan-500 transition-all duration-300 p-8 rounded-2xl shadow-lg hover:shadow-cyan-500/20"
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition">
              📸
            </div>

            <h3 className="text-xl font-semibold text-cyan-400 mb-2">
              Instagram
            </h3>

            <p className="text-gray-400 text-sm">
              {language === "es"
                ? "Contenido de entrenamiento, hábitos y progreso real."
                : "Training content, habits and real transformation."}
            </p>

            <p className="text-gray-500 text-xs mt-4">
              @luigim_favini
            </p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gray-800/60 backdrop-blur border border-gray-700 hover:border-blue-400 transition-all duration-300 p-8 rounded-2xl shadow-lg hover:shadow-blue-400/20"
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition">
              💼
            </div>

            <h3 className="text-xl font-semibold text-blue-300 mb-2">
              LinkedIn
            </h3>

            <p className="text-gray-400 text-sm">
              {language === "es"
                ? "Conectemos y hablemos sobre disciplina y desarrollo personal."
                : "Let's connect and talk about discipline and personal growth."}
            </p>

            <p className="text-gray-500 text-xs mt-4">
              https://www.linkedin.com/in/luigi-marconi-favini/
            </p>
          </a>

        </div>

      </div>
    </section>
  );
};

export default Contact;