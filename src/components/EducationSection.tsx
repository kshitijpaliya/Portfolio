
import { GraduationCap } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"

const education = [
  {
    school: "Manipal Institute of Technology, Manipal",
    degree: "BTech, Information Technology",
    period: "2022 - 2026",
    score: "Current CGPA: 7.86"
  },
  {
    school: "Namo Rims International School & Junior College, Pune",
    degree: "HSC Class 12",
    period: "2020 - 2022",
    score: "Percentage: 85.5%"
  },
  {
    school: "Army Public School, Ahmednagar",
    degree: "CBSE Class 10",
    period: "2010 - 2020",
    score: "Percentage: 95.2%"
  }
]

const EducationSection = () => {
  return (
    <section className="py-16 px-6 bg-background-accent" id="education">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">Education</h2>
        
        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card key={index} className="bg-background-secondary border-border">
              <CardHeader className="flex flex-row items-center gap-4">
                <GraduationCap className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle className="text-white">{edu.school}</CardTitle>
                  <CardDescription className="text-text-muted">{edu.degree}</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-text-muted">{edu.period}</p>
                <p className="font-medium text-primary">{edu.score}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EducationSection
