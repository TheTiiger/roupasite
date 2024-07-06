import "../Components/CSS/Homepage.css";
import TopBar from "../Components/TopBar";

const Layout: React.FC<any> = ({children}) => {
  return (
    <html>
      <body>
        <div className="container">
          <header className="site-header">
            <div className="container-slide">
              <div className="slide-novidades">⛱ Novidades em Breve ⛱</div>
            </div>
            <div className="logo">
              <div className="menu-logo">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1600 1600" width="1280" height="1280">
                  <path transform="translate(788,64)" d="m0 0h28l27 1 38 3 32 4 41 7 34 8 30 9 38 13 30 12 18 8 30 14 22 12 17 10 20 12 28 19 19 14 28 22 28 24 10 10 2 1v2l4 2 16 16 7 8 10 10 7 8 22 26 14 19 13 18 12 17 15 24 9 15 10 18 14 27 9 19 14 34 13 35 10 33 9 35 8 41 5 32 4 40 1 15v71l-3 44-5 39-8 41-7 31-10 34-10 30-12 30-16 36-17 34-14 24-11 18-12 18-15 22-13 17-11 14-12 14-7 8-9 10-7 8-8 9h-2l-2 4-11 11-8 7-8 8-11 9-11 10-13 10-11 9-16 12-18 13-22 14-25 15-25 14-36 18-30 13-47 17-36 11-33 8-36 7-41 6-33 3-35 2h-46l-43-3-36-4-35-6-43-10-28-8-25-8-20-7-30-12-26-12-25-12-24-13-42-26-17-12-19-14-17-13-13-11-14-12-7-7-8-7-12-12-7-6-7-8-13-13-7-8-15-16-18-22-14-18-12-17-12-18-15-24-11-19-12-22-11-23-9-20-10-24-15-42-8-27-12-48-7-39-5-36-3-37-1-22v-31l2-40 4-35 5-34 8-40 8-32 12-39 11-31 10-24 9-20 8-16 10-21 14-24 11-18 10-16 16-23 15-20 11-14 8-10 12-14 11-12 7-8 12-13 14-14 8-7 16-15 11-9 12-10 12-9 21-16 13-9 15-10 19-12 17-10 21-12 28-14 28-13 36-14 36-12 41-11 38-8 36-6 28-3 32-2zm-173 511-137 1-16 2-5 5-4 5-4 11-1 9 2 12 5 8 8 7 9 3 9 1h626l21-1 9-3 5-5 4-8 2-8v-17l-3-10-4-7-4-2-6-1-27-1-100-1zm11 192-141 1-18 1-8 3-5 6-4 9-1 4v16l3 9 8 9 8 4 15 2h622l23-1 10-3 6-7 4-12v-17l-3-12-3-7-6-3-16-1-70-1zm273 191-415 2-17 1-7 3-7 8-4 12v15l4 11 7 7 9 4 7 1 18 1h589l44-1 9-3 8-7 4-9 1-5v-11l-4-16-5-8-3-2-8-1-37-1-119-1z" fill="#C01909" />
                </svg>
              </div>
              <svg className="rotation-logo" xmlns="http://www.w3.org/2000/svg" version="1.0" width="600.000000pt" height="104.000000pt" viewBox="0 0 600.000000 104.000000" preserveAspectRatio="xMidYMid meet">
                <g transform="translate(0.000000,104.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                  <path d="M25 1016 c-21 -21 -25 -34 -25 -85 l0 -61 278 -2 277 -3 0 -50 0 -50 -277 -3 -278 -2 0 -225 0 -225 85 0 85 0 0 140 0 141 126 -3 125 -3 59 -135 59 -135 90 -3 c50 -1 91 -1 91 2 0 2 -28 66 -61 142 -36 80 -57 140 -51 142 30 10 77 51 93 82 29 54 27 221 -4 274 -44 78 -55 81 -369 84 l-278 3 -25 -25z" />
                  <path d="M976 1026 c-47 -18 -92 -60 -101 -95 -3 -14 -8 -34 -11 -43 -5 -16 14 -18 273 -20 l278 -3 0 -190 0 -190 -190 0 -190 0 -3 138 -3 137 -84 0 -85 0 0 -142 c0 -165 10 -210 54 -254 49 -49 91 -56 330 -52 247 4 274 11 314 88 21 42 22 55 22 280 0 225 -1 237 -23 274 -42 76 -62 81 -317 83 -174 2 -234 0 -264 -11z" />
                  <path d="M1732 1024 c-19 -13 -22 -24 -22 -85 l0 -69 355 0 355 0 0 69 c0 106 16 101 -355 101 -265 0 -314 -2 -333 -16z" />
                  <path d="M2737 1029 c-17 -10 -77 -127 -77 -150 0 -5 33 -9 73 -9 l73 0 39 -92 c22 -51 42 -96 43 -100 2 -4 -15 -8 -37 -8 l-41 0 0 -80 0 -80 76 0 75 0 46 -100 46 -100 89 0 c48 0 88 3 87 8 0 4 -71 167 -158 362 l-157 355 -80 2 c-44 2 -87 -2 -97 -8z" />
                  <path d="M3230 1018 c-16 -17 -20 -35 -20 -85 l0 -63 360 0 360 0 0 59 c0 44 -5 65 -21 85 l-20 26 -319 0 c-316 0 -319 0 -340 -22z" />
                  <path d="M4089 1021 l-24 -19 -3 -346 -3 -346 86 0 85 0 0 365 0 365 -59 0 c-43 0 -65 -5 -82 -19z" />
                  <path d="M4517 1026 c-61 -23 -95 -61 -111 -128 l-6 -28 277 -2 278 -3 0 -190 0 -190 -190 0 -190 0 -3 138 -3 137 -84 0 -85 0 0 -142 c0 -165 10 -210 54 -254 49 -49 91 -56 330 -52 247 4 274 11 314 88 21 42 22 55 22 280 0 225 -1 237 -23 274 -42 76 -62 81 -317 83 -172 2 -234 0 -263 -11z" />
                  <path d="M5302 1020 c-18 -17 -22 -32 -22 -85 l0 -65 127 0 128 0 147 -147 148 -148 0 -132 0 -133 85 0 85 0 0 340 0 341 -25 24 c-20 21 -34 25 -85 25 l-60 0 0 -112 0 -113 -113 113 -112 112 -141 0 c-127 0 -142 -2 -162 -20z" />
                  <path d="M1980 535 l0 -225 80 0 80 0 0 225 0 225 -80 0 -80 0 0 -225z" />
                  <path d="M2507 541 c-53 -120 -97 -222 -97 -225 0 -3 40 -6 88 -6 l89 0 96 216 c54 119 97 220 97 225 0 5 -40 9 -88 9 l-88 0 -97 -219z" />
                  <path d="M3480 535 l0 -225 85 0 85 0 0 225 0 225 -85 0 -85 0 0 -225z" />
                  <path d="M5280 535 l0 -225 80 0 80 0 0 225 0 225 -80 0 -80 0 0 -225z" />
                  <path d="M3484 106 c-9 -38 2 -46 62 -46 47 0 55 -3 52 -17 -4 -22 -72 -30 -94 -12 -17 14 -29 6 -21 -16 5 -11 21 -15 65 -15 67 0 88 15 78 55 -6 23 -11 25 -61 25 -44 0 -55 3 -55 16 0 14 9 16 55 12 41 -4 55 -1 55 9 0 9 -17 13 -65 13 -60 0 -65 -2 -71 -24z" />
                  <path d="M3710 65 c0 -51 3 -65 15 -65 12 0 15 13 15 55 l0 55 45 0 45 0 0 -55 c0 -43 3 -55 15 -55 13 0 15 11 13 62 l-3 63 -72 3 -73 3 0 -66z" />
                  <path d="M3950 65 l0 -65 65 0 c53 0 65 3 65 16 0 13 -9 15 -50 12 -42 -2 -50 0 -50 15 0 12 8 17 30 17 17 0 30 5 30 10 0 6 -13 10 -30 10 -20 0 -30 5 -30 15 0 11 12 15 50 15 28 0 50 5 50 10 0 6 -28 10 -65 10 l-65 0 0 -65z" />
                  <path d="M4172 69 c-35 -62 -36 -85 -4 -56 24 22 98 23 106 2 5 -13 36 -22 36 -11 0 3 -16 32 -35 65 -22 37 -43 61 -53 61 -10 0 -30 -24 -50 -61z m64 14 c19 -26 17 -33 -11 -33 -26 0 -29 7 -19 34 8 20 14 20 30 -1z" />
                  <path d="M4370 65 c0 -51 3 -65 15 -65 9 0 15 9 15 25 0 14 4 25 8 25 4 0 23 -11 42 -25 19 -14 45 -25 59 -25 22 0 20 4 -22 33 -26 17 -47 35 -47 39 0 3 16 16 35 28 40 25 43 30 16 30 -11 0 -33 -11 -49 -25 -37 -31 -42 -31 -42 0 0 16 -6 25 -15 25 -12 0 -15 -14 -15 -65z" />
                  <path d="M4590 65 l0 -65 70 0 c81 0 95 18 18 22 -39 2 -53 7 -53 18 0 10 12 16 33 18 41 4 42 20 0 24 -17 2 -33 9 -36 16 -3 8 12 12 52 12 31 0 56 5 56 10 0 6 -30 10 -70 10 l-70 0 0 -65z" />
                  <path d="M4802 69 c2 -39 8 -64 16 -67 7 -2 12 6 12 22 0 34 28 35 60 1 13 -14 35 -25 48 -25 l25 0 -28 22 c-28 21 -28 22 -6 30 18 6 22 14 19 40 l-3 33 -73 3 -73 3 3 -62z m116 24 c-2 -14 -13 -18 -43 -18 -30 0 -41 4 -43 18 -3 14 4 17 43 17 39 0 46 -3 43 -17z" />
                  <path d="M5150 95 l0 -35 55 0 c49 0 55 -2 55 -20 0 -18 -6 -21 -45 -19 -25 2 -45 6 -45 11 0 4 -7 8 -16 8 -9 0 -14 -7 -12 -18 3 -14 16 -18 70 -20 65 -3 68 -2 74 23 11 45 0 55 -61 55 -44 0 -55 3 -55 16 0 14 9 16 55 12 41 -4 55 -1 55 9 0 9 -18 13 -65 13 l-65 0 0 -35z" />
                  <path d="M5370 65 c0 -51 3 -65 15 -65 10 0 15 10 15 31 0 30 1 30 48 27 43 -3 47 -5 50 -30 2 -16 9 -28 18 -28 11 0 14 15 14 65 0 50 -3 65 -14 65 -8 0 -16 -10 -18 -22 -3 -20 -10 -23 -50 -26 -46 -3 -48 -2 -48 22 0 16 -6 26 -15 26 -12 0 -15 -14 -15 -65z" />
                  <path d="M5612 68 l3 -63 75 0 75 0 3 63 3 62 -81 0 -81 0 3 -62z m128 0 l0 -43 -50 3 -50 4 0 39 0 39 50 0 50 0 0 -42z" />
                  <path d="M5850 65 c0 -51 3 -65 15 -65 9 0 15 9 15 25 0 23 3 25 49 25 54 0 74 15 69 52 -3 21 -8 23 -75 26 l-73 3 0 -66z m118 28 c-3 -14 -13 -18 -43 -18 -30 0 -41 4 -43 18 -3 14 4 17 43 17 39 0 46 -3 43 -17z" />
                </g>
              </svg>
            </div>
            <div className="top-info">
              {/*<TopBar />*/}
              <svg className="user-icon-logo" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1600 1600" width="1280" height="1280">
                <path className="path-user" transform="translate(778,160)" d="m0 0h42l34 2 40 4 35 6 30 7 26 7 36 12 21 8 37 17 22 11 23 13 19 12 18 12 17 12 16 12 13 11 11 9 12 11 13 12 29 29 7 8 11 13 22 28 14 19 11 17 14 23 8 14 17 32 9 20 12 29 10 28 12 41 6 26 6 32 4 29 3 33v74l-3 41-5 35-9 42-7 27-14 43-13 32-12 26-12 24-14 24-12 20-14 20-12 17-12 16-11 13-10 11-7 8-12 13-18 18-8 7-10 9-11 9-9 8-9 7-13 10-19 13-15 10-21 13-36 20-34 16-38 15-34 11-29 8-43 9-31 5-42 4-18 1h-52l-39-3-39-5-42-9-31-8-35-12-30-11-25-11-21-10-22-12-22-13-22-14-11-8-16-12-14-11-17-14-14-13-8-7-30-30-7-8-11-12-9-11-11-14-12-16-12-17-13-20-12-20-12-22-9-17-9-20-10-24-11-30-9-29-11-44-7-40-4-31-2-26-1-24v-15l2-44 4-37 5-33 10-44 8-28 10-29 13-32 9-20 8-17 12-22 12-21 14-22 13-19 13-17 8-11 13-15 18-20 15-16 16-16 8-7 11-10 8-7 17-14 18-13 14-10 15-10 14-9 27-16 29-15 31-14 24-9 29-10 28-8 30-7 33-6 33-4 25-2zm5 266-26 3-25 6-15 6-16 8-18 12-13 11-13 13-11 16-10 18-9 21-6 18-5 24-2 17-1 16v26l3 22 9 29 1 9-12 25-1 4 1 16 6 23 6 12 9 11 10 10 6 11 6 18 11 21 9 14 9 12 9 10 6 7 4 11 1 27-1 25-3 14-6 12-7 9-6 7-13 8-21 9-56 18-20 6-35 13-16 8-17 10-13 10-11 9-10 10v2l-3 1-13 17-10 17-15 30-2 6 1 7 8 10 8 7 11 10 9 7 17 13 24 16 19 12 26 14 36 18 28 11 28 10 19 6 29 7 37 6 27 3 43 2 32-1 24-2 35-5 38-8 22-6 29-10 33-13 20-9 24-12 27-16 17-11 19-13 13-10 14-11 16-13 7-8 2-4v-9l-9-21-8-16-10-16-10-13-11-12-11-10-15-11-23-13-24-10-34-12-40-12-29-10-16-8-11-7-8-7-10-13-5-9-2-16v-56l4-6 10-10 11-14 9-12 7-13 8-16 6-20 6-9 8-8 6-5 7-10 7-24 1-11 2-6-1-8-6-12-3-4-4-13 2-8 6-15 4-18 2-17v-36l-3-24-6-26-7-20-10-19-12-16-10-9-13-8-11-4-14-4-9-5-8-8-7-8-7-7-14-9-17-7-15-4-6-1z" fill="#BE180C" />
              </svg>
            </div>
          </header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
};

export default Layout;