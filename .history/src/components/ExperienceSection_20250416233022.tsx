
import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"

const ExperienceSection = () => {
  return (
    <section className="py-16 px-6 bg-background-secondary" id="experience">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">Experience</h2>
        
        <Card className="mb-8 bg-background border-border">
          <CardHeader>
            <CardTitle className="text-white">SDE Intern</CardTitle>
            <CardDescription className="text-text-muted">ChipIOT Embedded Solutions India Pvt Ltd | May 2024 - June 2024</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2 text-white">
              <li>Developed comprehensive understanding of AWS services including EC2, IoT Core, Lambda, and DynamoDB</li>
              <li>Implemented full IoT solution from sensor data collection to cloud storage</li>
              <li>Created MQTT Broker using AWS IoT Core and ESP32 for secure data transmission</li>
              <li>Developed AWS Lambda Functions for data processing and storage</li>
              <li>Configured AWS Services including EC2, S3, RDS, and IAM</li>
            </ul>
          </CardContent>
        </Card>

        <div className="text-center mt-8">
          <a href="https://linkedin.com/in/kshitij-paliya" target="_blank" rel="noopener noreferrer">
            <Button>View Full Experience</Button>
          </a>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
