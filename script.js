const questionBank = {
  matematika: {
    basic: [
      { question: '3 × 7 necha bo\'ladi?', options: ['18', '20', '21', '24'], answer: '21' },
      { question: 'Qaysi son juft?', options: ['15', '17', '18', '19'], answer: '18' },
      { question: '40 ÷ 5 necha?', options: ['7', '8', '9', '10'], answer: '8' },
      { question: '10 + 15 = ?', options: ['20', '23', '25', '30'], answer: '25' },
      { question: '9 - 4 = ?', options: ['3', '4', '5', '6'], answer: '5' },
      { question: '12 + 8 = ?', options: ['18', '19', '20', '21'], answer: '20' },
      { question: 'Qaysi son eng katta?', options: ['12', '23', '19', '17'], answer: '23' },
      { question: '8 + 7 = ?', options: ['13', '14', '15', '16'], answer: '15' },
      { question: '4 × 5 = ?', options: ['16', '18', '20', '22'], answer: '20' },
      { question: '18 - 9 = ?', options: ['7', '8', '9', '10'], answer: '9' }
    ],
    advanced: [
      { question: '25% ni oddiy kasr ko\'rinishida ifodalang.', options: ['1/4', '1/2', '2/5', '3/4'], answer: '1/4' },
      { question: 'Kvadratning tomoni 6 sm bo\'lsa, yuzi qancha?', options: ['12', '24', '36', '48'], answer: '36' },
      { question: '2x = 14 bo\'lsa, x ning qiymati nechaga teng?', options: ['6', '7', '8', '9'], answer: '7' },
      { question: '1/2 + 1/4 = ?', options: ['1/3', '2/4', '3/4', '1'], answer: '3/4' },
      { question: '12 × 11 = ?', options: ['121', '122', '132', '144'], answer: '132' },
      { question: 'x² - 9 = 0 tenglamaning ildizlari yig\'indisi qancha?', options: ['0', '3', '6', '9'], answer: '0' },
      { question: 'Aylananing radiusi 7 bo\'lsa, uzunligi qancha? (π≈3.14)', options: ['21.98', '43.96', '49', '154'], answer: '43.96' },
      { question: '5! = ?', options: ['20', '60', '120', '150'], answer: '120' },
      { question: 'Agar a = 3, b = 5 bo\'lsa, a² + b² = ?', options: ['15', '25', '34', '64'], answer: '34' },
      { question: '17 ning 20% i nechaga teng?', options: ['2.4', '3.4', '4.0', '5.0'], answer: '3.4' }
    ]
  },
  biologiya: {
    basic: [
      { question: 'Qaysi hayvon suvda yashaydi?', options: ['Baliq', 'Ot', 'Bo\'ri', 'Qoplon'], answer: 'Baliq' },
      { question: 'O\'simliklarning oziq ishlab chiqarish organi nima?', options: ['Yurak', 'Ildiz', 'Barg', 'Tomoq'], answer: 'Barg' },
      { question: 'Qaysi organizm fotosintez qiladi?', options: ['O\'simlik', 'Konditer', 'Zararkunanda', 'Mushuk'], answer: 'O\'simlik' },
      { question: 'Yurak qaysi a\'zodir?', options: ['Harakat organi', 'Qon aylanish organi', 'Nafas organi', 'Bilvosita organ'], answer: 'Qon aylanish organi' },
      { question: 'Qaysi hayvon qush emas?', options: ['Tulki', 'Qarg\'a', 'Qaldirg\'och', 'Burgut'], answer: 'Tulki' },
      { question: 'O\'simliklar qayerdan suv oladi?', options: ['Ildizdan', 'Bargdan', 'Guldan', 'Mevadan'], answer: 'Ildizdan' },
      { question: 'Tayanch to\'qima nima uchun kerak?', options: ['Yordam berish', 'Qonni yetkazish', 'Yurak urishi', 'Qayta ishlash'], answer: 'Yordam berish' },
      { question: 'Qaysi a\'zo nafas oladi?', options: ['O\'pka', 'Barmoq', 'Bo\'yin', 'Quloq'], answer: 'O\'pka' },
      { question: 'Baliqlar nima bilan nafas oladi?', options: ['G\'ildirak bilan', 'G\'ildirak', 'G\'ildirak qobiqlar bilan', 'G\'ildiraklarning osti'], answer: 'G\'ildirak bilan' },
      { question: 'O\'simliklarning yashash muhiti qaysi?', options: ['Yer', 'Suv', 'Havo', 'Barchasi'], answer: 'Barchasi' }
    ],
    advanced: [
      { question: 'Qanday hujayra jarayonida o\'simliklar glyukoza hosil qiladi?', options: ['Fotosintez', 'Nafas olish', 'Hayot sikli', 'Ko\'payish'], answer: 'Fotosintez' },
      { question: 'Aql bovar qilmaydigan qaysi a\'zo qon pompasi vazifasini bajaradi?', options: ['Yurak', 'O\'pka', 'Buyrak', 'Jigar'], answer: 'Yurak' },
      { question: 'Qaysi organimiz ovqat hazm qilishda asosiy rol oynaydi?', options: ['Jigar', 'Oshqozon', 'Buyrak', 'Miya'], answer: 'Oshqozon' },
      { question: 'Yurak urishi nima uchun kerak?', options: ['Qonni harakatga keltirish', 'Ovqatni hazm qilish', 'Nafas olish', 'Uyqu'], answer: 'Qonni harakatga keltirish' },
      { question: 'DNK qaysi ferment yordamida ko\'payadi?', options: ['Polimeraza', 'Lipaza', 'Amilaza', 'Pepsin'], answer: 'Polimeraza' },
      { question: 'Qaysi hujayra organoidi energiya ishlab chiqaradi?', options: ['Mitoxondriya', 'Yadro', 'Golji majmuasi', 'Lizosoma'], answer: 'Mitoxondriya' },
      { question: 'Barglardagi stomatalar vazifasi nima?', options: ['Gaz almashinuvi', 'Qon aylanish', 'Hujayra bo\'linishi', 'Energiya ishlab chiqarish'], answer: 'Gaz almashinuvi' },
      { question: 'Havo orqali nafas oladigan organizmlar qanday jarayonni amalga oshiradi?', options: ['Nafas olish', 'Fotosintez', 'Chet elga chiqish', 'Ko\'payish'], answer: 'Nafas olish' },
      { question: 'Qaysi organizmning tana hujayralari plastidga ega?', options: ['O\'simlik', 'Zamburug\'', 'Bakteriya', 'Hayvon'], answer: 'O\'simlik' },
      { question: 'Qaysi organ hujayralarda ATP hosil qiladi?', options: ['Mitoxondriya', 'Yadro', 'Ribosoma', 'Lizosoma'], answer: 'Mitoxondriya' }
    ]
  },
  informatika: {
    basic: [
      { question: 'Qaysi buyruq ekranga yozuv chiqaradi?', options: ['print()', 'show()', 'type()', 'echo()'], answer: 'print()' },
      { question: 'HTML da eng katta sarlavha tegini tanlang.', options: ['<h1>', '<p>', '<h3>', '<title>'], answer: '<h1>' },
      { question: 'Qaysi kodning ma\'nosi “faqat qaysi sahifa”?', options: ['CSS', 'HTML', 'JS', 'PNG'], answer: 'HTML' },
      { question: 'Qaysi buyruq faylni saqlashga yordam beradi?', options: ['save()', 'write()', 'download()', 'open()'], answer: 'save()' },
      { question: 'Qaysi dasturlash tili web sahifalarga interfaol xususiyat beradi?', options: ['JavaScript', 'CSS', 'HTML', 'Python'], answer: 'JavaScript' },
      { question: 'Qaysi ma\'lumot turi “haqiqat/yolg\'on” ni saqlaydi?', options: ['boolean', 'string', 'number', 'object'], answer: 'boolean' },
      { question: 'Qaysi so\'z veb sahifaning uslubini boshqaradi?', options: ['CSS', 'HTML', 'JS', 'XML'], answer: 'CSS' },
      { question: 'Massivda elementlarni sanash uchun ishlatiladi?', options: ['length', 'count', 'size', 'sum'], answer: 'length' },
      { question: 'Qaysi operator tenglikni tekshiradi?', options: ['==', '=', '===', '!='], answer: '==' },
      { question: 'Qaysi buyruq ekranga chiqadi?', options: ['alert()', 'show()', 'scroll()', 'move()'], answer: 'alert()' }
    ],
    advanced: [
      { question: 'Qaysi format veb sahifa dizaynini boshqaradi?', options: ['CSS', 'JS', 'HTML', 'XML'], answer: 'CSS' },
      { question: 'Qaysi operator tenglikni tekshiradi?', options: ['==', '=', '===', '!='], answer: '==' },
      { question: 'Massivda elementlarni sanash uchun ishlatiladigan xususiyat?', options: ['length', 'size', 'count', 'total'], answer: 'length' },
      { question: 'Qaysi ma\'lumot turi “haqiqat/yolg\'on” ni saqlaydi?', options: ['boolean', 'string', 'number', 'object'], answer: 'boolean' },
      { question: 'JavaScriptda takrorlash uchun qaysi tsikl ishlatiladi?', options: ['for', 'if', 'switch', 'const'], answer: 'for' },
      { question: 'Qaysi usul massivni tartiblangan qilib qaytaradi?', options: ['sort()', 'join()', 'map()', 'split()'], answer: 'sort()' },
      { question: 'Qaysi funksiya ma\'lumotni JSON formatga aylantiradi?', options: ['JSON.stringify()', 'JSON.parse()', 'Math.random()', 'Array.pop()'], answer: 'JSON.stringify()' },
      { question: 'DOM deganda nima tushuniladi?', options: ['Dokument obyekt modeli', 'Dastur ma\'lumot modeli', 'Dastur o\'zgartirish mexanizmi', 'Down object manager'], answer: 'Dokument obyekt modeli' },
      { question: 'Qaysi operator “va” ma\'nosi bilan ishlatiladi?', options: ['&&', '||', '==', '!='], answer: '&&' },
      { question: 'Qaysi qiymat JSda falsy bo\'ladi?', options: ['0', '""', 'false', 'barchasi'], answer: 'barchasi' }
    ]
  },
  english: {
    basic: [
      { question: 'Hello means?', options: ['Salom', 'Yaxshi', 'Uy', 'Dars'], answer: 'Salom' },
      { question: 'Book in Uzbek?', options: ['Kitob', 'Maktab', 'Yorug\'lik', 'Qalam'], answer: 'Kitob' },
      { question: 'One + two = ?', options: ['Three', 'Four', 'Five', 'Two'], answer: 'Three' },
      { question: 'Dog = ?', options: ['It', 'Mushuk', 'Sigir', 'Quyon'], answer: 'It' },
      { question: 'I am happy means?', options: ['Men baxtliman', 'Men charchadim', 'Men uydayman', 'Men uydaman'], answer: 'Men baxtliman' },
      { question: 'School means?', options: ['Maktab', 'Uy', 'Bog\'', 'Gul'], answer: 'Maktab' },
      { question: 'What is your name?', options: ['Ismingiz nima?', 'Qayerdasiz?', 'Yoshingiz nechada?', 'Nega?'], answer: 'Ismingiz nima?' },
      { question: 'Good morning = ?', options: ['Xayrli tong', 'Xayrli kech', 'Salom', 'Yaxshimusiz'], answer: 'Xayrli tong' },
      { question: 'Apple = ?', options: ['Olma', 'Anor', 'Uzum', 'Nok'], answer: 'Olma' },
      { question: 'How are you? = ?', options: ['Qalaysiz?', 'Kim siz?', 'Nima qilyapsiz?', 'Yaxshimisiz?'], answer: 'Qalaysiz?' }
    ],
    advanced: [
      { question: 'I have done my homework. Meaning?', options: ['Uy vazifasini qildim', 'Maktabga ketdim', 'Uyquga ketdim', 'Test ishladim'], answer: 'Uy vazifasini qildim' },
      { question: 'She goes to school every day.', options: ['U har kuni maktabga boradi', 'U maktabda ishlaydi', 'U har kuni uyda turadi', 'U maktabga bormaydi'], answer: 'U har kuni maktabga boradi' },
      { question: 'By the way = ?', options: ['Aytmoqchimanki', 'Kechirasiz', 'Tasodifan', 'Yaxshilab'], answer: 'Aytmoqchimanki' },
      { question: 'We are studying English.', options: ['Biz ingliz tilini o\'rganmoqdamiz', 'Biz rus tilini bilamiz', 'Biz sport bilan shug\'ullanamiz', 'Biz uyga keldik'], answer: 'Biz ingliz tilini o\'rganmoqdamiz' },
      { question: 'The opposite of “expensive” is?', options: ['Cheap', 'Large', 'Small', 'Fast'], answer: 'Cheap' },
      { question: 'Choose correct sentence: “He ____ a doctor.”', options: ['is', 'am', 'are', 'be'], answer: 'is' },
      { question: 'My mother is ___ teacher.', options: ['a', 'an', 'the', '-'], answer: 'a' },
      { question: 'Which one is correct?', options: ['I have two books', 'I has two books', 'I am two books', 'I two books'], answer: 'I have two books' },
      { question: 'Translate: “Men kelaman.”', options: ['I come', 'I am coming', 'I will come', 'I came'], answer: 'I am coming' },
      { question: 'Choose future form: “She ___ tomorrow.”', options: ['will go', 'goes', 'went', 'going'], answer: 'will go' }
    ]
  },
  russian: {
    basic: [
      { question: 'Привет = ?', options: ['Salom', 'Yaxshi', 'Maktab', 'Uy'], answer: 'Salom' },
      { question: 'Книга = ?', options: ['Kitob', 'Dars', 'Parda', 'Maqola'], answer: 'Kitob' },
      { question: 'Я = ?', options: ['Men', 'Sen', 'U', 'Biz'], answer: 'Men' },
      { question: 'Дом = ?', options: ['Uy', 'Maktab', 'Daryo', 'Bog\''], answer: 'Uy' },
      { question: 'Хорошо = ?', options: ['Yaxshi', 'Yomon', 'Tez', 'Sovuq'], answer: 'Yaxshi' },
      { question: 'Школа = ?', options: ['Maktab', 'Bog\'', 'Ko\'cha', 'Piyoda'], answer: 'Maktab' },
      { question: 'День = ?', options: ['Kun', 'Oqshom', 'Yil', 'Tush'], answer: 'Kun' },
      { question: 'Стол = ?', options: ['Stol', 'Stul', 'Oyna', 'Eshik'], answer: 'Stol' },
      { question: 'Молоко = ?', options: ['Sut', 'Yog\'', 'Un', 'Piyoz'], answer: 'Sut' },
      { question: 'Спасибо = ?', options: ['Rahmat', 'Sizga', 'Qaytib', 'Yaxshilik'], answer: 'Rahmat' }
    ],
    advanced: [
      { question: 'Я учусь в школе. Meaning?', options: ['Men maktabda o\'rganaman', 'Men uyda yashayman', 'Men ishlayman', 'Men uxlayman'], answer: 'Men maktabda o\'rganaman' },
      { question: 'Где ты живёшь? = ?', options: ['Qayerda yashaysiz?', 'Nima qilyapsiz?', 'Qachon kelasiz?', 'Kim siz?'], answer: 'Qayerda yashaysiz?' },
      { question: 'Сегодня холодно = ?', options: ['Bugun sovuq', 'Bugun issiq', 'Bugun yaxshi', 'Bugun marta'], answer: 'Bugun sovuq' },
      { question: 'Моя сестра = ?', options: ['Mening singlim', 'Mening ukam', 'Mening otam', 'Mening onam'], answer: 'Mening singlim' },
      { question: 'Они идут в школу = ?', options: ['Ular maktabga ketmoqdalar', 'Ular uydalar', 'Ular ishlaydilar', 'Ular uyquga ketishdi'], answer: 'Ular maktabga ketmoqdalar' },
      { question: 'Я люблю читать книги = ?', options: ['Men kitob o\'qishni yaxshi ko\'raman', 'Men o\'ramayman', 'Men yozishni bilmiman', 'Men yura olmayman'], answer: 'Men kitob o\'qishni yaxshi ko\'raman' },
      { question: 'Завтра = ?', options: ['Ertaga', 'Bugun', 'Kecha', 'Hozir'], answer: 'Ertaga' },
      { question: 'Много = ?', options: ['Ko\'p', 'Kam', 'Yaxshi', 'Tog\'ri'], answer: 'Ko\'p' },
      { question: 'Пожалуйста = ?', options: ['Iltimos', 'Rahmat', 'Tushuntirish', 'Salom'], answer: 'Iltimos' },
      { question: 'Перевод: “Men ishlayman.” = ?', options: ['Я работаю', 'Я иду', 'Я ем', 'Я сплю'], answer: 'Я работаю' }
    ]
  },
  iq: {
    basic: [
      { question: 'Agar 2 + 2 = 4 bo\'lsa, 4 + 4 = ?', options: ['6', '8', '10', '12'], answer: '8' },
      { question: 'Qaysi son ketma-ketlikda notog\'ri: 2,4,6,8,11?', options: ['8', '6', '11', '2'], answer: '11' },
      { question: 'Agar bola 3 ta olma oldi, 2 ta yedi, qolganlari nechta?', options: ['0', '1', '2', '3'], answer: '1' },
      { question: 'Bir quti ichida 10 ta tugma bor. 3 ta olib ketildi. Qolganlari nechta?', options: ['6', '7', '8', '9'], answer: '7' },
      { question: 'Qaysi rasm mantiqiy: 1,3,5,7, ?', options: ['8', '9', '10', '11'], answer: '9' },
      { question: 'Agar A B, B C, C D bo\'lsa, eng oxirgi nima?', options: ['D', 'B', 'A', 'C'], answer: 'D' },
      { question: 'Toping: 10, 20, 30, 40, ?', options: ['50', '45', '60', '80'], answer: '50' },
      { question: 'Qaysi so\'z to\'g\'ri: Kichik → katta?', options: ['Katta', 'Yengil', 'Yosh', 'Sovuq'], answer: 'Katta' },
      { question: 'Nima uchun 3 ta quyon 2 ta quyon bilan 5 bo\'ladi?', options: ['Mantiqiy', 'Qisqa', 'Aniq', 'Bunday yo\'q'], answer: 'Mantiqiy' },
      { question: 'Mantiqiy ketma-ketlik: 5,10,15,20, ?', options: ['25', '30', '35', '40'], answer: '25' }
    ],
    advanced: [
      { question: 'Qaysi son to\'g\'ri: 2, 6, 12, 20, ?', options: ['28', '30', '32', '36'], answer: '30' },
      { question: 'Agar har bir qadam 3 marta ortsa, 4 qadam bunda nechchi bo\'ladi?', options: ['12', '9', '16', '81'], answer: '12' },
      { question: 'Qaysi ketma-ketlik mantiqiy: 1,4,9,16,?', options: ['25', '20', '18', '22'], answer: '25' },
      { question: 'Bir shaxs 5 soat ishladi, 2 soat dam oldi. Jami vaqti?', options: ['7', '5', '2', '4'], answer: '7' },
      { question: 'Agar 3 ta quti 9 kg bo\'lsa, 1 quti necha kg?', options: ['2', '3', '4', '6'], answer: '3' },
      { question: 'Qaysi son to\'g\'ri: 7,14,21,28,?', options: ['35', '36', '42', '49'], answer: '35' },
      { question: 'Piramida qoidasi: 1,3,6,10,?', options: ['15', '12', '14', '18'], answer: '15' },
      { question: 'Agar barcha qo\'shuvchilar bilan 16 bo\'lsa, 4+4+4+4 = ?', options: ['16', '12', '20', '8'], answer: '16' },
      { question: 'Nima uchun 20 dan 5 ni ayirib, 15 qoladi?', options: ['Mantiq', 'Aqldan', 'Uchun', 'Qisqa'], answer: 'Mantiq' },
      { question: 'Qaysi raqam ketma-ketlikni to\'ldiradi: 1,2,4,8,16, ?', options: ['32', '24', '20', '18'], answer: '32' }
    ]
  }
};

