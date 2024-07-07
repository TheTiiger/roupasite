import React from 'react';
import Link from 'next/link';

const RegisterPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
    <form className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
      <div className="mb-4">
        <input type="text" placeholder="Nome" aria-label="Nome" required className="w-full p-3 border border-gray-300 rounded-lg"/>
      </div>
      <div className="mb-4">
        <input type="email" placeholder="Email" aria-label="Email" required className="w-full p-3 border border-gray-300 rounded-lg"/>
      </div>
      <div className="mb-4">
        <input type="password" placeholder="Password" aria-label="Password" required className="w-full p-3 border border-gray-300 rounded-lg"/>
      </div>
      <div className="mb-4">
        <button type="submit" className="w-full bg-red-600 text-white p-3 rounded-lg hover:bg-red-600">
          Registrar
        </button>
      </div>
      <div className="text-center">
        <Link href="/">
          <button className="w-full bg-gray-500 text-white p-3 rounded-lg hover:bg-gray-600 block">
            Cancelar
          </button>
        </Link>
      </div>
    </form>
  </div>
);
};

export default RegisterPage;
