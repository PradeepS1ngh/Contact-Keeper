const express = require('express');
const router = express.Router();

//@route        GET /api/auth/
//@desc         Get logged in User
//@access       Private
router.get('/',(req,res)=>{
    res.send("Get logged User ");
})


//@route        POST /api/auth/
//@desc         Auth User & get Token
//@access       Public
router.post('/',(req,res)=>{
    res.send("Log in user  ");
})

module.exports = router;
