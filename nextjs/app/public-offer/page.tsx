"use client";

import { useEffect, useRef } from "react";
import { ArrowLeft, Download, Printer } from "lucide-react";
import Link from "next/link";

export default function Page() {
  const topRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    topRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handlePrint = () => {
    if (typeof window !== "undefined") window.print();
  };

  return (
    <div ref={topRef} className="min-h-screen bg-gray-50">
      <header className="sticky top-0 z-20 border-b bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3">
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-xl border px-3 py-1.5 text-sm hover:bg-gray-50"
            >
              <ArrowLeft className="h-4 w-4" />
              Orqaga
            </Link>
            <span className="hidden text-xs text-gray-500 sm:inline">
              Aipply-academy • Ommaviy oferta
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 rounded-xl border px-3 py-1.5 text-sm hover:bg-gray-50 print:hidden"
            >
              <Printer className="h-4 w-4" />
              Chop etish
            </button>
            {/* <button className="inline-flex items-center cursor-pointer gap-2 rounded-xl border px-3 py-1.5 text-sm hover:bg-gray-50">
              <Download className="h-4 w-4" />
              Saqlash (PDF — Print)
            </button> */}
          </div>
        </div>
      </header>

      <main id="oferta" className="mx-auto max-w-5xl px-4 py-8">
        <article className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 print:shadow-none">
          <h1 className="mb-1 text-2xl font-semibold leading-tight text-gray-900 sm:text-3xl">
            OMMAVIY OFERTA
          </h1>
          <p className="mb-6 text-sm text-gray-500">
            &quot;Aipply-academy&quot; MChJ — INN: 311105978
          </p>

          <div className="prose prose-sm max-w-none text-gray-900 prose-h2:mt-8 prose-h2:border-b prose-h2:border-gray-200 prose-h2:pb-2 prose-li:my-0 print:prose">
            <pre className="whitespace-pre-wrap break-words font-sans text-[0.94rem] leading-7 text-gray-800">
              {`Mazkur hujjat “Aipply-academy” mas’uliyati cheklangan jamiyati (INN:311105978) O‘zbekiston Respublikasi Fuqarolik kodeksining 367-moddasi va 369-moddasi 2-qismiga muvofiq xizmat ko‘rsatish shartnomasini (keyingi o‘rinlarda – Shartnoma) tuzish yuzasidan layoqatli bo‘lgan jismoniy shaxslarga (keyingi o‘rinlarda – Foydalanuvchi) rasmiy taklif hisoblanadi. 

Foydalanuvchi (sayt xizmatlaridan foydalanishga tayyorligini bildirgan har qanday shaxs) tomonidan mazkur ofertada belgilangan harakatlarning bajarilishi, u tomonidan quyidagi shartlar so‘zsiz qabul qilinganligini anglatadi (Ofertaning aksepti). Ofertani aksept qilgan paytdan shartnoma tuzilgan hisoblanadi. Mazkur shartnomada to‘g‘ridan-to‘g‘ri nazarda tutilmagan barcha hollar, taraflar O‘zbekiston Respublikasi qonun hujjatlari va ish muomalasi odatlariga rioya qiladilar. 

  

1.     UMUMIY QOIDALAR 

1.1.    "Sayt" deyilganda https://aipply.tilda.ws/ shu jumladan subdomenlari va uning elektron sahifalari nazarda tutiladi. Sayt Ijro etuvchi tomonidan tavsiflash, taklif qilish va xizmatlar ko'rsatish, muhim ma'lumotlarni joylashtirish uchun, shuningdek qonun hujjatlarida taqiqlanmagan boshqa maqsadlarda foydalaniladi. 

1.2.   Oferta shartnomasi - bu Ijro etuvchining (taklif beruvchining) xizmatlarni taqdim etish, shartnoma tuzish bo'yicha rasmiy taklifi bo'lib, uning tavsifi Oferta shartnomasida va Veb-saytda (keyingi o'rinlarda "Xizmatlar" deb yuritiladi) mavjud. Taklif shartnomasi va Sayt birgalikda pulli xizmatlarni taqdim etish bo'yicha shartnomaning barcha zarur shartlarini (keyingi o'rinlarda "Shartnoma" deb yuritiladi) o'z ichiga oladi. 

1.3.   Taklif shartnomasini qabul qilish - bu Foydalanuvchi tomonidan tanlangan xizmat uchun to'liq to'lovni taklif shartnomasida va/yoki Veb-saytda ko'rsatilgan tarzda, miqdor va shartlarda amalga oshirish kerakligini anglatadi. 

1.4.   Foydalanuvchi shartnomaning 1.3-bandida ko'rsatilgan tarzda Oferta shartnomasini qabul qilishi orqali o’zining shartnoma bilan tanishganligi, rozi bo'lganligi, barcha shartlarni ular taklif shartnomasi matnida (shu jumladan, taklif shartnomasidagi qo'shimchalar, agar mavjud bo'lsa) va/yoki Saytda ko'rsatilgan shaklda to'liq va shartsiz qabul qilganligini kafolatlaydi. 

1.5.  Foydalanuvchi Oferta shartnomasini 1.4-bandda ko'rsatilgan tartibda qabul qilishi kerakligini tushuniladi. 

1.6 Taklif shartnomasi - bu taklif shartnomasida va/yoki Saytda ko'rsatilgan shartlar bo'yicha huquqiy jihatdan shartnoma tuzish muhim. 

1.7.   Foydalanuvchi taklif shartnomasini qabul qilish orqali Yetkazib Beruvchi bilan shartnoma tuzish huquqiga ega ekanligiga kafolat beradi. 

1.8.  Taklif shartnomasi faqat Yetkazib Beruvchining veb-saytida joylashtirilgan bo’ladi. Boshqa manbalaridan olingan matnlar yuridik kuchga ega emas deb hisoblanadi. 

1.9.  Yetkazib Beruvchi taklif shartnomasi shartlariga istalgan vaqtda (Foydalanuvchi tomonidan qabul qilingan vaqtgacha) o'zgartirishlar kiritish huquqiga ega. Taklif shartnomasi shartlariga kiritilgan o'zgartirishlar Saytda chop etilgan paytdan boshlab kuchga kiradi. 

1.10.  Foydalanuvchi tomonidan qabul qilingan vaqtga qadar, taklif shartnomasi istalgan vaqtda O’zbekistonning amaldagi qonunchiligida nazarda tutiladigan tartibda va shartlarda bekor qilinishi mumkin. 

1.11.   Taklif shartnomasida Foydalanuvchi va Yetkazib Beruvchi (keyingi o'rinlarda "Taraflar" deb yuritiladi) tomonidan muhrlanish va/yoki imzo qo'yish talab etilmaydi, shu bilan birga qabul qilingan paytdan boshlab to'liq qonuniy kuchga ega bo’ladi. 

  

2.     AKSEPT TARTIBI 

2.1.   Mazkur Ofertaning aksepti https://aipply.tilda.ws/ sayti orqali avtorizatsiyadan o‘tib, pullik xizmatni olish orqali amalga oshiriladi. 

2.2.  Mazkur Shartnomani tuzish orqali foydalanuvchi yetkazib beruvchiga amaldagi shaxsga doir ma'lumotlar to‘g‘risidagi qonun hujjatlari talablariga muvofiq o‘zining shaxsga doir ma'lumotlariga (shu jumladan, biroq chiqarib tashlamagan holda: «PAYME” va “CLICK”  to‘lov xizmatlarida joriy etilgan servislardan foydalanish uchun zarur bo‘lgan to‘lovning hisob ma'lumotlari, mobil telefon raqami, bank kartalarining raqamlari, F.I.Sh., ro‘yxatdan o‘tish bilan bog‘liq ma'lumotlar, shuningdek, boshqa har hil shaxsga doir ma'lumotlar) ishlov berishga muddatsiz roziligini beradi, shu jumladan, ularni yig‘ish, tizimlashtirish, saqlash, aniqlashtirish (yangilash, o‘zgartirish), ko‘chirish, foydalanish, ularni berish (tarqatish, taqdim etish, dostup berish) ularni egasizlantirish, ularni taqiqlash, ularni o‘chirish va ularni yo‘q qilish, avtomatizasiya vositalaridan foydalangan yoki ulardan foydalanmagan holda, ushbu shartnomani bajarish maqsadida. Shuningdek, ushbu orqali foydalanuvchi mazkur shartnoma bo‘yicha yetkazib beruvchiga taqdim etilgan shaxsga doir ma'lumotlarni ushbu shartnomani bajarish maqsadida uchinchi shaxslarga taqdim etishga rozilik beradi. 

2.3.     Yetkazib beruvchi Foydalanuvchining shaxsga doir ma'lumotlarning maxfiyligi bo‘yicha O‘zbekiston Respublikasi amaldagi qonun hujjatlari talablariga muvofiq barcha zarur bo‘lgan choralarni ko‘rishini Foydalanuvchiga kafolatlaydi. Foydalanuvchi uning shaxsga doir ma'lumotlariga ishlov berishga roziligi (shu jumladan uchinchi shaxslarga ham) muddatsiz hisoblanib, mazkur shartnomaning 2.3-bandiga muvofiq Foydalanuvchi istagan paytda shaxsga doir ma'lumotlariga ishlov berishga roziligini qaytarib olishi mumkin. 

2.4.  Servisdan foydalanishdan avval Foydalanuvchi mazkur Ofertaning matni bilan to‘liq tanishib chiqishi zarur. Ofertaning shartlari bilan to‘liq yoki qisman norozi bo‘lsangiz, servisdan foydalanishdan bosh tortishingiz zarur. 

  

3.     SHARTNOMA PREDMETI 

3.1.   Yetkazib Beruvchi Foydalanuvchiga qo'shimcha professional dastur bo'yicha treninglar, seminarlar, ma'ruzalar yoki ta'limga oid o'quv xizmatlarini taqdim etadi. Bu shartnoma sayt va Telegram yopiq guruxlarda joylashtirilgan har qanday ta'lim dasturi uchun amal qiladi. Ta'lim xizmatlari O’zbekiston Respublikasi Vazirlar mahkamasining huzuridagi Ta’lim sifatini nazorat qilish Davlat inspeksiyasi tomonidan 2024 yil 19-aprel kunidagi № 259389 sonli «maktabdan tashqari ta’lim-tarbiya faoliyatini amalga oshirish» uchun litsenziya/tasdiqnoma va " Aipply-academy" MChJ bilan ta'lim dasturlarini amalga oshirishning tarmoq shakli to'g'risidagi shartnomalar asosida ko'rsatiladi. 

3.2.    Xizmatlarning batafsil tavsifi (o'quv turi, mavzular, shartlar, boshqa parametrlar bundan mustasno) Saytda keltirilgan. Foydalanuvchi o'z xohishiga ko'ra uni qiziqtirgan xizmatlarni tanlaydi va Yetkazib Beruvchi ularga kirish va taklif shartnomasini qabul qilish orqali treningdan o'tish istagi to'g'risida ma'lumot beradi. 

3.3.    Xizmatlarni taqdim etishning bir qismi sifatida Yetkazib Beruvchining majburiyati Foydalanuvchiga Yetkazib Beruvchining nazorati ostida 3.2-bandda tavsiflangan o'quv ma'lumotlariga kirish imkoniyatini taqdim etishdan iborat. 

3.4.     Shartnomalar - takliflar. Ruxsat berilgan paytdan boshlab, Foydalanuvchi unga taqdim etilgan o'quv ma'lumotlarini olish yoki olmaslik, qanday aniq hajmda va undan qanday foydalanishni mustaqil ravishda hal qiladi. 

3.5.     Foydalanuvchining xizmatlarga kirish fakti Yetkazib Beruvchi va/yoki uchinchi shaxslarning texnik vositalari (ulanish tarixi, jurnal fayllari va boshqalar) tomonidan qayd etilgan ma'lumotlar asosida aniqlanadi. 

3.6.    Yetkazib Beruvchi Foydalanuvchiga qo'yiladigan talablarni va uni treninglarda, seminarlarda, ma'ruzalarda o'qitish uchun Xizmatlarga qabul qilish qoidalarini belgilaydi: Xizmatlarni olishni xohlovchi, 18 yoshdan oshgan har qanday qobiliyatli shaxs; 

3.7.   Yetkazib Beruvchi qo'shimcha professional dasturni o'zlashtirgan Foydalanuvchiga qo'yiladigan talablarni va uni Xizmatlarga qabul qilish qoidalarini belgilaydi: xizmatlarni olishni xohlovchi 18 yoshdan oshgan qobiliyatli shaxs. Ushbu Shartnomaning muhim sharti dasturga ro'yxatdan o'tish vaqtida mijozning o'rta yoki oliy ma'lumotga ega bo'lishidir. 

3.8.    Yetkazib Beruvchi xizmatlarni shaxsan, uchinchi shaxslarni jalb qilgan holda, shu jumladan tarmoqdagi o'zaro aloqa shaklida ham taqdim etish huquqiga ega. Xizmatlarni taqdim etish uchun uchinchi shaxslarni jalb qilish zarurati Yetkazib Beruvchi tomonidan mustaqil ravishda belgilanadi. Xizmatlarni taqdim etish uchun Yetkazib Beruvchi Foydalanuvchining oldindan roziligisiz o'zi tanlagan hammualliflarni jalb qilish huquqiga ega. 

3.9.    Xizmatlar Internet orqali Sayt va uning asosida yaratilgan subdomenlar, shuningdek YouTube, Telegram xizmati va Yetkazib Beruvchining ixtiyoriga ko'ra boshqa ijtimoiy tarmoq va texnik vositalar yordamida taqdim etiladi. 

3.10.    Foydalanuvchi taklif shartnomasini tuzishdan oldin u xizmatlar ro'yxati, shartlari va tartibi bo'yicha barcha to'liq ma'lumotlarni to'liq olganligini tasdiqlaydi. 

3.11.   Yetkazib beruvchi Foydalanuvchiga «https://aipply.tilda.ws/» manzilida joylashtirilgan xizmatlar uchun to‘lovlarni onlayn rejimda amalga oshirish, o‘zlarining bank kartalarini boshqarish, onlayn rejimda bank kartasi orqali pul o‘tkazmalarini amalga oshirish, shuningdek, servis funksionali bilan belgilangan boshqa harakatlarni amalga oshirishni nazarda tutuvchi «PAYME” va “CLICK”  to‘lov xizmatlaridan foydalanish imkonini beradi. 

3.12.    Foydalanuvchi tomonidan Yetkazib beruvchiga taqdim etilgan shaxsga doir ma'lumotlarga ishlov berish quyidagi maqsadlarda amalga oshiriladi: 

·  Foydalanuvchi bilan imzolangan kelishuv/shartnomalar doirasida Yetkazib beruvchi tomonidan o‘ziga olgan majburiyatlarni tegishli tartibda bajarish, shuningdek yetkazib beruvchining xamkorlari bilan imzolangan kelishuvlar, shu jumladan foydalanuvchini identifikasiyalash/soddalashtirilgan tartibda identifikasiyalash maqsadida Foydalanuvchiga «PAYME” va “CLICK”  to‘lov xizmatlari va boshqa mavjid barcha amaldagi xizmatlardan foydalanish imkoniyatlarini taqdim etish; 

·  Foydalanuvchi bilan qayta aloqani amalga oshirish, shu jumladan «PAYME” va “CLICK”  to‘lov xizmatlaridan foydalanishga oid xabarnoma, so‘rov va ma'lumotnomarni yuborish. 

  

 

 

4.     XIZMATLARNI TO‘LASH 

4.1.  Taklif shartnomasi bo'yicha Xizmatlarning narxi Foydalanuvchi tanlagan Xizmatlarning turi va formatiga bog'liq. Xizmatlarning narxi haqida ma'lumot Saytda joylashtirilgan. Foydalanuvchiga xizmatlarga kirishni dastlabki taqdim etish fakti uchun Yetkazib Beruvchi tomonidan to'lov undiriladi. 

4.2.    Oferta shartnomasini qabul qilgunga qadar Yetkazib Beruvchi bir tomonlama tartibda ko'rsatilgan xizmatlar uchun narxlarni o'zgartirish huquqiga ega. Yangi narxlarning amal qilish sanasi ular Saytda e'lon qilingan sana hisoblanadi. 

4.3.   Yetkazib Beruvchi Foydalanuvchiga xizmatlardan birinchi marta foydalanilgan paytdan boshlab, Foydalanuvchidan olingan mukofotga mutanosib ravishda tegishli e'tiborni taqdim etgan deb hisoblanadi. Kirishning mazmuni va vaqti 2.3-bandga muvofiq belgilanadi. 

4.4.   Agar Foydalanuvchi tanlangan Xizmatga kirish huquqidan foydalangan bo'lsa, kelajakda pullik Xizmatning qiymati, Yetkazib Beruvchidan taklif shartnomasiga muvofiq qabul qilingan tegishli qarshi taqdimotni hisobga olgan holda Foydalanuvchiga qaytarilmaydi. 

4.5.  Foydalanuvchi tanlangan Xizmatga kirish huquqidan foydalanib, kurs davomida mashqlarni bajarish orqali foyda yoki natija ololmagan taqdirda, pul to’langangan kundan boshlab kursda o’qish davomida pul mablag’larini ma’lum bir sabablarga ko’ra qaytarib berishni so’rab belgilangan shakldagi ariza bilan 30 kun ichida murojaat qilgan taqdirda qaytarib berilishi mumkin. Ariza 3 kun ichida ko’rib chiqiladi. 

  

5.     HISOB KITOB TARTIBI 

5.1.   Oferta shartnomasi bo'yicha xizmatlar uchun to'lov 100% (yuz foiz) oldindan to'lash tartibida amalga oshiriladi. Xizmatlar uchun to'lov bank o'tkazmasi orqali amalga oshiriladi. Barcha to'lovlar O’zbekiston so’mida amalga oshiriladi. 

5.2. To'lov usullari (alternativ): 

5.2.1.   «PAYME” va “CLICK”  ilovasi yordamida mijoz tomonidan pul mablag'larini o'tkazish; 

5.2.2.        Yetkazib Beruvchi tomonidan belgilangan boshqa elektron toʻlov tizimlari https://aipply.tilda.ws/ saytida ko’rsatilgan.Ushbu pul mablag’lari yuridik shaxs hisob raqamiga to’g’ridan-to’g’ri o’tkaziladi va har bir to’lov uchun alohida fiskal chek shakllantiriladi/ 

5.3.      To'lov tizimlari komissiyasi Xizmatlar narxiga kiritilmaydi, Foydalanuvchi tomonidan alohida to'lanadi va qaytarib berilmaydi. 

5.4.   Xizmat Yetkazib Beruvchining hisob raqamiga Xizmatning to'liq qiymati miqdorida mablag' kelib tushgan paytdan e'tiboran to'langan hisoblanadi. 

5.5.     Tanlangan Xizmat narxidan kam miqdorda mablag‘ kelib tushgan taqdirda, taklif qabul qilinmagan deb hisoblanadi va Shartnoma tuzilmaydi. 

5.6.     «PAYME” va “CLICK”  to‘lov servislari orqali taqdim etilayotgan xizmatlar Foydalanuvchi tomonidan naqd pulsiz tartibda to‘lanadi. 

5.7.    «PAYME” va “CLICK”  to‘lov servislari orqali taqdim etilayotgan xizmatlarning yakuniy narxi xizmatni saytda olganligini tasdiqlash vaqtida Foydalanuvchiga xabar beriladi. 

5.8.     Saytda ko‘rsatilgan xizmatlar narxi, Foydalanuvchini ogohlantirmasdan Yetkazib beruvchi tomonidan bir tomonlama o‘zgartirilishi mumkin. 

5.9.    Foydalanuvchi tomonidan xizmatni to‘lash xizmatning 100% narxini o‘tkazish yo‘li orqali amalga oshiriladi. 

  

6.  XIZMATLARNI TAQDIM ETISH SHARTLARI 

6.1.  Xizmatlarni ko'rsatish shartlari, agar o'quv dasturining davomiyligi bilan boshqacha tartib belgilanmagan bo'lsa, Xizmatlar uchun to'lov amalga oshirilgan kundan boshlab 3 (uch) oydan oshmasligi kerak. 

6.2.   Agar mijoz ushbu moddaning 6.1-bandida ko'rsatilgan muddatda treningdan o'tish uchun xizmatlardan foydalanishga ulgurmagan bo'lsa. Taklif shartnomasi bo'yicha Yetkazib Beruvchi Xizmatlardan foydalanish muddatini uzaytirish huquqiga ega (lekin majburiy emas). Xizmatlarga kirishni uzaytirish bir marta amalga oshiriladi. Xizmatlarga kirishni uzaytirish uchun ariza Foydalanuvchi tomonidan elektron shaklda telegram orqali «@aipplyceo» profil manziliga yuboriladi va mijozning xizmatlardan foydalanmaganligi va ushbu maqolada ko'rsatilgan muddatda o'qitishni tugatmaganligi, shunga o’xshash boshqa sabablari to'g'risidagi ma'lumotlarni o'z ichiga olishi kerak. 6.2-band. Shartnomalar - takliflar. Agar sabablar asossiz deb topilsa, Yetkazib Beruvchi Foydalanuvchiga Xizmatlarga kirishni kengaytirish to'g'risidagi arizani qondirishda yordam berishga haqli. 

  

7.  TARAFLAR MAJBURIYATLARI  

7.1  Foydalanuvchi quyidagilarni o'z zimmasiga oladi: 

7.1.1.    Xizmatlarni taklif shartnomasi va Sayt tomonidan taqdim etilgan tarzda, miqdor va shartlarda tanlash va to'lash; 

7.1.2.	Foydalanuvchi vakolati doirasiga kiruvchi va Xizmatlarga kirish uchun zarur bo'lgan harakatlarni amalga oshirish (xizmatga kirish va ma'lumotlarni saqlash uchun uskunalar, elektron tashuvchilar va boshqalar mavjudligini ta'minlash); 

7.1.3.  	Qoʻshimcha kasbiy dasturni oʻzlashtirganda, oʻrta maxsus, kasb-hunar yoki oliy maʼlumotga ega boʻlgan yoki bunday maʼlumotni olishning mavjudligini tasdiqlang va quyidagi hujjatlarni taqdim eting: 

•  oddiy pasport (yashash joyidagi to'liq ism va ro'yxatdan o'tgan yoyilgan joy nusxasi); 

•    ism o'zgarganligini tasdiqlovchi hujjat, agar bunday o'zgarish yuz bergan bo'lsa (nusxasi); 

•     o'rta maxsus, kasb-hunar yoki oliy ma'lumot to'g'risidagi hujjat (nusxasi) yoki ta'lim muassasasidan Talabaning Dasturga qabul qilingan vaqtda oliy yoki o'rta maxsus kasb-hunar ma'lumotini olganligini tasdiqlovchi hujjat (nusxasi); 

•  SNILS (nusxasi); 

7.1.4.  Tanlangan Xizmatlar doirasida tadbirlar jadvali va mavjud elektron materiallar tarkibi bilan mustaqil ravishda tanishib olish; 

7.1.5.   Yetkazib Beruvchining mulkiga ehtiyot bo'lish, texnik nosozliklarni keltirib chiqarmaslik, ma'lumotlarni ruxsatsiz o'chirish va shunga o'xshash harakatlarni amalga oshirish; 

7.1.6.	Tanlangan Xizmatlar doirasidagi tadbirlar jadvaliga rioya qilish va Xizmatlarni taqdim etish doirasida taqdim etilgan taʼlim maʼlumotlari bilan ishlash boʻyicha Yetkazib beruvchining tavsiyalariga rioya qilish; 

7.1.7. O'rnatilgan muddatlarda Dastur tomonidan ko'zda tutiladigan amaliy vazifalarni bajarish; 

7.1.8.     Qoʻshimcha professional dasturni oʻrganayotganda Dasturning yakuniy sertifikatini Yetkazib Beruvchi tomonidan belgilangan muddatlarda oʻtkazish; 

7.1.9. Barcha zarur ma'lumotlar va hujjatlarni o'z vaqtida taqdim etish, ularning kontakt va shaxsiy ma'lumotlaridagi o'zgarishlar to'g'risida xabardor qilish; 

7.1.10.    Yetkazib Beruvchining ichki qoidalari va boshqa mahalliy qoidalari talablariga rioya qilish; 

7.1.11. Xizmatni to'g'ri (axloq va biznes odobi doirasida) iste'mol qilish jarayonida Yetkazib Beruvchi va boshqa shaxslar bilan muloqot qilish; 

7.1.12.   Tanlangan Xizmatni olish uchun dasturiy ta'minot va boshqa jihozlarni mustaqil ravishda sozlang, xizmatlarni ko'rsatish jarayonida erkin ma'lumot almashish imkoniyatiga ega bo'lish uchun barqaror Internet ulanishini ta'minlang. 

7.1.13.    Yetkazib Beruvchini xizmatlarni taqdim etish bilan bog'liq barcha haqiqiy holatlar to'g'risida o'z vaqtida xabardor qilish; 

7.1.14.    Yetkazib Beruvchining qonun bilan qo'riqlanadigan ma'lumotlari bilan ishlashda intellektual mulkni himoya qilish to'g'risidagi qonun hujjatlariga rioya qilish, bunday ma'lumotlardan faqat Yetkazib beruvchi tomonidan aniq ruxsat berilgan usullarda foydalanish; 

7.1.15.    Yetkazib Beruvchining mulkiga va/yoki huquqlariga yetkazilgan zararni qoplash O’zbekiston Respublikasining amaldagi qonunchiligiga muvofiq. 

7.1.16.   Shaxsiy ma'lumotlarni himoya qilish to'g'risidagi qonun hujjatlariga rioya qiling. Yetkazib beruvchi va/yoki uchinchi shaxslardan olingan ma'lumotlardan ularning manfaatlariga zarar yetkazadigan tarzda foydalanmang. 

7.2.  Foydalanuvchi quyidagilarga majbur: 

· Mazkur ofertaning talablarini bajaradi; 

· Servisga ulanuvchi vositaning axborot xavfsizligini mustaqil ravishda ta'minlaydi; 

· «PAYME” va “CLICK”  to‘lov servislaridan foydalanish orqali o‘zining layoqatligi, shuningdek «PAYME” va “CLICK”  to‘lov servislaridan firibgarlik va boshqa g‘ayriqonuniy maqsadlarda foydalanmasligini tasdiqlaydi va kafolatlaydi; 

· Yetkazib beruvchining roziligini oldindan olmasdan shartnoma bo‘yicha huquq va majburiyatlarini uchinchi shaxslarga berishga haqli emas. Shunga o‘xshash har qanday boshqa urinish haqiqiy emas deb topiladi. 

7.3.    Yetkazib beruvchi bir tomonlama mazkur Ofertaga o‘zgartirish kiritishga haqli, bunda Foydalanuvchini bu haqda tegishli o‘zgartirishlar to‘g‘risida axborot mazmundagi xabarlar, «PAYME” va “CLICK”  to‘lov servislarining interfeysi yoki SMS-xabar orqali ogohlantiradi.  

7.4.  Yetkazib Beruvchi quyidagilarni o'z zimmasiga oladi: 

7.4.1.   Saytdagi tavsif va Taklif shartnomasiga muvofiq xizmatlarning to'g'ri ko'rsatilishini tashkil etish va ta'minlash, shuningdek, Foydalanuvchining Xizmatlarga muvaffaqiyatli kirishi uchun Yetkazib Beruvchi o’z xohishiga qarab shart-sharoitlarni yaratish. 

7.4.2.     O’zbekiston Respublikasi qonunchiligida Yetkazib Beruvchining mahalliy normativ hujjatlarida belgilangan Dastur bo'yicha ta'lim olish uchun shartlarni bajargan mijozni ro'yxatdan o'tkazish. 

7.4.3.     Ro'yxatdan o'tgan mijozlarga Onlayn platforma va Telegram ijtimoiy tarmog’ida joylashtirilgan Dastur materiallaridan foydalanish imkoniyatini berish. 

7.4.4.   Tinglovchiga pullik ta'lim xizmatlarini ko'rsatish tartibi to'g'risida ma'lumot berish. 

7.4.5.   Davlat talablariga, Yetkazib Beruvchining mahalliy qoidalariga, o'quv rejasi va jadvaliga muvofiq ta'lim xizmatlarini to'g'ri ko'rsatishni tashkil etish va ta'minlash. Ta’lim jarayoniga ga oid kitoblar va qo'llanmalar  o'quv kursi dasturiga kiritilgan va ta’lim xizmatining ajralmas qismi hisoblanadi.Ushbu  yetkazib beriladigan  kitob va qo'llanmalar,jumladan uni yetkazib berishga doir xarajatlar  uchun Foydalanuvchidan alohida  to'lov  olinmaydi va bu xarajatlar o'quv kursi  tannarxiga  yoki sotish xarajatlari tarkibiga kiritiladi.Daromad olish bilan bog’liq faoliyati uchun zarur bo’lgan xarajat bo’lganligi sababli chegiriladigan xarajatlar tarkibiga kiritiladi.Kitob zarur bo’lmagan yoki kitob va  boshqa o’quv materiallari bilan ta’minlash Yetkazib beruvchining zimmasiga olinmagan holatlarda ularni Foydalanuvchi o’zi uchun o’zi mustaqil amalga oshirishi mumkin. 

7.4.6.   Foydalanuvchiga dasturni o'zlashtirish uchun barcha shart-sharoitlarni taqdim etish. 

7.4.7.   Qo'shimcha o’quv dasturni o'zlashtirgan Foydalanuvchiga yakuniy attestatsiyadan muvaffaqiyatli o'tgan taqdirda belgilangan namunadagi malaka to'g'risidagi hujjatni berish. 

7.4.8.   Qo'shimcha kasbiy dasturni o'zlashtirgan mijozga quyidagi hollarda belgilangan shakldagi o'quv sertifikati beriladi: 

•  o’quv jarayonlarida qatnashmaslik va berilgan vazifalarni o’z vaqtida bajarmaslik; 

•  o'rta kasb-hunar yoki oliy ma'lumot olish bilan parallel ravishda dasturni o'zlashtirganda. 

7.4.9.  Treninglar, seminarlar, ma'ruzalar bo'yicha o'qitish xizmatini olgan Foydalanuvchiga sertifikat berish. 

7.4.10.  Shaxsiy ma'lumotlardan va Foydalanuvchi haqidagi maxfiy ma'lumotlardan faqat Xizmatlarni taqdim etish maqsadida foydalanish, Yetkazib Beruvchi joylashgan Foydalanuvchi haqidagi hujjatlar va ma'lumotlarni uchinchi shaxslarga yubormaslik yoki ko'rsatmaslik. 

7.4.11.	Foydalanuvchining xulq-atvoriga hurmat ko'rsatish, jismoniy va ruhiy zo'ravonlikning oldini olish, mijozning vijdon erkinligi, axborot olish, o'z fikrlari va e'tiqodlarini erkin ifoda etish huquqlarini buzmaslik. 

7.4.12.   Har qanday savol tug’ilgan taqdirda Foydalanuvchiga qo'shimcha ma'lumot taqdim etish. Masalaning murakkabligi, qo'shimcha ma'lumot taqdim etish hajmi va vaqti Yetkazib Beruvchi tomonidan har bir holatda mustaqil ravishda belgilanadi. 

7.4.13.    Foydalanuvchining mulkiga yetkazilgan zararni qoplash O’zbekiston Respublikasining amaldagi qonunchiligiga muvofiq amalga oshiriladi. 

7.4.14.   Yetkazib beruvchi quyidagilarga majbur: 

· «PAYME” va “CLICK”  to‘lov servislarining uzluksiz ishlashini ta'minlashi, servislar ishidagi uzilishlar uchinchi shaxslarning aybi bo‘yicha yuzaga kelgan hollatlar bundan mustasno; 

· Shaxsga doir ma'lumotlarning maxfiyligiga rioya qilinishi, ularga noqonuniy ishlov berishning oldini olinishi, ularning yaxlitligi va saqlanishini ta'minlaydigan himoya qilish bo‘yicha huquqiy, tashkiliy va texnik choralarni ko‘radi; 

· Foydalanuvchilarga to‘lovlarni amalga oshirish imkoni mavjud «PAYME” va “CLICK”  to‘lov servislarining xizmatlarini Yetkazib beruvchilar sifatida ishtirok etuvchilar haqidagi xabarlar o‘z vaqtida Foydalanuvchini ogohlantiradi.  

7.5.  Foydalanuvchi quyidagi huquqlarga ega: 

7.5.1.   Yetkazib beruvchidan ularning bilimi, koʻnikmalari, qobiliyatlari va kompetensiyalarini baholash boʻyicha ishonchli maʼlumotlarni olish; 

7.5.2.     Dasturni ishlab chiqish uchun zarur bo'lgan Yetkazib Beruvchining mulki mahalliy me'yoriy hujjatlarda belgilangan tartibda foydalanish; 

7.5.3.   Yetkazib Beruvchidan Foydalanuvchining Xizmatlarga kirish uchun tashkiliy masalalarni hal qilishi uchun zarur bo'lgan ma'lumotlarni taqdim etishini talab qilish; 

7.5.4.  Yetkazib Beruvchi tomonidan xizmatlarni to'g'ri va o'z vaqtida taqdim etilishini talab qilish; 

7.5.5.  Agar  yetkazib Beruvchi Xizmatlarga o'z   vaqtida  kirishni ta'minlamagan bo'lsa, Foydalanuvchi Shartnomani bir tomonlama bekor qilish huquqiga ega; 

7.5.6.   Xizmatlarni taqdim etish bilan bog'liq barcha masalalar bo'yicha Yetkazib beruvchiga murojaat qilish; 

7.5.7 Xizmatlar bilan bog'liq holda ularning bilim va ko'nikmalarini baholash, shuningdek, ushbu baholash mezonlari to'g'risida to'liq va ishonchli ma'lumot olish. 

7.6.  Yetkazib Beruvchi quyidagi huquqlarga ega: 

7.6.1.   Qonun talablaridan kelib chiqib, Xizmatlarni taqdim etish shakllari va usullarini, shuningdek, Saytda joylashtirilgan ularning tavsifiga muvofiq Xizmatlarning xususiyatini mustaqil ravishda belgilash; 

7.6.2.    Mustaqil ravishda oʻquv natijalarini baholash tizimini, bunday baholash shakllari va tartibini, shuningdek sertifikatlashtirish shakllari, tartibi va davriyligini aniqlash; 

7.6.3.     O’zbekiston Respublikasi qonunlarida va Yetkazib Beruvchining mahalliy normativ hujjatlarida nazarda tutilgan asoslar bo'yicha Tinglovchini chiqarib yuborish; 

7.6.4.    Xizmatlarni taqdim etishda ishtirok etuvchi mutaxassislar tarkibini mustaqil ravishda aniqlash va ularning xohishiga koʻra funktsiyalarni ular oʻrtasida taqsimlash; 

7.6.5.  Foydalanuvchi Xizmatlarga birinchi marta kirgan paytdan boshlab xizmatlar uchun olingan haqni saqlab qoling; 

7.6.6.      O’zbekiston Respublikasining amaldagi qonunchiligiga muvofiq Foydalanuvchiga etkazilgan zararni qoplash sharti bilan Oferta shartnomasini bajarishni rad etish; 

7.6.7. Foydalanuvchidan Shartnoma bo'yicha o'z majburiyatlarini bajarish uchun zarur bo'lgan ma'lumotlarni so'rash va qabul qilish. Axborot taqdim etilmagan, to'liq bo'lmagan yoki noto'g'ri taqdim etilgan taqdirda, Yetkazib Beruvchi Shartnoma bo'yicha o'z majburiyatlarini bajarishni zarur ma'lumotlar taqdim etilgunga qadar, Yetkazib Beruvchiga hech qanday sanktsiya qo'llamasdan to'xtatib turish huquqiga ega. 

  

8.     TARAFLARNING JAVOBGARLIGI 

8.1.   Taraflar Oferta shartnomasi bo'yicha o'z majburiyatlarini bajarmaganliklari yoki lozim darajada bajarmaganliklari uchun O’zbekiston Respublikasi qonunchiligiga muvofiq javobgar bo'ladilar. 

8.2.   Yetkazib Beruvchi Yetkazib Beruvchiga bog'liq bo'lmagan sabablarga ko'ra paydo bo'lgan Foydalanuvchining tanlangan Xizmatdan foydalana olmasligi uchun javobgar emas. 

8.3.   Yetkazib beruvchi xizmatlarning Foydalanuvchining talablariga muvofiq emasligi, shuningdek Foydalanuvchi tomonidan xizmatlarni sub'ektiv baholash uchun javobgar bo'lmaydi. Bunday umidlarga rioya qilmaslik yoki salbiy subyektiv baholash Xizmatlarning noto'g'ri yoki to'liq emasligiga ishonish uchun asos bo'lmaydi. 

8.4.   Taklif shartnomasi boʻyicha majburiyatlarni bajarmaganlik yoki lozim darajada bajarmaganlik uchun etkazilgan zarar yoki jarimalar uchun kompensatsiya faqat Tarafning oqilona yozma talabi asosida toʻlanadi. 

8.5.   Zararni to'lash yoki jarimalar Taraflarni oferta shartnomasida ko'zda tutiladigan majburiyatlarni bajarishdan xalos qilmaydi. 

8.6.   Taraflar mazkur shartnomaning talablarini bajarmaganligi yoki lozim darajada bajarmaganligi uchun O‘zbekiston Respublikasi qonun hujjatlariga muvofiq javob beradilar. 

8.7.    Foydalanuvchi mazkur shartnoma bo‘yicha o‘z majburiyatlarini bajarmaganligi yoki lozim darajada bajarmaganligi natijasida vujudga kelgan har qanday zarar yoki salbiy oqibatlarga o‘zi javob beradi. 

8.8.    Foydalanuvchi xavfsiz bo‘lmagan ulanishlardan foydalangan holda, yoxud zararli dastur va ilovalar tahdidi ostida o‘zining shaxsga doir ma'lumotlarini qurilmaga kiritishida ularning xavfsizligiga to‘liq javob beradi. 

8.9.   Yetkazib beruvchi mazkur shartnoma shartlarini bajarmaganligi yoki lozim darajada bajarmaganligi uchun javob bermaydi, agar ushbu harakatlar Foydalanuvchi tomonidan shartnoma shartlarini bajarilmaganligi oqibatida sodir bo‘lgan bo‘lsa. 

8.10.   Yetkazib beruvchi Foydalanuvchida vujudga kelgan har qanday zarar uchun javob bermaydi, agar Foydalanuvchi mazkur Ofertaning shartlari, shuningdek pullik servisning pullik servislarini aktivasiya qilinishida ularning ofertalari o‘z vaqtida tanishmaganligi sababi bo‘lsa. 

8.11.   Yetkazib beruvchi mazkur shartnoma shartlarini lozim darajada bajarmaganligi uchun javob bermaydi, agar ushbu harakatlar Yetkazib beruvchining nazorat doirasiga kirmaydigan sabablarga asosan sodir bo‘lgan bo‘lsa. Yetkazib beruvchining nazorat doirasi faqat «PAYME” va “CLICK”  to‘lov servislarining ishlashi bilan cheklanib, uchinchi shaxslarning aybi bilan vujudga kelgan uzilishlarga yoxud davlat organlari yoki sud tomonidan quyilgan cheklov va taqiqlarni o‘z ichiga olmaydi. 

8.12.    Har bir Tomon ushbu shartnomada belgilangan javobgarlik cheklanganligini tan olgan holda, boshqa Tomon mazkur shartnomani tuzishni va ushbu cheklovlar taraflar o‘rtasidagi kelishuvlar uchun zarur asos ekanligini tan oladi. Bunda, Taraflarning hech biri talablarini bajarmaganligi yoki kechikganligi uchun javob bermaydi, agar ularning nazoratidan tashqaridagi har qanday sharoitlar oqibatida, shu jumladan, hukumat faoliyati yoki terroristik harakatlar, zilzilalar, yong‘inlar, toshqinlar yoki boshqa tabiiy ofatlar, ish sharoitlari bilan bog‘liq vaziyatlar, elektr ta'minotidagi uzilishlar va Internetga ulanishidagi buzilishlar kabi holatlar bo‘lsa, biroq ular bilan cheklanib qolmasdan. 

  

9.     SHARTNOMANI BEKOR QILISH 

9.  Shartnomani bekor qilish asoslari va tartibi 

9.1.   Oferta shartnomasi Taraflarning kelishuvi bilan, shuningdek qonun hujjatlarida nazarda tutilgan asoslar bo'yicha Taraflardan birining yozma iltimosiga binoan bir tomonlama tartibda bekor qilinishi mumkin. 

9.2.  Oferta shartnomasini bir tomonlama tartibda bekor qilish boshqa Tomonga bunday so‘rovni olgan kundan boshlab 15 kalendar kundan keyin Tomonning yozma iltimosiga binoan amalga oshiriladi. 

9.3.  Foydalanuvchi «PAYME” va “CLICK”  to‘lov servislaridagi akkauntini o‘chirib, mazkur shartnomani har qanday vaqtda bajarmaslikka haqli. 

9.4.    Mazkur shartnoma akkaunt uchirilgan vaqtdan boshlab bekor qilingan deb hisoblanadi. Mazkur shartnoma bekor qilinganligi «PAYME” va “CLICK”  to‘lov servislari doirasidagi to‘lov servislari bo‘yicha tuzilgan shartnomalar bekor qilinganligini anglatmaydi, agar shunaqa servislar aktivasiya qilingan bo‘lsa. 

9.5.   Foydalanuvchi mazkur Shartnomaning 10-bo‘limida ko‘rsatilgan elektron pochtaga xat yuborib, shaxsga doir ma'lumotlarga ishlov berish to‘g‘risidagi roziligini chaqirib olishga haqli. 

 

10.  KELISHMOVCHILIKLARNI KO‘RIB CHIQISH TARTIBI 

10.1.   Oferta shartnomasidan kelib chiqadigan nizolarni sudgacha hal qilish bo'yicha da'vo tartibi Taraflar uchun majburiydir. 

10.2.   Da'vo xatlari Taraflar tarafidan boshqa Tomonning manziliga olinganligi to'g'risida xabarnoma bilan buyurtma pochta orqali yuboriladi. 

10.3.  Taraflarning talabnoma xatlarini taklif shartnomasining 10.2-bandida ko'rsatilganidan boshqacha tarzda yuborishga yo'l qo'yilmaydi. 

10.4.  Da'vo xatini ko'rib chiqish muddati manzil bo'yicha oxirgi qabul qilingan kundan boshlab 10 (o'n) ish kuni hisoblanadi. 

10.5.  Oferta shartnomasidan kelib chiqadigan nizolar O’zbekiston Respublikasining amaldagi qonunchiligiga muvofiq sudda hal qilinadi. 

10.6.  Mazkur shartnomadan kelib chiquvchi har qanday nizo, muzokaralar orqali, yoxud Foydalanuvchining yozma murojaati asosida e'tiroz tartibida ko‘rib chiqilishi zarur. Murojaatni ko‘rib chiqish va uning mazmuniga quyiladigan talablar amaldagi O‘zbekiston Respublikasi qonun hujjatlari bilan belgilanadi. 

10.7.   Agar vujudga kelgan nizo e'tiroz tartibida hal etilmasa, O‘zbekiston Respublikasi amaldagi qonun hujjatlari belgilangan tartibga muvofiq javobgarning joylashgan yerdagi taalluqligi bo‘yicha sudda ko‘rib chiqilishi kerak. 

10.8.   Foydalanuvchilar bilan e'tirozlar bilan bog‘liq ishlar va texnik qo‘llab-quvvatlash xizmatlari Foydalanuvchilarga faqat so‘rovlarni qabul qilish, ularga ishlov berish va tegishli so‘rovlarga javoblarni yuborish orqali amalga oshiriladi. Foydalanuvchilarning so‘rovlari mazkur Shartnomaning 10- bo‘limida ko‘rsatilgan elektron pochta yoki telefon raqam orqali qabul qilinadi. 

 

11.  FAVQULODDA VAZIYATLAR 

11.1.   Taraflar oferta shartnomasi bo'yicha majburiyatlarni to'liq yoki qisman bajarmaganlik uchun javobgarlikdan ozod qilinadilar, agar majburiyatlarning bajarilmasligi favqulodda holatlar, jumladan: yong'in, suv toshqini, zilzila, ish tashlash, urush, jiddiy buzilishlar, internet saytlarni blokirovka qilish, da'volarni taqiqlash, davlat organlarining harakatlari yoki Taraflarning nazorati ostida bo'lmagan boshqa holatlar natijasida yuzaga kelgan bo'lsa. 

11.2.    Favqulodda holatlar tufayli oferta shartnomasi boʻyicha oʻz majburiyatlarini bajara olmagan Tomon, bu toʻgʻrisida yengib boʻlmas kuch holatlari boshlanganidan keyin 5 (besh) kalendar kundan kechiktirmay, boshqa Tomonni rasmiylashtirilgan tasdiqlovchi hujjatlarni taqdim etgan holda yozma ravishda xabardor qilishi shart. Vakolatli organlar tomonidan Ko'pchilikka ma'lum bo'lgan favqulodda holatlar tasdiqlanishi talab qilinmaydi. 

11.3.   Yetkazib Beruvchi Saytda ma'lumot joylashtirish orqali kontragentlarni favqulodda holatlar yuzaga kelganligi to'g'risida xabardor qilish huquqiga ega. Bunday bildirishnoma tegishli deb hisoblanadi. 

 

12.	BOSHQA SHARTLAR 

12.1.   To‘g‘ridan-to‘g‘ri shartnomada nazarda tutilmagan har bir narsada taraflar O‘zbekiston Respublikasining amaldagi qonunchiligini va biznes aylanmalarini boshqaradilar. 

12.2.   Ushbu taklifni qabul qilib, foydalanuvchi ushbu shartnomaning barcha shartlarini so‘zsiz qabul qilganligini tasdiqlaydi va uni bajarishni o‘z zimmasiga oladi. 

12.3.  Taraflar, agar Oferta shartnomasining biron bir qoidalari qonun hujjatlaridagi o‘zgarishlar tufayli kelajakda o‘z kuchini yo‘qotsa, Oferta shartnomasining qolgan qoidalari o‘z kuchini saqlab qolishini va Taraflar uchun majburiy bo‘lishini tan oladi. 

12.4.  Taraflar xizmatlarni qabul qilish va topshirish dalolatnomasini imzolashning hojati yo'qligi to'g'risida kelishib oldilar. Shu bilan birga, agar Foydalanuvchi xizmatlarga birinchi marta kirgan kundan boshlab uch kalendar kun ichida ko'rsatilgan xizmatlarning sifati va ko'lami bo'yicha yozma da'volar kelib tushmasa, Yetkazib Beruvchi Foydalanuvchidan olingan haqni olish huquqiga ega deb e'tirof etiladi. To'liq hajmda, bu Taraflar tomonidan topshirish va qabul qilish sertifikati xizmatlarini imzolashda tenglashtiriladi. Agar kerak bo'lsa, Yetkazib Beruvchi 12.5-bandga muvofiq Foydalanuvchining Xizmatlarga kirishini tasdiqlovchi dalillarga asoslanib, bir tomonlama tartibda bunday dalolatnoma tuzishga haqli. 

12.5.   Shaxsiy ma'lumotlarni qabul qilish va qayta ishlashda taraflar O'zbekiston Respublikasining «Shaxsga doir ma’lumotlarni himoya qilish to'g'risida»gi Qonuni hujjatlari talablariga, shu jumladan shaxsiy ma'lumotlarni himoya qilishga qodirligini tasdiqlaydi va kafolatlaydi. O'zbekiston Respublikasining «Shaxsga doir ma’lumotlarni himoya qilish to'g'risida»gi Qonunida nazarda tutilgan talablarga, shaxsiy ma'lumotlarni qayta ishlash tamoyillari va qoidalariga rioya etilishini ta'minlaydi. 

12.6.  Taraflarning har biri boshqa Tomonga Oferta shartnomasini tuzish va bajarish va xizmatlarni taqdim etish uchun shaxsiy ma'lumotlarini qayta ishlashga rozilik beradi. 

12.7.  Taraflar Oferta shartnomasini tuzish va bajarish jarayonida uchinchi shaxslarning shaxsiy maʼlumotlarini taqdim etishda tegishli Tomon qonun talablariga muvofiq uzatilgan shaxsiy maʼlumotlar subʼyektlarining roziligini olishi kerakligini kafolatlaydi. 

 `}
            </pre>
          </div>
        </article>
      </main>

      {/* Print styles */}
      <style jsx global>{`
        @media print {
          header,
          .print:hidden {
            display: none !important;
          }
          main {
            padding: 0 !important;
          }
          article {
            box-shadow: none !important;
            border: none !important;
          }
        }
      `}</style>
    </div>
  );
}
