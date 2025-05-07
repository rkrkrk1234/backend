const fs = require('fs');
const path = require('path');
const util = require('util');

const readdir = util.promisify(fs.readdir);
const stat = util.promisify(fs.stat);

async function find(dirPath) {
  try {
    const entries = await readdir(dirPath);
    for (const entry of entries) {
      const fullPath = path.join(dirPath, entry);
      try {
        const stats = await stat(fullPath);
        if (stats.isDirectory()) {
          await find(fullPath);
        } else if (path.extname(entry) === '.js') {
          const relativePath = path.relative(__dirname, fullPath);
          console.log(relativePath.replaceAll(path.sep, '\\'));
        }
      } catch (err) {
        console.error(err);
      }
    }
  } catch (err) {
    console.error(err);  
  }
}

find(path.join(__dirname, 'test')); 
