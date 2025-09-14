const About = () => {
  return (
    <section id="about" className="flex flex-col md:flex-row items-start justify-start gap-8 md:gap-5 py-16">
      <div
        className="about-bio flex flex-col md:w-2/3"
        data-aos="fade-up"
        data-aos-once="true"
      >
        <h2 className="text-4xl text-indigo-500 font-semibold mb-6">
          About
        </h2>
        <p className="text-12 md:text-md leading-8">
          My interest in programming sparked when I was working as a project officer in a university, 
          managing a mobile app project that promote literature in Hong Kong. 
          I was fascinated by how an idea can be transformed into something tangible and impactful with coding.
          From that moment, I decided to pivot my career into software
          engineering. After diving headfirst into a 6-month full-stack web
          development bootcamp at Le Wagon, my passion for learning led me to
          Python, React and TypeScript. With never-ending curiosity, I'm always learning new things and practicing to become a better developer. 
          I love crafting interactive web applications that tackle real challenges in both my life and at work.
        </p>
        <p className="text-12 md:text-md leading-8 pt-4">When I'm not coding, you can find me exploring new places, trying new restaurants and taking dance classes. </p>
      </div>

      <div className="flex-shrink-0">
        <img
          className="about-image rounded-2xl w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover shadow-lg"
          src="/ellen-profile.jpg"
          alt="Ellen's profile pic"
          data-aos="fade-up"
          data-aos-once="true"
        />
      </div>
    </section>
  );
};

export default About;
