import { GraduationCap, MapPin, BookOpen } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const HeroSection = () => {
  const { lang, setLang, t } = useLanguage();

  const navItems = [
    { pt: "Percurso", en: "Career" },
    { pt: "Formação", en: "Education" },
    { pt: "Publicações", en: "Publications" },
    { pt: "Idiomas", en: "Languages" },
    { pt: "Projetos", en: "Projects" },
    { pt: "Orientações", en: "Supervision" },
    { pt: "Distinções", en: "Awards" },
  ];

  return (
    <header className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, hsl(35 80% 50% / 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, hsl(35 80% 50% / 0.1) 0%, transparent 40%)'
        }} />
      </div>
      <div className="section-container relative py-16 md:py-24">
        <div className="flex items-center justify-between mb-8">
          <p className="font-body text-sm uppercase tracking-[0.2em] text-primary-foreground/60">
            Curriculum Vitae
          </p>
          <div className="flex items-center gap-2 font-body text-sm text-primary-foreground/70">
            <span className={lang === "pt" ? "text-primary-foreground font-medium" : ""}>PT</span>
            <Switch
              checked={lang === "en"}
              onCheckedChange={(checked) => setLang(checked ? "en" : "pt")}
              className="data-[state=checked]:bg-accent data-[state=unchecked]:bg-primary-foreground/20"
            />
            <span className={lang === "en" ? "text-primary-foreground font-medium" : ""}>EN</span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
          <Avatar className="w-32 h-32 md:w-40 md:h-40 border-2 border-accent/30 shadow-lg shrink-0">
            <AvatarImage
              src="https://www.clul.ulisboa.pt/sites/default/files/styles/retrato_medio/public/pictures/2019-11/foto3.jpg"
              alt="Sara Mendes"
              className="object-cover"
            />
            <AvatarFallback className="text-3xl font-display bg-accent/20 text-primary-foreground">SM</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.1]">
              Sara Mendes
            </h1>
            <div className="w-16 h-0.5 bg-accent mb-6" />
            <div className="flex flex-wrap gap-4 text-sm text-primary-foreground/70 font-body mb-8">
              <span className="flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4" />
                {t("Professora Auxiliar", "Assistant Professor")}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4" />
                {t("Universidade de Lisboa – Faculdade de Letras", "University of Lisbon – Faculty of Arts")}
              </span>
              <span className="flex items-center gap-1.5">
                <BookOpen className="w-4 h-4" />
                {t("Linguística Computacional & Tradução", "Computational Linguistics & Translation")}
              </span>
            </div>
            <p className="text-primary-foreground/80 font-body text-base leading-relaxed max-w-2xl">
              {t(
                "Doutoramento em Linguística Computacional (2010) pela Universidade de Lisboa. Diretora do Mestrado em Tradução e Coordenadora científica do curso de \"Tradução e Tecnologias de Informação Linguística\" do Camões, I.P. Investigadora no Centro de Linguística da Universidade de Lisboa, com trabalho nas áreas de semântica lexical computacional, tradução automática, pós-edição e recursos linguísticos.",
                "PhD in Computational Linguistics (2010) from the University of Lisbon. Director of the Master's in Translation and Scientific Coordinator of the \"Translation and Linguistic Information Technologies\" course at Camões, I.P. Researcher at the Linguistics Centre of the University of Lisbon, working in computational lexical semantics, machine translation, post-editing, and linguistic resources."
              )}
            </p>
          </div>
        </div>
        <nav className="mt-12 flex flex-wrap gap-3 font-body text-sm">
          {navItems.map((item) => {
            const label = t(item.pt, item.en);
            const href = item.pt.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/ç/g, "c");
            return (
              <a
                key={item.pt}
                href={`#${href}`}
                className="px-4 py-2 border border-primary-foreground/20 rounded-full hover:bg-primary-foreground/10 transition-colors"
              >
                {label}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default HeroSection;
