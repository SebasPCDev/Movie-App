const app = require("./src/server")
const dbCon = require("./src/config/dbCon")

PORT = 3000;


dbCon().then((res) => (
    app.listen(PORT, () => {
        console.log(`Servidor escuchando en el puerto ${PORT}`)
    })
)
)
