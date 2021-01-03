const mongoose = require("mongoose")

const schema = mongoose.Schema({
    code: String,
    link: String,
    createdAt: Number
})

module.exports = mongoose.model("Link", schema, "links")