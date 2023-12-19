"use client"

import {React , useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


const schema = yup.object({
  fullname: yup.string().required(),
  email: yup.string().required(),
  message: yup.string().required()
})
const MongoForm = () => {

  const [ error, setError ] = useState([]);


  const {
    register,
    handleSubmit,
    formState:{ errors },
  } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data) => {
    console.log(data)
    const res = await fetch('api/contact', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        fullname,
        email, 
        message,
      })
    });

    const {msg} = await res.json();
    setError(msg);
  }
  return (
    <div className=" p-4 mx-auto flex flex-col items-center max-w-xl shadow-lg rounded-lg my-4 bg-white h-auto">
      <div className="absolute w-[70%] h-[90%] z-0 -right-1/2 -bottom-40 rounded-full blue-light-gradient" />
      <h1 className="font-bold text-3xl my-2">Contactános </h1>
      <p>Por favor completá todos los campos</p>
      <form
        onSubmit={handleSubmit(onSubmit)} 
        className="flex flex-col border-t py-4 gap-5 mt-4 w-full ">
        <div className="flex flex-col gap-2">
          <label htmlFor="fullname">Nombre y Apellido</label>
          <input
            type="text"
            id="fullname"
            placeholder="Ej: Juan Cruz"
            className="shadow-lg px-6 py-2 border border-slate-300 bg-blue-600/25 rounded-lg placeholder:text-black/50 "
            {...register('fullname')}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Correo eletronico</label>
          <input
            type="email"
            id="email"
            placeholder="Ej: example@gmail.com"
            className="shadow-lg px-6 py-2 border border-slate-300 bg-blue-600/25 rounded-lg placeholder:text-black/50 "
            {...register('email')}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="message">Tu Mensaje</label>
          <textarea
            type="text"
            id="message"
            placeholder="Escribe tu mensaje aquí"
            className="shadow-lg px-6 py-2 resize-none border border-slate-300 bg-blue-600/25 placeholder:text-black/50 rounded-lg h-32"
            {...register('message')}
          />
        </div>
        <button className="bg-blue-500 p-3 rounded-lg text-white" type="submit">
          Enviar
        </button>
      </form>
      <div className="flex  flex-col bg-slate-200 hidden">
        <p className="text-red-600 py-2 px-5">Mensaje de error</p>
      </div>
      <div className="absolute w-[70%] h-[90%] z-0 -left-1/2 -top-40 rounded-full pink__gradient" />
    </div>
  );
};

export default MongoForm;