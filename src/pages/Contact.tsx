const Contact = () => {
  return (
    <section id="contact" className="pb-32">
      <h2 className="text-4xl text-indigo-500 font-semibold pb-[4%]">
        Let's Connect!
      </h2>
      <div className="grid grid-cols-2">
        <p className="sm:text-2xl md:text-3xl">
          Feel free to contact me on LinkedIn. Also, see my GitHub for more
          projects!
        </p>
        <ul className="list-none flex justify-center gap-8 text-4xl">
          <li className="hover:text-indigo-400">
            <a
              className="social-list__link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/ellen-chan-01656731/"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </li>
          <li className="hover:text-indigo-400">
            <a
              className="social-list__link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/ellenycc"
            >
              <i className="fab fa-github"></i>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
