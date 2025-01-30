// app/interview/page.tsx
"use client";
import React, { useState } from "react";
import { Tracingbeam } from '@/components/Interview';
import { cn } from "@/lib/utils";
import Headerinterview from "@/components/HeaderInreview";
import Footer from "@/components/Footer";
export default function Home ()
{
    const [ isDark ] = useState( false );

    return (
        <div className={ cn(
            isDark ? "bg-black text-white" : "bg-white text-gray-800",
            "w-screen max-w-full px-4 md:px-8"
        ) }>
            <Headerinterview />
            <main className="space-y-16 h-full">
                <Tracingbeam />
            </main>
            <Footer />
        </div>
    );
}