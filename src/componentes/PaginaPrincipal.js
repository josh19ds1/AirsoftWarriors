import { Suspense, useState } from 'react';
import  fetchData  from './Service/feetchApi'

import { ReactComponent as FlechIzquierda } from '../Imagenes/iconmonstr-angel-left-thin.svg';
import { ReactComponent as FlechDerecha } from '../Imagenes/iconmonstr-angel-right-thin.svg';

import React, { useRef, useEffect, useCallback } from 'react'

import '../estilos/Principal.css'

const apiData ="https://nodejs-restapi-airsoft-warrior-production-8daf.up.railway.app/api/events";

export default function PaginaPrincipal({
  children,
  controles = false,
  autoplay = false,
  velocidad = "500",
  intervalo = "5000"
}) {
  const slideShow = useRef(null);
  const intervaloSlideshow = useRef(null);

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      const responseData = await fetchData(apiData);
      setData(responseData);
    };

    fetchDataFromApi();
  }, []);

  const siguiente = useCallback(() => {
    // Comprobamos que el slideshow tenga elementos
    if (slideShow.current.children.length > 0) {
      console.log('Siguiente')

      // Obtenemos el primer elemento del slideshow.
      const primerElemento = slideShow.current.children[0];

      // Establecemos la transicion para el slideshow.
      slideShow.current.style.transition = `${velocidad}ms ease-out all`;

      const tamañoSlide = slideShow.current.children[0].offsetWidth;

      // Movemos el slideshow
      slideShow.current.style.transform = `translateX(-${tamañoSlide}px)`;

      const transicion = () => {
        // Reiniciamos la posicion del Slideshow.
        slideShow.current.style.transition = 'none';
        slideShow.current.style.transform = `translateX(0)`;

        // Tomamos el primer elemento y lo mandamos al final.
        slideShow.current.appendChild(primerElemento);

        slideShow.current.removeEventListener('transitionend', transicion);
      }

      // Eventlistener para cuando termina la animacion.
      slideShow.current.addEventListener('transitionend', transicion);
    }
  }, [velocidad]);

  const anterior = () => {
    console.log('Anterior');
    if (slideShow.current.children.length > 0) {
      // Obtenemos el ultimo elemento del slideshow.
      const index = slideShow.current.children.length - 1;
      const ultimoElemento = slideShow.current.children[index];
      slideShow.current.insertBefore(ultimoElemento, slideShow.current.firstChild);

      slideShow.current.style.transition = 'none';
      const tamañoSlide = slideShow.current.children[0].offsetWidth;
      slideShow.current.style.transform = `translateX(-${tamañoSlide}px)`;

      setTimeout(() => {
        slideShow.current.style.transition = `${velocidad}ms ease-out all`;
        slideShow.current.style.transform = `translateX(0)`;
      }, 30);
    }
  }

  if (autoplay) {
    intervaloSlideshow.current = setInterval(() => {
      siguiente();
    }, intervalo);

    // Eliminamos los intervalos
    slideShow.current.addEventListener('mouseenter', () => {
      clearInterval(intervaloSlideshow.current);
    });

    // Volvemos a poner el intervalo cuando saquen el cursor del slideshow
    slideShow.current.addEventListener('mouseleave', () => {
      intervaloSlideshow.current = setInterval(() => {
        siguiente();
      }, intervalo);
    });
  }

  return (
    <main className='Cuerpo'>
      {/*aqui sera el div del contenedor principal*/}
      <div className="ContainerSlide">
        {/*aqui sera el div del contenedor slide show*/}
        <div className="ContainerSlideShow">
          <div className="Slide" ref={slideShow}>
            <Suspense fallback={<div>Loading....</div>}>
              {data?.map((evnt) => (
                /*aqui sera el div donde estara la imagenes*/
                <div key={evnt.id} className='Event' >
                  <img className='imgEvnt' src={evnt.place.image_url.url} alt={evnt.place.name} />
                  <div className="controler">
                    <button className='boton botonIz' onClick={anterior}>
                      <FlechIzquierda />
                    </button>
                    <button className='boton botonDe' onClick={siguiente}>
                      <FlechDerecha />
                    </button>
                  </div>
                </div>
              ))}
            </Suspense>
          </div>
        </div>
      </div>
    </main>
  )
}
