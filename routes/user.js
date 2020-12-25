const express = require('express');
const router = express.Router();

// for Validations
const { check, validationResult } = require('express-validator');

const User = require('../model/User')

//@router   POST  /api/user/
//@desc     Register a User
//@access   Public

router.post('/', [
    check('name','Please Enter User Name').not().isEmpty(),
    check('email','Please Enter Valid Email').isEmail(),
    check('password','Please Enter Password Upto 5 length').isLength({min : 5})
], (req, res) => {

    const errors = validationResult(req)

    if(!errors.isEmpty()){
        return res.status(400).json({error : errors.array()})
    }
    res.send('Passed');
})

module.exports = router;