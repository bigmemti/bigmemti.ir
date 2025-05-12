import { cn } from "@/lib/utils";
import { Link } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function MainNav() {
    const [navClass, setNavClass] = useState("container rounded-3xl top-4"); 
    const [activeLink, setActiveLink] = useState("header");

    useEffect(() => {
        const nav = document.querySelector("nav");
        const offsetHeight = nav ? nav.offsetHeight : 0;
        const links = Array.from(document.querySelectorAll("a[href^='#']")) as HTMLAnchorElement[];
        const sections = links.map(link => document.getElementById(link.getAttribute("href")!.substring(1)));

        const updateNavigation = () => setNavClass(() => (window.scrollY >= window.innerHeight / 8 ? "w-full py-6" : "container rounded-3xl top-4"));

        const smoothScroll = (event :  React.MouseEvent<HTMLAnchorElement>) => {
            event.preventDefault();
            const targetId = event.currentTarget.getAttribute("href")!.substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - offsetHeight,
                    behavior: "smooth",
                });
            }
        };

        const updateActiveLink = () => {
            const scrollPosition = window.scrollY + offsetHeight + 50;
            let currentActive = "";

            sections.forEach(section => {
                if (section && scrollPosition >= section.offsetTop) {
                    currentActive = section.id;
                }
            });

            setActiveLink(currentActive);
        };

        links.forEach(link => link.addEventListener("click", smoothScroll));
        window.addEventListener("scroll", updateActiveLink);

        window.addEventListener("scroll", updateNavigation);
        return () => {
            window.removeEventListener("scroll", updateNavigation);
            links.forEach(link => link.removeEventListener("click", smoothScroll));
            window.removeEventListener("scroll", updateActiveLink);
        }
    }, []);

    return (
        <nav id='nav' className={navClass + ' fixed left-1/2 -translate-x-2/4  flex justify-center lg:justify-between p-4 px-6 z-30 bg-white dark:bg-gray-900 shadow-lg transition-all duration-500'}>
                <div><Link className='p-2 px-4 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-xl' href="/">BIGMEMTI</Link></div>
                <div className='lg:flex hidden'>
                    <ul className="flex gap-4">
                        {[
                            { id: "header", label: "خانه" },
                            { id: "about-me", label: "درباره‌ی من" },
                            { id: "products", label: "محصولات" },
                            { id: "gallery", label: "نمونه کارها" },
                            { id: "faq", label: "پرسش‌های پرتکرار" },
                            { id: "contact-me", label: "تماس با من" },
                        ].map(({ id, label }) => (
                            <li key={id}>
                                <a href={`#${id}`} className={cn("p-2 px-4 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-xl", { "bg-blue-600 text-white": activeLink === id })}>{label}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
    )
}
