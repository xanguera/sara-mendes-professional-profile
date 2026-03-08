import { useLanguage } from "@/contexts/LanguageContext";

const EducationSection = () => {
  const { t } = useLanguage();

  const education = [
    {
      year: "2010",
      degree: t("Doutoramento em Linguística Computacional", "PhD in Computational Linguistics"),
      institution: t("Universidade de Lisboa – Faculdade de Letras", "University of Lisbon – Faculty of Arts"),
      thesis: "Syntax and Semantics of Adjectives in Portuguese: Analysis and Modelling",
      grade: t("Aprovado com distinção e louvor", "Approved with distinction and honours"),
    },
    {
      year: "2000",
      degree: t("Licenciatura em Linguística", "Bachelor's in Linguistics"),
      institution: t("Universidade de Lisboa – Faculdade de Letras", "University of Lisbon – Faculty of Arts"),
      grade: t("17 valores", "17/20"),
    },
  ];

  return (
    <section id="formacao" className="py-20">
      <div className="section-container">
        <div className="section-divider" />
        <h2 className="section-title">{t("Formação Académica", "Education")}</h2>
        <div className="space-y-8">
          {education.map((item, i) => (
            <div key={i} className="timeline-item">
              <div className="timeline-dot" />
              <span className="text-sm text-muted-foreground font-body">{item.year}</span>
              <h3 className="font-display text-xl font-semibold text-foreground mt-1">{item.degree}</h3>
              <p className="text-muted-foreground font-body text-sm mt-1">{item.institution}</p>
              {item.thesis && (
                <p className="font-body text-sm italic text-muted-foreground mt-2">"{item.thesis}"</p>
              )}
              <span className="inline-block mt-2 text-xs font-body font-medium px-3 py-1 rounded-full bg-secondary text-secondary-foreground">
                {item.grade}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
