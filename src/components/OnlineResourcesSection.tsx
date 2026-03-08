const OnlineResourcesSection = () => {
  const resources = [
    { title: "Dicionário Electrónico Português-Eslovaco/Eslovaco-Português", year: "2012", url: "http://portugal.sk/slovnik/?l=pt" },
    { title: "CLG – Português Controlado", year: "2011", url: "https://clul.ulisboa.pt/projeto/wordnet-portcontrol-clg-portugues-controlado" },
    { title: "Wordnet.PTglobal – Rede léxico-conceptual das variedades do Português", year: "2010", url: "http://www.clul.ul.pt/wnglobal" },
    { title: "LexTec – Léxico Técnico do Português", year: "2009", url: "http://cvc.instituto-camoes.pt/lextec/inicio.html" },
    { title: "TemaNet – WordNets Temáticas do Português", year: "2006", url: "http://cvc.instituto-camoes.pt/temanet/inicio.html" },
    { title: "WordNet.PT – Rede Léxico-Conceptual do Português 1.6", year: "2006", url: "https://clul.ulisboa.pt/recurso/wordnetpt" },
  ];

  return (
    <section className="py-20 bg-secondary/50">
      <div className="section-container">
        <div className="section-divider" />
        <h2 className="section-title">Recursos Online</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {resources.map((r, i) => (
            <a
              key={i}
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card border border-border rounded-lg p-5 hover:border-accent/50 transition-colors group"
            >
              <span className="text-xs font-body text-muted-foreground">{r.year}</span>
              <h4 className="font-body text-sm font-medium text-foreground mt-1 group-hover:text-accent transition-colors">{r.title}</h4>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OnlineResourcesSection;
