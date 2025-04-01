
import { Code, Server, Layout, Database, Smartphone, Settings } from "lucide-react";

const SkillCategory = ({ 
  title, 
  skills, 
  icon 
}: { 
  title: string; 
  skills: string[]; 
  icon: React.ReactNode;
}) => {
  return (
    <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
      <div className="flex items-center gap-2 mb-4 text-primary">
        {icon}
        <h3 className="text-xl font-medium">{title}</h3>
      </div>
      <div className="flex flex-wrap">
        {skills.map((skill) => (
          <span key={skill} className="skill-tag dark:bg-secondary/50">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const skills = [
    {
      title: "Frontend Development",
      icon: <Layout size={20} />,
      skills: [
        "HTML5", "CSS3", "JavaScript", "TypeScript", "React", 
        "Vue.js", "Angular", "Next.js", "TailwindCSS", "SCSS"
      ]
    },
    {
      title: "Backend Development",
      icon: <Server size={20} />,
      skills: [
        "Node.js", "Express", "Python", "Django", "Ruby on Rails", 
        "GraphQL", "REST API", "PHP", "Laravel"
      ]
    },
    {
      title: "Database",
      icon: <Database size={20} />,
      skills: [
        "MongoDB", "PostgreSQL", "MySQL", "Firebase", 
        "Redis", "DynamoDB", "SQL Server"
      ]
    },
    {
      title: "Mobile Development",
      icon: <Smartphone size={20} />,
      skills: [
        "React Native", "Flutter", "Ionic", "Android", "iOS"
      ]
    },
    {
      title: "DevOps & Tools",
      icon: <Settings size={20} />,
      skills: [
        "Git", "GitHub", "CI/CD", "Docker", "Kubernetes", 
        "AWS", "Azure", "Nginx", "Jenkins", "Linux"
      ]
    },
    {
      title: "Programming Languages",
      icon: <Code size={20} />,
      skills: [
        "JavaScript", "Python", "TypeScript", "PHP", 
        "Ruby", "Java", "C#", "Go"
      ]
    }
  ];

  return (
    <section id="skills">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="mb-4">My Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I've worked with a wide range of technologies across the full stack. 
            Here are the key skills and technologies I've mastered over the years.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((category) => (
            <SkillCategory
              key={category.title}
              title={category.title}
              skills={category.skills}
              icon={category.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
