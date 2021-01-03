const router = require("express").Router()
const Link = require("../database/model/Link")
const config = require("../../resource/config.json")
const randomNumber = require("../number/random-number")

router.post("/", (req, res) => {
    if (req.body && req.body.link) {
        const linkParam = req.body.link
        const code = randomNumber(8)

        console.log(`Novo código gerado! ${code}`)
        new Link({ code: code, link: linkParam, createdAt: Date.now() }).save().then(() => {
            res.redirect(`/success/${code}`)
        })
    }
})

router.get("/:code", async (req, res) => {
    const code = req.params.code
    const shortener = await Link.findOne({code}).exec()

    if (shortener) {
        res.render("success", {
            shortLink: `${config.domain}/${code}`,
            link: shortener.link,
        })
    }else res.redirect("/")
})


module.exports = router