import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import AddButton from "@/Components/AddButton";

export default function ServicesTable({ services: initialServices }) {
    const [services, setServices] = useState(initialServices || []);

    const deletePost = async (id) => {
        if (confirm("Yakin ingin menghapus layanan ini?")) {
            Inertia.delete(`/service/${id}`);
            // Jika mau update state supaya hilang tanpa reload, bisa lakukan filter:
            setServices(services.filter((svc) => svc.id !== id));
        }
    };

    return (
        <section id="layanan" className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-4">
                    Layanan Kami
                </h2>

                <div className="text-right mb-6">
                    <AddButton href={route("service.create")}>
                        + Tambah Layanan
                    </AddButton>
                </div>

                {services.length > 0 ? (
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white rounded-lg shadow-md">
                            <thead>
                                <tr className="bg-green-100 text-green-700">
                                    <th className="py-3 px-4 text-left">
                                        Gambar
                                    </th>
                                    <th className="py-3 px-4 text-left">
                                        Judul
                                    </th>
                                    <th className="py-3 px-4 text-left">
                                        Deskripsi
                                    </th>
                                    <th className="py-3 px-4 text-left">
                                        Aksi
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {services.map((svc) => {
                                    const imageUrl = svc.image
                                        ? svc.image.startsWith("http")
                                            ? svc.image
                                            : svc.image.startsWith(
                                                  "images/services/"
                                              )
                                            ? `/${svc.image}`
                                            : `/images/services/${svc.image}`
                                        : "/images/default.jpg";

                                    return (
                                        <tr
                                            key={svc.id}
                                            className="border-b hover:bg-green-50 transition"
                                        >
                                            <td className="py-3 px-4">
                                                <img
                                                    src={imageUrl}
                                                    alt={svc.title}
                                                    className="w-16 h-16 object-cover rounded"
                                                />
                                            </td>
                                            <td className="py-3 px-4 font-semibold">
                                                {svc.title}
                                            </td>
                                            <td className="py-3 px-4 text-gray-600 max-w-xs truncate">
                                                {svc.description}
                                            </td>
                                            <td className="py-3 px-4 space-x-4">
                                                <a
                                                    // href={route(
                                                    //     "service.edit",
                                                    //     svc.id
                                                    // )}
                                                    className="text-blue-600 hover:underline font-medium"
                                                >
                                                    Edit
                                                </a>
                                                <button
                                                    onClick={() =>
                                                        deletePost(svc.id)
                                                    }
                                                    className="btn btn-sm btn-danger"
                                                >
                                                    DELETE
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <p className="text-center text-gray-500">
                        Tidak ada layanan.
                    </p>
                )}
            </div>
        </section>
    );
}
