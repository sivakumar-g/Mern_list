const express = require('express');
const router = express.Router();

const Item = require('.././models/items');


router.get('/',(req,res)=>{
console.log("get route");
    Item.find()
    .then((items)=>res.json(items))
    .catch(err => res.send(err));

})

router.post('/',(req,res)=>{

    const newitem = new Item({
    name: req.body.name
})
 
newitem.save()
.then(items => res.json(items))
.catch(err => res.send(err));

})


router.delete('/:id',(req,res)=>
{
    Item.findById(req.params.id)
    .then(item => {
     Item.deleteOne().then(()=>res.json({"success" : true}))   
    
    })
    .catch(err => res.status(404).json({"success":false}));
})




module.exports = router;