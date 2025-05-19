import { Head, router } from "@inertiajs/react";
import { useState } from "react";

export default function CreateLayanan() {
    const [form, setForm] = useState({
        title: "",
        description: "",
        image: "",
    });

    // Handle input change
    function handleChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }

    // Handle form submit
    function handleSubmit(e) {
        e.preventDefault();
        // Kirim data ke backend via Inertia post route (contoh /layanan)
        router.post("/layanan", form);
    }

    return (
        <div className="max-w-3xl mx-auto p-6">
            <Head title="Tambah Layanan" />
            <h1 className="text-2xl font-semibold mb-6">Tambah Layanan Baru</h1>

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
                        placeholder="images/gambar1.jpg"
                        className="w-full border rounded px-3 py-2"
                    />
                </div>

                <button
                    type="submit"
                    className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
                >
                    Simpan
                </button>
            </form>
        </div>
    );
}
