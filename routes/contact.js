const express = require('express');
const router = express.Router();

//@route       GET /api/contacts
//@desc        GEt all contact  
//@access      Private
router.get('/',(req,res)=>{
    res.send("Read a Contact ");
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