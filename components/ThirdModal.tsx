'use client';
import React from 'react';
import
{
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from '@/components/ui/animated-modal';
import Image from 'next/image';

export function ThirdModal ()
{
  // const images = [
  //   "/svg/bmslogoclean.svg" ];
  return (
    <div className="py-10  flex items-center justify-center overflow-y-visible scroll-my-2">
      <Modal>
        <ModalTrigger className=" dark:text-white text-white flex justify-center group/modal-btn">
          <span className=" group-hover/modal-btn:translate-x-40 text-center text-lg md:text-2xl bg-red-600  p-10 rounded-xl rounded-l-full transition duration-200">
            شرکت <br /> نفت
          </span>
          <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
            <Image src="/png/noiclogo.png" alt="alt" width={ 40 } height={ 40 } />
          </div>
        </ModalTrigger>
        <ModalBody className='h-fit'>
          <ModalContent>
            <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
              شرکت نفت و مدیریت طرح سی ان جی  💡
            </h4>
            <p className='text-sm text-green-600'>اجرایی نشدن هفت ساله طرح و حوادث ناگوار و مرگبار که نباید تکرار می شد!!</p>
            <div className="md:items-center text-xs">
              <p>
                عدم اجرای طرح هوشمندسازی جایگاه‌های سوخت سی‌ان‌جی، با وجود بودجه و در دسترس بودن محصولات بومی، مایه‌ی شگفتی و تأسف است.دلیل اصلی ناهماهنگی‌ای بین سیاست وارداتی مدیریت طرح سی ان جی و تأکید پدافند غیرعامل بر استفاده از محصولات بومی است. همچنین، عدم توافق با شرکت‌های پرداختی و حمایت نکردن از شرکت‌های دانش‌بنیان داخلی مانع جدی اجرا شده است. این سهل‌انگاری هفت ساله، حوادث مرگبار و تهدید امنیت شهروندان را به وجود آورده است. با این حال انگیزه‌ای برای اجرای این طرح ملی از سوی شرکت نفت دیده نمی شود. در حالی که سامانه بومی هوشمند جایگاه‌های سوخت سی‌ان‌جی توسط شرکت ما موفق شده است تا مجوزها لازم را دریافت کند، مدیریت طرح هنوز اقدامی برای گسترش آن انجام نداده است. این اجرا، ناترازی سبد سوخت و کاهش اعتماد عمومی را موجب شده است. با این حال، امیدواریم با توجه به موفقیت آزمایش‌های این سامانه، شرکت نفت در نهایت تصمیم به اجرای آن بگیرد تا به حفظ امنیت و بهبود کیفیت خدمات در عرصه سوخت گاز طبیعی بپردازد.
              </p>
            </div>
          </ModalContent>
          <ModalFooter className="gap-4">
            <a href="https://cng.niopdc.ir/">
              <button className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">
                ورود به سایت
              </button>
            </a>
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  );
}
