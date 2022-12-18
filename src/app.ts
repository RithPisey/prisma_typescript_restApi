import express from "express";
import { UserController } from "./controllers/User.controller";
export class Application {
	private _app: express.Application;
	private userController: UserController;

	constructor() {
		this._app = express();
		this.userController = new UserController();
		this.setConfig();
		this.routController();
	}

	private setConfig() {
		this._app.use(express.json());
		this._app.use(express.urlencoded({ extended: true }));
	}

	private routController() {
		this._app.use(this.userController.router);
	}

	public get app() {
		return this._app;
	}
}
