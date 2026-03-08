const EducationSection = () => {
  const education = [
    {
      year: "2010",
      degree: "Doutoramento em Linguística Computacional",
      institution: "Universidade de Lisboa – Faculdade de Letras",
      thesis: "Syntax and Semantics of Adjectives in Portuguese: Analysis and Modelling",
      grade: "Aprovado com distinção e louvor",
    },
    {
      year: "2000",
      degree: "Licenciatura em Linguística",
      institution: "Universidade de Lisboa – Faculdade de Letras",
      grade: "17 valores",
    },
  ];

  return (
    <section id="formacao" className="py-20">
      <div className="section-container">
        <div className="section-divider" />
        <h2 className="section-title">Formação Académica</h2>
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
