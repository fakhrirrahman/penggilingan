// src/components/EducationSection.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const items = [
    {
        title: "Apa itu Bakso?",
        content: `Bakso adalah bakso yang terbuat dari daging sapi giling halus atau urat, dicampur tepung kanji dan bumbu rahasia. Proses pembuatannya dimulai dari pemilihan daging segar, penggilingan, pencampuran bumbu, hingga pencetakan manual menggunakan tangan atau cetakan.`,
    },
    {
        title: "Apa itu Pempek?",
        content: `Pempek adalah makanan khas Palembang yang terbuat dari ikan tenggiri cincang, tepung sagu, dan bumbu. Varian populer termasuk kapal selam (dengan isian telur), lenjer, dan adaan. Disajikan dengan cuko (kuah cuka pedas) yang khas.`,
    },
    {
        title: "Mengapa Daging Premium?",
        content: `Daging premium menjamin tekstur bakso yang kenyal dan rasa yang gurih. Kualitas daging menentukan mutu akhir produk: semakin baik potongan dan kesegaran daging, semakin lezat bakso yang dihasilkan.`,
    },
];

export default function EducationSection() {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section id="tentang" className="py-16 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">
                    Edukasi: Apa Itu …
                </h2>
                <div className="space-y-4">
                    {items.map((item, idx) => {
                        const isOpen = openIndex === idx;
                        return (
                            <div
                                key={idx}
                                className="border rounded-xl overflow-hidden bg-white shadow-sm"
                            >
                                <button
                                    className="w-full text-left px-6 py-4 flex justify-between items-center"
                                    onClick={() =>
                                        setOpenIndex(isOpen ? null : idx)
                                    }
                                >
                                    <span className="font-medium text-gray-800">
                                        {item.title}
                                    </span>
                                    <span className="text-2xl text-green-500">
                                        {isOpen ? "−" : "+"}
                                    </span>
                                </button>
                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            key="content"
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{
                                                height: "auto",
                                                opacity: 1,
                                            }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="px-6 pb-4 text-gray-600"
                                        >
                                            {item.content}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
