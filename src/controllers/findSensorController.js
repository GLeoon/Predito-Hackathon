import { prisma } from "../database/prismaClient.js";

export class FindSensorController {
  async handle(req, res) {
    const { id } = req.params;
    console.log(id);
    const sensor = await prisma..findFirst({
      where: {
        id,
      },
    });

    return res.json(sensor);
  }
}