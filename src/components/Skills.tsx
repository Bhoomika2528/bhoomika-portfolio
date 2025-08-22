import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["C", "Python", "Java"]
    },
    {
      category: "Concepts",
      skills: ["OOP using Python and Java", "Data Structures and Algorithms"]
    },
    {
      category: "FrontEnd",
      skills: ["HTML", "CSS", "JavaScript"]
    },
    {
      category: "BackEnd",
      skills: ["Spring Boot"]
    },
    {
      category: "Database",
      skills: ["MySQL"]
    },
    {
      category: "Security",
      skills: ["Cybersecurity Fundamentals"]
    },
    {
      category: "Tools & Platforms",
      skills: ["Git", "GitHub", "VS Code", "Figma"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Skills & Technologies</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for building modern applications and AI-driven solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-gradient-card p-6 rounded-xl border border-border/50 hover:shadow-card transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-4 text-primary">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex}
                    variant="secondary" 
                    className="text-sm bg-background/50 text-foreground hover:bg-primary/20 transition-colors duration-200"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;