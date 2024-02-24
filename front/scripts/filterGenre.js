
/* 
    Este script es el que maneja la sección de Géneros. Por medio de este, es posible filtrar los géneros a mostrar.

    Se importan los scripts que son requeridos para la ejecución del código.

    Se inicializa un array vacío, el cual será el contenedor de las películas a filtrar por género.

    La función getListMovies() retorna una promesa en donde se maneja de manera asincróna, invocando una función
    getRequestGenre, la cual hace el llamado a la API y retorna el array con los objetos dentro.

    Luego, como promesa resuelta, se ejecuta una función que usa como parámetro la lista de películas, 
    y ejecuta la escucha del evento del Select.

    Finalmente ejecuta la función createFilteredMovies, la tiene como parámetros, la lista de movies y el valor
    seleccionado.
*/

const { contenedor } = require("./showWebSite.js")
const getRequestGenre = require("./getRequest.js")
const createFilteredMovies = require("./createFilteredMovies.js")


const selectElement = document.getElementById("list_genres");
contenedor.style.display = "none";

let listMovies = [];

const translateMovies = {
    "Acción": "Action",
    "Aventura": "Adventure",
    "Comedia": "Comedy",
    "Drama": "Drama",
    "Fantasia": "Fantasy",
    "Ciencia Ficción": "Sci-Fi"
}

const getListM = async () => {
    try {
        listMovies = await getRequestGenre("http://localhost:3000/movies");
        selectElement.addEventListener("change", function (event) {
            contenedor.style.display = "flex"
            contenedor.innerHTML = "";
            const selectedValue = event.target.value;
            createFilteredMovies(listMovies, translateMovies[selectedValue]);
        })
    } catch (e) {
        console.log(e.message)

    }
}

getListM();

//* Esta es otra forma de hacerlo!

/* function getListMovies() {
    return new Promise(async (resolve, reject) => {
        try {
            listMovies = await getRequestGenre();
            resolve(listMovies); // Resuelve la promesa con la lista de películas
        } catch (error) {
            reject(error); // Rechaza la promesa en caso de error
        }
    });
}
getListMovies()
    .then((listMovies) => {
        selectElement.addEventListener("change", function (event) {
            contenedor.style.display = "flex"
            contenedor.innerHTML = "";
            const selectedValue = event.target.value;
            createFilteredMovies(listMovies, selectedValue);
        })

    })
    .catch((error) => {
        console.error(`Error al obtener la lista de películas: ${error.message}`);
    })

 */










//*Testing para más peliculas
/* function selectedMovie(value) {
    const genreMovies = [];
    $.get(URL, (data) => {
        tempDataTesting.forEach(e => {
            if (e.genre.includes(value)) {
                genreMovies.push(e)
            }
        })
        showWebSite(genreMovies)
    }
    )

} */

