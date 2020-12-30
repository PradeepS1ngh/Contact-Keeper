const express = require("express");
const connectDB = require("./config/db");
const path = require("path");
const app = express();

//  MongoDB Connection
connectDB();

// Init Middlewares for req.body
app.use(express.json({ extended: false }));

//?  Defines Routes
app.use("/api/user", require("./routes/user"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contact"));

//serve static assets in production
if (process.env.NODE_ENV === "production") {
    //set Static folder
    app.use(express.static("client/build"));

    app.get("*", (req, res) =>
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
    );
}

let PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
});
