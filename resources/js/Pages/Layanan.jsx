import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import ServicesSection from "@/Sections/Admin/Services/Index";

export default function Layanan({ services }) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Layanan
                </h2>
            }
        >
            <Head title="Layanan" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <ServicesSection services={services} />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
