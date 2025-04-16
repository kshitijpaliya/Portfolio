
import HeroSection from "@/components/HeroSection"
import ExperienceSection from "@/components/ExperienceSection"
import ProjectsSection from "@/components/ProjectsSection"
import SkillsSection from "@/components/SkillsSection"
import EducationSection from "@/components/EducationSection"
import ContactSection from "@/components/ContactSection"
import Navbar from "@/components/Navbar"
import CertificationsSection from "@/components/CertificationsSection"

const Index = () => {
  return (
    <div className="min-h-screen bg-background" id="top">
      <Navbar />
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <EducationSection />
      <CertificationsSection />
      <ContactSection />
    </div>
  )
}

export default Index
