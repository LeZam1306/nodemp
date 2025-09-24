import express, { Router } from "express";

export abstract class Controller {
  public path: string;
  public router: Router = express.Router();

  constructor(path: string) {
    this.path = path;
    this.initRoutes(); 
  }

  protected abstract initRoutes(): void;
}