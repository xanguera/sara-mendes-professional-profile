const PeerReviewSection = () => {
  const conferences = [
    "PROPOR 2024 – Universidade de Santiago de Compostela",
    "XVII Fórum de Partilha Linguística (2023) – FCSH, UNL",
    "XXXVIII Encontro Nacional da APL (2022) – FLUL",
    "PROPOR 2022",
    "XV Fórum de Partilha Linguística (2020/2021) – FCSH, UNL",
    "XXXVI Encontro Nacional da APL (2020)",
    "XIV Fórum de Partilha Linguística (2019) – FCSH, UNL",
    "XXXV Encontro Nacional da APL (2019) – Universidade do Minho",
    "CLUL-LingMe2016 – Lisboa",
    "LREC 2016 – Portorož, Eslovénia",
    "LREC 2014 – Reykjavik, Islândia",
    "PROPOR 2014 – São Paulo, Brasil",
    "GWC 2008 – Szeged, Hungria",
  ];

  const journals = [
    { name: "Journal of Portuguese Linguistics", period: "2018 – Presente" },
    { name: "Revista da APL (nº 9)", period: "2022" },
    { name: "Revista da APL (nº 8)", period: "2021" },
    { name: "International Journal of Lexicography", period: "2012" },
    { name: "Language Resources and Evaluation", period: "2012" },
  ];

  return (
    <section className="py-20 bg-secondary/50">
      <div className="section-container">
        <div className="section-divider" />
        <h2 className="section-title">Arbitragem Científica</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-4">Conferências</h3>
            <ul className="space-y-2">
              {conferences.map((c, i) => (
                <li key={i} className="font-body text-sm text-foreground/80 pl-4 border-l-2 border-border">{c}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-4">Revistas</h3>
            <ul className="space-y-3">
              {journals.map((j, i) => (
                <li key={i} className="font-body text-sm">
                  <span className="text-foreground">{j.name}</span>
                  <span className="text-muted-foreground ml-2">({j.period})</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PeerReviewSection;
