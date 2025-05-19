// src/components/ServicesSection.jsx
import React from "react";
import { motion } from "framer-motion";

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// Data statis
const dummyServices = [
    {
        id: 1,
        nama: "Penggilingan Gabah",
        deskripsi: "Layanan penggilingan gabah menjadi beras berkualitas.",
        gambar: "/images/gambar1.jpg",
    },
    {
        id: 2,
        nama: "Penyimpanan Hasil Panen",
        deskripsi: "Tempat penyimpanan hasil panen yang aman dan bersih.",
        gambar: "/images/gambar1.jpg",
    },
    {
        id: 3,
        nama: "Distribusi dan Pengiriman",
        deskripsi:
            "Distribusi beras ke berbagai daerah dengan armada terpercaya.",
        gambar: "/images/gambar1.jpg",
    },
];

export default function ServicesSection() {
    return (
        <section id="layanan" className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">
                    Layanan Kami
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {dummyServices.map((svc, i) => (
                        <motion.div
                            key={svc.id}
                            className="bg-white rounded-2xl shadow-md p-6 text-center"
                            variants={cardVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <img
                                src={svc.gambar}
                                alt={svc.nama}
                                className="mx-auto mb-4 w-32 h-32 object-cover rounded-lg shadow"
                            />
                            <h3 className="text-xl font-semibold mb-2">
                                {svc.nama}
                            </h3>
                            <p className="text-gray-600 mb-4">
                                {svc.deskripsi}
                            </p>
                            <a
                                href="#"
                                className="text-green-600 hover:underline font-medium"
                            >
                                Selengkapnya
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
