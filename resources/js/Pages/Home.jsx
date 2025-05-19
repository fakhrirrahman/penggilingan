import Navbar from "@/Components/Navbar";
import HeroSection from "@/Sections/HeroSection";
import Footer from "@/Components/Footer";
import { Head } from "@inertiajs/react";
import StatsSection from "@/Sections/StateSection";

export default function Home() {
    return (
        <>
            <Head title="Home" />
            <Navbar />
            <HeroSection />
            <StatsSection />
            <Footer />
        </>
    );
}
