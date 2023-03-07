const router = require("express").Router();
const { v4: uuidv4 } = require('uuid')
const { note }=require('./noteCreate')
const { makeNote }=("public/apiRoutes/noteCreate.js")

router.get('/notes', (req, res)=>{
  let save = note;
  res.json(save)
})

router.post('/notes', (req, res)=>{
  req.body.id = uuidv4();
  let newNote = makeNote(req.body, note);
  res.json(newNote)
});

module.exports=router