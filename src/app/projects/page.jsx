"use client";

import Image from "next/image";

function Portfolio() {
  const projects = [
    {
      src: "/todo.png",
      alt: "Todo App",
      title: "Todo App",
      desc: "Task management app to help you stay organized and manage your day-to-day.",
      link: "https://to-do-list-shumail.netlify.app/",
    },
    {
      src: "/images.png",
      alt: "Calculator",
      title: "Calculator",
      desc: "A calculator that performs basic arithmetic operations.",
      link: "https://calculator-shumail.netlify.app/",
    },
    {
      src: "/temp.png",
      alt: "Temperature Converter",
      title: "Temperature Converter",
      desc: "Tool used to convert temperatures between scales.",
      link: "https://temperature-convertor-shumail.netlify.app/",
    },
    {
      src: "/placement cell.jpg",
      alt: "Placement Cell",
      title: "Placement Cell",
      desc: "Website connecting students, alumni, and recruiters.",
      link: "https://admission-cell.netlify.app",
    },
    {
      src: "/landing page.jpeg",
      alt: "Landing Page",
      title: "Landing Page",
      desc: "A standalone web page that visitors land on.",
      link: "https://martial-arts-shumail.netlify.app/",
    },
  ];

  return (
    <section className="py-12 bg-background text-foreground transition-colors duration-300">
      {/* Heading */}
      <div className="text-center mb-10">
  <h2 className="relative inline-block text-3xl font-bold ">
    Latest Projects
    <span className="absolute left-0 -bottom-2 h-1 w-full bg-[#b74b4b]"></span>
  </h2>
</div>
<div className="text-center mb-10">
        <p className="text-muted-foreground mt-2">
          What I will do for you
        </p>
      </div>

      {/* Grid */}
      <div className="container mx-auto px-4 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-card text-card-foreground rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            {/* Image */}
            <div className="relative w-full h-48">
              <Image
                src={project.src}
                alt={project.alt}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
                priority={idx === 0}
              />
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-1">
                {project.title}
              </h3>

              <p className="text-muted-foreground my-2">
                {project.desc}
              </p>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:underline inline-flex items-center"
              >
                View Project
                <i className="bx bx-link-external ml-1"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
