
const { check } = require("express-validator")
const { validateResult } = require("../helpers/validateMovieHelper")

const validateInputMovie = [
    check("title")
        .exists()
        .notEmpty()
        .escape()
        .custom((value) => {
            if (value.length < 2) {
                throw new Error("La cantidad minima de letras es 2")
            }
            return true
        }),
    check("year")
        .exists()
        .isNumeric()
        .custom((value) => {
            //value es el valor
            if (value < 1900 || value > 2024) {
                throw new Error("Rango de año debe estar entre 1900 y 2024")
            }
            return true
        }),
    check("director")
        .exists()
        .notEmpty(),
    check("duration")
        .exists()
        .notEmpty(),
    check("genre")
        .exists()
        .isArray()
        .notEmpty(),
    check("rate")
        .exists()
        .notEmpty()
        .isNumeric()
        .custom((value, { req }) => {
            //value es el valor
            if (value < 0 || value > 10) {
                throw new Error("Rango de la calificación debe ser entre 0.0 y 10.0")
            }
            return true
        }),
    check("poster")
        .exists()
        .notEmpty()
        .custom((value) => {
            if (!value.includes("https://")) {
                throw new Error("Debes ingresar una URL válida")
            }
            return true
        }),
    /*     check("description")
            .exists()
            .notEmpty()
            .isLength({ min: 30 }), */
    (req, res, next) => {
        validateResult(req, res, next)
    }

]

module.exports = { validateInputMovie }