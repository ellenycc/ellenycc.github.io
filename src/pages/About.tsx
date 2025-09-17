const About = () => {
  return (
    <section id="about" className="flex flex-col md:flex-row items-start justify-start gap-5 md:gap-8 py-16">
      <div
        className="about-bio flex flex-col"
        data-aos="fade-up"
        data-aos-once="true"
      >
        <h2 className="text-4xl text-indigo-500 font-semibold mb-6">
          About Me
        </h2>
        <p className="text-base md:text-md leading-8">
          My programming journey began when I worked as a project officer and led the development of <a 
            href="https://apps.apple.com/tt/app/%E5%9C%A8%E5%9C%B0%E8%AE%80%E5%AF%AB/id1598243347" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="underline text-orange-400 font-bold">MyTopoHK
          </a>,
          a mobile application that promotes Hong Kong literature. 
          I discovered the beauty of how coding can transform an idea into something tangible and impactful.
          From that moment, I decided to pivot my career into software engineering. I love crafting interactive web applications that tackle real challenges in both my life and at work. 
          With never-ending curiosity, I'm always learning new skills and building to become a better developer.
        </p>
        <p className="text-base md:text-md leading-8 pt-4">When I'm not coding, you can find me in cute cafes ☕️, visiting new exhibitions 🖼️ or taking dance classes 💃. </p>
      </div>

      <div className="flex-shrink-0 mx-auto">
        <img
          className="about-image rounded-2xl w-80 h-80 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover shadow-lg"
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
