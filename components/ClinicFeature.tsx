import { cn } from "@/lib/utils";
import { MdManageHistory, MdConnectWithoutContact, MdManageAccounts } from "react-icons/md";
import { GrSecure, GrLineChart } from "react-icons/gr";
import { IoIosPeople } from "react-icons/io";
import { FaDatabase, FaFileShield } from "react-icons/fa6";

export function ClinicFeatures ()
{
    const features = [
        {
            title: "مدیریت بیماران: تجربه‌ای فراتر از انتظار",
            description:
                "بیماران شما شایسته بهترین‌ها هستند! با ابزارهای پیشرفته‌ای مانند بازخورد تعاملی، پرونده‌های سلامت الکترونیکی جامع، و خدمات درمان از راه دور، تجربه‌ای شخصی‌سازی‌شده و متمرکز بر نیازهای بیمار ارائه دهید.",
            icon: <MdManageAccounts />,
        },
        {
            title: "برنامه‌ریزی: هوشمندسازی زمان‌بندی",
            description:
                "دیگر نگرانی بابت مدیریت وقت و نوبت‌دهی نخواهید داشت. با سیستم‌های هوشمند ما، زمان‌بندی لحظه‌ای، پیگیری خودکار و کاهش زمان انتظار بیماران به آسانی امکان‌پذیر است.",
            icon: <MdManageHistory />,
        },
        {
            title: "مدیریت مدارک: فناوری در خدمت امنیت داده‌ها",
            description:
                "سوابق بیماران خود را با راهکارهای پیشرفته ذخیره‌سازی بلاک‌چینی و تحلیل داده‌های مبتنی بر پردازش زبان طبیعی (NLP) ایمن کنید. این فناوری‌ها، امنیت و دسترسی سریع به اطلاعات را برای تیم درمانی فراهم می‌کنند.",
            icon: <GrSecure />,
        },
        {
            title: "مدیریت درآمد: بهره‌وری مالی با ابزارهای دیجیتال",
            description:
                "با سیستم‌های مدیریت چرخه درآمد (RCM)، فرآیندهای مالی خود را بهینه کنید. اتوماسیون صورتحساب‌ها، تحلیل‌های پیش‌بینی درآمد، و پیگیری خودکار مطالبات بیمه‌ای، کارایی و دقت مالی کلینیک را تضمین می‌کند.",
            icon: <GrLineChart />,
        },
        {
            title: "بازاریابی و تعامل: راهکارهای هوشمند برای جذب و حفظ بیماران",
            description:
                "با ابزارهای مدیریت ارتباط با مشتری (CRM) تخصصی حوزه سلامت، برنامه‌های وفاداری دیجیتال، و ادغام شبکه‌های اجتماعی، ارتباطات خود با بیماران را تقویت کنید. این رویکرد باعث افزایش تعامل و ایجاد حس اعتماد و وفاداری می‌شود.",
            icon: <IoIosPeople />,
        },
        {
            title: "ارتباطات: امنیت در هسته ارتباطات کلینیک شما",
            description:
                "با ابزارهای ارتباطی پیشرفته و مطابق با استانداردهای HIPAA، ارتباطات بین بیماران و کادر درمان را ایمن و سریع کنید. دستیارهای مجازی نیز به شما در پاسخ‌گویی فوری و مدیریت ساده‌تر ارتباطات کمک می‌کنند.",
            icon: <MdConnectWithoutContact />,
        },
        {
            title: "تحلیل و گزارش‌دهی: تصمیم‌گیری مبتنی بر داده‌های کلینیکی",
            description:
                "با داشبوردهای تعاملی و تحلیل‌های پیشرفته، داده‌های پیچیده را به اطلاعات قابل‌فهم و کاربردی تبدیل کنید. این قابلیت‌ها شما را در تصمیم‌گیری‌های استراتژیک و بهبود کیفیت خدمات یاری می‌دهند.",
            icon: <FaDatabase />,
        },
        {
            title: "امنیت و انطباق: حفاظت از داده‌ها با رویکردی حرفه‌ای",
            description:
                "راهکارهایی مانند ذخیره‌سازی امن، برنامه‌های بازیابی داده، و آموزش‌های امنیت سایبری، محیطی ایمن و منطبق با استانداردهای جهانی (HIPAA، GDPR) برای حفاظت از اطلاعات حساس ایجاد می‌کنند.",
            icon: <FaFileShield />,
        },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-12 px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
            { features.map( ( feature, index ) => (
                <Feature key={ feature.title } { ...feature } index={ index } />
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
    icon: React.ReactNode;
    index: number;
} ) =>
{
    return (
        <div
            className={ cn(
                "flex flex-col items-start p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300",
                "dark:bg-neutral-800 dark:text-neutral-100"
            ) }
        >
            <div className="mb-4 text-purple-600 dark:text-purple-400 text-3xl">{ icon }</div>
            <h3 className="text-lg sm:text-xl font-bold mb-2">{ title }</h3>
            <p className="text-sm sm:text-base text-neutral-800 dark:text-neutral-300">
                { description }
            </p>
        </div>
    );
};
