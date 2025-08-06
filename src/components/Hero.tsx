import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Download, ExternalLink } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen relative flex items-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Developer workspace" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/90" />
        <div className="absolute inset-0 bg-hero-gradient" />
      </div>
      
      {/* Content */}
      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-4xl">
          <div className="mb-6">
            <Badge variant="secondary" className="mb-4 text-sm">
              Available for opportunities
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="gradient-text">Full Stack</span>
              <br />
              Developer
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
              Crafting exceptional digital experiences with modern technologies. 
              Passionate about clean code, innovative solutions, and bringing ideas to life.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <Button size="lg" className="hover-lift">
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <Button variant="outline" size="lg" className="hover-lift">
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <ExternalLink className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 right-20 animate-float">
        <div className="w-20 h-20 rounded-full bg-primary/20 blur-xl" />
      </div>
      <div className="absolute bottom-20 left-20 animate-float" style={{ animationDelay: '2s' }}>
        <div className="w-16 h-16 rounded-full bg-accent/30 blur-xl" />
      </div>
    </section>
  );
};

export default Hero;