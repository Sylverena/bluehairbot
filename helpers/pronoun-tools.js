import fs from 'node:fs';

export function writeToLocal(filename, data) {
    fs.promises.writeFile(filename, data)
        .then(() => {
            console.log(`${filename} written successfully`);
        })
        .catch(err => console.log(err));
}