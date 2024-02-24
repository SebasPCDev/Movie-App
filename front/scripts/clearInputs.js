

function clearInputs() {

    const inputFormValues = document.getElementsByClassName("input-value");
    const inputGenresValues = document.querySelectorAll(".form-check-input");
    const clearButton = document.getElementById("clearButton")
    clearButton.addEventListener("click", function () {
        Object.values(inputFormValues).forEach(e => {
            e.value = ""
        })
        Object.values(inputGenresValues).forEach(e => {
            e.checked = false;
        })
    })
}




module.exports = clearInputs