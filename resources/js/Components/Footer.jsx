import React from "react";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-green-700 text-white py-8">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Quick Links */}
                <div>
                    <h4 className="font-semibold mb-4">Quick Links</h4>
                    <ul className="space-y-2">
                        {[
                            "Beranda",
                            "Tentang Kami",
                            "Layanan",
                            "Galeri",
                            "Visi & Misi",
                            "Kontak",
                        ].map((link, i) => (
                            <li key={i}>
                                <a
                                    href={`#${link
                                        .toLowerCase()
                                        .replace(/ & /g, "")
                                        .replace(/ /g, "")}`}
                                    className="hover:underline"
                                >
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Social Media */}
                <div>
                    <h4 className="font-semibold mb-4">Media Sosial</h4>
                    <div className="flex space-x-4 text-xl">
                        <a href="#">
                            <FaFacebook />
                        </a>
                        <a href="#">
                            <FaInstagram />
                        </a>
                        <a href="#">
                            <FaTiktok />
                        </a>
                    </div>
                </div>
                {/* Contact Info */}
                <div>
                    <h4 className="font-semibold mb-4">Kontak & Jam</h4>
                    <p>Pasar Satelit Lubuklinggau</p>
                    <p>Senin-Minggu 08.00-17.00 WIB</p>
                    <p>WhatsApp: 08xxxxxxxxxx</p>
                </div>
            </div>
            <div className="text-center mt-6">
                <p>
                    &copy; {new Date().getFullYear()} Penggilingan Bakso 3
                    Putra. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
