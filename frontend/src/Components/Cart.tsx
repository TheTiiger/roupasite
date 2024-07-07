'use client';
import { FaTrashAlt } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import Link  from "next/link";

export default function Cart(){

    function onClose(){
        // Add functionality to close the cart
    }

    return (
        <div className="fixed bg-black bg-opacity-30 top-0 left-0 w-full h-full z-10 flex justify-end">
            <div className="flex bg-white w-96 h-full p-4 shadow flex flex-col"> 
                <div className="flex justify-between">
                    <h1 className="text-xl font-bold text-zinc-800 uppercase">O Meu Carrinho</h1>
                    <button onClick={onClose} className="text-zinc-800 text-xl font-bold">X</button>
                </div>
                <div className="flex-grow mt-6 overflow-y-auto">
                    <p className="p-2 text-zinc-500 text-sm">Produtos</p>
                    <div className="flex flex-col gap-6">
                        <div className="flex border-t">
                            <div className="w-24 h-24 mt-2">
                                <img src="http://localhost:8080/images/82543b4c-1b15-4f17-92c3-4a097b3f2583.jpg" className="object-cover w-full h-full" />
                            </div>
                            <div className="ml-2 mt-2">
                                <h1 className="font-bold text-zinc-800 text-lg leading-6">Olá, eu sou um produto!</h1>
                                <p className="text-zinc-500">€ 21,40</p>
                                <p className="text-zinc-500">Size: L</p>
                                <div className="flex items-center mt-2 space-x-2">
                                    <div className="flex border border-zinc-700 rounded w-fit">
                                        <div className="flex w-8 h-8 flex items-center justify-center">
                                            <p className="text-lg">-</p>
                                        </div>
                                        <div className="flex w-8 h-8 flex items-center justify-center">
                                            <p className="text-lg">21</p>    
                                        </div>
                                        <div className="flex w-8 h-8 flex items-center justify-center">
                                            <p className="text-lg">+</p>
                                        </div>
                                    </div>
                                    <FaTrashAlt size={20} className="text-zinc-800" />
                                </div>
                            </div>
                        </div>
                        <div className="flex border-t">
                            <div className="w-24 h-24 mt-2">
                                <img src="http://localhost:8080/images/82543b4c-1b15-4f17-92c3-4a097b3f2583.jpg" className="object-cover w-full h-full" />
                            </div>
                            <div className="ml-2 mt-2">
                                <h1 className="font-bold text-zinc-800 text-lg leading-6">Olá, eu sou um produto!</h1>
                                <p className="text-zinc-500">€ 21,40</p>
                                <p className="text-zinc-500">Size: L</p>
                                <div className="flex items-center mt-2 space-x-2">
                                    <div className="flex border border-zinc-700 rounded w-fit">
                                        <div className="flex w-8 h-8 flex items-center justify-center">
                                            <p className="text-lg">-</p>
                                        </div>
                                        <div className="flex w-8 h-8 flex items-center justify-center">
                                            <p className="text-lg">21</p>    
                                        </div>
                                        <div className="flex w-8 h-8 flex items-center justify-center">
                                            <p className="text-lg">+</p>
                                        </div>
                                    </div>
                                    <FaTrashAlt size={20} className="text-zinc-800" />
                                </div>
                            </div>
                        </div>
                        <div className="flex border-t">
                            <div className="w-24 h-24 mt-2">
                                <img src="http://localhost:8080/images/82543b4c-1b15-4f17-92c3-4a097b3f2583.jpg" className="object-cover w-full h-full" />
                            </div>
                            <div className="ml-2 mt-2">
                                <h1 className="font-bold text-zinc-800 text-lg leading-6">Olá, eu sou um produto!</h1>
                                <p className="text-zinc-500">€ 21,40</p>
                                <p className="text-zinc-500">Size: L</p>
                                <div className="flex items-center mt-2 space-x-2">
                                    <div className="flex border border-zinc-700 rounded w-fit">
                                        <div className="flex w-8 h-8 flex items-center justify-center">
                                            <p className="text-lg">-</p>
                                        </div>
                                        <div className="flex w-8 h-8 flex items-center justify-center">
                                            <p className="text-lg">21</p>    
                                        </div>
                                        <div className="flex w-8 h-8 flex items-center justify-center">
                                            <p className="text-lg">+</p>
                                        </div>
                                    </div>
                                    <FaTrashAlt size={20} className="text-zinc-800" />
                                </div>
                            </div>
                        </div>
                        <div className="flex border-t">
                            <div className="w-24 h-24 mt-2">
                                <img src="http://localhost:8080/images/82543b4c-1b15-4f17-92c3-4a097b3f2583.jpg" className="object-cover w-full h-full" />
                            </div>
                            <div className="ml-2 mt-2">
                                <h1 className="font-bold text-zinc-800 text-lg leading-6">Olá, eu sou um produto!</h1>
                                <p className="text-zinc-500">€ 21,40</p>
                                <p className="text-zinc-500">Size: L</p>
                                <div className="flex items-center mt-2 space-x-2">
                                    <div className="flex border border-zinc-700 rounded w-fit">
                                        <div className="flex w-8 h-8 flex items-center justify-center">
                                            <p className="text-lg">-</p>
                                        </div>
                                        <div className="flex w-8 h-8 flex items-center justify-center">
                                            <p className="text-lg">21</p>    
                                        </div>
                                        <div className="flex w-8 h-8 flex items-center justify-center">
                                            <p className="text-lg">+</p>
                                        </div>
                                    </div>
                                    <FaTrashAlt size={20} className="text-zinc-800" />
                                </div>
                            </div>
                        </div>
                        <div className="flex border-t">
                            <div className="w-24 h-24 mt-2">
                                <img src="http://localhost:8080/images/82543b4c-1b15-4f17-92c3-4a097b3f2583.jpg" className="object-cover w-full h-full" />
                            </div>
                            <div className="ml-2 mt-2">
                                <h1 className="font-bold text-zinc-800 text-lg leading-6">Olá, eu sou um produto!</h1>
                                <p className="text-zinc-500">€ 21,40</p>
                                <p className="text-zinc-500">Size: L</p>
                                <div className="flex items-center mt-2 space-x-2">
                                    <div className="flex border border-zinc-700 rounded w-fit">
                                        <div className="flex w-8 h-8 flex items-center justify-center">
                                            <p className="text-lg">-</p>
                                        </div>
                                        <div className="flex w-8 h-8 flex items-center justify-center">
                                            <p className="text-lg">21</p>    
                                        </div>
                                        <div className="flex w-8 h-8 flex items-center justify-center">
                                            <p className="text-lg">+</p>
                                        </div>
                                    </div>
                                    <FaTrashAlt size={20} className="text-zinc-800" />
                                </div>
                            </div>
                        </div>
                        <div className="flex border-t">
                            <div className="w-24 h-24 mt-2">
                                <img src="http://localhost:8080/images/82543b4c-1b15-4f17-92c3-4a097b3f2583.jpg" className="object-cover w-full h-full" />
                            </div>
                            <div className="ml-2 mt-2">
                                <h1 className="font-bold text-zinc-800 text-lg leading-6">Olá, eu sou um produto!</h1>
                                <p className="text-zinc-500">€ 21,40</p>
                                <p className="text-zinc-500">Size: L</p>
                                <div className="flex items-center mt-2 space-x-2">
                                    <div className="flex border border-zinc-700 rounded w-fit">
                                        <div className="flex w-8 h-8 flex items-center justify-center">
                                            <p className="text-lg">-</p>
                                        </div>
                                        <div className="flex w-8 h-8 flex items-center justify-center">
                                            <p className="text-lg">21</p>    
                                        </div>
                                        <div className="flex w-8 h-8 flex items-center justify-center">
                                            <p className="text-lg">+</p>
                                        </div>
                                    </div>
                                    <FaTrashAlt size={20} className="text-zinc-800" />
                                </div>
                            </div>
                        </div>
                        <div className="flex border-t">
                            <div className="w-24 h-24 mt-2">
                                <img src="http://localhost:8080/images/82543b4c-1b15-4f17-92c3-4a097b3f2583.jpg" className="object-cover w-full h-full" />
                            </div>
                            <div className="ml-2 mt-2">
                                <h1 className="font-bold text-zinc-800 text-lg leading-6">Olá, eu sou um produto!</h1>
                                <p className="text-zinc-500">€ 21,40</p>
                                <p className="text-zinc-500">Size: L</p>
                                <div className="flex items-center mt-2 space-x-2">
                                    <div className="flex border border-zinc-700 rounded w-fit">
                                        <div className="flex w-8 h-8 flex items-center justify-center">
                                            <p className="text-lg">-</p>
                                        </div>
                                        <div className="flex w-8 h-8 flex items-center justify-center">
                                            <p className="text-lg">21</p>    
                                        </div>
                                        <div className="flex w-8 h-8 flex items-center justify-center">
                                            <p className="text-lg">+</p>
                                        </div>
                                    </div>
                                    <FaTrashAlt size={20} className="text-zinc-800" />
                                </div>
                            </div>
                        </div>
                        <div className="flex border-t">
                            <div className="w-24 h-24 mt-2">
                                <img src="http://localhost:8080/images/82543b4c-1b15-4f17-92c3-4a097b3f2583.jpg" className="object-cover w-full h-full" />
                            </div>
                            <div className="ml-2 mt-2">
                                <h1 className="font-bold text-zinc-800 text-lg leading-6">Olá, eu sou um produto!</h1>
                                <p className="text-zinc-500">€ 21,40</p>
                                <p className="text-zinc-500">Size: L</p>
                                <div className="flex items-center mt-2 space-x-2">
                                    <div className="flex border border-zinc-700 rounded w-fit">
                                        <div className="flex w-8 h-8 flex items-center justify-center">
                                            <p className="text-lg">-</p>
                                        </div>
                                        <div className="flex w-8 h-8 flex items-center justify-center">
                                            <p className="text-lg">21</p>    
                                        </div>
                                        <div className="flex w-8 h-8 flex items-center justify-center">
                                            <p className="text-lg">+</p>
                                        </div>
                                    </div>
                                    <FaTrashAlt size={20} className="text-zinc-800" />
                                </div>
                            </div>
                        </div>
                        <div className="flex border-t">
                            <div className="w-24 h-24 mt-2">
                                <img src="http://localhost:8080/images/82543b4c-1b15-4f17-92c3-4a097b3f2583.jpg" className="object-cover w-full h-full" />
                            </div>
                            <div className="ml-2 mt-2">
                                <h1 className="font-bold text-zinc-800 text-lg leading-6">Olá, eu sou um produto!</h1>
                                <p className="text-zinc-500">€ 21,40</p>
                                <p className="text-zinc-500">Size: L</p>
                                <div className="flex items-center mt-2 space-x-2">
                                    <div className="flex border border-zinc-700 rounded w-fit">
                                        <div className="flex w-8 h-8 flex items-center justify-center">
                                            <p className="text-lg">-</p>
                                        </div>
                                        <div className="flex w-8 h-8 flex items-center justify-center">
                                            <p className="text-lg">21</p>    
                                        </div>
                                        <div className="flex w-8 h-8 flex items-center justify-center">
                                            <p className="text-lg">+</p>
                                        </div>
                                    </div>
                                    <FaTrashAlt size={20} className="text-zinc-800" />
                                </div>
                            </div>
                        </div>
                        <div className="flex border-t">
                            <div className="w-24 h-24 mt-2">
                                <img src="http://localhost:8080/images/82543b4c-1b15-4f17-92c3-4a097b3f2583.jpg" className="object-cover w-full h-full" />
                            </div>
                            <div className="ml-2 mt-2">
                                <h1 className="font-bold text-zinc-800 text-lg leading-6">Olá, eu sou um produto!</h1>
                                <p className="text-zinc-500">€ 21,40</p>
                                <p className="text-zinc-500">Size: L</p>
                                <div className="flex items-center mt-2 space-x-2">
                                    <div className="flex border border-zinc-700 rounded w-fit">
                                        <div className="flex w-8 h-8 flex items-center justify-center">
                                            <p className="text-lg">-</p>
                                        </div>
                                        <div className="flex w-8 h-8 flex items-center justify-center">
                                            <p className="text-lg">21</p>    
                                        </div>
                                        <div className="flex w-8 h-8 flex items-center justify-center">
                                            <p className="text-lg">+</p>
                                        </div>
                                    </div>
                                    <FaTrashAlt size={20} className="text-zinc-800" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Link href="/Buy">
                    <button className="flex p-2 w-full mt-4 bg-red-700 text-white space-x-2 items-center justify-center rounded hover:bg-red-800">
                        <MdOutlineShoppingCart size={22} />
                        <p>Finalizar Carrinho</p>
                    </button>
                </Link>
            </div>
        </div>
    );
}