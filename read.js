var fs = require('fs');

function readFile(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, 'utf8', function (error, data) {
      if (error) return reject(error);

      console.log(fileName)
      console.log(data)

      resolve();
    })
  });
}

async function run() {
  await readFile('file1.txt');
  
}

run();