const state = {
  selectedSubject: null,
  selectedMode: null,
  selectedDifficulty: null,
  questions: [],
  round: 0,
  scores: { p1: 0, p2: 0 },
  timer: 25,
  timerId: null,
  answered: { p1: false, p2: false },
  roundQuestions: { p1: null, p2: null }
};

const ui = {
  screens: {
    start: document.getElementById('startScreen'),
    mode: document.getElementById('modeScreen'),
    difficulty: document.getElementById('difficultyScreen'),
    game: document.getElementById('gameScreen'),
    result: document.getElementById('resultScreen')
  },
  statusText: document.getElementById('statusText'),
  subjectGrid: document.getElementById('subjectGrid'),
  continueToMode: document.getElementById('continueToMode'),
  modeGrid: document.getElementById('modeGrid'),
  difficultyGrid: document.getElementById('difficultyGrid'),
  subjectLabel: document.getElementById('subjectLabel'),
  questionTag: document.getElementById('questionTag'),
  questionText: document.getElementById('questionText'),
  roundLabel: document.getElementById('roundLabel'),
  timeLabel: document.getElementById('timeLabel'),
  versusBoard: document.getElementById('versusBoard'),
  winnerTitle: document.getElementById('winnerTitle'),
  finalScore: document.getElementById('finalScore'),
  resultSummary: document.getElementById('resultSummary'),
  restartBtn: document.getElementById('restartBtn')
};

