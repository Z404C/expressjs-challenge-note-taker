const path = require('path');
const router = require('express').Router();

router.get('/notes', (req, res)=>{
    res.sendFile(path.join(_dirname,'./notes.html'));
})

router.get("*", (req, res)=>{
    res.sendFile(path.join(_dirname, './index.html'))
})

module.exports=router;