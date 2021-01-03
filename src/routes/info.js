const router = require("express").Router()
const config = require("../../resource/config.json")
const Link = require("../database/model/Link")

router.get("/:code", async (req, res) => {
    const code = req.params.code
    const shortener = await Link.findOne({code}).exec()

    if (shortener) {
        const hour = new Intl.DateTimeFormat("pt-BR", {hour: "2-digit"}).format(shortener.createdAt)
        const minute = new Intl.DateTimeFormat("pt-BR", {minute: "2-digit"}).format(shortener.createdAt)
        const day = new Intl.DateTimeFormat("pt-BR", {day: "2-digit"}).format(shortener.createdAt)
        const month = new Intl.DateTimeFormat("pt-BR", {month: "2-digit"}).format(shortener.createdAt)
        const year = new Intl.DateTimeFormat("pt-BR", {year: "numeric"}).format(shortener.createdAt)

        res.render("info", {
            dateFormat: `${hour}:${minute} ${day}/${month}/${year}`,
            link: shortener.link,
            shortLink: `${config.domain}/${code}`,
            code
        })
    }
})


module.exports = router