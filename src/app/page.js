"use client"
import Image from 'next/image'
import rain from "../../public/rain.json";
import water from "../../public/water.json";
import Lottie from "lottie-react";
import { gsap } from "gsap";

import { useRef, useEffect } from 'react'


import Typewriter from "typewriter-effect";





export default function Home() {

  const cuervoRef = useRef();

  const textRef = useRef(null);

  useEffect(() => {



    const rotarImagen = () => {

      const animacion = gsap.timeline({ repeat: -1, repeatDelay: 0 });

      animacion.set(cuervoRef.current, { opacity: 0, y: '100%' });


      // Paso 2: Asomarse (opacidad 1) durante 5 segundos
      animacion.to(cuervoRef.current, {
        opacity: 1,
        y: '0%',
        duration: 5,
        ease: 'none',
      });

      // Paso 3: Ocultarse abajo de nuevo
      animacion.to(cuervoRef.current, {
        opacity: 0,
        y: '100%',
        duration: 1, // Cambia la duración según tus necesidades
        ease: 'none',
      });

      // Iniciar la secuencia de animación
      animacion.play();
      // Iniciar la secuencia de animación
      animacion.play();
    }

    rotarImagen();

    // Limpia la animación de GSAP cuando el componente se desmonta
    return () => {
      gsap.killTweensOf(cuervoRef.current); // Detiene la animación de GSAP
    };
  }, []);

  return (

    <div className="w-screen  bg-gradient-to-r from-gray-900 to-black  p-5 h-screen">
      <div className="bg-[url('../../public/margin.png')] w-full h-full bg-auto bg-center">

        <div className='border-white-100 drop-shadow-2xl bg-opacity-50 bg-gray-400 w-full h-full rounded-md' >
          <div className='w-full h-1/4 md:h-1/2		'>

            <div className='w-full min-h-full	 relative'>
              <Lottie animationData={rain} loop={true} className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full' />

              <div ref={cuervoRef} className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-10 sm:w-20 '>
                <Image
                  className='w-full h-full'
                  src="/cuervo_ico.png"
                  width={150}
                  height={150}
                  alt="Picture of the author"

                />
              </div>
            </div>

            <div ref={textRef} className=" p-4 pt-10 bg-red-black z-20 	 text-3xl	  sm:text-9xl	  relative w-full text-center
            ">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Cuervo con Sombrero")
                    .start();
                }}
              />
            </div>
            <Image
              className='w-full'
              src="/separator.png"
              width={150}
              height={150}
              alt="Picture of the author"

            />
            <div className=" relative   w-full bg-cover  flex justify-center">
              <Image

                src="/qrws.png"
                width={150}
                height={150}
                alt="Picture of the author"

              />
            </div>
            <Image
              className='w-full'
              src="/separator.png"
              width={150}
              height={150}
              alt="Picture of the author"

            />
            <div ref={textRef} className='p-4 text-normal pt-10 bg-red-black z-20 	font-normal text-2xl	  sm:text-9xl	  relative w-full text-center'
            >
              Unete y forma parte del mejor club de lectura y escritura del universo con panas ebrios y drogados
            </div>

          </div>
        </div>
      </div>


      {/* <div className='w-screen  flex justify-start  h-screen flex-col  items-center' >




        <div className='w-full h-1/4 md:h-1/2		'>

          <div className='w-full min-h-full	 relative'>
            <Lottie animationData={rain} loop={true} className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full' />

            <div ref={cuervoRef} className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-10 sm:w-20 '>
              <Image
                className='w-full h-full'
                src="/cuervo_ico.png"
                width={150}
                height={150}
                alt="Picture of the author"

              />
            </div>
          </div>
        </div>

        <div ref={textRef} className='bg-black	 text-white pt-10 bg-red-black z-20 	font-normal text-3xl	  sm:text-9xl	  relative w-full text-center'
        >
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Cuervo con Sombrero")
                .start();
            }}
          />
        </div>


        <div className=" relative   w-full bg-cover  flex justify-center">
          <Image

            src="/qrws.png"
            width={150}
            height={150}
            alt="Picture of the author"

          />
        </div>

        <div ref={textRef} className='p-4 text-white pt-10 bg-black bg-red-black z-20 	font-normal text-2xl	  sm:text-9xl	  relative w-full text-center'
        >
          Unete y forma parte del mejor club de lectura y escritura del universo con panas ebrios o drogados
        </div>
        <div className='w-full h-30'>

          <Lottie animationData={water} loop={true} className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full' />
        </div>






      </div> */}
    </div>

  )
}
