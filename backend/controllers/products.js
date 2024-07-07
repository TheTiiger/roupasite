import {PrismaClient} from '@prisma/client';
const prisma = new PrismaClient();

export async function getProduct(req, res) {
    const {id} = req.params;

    const product = await prisma.artigos.findUnique({
        where: {
            id
        },
        select: {
            name: true,
            id: true,
            descricao: true,
            preco: true,
            productimages: {
                select: {
                    id: true,
                    image: true
                }
            },
            stock: {
                select: {
                    sizes: {
                        select: {
                            order: true,
                            size: true
                        }
                    }
                }
            },
            tipoartigos: {
                select: {
                    sizesgrupoid: true
                }
            }
        }
    });

    const allSizes = await prisma.sizes.findMany({
        where: {
            sizesgrupoid: product.tipoartigos.sizesgrupoid
        }
    });

    if(!product){
        return res.status(404).json({
            "message": "Product not found!"
        });
    }

    const uniqueSizes = [];
    const seenSizes = new Set();
    
    const sizes = product.stock.filter(stock => {
        const size = stock.sizes.size;
        if (!seenSizes.has(size)) {
            seenSizes.add(size);
            uniqueSizes.push(stock);
            return true;
        }
        return false;
    });

    const allClicableSizes = [];

    sizes.forEach((size) => {
        allClicableSizes.push({
            name: size.sizes.size,
            isAvailable: true,
            order: size.sizes.order
        });
    })

    allSizes.forEach((dbSize) => {
        if(allClicableSizes.findIndex((clSz) => { return clSz.name === dbSize.size }) == -1){
            allClicableSizes.push({
                name: dbSize.size,
                isAvailable: false,
                order: dbSize.order
            });
        }
    });
    
    const sizesOrderd = allClicableSizes.sort((stockOrderBf, stockOrderAf) => { return stockOrderBf.order - stockOrderAf.order });

    const returnOnlyNeeded = sizesOrderd.map((goodSize) => {
        return {
            isAvailable: goodSize.isAvailable,
            name: goodSize.name
        };
    })

    res.status(200).json({
        ...product,
        stock: returnOnlyNeeded
    });
}

export async function getProducts(req, res) {
    const products = await prisma.artigos.findMany({
        select: {
            name: true,
            id: true,
            descricao: true,
            preco: true,
            productimages: {
                select: {
                    id: true,
                    image: true,
                    ismain: true
                },
                where: {
                    ismain: true
                }
            }
        }
    });
    res.status(200).json(products);
}

export async function getProductsTypes(req, res) {
    const productsTypes = await prisma.artigos.findMany({
        select: {
            name: true,
            id: true,
            descricao: true,
            preco: true,
            imagem: true,
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
