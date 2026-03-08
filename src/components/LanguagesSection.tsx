import { useLanguage } from "@/contexts/LanguageContext";

const LanguagesSection = () => {
  const { t } = useLanguage();

  const languages = [
    { lang: t("Português", "Portuguese"), level: "C2", pct: 100 },
    { lang: t("Inglês", "English"), level: "C2", pct: 100 },
    { lang: t("Francês", "French"), level: "C1", pct: 85 },
    { lang: t("Espanhol", "Spanish"), level: "C1/C2", pct: 90 },
    { lang: t("Catalão", "Catalan"), level: "C1/C2", pct: 85 },
    { lang: t("Russo", "Russian"), level: "A1", pct: 15 },
  ];

  return (
    <section id="idiomas" className="py-20">
      <div className="section-container">
        <div className="section-divider" />
        <h2 className="section-title">{t("Idiomas", "Languages")}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {languages.map((l, i) => (
            <div key={i} className="text-center">
              <div className="relative w-20 h-20 mx-auto mb-3">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                  <circle cx="18" cy="18" r="15.5" fill="none" stroke="hsl(var(--border))" strokeWidth="2" />
                  <circle
                    cx="18" cy="18" r="15.5" fill="none"
                    stroke="hsl(var(--accent))" strokeWidth="2.5"
                    strokeDasharray={`${l.pct} ${100 - l.pct}`}
                    strokeLinecap="round"
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center font-body text-xs font-semibold text-foreground">
                  {l.level}
                </span>
              </div>
              <p className="font-body text-sm font-medium text-foreground">{l.lang}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LanguagesSection;