function showScreen(name) {
  Object.values(ui.screens).forEach((screen) => screen && screen.classList.remove('active'));
  if (ui.screens[name]) ui.screens[name].classList.add('active');
}

function getSubjectLabel(subject) {
  const map = {
    matematika: 'Matematika',
    biologiya: 'Biologiya',
    geografiya: 'Geografiya',
    tarix: 'Tarix',
    informatika: 'Informatika',
    adabiyot: 'Adabiyot',
    english: 'Ingliz tili',
    russian: 'Rus tili',
    iq: 'IQ Test'
  };
  return map[subject] || subject;
}

function getQuestionsForDifficulty() {
  const pool = questionBank[state.selectedSubject];
  if (!pool) return [];
  switch (state.selectedDifficulty) {
    case 'oson': return pool.basic || [];
    case 'orta': return (pool.advanced && pool.advanced.length ? pool.advanced : pool.basic) || [];
    case 'qiyin': return pool.advanced || pool.basic || [];
    default: return pool.basic || [];
  }
}

function shuffle(items) {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function resetState() {
  state.selectedSubject = null;
  state.selectedMode = null;
  state.selectedDifficulty = null;
  state.questions = [];
  state.round = 0;
  state.scores = { p1: 0, p2: 0 };
  state.answered = { p1: false, p2: false };
  state.roundQuestions = { p1: null, p2: null };
  clearTimer();
  ui.statusText.textContent = 'Fan tanlang';
  ui.continueToMode.disabled = true;
  ui.subjectGrid.querySelectorAll('.choice-btn').forEach((btn) => btn.classList.remove('selected'));
  ui.modeGrid.querySelectorAll('.choice-btn').forEach((btn) => btn.classList.remove('selected'));
  ui.difficultyGrid.querySelectorAll('.choice-btn').forEach((btn) => btn.classList.remove('selected'));
}

function selectSubject(subject) {
  state.selectedSubject = subject;
  ui.subjectGrid.querySelectorAll('.choice-btn').forEach((btn) => {
    btn.classList.toggle('selected', btn.dataset.subject === subject);
  });
  ui.continueToMode.disabled = false;
  ui.statusText.textContent = `Fan: ${getSubjectLabel(subject)}`;
}

function selectMode(mode) {
  state.selectedMode = mode;
  ui.modeGrid.querySelectorAll('.choice-btn').forEach((btn) => {
    btn.classList.toggle('selected', btn.dataset.mode === mode);
  });
  ui.statusText.textContent = `${getSubjectLabel(state.selectedSubject)} • ${mode === 'ai' ? 'VS AI' : 'VS Player'}`;
  showScreen('difficulty');
}

function selectDifficulty(level) {
  state.selectedDifficulty = level;
  ui.difficultyGrid.querySelectorAll('.choice-btn').forEach((btn) => {
    btn.classList.toggle('selected', btn.dataset.difficulty === level);
  });
  startGame();
}

function startGame() {
  if (!state.selectedSubject || !state.selectedMode || !state.selectedDifficulty) return;
  const basePool = shuffle(getQuestionsForDifficulty());
  const count = Math.min(5, basePool.length);
  state.questions = basePool.slice(0, count);
  state.round = 0;
  state.scores = { p1: 0, p2: 0 };
  state.answered = { p1: false, p2: false };
  state.roundQuestions = { p1: null, p2: null };
  ui.subjectLabel.textContent = getSubjectLabel(state.selectedSubject);
  ui.statusText.textContent = `${getSubjectLabel(state.selectedSubject)} • ${state.selectedMode === 'ai' ? 'VS AI' : 'VS Player'} • ${state.selectedDifficulty}`;
  showScreen('game');
  renderRound();
}

function renderRound() {
  const total = state.questions.length;
  const questionPool = state.questions;
  if (state.round >= total) {
    finishGame();
    return;
  }

  ui.roundLabel.textContent = `${state.round + 1} / ${total}`;

  if (state.selectedMode === 'ai') {
    state.roundQuestions.p1 = questionPool[state.round];
    state.roundQuestions.p2 = null;
    renderBoardSingle();
  } else {
    let q1 = questionPool[state.round];
    let q2 = questionPool[(state.round + 1) % total] || questionPool[0];
    if (q2 === q1 && total > 1) {
      q2 = questionPool[(state.round + 2) % total] || questionPool[0];
    }
    state.roundQuestions.p1 = q1;
    state.roundQuestions.p2 = q2;
    renderBoardDual();
  }

  state.answered = { p1: false, p2: false };
  startTimer();
}

function renderBoardSingle() {
  const board = ui.versusBoard;
  board.innerHTML = '';
  board.classList.add('single');
  board.classList.remove('dual');
  const panel = document.createElement('div');
  panel.className = 'player-panel left';
  const title = document.createElement('h3');
  title.textContent = 'Ko\'k jamoa';
  panel.appendChild(title);
  const question = document.createElement('div');
  question.className = 'question-mini';
  question.textContent = state.roundQuestions.p1.question;
  panel.appendChild(question);
  const list = document.createElement('div');
  list.className = 'option-list';
  state.roundQuestions.p1.options.forEach((option, index) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'option-btn';
    btn.innerHTML = `<span class="option-letter">${String.fromCharCode(65 + index)}</span><span>${option}</span>`;
    btn.dataset.player = 'p1';
    btn.dataset.value = option;
    btn.addEventListener('click', () => handleChoice('p1', option));
    list.appendChild(btn);
  });
  panel.appendChild(list);
  board.appendChild(panel);
}

