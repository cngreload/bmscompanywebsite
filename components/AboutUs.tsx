"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
    {
        title: "خیزش جسورانه کارآفرینان نوپا برای خلق فناوری نوین بومی و ورود به عرصه هوشمندسازی با تجربه مستقیم کاستی ها",
        description: (
            <div className="h-full w-full bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center text-white p-4 text-sm sm:text-base md:text-lg lg:text-xl">
                <p>
                    تیم بنیان گذاران با سابقه بهره‌برداری و مدیریت مجتمع‌های صنعتی در استان‌های مختلف، با ضعف اساسی و محدودیت‌های فناوری‌های خارجی از جمله سیستم‌های اتوماسیون قدیمی، اقدام به طراحی راهکاری جامع کردند.
                    <br />
                    <br />
                    با چشم‌انداز ارائه محصولی کامل، نوین، و منحصر به فرد با اتکا به استعدادهای داخلی، سامانه هوشمند کنترل و تگ توسعه یافت تا دسترسی به فناوری هوشمندسازی برای طیف وسیعی از کسب‌وکارها و صنایع کشور فراهم شود.
                    <br />
                    <br />
                    این سامانه، طراحی، اعتبارسنجی، تولید و به بهره‌برداری اولیه رسید.
                </p>
            </div>
        ),
        content: (
            <div className="flex justify-center">
                <Image src="/svg/bmslogoclean.svg" alt="Logo" width={ 300 } height={ 300 } />
            </div>
        ),
    },
    {
        title: "داستان ما",
        description: (
            <div className="h-full w-full bg-gradient-to-br from-orange-500 to-indigo-800 flex items-center justify-center text-white p-4 text-sm sm:text-base md:text-lg lg:text-xl">
                <p>
                    یک شرکت جوان، پرانرژی و متعهد به نوآوری است که بدون وابستگی به حمایت‌های دولتی، توانسته در عرصه هوشمندسازی به موفقیت‌های چشمگیری دست یابد. این شرکت با تکیه بر تخصص داخلی و خلاقیت بی‌نظیر، راهکارهایی ارائه می‌دهد که کیفیت زندگی مردم و بهره‌وری صنایع کشور را بهبود می‌بخشد. رویکرد ما در ارائه خدمات، بر پایه شفافیت، نوآوری و تعهد به ارتقای استانداردهای فناوری است.
                </p>
            </div>
        ),
        content: (
            <div className="flex justify-center">
                <Image
                    src="/png/officeentery.png"
                    width={ 300 }
                    height={ 300 }
                    className="object-cover rounded-md"
                    alt="Optimized Energy"
                />
            </div>
        ),
    },
    {
        title: "امنیت فناوری و انرژی",
        description: (
            <div className="h-full w-full flex items-center justify-center text-white p-4 text-sm sm:text-base md:text-lg lg:text-xl">
                <p>
                    اکنون زمان آن فرا رسیده که دست از وابستگی به سامانه‌های پر‌خرج خارجی بکشیم و با فناوری بومی به مشکلات اقتصادی و زیرساختی کشور پاسخ دهیم.
                </p>
            </div>
        ),
        content: (
            <div className="flex justify-center">
                <Image
                    src="/png/irmap.png"
                    width={ 300 }
                    height={ 300 }
                    className="object-cover rounded-md"
                    alt="Map of Iran"
                />
            </div>
        ),
    },
    {
        title: "اقتصاد سالم، اقتصاد خوب، دنیای پویا",
        description: (
            <div className="h-full w-full bg-gradient-to-br from-orange-500 to-red-800 flex items-center justify-center text-white p-4 text-sm sm:text-base md:text-lg lg:text-xl">
                <p>
                    بدون هیچ ارتباطی با دولت یا اشخاص پرنفوذ، و بودجه محدود، کاری را انجام دادیم که شرکت‌های بزرگ سال‌ها از انجام آن ناتوان بودند. ما در حال شکستن سقف شیشه‌ای پارتی‌بازی و رانت‌خواری‌ای هستیم که بر اقتصاد تحمیل شده است. ما درها را برای کارآفرینان واقعی باز می‌کنیم، نه برای بچه‌های پولدار و رانتی!
                </p>
            </div>
        ),
        content: (
            <div className="flex justify-center">
                <Image
                    src="/png/industry4.png"
                    width={ 300 }
                    height={ 300 }
                    className="object-cover rounded-md"
                    alt="Optimized Energy"
                />
            </div>
        ),
    },
    {
        title: "چرا ما؟",
        description: (
            <div className="h-full w-full bg-gradient-to-br from-orange-500 to-red-800 flex items-center justify-center text-white p-4 text-sm sm:text-base md:text-lg lg:text-xl">
                <p>
                    به کیفیت، نوآوری و انطباق‌پذیری اهمیت می‌دهیم. محصولات ما با استانداردهای بالا طراحی شده‌اند تا نیازهای متنوع کاربران را به بهترین شکل ممکن برآورده کنند. تیم متخصص و خلاق ما، همواره در جستجوی راه‌حل‌های نوین برای رفع چالش‌ها و ایجاد تجربه‌ای بی‌نظیر برای مشتریان است. انتخاب ما به معنای انتخاب هوشمندی، کارایی و پیشرفت است.
                </p>
            </div>
        ),
        content: (
            <div className="flex justify-center">
                <Image
                    src="/png/handshake.png"
                    width={ 300 }
                    height={ 300 }
                    className="object-cover rounded-md"
                    alt="Optimized Energy"
                />
            </div>
        ),
    },
];

export function StickyScrollReveal ()
{
    return (
        <div id="about" className="w-full overflow-x-hidden">
            <p className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
                درباره ما
            </p>
            <div className="p-6 sm:p-10 bg-purple-950 opacity-90 rounded-lg">
                <StickyScroll content={ content } />
            </div>
        </div>
    );
}
