const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const user = require("./routes/user");

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/fahad").then((res) => {
    console.log("Mongodb connected");
}).catch((error) => {
    console.log(error);
    process.exit(1);
})

app.use(user);

app.get('*', (req, res) => {
    res.json({ msg: 404 });
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port} 🔥`));