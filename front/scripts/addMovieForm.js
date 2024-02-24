
const axios = require("axios")
const URL = `http://localhost:3000/movies`;
const clearInputs = require("./clearInputs")


//! Hacer una función para validar los inputs!! 

function addMovieForm() {
    try {
        //Capturo boton submit
        const submitEvent = document.getElementById("add-movie-form");
        const rate = document.getElementById("exampleFormControlInput6");
        const resStatusMessage = document.querySelector(".res-status-message")

        submitEvent.addEventListener("submit", async function (event) {
            event.preventDefault()

            // Capturar los elementos del formulario
            const dataFormat = Object.fromEntries(new FormData(event.target))


            //Capturar los géneros seleccionados
            const genres = document.querySelectorAll(".form-check-input");
            const selectedGenres = []
            //Evaluación de los checkbox con la propiedad checked true/false
            genres.forEach(function (checkbox) {
                if (checkbox.checked) {
                    selectedGenres.push(checkbox.value)
                }
            });
            dataFormat.genre = selectedGenres; //añadir generos como propiedad al objeto dataFormat

            //Petición axios
            await axios.post(URL, dataFormat)
                .then((res) => {
                    resStatusMessage.innerText = res.data.message
                }
                )
                .catch((error) => {
                    resStatusMessage.innerText = error
                }
                )

        })
        clearInputs();
    } catch (error) {
        console.log(error)

    }
}

addMovieForm()