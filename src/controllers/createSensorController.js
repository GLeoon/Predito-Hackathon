import { prisma } from "../database/prismaClient.js";


export class CreateSensoController{
    async handle(req, res){

        const {  } = req.body
        const result = await prisma..create({
            data: {
               
            },
        })
        res.json(result)
    }
}
