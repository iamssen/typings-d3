const {getPackages} = require('version-check');
const Table = require('cli-table');
const chalk = require('chalk');

const modules = require('../version.json');

getPackages(Object.keys(modules))
  .then(packages => {
    const index = [];
    
    Object.keys(modules).forEach(name => {
      index.push([name, modules[name]]);
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