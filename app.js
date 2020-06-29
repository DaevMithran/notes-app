const chalk =require('chalk')
const yargs =require('yargs')
const notes=require('./notes.js')


//Add
yargs.command({
    command:'add',
    describe:'Add a new note',
    builder:{
        title:{
            describe:'Note Title',
            demand: true,
            type: 'string'
        },
        body:{
            describe:'Content',
            demand: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title,argv.body)
    }
})

//Remove
yargs.command({
    command:'remove',
    describe:'Remove a note',
    builder:{
        title:{
            describe: 'title to remove',
            demand: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
}
)
//List
yargs.command({
    command:'list',
    describe:'List a note',
    handler(){
        notes.listNote()
    }
}
)
//Read
yargs.command({
    command:'read',
    describe:'Read a note',
    builder:{
        title:{
            describe: 'title to read',
            demand: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})

//modify a body
yargs.command({
    command:'modify',
    describe:'modify a note',
    builder:{
        title:{
            describe:'title to modify',
            demand: true ,
            type: 'string'
        },
        body:{
            describe:'new body',
            demand: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.modifyNote(argv.title,argv.body)
    }
})

yargs.parse()
//console.log(yargs.argv)

