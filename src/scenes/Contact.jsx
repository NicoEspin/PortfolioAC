import LineGradient from "../components/LineGradient";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import img from "../assets/contact-image.png";
import { Button } from "@nextui-org/button";

const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    console.log("~ e", e);
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contacto" className="contact py-48">
      {/* Titulos */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
        className="flex justify-end w-full"
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">Contactame</span> para iniciar
          </p>
          <div className="flex md:justify-end my-2">
            <LineGradient width="w-1/2" />
          </div>
        </div>
      </motion.div>

      {/* Form, img */}
      <div className="md:flex md:justify-between gap-16 mt-5">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="basis-1/2 flex justify-center"
        >
          <img src={img} alt="contact" className="max-h-[350px]" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="basis-1/2 mt-10 md:mt-0"
        >
          <form
            className="text-black"
            target="_blank"
            onSubmit={onSubmit}
            action="https://formsubmit.co/antocatavcp@gmail.com"
            method="POST"
          >
            <input
              className="w-full  font-semibold placeholder-opaque-black p-3"
              type="text"
              placeholder="NOMBRE"
              {...register("name", {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.name && (
              <p className="text-red mt-1">
                {errors.name.type === "required" && "Rellena este campo."}
                {errors.name.type === "maxLength" && "Maximo 100 caracteres."}
              </p>
            )}

            <input
              className="w-full font-semibold placeholder-opaque-black p-3 mt-5"
              type="text"
              placeholder="EMAIL"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className="text-red mt-1">
                {errors.email.type === "required" && "Rellena este campo."}
                {errors.email.type === "pattern" &&
                  "Formato de Email invalido."}
              </p>
            )}

            <textarea
              className="w-full font-semibold placeholder-opaque-black p-3 mt-5"
              name="message"
              placeholder="MENSAJE"
              rows="4"
              cols="50"
              {...register("message", {
                required: true,
                maxLength: 2000,
              })}
            />
            {errors.message && (
              <p className="text-red mt-1">
                {errors.message.type === "required" && "Rellena este campo."}
                {errors.message.type === "maxLength" &&
                  "Maximo 2000 caracteres."}
              </p>
            )}

            <Button
              radius="none"
              className="p-5 bg-red font-semibold text-deep-blue mt-5 hover:bg-red hover:text-white transition duration-500"
              type="submit"
              size="lg"
            >
              ENVIAME UN MENSAJE
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
