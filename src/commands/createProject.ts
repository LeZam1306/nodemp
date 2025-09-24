import { spawnSync } from "child_process";
import fs from "fs";
import path from "path";

export const createProject = (param: string) => {
  try {
    const filesRoot = fs.readdirSync(".");
    //Verify if the name does exist in current folder
    filesRoot.forEach((file) => {
      if (param === file) {
        throw new Error("This project already exists, change name");
      }
    });
    //generate the folder
    fs.mkdirSync(`./${param}`);
    const templatePath = path.resolve(
      new URL("../../../src/templates/project", import.meta.url).pathname
    );
    //generate the template
    fs.cpSync(templatePath, `./${param}`, { recursive: true });

    spawnSync("npm", ["install"], {
      cwd: `./${param}`,
      stdio: "inherit",
    });
  } catch (error) {
    console.log(
      error instanceof Error ? error.message : "An unknown error has occurred"
    );
  }
};
