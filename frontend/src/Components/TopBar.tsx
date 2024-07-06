'use client';

import React, { Fragment } from 'react';
import { useState } from "react";

export default function TopBar(){

    const [showTopBar] = useState(!location.pathname.includes("product"));

    return (
        <Fragment>
        { showTopBar ? <div className="search-container">
                  <label className="search-label">
                    <input
                      type="text"
                      name="text"
                      className="input-text"
                      required
                      placeholder="Pesquisar..."
                    />
                    <svg
                      className="search-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.0"
                      width="100.000000pt"
                      height="100.000000pt"
                      viewBox="0 0 100.000000 100.000000"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <g
                        transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)"
                        fill="#000000"
                        stroke="none"
                      >
                        <path d="M408 941 c-50 -10 -128 -38 -128 -45 0 -2 22 -39 48 -82 l48 -78 7 -122 c8 -140 13 -150 99 -186 l54 -22 70 -105 c38 -57 84 -122 102 -144 29 -36 36 -39 83 -39 47 0 54 3 83 39 18 22 64 87 102 144 l70 105 54 22 c86 36 91 46 99 186 l7 122 48 78 c26 43 48 80 48 82 0 7 -119 50 -169 62 -50 12 -190 12 -240 0z m260 -62 c76 -15 156 -48 143 -58 -8 -7 -44 -64 -82 -126 -67 -107 -68 -108 -68 -174 0 -64 -2 -69 -22 -69 -13 0 -48 -14 -78 -31 -30 -17 -56 -31 -58 -31 -2 0 -28 14 -58 31 -30 17 -65 31 -78 31 -20 0 -22 5 -22 69 0 66 -1 67 -68 174 -38 62 -74 119 -82 126 -14 12 92 54 155 62 49 6 197 -5 220 -13z m-85 -262 c62 -27 65 -36 36 -99 -13 -27 -32 -56 -42 -65 -10 -8 -32 -25 -49 -36 -41 -27 -54 -18 -108 80 -23 41 -40 77 -38 81 10 16 164 33 201 25z"/>
                      </g>
                    </svg>
                  </label>
        </div> : null }
        </Fragment>
    );
}