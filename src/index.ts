import { createEndpoint } from "./commands/createEndpoint.js";
import { createProject } from "./commands/createProject.js";

export const router = (arg: string[]) => {
  const command = arg[0];
  const param = arg.slice(1);

  switch (command) {
    case "create:project":
      if (!param[0]) {
        console.log('missing "name" parameter"');
        break;
      }
      createProject(param);
      break;
    case "create:endpoint":
      if (param.length < 2) {
        console.log('2 parameters missing "name" "path"');
        break;
      }
      createEndpoint(param);
      break;
    default:
      console.log("unknown command");
      break;
  }
};
