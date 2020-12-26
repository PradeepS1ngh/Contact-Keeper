const express = require('express');
const router = express.Router();

// for protective we USe auth Middleware
const auth = require('../Middleware/auth');

const Contact = require('../model/Contact');

//@route       GET /api/contacts
//@desc        GEt all contact  
//@access      Private
router.get('/',auth,async(req,res)=>{
    try {
        const contacts = await Contact.find({user : req.user.id}).sort({date : -1});
        res.json(contacts);

    } catch (error) {
        console.error(error.message);
        return res.status(500).send("Server Error");
    }
})

//@route       POST /api/contacts
//@desc        Add new contact  
//@access      Private
router.post('/',(req,res)=>{
    res.send("Contact Created");
})

//@route       PUT /api/contact/:id
//@desc        update COntact
//@access      Private
router.put('/:id',(req,res)=>{
    res.send("Contact Updated");
})

//@route       DELETE /api/contact/:id
//@desc        delete COntact
//@access      Private
router.delete('/:id',(req,res)=>{
    res.send("Contact deleted");
})

module.exports = router;