// src/components/TestimonialsSection.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const testimonials = [
    {
        name: "Siti Aminah",
        role: "Ibu Rumah Tangga",
        image: "images/gambar1.jpg",
        quote: "Baksonya kenyal dan gurih! Pelayanan cepat, recommended banget.",
    },
    {
        name: "Budi Santoso",
        role: "Chef",
        image: "images/gambar1.jpg",
        quote: "Daging gilingnya fresh, hasil masakan jadi lebih enak.",
    },
    {
        name: "Rina Marlina",
        role: "Pengusaha",
        image: "images/gambar1.jpg",
        quote: "Variasi bumbu baksonya lengkap, pelanggan saya suka semua.",
    },
];

export default function TestimonialsSection() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-8">Testimoni Pelanggan</h2>
                <Swiper
                    modules={[Pagination, Autoplay]}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000 }}
                    spaceBetween={30}
                    slidesPerView={1}
                >
                    {testimonials.map((t, idx) => (
                        <SwiperSlide key={idx}>
                            <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center">
                                <img
                                    src={t.image}
                                    alt={t.name}
                                    className="w-20 h-20 rounded-full mb-4"
                                />
                                <p className="italic text-gray-700 mb-4">
                                    "{t.quote}"
                                </p>
                                <h4 className="font-semibold text-gray-900">
                                    {t.name}
                                </h4>
                                <p className="text-sm text-gray-500">
                                    {t.role}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
