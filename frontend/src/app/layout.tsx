import "../globals.css";

import { GiHamburgerMenu } from "react-icons/gi";
import { IoBag } from "react-icons/io5";
import Link from 'next/link';
import Logo from "../Components/Logo";
import HeaderLoginHandler from "../Components/HeaderLoginHandler";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html>
      <body>
        <div>
          <div className="sticky top-0 bg-white w-full shadow-lg">
            <div className="w-full bg-red-800 flex justify-center p-1">
              <p className="text-white text-md uppercase font-bold animate-pulse font-nexa">Portes grátis em compras superiores a 100€</p>
            </div>
            <div className="flex justify-between p-3">
              <div className="bg-red-800 w-10 h-10 rounded-full flex items-center justify-center text-white">
                <GiHamburgerMenu size={25} />
              </div>
              <Logo />
              <div className="flex space-x-4 items-center">
                <HeaderLoginHandler />
                <Link href='/shopingcart'>
                  <div>
                    <IoBag size={30} className="text-red-800" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}

export default Layout;