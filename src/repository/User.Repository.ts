import { Request, Response } from "express";
import { prisma } from "../dataSource";

export async function createUser(req: Request, res: Response) {
	const user = await prisma.user.create({
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
}

export async function fetchUserProfile(req: Request, res: Response) {
	const user = await prisma.user.findUnique({
		where: { email: "pisey@email.com" },
		include: {
			Profile: true,
		},
	});

	res.json(user);
}

export async function createPost(req: Request, res: Response) {
	const user = await prisma.user.update({
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
}

export async function publishPost(req: Request, res: Response) {
	const user = await prisma.post.update({
		data: {
			published: true,
		},
		where: {
			id: "b0b41006-b929-47d3-a785-3e04de368c60",
		},
	});

	res.json(user);
}

export async function deleteUser(req: Request, res: Response) {
	const user = await prisma.user.delete({
		where: { email: "pisey@email.com" },
	});

	res.json(user);
}
