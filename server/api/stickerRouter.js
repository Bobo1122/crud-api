const express = require("express");
const router = express.Router();

const queries = require("../db/queries");

router.get("/", (req, res) => {
  queries.getAll().then((stickers) => {
    res.json(stickers);
  });
});

router.post('/', (Req, res, next) => {

    
});
router.get("/:id", async (req, res) => {
  try {
    const response = await queries.getOne(req.params.id);

    response.map((sticker) => {
      res.json(sticker);
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json("Server Error");
  }
});

router.get("/title/:title", async (req, res) => {
  try {
    const response = await queries.getTitle(req.params.title);
    response.map((sticker) => res.json(sticker));
  } catch (err) {
    console.error(err.message);
    res.status(500).json("Server Error");
  }
});

module.exports = router;
