import Image from "next/image";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Home() {
  return (
     <section className="flex flex-col md:flex-row items-center justify-center px-6 md:px-20 py-12 gap-8">

      
      {/* IMAGE */}
      <div className="w-full md:w-1/2 flex justify-center">
       <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-[0_0_25px_#b74b4b]">

  <Image
    src="/pic1.jpg"
    alt="Profile"
    fill
    className="object-cover"
  />
</div>
      </div>

      {/* CONTENT */}
      <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
        
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Hi, It's <span className="text-[#b74b4b]">Shumail Rahat Khan</span>
        </h1>

        <h3 className="text-3xl md:text-4xl font-bold relative typing-text">
          I'm a <span className="relative"></span>
        </h3>

        <p className="text-lg md:text-xl text-black-200 max-w-xl">
        Developer focused on helping local and global clients with effective web development solutions.
        </p>

        <p className="text-lg md:text-xl text-black-200 max-w-xl">
         Email : shumailrahatkhan@gmail.com
        </p>
        <p className="text-lg md:text-xl text-black-200 max-w-xl">
         Contact : +91-7903015989
        </p>
        <p className="text-lg md:text-xl text-black-200 max-w-xl">
         WhatsApp : +91-7903015989
        </p>

        
        {/* SOCIAL ICONS */}
        <div className="flex justify-center md:justify-start gap-5 text-2xl text-[#b74b4b]">
  <a href="https://www.linkedin.com/in/shumail-rahat-khan-31239422a/" className="hover:scale-125 transition">
    <FaLinkedin />
  </a>
  <a href="https://github.com/shumail4138/" className="hover:scale-125 transition">
    <FaGithub />
  </a>
  <a href="https://x.com/Shumail85572421?t=EYHEVQo2bR9X47THoIMH6g&s=09" className="hover:scale-125 transition">
    <FaTwitter />
  </a>
  <a href="https://instagram.com/shumail_rahat_khan?igshid=OGQ5ZDc2ODk2ZA==" className="hover:scale-125 transition">
    <FaInstagram />
  </a>
</div>

        {/* BUTTON */}
        <a
          href="Shumail_Rahat_Khan.pdf"
          className="inline-block border-2 border-[#b74b4b] text-[#b74b4b] px-7 py-3 rounded-full font-semibold tracking-wide hover:bg-[#b74b4b] hover:text-black transition"
        >
          Resume
        </a>

      </div>
    </section>
  );
}