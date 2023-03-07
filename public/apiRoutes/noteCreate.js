const fs=require("fs")
const path = require("path")

function noteCreation (body, takeNoteArray){
    const note = body;
    takeNoteArray.push(note);
    fs.writeFileSync(
        path.join(__dirname,'../db/db.json'),
        JSON.stringify({
            notes: takeNoteArray
        }, null, 2)
    )
    return note;
}





module.exports={noteCreation}