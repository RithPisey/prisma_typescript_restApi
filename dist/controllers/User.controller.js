"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const express_1 = require("express");
const User_Repository_1 = require("../repository/User.Repository");
class UserController {
    constructor() {
        this._router = (0, express_1.Router)();
        this.setRoutes();
    }
    setRoutes() {
        this._router.post("/api/createUser", User_Repository_1.createUser);
        this._router.get("/api/fetchUser", User_Repository_1.fetchUserProfile);
        this._router.post("/api/createPost", User_Repository_1.createPost);
        this._router.patch("/api/publishPost", User_Repository_1.publishPost);
        this._router.delete("/api/deleteUser", User_Repository_1.deleteUser);
    }
    get router() {
        return this._router;
    }
}
exports.UserController = UserController;
//# sourceMappingURL=User.controller.js.map