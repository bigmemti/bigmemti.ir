
export default function AboutMe(){
    return(
        <section id="about-me">
            <div className="min-h-screen flex justify-center items-center p-16">
                <div className="bg-glass shadow-lg flex flex-col items-center lg:flex-row p-4 rounded-lg gap-12 text-white">
                    <div className="max-w-xl text-sm md:text-base lg:text-lg">
                        <h1 className="font-bold text-2xl my-2 underline"># حالا من کیم؟</h1>
                        <p> بیگ‌ممتی برندی بود که با آن در حوزه آموزش حرفه‌ای برنامه‌نویسی و ساخت وب اپلیکیشن‌های پیشرفته برای مجموعه‌های مدیریتی و ساخت نرم‌افزارهای سازمانی فعالیت می‌کردم. اما اکنون چرخ روزگار گونه‌ای چرخید که مرا دوباره به حوزه تولید محصولات کوچکتری مانند وب‌سایت‌های فروشگاهی و وبلاگ‌ها بازگردانده است. </p>
                        <p> بعد از سال‌ها فعالیت در حوزه‌های مختلف، اخیراً تصمیم گرفتم تا مجموعه‌ای از محصولات را برای حل معضلاتی مانند رها شدن وب‌سایت‌های فروشگاهی و آسیب‌های ناشی از آن برای کسب و کارهای کوچک و متوسط ایجاد کنم. این خدمات و محصولات، یقیناً جان تازه‌ای به بازار شما خواهند بخشید و به رشد و توسعه کسب و کار شما کمک خواهند کرد. </p>
                        <p> با من تماس بگیرید و از خدمات من بهره‌مند شوید. </p>
                        <div className="flex gap-4 justify-center mt-16">
                            <a className="p-4 px-6 bg-white text-black rounded-md" href="#faq">پرسش‌های متداول</a>
                            <a className="p-4 px-6 bg-white text-black rounded-md" href="#contact-me">تماس با من</a>
                        </div>
                    </div>
                    <div className="bg-white p-2 rounded-full">
                        <img className="rounded-full" src="/images/me.png" alt="عکس من" />
                    </div>
                </div>
            </div>
        </section>
    );
}