import React from "react";
import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import skills from "../assets/skills-img.jpg";

const Skills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="habilidades" className="pt-10 pb-24">
      {/* Imagen */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h2 className="font-playfair text-4xl mb-2">
            Mis <span className="text-red">habilidades</span>
          </h2>
          <LineGradient width="w-1/2" />
          <p className="mt-10 mb-7 font-opensans opacity-80 text-sm">
            Dominio de software de diseño gráfico ( Photoshop, Illustrator),
            manejo de redes.
          </p>
        </motion.div>
        <div className="mt-16 md:mt-0">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img alt="skills" className="z-10" src={skills} />
            </div>
          ) : (
            <img alt="skills" className="z-10" src={skills} />
          )}
        </div>
      </div>
      {/* Skills */}
      <div className="md:flex md:justify-between mt-16 gap-32">
        {/* Eperiencia */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <h3 className="font-playfair font-semibold text-5xl">01</h3>
              <h3 className="font-playfair font-semibold text-3xl mt-3">
                Experiencia
              </h3>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5 font-opensans opacity-80 text-sm">
            Diseño y desarrollo de identidades de marca. Creación y
            revitalizacion, incluyendo logotipo, paleta de colores y elementos
            visuales. Diseño de materiales promocionales. Folletos, flyers y
            banners. Proyecto de diseño editorial. Diseño y maquetado de
            materiales editoriales como revistas y libros.
          </p>
        </motion.div>

        {/* Innovacion */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <h3 className="font-playfair font-semibold text-5xl">02</h3>
              <h3 className="font-playfair font-semibold text-3xl mt-3">
                Innovación
              </h3>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5 font-opensans opacity-80 text-sm">
            Trabajo con colores, tipografías, imágenes y elementos visuales para
            dar vida a ideas y conceptos. Cada proyecto es una oportunidad para
            contar una historia única.
          </p>
        </motion.div>
        {/* IMAGINATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <h3 className="font-playfair font-semibold text-5xl">03</h3>
              <h3 className="font-playfair font-semibold text-3xl mt-3">
                Imaginación
              </h3>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5 font-opensans opacity-80 text-sm">
            La creatividad es la esencia, plasmada en cada proyecto de diseño.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
