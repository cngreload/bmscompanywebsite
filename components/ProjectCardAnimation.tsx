'use client';

import React from "react";

import { AnimatedPin } from "./Pin";
import { AnimatedPin2 } from "./Pin2";

const ProjectCardAnimation: React.FC = () =>
{
    return (
        <section id="product" className="w-full overflow-x-hidden py-16 px-4 sm:px-8 bg-gray-50">
            {/* Section Header */ }
            <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl font-extralight mb-12">
                محصولات
            </h1>
            <p className="text-center justify-center">سامانه هوشمند کنترل و تگ شما را وارد عصر دیجیتال می‌کند، جایی که تمامی فرآیندهای مورد نیازتان با سهولت و صرفه‌جویی بی‌رقیب هوشمندسازی می‌شود. <br /> کلینیکانز نیز به‌عنوان یک پلتفرم مجازی جامع، فرصتی برای بهره‌مندی هوشمندانه از خدمات زیبایی و سلامت در هر شهر و با گستره‌ای ملی فراهم می‌آورد، تا با آرامش خیال بهترین‌ها را بیابید، بسنجید و تجربه کنید.</p>

            {/* Animated Pins Container */ }
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8  ">
                <AnimatedPin />
                <AnimatedPin2 />
            </div>
        </section>
    );
};

export default ProjectCardAnimation;
