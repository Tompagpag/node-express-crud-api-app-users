import fs from "node:fs";
import chalk from "chalk";

export function logError(err) {
  let error = `${new Date().toLocaleString()}: Route: ${err.url} => ${
    err.code
  } ${err.message}`;
  fs.appendFile("error.log", `${error} \r\n`, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(
        chalk.red("\r\nNouvelles données dans le log d'erreur\r\n"),
        fs.readFileSync("error.log", "utf8")
      );
    }
  });
}
