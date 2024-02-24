/* 
    Este script se encarga hacer el llamado a la API por medio de axios y retornar la información de las películas.
*/
const axios = require("axios")


async function getRequestGenre(URL) {
    try {
        const listMovies = await axios.get(URL)
        return listMovies.data
    } catch (error) {
        console.error(`Error en la petición Axios a ${URL}: ${error.message}`)
    }

}

module.exports = getRequestGenre;