function renderBoardDual() {
  const board = ui.versusBoard;
  board.innerHTML = '';
  board.classList.remove('single');
  board.classList.add('dual');

  ['p1', 'p2'].forEach((playerKey) => {
    const question = state.roundQuestions[playerKey];
    const panel = document.createElement('div');
    panel.className = `player-panel ${playerKey === 'p1' ? 'left' : 'right'}`;

    const title = document.createElement('h3');
    title.textContent = playerKey === 'p1' ? 'Ko\'k jamoa' : 'Qizil jamoa';
    panel.appendChild(title);

    const qText = document.createElement('div');
    qText.className = 'question-mini';
    qText.textContent = question.question;
    panel.appendChild(qText);

    const list = document.createElement('div');
    list.className = 'option-list';

    question.options.forEach((option, index) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'option-btn';
      btn.innerHTML = `<span class="option-letter">${String.fromCharCode(65 + index)}</span><span>${option}</span>`;
      btn.dataset.player = playerKey;
      btn.dataset.value = option;
      btn.addEventListener('click', () => handleChoice(playerKey, option));
      list.appendChild(btn);
    });

    panel.appendChild(list);
    board.appendChild(panel);
  });
}

function clearTimer() {
  if (state.timerId) {
    clearInterval(state.timerId);
    state.timerId = null;
  }
}

