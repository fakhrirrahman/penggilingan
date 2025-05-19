import Navbar from "@/Components/Navbar";
import HeroSection from "@/Sections/HeroSection";
import Footer from "@/Components/Footer";
import { Head } from "@inertiajs/react";
import StatsSection from "@/Sections/StateSection";
import ServicesSection from "@/Sections/ServiceSection";
import EducationSection from "@/Sections/EducationSection";
import VisionSection from "@/Sections/VisionSection";
import TestimonialsSection from "@/Sections/TestimonialsSection";
import ContactSection from "@/Sections/ContacSection";

export default function Home() {
    return (
        <>
            <Head title="Home" />
            <Navbar />
            <HeroSection />
            <StatsSection />
            <ServicesSection />
            <EducationSection />
            <VisionSection />
            <TestimonialsSection />
            <ContactSection />
            <Footer />
        </>
    );
}
