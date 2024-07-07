'use client';
import { Fragment } from 'react';
import { FaTimes } from 'react-icons/fa';
import { FaCircleUser } from 'react-icons/fa6';
import { IoBag } from "react-icons/io5";
import Link from 'next/link';
import { useCart } from "@/Contexts/Cart";
import { useState } from 'react';

const HeaderLoginHandler = () => {
    const { setShowCart } = useCart();
    const [loginOptions, setLoginOptions] = useState(false);

    const handleLoginMenuShow = () => {
        setLoginOptions(!loginOptions);
    };

    const handleCartSideView = () => {
        setShowCart(true);
    };

    return (
        <Fragment>
            <IoBag size={30} className="text-red-800" onClick={handleCartSideView} />
            <FaCircleUser size={30} className="text-red-800 cursor-pointer" onClick={handleLoginMenuShow} />
            {loginOptions ?
                <div className="absolute right-4 mt-2 w-48 bg-white border border-gray-300 shadow-lg rounded">
                    <div className="flex justify-end p-2">
                        <FaTimes size={20} className="cursor-pointer" onClick={handleLoginMenuShow} />
                    </div>
                    <ul>
                        <Link href='/Login'>
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={handleLoginMenuShow}>Login</li>
                        </Link>
                        <Link href='/Register'>
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={handleLoginMenuShow}>Register</li>
                        </Link>
                    </ul>
                </div> : null }
        </Fragment>
    );
};

export default HeaderLoginHandler;
