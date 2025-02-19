const express = require("express");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT | 8000

app.get("/", (req, res) => {
    return res.status(200).json({
        msg: 'Welcome to Brasswork'
    })
});

app.listen(PORT, () => {
    console.log(`bw_api server listening on ${PORT}`);
});
