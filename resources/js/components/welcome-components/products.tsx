export default function Products(){
    return(
        <section id="products">
            <div className="min-h-screen items-center bg-gray-300 dark:bg-gray-700 py-16 flex flex-col gap-16  text-sm md:text-base">
                <h1 className="text-3xl font-bold underline">#محصولات</h1>
                <div className="flex flex-col-reverse lg:flex-row justify-center gap-16 items-center lg:items-start">
                    <div className="flex flex-col max-w-lg gap-4">
                        <h2 className="text-xl font-bold ps-2">##هارو : نسخه‌ی محدود (limited edition) وب‌سایت فروشگاهی</h2>
                        <p className="ps-6">هارو یک نرم‌افزار مدیریت محتوا فروشگاهیست که امکانات زیادی را در اختیار شما قرار میدم که بتوانید کسب کار خود را در دنیای مجازی به نمایش عموم بگذارید. این امکانات نظیر:</p>
                        <ul className="list-[square] ps-6">
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
                        <div className="flex justify-center">
                            <a href="#contact-me" className="bg-blue-700 p-4 px-8 text-white rounded-xl">برای تماس و مشاوره کلیک کنید</a>
                        </div>
                    </div>
                    <div>
                        <img className="max-w-xl w-96 md:w-auto rounded-2xl" src="/images/product-1.png" alt="محصول هارو نسخه ی محدود"/>
                    </div>
                </div>
                <div className="flex flex-col-reverse lg:flex-row-reverse items-center lg:items-start justify-center gap-16">
                    <div className="flex flex-col max-w-lg gap-4">
                        <h2 className="text-xl font-bold ps-2">##هارو : نسخه‌ی حسابداری (economy edition)  وب‌سایت فروشگاهی و نرمافزار حساب داری تحت وب</h2>
                        <p className="ps-6">این نسخه نیز مانند نسخه‌ی محدود دارای امکاناتی برای مدیریت محتوای فروشگاهیست با امکاناتی بیشتر و جدید تر. این امکانات جدید نظیر:</p>
                        <ul className="list-[square] ps-6">
                            <li>امکان ثبت خرید و فروش توسط ادمین</li>
                            <li>مدیریت دریافتی‌ها و پرداختی‌ها</li>
                            <li>مدیریت حساب های مالی و چک‌ها</li>
                            <li>سیستم انباری داری و ثبت فاکتور</li>
                            <li>کارتکس برای اشخاص و کالاها</li>
                            <li>اتصال میان سیستم حساب داری و فروشگاه با قدرت مدیریت نمایش تعداد و قیمت کالا‌ها</li>
                            <li>سیستم تخفیف روی سفارش</li>
                            <li>قابلیت گرفتن گزارش هم در سایت و هم به فرمت‌ها و فایل های مختلف</li>
                        </ul>
                        <div className="flex justify-center">
                            <a href="#" className="bg-white p-4 px-8 text-black cursor-not-allowed opacity-35 rounded-xl" disabled>بزودی</a>
                        </div>
                    </div>
                    <div>
                        <img className="max-w-xl w-96 md:w-auto rounded-2xl" src="/images/product-2.png" alt="محصول هارو نسخه ی حسابداری"/>
                    </div>
                </div>
            </div>
        </section>
    );
}
