const test = require('tape');
const {accept, reject} = require('./declaration-checker')();

test('d3.path', t => {
  t.error(accept(/* language=TypeScript */ `
    import * as d3 from '../d3-path';
    
    const path:d3.Path = d3.path();
    
    path.moveTo(10, 10);
    path.lineTo(10, 10);
    path.quadraticCurveTo(10, 10, 20, 20);
    path.bezierCurveTo(10, 10, 10, 10, 10, 10);
    path.arcTo(10, 10, 10, 10, 10);
    path.arc(10, 10, 10, 240, 30, true);
    path.arc(10, 10, 10, 240, 30);
    path.rect(10, 10, 10, 10);
    
    const x:string = path.toString();
  `), 'available syntaxes')
  
  t.end()
})