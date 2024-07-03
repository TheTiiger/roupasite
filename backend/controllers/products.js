import {PrismaClient} from '@prisma/client';
const prisma = new PrismaClient();

export async function getProducts(req, res) {
    const products = await prisma.artigos.findMany({
        select: {
            name: true,
            id: true,
            tipoartigos: true
        }
    });
    res.status(200).json(products);
}

export async function getProductsTypes(req, res) {
    const productsTypes = await prisma.artigos.findMany({
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
    res.status(200).json(productsTypes);
}

export async function createProduct(req, res) {
    const {name, tipo} = req.body;
    const createproduct = await prisma.artigos.create({
        data: {
            name,
            tipoartigos: {
                connect: {
                    name: tipo
                }
            }
        }
    });
    res.status(201).json(createproduct);
}

export async function updateProduct(req, res){
    const {id} = req.params;
    const {name, tipo} = req.body;
    const updateproduct = await prisma.artigos.update({
        where: {
            id: parseInt(id)
        },
        data: {
            name,
            tipoartigos: {
                connect: {
                    name: tipo
                }
            }
        }
    });
    res.status(200).json(updateproduct);
}

export async function deleteProduct(req, res){
    const {id} = req.params;
    const deleteproduct = await prisma.artigos.delete({
        where: {
            id: parseInt(id)
        }
    });
    res.status(200).json(deleteproduct);
}
