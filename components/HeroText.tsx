'use client';
import React, { useState } from "react";
import { MdAlternateEmail } from "react-icons/md";
import MagicButton from "./MagicButton";
import Lottie from "lottie-react";
import animationData from "@/data/confetti.json";

const HeroText: React.FC = () =>
{
    const [ copied, setCopied ] = useState( false );

    const handleCopy = () =>
    {
        const text = "bmsco2020@gmail.com";
        navigator.clipboard.writeText( text );
        setCopied( true );
    };

    return (
        <div className="animate-fade-in-up text-center lg:text-right px-4 lg:px-8">
            <h1 className="text-lg lg:text-4xl font-bold mb-4">
                حامی سرسخت شما در عرصه هوشمندسازی صنعت 4.0
            </h1>
            <p className="text-sm lg:text-lg text-gray-600 mb-8">
                ما در تلاشیم نمادی از نوآوری، تخصص و تعهد در عرصه هوشمندسازی باشیم. با تکیه بر فناوری‌های پیشرفته و طراحی سامانه‌های بومی، هدف ما خلق آینده‌ای روشن‌تر و کارآمدتر برای مردم، کسب و کارها و صنایع کشور است. تا با ارائه راهکارهایی مقرون‌به‌صرفه و تحول‌آفرین، زندگی روزمره و فرآیندهای صنعتی را متحول کرده و مسیری نوین به سوی پیشرفت ‌بگشاییم. محصولات و خدمات هوشمند ما، همچون سامانه هوشمند کنترل و تگ و پلتفرم جامع کلینیکانز، هر یک با طراحی منحصربه‌فرد خود نقش مؤثری در افزایش بهره‌وری و بهبود کیفیت زندگی ایفا می‌کنند. سامانه هوشمند کنترل و تگ شما را وارد عصر دیجیتال می‌کند، جایی که تمامی فرآیندهای مورد نیازتان با سهولت و صرفه‌جویی بی‌رقیب هوشمندسازی می‌شود. کلینیکانز نیز به‌عنوان یک پلتفرم مجازی جامع، فرصتی برای بهره‌مندی هوشمندانه از خدمات زیبایی و سلامت در هر شهر و با گستره‌ای ملی فراهم می‌آورد، تا با آرامش خیال بهترین‌ها را بیابید، بسنجید و تجربه کنید.
            </p>
            <div>
                { copied && (
                    <div>
                        <Lottie
                            loop={ copied }
                            autoplay={ copied }
                            animationData={ animationData }
                            rendererSettings={ {
                                preserveAspectRatio: "xMidYMid slice",
                            } }
                            height={ 200 }
                            width={ 400 }
                        />
                    </div>
                ) }
                <MagicButton
                    title={ copied ? "ایمل کپی شد" : "آغاز مکاتبه با ما" }
                    icon={ <MdAlternateEmail /> }
                    position="right"
                    handleClick={ handleCopy }
                    otherClasses="!bg-[#161A31]"
                />

            </div>
        </div>
    );
};

export default HeroText;