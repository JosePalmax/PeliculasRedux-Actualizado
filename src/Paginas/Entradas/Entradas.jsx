import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getFilms } from '../../slices/peliThunks'
import entradaCine from '../../imgs/entradaCine.jpg'
const Entradas = () => {

    let peli = useSelector(state => state.pelis.peliculas)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getFilms())
    }, [])

    let entradas = localStorage.getItem('entradas')
    if (entradas != null) {
        entradas = JSON.parse(entradas)
    }

    return (
        <div>
            <p className='text-white text-3xl font-bold m-10 text-center'>TUS ENTRADAS</p>
            {entradas && entradas.length > 0 ?
                (
                    <div className='flex flex-wrap flex-col gap-4 justify-center m-auto pb-3 w-3/4'>
                        {entradas.map(entrada => (
                            <div className='flex flex-row bordePresentacion rounded-xl bg-white'>
                                <div className='w-1/2 flex'>
                                    <img src={entradaCine} alt="" className='rounded-lg m-2' />
                                </div>
                                <div className='flex flex-col w-2/3'>
                                    <div className='w-auto flex flex-col gap-2 mt-2'>
                                        <p className='text-2xl font-bold my-4'>{entrada.titulo}</p>
                                        <p className="underline text-2xl">Cine:</p>
                                        <p>Cine JoseFlix,  C. Poeta Juan Ramón Jiménez, 25, Nte. Sierra, 14012 Córdoba</p>
                                        <p className="underline text-2xl">Fecha y Hora:</p>
                                        <p>{entrada.fecha} (Hoy), {entrada.hora}</p>
                                        <p className="underline text-2xl">Sala:</p>
                                        <p>Sala 2</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )
                :
                (
                    <div>
                        <p className='text-white text-2xl m-6 text-center'>Todavía no tienes entradas : ( <br />Pero por aquí te dejo unas películas que podrías ver : )</p>
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
            <div className='flex justify-end m-10'>
                <Link to='/'><button className="bg-white p-4 text-xl rounded-lg hover:scale-110 transition transition-300 shadow-md shadow-white">Volver</button></Link>
            </div>
        </div>
    )
}

export default Entradas