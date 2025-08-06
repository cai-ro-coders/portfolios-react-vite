import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with real-time inventory, payment processing, and admin dashboard. Built with React, Node.js, and PostgreSQL.",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      github: "#",
      live: "#",
      featured: true
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, team workspaces, and advanced filtering capabilities.",
      tech: ["Next.js", "TypeScript", "Prisma", "WebSockets"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      github: "#",
      live: "#",
      featured: true
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time analytics dashboard with interactive charts, data visualization, and customizable reporting features.",
      tech: ["Vue.js", "Python", "FastAPI", "Chart.js"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      github: "#",
      live: "#",
      featured: false
    },
    {
      title: "Social Media API",
      description: "RESTful API for social media platform with authentication, content management, and real-time messaging.",
      tech: ["Express.js", "MongoDB", "Redis", "Socket.io"],
      image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=600&h=400&fit=crop",
      github: "#",
      live: "#",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Featured Work</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Recent <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of my recent work, featuring full-stack applications and innovative solutions
            </p>
          </div>
          
          {/* Featured Projects */}
          <div className="space-y-16 mb-16">
            {featuredProjects.map((project, index) => (
              <Card 
                key={project.title} 
                className="overflow-hidden hover-lift glass animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
                  <div className={`${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <Badge variant="secondary" className="mb-4 w-fit">Featured Project</Badge>
                    <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                    <p className="text-muted-foreground mb-6">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline">{tech}</Badge>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <Button variant="outline" size="sm">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                      <Button size="sm">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          {/* Other Projects */}
          <div className="grid md:grid-cols-2 gap-8">
            {otherProjects.map((project, index) => (
              <Card 
                key={project.title} 
                className="overflow-hidden project-card glass animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">{tech}</Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm">
                      <Github className="mr-2 h-3 w-3" />
                      Code
                    </Button>
                    <Button size="sm">
                      <ExternalLink className="mr-2 h-3 w-3" />
                      Demo
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
