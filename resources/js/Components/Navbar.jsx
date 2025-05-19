import React from "react";

const Navbar = () => {
    return (
        <nav className="w-full flex items-center justify-between px-8 py-4 bg-white shadow-sm sticky top-0 z-50">
            <div className="text-2xl font-extrabold text-black tracking-wide">
                Penggilingan 3 Putra
            </div>
            <ul className="hidden md:flex space-x-8 text-sm font-medium text-gray-700">
                <li className="hover:text-blue-600 cursor-pointer">Beranda</li>
                <li className="hover:text-blue-600 cursor-pointer">
                    Tentang Kami
                </li>
                <li className="hover:text-blue-600 cursor-pointer">Layanan</li>
                <li className="hover:text-blue-600 cursor-pointer">Galeri</li>
                <li className="hover:text-blue-600 cursor-pointer">Kontak</li>
            </ul>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-700">
                Pesan Sekarang
            </button>
        </nav>
    );
};

export default Navbar;
