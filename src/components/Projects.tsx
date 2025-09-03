import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Code2 } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Apollo Pharmacy Website",
      description: "Developed a responsive web-based pharmacy website where users can browse and purchase medicines online. Features include user login, viewing all available medicines, adding items to the cart, accessing the payment page, and managing user sessions.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      demoLink: "https://bhoomikapharmacy.netlify.app/",
      githubLink: "https://github.com/Bhoomika2528/pharmacy"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work in web development and full-stack applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="p-6 bg-gradient-card border-border/50 hover:shadow-card transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary"
                      className="text-xs bg-background/50 text-foreground"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-4">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-primary/50 text-primary hover:bg-primary/10"
                    asChild
                  >
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-muted-foreground/50 text-muted-foreground hover:bg-muted/10"
                    asChild
                  >
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary/50 text-primary hover:bg-primary/10"
          >
            <Code2 className="mr-2 h-5 w-5" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;