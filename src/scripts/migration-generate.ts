import * as dotenv from 'dotenv';
import * as shell from 'shelljs';
function main() {
  dotenv.config();
  shell.exec(
    'yarn typeorm migration:generate ./src/database/migrations/migration -d ./src/database/data-source.ts'
  );
}
main();
