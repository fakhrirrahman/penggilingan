import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import CreateLayanan from "@/Sections/Admin/Services/Create";

export default function ServiceCreate() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Tambah Layanan
                </h2>
            }
        >
            <Head title="Tambah Layanan" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
                        <CreateLayanan />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
