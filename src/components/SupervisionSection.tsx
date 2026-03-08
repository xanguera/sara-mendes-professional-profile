import { useState } from "react";

const SupervisionSection = () => {
  const [showAll, setShowAll] = useState(false);

  const supervisions = [
    { period: "2024 – Presente", title: "Reducing gender bias in Chinese-Portuguese Machine Translation", type: "Doutoramento", role: "Orientador" },
    { period: "2024 – Presente", title: "Avaliação do desempenho de Large Language Models em Tarefas de Tradução", type: "Mestrado", role: "Coorientador" },
    { period: "2024 – Presente", title: "Da Tradução à Personalização: Um novo olhar sobre a Localização em contexto educativo", type: "Mestrado", role: "Orientador" },
    { period: "2025 – Presente", title: "Relatórios de estágio (Blueline, ISCPSI, Ponto de Fuga/Pim!, ISCAL)", type: "Mestrado", role: "Orientador" },
    { period: "2024 – 2026", title: "A Inteligência Artificial e a Tradução Literária: testando os limites da máquina", type: "Mestrado", role: "Orientador" },
    { period: "2024 – 2026", title: "Prompts para tradução de conteúdos educativos – estágio na Elsa Speak", type: "Mestrado", role: "Orientador" },
    { period: "2024 – 2025", title: "Intervenções de correção em textos de estudantes chineses de PLE: professores vs. LLMs", type: "Mestrado", role: "Orientador" },
    { period: "2022 – 2025", title: "Machine Translation of Clitic Personal Pronouns between Portuguese and Chinese", type: "Mestrado", role: "Orientador" },
    { period: "2022 – 2025", title: "Sobre a aplicabilidade do género gramatical neutro na Tradução para Legendagem", type: "Mestrado", role: "Coorientador" },
    { period: "2016 – 2024", title: "A integração de léxico de especialidade e de léxico comum e a sua modelização no modelo da WordNet.PT", type: "Doutoramento", role: "Coorientador" },
    { period: "2021 – 2024", title: "Sobre Legendagem e Dobragem: Reflexão a partir de uma experiência de estágio curricular na Buggin Media", type: "Mestrado", role: "Orientador" },
    { period: "2017 – 2024", title: "Multiword proper nouns in multilingual glossaries for Machine Translation and Post-Editing", type: "Mestrado", role: "Orientador" },
    { period: "2019 – 2023", title: "A tecnologia no processo tradutório: uso de sistemas de TA e ferramentas TAC na tradução literária", type: "Mestrado", role: "Orientador" },
    { period: "2020 – 2022", title: "Error analysis in automatic speech recognition and machine translation", type: "Mestrado", role: "Orientador" },
    { period: "2014 – 2017", title: "Quality in Machine Translation and Human Post-editing: Error Annotation and Specifications", type: "Mestrado", role: "Orientador" },
    { period: "2011 – 2013", title: "Orientação de dissertações de Mestrado em Tradução (4 estudantes)", type: "Mestrado", role: "Orientador", org: "Universidade Pedagógica, Moçambique" },
  ];

  const displayed = showAll ? supervisions : supervisions.slice(0, 8);

  return (
    <section id="orientacoes" className="py-20">
      <div className="section-container">
        <div className="section-divider" />
        <h2 className="section-title">Orientações</h2>
        <div className="space-y-3">
          {displayed.map((s, i) => (
            <div key={i} className="flex items-start gap-4 py-3 border-b border-border last:border-b-0">
              <span className="text-xs font-body text-muted-foreground whitespace-nowrap mt-0.5 w-28 shrink-0">{s.period}</span>
              <div className="flex-1">
                <p className="font-body text-sm text-foreground leading-snug">{s.title}</p>
                <div className="flex gap-2 mt-1.5">
                  <span className="text-xs font-body px-2 py-0.5 rounded bg-secondary text-muted-foreground">{s.type}</span>
                  <span className="text-xs font-body px-2 py-0.5 rounded bg-secondary text-muted-foreground">{s.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        {supervisions.length > 8 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="mt-4 font-body text-sm text-accent hover:underline"
          >
            {showAll ? "Ver menos" : `Ver todas (${supervisions.length})`}
          </button>
        )}

        <div className="mt-12">
          <h3 className="font-display text-xl font-semibold text-foreground mb-4">Júri de Grau Académico</h3>
          <p className="font-body text-sm text-muted-foreground">
            Participação extensiva em júris de Mestrado e Doutoramento na Universidade de Lisboa (Faculdade de Letras), Universidade Nova de Lisboa, Universitat Pompeu Fabra e Universidade Pedagógica de Moçambique, em funções de Presidente, Arguente e Orientador — totalizando mais de 80 participações desde 2010.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SupervisionSection;
