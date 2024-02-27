import React from 'react'
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import Presentacion from '../../Componentes/Presentacion';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useSelector, useDispatch } from 'react-redux'
import { getFilms } from '../../slices/peliThunks';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        transform: "scale(2)",
        paddingLeft: "8px"
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        transform: "scale(2)",
        paddingRight: "50px"
      }}
      onClick={onClick}
    />
  );
}

const Home = () => {

  let peli = useSelector(state => state.pelis.peliculas)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getFilms())
  }, [])
  
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <div>
      <div className='text-center text-white font-bold text-3xl my-3'>
        <p>PELICULAS EN CARTELERA</p>
      </div>
      <div className='flex justify-center'>
        <div className='w-11/12'>
          <Slider {...settings} >
            {peli.map(movie => (
              <Link to={`/pelicula/${movie.id}`}>
                <div className='w-full flex flex-col items-center gap-4 pb-5'>
                  <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} className='carousel-image hover:scale-110 transition transition-300' id={movie.id} />
                  {/* <Link to={`/comprar/${movie.title}`}><button class="bn30">Reservar</button></Link> */}
                </div>
              </Link>
            ))}
          </Slider>
        </div>
      </div>
      <Presentacion />
    </div >
  )
}

export default Home