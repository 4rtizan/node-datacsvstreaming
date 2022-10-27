const fs = require('fs');
const es = require('event-stream');
const path = require('path');

const PATH_FILE = path.join(__dirname, 'test.csv');
let counter = 0;
const mainFunction = () => {
  const records = [];
  fs.createReadStream(PATH_FILE, 'utf-8')
    .pipe(es.split())
    .on('data', (data) => {
      const arrayLines = data.split('\n');

      for (const key in arrayLines) {
        const line = arrayLines[key];

        const sectores = line.split(',');
        if (sectores[3] == 1) {
          const sectores = line.split(',');
          counter += 1;
          records.push(line);
        }

        console.log(arrayLines[key]);
      }

      console.log(counter);
      console.log(records);
    });
};

mainFunction();

//5705578

/** 
 * 
   install dependencies:
     $ npm install

   run the app:
     $ DEBUG=aaa:* npm start


    http://localhost:3000/
*/
