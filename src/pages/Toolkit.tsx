import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Toolkit = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section id="toolkit" className="pt-32 pb-32">
      <h2 
        className="text-4xl text-indigo-500 font-semibold mb-12"
        data-aos="fade-up"
        data-aos-once="true"
      >
        My Toolkit
      </h2>
      <div className="block text-center" data-aos="fade-up" data-aos-once="true">
        <ul className="grid grid-cols-3 md:grid-cols-6 gap-6">
          <li className="list-none leading-8">
            <div className="toolkit-icon">
              <i className="devicon-python-plain"></i>
            </div>
            <p>Python</p>
          </li>

          <li className="list-none leading-8">
            <div className="toolkit-icon">
              <i className="devicon-django-plain"></i>
            </div>
            Django
          </li>

          <li className="list-none leading-8">
            <div className="toolkit-icon">
              <i className="devicon-react-plain"></i>
            </div>
            React
          </li>

          <li className="list-none leading-8">
            <div className="toolkit-icon">
              <i className="devicon-javascript-plain"></i>
            </div>
            JavaScript
          </li>

          <li className="list-none leading-8">
            <div className="toolkit-icon">
              <i className="devicon-typescript-plain"></i>
            </div>
            TypeScript
          </li>

          <li className="list-none leading-8">
            <div className="toolkit-icon">
              <i className="devicon-css3-plain"></i>
            </div>
            CSS3
          </li>

          <li className="list-none leading-8">
            <div className="toolkit-icon">
              <i className="devicon-postgresql-plain"></i>
            </div>
            PostgreSQL
          </li>

          <li className="list-none leading-8">
            <div className="toolkit-icon">
              <i className="devicon-bootstrap-plain"></i>
            </div>
            Bootstrap
          </li>

          <li className="list-none leading-8">
            <div className="toolkit-icon">
              <i className="devicon-html5-plain"></i>
            </div>
            HTML
          </li>

          <li className="list-none leading-8">
            <div className="toolkit-icon">
              <i className="devicon-github-original"></i>
            </div>
            Github
          </li>

          <li className="list-none leading-8">
            <div className="toolkit-icon">
              <i className="devicon-heroku-original"></i>
            </div>
            Heroku
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Toolkit;
