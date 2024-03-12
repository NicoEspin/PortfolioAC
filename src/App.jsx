import { useState, useEffect } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./scenes/Navbar";
import DotGroup from "./scenes/DotGroup";
import Hero from "./scenes/Hero";
import Skills from "./scenes/Skills";
import LineGradient from "./components/LineGradient";
import Proyects from "./scenes/Proyects";
import Contact from "./scenes/Contact";
import { motion } from "framer-motion";
import Footer from "./scenes/Footer";
import { NextUIProvider } from "@nextui-org/system";

function App() {
  const [selectedPage, setSelectedPage] = useState("inicio");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("inicio");
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <NextUIProvider>
      <div className="app bg-deep-blue scroll-smooth">
        <Navbar
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          isTopOfPage={isTopOfPage}
        />
        <div className="w-5/6 mx-auto md:h-full">
          {isDesktop && (
            <DotGroup
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          )}
          <motion.div
            margin="0 0 -200px 0"
            amount="all"
            onViewportEnter={() => setSelectedPage("inicio")}
          >
            <Hero setSelectedPage={setSelectedPage} />
          </motion.div>
        </div>

        <LineGradient />

        <section className="w-5/6 mx-auto md:h-full">
          <motion.div
            margin="0 0 -200px 0"
            amount="all"
            onViewportEnter={() => setSelectedPage("habilidades")}
          >
            <Skills />
          </motion.div>
        </section>
        <LineGradient />
        <section className="w-5/6 mx-auto ">
          <motion.div
            margin="0 0 -200px 0"
            amount="all"
            onViewportEnter={() => setSelectedPage("proyectos")}
          >
            <Proyects />
          </motion.div>
        </section>
        <LineGradient />
        <section className="w-5/6 mx-auto md:h-full">
          <motion.div
            margin="0 0 -200px 0"
            amount="all"
            onViewportEnter={() => setSelectedPage("contacto")}
          >
            <Contact />
          </motion.div>
        </section>
        <Footer />
      </div>
    </NextUIProvider>
  );
}

export default App;
