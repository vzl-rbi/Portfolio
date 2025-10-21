import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ProjectsSection = () => {
  const projects = [
    {
      title: "React Dashboard with Laravel API Authentication",
      description:
        "Built a secure, role-based admin dashboard with complete authentication flow. Features protected routes, dynamic navigation, and seamless API integration.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Laravel", "REST API"],
      github: "https://github.com/vzl-rbi",
      demo: "#",
      date: "Jul 2025 - Aug 2025",
    },
    {
      title: "Fish Pond Monitoring System",
      description:
        "Designed an IoT-based system to monitor pond temperature and pH levels in real-time. Implemented alert system for automated monitoring and better management.",
      tech: ["IoT", "Sensors", "Arduino", "Real-time Monitoring"],
      github: "https://github.com/vzl-rbi",
      demo: "#",
      date: "2024",
    },
    {
      title: "Home Automation System (IoT)",
      description:
        "Created a smart home prototype integrating sensors, relays, and wireless communication. Designed for energy-efficient control and received recognition from Dr. Mahabir Pun.",
      tech: ["IoT", "Arduino", "Wireless Communication", "Home Automation"],
      github: "https://github.com/vzl-rbi",
      demo: "#",
      date: "2024",
    },
  ];

  return (
    <section className="py-20 bg-background" id="projects">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 text-gradient">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work showcasing full-stack development and IoT innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="flex flex-col hover:shadow-xl transition-all hover:-translate-y-2 glow-effect"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardHeader>
                <div className="text-xs text-muted-foreground mb-2">{project.date}</div>
                <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                <CardDescription className="text-sm">{project.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="flex gap-3 pt-4">
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="flex-1 hover:bg-accent hover:text-accent-foreground"
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2" size={16} />
                    Code
                  </a>
                </Button>
                <Button
                  asChild
                  size="sm"
                  className="flex-1 gradient-accent"
                >
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2" size={16} />
                    Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
