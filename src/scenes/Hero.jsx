import { motion } from "framer-motion";
import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import antto from "../assets/contact-antto.png";
import SocialMedia from "../components/SocialMedia";
import useMediaQuery from "../hooks/useMediaQuery";

const Hero = ({ setSelectedPage }) => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section
      id="inicio"
      className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10"
    >
      {/* IMAGE SECTION */}
      <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
        {isAboveLarge ? (
          <div className="relative z-0 ml-20">
            <div className=" py-0.5 pr-0.5 bg-gradient-rainblue  w-full max-w-[300px] md:max-w-[700px] rounded-full h-full absolute top-0 left-0 "></div>

            <img
              alt="profile"
              className="hover:opacity-80 transition duration-500 bg-deep-blue z-10  h-full w-full max-w-[600px] md:max-w-[700px] opacity-90 relative"
              src={antto}
            />
          </div>
        ) : (
          <img
            alt="profile"
            className="z-10 w-full max-w-[400px] md:max-w-[600px] h-full opacity-90"
            src={antto}
          />
        )}
      </div>

      {/* Contenido principal*/}
      <main className="z-30 basis-2/5 mt-12 md:mt-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-6xl font-playfair z-10 text-center md:text-start">
            Anttonella {""}
            <span className="text-red">Catalano</span>
          </p>

          <p className="mt-10 mb-7 text-sm text-center md:text-start font-opensans opacity-80">
            Soy una especialista en Marketing y Diseño Gráfico orientada al
            desarrollo de proyectos creativos que ayuden al cliente a alcanzar
            sus objetivos y generar ingresos.
          </p>
        </motion.div>
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
        hover:bg-blue hover:text-white transition duration-500"
            onClick={() => setSelectedPage("contacto")}
            href="#contacto"
          >
            Contactame
          </AnchorLink>

          <AnchorLink
            className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
            onClick={() => setSelectedPage("contacto")}
            href="#proyectos"
          >
            <button
              className="bg-deep-blue hover:text-red transition duration-500
          w-full h-full flex items-center justify-center  px-10"
            >
              Portfolio
            </button>
          </AnchorLink>
        </motion.div>
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMedia />
        </motion.div>
      </main>
    </section>
  );
};

export default Hero;
