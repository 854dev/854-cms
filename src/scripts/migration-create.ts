import * as dotenv from 'dotenv';
import * as shell from 'shelljs';
function main() {
  dotenv.config();
  shell.exec(
    'yarn typeorm migration:create ./src/database/migrations/migration'
  );
}
main();
