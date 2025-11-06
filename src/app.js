// config
const { PORT, ENV } = require("./config/server.config");

// setup
const express = require("express");
const app = express();

// app level middlewares
app.use(express.json())
app.use(require("morgan")("dev"))

// routes
app.use('/api/v1/products', require("./routes/product.routes"))

// post middlewares
app.use((err, req, res, next) => {
    return res.status(500).json({
        success: false,
        error: err.message,
        stack: ENV === "prod"? null: err.stack
    })
})

app.use((req, res) => res.status(404).json({ 
    success: false,
    message: "Route Not Found"
}))

// listen
app.listen(PORT, () => {
    console.log(`Server is running successfully on: http://localhost:${PORT}`)
})