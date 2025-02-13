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
import { motion } from 'framer-motion';


export function SecondModal ()
{
  const images = [
    "/svg/bmslogoclean.svg" ];
  return (
    <div className=" flex items-center justify-center">
      <Modal>
        <ModalTrigger className=" dark:text-black text-black  flex justify-center group/modal-btn">
          <span className="group-hover/modal-btn:translate-x-40 text-center text-lg md:text-2xl bg-white dark:text-black  p-10 rounded-xl rounded-r-full transition duration-200">
            پدافند <br />غیر عامل          </span>
          <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
            <Image src="/png/padlogo.png" alt="لوگو پدافند" width={ 40 } height={ 40 } />
          </div>
        </ModalTrigger>
        <ModalBody className='h-fit  dark:bg-slate-50 dark:text-black'>
          <ModalContent>
            <h4 className="text-base lg:text-2xl bg-white dark:bg-purple-600 text-gray-900 dark:text-gray-800 font-bold text-center mb-8">
              پدافند غیر عامل  💡
              <p className="text-green-600 text-sm">تاکید بر امنیت ملی و تکیه بر توان داخلی</p>
            </h4>
            <div className="flex justify-center items-center">
              { images.map( ( image, idx ) => (
                <motion.div
                  key={ 'images' + idx }
                  style={ {
                    rotate: Math.random() * 20 - 10,
                  } }
                  whileHover={ {
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 100,
                  } }
                  whileTap={ {
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 100,
                  } }
                  className="rounded-xl -mr-4 p-0.25 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
                >

                </motion.div>
              ) ) }
            </div>
            <div>
              <div className="-m-2 md:-m-4">
                <Image src="/png/padcer.png" alt="مجوز پدافند" width={ 650 } height={ 500 } />
              </div>
            </div>
          </ModalContent>
          <ModalFooter className="gap-4">
            <a href="https://rc.majlis.ir/fa/law/show/1128010">
              <button className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">
                بازدید سایت              </button>
            </a>
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  );
}
