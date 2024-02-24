/* const axios = require("axios")
const url = "https://henry-movies-dev-sgtm.3.us-1.fl0.io/"; */
const Movie = require("../models/Movie")

// https://students-api.2.us-1.fl0.io/movies
//https://henry-movies-dev-sgtm.3.us-1.fl0.io/

module.exports = {
    //Obtener peliculas del modelo
    getMovieBD: async () => {
        const movies = await Movie.find();
        return movies;
    },
    //Crear pelicula  en la BD
    postMovieBD: async function ({ title, year, director, duration, genre, rate, poster, description }) {
        try {

            const existingMovie = await Movie.findOne({ title, director });
            if (existingMovie) {
                const updatedMovie = await Movie.findOneAndUpdate(
                    { title, director },
                    { year, duration, genre, rate, poster, description },
                    { new: true } // Para devolver el documento actualizado
                );
                return [updatedMovie, "updated"];
            } else {
                const newMovie = new Movie({ title, year, director, duration, genre, rate, poster, description });
                const createdMovie = await newMovie.save();
                return [createdMovie, "created"];
            }

        } catch (error) {
            res.status(500).json({ error: 'Error al crear la película' })
        }
    }
}

//*Creación de una pelicula en bruto, y guardar. Con este código pueden crearse mucha películas de las mismas.

/*const newMovie = new Movie({ title, year, director, duration, genre, rate, poster, description });
const response = await newMovie.save();
return response; */

//*Implementación de HW -> pero ya no se usa
/* class Movie {
    constructor({ title, poster, director, duration, rate, genre, year, description }) {
        if (!title || !poster || !director) {
            throw new Error('Se requieren las propiedades "title", "poster" y "director" para crear una instancia de Movie.');
        }

        this.title = title;
        this.poster = poster;
        this.director = director;
        this.duration = duration;
        this.rate = rate;
        this.genre = genre;
        this.year = year;
        this.description = description;
    }
} */

/* getMovies: async function (url) {
    try {
        // Hacer una solicitud HTTP a la API de películas (reemplaza la URL con la API real)
        const response = await axios.get(url);

        // Extraer el arreglo de películas de la respuesta
        const peliculas = response.data.map(movieData => new Movie(movieData));
        // Enviar las películas como respuesta al cliente
        return peliculas
    } catch (error) {
        // Manejar errores en caso de que la solicitud falle
        res.status(500).json({ error: 'Error al obtener películas' });
    }
}, */