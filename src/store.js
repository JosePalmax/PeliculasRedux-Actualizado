import { configureStore } from "@reduxjs/toolkit";
import { peliSlice } from "./slices/peliSlice";

export default configureStore({
    reducer: {
        pelis: peliSlice.reducer,
    },
})