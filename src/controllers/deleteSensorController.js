import { prisma } from "../database/prismaClient.js";

export class DeleteSensorController{
    async handle(req,res){
        const { id }= req.params;
        const sensor = await prisma..delete({
            where: {
                id,
            },
        });
        return res.json(sensor);
    }
}