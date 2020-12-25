const express = require("express");
const connectDB = require('./config/db');
const app = express();

connectDB();
app.get("/", (req, res) => {
    res.json({ msg: "welcome to Contact Keeper API" });
});

//?  Defines Routes
app.use('/api/user', require("./routes/user"));
app.use('/api/auth', require("./routes/auth"));
app.use('/api/contacts', require("./routes/contact"));

let PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
});

