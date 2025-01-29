// app/interview/page.tsx
"use client";
import React, { useState } from "react";
import { Tracingbeam } from '@/components/Interview';
import { cn } from "@/lib/utils";
export default function Home ()
{
    const [ isDark, setIsDark ] = useState( false );

    return (
        <div className={ cn(
            isDark ? "bg-black text-white" : "bg-white text-gray-800",
            "w-screen max-w-full px-4 md:px-8"
        ) }>

            <main className="space-y-16">
                <Tracingbeam isDark={ isDark } />
            </main>
            <button onClick={ () => setIsDark( !isDark ) } className="fixed bottom-4 right-4 p-2 bg-gray-200 dark:bg-gray-700 rounded-full text-black dark:text-white">
                { isDark ? "☀️" : "🌙" }
            </button>
        </div>
    );
}