import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["C", "C++", "HTML", "CSS", "JavaScript (ES6+)", "TypeScript"],
      color: "bg-accent/10 text-accent hover:bg-accent/20",
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React", "Tailwind CSS", "Express.js", "Laravel"],
      color: "bg-primary/10 text-primary hover:bg-primary/20",
    },
    {
      title: "Tools & Platforms",
      skills: ["GitHub", "Postman", "VS Code", "SQLite3", "MySQL"],
      color: "bg-secondary/10 text-secondary hover:bg-secondary/20",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 text-gradient">Technical Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications and IoT solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card
              key={category.title}
              className="hover:shadow-lg transition-all hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="text-xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className={`${category.color} transition-all cursor-default`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
