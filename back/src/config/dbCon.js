
const mongoose = require("mongoose")
require("dotenv").config()

const dbCon = async () => {
    //realizar la conexión con la BD
    await mongoose.connect(`${process.env.DB_URI}`);

};

module.exports = dbCon;