function startTimer() {
  clearTimer();
  state.timer = 25;
  ui.timeLabel.textContent = String(state.timer);
  state.timerId = setInterval(() => {
    state.timer -= 1;
    ui.timeLabel.textContent = String(state.timer);
    if (state.timer <= 0) {
      clearTimer();
      if (state.selectedMode === 'ai') {
        autoFinishSingle();
      } else {
        if (!state.answered.p1) autoAnswerPlayer('p1');
        if (!state.answered.p2) autoAnswerPlayer('p2');
        setTimeout(() => {
          revealRoundAnswers();
          finishRound();
        }, 800);
      }
    }
  }, 1000);
}

function getAiAnswer(question) {
  if (!question) return null;
  const wrongOptions = question.options.filter((option) => option !== question.answer);
  return Math.random() < 0.7 ? question.answer : wrongOptions[Math.floor(Math.random() * wrongOptions.length)];
}

function autoAnswerPlayer(playerKey) {
  if (state.answered[playerKey]) return;
  const question = state.roundQuestions[playerKey];
  handleChoice(playerKey, getAiAnswer(question), true);
}

function handleChoice(playerKey, selectedValue, isAuto = false) {
  if (state.answered[playerKey]) return;
  const current = state.roundQuestions[playerKey];
  const correct = selectedValue === current.answer;
  state.answered[playerKey] = true;
  const buttons = document.querySelectorAll(`.option-btn[data-player="${playerKey}"]`);
  buttons.forEach((btn) => {
    btn.disabled = true;
    if (btn.dataset.value === current.answer) btn.classList.add('correct');
    if (btn.dataset.value === selectedValue && !correct) btn.classList.add('wrong');
  });
  if (correct) state.scores[playerKey] += 10;
  if (state.selectedMode === 'ai') {
    autoFinishSingle();
    return;
  }
  if (state.answered.p1 && state.answered.p2) {
    revealRoundAnswers();
    setTimeout(() => finishRound(), 900);
  }
}

