import { Router } from "express";
import {
	createUser,
	createPost,
	deleteUser,
	fetchUserProfile,
	publishPost,
} from "../repository/User.Repository";

export class UserController {
	private _router: Router;
	constructor() {
		this._router = Router();
		this.setRoutes();
	}

	private setRoutes() {
		this._router.post("/api/createUser", createUser);
		this._router.get("/api/fetchUser", fetchUserProfile);
		this._router.post("/api/createPost", createPost);
		this._router.patch("/api/publishPost", publishPost);
		this._router.delete("/api/deleteUser", deleteUser);
	}

	public get router() {
		return this._router;
	}
}
