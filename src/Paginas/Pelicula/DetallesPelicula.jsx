import { useState, React, useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getFilmId } from "../../slices/peliThunks";
import { CiHeart } from "react-icons/ci";

export async function loader({ params }) {
    const id = params.id;
    return { id };
}
const Pelicula = () => {

    const { id } = useLoaderData();

    const [peliculaFav, setFavorito] = useState(false)
    let peli = useSelector(state => state.pelis.pelicula)
    let favoritos = localStorage.getItem('favoritos')
    if (favoritos != null) {
        favoritos = JSON.parse(favoritos)
    } else {
        favoritos = []
    }
    const comprobarFav = () => {
        if (favoritos.length > 0) {
            favoritos.forEach(peli => {
                if (peli.id == id) {
                    setFavorito(true)
                }
            });
        }
    }
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getFilmId(id))
        comprobarFav()
    }, [])
    const marcarFavorita = (e) => {
        if (e.currentTarget.style.color != 'red') {
            e.currentTarget.style.color = 'red'
            favoritos.push({ id: id, foto: `https://image.tmdb.org/t/p/w500/${peli.poster_path}` })
            const favoritosPush = JSON.stringify(favoritos)
            localStorage.setItem('favoritos', favoritosPush)
        } else if (e.currentTarget.style.color == 'red') {
            e.currentTarget.style.color = ''
            favoritos.splice(favoritos.indexOf(id), 1)
            const favoritosPush = JSON.stringify(favoritos)
            localStorage.setItem('favoritos', favoritosPush)
        }
    }
    return (
        <div>
            <div className="m-16 text-white">
                <div className="flex flex-row w-full">
                    <div className="w-2/3">
                        <div className="flex flex-row">
                            <p className="text-4xl ">{peli.title}</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-heart-fill m-2 hover:scale-110 transition transition-300" viewBox="0 0 16 16"
                                style={{ color: peliculaFav ? 'red' : 'white' }}
                                onClick={(e) => marcarFavorita(e)}>
                                <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
                            </svg>
                        </div>
                    </div>
                    <div className="flex flex-col fondo w-1/2">
                        <div className="flex flex-row gap-4 font-bold colorsito ">
                            <p className="w-2/6 text-center">PUNTUACIÓN IMDB</p>
                            <p className="w-2/6 text-center">Nº DE VOTOS</p>
                            <p className="w-2/6 text-center">POPULARIDAD</p>
                        </div>
                        <div className="flex row text-lg">
                            <p className="flex flex-row w-2/6 justify-center text-2xl">
                                <FaStar className="text-yellow-500 text-4xl" />
                                {typeof peli.vote_average === 'number' ? peli.vote_average.toFixed(2) : 'N/A'}/10
                            </p>
                            <p className="w-2/6 text-center text-2xl">{peli.vote_count}</p>
                            <p className="w-2/6 text-center text-2xl">{peli.popularity}</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row">
                    <div className="mr-4"><img src={`https://image.tmdb.org/t/p/w500/${peli.poster_path}`} alt={peli.title} className="rounded-md" id={peli.id} /></div>
                    <div className="flex flex-col gap-2 w-2/3">
                        <p className="underline text-xl">Sinopsis:</p>
                        <p className="w-3/4">{peli.overview}</p>
                        <p className="underline text-xl pt-5">Fecha de Salida:</p>
                        <p>{peli.release_date}</p>
                        <p className="underline text-xl pt-5">Edad Mínima Recomendada:</p>
                        <p>{peli.adult ? (<span className="text-red-500 font-bold">+18</span>) : (<span className="text-green-500 font-bold">-18</span>)}</p>
                        <p className="underline text-xl pt-5">Duración:</p>
                        <p>{peli.runtime} min.</p>
                        <p className="underline text-xl pt-5">Géneros:</p>
                        <div className="flex flex-row gap-4">
                            {peli.genres && peli.genres.map((genre) => (
                                <p className="genero cursor-pointer rounded-3xl p-2">{genre.name}</p>
                            ))}
                        </div>
                        <div className="my-3"><Link to={`/comprar/${peli.title}`}><button className="bn30">Reservar Entrada</button></Link></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Pelicula