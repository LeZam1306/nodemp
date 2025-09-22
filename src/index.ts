export const router = (arg: string[]) => {
  const command = arg[0];
  const param = arg[1];

  switch (command) {
    case "create:component":
      if (!param) {
        console.log('The "name" parameter is required');
      } else {
      }
      break;
    default:
      console.log("unknown command");
      break;
  }
};
