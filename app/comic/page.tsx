
// pages/comic.tsx
import ComicViewer from "@/components/ComicViewer";
import Footer from "@/components/Footer";
import Headerinterview from "@/components/HeaderInreview";

const ComicPage = () =>
{
    const comicImages = [
        "/svg/bmslogo.svg",
        "/webp/c1.webp",
        "/webp/c2.webp",
        "/webp/c3.webp",
        "/webp/c4.webp",
        "/webp/c5.webp",
        "/webp/c6.webp",
        "/webp/c7.webp",
        "/webp/c8.webp",
        "/webp/c9.webp",
        "/webp/c10.webp",

        "/webp/c11.webp",
        "/webp/c12.webp",
        "/webp/c13.webp",
        "/webp/c14.webp",
        "/webp/c15.webp",
        "/webp/c16.webp",
        "/webp/c17.webp",
        "/webp/c18.webp",
        "/webp/c19.webp",
        "/webp/c20.webp",

        "/webp/c21.webp",
        "/webp/c22.webp",
        "/webp/c23.webp",
        "/webp/c24.webp",
        "/webp/c25.webp",
        "/webp/c26.webp",
        "/webp/c27.webp",
        "/webp/c28.webp",
        "/webp/29.webp",


    ];

    return (
        <main>
            <Headerinterview />
            <div className="bg-gray-100 dark:bg-gray-900">
                <ComicViewer images={ comicImages } />
            </div>
            <Footer />
        </main>
    );
};

export default ComicPage;
