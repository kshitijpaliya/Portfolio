
import { Github, Linkedin, Mail, Phone } from "lucide-react"
import { Button } from "./ui/button"

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center p-6 bg-background">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-6xl md:text-7xl font-bold mb-10 text-blue-500">
          Kshitij Paliya
        </h1>
        <p className="text-xl md:text-3xl text-white font-bold mb-8 ">
          Aspiring Software Developer & Cloud Enthusiast
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <a href="https://github.com/kshitijpaliya" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="gap-2 bg-background-secondary text-white border-primary/20 hover:bg-white/70 hover:text-primary">
              <Github size={20} />
              GitHub
            </Button>
          </a>
          <a href="https://linkedin.com/in/kshitij-paliya" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="gap-2 bg-background-secondary text-white border-primary/20 hover:bg-primary/10">
              <Linkedin size={20} />
              LinkedIn
            </Button>
          </a>
          <a href="mailto:kshitij.paliya1@gmail.com">
            <Button variant="outline" className="gap-2 bg-background-secondary text-white border-primary/20 hover:bg-primary/10">
              <Mail size={20} />
              Email
            </Button>
          </a>
          <a href="tel:+917722069580">
            <Button variant="outline" className="gap-2 bg-background-secondary text-white border-primary/20 hover:bg-primary/10">
              <Phone size={20} />
              Call
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
