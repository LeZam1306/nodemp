import { createProject } from "./commands/createProject.js";

export const router = (arg: string[]) => {
  const command = arg[0];
  const param = arg[1];

  switch (command) {
    case "create:project":
      if (!param) {
        console.log('missing "name" parameter');
        break;
      }
      createProject(param);
      break;
    case "create:endpoint":
      if (!param) {
        console.log('missing "name" parameter');
        break;
      }

      break;
    default:
      console.log("unknown command");
      break;
  }
};
