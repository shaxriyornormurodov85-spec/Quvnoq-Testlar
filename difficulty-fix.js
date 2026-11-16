/* Ensures the Qiyin level uses genuinely advanced questions only. */
(function () {
  const hardQuestions = {
    ona_tili: [
      { question: "Qaysi gapda sifatdosh qatnashgan?", options: ["Kelgan mehmon kutib olindi.", "Mehmon tez keldi.", "U kitobni o‘qidi.", "Bolalar bog‘da."], answer: "Kelgan mehmon kutib olindi." },
      { question: "Qaysi qatorda ravishdosh qo‘shimchasi berilgan?", options: ["-ib", "-chi", "-lik", "-zor"], answer: "-ib" },
      { question: "“Kitobxonlarimizdan” so‘zida nechta qo‘shimcha bor?", options: ["3 ta", "2 ta", "4 ta", "1 ta"], answer: "3 ta" },
      { question: "Qaysi gap qo‘shma gap hisoblanadi?", options: ["Quyosh botdi va havo salqinlashdi.", "Quyoshli kun.", "Men kitob o‘qidim.", "Katta va chiroyli bino."], answer: "Quyosh botdi va havo salqinlashdi." },
      { question: "“O‘qituvchi” so‘zining yasalish asosi qaysi?", options: ["O‘qit", "O‘qi", "O‘q", "O‘qituv"], answer: "O‘qit" }
    ],
    adabiyot: [
      { question: "Alisher Navoiyning “Xamsa”siga kiruvchi birinchi doston qaysi?", options: ["Hayrat ul-abror", "Farhod va Shirin", "Layli va Majnun", "Saddi Iskandariy"], answer: "Hayrat ul-abror" },
      { question: "“Qutadg‘u bilig” asarining muallifi kim?", options: ["Yusuf Xos Hojib", "Mahmud Koshg‘ariy", "Ahmad Yassaviy", "Alisher Navoiy"], answer: "Yusuf Xos Hojib" },
      { question: "Cho‘lponning “Kecha va kunduz” asari qaysi janrga mansub?", options: ["Roman", "Doston", "Masal", "Komediya"], answer: "Roman" },
      { question: "Aruz vazni qaysi adabiyot an’anasi bilan bog‘liq?", options: ["Sharq mumtoz she’riyati", "Faqat xalq ertaklari", "Zamonaviy drama", "Ilmiy maqola"], answer: "Sharq mumtoz she’riyati" },
      { question: "“Devonu lug‘otit turk” asarini kim yozgan?", options: ["Mahmud Koshg‘ariy", "Yusuf Xos Hojib", "Ahmad Yugnakiy", "Rabg‘uziy"], answer: "Mahmud Koshg‘ariy" }
    ],
    tarix: [
      { question: "Amir Temur davlatining poytaxti sifatida qaysi shahar yuksalgan?", options: ["Samarqand", "Toshkent", "Xiva", "Qo‘qon"], answer: "Samarqand" },
      { question: "Jadidchilik harakatining asosiy maqsadlaridan biri nima edi?", options: ["Yangi usul ta’limini yoyish", "Faqat harbiy yurishlar qilish", "Savdo yo‘llarini yopish", "Eski tangalarni bekor qilish"], answer: "Yangi usul ta’limini yoyish" },
      { question: "Temuriylar davrida astronomiya rivojiga katta hissa qo‘shgan hukmdor kim?", options: ["Mirzo Ulug‘bek", "Shayboniyxon", "Abdullaxon II", "Nodirshoh"], answer: "Mirzo Ulug‘bek" },
      { question: "“Avesto” qaysi qadimgi dinning muqaddas kitobi hisoblanadi?", options: ["Zardushtiylik", "Buddaviylik", "Yahudiylik", "Konfutsiylik"], answer: "Zardushtiylik" },
      { question: "O‘zbekiston BMTga qachon a’zo bo‘lgan?", options: ["1992-yil 2-mart", "1991-yil 31-avgust", "1992-yil 8-dekabr", "1993-yil 1-sentabr"], answer: "1992-yil 2-mart" }
    ],
    geografiya: [
      { question: "Atmosferaning ob-havo hodisalari kuzatiladigan eng quyi qatlami qaysi?", options: ["Troposfera", "Stratosfera", "Mezosfera", "Termosfera"], answer: "Troposfera" },
      { question: "Daryoning suv sarfi odatda qaysi birlikda o‘lchanadi?", options: ["m³/s", "km/soat", "kg/m²", "°C"], answer: "m³/s" },
      { question: "O‘zbekistonning eng yirik cho‘llaridan biri qaysi?", options: ["Qizilqum", "Sahroi Kabir", "Gobi", "Atakama"], answer: "Qizilqum" },
      { question: "Tektonik plitalar to‘qnashadigan hududlarda ko‘pincha nima yuz beradi?", options: ["Zilzila va tog‘ hosil bo‘lishi", "Doimiy muzlik erishi", "Tropik siklonlar", "Daryo deltasi kengayishi"], answer: "Zilzila va tog‘ hosil bo‘lishi" },
      { question: "Geografik kenglik qaysi chiziqdan boshlab hisoblanadi?", options: ["Ekvator", "Bosh meridian", "Saraton tropigi", "Shimoliy qutb doirasi"], answer: "Ekvator" }
    ],
    kimyo: [
      { question: "H₂SO₄ tarkibidagi oltingugurtning oksidlanish darajasi nechaga teng?", options: ["+6", "+4", "+2", "−2"], answer: "+6" },
      { question: "1 mol modda tarkibidagi zarrachalar soni qaysi doimiylik bilan ifodalanadi?", options: ["Avogadro doimiysi", "Faradey doimiysi", "Gaz doimiysi", "Plank doimiysi"], answer: "Avogadro doimiysi" },
      { question: "Katalizator kimyoviy reaksiyaga qanday ta’sir ko‘rsatadi?", options: ["Reaksiya tezligini o‘zgartiradi, o‘zi sarflanmaydi", "Muvozanat konstantasini doim oshiradi", "Mahsulot massasini yaratadi", "Reaksiyani har doim to‘xtatadi"], answer: "Reaksiya tezligini o‘zgartiradi, o‘zi sarflanmaydi" },
      { question: "NaOH eritmasi qanday muhitga ega?", options: ["Ishqoriy", "Kislotali", "Neytral", "Faqat gazsimon"], answer: "Ishqoriy" },
      { question: "Metanning molekulyar formulasi qaysi?", options: ["CH₄", "C₂H₆", "C₂H₄", "CH₃OH"], answer: "CH₄" }
    ],
    huquq: [
      { question: "Hokimiyatlar bo‘linishi prinsipiga ko‘ra davlat hokimiyati qaysi tarmoqlarga ajratiladi?", options: ["Qonun chiqaruvchi, ijro etuvchi va sud", "Markaziy va mahalliy", "Davlat va xususiy", "Ichki va tashqi"], answer: "Qonun chiqaruvchi, ijro etuvchi va sud" },
      { question: "Konstitutsiyaning oliy yuridik kuchi nimani anglatadi?", options: ["Barcha qonun va hujjatlar unga zid bo‘lmasligi kerak", "U faqat tavsiya beradi", "U faqat sudlarga tegishli", "Uni oddiy qaror bekor qiladi"], answer: "Barcha qonun va hujjatlar unga zid bo‘lmasligi kerak" },
      { question: "Huquqbuzarlikning muhim belgilaridan biri qaysi?", options: ["Aybli va huquqqa xilof xatti-harakat", "Faqat fikr bildirish", "Har qanday xato", "Tasodifiy hodisa"], answer: "Aybli va huquqqa xilof xatti-harakat" },
      { question: "Fuqarolik huquqida shartnoma nima?", options: ["Tomonlarning huquq va majburiyatlarini belgilovchi kelishuv", "Faqat og‘zaki maslahat", "Sud hukmi", "Davlat ramzi"], answer: "Tomonlarning huquq va majburiyatlarini belgilovchi kelishuv" },
      { question: "Aybsizlik prezumpsiyasi nimani bildiradi?", options: ["Aybi qonuniy tartibda isbotlanmaguncha shaxs aybsiz hisoblanadi", "Har kim aybdor hisoblanadi", "Faqat guvoh aybsiz bo‘ladi", "Jazo dalilsiz belgilanadi"], answer: "Aybi qonuniy tartibda isbotlanmaguncha shaxs aybsiz hisoblanadi" }
    ],
    tarbiya: [
      { question: "Tanqidiy fikrlashning muhim bosqichi qaysi?", options: ["Dalillarni tekshirib, xulosani asoslash", "Birinchi eshitgan gapga ishonish", "Faqat hissiyotga tayanish", "Qarama-qarshi fikrni tinglamaslik"], answer: "Dalillarni tekshirib, xulosani asoslash" },
      { question: "Nizoni konstruktiv hal etishning eng maqbul yo‘li qaysi?", options: ["Tomonlar manfaatini tinglab, murosa izlash", "Aybdorni darhol haqoratlash", "Muammoni yashirish", "Zo‘ravonlik ishlatish"], answer: "Tomonlar manfaatini tinglab, murosa izlash" },
      { question: "Shaxsiy mas’uliyat nimani anglatadi?", options: ["O‘z qarori va harakati oqibatini zimmasiga olish", "Barcha aybni boshqalarga yuklash", "Qoidalarga amal qilmaslik", "Vazifadan qochish"], answer: "O‘z qarori va harakati oqibatini zimmasiga olish" },
      { question: "Raqamli xavfsizlikda kuchli parol qanday bo‘lishi kerak?", options: ["Uzun, noyob va taxmin qilish qiyin", "Faqat ism va tug‘ilgan yil", "Hamma joyda bir xil", "12345678"], answer: "Uzun, noyob va taxmin qilish qiyin" },
      { question: "Manbani tekshirish nima uchun zarur?", options: ["Noto‘g‘ri axborot tarqalishining oldini olish uchun", "Xabarni tezroq ulashish uchun", "Sarlavhani chiroyli qilish uchun", "Reklamani ko‘paytirish uchun"], answer: "Noto‘g‘ri axborot tarqalishining oldini olish uchun" }
    ],
    jismoniy: [
      { question: "Aerob mashqlarda energiya ishlab chiqarish asosan qaysi jarayonga tayanadi?", options: ["Kislorod ishtirokidagi energiya almashinuvi", "Faqat fosfagen tizimi", "Sut kislotasining to‘planishi", "Oqsil parchalanishining to‘xtashi"], answer: "Kislorod ishtirokidagi energiya almashinuvi" },
      { question: "Yuklama hajmi va intensivligi mashg‘ulotda nimani belgilaydi?", options: ["Mashq miqdori va bajarish zo‘riqishini", "Faqat sport kiyimini", "Faqat tana haroratini", "Faqat mashg‘ulot joyini"], answer: "Mashq miqdori va bajarish zo‘riqishini" },
      { question: "Interval mashg‘ulotining asosiy xususiyati qaysi?", options: ["Yuklama va tiklanish davrlarining almashishi", "Faqat uzluksiz dam olish", "Faqat cho‘zilish", "Har doim bir xil tezlikda yurish"], answer: "Yuklama va tiklanish davrlarining almashishi" },
      { question: "Sportda koordinatsiya qobiliyati nimani anglatadi?", options: ["Harakatlarni aniq va uyg‘un boshqarish", "Faqat maksimal kuch", "Faqat uzoq masofaga yugurish", "Faqat tana vazni"], answer: "Harakatlarni aniq va uyg‘un boshqarish" },
      { question: "Mashqdan keyingi tiklanish nima uchun muhim?", options: ["Organizmning moslashishi va jarohat xavfini kamaytirish uchun", "Charchoqni ataylab oshirish uchun", "Suv ichishni cheklash uchun", "Uyquni kamaytirish uchun"], answer: "Organizmning moslashishi va jarohat xavfini kamaytirish uchun" }
    ]
  };

  const originalGetQuestions = window.getQuestionsForDifficulty;
  window.getQuestionsForDifficulty = function () {
    if (state.selectedDifficulty !== 'qiyin') {
      return originalGetQuestions.apply(this, arguments);
    }

    const subject = state.selectedSubject;
    if (hardQuestions[subject]) return hardQuestions[subject].slice();

    const bank = questionBank[subject];
    const basicTexts = new Set((bank && bank.basic ? bank.basic : []).map((item) => item.question));
    const advanced = bank && bank.advanced ? bank.advanced : [];
    const advancedOnly = advanced.filter((item) => !basicTexts.has(item.question));
    const gradeQuestions = originalGetQuestions.apply(this, arguments)
      .filter((item) => item && item.question && !basicTexts.has(item.question));
    const combined = [...advancedOnly, ...gradeQuestions];
    const seen = new Set();
    return combined.filter((item) => {
      if (seen.has(item.question)) return false;
      seen.add(item.question);
      return true;
    });
  };
})();
