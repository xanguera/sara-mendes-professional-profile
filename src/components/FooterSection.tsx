import { useLanguage } from "@/contexts/LanguageContext";

const FooterSection = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="section-container text-center">
        <p className="font-display text-lg mb-2">Sara Mendes</p>
        <p className="font-body text-sm text-primary-foreground/60 mb-4">
          {t("Professora Auxiliar", "Assistant Professor")} · {t("Universidade de Lisboa – Faculdade de Letras", "University of Lisbon – Faculty of Arts")}
        </p>
        <div className="flex justify-center gap-4 text-sm font-body text-primary-foreground/50">
          <a
            href="https://www.cienciavitae.pt/portal/1810-D5E3-AA36"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary-foreground/80 transition-colors"
          >
            Ciência Vitae
          </a>
          <span>·</span>
          <span>Ciência ID: 1810-D5E3-AA36</span>
        </div>
        <p className="font-body text-xs text-primary-foreground/30 mt-8">
          © {new Date().getFullYear()} Sara Mendes. {t("Nomes de citação: Mendes, Sara.", "Citation name: Mendes, Sara.")}
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
