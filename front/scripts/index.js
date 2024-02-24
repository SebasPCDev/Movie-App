/* 

    Este script es uno de los entries del webpackjson. Con el se maneja la página principal del proyecto.
    Por medio de la modulación, el único trabajo de el es hacer el llamado a la API para imprimir las películas
    y mostrarlas en pantalla. 

*/

//*Requirements
const axios = require("axios");
const { showWebSite, contenedor } = require("./showWebSite")

//* Declaración de elementos
const URL = `http://localhost:3000/movies`;


const getRequest = async () => {
    try {
        const response = await axios.get(URL);
        showWebSite(response.data);
    } catch (error) {
        const errorElement = document.createElement("h3");
        errorElement.innerHTML = `Error en la petición Axios a ${URL}: ${error.message}`;
        contenedor.appendChild(errorElement);
    }
}



getRequest();


//* Es otra manera de hacerlo.

/* async function getRequest() {
    await axios.get(URL)
        .then(response => {
            // La petición fue exitosa
            showWebSite(response.data);
        })
        .catch(error => {
            // Hubo un error en la petición
            const errorElement = document.createElement("h3");
            errorElement.innerHTML = `Error en la petición Axios a ${URL}: ${error.message}`;
            contenedor.appendChild(errorElement);
        });
} */



//* Request con AJAX
/* function getRequets() {
    $.get(URL, (data, status) => {
        if (status === "success") {
            showWebSite(data)
        } else {
            const errorElement = document.createElement("h3");
            console.log(errorElement)
            errorElement.innerHTML = `Error en la petición AJAX a ${URL}`
            contenedor.appendChild(errorElement)
        }
    })
} */





//*Testing con más peliculas
/* function getRequets() {

    $.get(URL, (data, status) => {
        if (status === "success") {
            showWebSite(tempDataTesting)
        } else {
            const errorElement = document.createElement("h3");
            console.log(errorElement)
            errorElement.innerHTML = `Error en la petición AJAX a ${URL}`

            contenedor.appendChild(errorElement)
        }
    })
} */