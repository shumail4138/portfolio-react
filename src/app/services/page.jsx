"use client";

import React from "react";

const services = [
  {
    icon: "fa-server",
    title: "Frontend Developer",
    desc: "Creates websites and applications using web languages such as HTML, CSS, and JavaScript that allow users to access and interact with the site or app."
  },
  {
    icon: "fa-desktop",
    title: "Software Developer",
    desc: "Create new software and update existing applications. Design and write the code used to build everything from operating systems to apps to video games."
  },
  {
    icon: "fa-asterisk",
    title: "Web Designer",
    desc: "Creates the layout and design of a website. In simple terms, a website designer makes a site look good. Use design programs to create visual elements."
  },
  {
    icon: "fa-asterisk",
    title: "Full stack developer",
    desc: "Develops and maintains both front-end and back-end of web applications, with skills in HTML, CSS, JavaScript, databases, APIs, and deployment."
  },
  {
    icon: "fa-asterisk",
    title: "Data analyst",
    desc: "Turns data into actionable insights to drive business decisions using SQL, Python, Excel, and BI tools like Tableau and Power BI."
  }
];

function Services() {
  return (
    <section className="px-6 py-12 bg-background text-foreground transition-colors duration-300">
     <div className="text-center mb-10">
  <h1 className="relative inline-block text-4xl font-bold ">
    My Services
    <span className="absolute left-0 -bottom-2 h-1 w-full bg-[#b74b4b]"></span>
  </h1>
</div>

      <p className="text-center text-muted-foreground text-lg mb-10">
        What I will do for you
      </p>

      <div className="grid gap-8 md:grid-cols-3">
        {services.map((service, i) => (
          <div
            key={i}
            className="bg-card text-card-foreground p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="text-indigo-600 text-4xl mb-4 text-center">
              <i className={`fa ${service.icon}`}></i>
            </div>

            <h3 className="text-2xl font-semibold text-[#b74b4b] mb-2 text-center">
              {service.title}
            </h3>

            <p className="text-card-foreground text-base mb-4">
              {service.desc}
            </p>

            <div className="text-center">
              <a
                href="#"
                className="inline-block border-2 border-[#b74b4b] text-[#b74b4b] px-7 py-3 rounded-full font-semibold tracking-wide hover:bg-[#b74b4b] hover:text-black transition-colors duration-300"
              >
                Read More!
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
