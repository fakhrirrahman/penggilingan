import { Head, router } from "@inertiajs/react";
import { useState } from "react";

export default function CreateLayanan() {
    const [form, setForm] = useState({
        title: "",
        description: "",
        image: null, // harus null (bukan string)
    });

    function handleChange(e) {
        const { name, value, type, files } = e.target;
        setForm({
            ...form,
            [name]: type === "file" ? files[0] : value,
        });
    }

    function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData();
        formData.append("title", form.title);
        formData.append("description", form.description);
        formData.append("image", form.image);

        router.post("/service/store", formData);
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
                    <label className="block font-medium mb-1">Gambar</label>
                    <input
                        type="file"
                        name="image"
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2"
                        required
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
