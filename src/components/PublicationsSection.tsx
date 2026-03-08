import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const PublicationsSection = () => {
  const { t } = useLanguage();
  const [expandedSection, setExpandedSection] = useState<string | null>("conference");

  const conferenceArticles = [
    'Comparin, L.; Mendes, S. "Using error annotation to evaluate machine translation and human post-editing in a business environment". EAMT 2017, Praga.',
    'Necsulescu, S.; Mendes, S.; Jurgens, D.; Bel, N.; Navigli, R. "Reading Between the Lines: Overcoming Data Sparsity for Accurate Classification of Lexical Relationships". *SEM 2015, Denver. DOI: 10.18653/v1/s15-1021',
    'Romeo, L.; Mendes, S.; Bel, N. "A cascade approach to complex-type classification". 2014.',
    'Romeo, L.; Mendes, S.; Bel, N. "Using unmarked contexts in nominal lexical semantic classification". 2014.',
    'Marrafa, P.; Amaro, R.; Mendes, S. "LexTec – a rich language resource for technical domains in Portuguese". 2014.',
    'Necsulescu, S.; Mendes, S.; Bel, N. "Combining dependency information and generalization in a pattern-based approach to the classification of lexical-semantic relation instances". LREC 2014, Reykjavik.',
    'Romeo, L.; Mendes, S.; Bel, N. "Towards the automatic classification of complex-type nominals". GL 2013, Pisa.',
    'Amaro, R.; Mendes, S. "Towards merging common and technical lexicon wordnets". CogALex-III, Mumbai, 2012.',
    'Romeo, L.; Mendes, S.; Bel, N. "Using Qualia Information to Identify Lexical Semantic Classes in an Unsupervised Clustering Task". COLING 2012, Mumbai.',
    'Mendes, S.; Necsulescu, S.; Bel, N. "Synonym extraction using a language graph model". LREC 2012, Istambul.',
    'Marrafa, P.; Amaro, R.; Mendes, S. "WordNet.PTglobal – Extending WordNet.PT to Portuguese varieties". EMNLP 2011, Edimburgo.',
    'Mendes, S. "Modeling the impact of adjective position in the construction of NP meaning". GL 2009, Pisa.',
    'Mendes, S.; Amaro, R. "Modeling adjectives in GL: accounting for all adjective classes". GL 2009, Pisa.',
    'Mendes, S. "Modelização dos Adjectivos em Português". 75º aniversário do CLUL, Lisboa, 2007.',
    'Marrafa, P.; Mendes, S. "Modeling adjectives in computational relational lexica". COLING/ACL 2006, Sidney. DOI: 10.3115/1273073.1273145',
    'Mendes, S. "Adjectives in WordNet.PT". GWC 2006, Jeju Island.',
    'Marrafa, P.; Amaro, R.; Chaves, R.P.; Lourosa, S.; Martins, C.; Mendes, S. "WordNet.PT new directions". GWC 2006, Jeju Island.',
    'Mendes, S. "Event modifying adjectives in Portuguese". GL 2005, Genebra.',
    'Mendes, S.; Moriceau, V. "L\'analyse des questions: intérêts pour la génération des réponses". TALN 2004, Fez.',
    'Mendes, S. "Sémantique de l\'adjectif et ses restrictions de sélection". Colloque EDIT, Toulouse, 2003.',
    'Mendes, S.; Chaves, R.P. "Enriching WordNet with Qualia Information". NAACL 2001, Pittsburgh.',
  ];

  const journalArticles = [
    'Mendes, S.; Gonçalves, A.; Colaço, M. "Referential cohesion in human and in machine translation: the case of English-Portuguese". Meta: Translators\' Journal (2026). Aceite para publicação.',
    'Silva, R.; Cabarrão, V.; Mendes, S. "Anotação de Entidades Mencionadas na área do Gaming". Revista da APL 9 (2022): 223-235. DOI: 10.26334/2183-9077/rapln9ano2022a15',
    'Comparin, L.; Mendes, S. "Error detection and error correction for improving quality in machine translation and human post-editing". (2017).',
    'Amaro, R.; Mendes, S.; Marrafa, P. "Increasing density through new relations and POS encoding in WordNet.PT". IJCLA 41 (2013): 11-27.',
    'Marrafa, P.; Mendes, S. "Using WordNet.PT for translation: disambiguation and lexical selection decisions". International Journal of Translation 19 (2007).',
  ];

  const bookChapters = [
    'Amaro, R.; Mendes, S. "Computational Linguistics". In The Oxford Handbook of the Portuguese Language. Oxford University Press, 2026. No prelo.',
    'Amaro, R.; Mendes, S. "Lexicologia e linguística computacional". In Manual de linguística portuguesa, ed. Carrilho, E., 178-199. De Gruyter Mouton, 2016.',
    'Marrafa, P.; Amaro, R.; Freire, N.; Mendes, S. "Portuguese Controlled Language: Coping with Ambiguity". LNCS, 152-166. Springer, 2012.',
    'Amaro, R.; Mendes, S.; Marrafa, P. "Lexical-Conceptual Relations as Qualia Role Encoders". LNCS, 29-36. Springer, 2010.',
    'Amaro, R.; Mendes, S.; Marrafa, P. "Encoding Event and Argument Structures in Wordnets". LNCS, 21-28. Springer, 2010.',
    'Amaro, R.; Chaves, R.P.; Marrafa, P.; Mendes, S. "Enriching Wordnets with New Relations and with Event and Argument Structures". CICLing, 28-40. Springer, 2006.',
  ];

  const books = [
    'Amaro, R.; Mendes, S. Tecnologias de Informação para Tradução. Lisboa, 2013.',
  ];

  const thesis = [
    'Mendes, S. "Syntax and semantics of adjectives in portuguese: analysis and modeling". Doutoramento, 2009.',
  ];

  const onlineResources = [
    { title: "Dicionário Electrónico Português-Eslovaco/Eslovaco-Português", year: "2012", url: "http://portugal.sk/slovnik/?l=pt" },
    { title: "CLG – Português Controlado", year: "2011", url: "https://clul.ulisboa.pt/projeto/wordnet-portcontrol-clg-portugues-controlado" },
    { title: "Wordnet.PTglobal – Rede léxico-conceptual das variedades do Português", year: "2010", url: "http://www.clul.ul.pt/wnglobal" },
    { title: "LexTec – Léxico Técnico do Português", year: "2009", url: "http://cvc.instituto-camoes.pt/lextec/inicio.html" },
    { title: "TemaNet – WordNets Temáticas do Português", year: "2006", url: "http://cvc.instituto-camoes.pt/temanet/inicio.html" },
    { title: "WordNet.PT – Rede Léxico-Conceptual do Português 1.6", year: "2006", url: "https://clul.ulisboa.pt/recurso/wordnetpt" },
  ];

  const sections = [
    { key: "conference", title: t("Artigos em Conferência", "Conference Papers"), items: conferenceArticles, count: conferenceArticles.length },
    { key: "journal", title: t("Artigos em Revista", "Journal Articles"), items: journalArticles, count: journalArticles.length },
    { key: "chapters", title: t("Capítulos de Livro", "Book Chapters"), items: bookChapters, count: bookChapters.length },
    { key: "books", title: t("Livros", "Books"), items: books, count: books.length },
    { key: "thesis", title: t("Tese de Doutoramento", "Doctoral Thesis"), items: thesis, count: thesis.length },
  ];

  return (
    <section id="publicacoes" className="py-20">
      <div className="section-container">
        <div className="section-divider" />
        <h2 className="section-title">{t("Publicações", "Publications")}</h2>
        <div className="space-y-4">
          {sections.map((section) => (
            <div key={section.key} className="border border-border rounded-lg overflow-hidden">
              <button
                onClick={() => setExpandedSection(expandedSection === section.key ? null : section.key)}
                className="w-full flex items-center justify-between px-6 py-4 bg-card hover:bg-secondary/50 transition-colors text-left"
              >
                <span className="font-display text-lg font-semibold text-foreground">{section.title}</span>
                <span className="flex items-center gap-2">
                  <span className="text-xs font-body font-medium px-2.5 py-0.5 rounded-full bg-accent text-accent-foreground">
                    {section.count}
                  </span>
                  <svg
                    className={`w-4 h-4 text-muted-foreground transition-transform ${expandedSection === section.key ? 'rotate-180' : ''}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              {expandedSection === section.key && (
                <div className="px-6 py-4 bg-card">
                  <ol className="space-y-3">
                    {section.items.map((item, i) => (
                      <li key={i} className="pub-item font-body text-sm text-foreground/85 leading-relaxed">
                        <span className="text-muted-foreground mr-2">{String(i + 1).padStart(2, '0')}.</span>
                        {item}
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </div>
          ))}

          {/* Online Resources as a sub-section */}
          <div className="border border-border rounded-lg overflow-hidden">
            <button
              onClick={() => setExpandedSection(expandedSection === "resources" ? null : "resources")}
              className="w-full flex items-center justify-between px-6 py-4 bg-card hover:bg-secondary/50 transition-colors text-left"
            >
              <span className="font-display text-lg font-semibold text-foreground">{t("Recursos Online", "Online Resources")}</span>
              <span className="flex items-center gap-2">
                <span className="text-xs font-body font-medium px-2.5 py-0.5 rounded-full bg-accent text-accent-foreground">
                  {onlineResources.length}
                </span>
                <svg
                  className={`w-4 h-4 text-muted-foreground transition-transform ${expandedSection === "resources" ? 'rotate-180' : ''}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>
            {expandedSection === "resources" && (
              <div className="px-6 py-4 bg-card">
                <ol className="space-y-3">
                  {onlineResources.map((r, i) => (
                    <li key={i} className="pub-item font-body text-sm text-foreground/85 leading-relaxed">
                      <span className="text-muted-foreground mr-2">{String(i + 1).padStart(2, '0')}.</span>
                      <a href={r.url} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                        {r.title}
                      </a>
                      <span className="text-muted-foreground ml-1">({r.year})</span>
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