function autoFinishSingle() {
  clearTimer();
  revealRoundAnswers();
  setTimeout(() => finishRound(), 900);
}

function revealRoundAnswers() {
  document.querySelectorAll('.option-btn').forEach((btn) => {
    const playerKey = btn.dataset.player;
    const question = state.roundQuestions[playerKey];
    if (!question) return;
    btn.disabled = true;
    if (btn.dataset.value === question.answer) {
      btn.classList.add('correct');
      btn.classList.remove('wrong');
    }
  });
}

function finishRound() {
  clearTimer();
  if (state.round + 1 >= state.questions.length) {
    finishGame();
    return;
  }
  state.round += 1;
  renderRound();
}

function finishGame() {
  clearTimer();
  const p1 = state.scores.p1;
  const p2 = state.scores.p2;
  let winnerText = 'Durrang!';
  if (p1 > p2) winnerText = 'Ko\'k jamoa yutdi!';
  else if (p2 > p1) winnerText = 'Qizil jamoa yutdi!';
  ui.winnerTitle.textContent = winnerText;
  ui.finalScore.textContent = `${p1} - ${p2}`;
  ui.resultSummary.textContent = `${getSubjectLabel(state.selectedSubject)} • ${state.selectedDifficulty} • ${state.selectedMode === 'ai' ? 'VS AI' : 'VS Player'} • ${state.questions.length} ta savol`;
  showScreen('result');
}

ui.subjectGrid.addEventListener('click', (event) => {
  const btn = event.target.closest('[data-subject]');
  if (!btn) return;
  selectSubject(btn.dataset.subject);
});

ui.continueToMode.addEventListener('click', () => {
  if (!state.selectedSubject) return;
  showScreen('mode');
  ui.statusText.textContent = `${getSubjectLabel(state.selectedSubject)} • o'yin turini tanlang`;
});

ui.modeGrid.addEventListener('click', (event) => {
  const btn = event.target.closest('[data-mode]');
  if (!btn) return;
  selectMode(btn.dataset.mode);
});

ui.difficultyGrid.addEventListener('click', (event) => {
  const btn = event.target.closest('[data-difficulty]');
  if (!btn) return;
  selectDifficulty(btn.dataset.difficulty);
});

ui.restartBtn.addEventListener('click', () => {
  resetState();
  showScreen('start');
});

resetState();
showScreen('start');
window.addEventListener('beforeunload', clearTimer);
