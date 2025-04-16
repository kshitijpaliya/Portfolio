
import { ExternalLink, Github } from "lucide-react"
import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"

const projects = [
  {
    title: "HemoCare",
    description: "Hemodialysis Appointment Scheduling Mobile App",
    details: "Developed a mobile app for scheduling hemodialysis machines, enhancing hospital resource management with real-time updates and notifications. Implemented real-time updates and notifications with WebSockets and Node.js.",
    tech: ["React-Native", "Node.js", "Express.js", "MongoDB", "WebSockets", "AWS EC2"],
    link: "https://github.com/kshitijpaliya/HemoCare",
    demo:"https://github.com/kshitijpaliya/HemoCare"
  },
  {
    title: "Travelify",
    description: "AI-Based Travel Planner",
    details: "Intelligent travel planning application that generates detailed day-wise itineraries using Gemini API and Google Places API. Includes hotel suggestions with cost and location, and places to visit with detailed descriptions.",
    tech: ["React.js", "Tailwind", "Firebase", "Gemini API", "Google Places API"],
    link: "https://github.com/kshitijpaliya/Travelify",
    demo: "https://travelify-travel.vercel.app/"
  },
  {
    title: "VibeZ",
    description: "Event Management System",
    details: "Robust event management platform using PERN stack, enabling users to explore, filter, and purchase event tickets. Deployed on Koyeb with NeonDB for scalable performance.",
    tech: ["React.js", "PostgreSQL", "Node.js", "Express.js", "Koyeb", "NeonDB"],
    link: "https://github.com/kshitijpaliya/VibeZ",
    demo: "https://vibe-z-events.vercel.app/"
  },
  {
    title: "HomeZy",
    description: "Real Estate Website",
    details: "Built a responsive and user-friendly frontend for a real estate website using React.js. Utilized React's state management methods to handle user interactions.",
    tech: ["React.js", "JavaScript", "CSS", "State Management"],
    link: "https://github.com/kshitijpaliya/HomeZy",
    demo: "https://home-zy.vercel.app/"
  },
  {
    title: "To-Do List",
    description: "PERN Stack Todo Application",
    details: "Implemented CRUD operations for managing to-do items with PostgreSQL database integration. Handled HTTP requests using Express.js with CORS enabled.",
    tech: ["PostgreSQL", "Express.js", "React.js", "Node.js"],
    link: "https://github.com/kshitijpaliya/PERN_ToDo",
    demo: "https://github.com/kshitijpaliya/PERN_ToDo"
  }
]

const ProjectsSection = () => {
  return (
    <section className="py-16 px-6 bg-background-accent" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="bg-background border-border hover:shadow-xl transition-shadow max-w-50px">
              <CardHeader>
                <CardTitle className="text-white">{project.title}</CardTitle>
                <CardDescription className="text-text-muted">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-white mb-4">{project.details}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="bg-primary/20 text-primary hover:bg-primary/30">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" asChild className="bg-background text-white border-primary/20 hover:bg-white">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild className="bg-primary hover:bg-primary/90 text-white">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <a href="https://github.com/kshitijpaliya" target="_blank" rel="noopener noreferrer">
            <Button className="bg-primary hover:bg-primary/90 text-white">View All Projects</Button>
          </a>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
