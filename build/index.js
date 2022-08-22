import fg from 'fast-glob'
import fs from 'fs'

const exex = async () => { 
    const entries = await fg(['src/wenjian/*.js'])
    console.log(32313211321331233);
    const arr = await fg(['./main.js'])
    if(arr.length){
        fs.unlinkSync('./main.js')
    }

    for (let key in entries) {
        fs.writeFile('./main.js',`export * from './${entries[key]}';\n`,{'flag':'a'},function (err) {
            if(err) throw err
        })
        
    }
    
}
exex()