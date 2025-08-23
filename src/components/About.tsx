import { Card } from "@/components/ui/card";
import { Code2, Brain, Database, Palette } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Full Stack Development",
      description: "Expertise in modern web technologies, from responsive frontends to scalable backend systems."
    },
    {
      icon: Brain,
      title: "AI/ML Innovation",
      description: "Passionate about machine learning algorithms and artificial intelligence applications."
    },
    {
      icon: Database,
      title: "Database Management",
      description: "Proficient in designing and optimizing database systems for performance and scalability."
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating intuitive and visually appealing user interfaces with attention to detail."
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Dedicated and enthusiastic fresher with a specialization in Artificial Intelligence and Machine Learning, 
            equipped with practical knowledge of Java, SQL, and full-stack web development. Seeking an entry-level position 
            in a forward-thinking organization where I can apply my skills, work on real-time applications, and grow through 
            continuous learning and collaboration.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <Card 
              key={index} 
              className="p-6 bg-gradient-card border-border/50 hover:shadow-card transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-gradient-primary rounded-lg">
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-card p-8 rounded-xl border border-border/50">
            <p className="text-lg leading-relaxed max-w-4xl mx-auto">
              With a strong foundation in both traditional software development and emerging AI technologies, 
              I bring a unique perspective to every project. My goal is to create solutions that are not only 
              technically sound but also user-friendly and innovative. I'm constantly learning and adapting 
              to new technologies to stay at the forefront of the rapidly evolving tech landscape.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;