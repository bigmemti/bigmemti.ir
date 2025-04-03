import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function MainHeader() {
    return (
        <header id="header" className="pt-3 min-h-screen flex flex-col">
            <div className="container mx-auto px-16 flex flex-col xl:flex-row mt-32 text-white self-stretch justify-around items-center">
                <div className="flex flex-col max-w-xl text-sm md:text-base lg:text-lg gap-6">
                    <h1 className="font-bold text-2xl my-2 underline">
                      #   خوش آمدید به وب سایت من!
                    </h1>
                    <p>
                        در دنیای امروز، داشتن یک وب سایت حرفه‌ای و کارآمد از اهمیت ویژه‌ای برخوردار است. من، به عنوان یک توسعه‌دهنده وب سایت، با ارائه خدمات کدنویسی اختصاصی، به شما کمک می‌کنم تا حضور آنلاین منحصر به فرد و قدرتمندی داشته باشید. برخلاف سیستم‌های مدیریت محتوای آماده، وب سایت‌های کدنویسی شده با نیازها و خواسته‌های خاص شما به طور کامل هماهنگ می‌شوند و از انعطاف‌پذیری بیشتری برخوردارند. این وب سایت‌ها با بهینه‌سازی سرعت و امنیت بهتر، تجربه کاربری بهتری را به کاربران ارائه می‌دهند. با من، تفاوت را احساس کنید و وب سایتی منحصر به فرد برای کسب و کار خود داشته باشید.
                    </p>
                    <div className="flex gap-4 justify-center">
                        <a className="p-4 px-6 bg-blue-700 text-white rounded-md" href="#products">دیدن محصولات</a>
                        <a className="p-4 px-6 bg-white text-black rounded-md" href="#contact-me">تماس با من</a>
                    </div>
                </div>
                <DotLottieReact src="https://lottie.host/0d246843-1d83-4a09-bea2-a677ff11ef01/NMDvr6X3xN.json" loop autoplay/>
            </div>
        </header>
    )
}
