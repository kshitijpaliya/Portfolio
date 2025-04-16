
import { useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "./ui/button"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md z-50 border-b border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <Button 
            variant="link" 
            onClick={() => scrollToSection("top")} 
            className="text-xl font-bold text-white hover:text-primary"
          >
          {'< />'}
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:bg-primary/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu />
          </Button>

          <div className="hidden md:flex gap-6">
            {["experience", "projects", "skills", "education", "certifications", "contact"].map((section) => (
              <Button 
                key={section}
                variant="ghost" 
                onClick={() => scrollToSection(section)} 
                className="text-white hover:text-primary hover:bg-primary/10 capitalize"
              >
                {section}
              </Button>
            ))}
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2 bg-background-secondary">
            {["experience", "projects", "skills", "education", "certifications", "contact"].map((section) => (
              <Button 
                key={section}
                variant="ghost" 
                className="w-full justify-start text-white hover:text-primary hover:bg-primary/10 capitalize"
                onClick={() => scrollToSection(section)}
              >
                {section}
              </Button>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
