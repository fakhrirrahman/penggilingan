import { Head, router } from "@inertiajs/react";
import { useState, useEffect } from "react";

export default function EditLayanan({ layanan }) {
    const [form, setForm] = useState({
        title: "",
        description: "",
        image: "",
    });

    useEffect(() => {
        if (layanan) {
            setForm({
                title: layanan.title,
                description: layanan.description,
                image: layanan.image,
            });
        }
    }, [layanan]);

    function handleChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        // Kirim update ke backend via Inertia put route (contoh /layanan/{id})
        router.put(`/layanan/${layanan.id}`, form);
    }

    return (
        <div className="max-w-3xl mx-auto p-6">
            <Head title="Edit Layanan" />
            <h1 className="text-2xl font-semibold mb-6">Edit Layanan</h1>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block font-medium mb-1">Judul</label>
                    <input
                        type="text"
                        name="title"
                        value={form.title}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2"
                        required
                    />
                </div>

                <div>
                    <label className="block font-medium mb-1">Deskripsi</label>
                    <textarea
                        name="description"
                        value={form.description}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2"
                        required
                    ></textarea>
                </div>

                <div>
                    <label className="block font-medium mb-1">
                        Nama File Gambar (contoh: gambar1.jpg)
                    </label>
                    <input
                        type="text"
                        name="image"
                        value={form.image}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2"
                    />
                </div>

                <button
                    type="submit"
                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                >
                    Update
                </button>
            </form>
        </div>
    );
}
