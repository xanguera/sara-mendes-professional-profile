import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const ProjectsSection = () => {
  const { t } = useLanguage();
  const [showAll, setShowAll] = useState(false);

  const grants = [
    { period: "2012 – 2013", title: "SynExtract – Automatic Acquisition of Synonymy Relations for the Production of Lexical Resources", ref: "SFRH/BPD/79900/2011", role: t("Bolseiro de Pós-Doutoramento", "Post-Doctoral Fellow"), org: "CLUL", funder: "FCT" },
    { period: "2002 – 2006", title: t("Sintaxe e Semântica do Adjetivo – análise e modelização", "Syntax and Semantics of Adjectives – analysis and modelling"), ref: "SFRH/BD/8524/2002", role: t("Bolseiro de Doutoramento", "Doctoral Fellow"), org: "CLUL", funder: "FCT" },
  ];

  const projects = [
    { period: t("2011 – Presente", "2011 – Present"), title: "Program II – Laboratório de Processamento do Conhecimento Gramatical", role: t("Investigador", "Researcher"), org: "CLUL" },
    { period: t("2008 – Presente", "2008 – Present"), title: "LETRADU – Modelização Linguística para a Engenharia da Tradução", org: "CLUL" },
    { period: t("2006 – Presente", "2006 – Present"), title: "WordNet.PT – Rede Léxico-Conceptual do Português", role: t("Investigador", "Researcher"), org: "CLUL" },
    { period: "2011 – 2012", title: "Dictionary PT-SK – Dicionário Eletrónico Português-Eslovaco/Eslovaco-Português", role: t("Investigador", "Researcher"), org: "CLUL", funder: "FCT" },
    { period: "2010 – 2012", title: "WordNet.PT PortControl – CLG Português Controlado", role: t("Investigador", "Researcher"), org: "CLUL", funder: "Camões, I.P." },
    { period: "2009 – 2011", title: "WordNet.PTglobal – Rede Léxico-Conceptual das Variedades do Português", role: t("Investigador", "Researcher"), org: "CLUL", funder: "Camões, I.P." },
    { period: "2006 – 2009", title: "LexTec – Léxico Técnico do Português", role: t("Investigador", "Researcher"), org: "Camões, I.P.", funder: "Camões, I.P." },
    { period: "2005 – 2006", title: "TemaNet – Wordnets temáticas do Português", role: t("Investigador", "Researcher"), org: "Camões, I.P.", funder: "Camões, I.P." },
    { period: "2004 – 2006", title: "WordNet.PT II – Rede Léxico-Conceptual do Português", org: "CLUL", funder: "FCT / Camões, I.P." },
    { period: "2003 – 2006", title: "LENCIC – A interface léxico-enciclopédia na construção de léxicos computacionais", role: t("Investigador", "Researcher"), org: "CLUL", funder: "FCT" },
    { period: "2003 – 2006", title: "COMPGRAM – Computação do Léxico e da Gramática", role: t("Bolseiro de Iniciação Científica", "Research Initiation Fellow"), org: "CLUL", funder: "FCT" },
    { period: "2001 – 2003", title: "LexNet – Especificação de Padrões de Lexicalização para uma Extensão da WordNet.PT", role: t("Investigador", "Researcher"), funder: "Camões, I.P." },
    { period: "2000 – 2001", title: "WordNet.PT – Rede Léxico-Conceptual do Português", role: t("Bolseiro de Iniciação Científica", "Research Initiation Fellow"), org: "CLUL", funder: "Camões, I.P." },
  ];

  const other = [
    { period: "1998 – 1999", title: t("Dicionário da Língua Portuguesa Contemporânea", "Dictionary of Contemporary Portuguese"), role: t("Colaboradora externa", "External Collaborator"), org: t("Academia das Ciências de Lisboa", "Lisbon Academy of Sciences"), funder: "Fundação Calouste Gulbenkian" },
  ];

  const displayedProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <section id="projetos" className="py-20 bg-secondary/50">
      <div className="section-container">
        <div className="section-divider" />
        <h2 className="section-title">{t("Projetos", "Projects")}</h2>

        <h3 className="font-display text-xl font-semibold text-foreground mb-4">{t("Bolsas", "Grants")}</h3>
        <div className="space-y-4 mb-12">
          {grants.map((g, i) => (
            <div key={i} className="bg-card rounded-lg p-5 border border-border">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h4 className="font-body text-sm font-medium text-foreground">{g.title}</h4>
                  <p className="font-body text-xs text-muted-foreground mt-1">{g.role} · {g.org}</p>
                  {g.ref && <p className="font-body text-xs text-muted-foreground mt-0.5">Ref: {g.ref}</p>}
                </div>
                <span className="text-xs font-body text-muted-foreground whitespace-nowrap">{g.period}</span>
              </div>
              <span className="inline-block mt-2 text-xs font-body px-2 py-0.5 rounded bg-secondary text-muted-foreground">{g.funder}</span>
            </div>
          ))}
        </div>

        <h3 className="font-display text-xl font-semibold text-foreground mb-4">{t("Projetos de Investigação", "Research Projects")}</h3>
        <div className="space-y-3 mb-4">
          {displayedProjects.map((p, i) => (
            <div key={i} className="bg-card rounded-lg p-4 border border-border">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h4 className="font-body text-sm font-medium text-foreground">{p.title}</h4>
                  <p className="font-body text-xs text-muted-foreground mt-1">
                    {p.role && `${p.role} · `}{p.org}
                    {p.funder && ` · ${p.funder}`}
                  </p>
                </div>
                <span className="text-xs font-body text-muted-foreground whitespace-nowrap">{p.period}</span>
              </div>
            </div>
          ))}
        </div>
        {projects.length > 6 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="font-body text-sm text-accent hover:underline"
          >
            {showAll ? t("Ver menos", "Show less") : t(`Ver todos (${projects.length})`, `Show all (${projects.length})`)}
          </button>
        )}

        <h3 className="font-display text-xl font-semibold text-foreground mt-12 mb-4">{t("Outros", "Other")}</h3>
        <div className="space-y-3">
          {other.map((o, i) => (
            <div key={i} className="bg-card rounded-lg p-4 border border-border">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h4 className="font-body text-sm font-medium text-foreground">{o.title}</h4>
                  <p className="font-body text-xs text-muted-foreground mt-1">{o.role} · {o.org}</p>
                </div>
                <span className="text-xs font-body text-muted-foreground whitespace-nowrap">{o.period}</span>
              </div>
              <span className="inline-block mt-2 text-xs font-body px-2 py-0.5 rounded bg-secondary text-muted-foreground">{o.funder}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
