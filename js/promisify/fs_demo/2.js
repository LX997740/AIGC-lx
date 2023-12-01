// fs读取文件
// promise + then /asinc+await 解决方案
const fs = require('fs');
var readFilename = function (path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf-8', (err, data) => {
            if (err) {
                reject(err)
            }
            resolve(data)
        })
    })
}

async function readFileAll() {
    try {
        const f1 = await readFilename('./a.txt')
        const f2 = await readFilename('./b.txt')
        const f3 = await readFilename('./c.txt')
        console.log(f1, f2, f3);
    } catch (err) {
        console.log(err);
    }

}

readFileAll();
