'use client';
// components/ComicViewer.tsx
import { useState } from "react";
import Image from "next/image";
import { Maximize, Minimize, ChevronLeft, ChevronRight } from "lucide-react";

interface ComicViewerProps
{
    images: string[];
}

const ComicViewer: React.FC<ComicViewerProps> = ( { images } ) =>
{
    const [ currentPage, setCurrentPage ] = useState( 0 );
    const [ isZoomed, setIsZoomed ] = useState( false );
    const [ position, setPosition ] = useState( { x: 0, y: 0 } );

    const nextPage = () =>
    {
        if ( currentPage < images.length - 1 )
        {
            setCurrentPage( currentPage + 1 );
            setIsZoomed( false );
        }
    };

    const prevPage = () =>
    {
        if ( currentPage > 0 )
        {
            setCurrentPage( currentPage - 1 );
            setIsZoomed( false );
        }
    };

    const toggleZoom = () => setIsZoomed( !isZoomed );

    const handleMouseMove = ( e: React.MouseEvent ) =>
    {
        if ( !isZoomed ) return;
        const { clientX, clientY, currentTarget } = e;
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        const x = ( ( clientX - left ) / width ) * 100;
        const y = ( ( clientY - top ) / height ) * 100;
        setPosition( { x, y } );
    };

    return (
        <div className="flex flex-col items-center gap-4 p-4">
            {/* Comic Image Container */ }
            <div
                className={ `relative w-full max-w-3xl h-[400px] md:h-[600px] overflow-hidden border-2 border-gray-300 dark:border-gray-600 rounded-lg transition-all duration-300 ${ isZoomed ? "cursor-move" : "cursor-pointer"
                    }` }
                onClick={ toggleZoom }
                onMouseMove={ handleMouseMove }
            >
                <Image
                    src={ images[ currentPage ] }
                    alt={ `Comic page ${ currentPage + 1 }` }
                    layout="fill"
                    objectFit={ isZoomed ? "cover" : "contain" }
                    style={
                        isZoomed
                            ? {
                                transformOrigin: `${ position.x }% ${ position.y }%`,
                                transform: "scale(2)",
                            }
                            : {}
                    }
                    className="transition-transform duration-300"
                />
            </div>

            {/* Navigation & Controls */ }
            <div className="flex items-center justify-between w-full max-w-3xl px-4">
                <button
                    onClick={ prevPage }
                    disabled={ currentPage === 0 }
                    className="px-4 py-2 text-white bg-blue-500 rounded-lg disabled:opacity-50 dark:bg-blue-700 flex items-center gap-2"
                >
                    <ChevronRight className="w-5 h-5" />
                    قبلی
                </button>

                <div className="flex items-center gap-4 flex-row-reverse">
                    <span className="text-gray-800 dark:text-gray-300">
                        صفحه { currentPage + 1 } / { images.length }
                    </span>
                    <button
                        onClick={ nextPage }
                        disabled={ currentPage === images.length - 1 }
                        className="px-4 py-2 text-white bg-blue-500 rounded-lg disabled:opacity-50 dark:bg-blue-700 flex items-center gap-2"
                    >
                        بعدی
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                        onClick={ toggleZoom }
                        className="p-2 text-gray-600 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-white"
                    >
                        { isZoomed ? <Minimize className="w-5 h-5" /> : <Maximize className="w-5 h-5" /> }
                    </button>
                </div>

            </div>
        </div>
    );
};

export default ComicViewer;
