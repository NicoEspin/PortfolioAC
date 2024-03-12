import React, { useState } from "react";
import proyectos from "../mocks/Proyectos.json";
import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import Modals from "../components/Modals";
import { Button } from "@nextui-org/button";

const Proyects = () => {
  const categorias = Array.from(
    new Set(Object.values(proyectos).map((p) => p.category))
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (proyecto) => {
    setSelectedProject(proyecto);
    setIsModalOpen(true);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="proyectos" className="pt-48 pb-48 bg-deep-blue">
      {/* Heading */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <h2 className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>YECTOS
          </h2>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10 font-opensans opacity-80">
          Cada proyecto representa un enfoque único y una solución a medida,
          donde he trabajado para dar vida a ideas y metas. Desde identidades de
          marca impactantes hasta diseños de materiales impresos y digitales,
          estos proyectos son ejemplos de mi compromiso con la excelencia en el
          diseño gráfico para transmitir mensajes de manera efectiva a través de
          la estética y la innovación.
        </p>
      </motion.div>

      {/* Proyectos agrupados por categoría */}
      {categorias.map((categoria) => (
        <motion.div
          key={categoria}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <section className="pt-10">
            <h3 className="font-playfair text-xl pb-3">{categoria}</h3>
            <LineGradient width="w-1/6" />
            <div className="grid grid-cols-1 gap-9 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-9 ">
              {Object.keys(proyectos)
                .filter((key) => proyectos[key].category === categoria)
                .map((key) => {
                  const proyecto = proyectos[key];
                  return (
                    <motion.div key={key} >
                      <Card
                        shadow="lg"
                        isBlurred
                        className="py-4 bg-white-blue max-w-[300px] mx-auto shadow-2xl shadow-black "
                      >
                        <CardHeader
                          isBlurred
                          className="text-white font-opensans"
                        >
                          <h4>{proyecto.title}</h4>
                        </CardHeader>
                        <CardBody className="overflow-visible items-center ">
                          <Image
                            isBlurred
                            src={proyecto.images[0]} // Muestra la primera imagen
                            alt={proyecto.title}
                            className="object-cover rounded-xl"
                          />
                        </CardBody>
                        <CardFooter 
                      
                        isBlurred>
                          <Button
                            onClick={() => openModal(proyecto)}
                            variant="solid"
                            className="font-opensans  text-white font-bold bg-gradient-rainblue hover:text-black transition duration-500"
                            radius="md"
                          >
                            Ver Detalles
                          </Button>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  );
                })}
            </div>
          </section>
        </motion.div>
      ))}
      {isModalOpen && selectedProject && (
        <Modals
          proyecto={selectedProject}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      )}
    </section>
  );
};

export default Proyects;
