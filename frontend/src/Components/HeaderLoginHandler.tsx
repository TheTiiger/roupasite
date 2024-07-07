'use client';

import { FaTimes } from "react-icons/fa";
import{FaCircleUser} from "react-icons/fa6";
import { Fragment, useState } from "react";
import Link from "next/link";

export default function HeaderLoginHandler() {

    const [showOptions, setShowOptions] = useState(false);

    const handleIconClick = () => {
        setShowOptions(!showOptions);
    };

    const handleCloseClick = () => {
        setShowOptions(false);
    };

    return (
        <Fragment>
            <FaCircleUser size={30} className="text-red-800 cursor-pointer" onClick={handleIconClick} />
            {showOptions ?
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 shadow-lg rounded">
                    <div className="flex justify-end p-2">
                        <FaTimes size={20} className="cursor-pointer" onClick={handleCloseClick} />
                    </div>
                    <ul>
                        <Link href='/Login'>
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Login</li>
                        </Link>
                        <Link href='/Register'>
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Register</li>
                        </Link>
                    </ul>
                </div> : null }
        </Fragment>
    );
}
