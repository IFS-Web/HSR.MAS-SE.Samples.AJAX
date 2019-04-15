import {default as fs} from 'fs';

const fileSystem = fs.promises;

function openRead() {
    const fileHandle = fileSystem.readFile('./toRead.txt', {encoding: 'utf-8'})
        .then(
            (fileContent) => {
                // TODO: Add error handling (empty file content) here...
                console.log(`File has been read: ${fileContent}`);
            },
            (err) => console.log(`Error while reading the file. ${err}`))
        .catch(err => {
            console.log(`Invalid file given: ${err}`);
        });
}

openRead();
