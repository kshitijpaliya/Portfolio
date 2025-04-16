
import { Github, Linkedin, Mail, Phone } from "lucide-react"
import { Button } from "./ui/button"
import {TypingText} from "../components/ui/typing-animation"
const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center p-6 bg-background">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Hello, I'm
        </h1>
        <TypingText text="Kshitij Paliya" className="text-blue-500" />

        <p className="text-xl md:text-3xl text-white font-bold mb-8 ">
          Aspiring Software Developer & Cloud Enthusiast
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <a href="https://github.com/kshitijpaliya" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="gap-2 bg-background-secondary text-white border-primary hover:bg-white hover:text-primary-dark hover:border-white">
              <Github size={20} />
              GitHub
            </Button>
          </a>
          <a href="https://linkedin.com/in/kshitij-paliya" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="gap-2 bg-background-secondary text-white  border-primary hover:bg-white hover:text-primary-dark hover:border-white">
              <Linkedin size={20} />
              LinkedIn
            </Button>
          </a>
          <a href="mailto:kshitij.paliya1@gmail.com">
            <Button variant="outline" className="gap-2 bg-background-secondary text-white  border-primary hover:bg-white hover:text-primary-dark hover:border-white">
              <Mail size={20} />
              Email
            </Button>
          </a>
          <a href="tel:+917722069580">
            <Button variant="outline" className="gap-2 bg-background-secondary text-white  border-primary hover:bg-white hover:text-primary-dark hover:border-white">
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
