"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.publishPost = exports.createPost = exports.fetchUserProfile = exports.createUser = void 0;
const dataSource_1 = require("../dataSource");
function createUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield dataSource_1.prisma.user.create({
            data: {
                email: "pisey@email.com",
                name: "pisey",
                Profile: {
                    create: {
                        bio: "I Love coding",
                    },
                },
            },
        });
        res.json(user);
    });
}
exports.createUser = createUser;
function fetchUserProfile(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield dataSource_1.prisma.user.findUnique({
            where: { email: "pisey@email.com" },
            include: {
                Profile: true,
            },
        });
        res.json(user);
    });
}
exports.fetchUserProfile = fetchUserProfile;
function createPost(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield dataSource_1.prisma.user.update({
            data: {
                posts: {
                    create: {
                        title: "My story..",
                        content: "I love ...",
                        published: true,
                    },
                },
            },
            where: {
                email: "pisey@email.com",
            },
            select: {
                posts: true,
                name: true,
                email: true,
            },
        });
        res.json(user);
    });
}
exports.createPost = createPost;
function publishPost(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield dataSource_1.prisma.post.update({
            data: {
                published: true,
            },
            where: {
                id: "b0b41006-b929-47d3-a785-3e04de368c60",
            },
        });
        res.json(user);
    });
}
exports.publishPost = publishPost;
function deleteUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield dataSource_1.prisma.user.delete({
            where: { email: "pisey@email.com" },
        });
        res.json(user);
    });
}
exports.deleteUser = deleteUser;
//# sourceMappingURL=User.Repository.js.map