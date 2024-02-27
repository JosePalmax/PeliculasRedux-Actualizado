import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    peliculas: [],
    pelicula: []
}

export const peliSlice = createSlice({
    name: "peliculas",
    initialState,
    reducers: {
        setFilms: (state, action) => {
            state.peliculas = action.payload
        },
        setFilm: (state, action) => {
            state.pelicula = action.payload
        },
    }
})

export const { setFilms, setFilm } = peliSlice.actions