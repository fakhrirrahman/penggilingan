// src/components/ContactSection.jsx
import React from "react";

export default function ContactSection() {
    return (
        <section id="kontak" className="py-16">
            <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Form */}
                <div className="bg-white p-6 rounded-2xl shadow-md">
                    <h2 className="text-2xl font-bold mb-4">Hubungi Kami</h2>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Nama
                            </label>
                            <input
                                type="text"
                                className="mt-1 w-full border-gray-300 rounded-md"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                WhatsApp
                            </label>
                            <input
                                type="tel"
                                className="mt-1 w-full border-gray-300 rounded-md"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Pesan
                            </label>
                            <textarea className="mt-1 w-full border-gray-300 rounded-md h-32" />
                        </div>
                        <a
                            href="https://api.whatsapp.com/send?phone=+62YOURNUMBER&text=Halo%203%20Putra!%20Saya%20ingin%20memesan"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block w-full text-center bg-green-500 text-white py-2 rounded-full font-semibold"
                        >
                            Kirim via WhatsApp
                        </a>
                    </form>
                </div>
                {/* Map */}
                <div className="rounded-2xl overflow-hidden shadow-md">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18..."
                        width="100%"
                        height="100%"
                        className="min-h-[400px] border-0"
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </section>
    );
}
