const fs = require('fs');
const archiver = require('archiver');

const zipFile = archiver('zip', { zlib: { level: 9 }});

zipFile.on('warning', error => {
    console.log('warning:', error)
});

zipFile.on('error', error => {
    console.error('error occurred :', error)
});

const writeStream = fs.createWriteStream(__dirname + '/report');
zipFile.pipe(writeStream);

zipFile.directory('mochawesome-report', false)

zipFile.finalize();

// import { ZipAFolder, zip } from "zip-a-folder";



// // class TestMe {

// //     static async main() {
//     await zip('mochawesome-report', 'report.zip');
// //     }
// // }

// //TestMe.main();