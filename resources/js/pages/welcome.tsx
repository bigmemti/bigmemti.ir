import AboutMe from '@/components/welcome-components/about-me';
import MainHeader from '@/components/welcome-components/main-header';
import MainNav from '@/components/welcome-components/main-nav';
import Products from '@/components/welcome-components/products';
import { Head } from '@inertiajs/react';
import ContactMe from '@/components/welcome-components/contact-me';
import FAQ from '@/components/welcome-components/faq';
export default function Welcome() {

    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
                
                <meta name="description" content="من مهدی زنگنه، توسعه‌دهنده وب با تخصص در Laravel، React و Inertia.js هستم. پروژه‌های حرفه‌ای و نمونه کارهایم را در اینجا ببینید." />

                <meta name="keywords" content="Laravel, React, Inertia.js, توسعه وب, برنامه نویسی, Full Stack Developer" />

                <meta name="author" content="مهدی زنگنه" />

                <meta property="og:title" content="مهدی زنگنه | توسعه‌دهنده وب و برنامه‌نویس Laravel" />
                <meta property="og:description" content="به وبسایت من خوش آمدید! من مهدی زنگنه هستم، توسعه‌دهنده وب با تجربه در Laravel و React." />
                <meta property="og:image" content="https://bigmemti.ir/images/me.png" />
                <meta property="og:url" content="https://bigmemti.ir" />
                <meta property="og:type" content="website" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="مهدی زنگنه | توسعه‌دهنده Laravel و React" />
                <meta name="twitter:description" content="با من آشنا شوید! من یک توسعه‌دهنده وب با تخصص در Laravel، React و Inertia.js هستم." />
                <meta name="twitter:image" content="https://bigmemti.ir/images/me.png" />
            </Head>
            <MainNav/>
            <MainHeader/>
            <main>
                <AboutMe />
                <Products/>
                <section id="gallery"></section> 
                <FAQ/>
                <ContactMe/>
            </main>
            <footer className="bg-gray-800 text-gray-200 p-6 flex justify-center">
                با افتخار نیرو گرفته از &copy;
                <a href="https://github.com/bigmemti" target="_blank" className="mx-2 hover:text-blue-700">bigmemti</a>
            </footer>
        </>
    );
}
