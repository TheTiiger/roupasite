'use client';

import React, { useEffect, useState } from "react";


function Page() {

  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("http://localhost:5000/api/home")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setMessage(data.message);
      });
  }, []);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}

export default Page;