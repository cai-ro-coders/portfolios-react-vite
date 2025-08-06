import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description: "Leading development of scalable web applications using React, Node.js, and AWS. Mentoring junior developers and architecting system solutions.",
      highlights: [
        "Improved application performance by 40%",
        "Led a team of 5 developers",
        "Migrated legacy systems to modern stack"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "Innovation Labs",
      location: "Austin, TX",
      period: "2020 - 2022",
      description: "Developed and maintained multiple client projects using modern web technologies. Collaborated closely with design and product teams.",
      highlights: [
        "Built 15+ client projects from scratch",
        "Implemented CI/CD pipelines",
        "Reduced deployment time by 60%"
      ]
    },
    {
      title: "Frontend Developer",
      company: "StartupXYZ",
      location: "Remote",
      period: "2019 - 2020",
      description: "Focused on creating responsive, user-friendly interfaces using React and modern CSS frameworks. Worked in an agile environment.",
      highlights: [
        "Increased user engagement by 25%",
        "Implemented responsive design system",
        "Collaborated with UX/UI designers"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Career Journey</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Professional <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Building innovative solutions and leading technical teams across diverse industries
            </p>
          </div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card 
                key={exp.title} 
                className="p-8 hover-lift glass animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                      <h3 className="text-2xl font-bold">{exp.title}</h3>
                      <span className="hidden md:block text-muted-foreground">•</span>
                      <span className="text-primary font-semibold">{exp.company}</span>
                    </div>
                    
                    <div className="flex flex-col md:flex-row gap-4 mb-4 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.highlights.map((highlight, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
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

export default Experience;