"use client";
import { useEffect, useState } from "react";

const statsData = [
    {
        label: "Tahun Pengalaman",
        value: 20,
        suffix: "+",
        description: "Pengalaman",
    },
    {
        label: "Pelanggan Puas",
        value: 10000,
        suffix: "+",
        description: "Happy Customers",
    },
    {
        label: "Bahan Premium",
        value: 100,
        suffix: "%",
        description: "Premium Ingredients",
    },
    {
        label: "Pelayanan Terpercaya",
        value: 100,
        suffix: "%",
        description: "Trusted Service",
    },
];

const StatBox = ({ value, suffix, label, description }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const end = value;
        const duration = 1000;
        const stepTime = Math.abs(Math.floor(duration / end));
        const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start >= end) clearInterval(timer);
        }, stepTime);
        return () => clearInterval(timer);
    }, [value]);

    return (
        <div className="text-center shadow-md rounded-xl p-6 bg-white">
            <p className="text-4xl font-bold text-green-600">
                {count}
                {suffix}
            </p>
            <p className="font-medium text-gray-600 mt-2">{label}</p>
            <p className="text-sm text-gray-500">{description}</p>
        </div>
    );
};

const StatsSection = () => {
    return (
        <section className="py-16 bg-gray-100">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6">
                {statsData.map((stat, index) => (
                    <StatBox key={index} {...stat} />
                ))}
            </div>
        </section>
    );
};

export default StatsSection;
