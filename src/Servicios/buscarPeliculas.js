const urlIMDB = 'https://api.themoviedb.org/3/movie/popular?api_key=4c8fdba107c13a1294066817d75f913b';

export const buscarPopulares = () => {
    return fetch(urlIMDB);
}

export const buscarPorId = (id) => {
    return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4c8fdba107c13a1294066817d75f913b`);
}

const urlIMDBNombre = 'https://api.themoviedb.org/3/search/movie?api_key=4c8fdba107c13a1294066817d75f913b';

export const buscarPorNombre = (busqueda) => {
    return fetch(`${urlIMDBNombre}&query=${busqueda}`);
}