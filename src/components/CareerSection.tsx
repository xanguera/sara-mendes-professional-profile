const CareerSection = () => {
  const positions = [
    { period: "2017 – Presente", role: "Coordenadora Científica – Curso de Tradução e Tecnologias de Informação Linguística (programa de formação à distância, 19ª edição)", org: "Camões, I.P." },
    { period: "2016 – Presente", role: "Diretora do Mestrado em Tradução", org: "Universidade de Lisboa – Faculdade de Letras" },
    { period: "2013 – Presente", role: "Professora Auxiliar", org: "Universidade de Lisboa – Faculdade de Letras" },
    { period: "2008 – Presente", role: "Docente do curso de Tradução e Tecnologias de Informação Linguística (16 edições)", org: "Camões, I.P." },
    { period: "2013 – 2016", role: "Colaboradora", org: "Universitat Pompeu Fabra – IULA, Espanha" },
    { period: "2013", role: "Investigadora de Pós-Doutoramento (bolsa FCT SFRH/BPD/79900/2011)", org: "Universidade de Lisboa – Centro de Linguística" },
    { period: "2012 – 2013", role: "Investigadora de Pós-Doutoramento (bolsa FCT)", org: "Universitat Pompeu Fabra – IULA, Espanha" },
    { period: "2010 – 2013", role: "Investigadora", org: "Universidade de Lisboa – Centro de Linguística" },
    { period: "2011 – 2012", role: "Docente – Seminários de Tradução (2º ciclo em Tradução)", org: "Universidade de Lisboa – Faculdade de Letras" },
    { period: "2010 – 2012", role: "Docente – Tradução Assistida por Computador (nível avançado)", org: "Universidade de Lisboa – Faculdade de Letras" },
    { period: "2010 – 2012", role: "Docente do Mestrado em Tradução", org: "Universidade Pedagógica, Moçambique" },
    { period: "2006 – 2010", role: "Assistente de Investigação", org: "Universidade de Lisboa – Centro de Linguística" },
    { period: "2002 – 2006", role: "Bolseira de Doutoramento (FCT SFRH/BD/8524/2002)", org: "Universidade de Lisboa – Centro de Linguística" },
    { period: "2001 – 2004", role: "Investigadora de Doutoramento", org: "IRIT – Toulouse, França" },
    { period: "2000 – 2002", role: "Investigadora Júnior", org: "Universidade de Lisboa – Centro de Linguística" },
    { period: "1998 – 1999", role: "Colaboradora", org: "Academia das Ciências de Lisboa" },
  ];

  return (
    <section id="percurso" className="py-20 bg-secondary/50">
      <div className="section-container">
        <div className="section-divider" />
        <h2 className="section-title">Percurso Profissional</h2>
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
