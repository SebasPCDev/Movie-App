
/* 
Este script se encarga de la creación de las tarjetas que se imprimen en la pantalla.
Recibe como parámetro el array de objetos que contienen las películas con toda su información.
NOTA: Funciona tanto para el index como para la sección de géneros.

Crea cada uno de los elementos HTML, con su asignación de clases para el uso de BootStrap
y retorna el elemento completo con todas las cartas creadas.
 */

function createTemplates(objMovies) {

    const { title, poster, year, director, duration, rate } = objMovies;
    //* container movie
    let container_movie = document.createElement("div");
    container_movie.className = "card col m-2 container_movie"
    container_movie.innerHTML = ""
    //* poster
    let container_movie_img = document.createElement("img");
    container_movie_img.className = "card-img-top p-4 object-fit-contain "
    container_movie_img.src = poster
    container_movie.appendChild(container_movie_img)

    let cardBody = document.createElement("div");
    cardBody.className = "card-body d-flex flex-column justify-content-top"


    //* title
    let container_movie_title = document.createElement("h5");
    container_movie_title.className = "card-title fs-4 w-auto"
    container_movie_title.innerHTML = `${title}`
    cardBody.appendChild(container_movie_title)


    //* description
    let container_movie_description = document.createElement("p");
    container_movie_description.className = "card-text fs-6"
    //*properties
    container_movie_description.innerHTML = `Director: ${director} <br>
                                            Año: ${year} <br>
                                            Duración: ${duration} <br>
                                            Calificación: ⭐${rate}
                                            `;
    cardBody.appendChild(container_movie_description);

    container_movie.appendChild(cardBody);

    return container_movie;
}

module.exports = createTemplates;