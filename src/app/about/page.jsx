"use client";

function About() {
  return (
    <section className="bg-background text-foreground px-4 py-12 sm:px-6 md:px-12 lg:px-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* IMAGE */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/pic2.jpg"
            alt="About"
            className="w-full max-w-xs sm:max-w-sm md:max-w-full rounded-2xl shadow-xl object-cover"
          />
        </div>

        {/* CONTENT */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          
          {/* HEADING */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 relative inline-block">
            About Me
            <span className="absolute left-0 -bottom-2 h-1 w-full bg-[#b74b4b] dark:bg-indigo-400"></span>
          </h2>

          {/* DESCRIPTION */}
          <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-4">
            Hello, I am{" "}
            <span className="text-[#b74b4b] font-semibold">
              Shumail Rahat Khan
            </span>
            , a Computer Science undergraduate student at Uttarakhand Technical
            University. I am passionate about web development and modern software
            technologies.
          </p>

          <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-6">
            I work with{" "}
            <span className="text-[#b74b4b] font-semibold">
              Next.js, Tailwind CSS, MySQL, HTML, Excel, Python, and JavaScript
            </span>
            . I am also a national-level karate player with over{" "}
            <span className="text-[#b74b4b] font-semibold">10 years</span> of
            experience.
          </p>

          <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-6">
            Uttarakhand Technical University, Sudhowala, Dehradun <br />
            <span className="text-[#b74b4b] font-semibold">
              B.Tech | Computer Science
            </span>
          </p>

          <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-6">
            DAV Public School, Medical Unit, Gaya, Bihar <br />
            <span className="text-[#b74b4b] font-semibold">
              12th Class | Secondary Education
            </span>
          </p>

          <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-6">
            DAV Public School, Medical Unit, Gaya, Bihar <br />
            <span className="text-[#b74b4b] font-semibold">
              10th Class | Secondary Education
            </span>
          </p>

          {/* BUTTON */}
          <a
            href="/contact"
            className="inline-block bg-[#b74b4b] hover:bg-[#a13f3f] text-white font-semibold px-7 py-3 rounded-full transition duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
