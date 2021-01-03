const router = require("express").Router()
const Link = require("../database/model/Link")

router.get("/", (req, res) => {
    res.render("index")
})

router.get("/:code", async (req, res) => {
    const code = req.params.code
    const shortener = await Link.findOne({code}).exec()

    if (shortener) {
        console.log("link", shortener)
        res.redirect(shortener.link)
    }else res.redirect("/")
})



module.exports = router