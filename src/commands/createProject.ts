import { spawnSync } from "child_process";
import fs from "fs";
import path from "path";

export const createProject = (param: string) => {
  try {
    const filesRoot = fs.readdirSync(".");

    filesRoot.forEach((file) => {
      if (param === file) {
        throw new Error("This project already exists, change name");
      }
    });

    fs.mkdirSync(`./${param}`);
    const templatePath = path.resolve(
      new URL("../../../src/templates/project", import.meta.url).pathname
    );

    fs.cpSync(templatePath, `./${param}`, { recursive: true });
    spawnSync("npm", ["install"], {
      cwd: `./${param}`,
      stdio: "overlapped",
    });
  } catch (error) {
    console.log(
      error instanceof Error ? error.message : "An unknown error has occurred"
    );
  }
};
