import React from "react";
import { motion } from "framer-motion";

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ServicesSection({ services }) {
    const hasServices = Array.isArray(services) && services.length > 0;

    console.log("SERVICES:", services); // DEBUG CEK DI SINI

    return (
        <section id="layanan" className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">
                    Layanan Kami
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {!hasServices ? (
                        <p className="text-center col-span-3">
                            Tidak ada layanan.
                        </p>
                    ) : (
                        services.map((svc) => (
                            <motion.div
                                key={svc.id}
                                className="bg-white rounded-2xl shadow-md p-6 text-center"
                                variants={cardVariants}
                                initial="hidden"
                                animate="visible"
                            >
                                <img
                                    src={
                                        svc.image
                                            ? svc.image.startsWith("http")
                                                ? svc.image
                                                : svc.image.startsWith(
                                                      "images/"
                                                  )
                                                ? `/${svc.image}` // sudah lengkap path, tambahkan slash
                                                : `/images/${svc.image}` // hanya nama file, tambahkan folder
                                            : "/images/default.jpg"
                                    }
                                    alt={svc.title}
                                    className="mx-auto mb-4 w-32 h-32 object-cover rounded-lg shadow"
                                />
                                <h3 className="text-xl font-semibold mb-2">
                                    {svc.title}
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    {svc.description}
                                </p>
                                <a
                                    href="#"
                                    className="text-green-600 hover:underline font-medium"
                                >
                                    Selengkapnya
                                </a>
                            </motion.div>
                        ))
                    )}
                </div>
            </div>
        </section>
    );
}
