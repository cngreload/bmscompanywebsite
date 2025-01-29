import React from 'react';
import Header from "../components/Header";
import Hero from "../components/Hero";
import VisionSection from "@/components/Vision";
import ProjectCardAnimation from "../components/ProjectCardAnimation";
import CliniciansIntro from "../components/CliniciansIntro";
import CliniciansBenefits from "../components/CliniciansBenefits";
import EnterDigital from "@/components/EnterDigital";
import ICTSIntro from "../components/ICTSIntro";
import CNGIntro from "../components/CNGIntro";
import Story from "@/components/Story";
import { StickyScrollReveal } from "@/components/AboutUs";
import Footer from "../components/Footer";
import { BentoGridMedia } from '@/components/Media';

export default function Home ()
{

  return (
    <div className="bg-white text-gray-800 w-screen max-w-full px-4 md:px-8">
      <Header />
      <main className="space-y-16">
        <Hero />
        <VisionSection />
        <ProjectCardAnimation />
        <CliniciansIntro />
        <CliniciansBenefits />
        <EnterDigital />
        <ICTSIntro />
        <CNGIntro />
        <Story />
        <BentoGridMedia />
        <StickyScrollReveal />
      </main>
      <Footer />
    </div>
  );
}
