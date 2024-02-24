const { Router } = require("express")
const { getMovieControllerBD, postMovieControllerBD } = require("../controllers/moviesController")
const { validateInputMovie } = require("../middlewares/validateMovie")


const moviesRouter = Router()

moviesRouter.get("/", getMovieControllerBD)
moviesRouter.post("/", validateInputMovie, postMovieControllerBD)

module.exports = moviesRouter;