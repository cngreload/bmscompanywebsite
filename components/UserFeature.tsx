
import { IoIosPricetags } from "react-icons/io";
import { Ri24HoursLine, RiUserCommunityFill } from "react-icons/ri";
import { FaSearch, FaSearchDollar, FaWifi } from "react-icons/fa";
import { FaCalendarDays, FaHandshakeSimple } from "react-icons/fa6";
import { GiChoice } from "react-icons/gi";

export function UserFeatures ()
{
    const features = [
        {
            title: "دیگر نیازی به حدس زدن نیست—همه چیز را شفاف ببینید!",
            description:
                "تمام اطلاعات لازم درباره کلینیک‌ها، خدمات، و صلاحیت متخصصان را در یک نگاه مشاهده کنید. نظرات و امتیازات واقعی کاربران، انتخاب شما را مطمئن‌تر می‌کند.",
            icon: <IoIosPricetags />,
        },
        {
            title: "خدماتی متناسب با شما، در هر زمانی!",
            description:
                "از درمان‌های زیبایی مانند لیزر و جوان‌سازی گرفته تا مشاوره‌های پزشکی و جراحی‌های تخصصی، کلینیکانز مجموعه‌ای کل از خدمات را برای نیازهای شما ارائه می‌دهد.",
            icon: <Ri24HoursLine />,
        },
        {
            title: "کلینیک ایده‌آل خود را در هر کجا پیدا کنید!",
            description:
                "چه در شهر خودتان و چه در سایر شهرها، کلینیکانز دسترسی به بهترین کلینیک‌ها و خدمات را برای شما آسان می‌کند.",
            icon: <FaSearch />,
        },
        {
            title: "اعتماد شما اولویت ماست!",
            description:
                "فقط کلینیک‌ها و متخصصانی که استانداردهای کیفی بالا را رعایت می‌کنند در کلینیکانز حضور دارند. نظرات واقعی کاربران به شما کمک می‌کند تا با اطمینان انتخاب کنید.",
            icon: <FaHandshakeSimple />,
        },
        {
            title: "رزرو نوبت در چند ثانیه!",
            description:
                "به راحتی زمان‌های آزاد را بررسی کنید، وقت رزرو کنید یا حتی زمان‌بندی خود را تغییر دهید. همه این‌ها تنها با چند کلیک در دسترس شماست.",
            icon: <FaCalendarDays />,
        },
        {
            title: "مشاوره حرفه‌ای، هر جا که هستید!",
            description:
                "با پزشکان و متخصصان از طریق متن، تماس یا ویدیو ارتباط برقرار کنید و پاسخ سؤالات خود را بدون نیاز به مراجعه حضوری دریافت کنید.",
            icon: <FaWifi />,
        },
        {
            title: "هزینه‌ها را شفاف ببینید!",
            description:
                "بدون هیچ هزینه پنهانی، قیمت خدمات را به وضوح مشاهده کنید و گزینه‌های مناسب بودجه خود را مقایسه کنید.",
            icon: <FaSearchDollar />,
        },
        {
            title: "نیازهای شما، راهنمای ما در طراحی تجربه شماست!",
            description:
                "با فیلترهای پیشرفته، خدمات را بر اساس نوع، مکان، و بودجه خود جستجو کنید. انتخاب‌های شما هرگز این‌قدر دقیق و ساده نبوده است.",
            icon: <GiChoice />,
        },
        {
            title: "به بخشی از یک جامعه مطمئن بپیوندید!",
            description:
                "تجربیات خود را به اشتراک بگذارید و از نظرات دیگران بهره ببرید. با کمک کلینیکانز، شبکه‌ای از کلینیک‌های معتبر و کاربران رضایتمند بسازید.",
            icon: <RiUserCommunityFill />,
        },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-12 px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
            { features.map( ( feature, index ) => (
                <Feature key={ index } { ...feature } />
            ) ) }
        </div>
    );
}

const Feature = ( {
    title,
    description,
    icon,
}: {
    title: string;
    description: string;
    icon?: React.ReactNode; // Make icon optional
} ) =>
{
    return (
        <div className="flex flex-col p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300 dark:bg-neutral-800 dark:text-neutral-100">
            {/* Icon */ }
            { icon && (
                <div className="text-purple-600 dark:text-purple-600 text-3xl mb-4">
                    { icon }
                </div>
            ) }

            {/* Title */ }
            <h3 className="text-lg sm:text-xl font-bold mb-2">{ title }</h3>

            {/* Description */ }
            <p className="text-sm sm:text-base text-neutral-800 dark:text-neutral-300 leading-relaxed">
                { description }
            </p>
        </div>
    );
};
