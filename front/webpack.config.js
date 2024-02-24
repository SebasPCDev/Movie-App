module.exports = {
    entry: {
        script1: "./scripts/index.js",
        script2: "./scripts/filterGenre.js",
        script3: "./scripts/addMovieForm.js"
    },
    output: {
        path: __dirname + "/public",
        filename: "[name].js"
    }
}