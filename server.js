const express = require('express');
const app = express();

let PORT = process.env.PORT || 5000;

app.get('/', (req,res) => {
    // res.send("Hello World");
    res.json({
        "msg" : "welcome to contactKeeper"
    })
})

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
})