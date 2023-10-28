// import module
const express = require("express")

// create an express app
const app = express();

// initialize the counter
let counter = 0

const PORT = process.env.PORT || 8500

// here defines the route to get the current counter value
app.get("/", (req, res) => {
    res.json({counter: counter});
})

// Define the route to increment the counter by 1
app.get("/increment", (req, res) => {
    counter++
    res.json({counter: counter})
})

// Define the route to decrement the counter by 1
app.get("/dcrement", (req, res) => {
    counter--
    res.json({counter: counter})
})

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}....`);
})