import { Suspense, useState } from 'react';
import  fetchData  from './Service/feetchApi'

import { ReactComponent as FlechIzquierda } from '../Imagenes/iconmonstr-angel-left-thin.svg';
import { ReactComponent as FlechDerecha } from '../Imagenes/iconmonstr-angel-right-thin.svg';

import React, { useRef, useEffect } from 'react'

import '../estilos/Principal.css'

const apiData ="https://nodejs-restapi-airsoft-warrior-production-8daf.up.railway.app/api/events";

export default function PaginaPrincipal() {


  const SlideShow = useRef(null);
  const IntervaloSlideShow = useRef(null);

  const [data, setData] = useState(null);

  useEffect(() => {
    

    const fetchDataFromApi = async () => {
        const responseData = await fetchData(apiData);
        setData(responseData);
    };

    fetchDataFromApi();
}, []);


  const Siguiente = () => {

    //comprobamos que tenga datos el slideshow
    if (SlideShow.current && SlideShow.current.children.length > 0) {
      //obtenemos el primer elemento del slideshow
      const firstElement = SlideShow.current.children[0];
      //transicion para el slide
      SlideShow.current.style.transition = '5000ms ease-out all';
      //tomamos el tamaño
      const tamañoSlide = SlideShow.current.children[0].offsetWidth;
      //movemos el slideshow
      SlideShow.current.style.transform = `translateX(-${tamañoSlide}px)`;


      const transic = () => {
        // Reiniciamos la posicion del Slideshow.
        SlideShow.current.style.transition = 'none';
        SlideShow.current.style.transform = 'translateX(0)';

        // Tomamos el primer elemento y lo mandamos al final.
        SlideShow.current.appendChild(firstElement);
        SlideShow.current.removeEventListener('transitionend', transic);
      }

      SlideShow.current.addEventListener('transitionend', transic);
    }


  }


  const Anterior = () => {

    if (data && data.length > 0 && SlideShow.current && SlideShow.current.children.length > 0) {
      //obtenemos el ultimo elemento del slideshow
      const index = SlideShow.current.children.length - 1;
      const endElement = SlideShow.current.children[index];
      SlideShow.current.insertBefore(endElement, SlideShow.current.firstChild);



      SlideShow.current.style.transition = 'none';
      //tomamos el tamaño
      const tamañoSlide = SlideShow.current.children[0].offsetWidth;
      //movemos el slideshow
      SlideShow.current.style.transform = `translateX(-${tamañoSlide}px)`;

      setTimeout(() => {
        SlideShow.current.style.transition = '5000ms ease-out all'
        SlideShow.current.style.transform = 'translateX(0)';
      }, 30);
    }

  }


  useEffect(() => {
    IntervaloSlideShow.current = setInterval(() => {
      Siguiente();
    }, 5000);
  
    // Eliminamos el intervalo al entrar el mouse
    SlideShow.current.addEventListener('mouseenter', () => {
      clearInterval(IntervaloSlideShow.current);
    });
  
    // Lo volvemos a agregar al salir el mouse
    SlideShow.current.addEventListener('mouseleave', () => {
      IntervaloSlideShow.current = setInterval(() => {
        Siguiente();
      }, 5000);
    });

  }, []);
  




  return (
    <main className='Cuerpo'>

      {/*aqui sera el div del contenedor principal*/}
      <div className="ContainerSlide">
        {/*aqui sera el div del contenedor slide show*/}
        <div className="ContainerSlideShow">
          <div className="Slide" ref={SlideShow} >
            <Suspense fallback={<div>Loading....</div>}>
              {data?.map((evnt) => (
                /*aqui sera el div donde estara la imagenes*/
                <div key={evnt.id} className='Event' >

                  <img className='imgEvnt' src={evnt.place.image_url.url} alt={evnt.place.name} />


                  <div className="controler">
                    <button className='boton botonIz' onClick={Anterior}>
                      <FlechIzquierda />
                    </button>
                    <button className='boton botonDe' onClick={Siguiente}>
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
