<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" dir="{{ (in_array(app()->getLocale(), ['fa', 'ar'])) ? 'rtl' : 'ltr' }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,600&display=swap" rel="stylesheet" />

        <!-- Scripts -->
        @vite(['resources/css/app.css', 'resources/js/app.js'])
        <script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"></script>

        <!-- Styles -->
        <style>
            #header{
                background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.70)),url("{{ asset('images/header.jpg') }}") no-repeat center center/cover;
            }
            #about-me{
                background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.70)),url("{{ asset('images/aboute-me.jpg') }}") no-repeat center center/cover;
            }
            .bg-glass{
                background: rgba(240, 240, 240, 0.17);
                border-radius: 16px;
                box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
                backdrop-filter: blur(8.5px);
                -webkit-backdrop-filter: blur(8.5px);
                border: 1px solid rgba(168, 175, 184, 0.26);
            }
            a.active{
                background-color: rgba(0, 0, 255, 0.45);
                color : white;
            }
        </style>

    </head>
    <body>
        <nav id="nav" class="fixed left-1/2 -translate-x-2/4 top-4 flex justify-center md:justify-between p-4 px-6 container rounded-3xl z-30 bg-white shadow-lg">
            <div>
                <a class="p-2 px-4 hover:bg-gray-300 rounded-xl" href="{{ route('home') }}">{{ config('app.name', 'Laravel') }}</a>
            </div>
            <div class="md:flex hidden">
                <ul class="flex gap-4">
                    <li><a href="#header" class="p-2 px-4 hover:bg-gray-300 rounded-xl active"  href="">خانه</a></li>
                    <li><a href="#about-me" class="p-2 px-4 hover:bg-gray-300 rounded-xl"  href="">درباره‌ی من</a></li>
                    <li><a href="#products" class="p-2 px-4 hover:bg-gray-300 rounded-xl"  href="">محصولات</a></li>
                    {{-- <li><a href="#gallery" class="p-2 px-4 hover:bg-gray-300 rounded-xl"  href="">نمونه کارها</a></li> --}}
                    {{-- <li><a href="#faq" class="p-2 px-4 hover:bg-gray-300 rounded-xl"  href="">پرسش‌های متداول</a></li> --}}
                    <li><a href="#contact-me" class="p-2 px-4 hover:bg-gray-300 rounded-xl"  href="">تماس با من</a></li>
                </ul>
            </div>
        </nav>
        <header id="header" class="pt-3 min-h-screen flex flex-col">
            <div class="container mx-auto px-16 flex flex-col lg:flex-row mt-32 text-white self-stretch justify-around items-center">
                <div class="flex flex-col max-w-xl  text-sm md:text-base lg:text-lg gap-6">
                    <h3 class="font-bold text-2xl my-2 underline">
                      #   خوش آمدید به وب سایت من!
                    </h3>
                    <p>
                        در دنیای امروز، داشتن یک وب سایت حرفه‌ای و کارآمد از اهمیت ویژه‌ای برخوردار است. من، به عنوان یک توسعه‌دهنده وب سایت، با ارائه خدمات کدنویسی اختصاصی، به شما کمک می‌کنم تا حضور آنلاین منحصر به فرد و قدرتمندی داشته باشید. برخلاف سیستم‌های مدیریت محتوای آماده، وب سایت‌های کدنویسی شده با نیازها و خواسته‌های خاص شما به طور کامل هماهنگ می‌شوند و از انعطاف‌پذیری بیشتری برخوردارند. این وب سایت‌ها با بهینه‌سازی سرعت و امنیت بهتر، تجربه کاربری بهتری را به کاربران ارائه می‌دهند. با من، تفاوت را احساس کنید و وب سایتی منحصر به فرد برای کسب و کار خود داشته باشید.
                    </p>
                    <div class="flex gap-4 justify-center">
                        <a class="p-4 px-6 bg-blue-700 text-white rounded-md" href="#products">دیدن محصولات</a>
                        <a class="p-4 px-6 bg-white text-black rounded-md" href="#contact-me">تماس با من</a>
                    </div>
                </div>
                <div>
                    <dotlottie-player src="https://lottie.host/0d246843-1d83-4a09-bea2-a677ff11ef01/NMDvr6X3xN.json" background="transparent" speed="1" style="width: 500px; height: 500px;" loop autoplay></dotlottie-player>
                </div>
            </div>
        </header>
        <main>
            <section id="about-me">
                <div class="min-h-screen flex justify-center items-center p-16">
                    <div class="bg-glass shadow-lg flex flex-col items-center lg:flex-row p-4 rounded-lg gap-12 text-white">
                        <div class="max-w-xl text-sm md:text-base lg:text-lg">
                            <h3 class="font-bold text-2xl my-2 underline"># حالا من کیم؟</h3>
                            <p> بیگ‌ممتی برندی بود که با آن در حوزه آموزش حرفه‌ای برنامه‌نویسی و ساخت وب اپلیکیشن‌های پیشرفته برای مجموعه‌های مدیریتی و ساخت نرم‌افزارهای سازمانی فعالیت می‌کردم. اما اکنون چرخ روزگار گونه‌ای چرخید که مرا دوباره به حوزه تولید محصولات کوچکتری مانند وب‌سایت‌های فروشگاهی و وبلاگ‌ها بازگردانده است. </p>
                            <p> بعد از سال‌ها فعالیت در حوزه‌های مختلف، اخیراً تصمیم گرفتم تا مجموعه‌ای از محصولات را برای حل معضلاتی مانند رها شدن وب‌سایت‌های فروشگاهی و آسیب‌های ناشی از آن برای کسب و کارهای کوچک و متوسط ایجاد کنم. این خدمات و محصولات، یقیناً جان تازه‌ای به بازار شما خواهند بخشید و به رشد و توسعه کسب و کار شما کمک خواهند کرد. </p>
                            <p> با من تماس بگیرید و از خدمات من بهره‌مند شوید. </p>
                            <div class="flex gap-4 justify-center mt-16">
                                <a class="p-4 px-6 bg-white text-black rounded-md" href="#faq">پرسش‌های متداول</a>
                                <a class="p-4 px-6 bg-white text-black rounded-md" href="#contact-me">تماس با من</a>
                            </div>
                        </div>
                        <div class="bg-white p-2 rounded-full">
                            <img class="rounded-full" src="{{ asset('images/me.png') }}" alt="">
                        </div>
                    </div>
                </div>
            </section>
            <section id="products">
                <div class="min-h-screen items-center bg-gray-300 py-16 flex flex-col gap-16  text-sm md:text-base">
                    <h2 class="text-3xl font-bold underline">#محصولات</h2>
                    <div class="flex flex-col-reverse lg:flex-row justify-center gap-16 items-center lg:items-start">
                        <div class="flex flex-col max-w-lg gap-4">
                            <h3 class="text-xl font-bold">##هارو : نسخه‌ی محدود (limited edition) وب‌سایت فروشگاهی</h3>
                            <p class="ps-4">هارو یک نرم‌افزار مدیریت محتوا فروشگاهیست که امکانات زیادی را در اختیار شما قرار میدم که بتوانید کسب کار خود را در دنیای مجازی به نمایش عموم بگذارید. این امکانات نظیر:</p>
                            <ul class="list-[square] ps-4">
                                <li>قابلیت ایجاد، حذف و ویرایش دسته‌بندی، برند و محصول</li>
                                <li>قابلیت دسته‌بندی به صورت مراتبی</li>
                                <li>قابلیت گذاشتن نظر درباره محصولات توسط مشتری‌ها</li>
                                <li>سبدخرید، ثبت سفارش و مشاهده وضعیت آن</li>
                                <li>کیف پول، درگاه پرداخت و پرداخت مستقیم و غیرمستقیم</li>
                                <li>قابلیت اخذ بیانه و تکمیل سفارش پس از تحویل</li>
                                <li>سطوح مدیریتی مانند: مالک، ادمین، راننده و غیره </li>
                                <li>اخذ نماد اعتماد الکترونیکی، دامنه و هاست اختصاصی</li>
                                <li>قالب و ظاهر اختصاصی</li>
                                <li>رتبه بالا در موتور های جستجو، امینیت و سرعت بالا</li>
                                <li>و بسیاری امکانات دیگر</li>
                            </ul>
                            <div class="flex justify-center">
                                <a href="#contact-me" class="bg-blue-700 p-4 px-8 text-white rounded-xl">برای تماس و مشاوره کلیک کنید</a>
                            </div>
                        </div>
                        <div>
                            <img class="max-w-xl w-96 md:w-auto rounded-2xl" src="{{ asset('images/product-1.png') }}" alt="">
                        </div>
                    </div>
                    <div class="flex flex-col-reverse lg:flex-row-reverse items-center lg:items-start justify-center gap-16">
                        <div class="flex flex-col max-w-lg gap-4">
                            <h3 class="text-xl font-bold">##هارو : نسخه‌ی حسابداری (economy edition)  وب‌سایت فروشگاهی و نرمافزار حساب داری تحت وب</h3>
                            <p class="ps-4">این نسخه نیز مانند نسخه‌ی محدود دارای امکاناتی برای مدیریت محتوای فروشگاهیست با امکاناتی بیشتر و جدید تر. این امکانات جدید نظیر:</p>
                            <ul class="list-[square] ps-4">
                                <li>امکان ثبت خرید و فروش توسط ادمین</li>
                                <li>مدیریت دریافتی‌ها و پرداختی‌ها</li>
                                <li>مدیریت حساب های مالی و چک‌ها</li>
                                <li>سیستم انباری داری و ثبت فاکتور</li>
                                <li>کارتکس برای اشخاص و کالاها</li>
                                <li>اتصال میان سیستم حساب داری و فروشگاه با قدرت مدیریت نمایش تعداد و قیمت کالا‌ها</li>
                                <li>سیستم تخفیف روی سفارش</li>
                                <li>قابلیت گرفتن گزارش هم در سایت و هم به فرمت‌ها و فایل های مختلف</li>
                            </ul>
                            <div class="flex justify-center">
                                <a href="#" class="bg-white p-4 px-8 text-black cursor-not-allowed opacity-35 rounded-xl" disabled>بزودی</a>
                            </div>
                        </div>
                        <div>
                            <img class="max-w-xl w-96 md:w-auto rounded-2xl" src="{{ asset('images/product-2.png') }}" alt="">
                        </div>
                    </div>
                </div>
            </section>
            <section id="gallery">
                {{-- <div class="min-h-screen">نمونه کارها</div> --}}
            </section>
            <section id="faq">
                {{-- <div class="min-h-screen">پرسش‌های متداول</div> --}}
            </section>
            <section id="contact-me">
                <div class="min-h-screen flex flex-col gap-4 items-center py-16 bg-gray-300">
                    <h2 class="text-3xl underline font-bold">#تماس با من</h2>
                    <p>برای ارتباط با من میتوانید از روش های زیر اقدام نمایید.</p>
                    <div class="flex flex-col lg:flex-row mt-4 lg:mt-32 gap-8 lg:gap-32 lg:items-center">
                        <div class="max-w-md flex flex-col gap-2 p-24 items-center lg:items-start">
                            <div>
                                <a href="tel:+989052863750" class="flex gap-2 items-center">
                                    <img class="w-8" src="{{ asset('images/phone.png') }}" alt="">
                                    <p>تلفن : 989052863750+</p>
                                </a>
                            </div>
                            <div>
                                <a href="sms:+989052863750" class="flex gap-2 items-center">
                                    <img class="w-8" src="{{ asset('images/sms.png') }}" alt="">
                                    <p>پیامک : 989052863750+</p>
                                </a>
                            </div>
                            <div>
                                <a href="https://telegram.me/bigmemti" class="flex gap-2 items-center">
                                    <img class="w-8" src="{{ asset('images/telegram.webp') }}" alt="">
                                    <p>تلگرام : bigmemti@</p>
                                </a>
                            </div>
                            <div>
                                <a href="https://wa.me/+989052863750" class="flex gap-2 items-center">
                                    <img class="w-8" src="{{ asset('images/whatsapp.png') }}" alt="">
                                    <p>واتساپ : 989052863750+</p>
                                </a>
                            </div>
                            <div>
                                <a href="https://www.instagram.com/bigmemti" class="flex gap-2 items-center">
                                    <img class="w-8" src="{{ asset('images/instagram.png') }}" alt="">
                                    <p>اینستاگرام : bigmemti@</p>
                                </a>
                            </div>
                        </div>
                        <div class="flex flex-col gap-4 items-center p-8 rounded-md">
                            <div class="text-xl font-blod underline">
                                ##فرم تماس با من
                            </div>
                            <form class="flex flex-col gap-4" action="">
                                @csrf
                                <div class="flex flex-col gap-1">
                                    <label class="ps-4 font-bold" for="">نام و نام خانوادگی</label>
                                    <input class="rounded-3xl" type="text">
                                </div>
                                <div class="flex flex-col gap-1">
                                    <label class="ps-4 font-bold" for="">شماره‌ی تلفن همراه</label>
                                    <input class="rounded-3xl" type="text">
                                </div>
                                <div class="flex flex-col gap-1">
                                    <label class="ps-4 font-bold" for="">توضیحات</label>
                                    <textarea class="rounded-3xl" name="" id="" cols="30" rows="5"></textarea>
                                </div>
                                <button class="text-white font bold text-lg p-4 px-8 bg-blue-700 rounded-lg">ثبت</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <footer class="bg-gray-800 text-gray-200 p-6 flex justify-center">
            با افتخار نیرو گرفته از &copy;
            <a href="https://github.com/bigmemti" target="_blank" class="mx-2 hover:text-blue-700">bigmemti</a>
        </footer>
        <script>
            document.addEventListener('DOMContentLoaded', function() {
                const links = document.querySelectorAll('a[href^="#"]');
                for (const link of links) {
                    link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href').substring(1);
                    const targetElement = document.getElementById(targetId);

                    if (targetElement) {
                        window.scrollTo({
                        top: targetElement.offsetTop - document.querySelector('nav').offsetHeight,
                        behavior: 'smooth'
                        });
                    }
                    });
                }
                window.addEventListener('scroll', function() {
                    let current = '#header';

                    document.querySelectorAll('section, header').forEach(section => {
                    const sectionTop = section.offsetTop - document.querySelector('nav').offsetHeight;
                    if (scrollY >= sectionTop) {
                        current = section.getAttribute('id');
                    }
                    });

                    links.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').substring(1) === current) {
                        link.classList.add('active');
                    }
                    });
                });
            });
        </script>
    </body>
</html>
