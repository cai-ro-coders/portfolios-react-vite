import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Code, Database, Laptop, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "React, TypeScript, Next.js"
    },
    {
      icon: Database,
      title: "Backend Development", 
      description: "Node.js, Python, PostgreSQL"
    },
    {
      icon: Laptop,
      title: "Full Stack Solutions",
      description: "End-to-end application development"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Fast, scalable applications"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">About Me</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Passionate About <span className="gradient-text">Innovation</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              With 5+ years of experience in full-stack development, I specialize in creating 
              scalable web applications that deliver exceptional user experiences and robust functionality.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
              <p className="text-muted-foreground mb-4">
                I started my development journey with curiosity about how websites work, and that curiosity 
                has evolved into a passion for building complex, user-centric applications.
              </p>
              <p className="text-muted-foreground mb-6">
                Today, I focus on modern web technologies, clean architecture, and creating solutions 
                that not only meet business requirements but exceed user expectations.
              </p>
              <div className="flex flex-wrap gap-2">
                {["React", "TypeScript", "Node.js", "Python", "PostgreSQL", "AWS"].map((tech) => (
                  <Badge key={tech} variant="secondary">{tech}</Badge>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <Card 
                  key={highlight.title} 
                  className="p-6 hover-lift glass animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <highlight.icon className="h-8 w-8 text-primary mb-3" />
                  <h4 className="font-semibold mb-2">{highlight.title}</h4>
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;