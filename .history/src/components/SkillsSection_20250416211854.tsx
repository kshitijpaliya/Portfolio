
import { Card, CardContent } from "./ui/card"

const skills = {
  "Languages": ["C", "C++", "Python", "Java", "HTML", "CSS", "JavaScript", "SQL", "C#"],
  "Cloud & DevOps": ["AWS EC2", "AWS S3", "AWS IoT Core", "AWS Lambda", "DynamoDB", "RDS", "IAM"],
  "Frameworks & Tools": ["Node.js", "Express", "React", "ESP32", "ESP-IDF", "Git", "GitHub", "Figma", "PostgreSQL"],
  "Professional": ["Operations Management", "Leadership", "Problem Solving", "Project Management"]
}

const SkillsSection = () => {
  return (
    <section className="py-16 px-6 bg-background-secondary" id="skills">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">Skills & Technologies</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <Card key={category} className="bg-background-accent border-border">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4 text-white">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-primary/10 text-primary-light rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
