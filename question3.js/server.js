const express = require("express")

const app = express();

const PORT = process.env.PORT || 4500

app.get("/", (req, res) => {
    res.json({ msg: "I am Homepage!" })
})

app.get("/about", (req, res) => {
    res.json({ msg: "I am About Page!"})
})

app.get("/contact", (req, res) => {
    res.json({ email: "support@pwskills.com"})
})

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}...`);
})