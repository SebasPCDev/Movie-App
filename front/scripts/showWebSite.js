/* 
    Este script se encarga de la creación del elemento DIV que contiene las cartas a imprimir.
    
    Finalmente, hace un mapeo del array de entrada y utiliza la función createTemplates() para la creación de 
    cada carta.. haciendo al final un append de cada una.
*/

const createTemplates = require("./createCards");

const contenedor = document.getElementById("container_all_movies");
contenedor.className = "row col-12 mx-auto row-cols-4 justify-content-center";

function showWebSite(data) {
    const mapping = data.map(e => createTemplates(e))
    mapping.forEach(e => {
        contenedor.appendChild(e)
    })
}

module.exports = { showWebSite, contenedor };