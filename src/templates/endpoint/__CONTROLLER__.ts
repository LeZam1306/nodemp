import { Controller } from "./Controller.ts";

export class __CONTROLLER__Controller extends Controller {
  constructor() {
    super("/__PATH__");
  }

  protected initRoutes(): void {
    //this.router.get(this.path, readAll)  // readAll : src/services/__CONTROLLER__/readAll
    //this.router.get(`${this.path}/:id`, readOne)  // readAll : src/services/__CONTROLLER__/readOne
  }
}
