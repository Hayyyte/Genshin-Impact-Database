const router = require("express").Router();
const Movie = require("../models/movie");

router.get("/movies", async (req, res) => {
    try {
        const page = parseInt(req.query.page) - 1 || 0;
        const limit = parseInt(req.query.limit) || 9;
        const search = req.query.search || "";
        let sort = req.query.sort || "";
        let genre = req.query.genre || "All";

        
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

module.exports = router