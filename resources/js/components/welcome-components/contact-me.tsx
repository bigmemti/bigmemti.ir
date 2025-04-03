export default function ContactMe(){
    return(
        <section id="contact-me">
                <div className="min-h-screen flex flex-col gap-4 items-center py-16 bg-gray-300 dark:bg-gray-700">
                    <h1 className="text-3xl underline font-bold">#تماس با من</h1>
                    <p>برای ارتباط با من میتوانید از روش های زیر اقدام نمایید.</p>
                    <div className="flex flex-col lg:flex-row mt-4 lg:mt-32 gap-8 lg:gap-32 lg:items-center">
                        <div className="max-w-md flex flex-col gap-2 p-16 md:p-24  lg:items-start">
                            <div>
                                <a href="tel:+989052863750" className="flex gap-2 items-center">
                                    <img className="w-8" src="/images/phone.png" alt="تلفین"/>
                                    <p>تلفن : 989052863750+</p>
                                </a>
                            </div>
                            <div>
                                <a href="sms:+989052863750" className="flex gap-2 items-center">
                                    <img className="w-8" src="/images/sms.png" alt="پیامک"/>
                                    <p>پیامک : 989052863750+</p>
                                </a>
                            </div>
                            <div>
                                <a href="https://telegram.me/bigmemti" className="flex gap-2 items-center">
                                    <img className="w-8" src="/images/telegram.webp" alt="تلگرام"/>
                                    <p>تلگرام : bigmemti@</p>
                                </a>
                            </div>
                            <div>
                                <a href="https://wa.me/+989052863750" className="flex gap-2 items-center">
                                    <img className="w-8" src="/images/whatsapp.png" alt="واتساپ"/>
                                    <p>واتساپ : 989052863750+</p>
                                </a>
                            </div>
                            <div>
                                <a href="https://www.instagram.com/bigmemti" className="flex gap-2 items-center">
                                    <img className="w-8" src="/images/instagram.png" alt="اینستاگرام"/>
                                    <p>اینستاگرام : bigmemti@</p>
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 items-center p-8 rounded-md">
                            <h2 className="text-xl font-blod underline">
                                ##فرم تماس با من
                            </h2>
                            <form className="flex flex-col gap-4" action="{{ route('contact.store') }}" method="POST">
                                {/* @csrf */}
                                <div className="flex flex-col gap-1">
                                    <label className="ps-4 font-bold" htmlFor="name">نام و نام خانوادگی</label>
                                    <input className="rounded-3xl" name="name" id="name" type="text" />
                                    {/* @error('name')
                                        <span className="text-red-700"></span>
                                    @enderror */}
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label className="ps-4 font-bold" htmlFor="phone">شماره‌ی تلفن همراه</label>
                                    <input className="rounded-3xl" name="phone" id="phone" type="text" />
                                    {/* @error('phone')
                                        <span className="text-red-700"></span>
                                    @enderror */}
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label className="ps-4 font-bold" htmlFor="description">توضیحات</label>
                                    <textarea className="rounded-3xl" name="description" id="description"/>
                                    {/* @error('description')
                                        <span className="text-red-700"></span>
                                    @enderror */}
                                </div>
                                <button className="text-white font bold text-lg p-4 px-8 bg-blue-700 rounded-lg">ثبت</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
    );
}
