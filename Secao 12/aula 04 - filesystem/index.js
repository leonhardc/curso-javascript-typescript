// const fs = require('fs').promisses;
import { readdir} from 'node:fs/promises';
// const path = require('path');
import path from 'path';

// fs.readdir(path.resolve(__dirname))
//     .then(files => console.log(files))
//     .catch(e => console.error(e));

async function read_directory(dirPath) { 
    dirPath =  dirPath||path.resolve(__dirname);
    const files = await readdir(dirPath);
    // walk(files)
    console.log(files);
}

function walk(files) {
    for (let file in files) { 
        console.log(file);
    }
}

read_directory('/home/leonardo/Área de trabalho/curso-javascript-typescript/')