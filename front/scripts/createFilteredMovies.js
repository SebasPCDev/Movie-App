
/* 
    Este script posee una función que recibe como parámetro la lista de películas y el valor seleccionado por el select.

    Luego recorre el arreglo de objetos, y para cada elemento que coincida con el género seleccionado, le hace un push a un 
    nuevo arreglo vacío.

    Se ejecuta la función showWebSite con el nuevo arreglo, el cual contiene sólo las películas filtradas.
*/
const { showWebSite } = require("./showWebSite")

function createFilteredMovies(listMovies, value) {
    const genreMovies = []
    listMovies.forEach(e => {
        if (e.genre.includes(value)) {
            genreMovies.push(e);
        }
    });

    showWebSite(genreMovies);
}

module.exports = createFilteredMovies;