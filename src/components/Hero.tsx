
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="section-container">
        <div className="max-w-3xl">
          <p className="text-primary font-medium mb-4 animate-fade-in">Hi, my name is</p>
          <h1 className="mb-4 animate-slide-up">
            <span className="block">John Developer.</span>
            <span className="block text-muted-foreground mt-2">I build things for the web.</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl animate-slide-up" style={{ animationDelay: "0.1s" }}>
            I'm a software developer specializing in building exceptional digital experiences. 
            Currently, I'm focused on building accessible, human-centered products.
          </p>
          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <a 
              href="#projects" 
              className="btn-outline inline-flex items-center gap-2"
            >
              Check out my work <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
