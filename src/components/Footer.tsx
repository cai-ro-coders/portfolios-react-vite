import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "mailto:hello@johndoe.dev", label: "Email" }
  ];

  return (
    <footer className="py-12 border-t bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold gradient-text mb-2">JD.dev</h3>
              <p className="text-muted-foreground">
                Building the future, one line of code at a time.
              </p>
            </div>
            
            <div className="flex items-center gap-6">
              <Badge variant="secondary" className="animate-pulse-glow">
                Available for work
              </Badge>
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
            <p className="flex items-center justify-center gap-2">
              © {currentYear} Built with 
              <Heart className="h-4 w-4 text-red-500" />
              by John Doe. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;