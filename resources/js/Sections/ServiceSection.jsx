// src/components/ServicesSection.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ServicesSection() {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/layanan")
            .then((res) => {
                setServices(res.data.data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Gagal fetch data:", err);
                setError("Gagal memuat layanan.");
                setLoading(false);
            });
    }, []);

    if (loading) return <p className="text-center py-8">Loading layanan...</p>;
    if (error) return <p className="text-center text-red-500 py-8">{error}</p>;

    return (
        <section id="layanan" className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">
                    Layanan Kami
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {services.map((svc, i) => (
                        <motion.div
                            key={svc.id}
                            className="bg-white rounded-2xl shadow-md p-6 text-center"
                            variants={cardVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <img
                                src={`http://localhost:8000/${svc.gambar}`}
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
