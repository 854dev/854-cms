import chalk from "chalk";
import { Express } from "express";
import figlet from "figlet";
// import restInit from "server/rest";
import app from "./server/app";
import restInit from "./server/rest/index";

const port = process.env.PORT ?? 3018;

function appListen(app: Express) {
  app.listen(port, () => {
    const baseUrl = `http://localhost:${port}`;
    console.log(chalk.cyan("Server Running at: ", baseUrl));
    app.emit("App Listening...");
  });
}

function start(app: Express) {
  /** SERVICE INIT */
  restInit(app);
  appListen(app);

  /** START MESSAGE */
  (() => {
    console.log(chalk.blue.bgYellowBright("app starts..."));
    console.log(
      figlet.textSync("854", {
        font: "Star Wars",
        horizontalLayout: "full",
        verticalLayout: "default",
        width: 80,
        whitespaceBreak: true,
      })
    );
    console.log(chalk.blue("-------------------------*"));
    console.log(
      figlet.textSync("blog", {
        font: "Star Wars",
        horizontalLayout: "full",
        verticalLayout: "default",
        width: 80,
        whitespaceBreak: true,
      })
    );
  })();
}

function main() {
  start(app);
}

main();
