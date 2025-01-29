'use client';

import React from "react";

const CNGIntro: React.FC = () =>
{
    return (
        <section className="flex flex-col md:flex-row items-center justify-center w-full px-4 py-12 md:py-16 lg:py-20 gap-8 overflow-x-hidden">
            {/* Text Section */ }
            <div className="flex-1 text-center md:text-right">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                    نخستین سامانه هوشمند جایگاه‌های سوخت گاز طبیعی
                </h2>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">
                    حکایت جسورانه از یک ماجرای کارآفرینانه و پاسخ به نیازهای بومی
                </p>
                <br />
                <p>سامانه هوشمند کنترل و مانیتورینگ جایگاه‌های  گاز طبیعی، راهکاری پیشرفته و بومی از ما است که تحولی در صنعت سوخت کشور ایجاد کرده است. این سامانه با بهره‌گیری از تکنولوژی‌های پیشرفته، داده‌ها را در لحظه جمع‌آوری و تحلیل کرده و با ارائه گزارش‌های جامع، مدیریت و نظارت جایگاه‌ها را ساده‌تر می‌سازد.
                    <br />یکی از ویژگی‌های برجسته این سامانه، شناسایی خودروهای غیر استاندارد است که با جلوگیری از وقوع حوادث دلخراش و افزایش ایمنی جانی و مالی شهروندان، به ارتقای امنیت جامعه کمک می‌کند. این سامانه ضمن کاهش وابستگی به فناوری‌های خارجی، بهره‌وری جایگاه‌ها را به طور قابل‌توجهی افزایش داده و به توسعه پایدار صنعت سوخت کشور یاری می‌رساند.</p>
            </div>

            {/* Video Section */ }
            <div className="flex-1">
                <video
                    controls
                    className="w-full max-w-xl mx-auto rounded-md shadow-lg bg-slate-700 p-4"
                >
                    <source src="/pilot.mp4" type="video/mp4" />
                    مرورگر شما امکان پخش فیلم را ندارد
                </video>
            </div>
        </section>
    );
};

export default CNGIntro;
