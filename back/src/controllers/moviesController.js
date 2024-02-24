
const Movie = require("../models/Movie");
const { getMovieBD, postMovieBD } = require("../services/movieService")


const getMovieControllerBD = async (req, res) => {
    try {
        const movies = await getMovieBD();
        res.status(200).json(movies)

    } catch (error) {
        res.status(500).json({
            message: "No se pudo obtener peliculas",
            error: error
        })
    }
}

const postMovieControllerBD = async (req, res) => {
    try {
        const { title, year, director, duration, genre, rate, poster, description } = req.body;
        const [newMovie, message] = await postMovieBD({ title, year, director, duration, genre, rate, poster, description })
        if (message === "created") {
            res.status(201).json({
                newMovie,
                message: "¡Película creada correctamente!"
            });
        } else {
            res.status(200).json({
                newMovie,
                message: "¡Película actualizada correctamente"
            });
        }

    } catch (error) {
        res.status(500).json({
            message: "No se pudo crear peliculas",
            error: error
        })

    }
}

module.exports = { getMovieControllerBD, postMovieControllerBD };





//* Implementación antes de usar mongoose
/* const getmoviesController = async (req, res) => {
    try {
        const listMovies = await getMovies(url);
        res.status(200).json(listMovies)
    } catch (error) {
        res.status(500).json({
            message: "No se ha podido obtener peliculas",
            error: error
        })

    }

} */