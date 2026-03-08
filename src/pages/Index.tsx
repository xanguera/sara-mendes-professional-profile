import HeroSection from "@/components/HeroSection";
import EducationSection from "@/components/EducationSection";
import LanguagesSection from "@/components/LanguagesSection";
import CareerSection from "@/components/CareerSection";
import PublicationsSection from "@/components/PublicationsSection";
import OnlineResourcesSection from "@/components/OnlineResourcesSection";
import ProjectsSection from "@/components/ProjectsSection";
import SupervisionSection from "@/components/SupervisionSection";
import PeerReviewSection from "@/components/PeerReviewSection";
import AwardsSection from "@/components/AwardsSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <EducationSection />
      <LanguagesSection />
      <CareerSection />
      <PublicationsSection />
      <OnlineResourcesSection />
      <ProjectsSection />
      <SupervisionSection />
      <PeerReviewSection />
      <AwardsSection />
      <FooterSection />
    </div>
  );
};

export default Index;
