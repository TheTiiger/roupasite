'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import GucciLogo from "../Components/images/gucci-logo.png";
import "../Components/CSS/Homepage.css";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarOpen2, setIsSidebarOpen2] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleSidebar2 = () => setIsSidebarOpen2(!isSidebarOpen2);

  useEffect(() => {
    const handleScroll = () => {
      const initialLogo = document.querySelector('.initial-logo') as HTMLElement;

      if (initialLogo) {
        if (window.scrollY > 50) {
          initialLogo.style.opacity = '0';
          initialLogo.style.fontSize = '2em';
        } else {
          initialLogo.style.opacity = '1';
          initialLogo.style.fontSize = '5em';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <html>
      <body>
        <div className="container">
          <header className="site-header">
            <div className="logo">
              <Image src={GucciLogo} alt="Gucci Logo" className="gucci-logo" />
            </div>
            <div className="top-info">
              <nav className="main-nav right-nav">
                <ul className="nav-links">
                  <li>
                    <a href="/home">Home</a>
                  </li>
                  <li>
                    <a className="menu-toggle" onClick={toggleSidebar2}>
                      Menu
                    </a>
                  </li>
                  <li>
                    <a className="hover-effect" onClick={toggleSidebar}>
                      Contato
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="search-container">
                <label className="search-label">
                  <input type="text" name="text" className="input-text" required placeholder="Type here..." />
                  <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" width="512" height="512" x="0" y="0" viewBox="0 0 56.966 56.966" enableBackground="new 0 0 512 512" xmlSpace="preserve">
                    <g>
                      <path d="M55.146 51.887 41.588 38.329a24.188 24.188 0 0 0 4.978-14.947C46.566 10.48 36.187.1 23.283.1S.001 10.48.001 23.382c0 12.904 10.379 23.283 23.282 23.283a24.188 24.188 0 0 0 14.947-4.978l13.558 13.558a3.886 3.886 0 0 0 5.496 0 3.885 3.885 0 0 0 0-5.496zM23.283 39.779c-9.036 0-16.397-7.361-16.397-16.397 0-9.035 7.361-16.396 16.397-16.396 9.035 0 16.396 7.361 16.396 16.396 0 9.035-7.361 16.397-16.396 16.397z" fill="#ffffff" />
                    </g>
                  </svg>
                </label>
              </div>


              <nav className="user-icon-nav">
                <ul className="nav-links">
                  <li>
                    <a className="hover-effect">
                      <svg className="user-icon-logo" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1600 1600" width="1280" height="1280">
                        <path transform="translate(764,133)" d="m0 0h69l31 2 34 4 35 6 31 7 25 7 26 8 42 16 19 8 32 16 26 14 21 13 24 16 28 21 17 14 11 9 13 12 10 9 8 7 16 16 7 8 11 12 7 8 10 12 13 17 9 12 8 11 18 27 9 15 10 17 22 44 12 28 14 38 6 19 11 42 6 28 7 45 3 32 1 14v66l-3 40-9 54-6 29-8 30-9 29-13 35-10 24-7 14-9 19-10 18-9 16-12 19-16 24-12 16-10 13-14 17-10 11-7 8-15 16-19 19-8 7-12 11-11 9-17 14-19 14-12 9-25 16-20 12-14 8-27 14-31 14-20 8-34 12-23 7-44 11-38 7-34 5-32 3-15 1h-53l-48-4-49-8-37-8-34-10-30-10-33-13-36-17-28-14-28-17-19-12-18-13-16-12-10-8-13-11-8-7-14-13-8-7-28-28-7-8-11-12v-2h-2l-9-11-13-16-26-36-13-21-9-15-12-21-18-36-13-31-11-30-9-28-12-48-6-31-5-33-3-37-1-20v-45l3-41 5-35 6-33 7-30 8-29 12-35 8-21 12-28 20-40 14-24 11-17 8-13 12-17 9-12 8-10 11-14 8-10 12-13 9-10 7-8 22-22 8-7 10-9 11-9 16-13 12-9 13-10 21-14 24-15 26-15 32-16 19-9 36-14 30-10 37-10 38-8 39-6 29-3zm23 184-21 2-20 4-20 6-17 7-23 13-13 9-9 7-12 11-13 13-12 14-11 17-8 14-10 22-8 24-4 21-2 19v25l3 26 6 25 8 21 12 25 12 18 11 13 9 10 9 9 11 9 13 10 19 11 12 7 15 6 19 6 23 5 19 2h27l30-4 19-5 22-8 16-8 18-10 17-12 11-9 12-11 11-14 10-13 12-19 11-25 6-18 4-17 3-24v-35l-2-18-5-24-7-21-14-29-10-16-11-14-10-11-6-7-8-7-15-12-17-11-21-11-19-7-31-8-12-2-13-1zm-17 616-39 3-33 4-39 7-49 11-30 8-38 12-32 12-30 13-22 11-24 14-15 10-16 12-7 6-8 11-6 12-4 18 3 19 6 18 13 15 16 11 24 12 21 9 30 9 22 6 43 8 28 3 64 3h43l47-4 42-6 26-5 30-9 20-7 19-8 28-15 17-12 14-12 11-11 14-18 7-13 4-16 1-16-3-14-3-9-6-10-12-11-14-9-14-8-34-13-30-10-27-6-49-8z" fill="#ffffff" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
};

export default Layout;