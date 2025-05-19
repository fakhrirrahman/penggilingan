// src/components/VisionSection.jsx
import React from "react";
import { motion } from "framer-motion";

const vision = {
    title: "Visi & Misi",
    visionText:
        "Menjadi penggilingan daging bakso terbaik dan terpercaya di Sumatera Selatan.",
    missions: [
        "Mengutamakan kualitas bahan.",
        "Inovasi bumbu dan varian produk.",
        "Pelayanan online cepat dan aman.",
        "Memberdayakan tenaga kerja lokal.",
    ],
};

const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({ opacity: 1, x: 0, transition: { delay: i * 0.2 } }),
};

export default function VisionSection() {
    return (
        <section className="py-16">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <motion.h2
                    className="text-3xl font-bold mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {vision.title}
                </motion.h2>
                <motion.p
                    className="text-lg text-gray-700 mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    {vision.visionText}
                </motion.p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                    {vision.missions.map((m, idx) => (
                        <motion.div
                            key={idx}
                            custom={idx}
                            variants={itemVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="flex items-start space-x-3"
                        >
                            <div className="h-8 w-8 bg-green-500 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold">
                                {idx + 1}
                            </div>
                            <p className="text-gray-600">{m}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
