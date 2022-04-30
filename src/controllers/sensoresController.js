import { prisma } from "../database/prismaClient.js";

export class GetSensoresController{
    async handle(req, res){
        const sensores = await prisma..findMany();
        return res.json(sensores);
    }
}