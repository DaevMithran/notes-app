const fs= require('fs')
const chalk =require('chalk')

const addnote = (title,body)=>{
    const notes =loadNotes()

    const duplicateNotes =notes.find((note)=> note.title == title)

    if(duplicateNotes.length==0){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('Note added'))
    }else{
        console.log(chalk.red.inverse('Title taken'))
    }
}
    
const removenote =(title)=>{
    const notes=loadNotes()
    const keepnotes = notes.filter((note)=> note.title !=title)

    const find =notes.filter((note)=>note.title == title)
     
    saveNotes(keepnotes)
    if(find.length)
    {
        console.log(chalk.green.inverse('Note Removed'))
    }else{
        console.log(chalk.red.inverse('Note not found'))
    }
}

const listnote =()=>{
    const notes = loadNotes()
    console.log(chalk.cyan.inverse('Your Notes'))
    const data = notes.forEach((note)=> console.log(note.title))
}

const readnote =(title)=>{
    const notes =loadNotes()
    
    const note=notes.find((note)=> note.title == title) 
     if(note)
        {   console.log(chalk.cyan(note.title))
            console.log(chalk.cyan(note.body))
        }
     else{
         console.log(chalk.red.inverse('No title found'))
     }
}

const modifynote =(title,body) =>{
    const notes = loadNotes()
    const note=notes.find((note)=>note.title==title)
        if(note)
        {
            note.body=body
            console.log(chalk.green.inverse('note modified'))
            saveNotes(notes)
        }
        else{
            console.log(chalk.red.inverse('No title found')) 
        } 
}

const loadNotes =()=>{
    try{
        const dataBuffer =fs.readFileSync('notes.json')
        const datajson = dataBuffer.toString()
        return JSON.parse(datajson)
    }catch (e){
        return []
    }    
}

const saveNotes = (notes)=>{
    const datajson =JSON.stringify(notes)
    fs.writeFileSync('notes.json',datajson)
}

module.exports ={
    addNote :addnote,
    removeNote :removenote,
    listNote : listnote,
    readNote: readnote,
    modifyNote: modifynote
}
