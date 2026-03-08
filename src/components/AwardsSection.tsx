import { Award, Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const AwardsSection = () => {
  const { t } = useLanguage();

  const awards = [
    { year: "2013", title: "Premi del Consell Social a la Transferència de Coneixement", area: t("Comunicação e Tecnologias da Informação", "Communication and Information Technologies"), org: "Universitat Pompeu Fabra – Consell Social, Espanha" },
    { year: "1998", title: t("Bolsa de Mérito", "Merit Scholarship"), org: t("Universidade de Lisboa – Reitoria", "University of Lisbon – Rectorate") },
    { year: "1997", title: t("Bolsa de Mérito", "Merit Scholarship"), org: t("Universidade de Lisboa – Reitoria", "University of Lisbon – Rectorate") },
  ];

  return (
    <section id="distincoes" className="py-20">
      <div className="section-container">
        <div className="section-divider" />
        <h2 className="section-title">{t("Distinções", "Awards")}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {awards.map((a, i) => (
            <div key={i} className="bg-card border border-border rounded-lg p-6 text-center hover:border-accent/50 transition-colors">
              <div className="w-10 h-10 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                {i === 0 ? <Award className="w-5 h-5 text-accent" /> : <Star className="w-5 h-5 text-accent" />}
              </div>
              <span className="font-body text-xs text-muted-foreground">{a.year}</span>
              <h3 className="font-display text-lg font-semibold text-foreground mt-1 mb-2">{a.title}</h3>
              {a.area && <p className="font-body text-xs text-muted-foreground mb-1">{a.area}</p>}
              <p className="font-body text-xs text-muted-foreground">{a.org}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
