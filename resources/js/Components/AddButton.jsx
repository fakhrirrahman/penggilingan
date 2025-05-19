import { Link } from "@inertiajs/react";

export default function AddButton({ href, children }) {
    return (
        <div className="mb-6 text-right">
            <Link
                href={href}
                className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
            >
                {children}
            </Link>
        </div>
    );
}
