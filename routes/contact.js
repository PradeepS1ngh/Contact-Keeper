const express = require('express');
const router = express.Router();

// for protective we USe auth Middleware
const auth = require('../Middleware/auth');
const Contact = require('../model/Contact');
// for Validations
const { check, validationResult } = require('express-validator');

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
router.post('/',[auth,[
    check('name', 'Name is required').not().isEmpty(),
]], async (req,res)=>{
    
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json(errors.array());
    }

    const { name , email , phone , type} = req.body
    try {
        const newContact = new Contact({
            name,
            email,
            phone,
            type,
            user : req.user.id
        })
    
        const contact = await newContact.save();
    
        res.json(contact);
    } catch (error) {
        console.error(error.message);
        return res.send("Server Error");
    }

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