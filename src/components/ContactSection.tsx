
import { Github, Linkedin, Mail, Phone } from "lucide-react"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"

const ContactSection = () => {
  return (
    <section className="py-16 px-6 bg-background-accent" id="contact">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">Get In Touch</h2>
        
        <Card className="max-w-2xl mx-auto bg-background-secondary border-border">
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a
                href="mailto:kshitij.paliya1@gmail.com"
                className="flex items-center p-4 rounded-lg hover:bg-background/10 transition-colors"
              >
                <Mail className="h-6 w-6 text-primary mr-3" />
                <div>
                  <p className="font-medium text-white">Email</p>
                  <p className="text-sm text-text-muted">kshitij.paliya1@gmail.com</p>
                </div>
              </a>
              
              <a
                href="tel:+917722069580"
                className="flex items-center p-4 rounded-lg hover:bg-background/10 transition-colors"
              >
                <Phone className="h-6 w-6 text-primary mr-3" />
                <div>
                  <p className="font-medium text-white">Phone</p>
                  <p className="text-sm text-text-muted">+91 7722069580</p>
                </div>
              </a>
              
              <a
                href="https://github.com/kshitijpaliya"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 rounded-lg hover:bg-background/10 transition-colors"
              >
                <Github className="h-6 w-6 text-primary mr-3" />
                <div>
                  <p className="font-medium text-white">GitHub</p>
                  <p className="text-sm text-text-muted">github.com/kshitijpaliya</p>
                </div>
              </a>
              
              <a
                href="https://linkedin.com/in/kshitij-paliya"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 rounded-lg hover:bg-background/10 transition-colors"
              >
                <Linkedin className="h-6 w-6 text-primary mr-3" />
                <div>
                  <p className="font-medium text-white">LinkedIn</p>
                  <p className="text-sm text-text-muted">linkedin.com/in/kshitij-paliya</p>
                </div>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default ContactSection
