import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getFilms } from '../../slices/peliThunks'

const Favoritos = () => {

    let peli = useSelector(state => state.pelis.peliculas)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getFilms())
    }, [])


    let favoritos = localStorage.getItem('favoritos')
    if (favoritos != null) {
        favoritos = JSON.parse(favoritos)
    } else {
        favoritos = []
    }
    return (
        <div>
            <p className='text-white text-3xl font-bold m-10 text-center'>TUS PELICULAS FAVORITAS</p>
            {favoritos.length > 0 ?
                (
                    <p>
                        <div className='flex flex-wrap flex-row justify-center gap-4 m-auto pb-3 w-3/4'>
                        {favoritos.map(movie => (
                                <Link to={`/pelicula/${movie.id}`}>
                                    <div className='w-full h-80 '>
                                        <img src={movie.foto} className='carousel-image hover:scale-110 transition transition-300 rounded-sm' id={movie.id} />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </p>
                )
                :
                (
                    <div>
                        <p className='text-white text-2xl m-6 text-center'>Todavía no tienes peliculas favoritas : ( <br />Pero por aquí te dejo unas sugerencias : )</p>
                        <div className='flex flex-wrap flex-row justify-center gap-4 m-auto pb-3 w-3/4'>
                            {peli.map(movie => (
                                <Link to={`/pelicula/${movie.id}`}>
                                    <div className='w-full h-80 '>
                                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} className='carousel-image hover:scale-110 transition transition-300 rounded-sm' id={movie.id} />
                                    </div>
                                </Link>
                            ))}
                        </div>

                    </div>
                )}
        </div>
    )
}

export default Favoritos