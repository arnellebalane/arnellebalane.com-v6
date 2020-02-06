const { quote } = require('shell-quote');

module.exports = {
  // TODO: This is a workaround for a known bug in lint-staged where some
  // commands can't handle filenames with brackets in them.
  // https://github.com/okonet/lint-staged/issues/676#issuecomment-518850249
  '*.{js,svelte}': filenames => {
    const commands = [];
    filenames.forEach(filename => {
      commands.push(
        `eslint --fix ${filename}`,
        quote(['prettier', '--write', filename]),
        quote(['git', 'add', filename])
      );
    });
    return commands;
  }
};
