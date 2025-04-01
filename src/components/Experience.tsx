
import { Briefcase, Building, Calendar } from "lucide-react";

const ExperienceItem = ({
  title,
  company,
  period,
  industry,
  description,
}: {
  title: string;
  company: string;
  period: string;
  industry: string;
  description: string[];
}) => {
  return (
    <div className="bg-card border border-border rounded-lg p-6 shadow-sm mb-6">
      <div className="md:flex md:justify-between md:items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold mb-1">{title}</h3>
          <div className="flex items-center text-muted-foreground mb-2">
            <Building size={16} className="mr-1" />
            <span className="mr-3">{company}</span>
            <span className="bg-secondary/60 text-secondary-foreground px-2 py-0.5 rounded text-xs font-medium">
              {industry}
            </span>
          </div>
        </div>
        <div className="flex items-center text-muted-foreground mt-2 md:mt-0">
          <Calendar size={16} className="mr-1" />
          <span>{period}</span>
        </div>
      </div>
      <ul className="list-disc pl-5 space-y-2">
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

const Experience = () => {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "HealthTech Solutions",
      period: "Jan 2021 - Present",
      industry: "Healthcare",
      description: [
        "Lead the frontend development of a patient management platform used by over 50 hospitals nationwide.",
        "Implemented a responsive UI with React and TypeScript that decreased patient check-in time by 40%.",
        "Collaborated with UX designers to create HIPAA-compliant interfaces focused on accessibility.",
        "Mentored junior developers and conducted code reviews to maintain high quality standards.",
        "Optimized application performance, achieving a 60% reduction in load time."
      ]
    },
    {
      title: "Full Stack Developer",
      company: "FinanceFlow Systems",
      period: "Mar 2018 - Dec 2020",
      industry: "Finance",
      description: [
        "Developed and maintained a financial analytics dashboard using React, Node.js, and MongoDB.",
        "Built RESTful APIs with Express.js that processed over 10,000 transactions daily.",
        "Implemented secure authentication systems with OAuth 2.0 and JWT for banking-grade security.",
        "Collaborated with data scientists to visualize complex financial data using D3.js.",
        "Participated in agile development cycles with bi-weekly sprints and regular feature releases."
      ]
    },
    {
      title: "Web Developer",
      company: "RetailRocket E-commerce",
      period: "Jun 2016 - Feb 2018",
      industry: "E-commerce",
      description: [
        "Created responsive e-commerce websites for clients with Vue.js and Laravel.",
        "Implemented shopping cart systems and payment gateways that processed over $1M in transactions.",
        "Optimized website SEO, resulting in 40% increase in organic traffic.",
        "Designed and implemented inventory management systems integrated with warehouse operations.",
        "Built customer analytics tools that provided insights into shopping patterns and preferences."
      ]
    }
  ];

  return (
    <section id="experience" className="bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="mb-4">
            <span className="inline-block">Work Experience</span>
            <Briefcase className="inline-block ml-3 mb-1" size={24} />
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I've had the opportunity to work across various industries, each providing unique 
            challenges and learning experiences. Here's where my journey has taken me so far.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
