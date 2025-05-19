import React, { useState } from "react";
import { Head, router } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function CreateLayanan({ auth }) {
    const [form, setForm] = useState({
        title: "",
        description: "",
        image: null,
    });

    const [preview, setPreview] = useState(null);

    // Handle input teks
    function handleChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }

    // Handle upload file
    function handleFileChange(e) {
        const file = e.target.files[0];
        setForm({
            ...form,
            image: file,
        });

        if (file) {
            setPreview(URL.createObjectURL(file));
        }
    }

    // Handle submit form
    function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData();
        formData.append("title", form.title);
        formData.append("description", form.description);
        if (form.image) {
            formData.append("image", form.image);
        }

        router.post("/layanan", formData);
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Tambah Layanan
                </h2>
            }
        >
            <Head title="Tambah Layanan" />

            <div className="py-12">
                <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow">
                    <h1 className="text-2xl font-bold mb-6">
                        Tambah Layanan Baru
                    </h1>

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-4"
                        encType="multipart/form-data"
                    >
                        <div>
                            <label className="block font-medium mb-1">
                                Judul
                            </label>
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
                            <label className="block font-medium mb-1">
                                Deskripsi
                            </label>
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
                                Upload Gambar
                            </label>
                            <input
                                type="file"
                                name="image"
                                accept="image/*"
                                onChange={handleFileChange}
                                className="w-full"
                            />
                            {preview && (
                                <img
                                    src={preview}
                                    alt="Preview"
                                    className="mt-3 w-32 h-32 object-cover rounded border"
                                />
                            )}
                        </div>

                        <button
                            type="submit"
                            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
                        >
                            Simpan
                        </button>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
