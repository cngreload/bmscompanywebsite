import { CardSpotlight } from "@/components/ui/card-spotlight";
import { MdAlternateEmail } from "react-icons/md";

export function CardSpotlightDemo ()
{
    return (
        <CardSpotlight className="h-auto w-full max-w-md p-6 md:p-8 rounded-lg shadow-lg dark:bg-slate-50 dark:text-black  bg-white relative">
            {/* Title */ }
            <q className="text-lg sm:text-xl md:text-2xl font-bold relative z-20 mt-2 text-black block text-center">
                فرصت سرمایه گذاری
            </q>

            {/* Description */ }
            <p className="text-sm sm:text-base md:text-lg text-black mt-4 relative z-20 text-center">
                توسعه فرصت حذف و جایگزینی محصولات خارجی قدیمی با محصولی بومی و پیشتاز
            </p>

            {/* Steps */ }
            <div className="text-black mt-6 relative z-20">
                <p className="text-center font-semibold mb-4">
                    در صورت علاقه به ورود به دنیای فناوری هوشمند، شامل:
                </p>
                <ul className="list-none space-y-2">
                    <Step title="هوشمندسازی منازل" />
                    <Step title="اتوماسیون هوشمند صنایع" />
                    <Step title="دگرگونی در بهره‌وری کسب و کارها" />
                    <Step title="توسعه سوپر پلتفرم های مجازی" />
                    <Step title="ورود به بازار انرژی با هوشمندسازی" />
                </ul>
            </div>

            {/* Contact Info */ }
            <a href="#email">
                <p className="text-lg sm:text-xl md:text-2xl font-extrabold relative z-20 text-center mt-6">
                    آغاز مکاتبه با ما:
                </p>

                <div className="flex justify-center mt-4 text-5xl sm:text-6xl text-purple-600">
                    <MdAlternateEmail />
                </div>
            </a>
        </CardSpotlight>
    );
}

const Step = ( { title }: { title: string; } ) =>
{
    return (
        <li className="flex gap-2 items-start">
            <CheckIcon />
            <p className="text-sm sm:text-base md:text-lg text-black">{ title }</p>
        </li>
    );
};

const CheckIcon = () =>
{
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
                d="M12 2c-.218 0-.432.002-.642.005l-.616.017l-.299.013l-.579.034l-.553.046c-4.785.464-6.732 2.411-7.196 7.196l-.046.553l-.034.579c-.005.098-.01.198-.013.299l-.017.616l-.004.318l-.001.324c0 .218.002.432.005.642l.017.616l.013.299l.034.579l.046.553c.464 4.785 2.411 6.732 7.196 7.196l.553.046l.579.034c.098.005.198.01.299.013l.616.017l.642.005l.642-.005l.616-.017l.299-.013l.579-.034l.553-.046c4.785-.464 6.732-2.411 7.196-7.196l.046-.553l.034-.579c.005-.098.01-.198.013-.299l.017-.616l.005-.642l-.005-.642l-.017-.616l-.013-.299l-.034-.579l-.046-.553c-.464-4.785-2.411-6.732-7.196-7.196l-.553-.046l-.579-.034a28.058 28.058 0 0 0-.299-.013l-.616-.017l-.318-.004l-.324-.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083.094l-4 4a1 1 0 0 1-1.32.083l-.094-.083l-2-2a1 1 0 0 1 1.32-1.497l.094.083l1.293 1.292l3.293-3.292z"
                fill="currentColor"
                strokeWidth="0"
            />
        </svg>
    );
};
