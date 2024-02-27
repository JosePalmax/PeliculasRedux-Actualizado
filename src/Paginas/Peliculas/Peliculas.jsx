import { React, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getFilms, getFilmsIndividual } from '../../slices/peliThunks';


const Peliculas = () => {

    let peli = useSelector(state => state.pelis.peliculas)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getFilms())
    }, [])

    let busq = ''
    const realizarBusqueda = (e) => {
        busq = e.target.value
        if (e.target.value.length == 0) {
            dispatch(getFilms())
        } else if (busq.length > 0) {
            dispatch(getFilmsIndividual(busq))
        }
    }

    return (
        <div>
            <div className='text-center text-white font-bold text-3xl my-3'>
                <p>BUSCADOR DE PELICULAS</p>
            </div>
            <div className='flex justify-center text-white font-bold text-3xl my-3'>
                <input
                    className="flex h-10 rounded-md border border-input bg-zinc-950 w-1/2 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Buscar peliculas..."
                    id="barraBusqueda"
                    onChange={realizarBusqueda}
                />
            </div>
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
    )
}

export default Peliculas