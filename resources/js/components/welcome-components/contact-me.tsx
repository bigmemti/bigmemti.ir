import { useForm } from "@inertiajs/react"

export default function ContactMe(){
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        phone: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(route('contact.store'), {
            preserveScroll: true,
        });
        setData({
            name: '',
            phone: '',
            message: '',
        });
    };
    
    return(
        <section id="contact-me">
                <div className="min-h-screen flex flex-col gap-4 items-center py-16 bg-gray-300 dark:bg-gray-700">
                    <h1 className="text-3xl underline font-bold">#تماس با من</h1>
                    <p>برای ارتباط با من میتوانید از روش های زیر اقدام نمایید.</p>
                    <div className="flex flex-col lg:flex-row mt-4 lg:mt-32 gap-8 lg:gap-32 lg:items-center">
                        <div className="max-w-md flex flex-col gap-2 p-16 md:p-24  lg:items-start">
                            <div>
                                <a href="tel:+989052863750" className="flex gap-2 items-center">
                                    <img className="w-8 aspect-square" src="/images/phone.png" alt="تلفن"/>
                                    <p>تلفن : 989052863750+</p>
                                </a>
                            </div>
                            <div>
                                <a href="sms:+989052863750" className="flex gap-2 items-center">
                                    <img className="w-8 aspect-square" src="/images/sms.png" alt="پیامک"/>
                                    <p>پیامک : 989052863750+</p>
                                </a>
                            </div>
                            <div>
                                <a href="https://telegram.me/bigmemti" className="flex gap-2 items-center" target="_blank">
                                    <img className="w-8 aspect-square" src="/images/telegram.webp" alt="تلگرام"/>
                                    <p>تلگرام : bigmemti@</p>
                                </a>
                            </div>
                            <div>
                                <a href="https://wa.me/+989052863750" className="flex gap-2 items-center" target="_blank">
                                    <img className="w-8 aspect-square" src="/images/whatsapp.png" alt="واتساپ"/>
                                    <p>واتساپ : 989052863750+</p>
                                </a>
                            </div>
                            <div>
                                <a href="https://www.instagram.com/bigmemti" className="flex gap-2 items-center" target="_blank">
                                    <img className="w-8 aspect-square" src="/images/instagram.png" alt="اینستاگرام"/>
                                    <p>اینستاگرام : bigmemti@</p>
                                </a>
                            </div>
                            <div>
                                <a href="https://x.com/bigmemti" className="flex gap-2 items-center" target="_blank">
                                    <img className="w-8 aspect-square" src="/images/x.webp" alt="ایکس"/>
                                    <p>ایکس : bigmemti@</p>
                                </a>
                            </div>
                            <div>
                                <a href="https://www.linkedin.com/in/mahdi-zangeneh-1bb34a351" className="flex gap-2 items-center" target="_blank">
                                    <img className="w-8 aspect-square" src="/images/linkedin.png" alt="لینکدین"/>
                                    <p>لینکدین : mahdi zangeneh</p>
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 items-center p-8 rounded-md">
                            <h2 className="text-xl font-blod underline">
                                ##فرم تماس با من
                            </h2>
                            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                                <div className="flex flex-col gap-1">
                                    <label className="ps-4 font-bold" htmlFor="name">نام و نام خانوادگی</label>
                                    <input className="rounded-3xl bg-gray-200 dark:bg-gray-800 p-2" name="name" id="name" type="text" value={data.name} onChange={(e) => setData('name', e.target.value)} />
                                    {errors.name && <p className="text-red-500">{errors.name}</p>}
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label className="ps-4 font-bold" htmlFor="phone">شماره‌ی تلفن همراه</label>
                                    <input className="rounded-3xl bg-gray-200 dark:bg-gray-800 p-2" name="phone" id="phone" type="text" value={data.phone} onChange={(e) => setData('phone', e.target.value)} />
                                    {errors.phone && <p className="text-red-500">{errors.phone}</p>}
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label className="ps-4 font-bold" htmlFor="description">توضیحات</label>
                                    <textarea className="rounded-3xl bg-gray-200 dark:bg-gray-800 p-2" name="description" id="description" value={data.message} onChange={(e) => setData('message', e.target.value)}/>
                                    {errors.message && <p className="text-red-500">{errors.message}</p>}
                                </div>
                                <button className="text-white font bold text-lg p-4 px-8 bg-blue-700 rounded-lg cursor-pointer hover:bg-blue-800" type="submit" disabled={processing}>{processing ? 'در حال ارسال...' : 'ثبت'}</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
    );
}
