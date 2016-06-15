const ts = require('typescript');
const rimraf = require('rimraf');
const fs = require('fs');
const chalk = require('chalk');

const defaultOptions = {
  target: ts.ScriptTarget.ES5,
  module: ts.ModuleKind.CommonJS,
  outDir: __dirname + '/.output',
  tempFile: __dirname + "/.test.ts"
}

module.exports = function (options) {
  options = Object.assign({}, defaultOptions, options);

  function compile(source) {
    fs.writeFileSync(options.tempFile, source, {encoding: 'utf8'});

    const program = ts.createProgram([options.tempFile], options);
    const emitResult = program.emit();
    const diagnostics = ts.getPreEmitDiagnostics(program).concat(emitResult.diagnostics);

    return diagnostics.map(diagnostic => {
      const {line, character} = diagnostic.file.getLineAndCharacterOfPosition(diagnostic.start);
      const message = ts.flattenDiagnosticMessageText(diagnostic.messageText, '\n');
      return {
        fileName: diagnostic.file.fileName,
        line: line + 1,
        character: character + 1,
        message
      };
    });
  }

  function accept(source) {
    const diagnostics = compile(source);
    if (diagnostics.length > 0) {
      let message = [chalk.red(source)];
      diagnostics.forEach(diagnostic => {
        if (diagnostic.fileName !== options.tempFile) message.push(`${diagnostic.fileName} (${diagnostic.line},${diagnostic.character})`);
        message.push(diagnostic.message);
      });
      return new Error(message);
    }
    return null;
  }

  function reject(source) {
    const diagnostics = compile(source);
    if (diagnostics.length === 0) {
      return new Error(chalk.red(source));
    }
    return null;
  }

  return {accept, reject};
}