// src/components/HeroSection.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
    "https://images.unsplash.com/photo-1687425973283-d0d266b73325?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1713082860949-029bd31a0ca2?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1664478285526-a8b8273ab94d?q=80&w=1996&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1620238259493-79ab814a426c?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1625242661157-e9e5708ffe5e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1712428783639-2fad082c1fcd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

export default function HeroSection() {
    const [current, setCurrent] = useState(0);
    const length = images.length;

    // auto-slide
    useEffect(() => {
        const timer = setTimeout(
            () => setCurrent((i) => (i + 1) % length),
            5000
        );
        return () => clearTimeout(timer);
    }, [current]);

    return (
        <section className="flex flex-col lg:flex-row items-center lg:items-stretch h-screen px-6 lg:px-20">
            {/* Left Text & Info */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <motion.h1
                    className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    Penggilingan Bakso 3 Putra Lubuklinggau
                </motion.h1>
                <motion.p
                    className="text-lg text-gray-600 mb-8"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    Lebih dari 20 tahun menjaga kualitas adonan bakso premium
                </motion.p>

                {/* Info Boxes */}
                <div className="flex flex-col sm:flex-row gap-4">
                    {/* Box: Hari & Jam */}
                    <div className="bg-white shadow-md rounded-lg p-4 flex-1">
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">
                            Jam Operasional
                        </h4>
                        <p className="text-gray-500 text-sm">
                            Senin–Jumat: 08.00–17.00
                        </p>
                        <p className="text-gray-500 text-sm">
                            Sabtu–Minggu: 08.00–14.00
                        </p>
                        <p className="text-xs text-gray-400 mt-2">
                            Hari ini: {new Date().toLocaleString()}
                        </p>
                    </div>
                    {/* Box: Lokasi */}
                    <div className="bg-white shadow-md rounded-lg p-4 flex-1">
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">
                            Lokasi
                        </h4>
                        <p className="text-gray-500 text-sm">
                            Pasar Satelit Lubuklinggau
                            <br />
                            Dekat Gudang Ikan
                        </p>
                    </div>
                </div>
            </div>

            {/* Right Image Slider */}
            <div className="w-full lg:w-1/2 relative mt-8 lg:mt-0 h-80 lg:h-full rounded-xl overflow-hidden">
                <AnimatePresence>
                    <motion.div
                        key={current}
                        className="absolute inset-0 bg-center bg-cover"
                        style={{ backgroundImage: `url('${images[current]}')` }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                    />
                </AnimatePresence>
                {/* Slider Controls */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {images.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrent(idx)}
                            className={`w-3 h-3 rounded-full ${
                                idx === current ? "bg-green-500" : "bg-gray-300"
                            }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
