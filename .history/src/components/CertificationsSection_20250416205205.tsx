
import { Award } from "lucide-react"
import { Card, CardContent } from "./ui/card"

const certifications = [
  {
    title: "AWS Cloud Technical Essentials",
    link: "#"
  },
  {
    title: "Programming for Everybody (Getting Started with Python)",
    link: "#"
  }
]

const CertificationsSection = () => {
  return (
    <section className="py-16 px-6 bg-background-secondary" id="certifications">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">Certifications</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <a 
              key={index} 
              href={cert.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="hover:shadow-xl transition-shadow bg-background-accent border-border">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4">
                    <Award className="w-8 h-8 text-primary" />
                    <h3 className="text-lg font-semibold text-white group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CertificationsSection
