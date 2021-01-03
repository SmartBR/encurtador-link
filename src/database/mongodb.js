const mongoose = require("mongoose")
const config = require("../../resource/config.json")

mongoose.connect(config.mongo_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
})

mongoose.connection.on("connected", () => console.log("Conectado ao MongoDB."))