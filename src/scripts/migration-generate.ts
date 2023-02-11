// import shell from 'shelljs';
const shell = module.require('shelljs');

function main() {
  shell.exec(
    'yarn typeorm migration:generate ./src/database/migrations -d ./src/database/data-source.ts'
  );
}
main();
