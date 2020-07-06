const express = require('express');

const app = express();

const port = process.env.PORT | 5000;

app.get('/', (req, res) => {
    res.json({
        "message": "Hello World! 🌍"
    })
});

app.use('/api/v1/stickers', require('./api/stickerRouter'));


app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`);
});