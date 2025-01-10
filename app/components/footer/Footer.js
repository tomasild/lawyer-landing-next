import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoTiktok } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-otis-900 text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <section className="mb-6 md:mb-0 text-center md:text-left">
          <h2 className="text-[1.2rem] md:text-[2rem] font-bold mb-2">Abogada Ayelén Paillal</h2>
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
            <IoLogoWhatsapp className="text-[2rem] md:text-[3rem] lg:text-[4rem] cursor-pointer hover:text-otis-400 transition-all" />
          </a>
          <a
            href="https://instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <RiInstagramFill className="text-[2rem] md:text-[3rem] lg:text-[4rem] cursor-pointer hover:text-otis-400 transition-all" />
          </a>
          <a
            href="https://tiktok.com/@yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
          >
            <IoLogoTiktok className="text-[2rem] md:text-[3rem] lg:text-[4rem] cursor-pointer hover:text-otis-400 transition-all" />
          </a>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
