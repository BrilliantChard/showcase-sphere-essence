
const About = () => {
  return (
    <section id="about" className="bg-secondary/30">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-8 text-center">About Me</h2>
          <div className="grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-3 order-2 md:order-1">
              <p className="mb-4">
                Hello! I'm John, a passionate software developer with over 5 years of 
                experience building elegant, responsive and user-friendly websites and 
                applications. My journey in tech began with a Computer Science degree 
                from Tech University, and I've been continuously learning and expanding 
                my skills ever since.
              </p>
              <p className="mb-4">
                I've had the privilege of working across diverse industries, which has 
                given me a unique perspective on software development and problem-solving. 
                From healthcare to finance to e-commerce, I bring adaptability and 
                industry-specific knowledge to my technical expertise.
              </p>
              <p>
                Outside of coding, I enjoy hiking, playing chess, and contributing to open-source 
                projects. I'm always looking for new challenges and opportunities to grow.
              </p>
            </div>
            <div className="md:col-span-2 order-1 md:order-2 flex justify-center">
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary">
                <div className="w-full h-full bg-gradient-to-br from-primary to-teal-dark animate-pulse"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-bold">JD</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
