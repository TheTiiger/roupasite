
import "../globals.css";

import { GiHamburgerMenu } from "react-icons/gi";
import Link from 'next/link';
import Logo from "../Components/Logo";
import HeaderActionsHandler from "../Components/HeaderActionsHandler";
import { ReactNode } from "react";
import { CartProvider } from "../Contexts/Cart";
import Cart from "../Components/Cart";

interface LayoutProps {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {


  return (
    <html>
      <body className="relative">
        <CartProvider>
          <>
            <Cart />
            <div>
              <div className="sticky top-0 bg-white w-full shadow-lg z-50">
                <div className="w-full bg-red-800 flex justify-center p-1">
                  <p className="text-white text-md uppercase font-bold animate-pulse font-nexa">
                    Portes grátis em compras superiores a 100€
                  </p>
                </div>
                <div className="flex justify-between p-3 items-center">
                  <div className="bg-red-800 w-10 h-10 rounded-full flex items-center justify-center text-white">
                    <GiHamburgerMenu size={25} />
                  </div>
                  <Link href='/'>
                    <Logo />
                  </Link>
                  <div className="flex space-x-4">
                    <HeaderActionsHandler />
                  </div>
                </div>
              </div>
              <div>
                {children}
              </div>
            </div>
          </>
        </CartProvider>
      </body>
    </html>
  );
}

export default Layout;