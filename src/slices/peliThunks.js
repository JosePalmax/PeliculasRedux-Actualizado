import { buscarPopulares, buscarPorId, buscarPorNombre} from "../Servicios/buscarPeliculas"
import { setFilm, setFilms } from "./peliSlice"


//El thunk es una funcion que devuelve una accion asincrona
export const getFilms = () => {
    return async (dispatch, getState) => {

        try {
            const res = await buscarPopulares();

            if (!res.ok) {
            }
            const data = await res.json();

            dispatch(setFilms(data.results))

        } catch (error) {
            //Notificar error con dispatch
        }
    }
}
export const getFilmsIndividual = (busqueda) => {
    return async (dispatch, getState) => {
        
        try {
            const res = await buscarPorNombre(busqueda);

            if (!res.ok) {
            }
            const data = await res.json();

            dispatch(setFilms(data.results))

        } catch (error) {
            //Notificar error con dispatch
        }

    }
}
export const getFilmId = (id) => {
    return async (dispatch, getState) => {
        
        try {
            const res = await buscarPorId(id);

            if (!res.ok) {
            }
            const data = await res.json();
            
            dispatch(setFilm(data))

        } catch (error) {
            //Notificar error con dispatch
        }

    }
}