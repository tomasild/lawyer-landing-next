import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoTiktok, IoLogoLinkedin } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-otis-100 text-otis-950 py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <section className="mb-6 md:mb-0 text-center md:text-left">
          <h2 className="text-[1.2rem] md:text-[1.5rem] font-bold mb-2">
            Ayelén Paillal
          </h2>
          <article className="text-[0.9rem] md:text-[1.2rem] font-semibold">
            <p>
              Email:{" "}
              <a href="mailto:info@company.com" className="text-otis-400">
                info@company.com
              </a>
            </p>
            <p>
              Teléfono:{" "}
              <a href="tel:+56912345678" className="text-otis-400">
                (+56) 9 1234 5678
              </a>
            </p>
          </article>
        </section>

        <section className="flex gap-6 justify-center mt-4 md:mt-0">
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <IoLogoWhatsapp className="text-[2rem] md:text-[2.5rem] lg:text-[3.5rem] cursor-pointer text-green-600 hover:scale-125 transition-all" />
          </a>
          <a
            href="https://instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <RiInstagramFill className="text-[2rem] md:text-[2.5rem] lg:text-[3.5rem] cursor-pointer text-fuchsia-600 hover:scale-125 transition-all" />
          </a>
          <a
            href="https://tiktok.com/@yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
          >
            <IoLogoTiktok className="text-[2rem] md:text-[2.5rem] lg:text-[3.5rem] cursor-pointer text-pink-500 hover:scale-125 transition-all" />
          </a>
          <a
            href="https://tiktok.com/@yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
          >
            <IoLogoLinkedin className="text-[2rem] md:text-[2.5rem] lg:text-[3.5rem] cursor-pointer text-otis-600 hover:scale-125 transition-all" />
          </a>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
