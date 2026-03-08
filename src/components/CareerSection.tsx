import { useLanguage } from "@/contexts/LanguageContext";

const CareerSection = () => {
  const { t } = useLanguage();

  const positions = [
    { period: t("2017 – Presente", "2017 – Present"), role: t("Coordenadora Científica – Curso de Tradução e Tecnologias de Informação Linguística (programa de formação à distância, 19ª edição)", "Scientific Coordinator – Translation and Linguistic IT Course (distance learning programme, 19th edition)"), org: "Camões, I.P." },
    { period: t("2016 – Presente", "2016 – Present"), role: t("Diretora do Mestrado em Tradução", "Director of the Master's in Translation"), org: t("Universidade de Lisboa – Faculdade de Letras", "University of Lisbon – Faculty of Arts") },
    { period: t("2013 – Presente", "2013 – Present"), role: t("Professora Auxiliar", "Assistant Professor"), org: t("Universidade de Lisboa – Faculdade de Letras", "University of Lisbon – Faculty of Arts") },
    { period: t("2008 – Presente", "2008 – Present"), role: t("Docente do curso de Tradução e Tecnologias de Informação Linguística (16 edições)", "Lecturer – Translation and Linguistic IT Course (16 editions)"), org: "Camões, I.P." },
    { period: "2013 – 2016", role: t("Colaboradora", "Collaborator"), org: "Universitat Pompeu Fabra – IULA, Espanha" },
    { period: "2013", role: t("Investigadora de Pós-Doutoramento (bolsa FCT SFRH/BPD/79900/2011)", "Post-Doctoral Researcher (FCT grant SFRH/BPD/79900/2011)"), org: t("Universidade de Lisboa – Centro de Linguística", "University of Lisbon – Linguistics Centre") },
    { period: "2012 – 2013", role: t("Investigadora de Pós-Doutoramento (bolsa FCT)", "Post-Doctoral Researcher (FCT grant)"), org: "Universitat Pompeu Fabra – IULA, Espanha" },
    { period: "2010 – 2013", role: t("Investigadora", "Researcher"), org: t("Universidade de Lisboa – Centro de Linguística", "University of Lisbon – Linguistics Centre") },
    { period: "2011 – 2012", role: t("Docente – Seminários de Tradução (2º ciclo em Tradução)", "Lecturer – Translation Seminars (Master's in Translation)"), org: t("Universidade de Lisboa – Faculdade de Letras", "University of Lisbon – Faculty of Arts") },
    { period: "2010 – 2012", role: t("Docente – Tradução Assistida por Computador (nível avançado)", "Lecturer – Computer-Assisted Translation (advanced)"), org: t("Universidade de Lisboa – Faculdade de Letras", "University of Lisbon – Faculty of Arts") },
    { period: "2010 – 2012", role: t("Docente do Mestrado em Tradução", "Lecturer – Master's in Translation"), org: t("Universidade Pedagógica, Moçambique", "Pedagogical University, Mozambique") },
    { period: "2006 – 2010", role: t("Assistente de Investigação", "Research Assistant"), org: t("Universidade de Lisboa – Centro de Linguística", "University of Lisbon – Linguistics Centre") },
    { period: "2002 – 2006", role: t("Bolseira de Doutoramento (FCT SFRH/BD/8524/2002)", "PhD Fellow (FCT SFRH/BD/8524/2002)"), org: t("Universidade de Lisboa – Centro de Linguística", "University of Lisbon – Linguistics Centre") },
    { period: "2001 – 2004", role: t("Investigadora de Doutoramento", "Doctoral Researcher"), org: "IRIT – Toulouse, França" },
    { period: "2000 – 2002", role: t("Investigadora Júnior", "Junior Researcher"), org: t("Universidade de Lisboa – Centro de Linguística", "University of Lisbon – Linguistics Centre") },
    { period: "1998 – 1999", role: t("Colaboradora", "Collaborator"), org: t("Academia das Ciências de Lisboa", "Lisbon Academy of Sciences") },
  ];

  return (
    <section id="percurso" className="py-20 bg-secondary/50">
      <div className="section-container">
        <div className="section-divider" />
        <h2 className="section-title">{t("Percurso Profissional", "Professional Career")}</h2>
        <div className="space-y-0">
          {positions.map((item, i) => (
            <div key={i} className="timeline-item">
              <div className="timeline-dot" />
              <span className="text-xs font-body text-muted-foreground tracking-wide">{item.period}</span>
              <h3 className="font-body text-sm font-medium text-foreground mt-0.5 leading-snug">{item.role}</h3>
              <p className="font-body text-xs text-muted-foreground mt-0.5">{item.org}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerSection;
