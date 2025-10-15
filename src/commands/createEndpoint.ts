import fs from "fs";
import path from "path";

export const createEndpoint = (arg: string[]) => {
  const nameEndpoint = arg[0] as string;
  const pathController = arg[1] as string;

  try {
    //verify if the controller exist
    if (fs.existsSync(`./src/controllers/${nameEndpoint}Controller.ts`)) {
      throw new Error("This endpoint already exists in controllers folder");
    }
    const controllerTemplatePath = path.resolve(
      new URL(
        "../../../src/templates/endpoint/__CONTROLLER__.ts",
        import.meta.url
      ).pathname
    );
    //copy the controller template
    let content = fs.readFileSync(controllerTemplatePath, "utf-8");
    //replace placeholder of the template
    content = content.replaceAll("__CONTROLLER__", nameEndpoint);
    content = content.replaceAll("__PATH__", pathController);
    //past the template in the project
    fs.writeFileSync(`src/controllers/${nameEndpoint}Controller.ts`, content);

    //verify if the model exist
    if (fs.existsSync(`./src/models/${nameEndpoint}.ts`)) {
      throw new Error("This endpoint already exists in models folder");
    }
    const modelTemplatePath = path.resolve(
      new URL("../../../src/templates/endpoint/__MODEL__.ts", import.meta.url)
        .pathname
    );
    //copy the model template
    content = fs.readFileSync(modelTemplatePath, "utf-8");
    //replace placeholder of the template
    content = content.replaceAll("__MODEL__", nameEndpoint);
    //past the template in the project
    fs.writeFileSync(`src/models/${nameEndpoint}.ts`, content);

    //verify if the index of project
    if (!fs.existsSync(`./src/models/${nameEndpoint}.ts`)) {
      throw new Error("The index doesen't exist");
    }
    content = fs.readFileSync("./src/index.ts", "utf-8");
    content = content.replace(
      "//import-route-injection",
      `//import-route-injection\nimport { ${nameEndpoint}Controller } from './controllers/${nameEndpoint}Controller.ts'`
    );
    content = content.replace(
      "//controller-injection",
      `//controller-injection\n new ${nameEndpoint}Controller(),`
    );
    fs.writeFileSync("./src/index.ts", content);
  } catch (error) {
    console.log(
      error instanceof Error ? error.message : "An unknown error has occurred"
    );
  }
};
