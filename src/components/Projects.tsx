
import { ExternalLink, Github } from "lucide-react";

const ProjectCard = ({
  title,
  description,
  technologies,
  githubUrl,
  liveUrl,
  imageUrl,
}: {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
}) => {
  return (
    <div className="bg-card rounded-lg overflow-hidden shadow-sm border border-border">
      <div className="h-48 bg-muted relative">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
            <span className="text-2xl font-bold text-primary/40">{title.charAt(0)}</span>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-xs mr-2 mb-2"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-primary"
            >
              <Github size={16} className="mr-1" />
              Code
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-primary"
            >
              <ExternalLink size={16} className="mr-1" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Patient Portal",
      description:
        "A comprehensive patient management system for healthcare providers with appointment scheduling and medical records.",
      technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Express"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "FinTrack Dashboard",
      description:
        "Financial analytics platform for tracking investments, expenses and generating insights with customizable reports.",
      technologies: ["Vue.js", "D3.js", "Firebase", "Vuex", "TailwindCSS"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "E-commerce Platform",
      description:
        "Fully responsive e-commerce website with product catalog, shopping cart, payment integration and admin panel.",
      technologies: ["React", "Redux", "Node.js", "PostgreSQL", "Stripe API"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task management application with real-time updates, task assignment and progress tracking.",
      technologies: ["Next.js", "GraphQL", "Prisma", "Socket.io", "Auth0"],
      githubUrl: "#",
    },
    {
      title: "Weather Dashboard",
      description:
        "Interactive weather application that provides current conditions and forecasts using multiple weather APIs.",
      technologies: ["JavaScript", "Chart.js", "REST API", "Geolocation API"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Fitness Tracker",
      description:
        "Mobile-first web application for tracking workouts, setting fitness goals and analyzing progress over time.",
      technologies: ["React Native", "Redux", "Firebase", "Health API"],
      githubUrl: "#",
    },
  ];

  return (
    <section id="projects">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each one presented unique
            challenges and opportunities to learn and grow as a developer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
