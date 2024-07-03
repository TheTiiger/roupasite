import React, { useEffect, useState } from 'react';
import "../Components/CSS/Page.css";

async function Page() {

  //const products = await (await fetch("http://localhost:5000/products")).json();

  return (
<div className="typing-indicator">
    <div className="typing-circle"></div>
    <div className="typing-circle"></div>
    <div className="typing-circle"></div>
    <div className="typing-shadow"></div>
    <div className="typing-shadow"></div>
    <div className="typing-shadow"></div>
    <a href="#" className="btn-shine">Versão Beta</a>
</div>
  );
}

export default Page;