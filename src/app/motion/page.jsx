"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Modern = () => {
  const greekMotion = {
    initial: { y: -15 },
    animate: {
      y: 30,
      boxShadow: "0px, 0px, 8px, rgb(255,255,255)",
      transition: { ease: [0.12, 0, 0.39, 0], duration: 1.5, yoyo: Infinity },
    },
  };
  return (
    <main className="bg-[#1D1B22] h-screen flex flex-col md:flex-row justify-center items-center mt-5">
      {/* Imagen */}
      <div className="w-full mb-4 md:w-1/2">
        <motion.div
          initial="initial"
          animate="animate"
          variants={greekMotion}
          className="w-[80%] lg:w-full mx-auto flex justify-center items-center pt-5 mt-5 "
        >
          <Image
            src="/greek.png"
            width={300}
            height={300}
            alt="Greek Picture"
            className="relative"
          />
        </motion.div>
      </div>

      {/* Formulario */}
      <div className="w-full flex flex-col lg:h-screen justify-center items-center md:w-[40%] lg:w-[50%] mx-auto text-white">
        <div className="absolute w-[70%] h-[90%] z-10 -right-1/2 -bottom-40 rounded-full blue-light-gradient" />
        <h1 className="text-white font-bold lg:text-5xl text-3xl mt-4 lg:text-left lg:mb-5 lg:w-[83%]">
          Dejános Tu Mensaje
        </h1>
        <div className="flex flex-col justify-center items-center w-full">
          <form className="py-8 w-[85%] lg:full">
            {/* Nombre y Apellido */}
            <div className="flex flex-col lg:flex-row w-full mb-3 lg:gap-2">
              <input
                placeholder="Nombre"
                className="bg-violet-100/5 border rounded-3xl placeholder-text-white/50 px-4 py-5 w-full focus:border-blue-500 outline-none"
              />
              <input
                placeholder="Apellido"
                className="bg-violet-100/5 border rounded-3xl placeholder-text-white/50 px-4 py-5 w-full focus:border-blue-500 outline-none"
              />
            </div>

            {/* Email y Teléfono */}
            <div className="flex flex-col lg:flex-row w-full mb-3 lg:gap-2">
              <input
                placeholder="Email"
                className="border bg-violet-100/5 rounded-3xl placeholder-text-white/50 px-4 py-5 mb-3 lg:mb-0 w-full focus:border-blue-500 outline-none"
              />
              <input
                placeholder="Teléfono"
                className="bg-violet-100/5 rounded-3xl border placeholder-text-white/50 px-4 py-5 w-full focus:border-blue-500 outline-none"
              />
            </div>

            {/* Mensaje */}
            <div className="w-full">
              <input
                placeholder="Mensaje"
                className="bg-violet-100/5 rounded-3xl w-full border h-32 placeholder-text-white/50 px-4 text-white focus:border-blue-500 outline-none"
              />
            </div>
            <div className="flex justify-center items-center lg:justify-start">
              <button className="py-5 px-7 bg-blue-gradient text-black mt-3 w-[40%] font-medium text-xl rounded-2xl hover:black-gradient">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Modern;
