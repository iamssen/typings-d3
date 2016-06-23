const {getPackages} = require('version-check');
const glob = require('glob');
const path = require('path');
const fs = require('fs');
const Table = require('cli-table');
const chalk = require('chalk');

function getDeclaration(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, {encoding: 'utf8'}, (err, source) => {
      if (err) {
        reject(err);
        return;
      }
      const data = JSON.parse(source);
      resolve({name: data.name, version: data.version});
    });
  })
}

glob('./d3-*/typings.json', (err, files) => {
  const declarations = Promise.all(files.map(file => getDeclaration(file)));
  const packages = getPackages(files.map(file => path.basename(path.dirname(file))));

  Promise.all([declarations, packages])
         .then((result) => {
           const [declarations, packages] = result;
           const index = [];

           declarations.forEach(declaration => {
             index.push([declaration.name, declaration.version]);
           });

           packages.modules.forEach(module => {
             index.find(item => item[0] === module.name).push(module.version);
           });

           index.forEach(item => {
             if (item[1] !== item[2]) item.forEach((x, i) => item[i] = chalk.red(x));
           });

           return index;
         })
         .then(index => {
           const table = new Table({
             head: ['name', 'declaration', 'module'],
             style: {
               compact: true
             }
           });
           index.forEach(item => table.push(item));
           console.log(table.toString());
         })
})