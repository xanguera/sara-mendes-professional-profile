import { GraduationCap, MapPin, Mail, BookOpen } from "lucide-react";

const HeroSection = () => {
  return (
    <header className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, hsl(35 80% 50% / 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, hsl(35 80% 50% / 0.1) 0%, transparent 40%)'
        }} />
      </div>
      <div className="section-container relative py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
          <div className="flex-1">
            <p className="font-body text-sm uppercase tracking-[0.2em] text-primary-foreground/60 mb-4">
              Curriculum Vitae
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.1]">
              Sara Gonçalves Pedro Parente Mendes
            </h1>
            <div className="w-16 h-0.5 bg-accent mb-6" />
            <div className="flex flex-wrap gap-4 text-sm text-primary-foreground/70 font-body mb-8">
              <span className="flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4" />
                Professora Auxiliar
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4" />
                Universidade de Lisboa – Faculdade de Letras
              </span>
              <span className="flex items-center gap-1.5">
                <BookOpen className="w-4 h-4" />
                Linguística Computacional & Tradução
              </span>
            </div>
            <p className="text-primary-foreground/80 font-body text-base leading-relaxed max-w-2xl">
              Doutoramento em Linguística Computacional (2010) pela Universidade de Lisboa. Diretora do Mestrado em Tradução e Coordenadora científica do curso de "Tradução e Tecnologias de Informação Linguística" do Camões, I.P. Investigadora no Centro de Linguística da Universidade de Lisboa, com trabalho nas áreas de semântica lexical computacional, tradução automática, pós-edição e recursos linguísticos.
            </p>
          </div>
        </div>
        <nav className="mt-12 flex flex-wrap gap-3 font-body text-sm">
          {["Formação", "Percurso", "Publicações", "Projetos", "Orientações", "Distinções"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/ç/g, "c")}`}
              className="px-4 py-2 border border-primary-foreground/20 rounded-full hover:bg-primary-foreground/10 transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default HeroSection;
