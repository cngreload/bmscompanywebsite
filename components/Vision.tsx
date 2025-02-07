'use client';
import Image from "next/image";
import React from "react";

const VisionSection = () =>
{
    return (
        <div className="bg-white text-black py-16 px-4 sm:px-8 overflow-x-hidden">
            {/* Header Section */ }
            <div className="max-w-4xl mx-auto text-center">
                <q className="uppercase text-xs lg:text-base sm:text-sm tracking-widest text-green-600">
                    برای انرژی و فناوری ارزش قایل هستیم پس با هوشمندسازی هر دو را بهینه سازی می کنیم.
                </q>
                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold mt-4">
                    انقلاب صنعتی چهارم، تحول عظیم با ادغام سازی هوشمند
                </h1>
                <p className="text-sm sm:text-lg mt-6 text-gray-900 leading-relaxed">
                    ما در بارمان محور اسپادانا پرورش دهنده چشم انداز تحقق رویای انسان مدرن برای زیر انگشت داشتن تمامی فعالیت های کسب و کار و املاک خود با دقت و امن، از هرنقطه و در هر لحظه بلادرنگ، می باشیم.
                    این نوید بخش عصر نوین هوشمندسازی و اتوماسیون در ساختار صنعت چهارم و ادغام آن در زندگی مردم می باشد.
                </p>
                <div className="items-center justify-center lg:pt-8">
                    <Image src="/svg/futurevision.svg" alt="چشم انداز" width={ 900 } height={ 800 } />
                </div>
            </div>



            {/* Feature Card */ }
            <div className="max-w-5xl mx-auto mt-16 bg-slate-400 rounded-2xl p-6 sm:p-8 flex flex-col space-y-6">
                <div className="flex flex-col space-y-4 text-justify">
                    <p className="text-sm sm:text-lg leading-relaxed">
                        با هدف ارتقای هوشمندسازی در طیف وسیعی از منازل، کسب‌وکارها و صنایع سامانه‌ای بومی و منحصربه‌فرد به نام سامانه هوشمند کنترل و تگ را از پایه طراحی و تولید کردیم. این سامانه که تجلی نوآوری و فناوری‌های پیشرفته است، از دو بخش جامع سخت‌افزار و نرم‌افزار  تشکیل می‌شود. هر بخش از این سامانه شامل محصولات تخصصی متعددی است که به‌طور یکپارچه به بهینه‌سازی فرآیندهای هوشمندسازی کمک می‌کنند.
                    </p>
                    <p className="text-sm sm:text-lg leading-relaxed">
                        طراحی ماژولار این سامانه یکی از نوآوری‌های کلیدی آن به شمار می‌رود، زیرا امکان شخصی‌سازی و تنظیم بخش‌های مختلف سامانه را برای رفع دقیق نیازهای مشتریان فراهم می‌کند. کاربران می‌توانند با افزودن یا حذف ماژول‌ها و تغییر تنظیمات، سامانه را به‌طور کامل بر اساس نیازهای خود تطبیق دهند. این انعطاف‌پذیری نه تنها بهره‌وری را افزایش می‌دهد، بلکه باعث می‌شود سامانه با صرف هزینه‌های بهینه، راهکاری مقرون‌به‌صرفه و کارآمد برای تمامی اقشار جامعه باشد.
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                        <li>                        ساختار ماژولار آن، امکان تنظیم هزینه‌ها بر اساس بودجه و تقاضای مشتری را فراهم کرده و دسترسی به فناوری‌های پیشرفته را برای تمامی افراد و کسب‌وکارها، از شرکت‌های بزرگ گرفته تا کسب‌وکارهای کوچک و حتی افراد مستقل، ممکن می‌سازد.
                        </li>
                        <li>سامانه هوشمند کنترل و تگ نه تنها ابزارهای پیشرفته‌ای را برای بهبود فرآیندهای صنعتی و تجاری ارائه می‌دهد، بلکه با ایجاد دسترسی برابر به فناوری‌های نوین، گامی بلند به سوی آینده‌ای دیجیتال و هوشمند برداشته است.</li>
                    </ul>
                </div>
                <div className="text-center text-sm sm:text-lg leading-relaxed">
                </div>
            </div>
        </div>
    );
};

export default VisionSection;
