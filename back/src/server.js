//* Requerimientos
const express = require("express");
const morgan = require("morgan")
const cors = require("cors")
const moviesRouter = require("./routes/moviesRouter");


const app = express();

//*Middlewares
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())


app.use("/movies", moviesRouter)


module.exports = app;