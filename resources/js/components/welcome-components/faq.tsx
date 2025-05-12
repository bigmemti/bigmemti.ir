import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

export default function FAQ() {
    return (
        <section id="faq" className="py-12 bg-gray-300 dark:bg-gray-700">
            <h2 className="text-center text-2xl font-bold underline">#پرسش‌های پرتکرار</h2>
            <Accordion type="single" collapsible className="container mx-auto">
                <AccordionItem value="item-1">
                    <AccordionTrigger>طراحی سایت چقدر زمان می‌برد؟</AccordionTrigger>
                    <AccordionContent>
                    مدت زمان طراحی سایت بستگی به پیچیدگی پروژه، تعداد صفحات و ویژگی‌های درخواستی دارد. یک وب‌سایت ساده معمولاً 2-4 هفته و پروژه‌های پیچیده‌تر 2-3 ماه زمان می‌برد.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>هزینه طراحی سایت چقدر است؟</AccordionTrigger>
                    <AccordionContent>
                    هزینه طراحی سایت بر اساس نیازهای شما، نوع وب‌سایت و ویژگی‌های درخواستی تعیین می‌شود. برای دریافت قیمت دقیق، می‌توانید با ما تماس بگیرید تا مشاوره رایگان دریافت کنید.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>آیا امکان بهینه‌سازی برای موتورهای جستجو وجود دارد؟</AccordionTrigger>
                    <AccordionContent>
                    بله، تمام وب‌سایت‌های ما با رعایت اصول SEO طراحی می‌شوند تا در موتورهای جستجو رتبه بهتری داشته باشند و مشتریان بیشتری را جذب کنند.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger>آیا امکان تغییر محتوا بعد از طراحی وجود دارد؟</AccordionTrigger>
                    <AccordionContent>
                    بله، ما یک پنل مدیریت کاربرپسند در اختیار شما قرار می‌دهیم که به راحتی می‌توانید محتوا، تصاویر و اطلاعات سایت را به‌روزرسانی کنید.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                    <AccordionTrigger>آیا وب‌سایت در موبایل هم به درستی نمایش داده می‌شود؟</AccordionTrigger>
                    <AccordionContent>
                    بله، تمام وب‌سایت‌های ما به صورت ریسپانسیو طراحی می‌شوند و در تمام دستگاه‌ها از جمله موبایل، تبلت و دسکتاپ به بهترین شکل نمایش داده می‌شوند.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                    <AccordionTrigger>آیا امکان اتصال به درگاه پرداخت وجود دارد؟</AccordionTrigger>
                    <AccordionContent>
                    بله، ما امکان اتصال به تمام درگاه‌های پرداخت معتبر را فراهم می‌کنیم و سیستم فروشگاه آنلاین را با امنیت بالا پیاده‌سازی می‌کنیم.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-7">  
                    <AccordionTrigger>آیا بعد از طراحی سایت، پشتیبانی ارائه می‌دهید؟</AccordionTrigger>
                    <AccordionContent>
                    بله، ما خدمات پشتیبانی و نگهداری سایت را به صورت دوره‌ای ارائه می‌دهیم تا همیشه سایت شما به‌روز و امن باشد.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-8">
                    <AccordionTrigger>آیا امکان طراحی فروشگاه آنلاین وجود دارد؟</AccordionTrigger>
                    <AccordionContent>
                    بله، ما فروشگاه‌های آنلاین حرفه‌ای با امکانات پیشرفته مانند مدیریت موجودی، تخفیف‌ها، نظرات کاربران و گزارش‌گیری طراحی می‌کنیم.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-9">
                    <AccordionTrigger>آیا امکان طراحی اپلیکیشن موبایل هم وجود دارد؟</AccordionTrigger>
                    <AccordionContent>
                    بله، علاوه بر طراحی وب‌سایت، ما خدمات طراحی اپلیکیشن موبایل برای سیستم‌های اندروید و iOS را نیز ارائه می‌دهیم.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-10"> 
                    <AccordionTrigger>آیا امکان طراحی سایت چند زبانه وجود دارد؟</AccordionTrigger>
                    <AccordionContent>
                    بله، ما وب‌سایت‌های چند زبانه با قابلیت تغییر زبان و مدیریت محتوای جداگانه برای هر زبان را طراحی می‌کنیم.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </section>
    );
}
