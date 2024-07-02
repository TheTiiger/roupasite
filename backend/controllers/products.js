import {PrismaClient} from '@prisma/client';
const prisma = new PrismaClient();

export async function getProducts(req, res) {
    const products = await prisma.artigos.findMany({
        select: {
            name: true,
            id: true,
            tipoartigos: true
        },
        where: {
            tipoartigos: {
                name: req.params.tipo
            }
        }
    });
    res.status(200).json(products);
}

