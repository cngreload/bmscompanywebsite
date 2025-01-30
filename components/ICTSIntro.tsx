"use client";
import React from "react";
import { CardSpotlightDemo } from "./InvestCard";

const ICTSIntro: React.FC = () =>
{
    return (
        <section className="flex flex-col md:flex-row items-center justify-center gap-8 px-4 py-12 md:py-16 lg:py-20 overflow-x-hidden">
            {/* Text Content */ }
            <div className="flex-1 p-4 md:p-8 text-center md:text-right">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
                    تنها سامانه هوشمند مورد نیاز شما{ " " }
                    <span className="bg-purple-500 text-white px-2 py-1 rounded-lg">
                        به صرفه، اختصاصی و آسان
                    </span>
                </h2>

                <q className="text-sm sm:text-base md:text-lg lg:text-xl block mb-6">
                    دیگر لازم نیست برای هوشمندسازی منزل، اداره، مغازه و صنایع خود از هزار و یک محصول متفاوت و با لیست بلند هزینه‌های آن مواجه شوید. <br />
                    بارمان محور اسپادانا اینجاست تا سامانه هوشمند کنترل و تگ را به شما معرفی کند. محصولی که به شما دسترسی آنی و از راه دور می‌دهد تا با سبکی نوین، مدیریت دارایی‌های خود را هوشمندانه متحول سازید.
                </q>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-6">
                    سامانه هوشمند کنترل و تگ، یک راهکار همه‌جانبه و پیشرفته برای مدیریت و نظارت بر فرآیندهای صنعتی و تجاری است. این سامانه با طراحی ماژولار، قابلیت تطبیق‌پذیری با نیازهای متنوع کاربران را دارد. از تغییرات کوچک گرفته تا پیاده‌سازی‌های گسترده، این سامانه هر چالشی را پاسخگو است.ویژگی منحصربه‌فرد سامانه ، بهره‌گیری از فناوری‌های پیشرفته نظیر هوش مصنوعی، یادگیری ماشینی و اینترنت اشیا است که امکان تحلیل بلادرنگ و ارائه گزارش‌های کاربردی را فراهم می‌کند. این سامانه داده‌ها را به اطلاعات عملیاتی ارزشمند تبدیل کرده و به کاربران کمک می‌کند تصمیمات هوشمندانه‌تر و دقیق‌تری بگیرند.علاوه بر این با رابط کاربری ساده و جذاب، قابلیت ادغام با دیگر سیستم‌ها و صرفه‌جویی در هزینه‌ها و منابع، انتخابی ایده‌آل برای کسانی است که به دنبال تحول واقعی در فرآیندهای مدیریتی خود هستند.
                </p>

                <span className="text-green-600 text-lg font-bold">
                    این سامانه، با ارائه راهکارهایی یکپارچه و نوآورانه، مزیت رقابتی پایداری را برای کاربران خود ایجاد می‌کند.
                </span>
                <br />
                <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed ">
                    در عصر دیجیتال، کسب‌وکارها به راه‌حل‌های هوشمند و کارآمد نیاز دارند تا بتوانند در بازار رقابتی پیشتاز بمانند. ما با بهره‌گیری از پیشرفته‌ترین سخت‌افزارها و نرم‌افزارهای امن، سامانه‌ای هوشمند و جامع را ارائه می‌دهیم که تمام نیازهای اتوماسیون شما را به صورت اختصاصی و به صرفه برآورده می‌کند.
                </p>


                <div className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">

                    <br />
                </div>
            </div>

            {/* Card Section */ }
            <div className="flex-1 flex justify-center p-4">
                <CardSpotlightDemo />
            </div>
        </section>
    );
};

export default ICTSIntro;
