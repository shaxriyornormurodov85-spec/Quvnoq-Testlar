const questionBank = {
  matematika: {
    oson: [
      { question: '3 × 7 necha bo\'ladi?', options: ['18', '20', '21', '24'], answer: '21' },
      { question: 'Qaysi son juft?', options: ['15', '17', '18', '19'], answer: '18' },
      { question: '40 ÷ 5 necha?', options: ['7', '8', '9', '10'], answer: '8' },
      { question: '10 + 15 = ?', options: ['20', '23', '25', '30'], answer: '25' },
      { question: '9 - 4 = ?', options: ['3', '4', '5', '6'], answer: '5' }
    ],
    orta: [
      { question: '25% ni oddiy kasr ko\'rinishida ifodalang.', options: ['1/4', '1/2', '2/5', '3/4'], answer: '1/4' },
      { question: 'Kvadratning tomoni 6 sm bo\'lsa, yuzi qancha?', options: ['12', '24', '36', '48'], answer: '36' },
      { question: '2x = 14 bo\'lsa, x ning qiymati nechaga teng?', options: ['6', '7', '8', '9'], answer: '7' },
      { question: '1/2 + 1/4 = ?', options: ['1/3', '2/4', '3/4', '1'], answer: '3/4' },
      { question: '12 × 11 = ?', options: ['121', '122', '132', '144'], answer: '132' }
    ],
    qiyin: [
      { question: 'x² - 9 = 0 tenglamaning ildizlari yig\'indisi qancha?', options: ['0', '3', '6', '9'], answer: '0' },
      { question: 'Aylananing radiusi 7 bo\'lsa, uzunligi qancha? (π≈3.14)', options: ['21.98', '43.96', '49', '154'], answer: '43.96' },
      { question: '5! = ?', options: ['20', '60', '120', '150'], answer: '120' },
      { question: 'Agar a = 3, b = 5 bo\'lsa, a² + b² = ?', options: ['15', '25', '34', '64'], answer: '34' },
      { question: '17 ning 20% i nechaga teng?', options: ['2.4', '3.4', '4.0', '5.0'], answer: '3.4' }
    ]
  },
  biologiya: {
    oson: [
      { question: 'Qaysi hayvon suvda yashaydi?', options: ['Baliq', 'Ot', 'Bo\'ri', 'Qoplon'], answer: 'Baliq' },
      { question: 'O\'simliklarning oziq ishlab chiqarish organi nima?', options: ['Yurak', 'Ildiz', 'Barg', 'Tomoq'], answer: 'Barg' },
      { question: 'Qaysi organizm fotosintez qiladi?', options: ['O\'simlik', 'Konditer', 'Zararkunanda', 'Mushuk'], answer: 'O\'simlik' },
      { question: 'Yurak qaysi a\'zodir?', options: ['Harakat organi', 'Qon aylanish organi', 'Nafas organi', 'Bilvosita organ'], answer: 'Qon aylanish organi' },
      { question: 'Qaysi hayvon qush emas?', options: ['Tulki', 'Qarg\'a', 'Qaldirg\'och', 'Burgut'], answer: 'Tulki' }
    ],
    orta: [
      { question: 'Qanday hujayra jarayonida o\'simliklar glyukoza hosil qiladi?', options: ['Fotosintez', 'Nafas olish', 'Hayot sikli', 'Ko\'payish'], answer: 'Fotosintez' },
      { question: 'Aql bovar qilmaydigan qaysi a\'zo qon pompasi vazifasini bajaradi?', options: ['Yurak', 'O\'pka', 'Buyrak', 'Jigar'], answer: 'Yurak' },
      { question: 'Qaysi organimiz ovqat hazm qilishda asosiy rol oynaydi?', options: ['Jigar', 'Oshqozon', 'Buyrak', 'Miya'], answer: 'Oshqozon' },
      { question: 'Yurak urishi nima uchun kerak?', options: ['Qonni harakatga keltirish', 'Ovqatni hazm qilish', 'Nafas olish', 'Uyqu'], answer: 'Qonni harakatga keltirish' },
      { question: 'O\'simliklar qayerdan suv oladi?', options: ['Ildizdan', 'Bargdan', 'Guldan', 'Mevadan'], answer: 'Ildizdan' }
    ],
    qiyin: [
      { question: 'DNK qaysi ferment yordamida ko\'payadi?', options: ['Polimeraza', 'Lipaza', 'Amilaza', 'Pepsin'], answer: 'Polimeraza' },
      { question: 'Qaysi hujayra organoidi energiya ishlab chiqaradi?', options: ['Mitoxondriya', 'Yadro', 'Golji majmuasi', 'Lizosoma'], answer: 'Mitoxondriya' },
      { question: 'Barglardagi stomatalar vazifasi nima?', options: ['Gaz almashinuvi', 'Qon aylanish', 'Hujayra bo\'linishi', 'Energiya ishlab chiqarish'], answer: 'Gaz almashinuvi' },
      { question: 'Havo orqali nafas oladigan organizmlar qanday jarayonni amalga oshiradi?', options: ['Nafas olish', 'Fotosintez', 'Chet elga chiqish', 'Ko\'payish'], answer: 'Nafas olish' },
      { question: 'Qaysi organizmning tana hujayralari plastidga ega?', options: ['O\'simlik', 'Zamburug\'', 'Bakteriya', 'Hayvon'], answer: 'O\'simlik' }
    ]
  },
  geografiya: {
    oson: [
      { question: 'O\'zbekistonning poytaxti qaysi shahar?', options: ['Samarqand', 'Nukus', 'Toshkent', 'Buxoro'], answer: 'Toshkent' },
      { question: 'Dunyo eng katta okeani qaysi?', options: ['Atlantika', 'Tinch okeani', 'Hind okeani', 'Shimoliy Muz okeani'], answer: 'Tinch okeani' },
      { question: 'Qaysi qit\'ada afrika bor?', options: ['Yevropa', 'Afrika', 'Avstraliya', 'Antarktida'], answer: 'Afrika' },
      { question: 'Qaysi davlat "Piza minorasi" bilan tanilgan?', options: ['Italiya', 'Fransiya', 'Ispaniya', 'Germaniya'], answer: 'Italiya' },
      { question: 'Yer yuzasidagi eng katta cho\'l qaysi?', options: ['Gobi', 'Sahara', 'Kalahari', 'Arab cho\'li'], answer: 'Sahara' }
    ],
    orta: [
      { question: 'Qaysi cho\'l Janubiy Amerika qit\'asida joylashgan?', options: ['Sahara', 'Atakama', 'Gobi', 'Kalahari'], answer: 'Atakama' },
      { question: 'Yevropaning eng uzun daryosi qaysi?', options: ['Dunay', 'Volga', 'Rin', 'Dnepr'], answer: 'Volga' },
      { question: 'Qaysi mamlakatda "Eiffel minorasi" bor?', options: ['Italiya', 'Fransiya', 'Germaniya', 'Ispaniya'], answer: 'Fransiya' },
      { question: 'Qaysi qit\'a eng katta?', options: ['Afrika', 'Yevropa', 'Osiyo', 'Avstraliya'], answer: 'Osiyo' },
      { question: 'Yerning tabiiy sun\'iy yo\'ldoshi nima?', options: ['Oy', 'Venera', 'Mars', 'Yupiter'], answer: 'Oy' }
    ],
    qiyin: [
      { question: 'Qaysi daryo Misrdan oqib o\'tadi?', options: ['Nil', 'Amazonka', 'Yangtze', 'Misisipi'], answer: 'Nil' },
      { question: 'Qaysi mamlakat "Tian Shan" tog\'lari bilan tanilgan?', options: ['Qozog\'iston', 'O\'zbekiston', 'Tojikiston', 'Turkiya'], answer: 'O\'zbekiston' },
      { question: 'Qaysi okean dengizlardan eng katta?', options: ['Atlantika', 'Tinch okeani', 'Sho\'r okean', 'Hind okeani'], answer: 'Tinch okeani' },
      { question: 'Qaysi shahar "Yashil shahar" nomi bilan tanilgan?', options: ['Toshkent', 'Dubay', 'Singapur', 'Kuala Lumpur'], answer: 'Singapur' },
      { question: 'Qaysi qit\'ada eng past nuqta - Yer osti cho\'li joylashgan?', options: ['Afrika', 'Avstraliya', 'Yevropa', 'Antarktida'], answer: 'Afrika' }
    ]
  },
  tarix: {
    oson: [
      { question: 'O\'zbekiston mustaqillik kunini qaysi yilda oldi?', options: ['1990', '1991', '1992', '1995'], answer: '1991' },
      { question: 'Qaysi shahar "Sharqning go\'zal shahri" deb ataladi?', options: ['Samarqand', 'Buxoro', 'Toshkent', 'Xiva'], answer: 'Samarqand' },
      { question: 'Qaysi shaxs "Buxoroi sharif" nomi bilan tanilgan?', options: ['Amir Temur', 'Bobur', 'Ulug\'bek', 'Alisher Navoiy'], answer: 'Amir Temur' },
      { question: 'Buvi qaysi davrga tegishli?', options: ['O\'rta asr', 'Zamon', 'Neolit', 'Yangi asr'], answer: 'O\'rta asr' },
      { question: 'Qaysi hukmdor Samarqandni poytaxt qildi?', options: ['Amir Temur', 'Bobur', 'Ulug\'bek', 'Temur Malik'], answer: 'Amir Temur' }
    ],
    orta: [
      { question: 'Qaysi yilgi voqealar "Buyuk geografik kashfiyotlar" deb nomlanadi?', options: ['15-16 asr', '13-14 asr', '17-18 asr', '19 asr'], answer: '15-16 asr' },
      { question: 'Qaysi qahramon Chingizxon bilan birga yurish qilgan?', options: ['Temur', 'Bektemir', 'Jaloliddin Manguberdi', 'Nemat'], answer: 'Jaloliddin Manguberdi' },
      { question: 'Qaysi davlatning asoschisi Napoleon?', options: ['Fransiya', 'Italiya', 'Germaniya', 'Angliya'], answer: 'Fransiya' },
      { question: 'Qaysi yil 9-may Bayrami nishonlanadi?', options: ['1941', '1945', '1947', '1950'], answer: '1945' },
      { question: 'Alisher Navoiy qaysi asarini yozgan?', options: ['“Farhod va Shirin”', '“Boburnoma”', '“Ming bir kecha”', '“Qutadgu bilig”'], answer: '“Farhod va Shirin”' }
    ],
    qiyin: [
      { question: 'Qaysi hukmdor Mavlono Jaloliddin Rumi bilan bog\'liq?', options: ['Sultan Salohiddin', 'Giyosiddin Balban', 'Sulton Muhammad', 'Xoja Ahror'], answer: 'Sultan Salohiddin' },
      { question: 'Qaysi voqeada "Ming yillik urush" bo\'lgan?', options: ['Fransiya va Angliya', 'AQSh va Ispaniya', 'Rossiya va Turkiya', 'Italiya va Germaniya'], answer: 'Fransiya va Angliya' },
      { question: 'Qaysi sulola O\'rta Osiyoda hukmronlik qilgan?', options: ['Samaniylar', 'Mongollar', 'Rashidiylar', 'Shayboniylar'], answer: 'Samaniylar' },
      { question: 'Moskva shahrining asos solinishi qaysi asrga to\'g\'ri keladi?', options: ['12-asr', '13-asr', '14-asr', '15-asr'], answer: '12-asr' },
      { question: 'Qaysi yilgi voqeada "Buxoro xonligi" tugadi?', options: ['1868', '1920', '1881', '1905'], answer: '1868' }
    ]
  },
  informatika: {
    oson: [
      { question: 'Qaysi buyruq ekranga yozuv chiqaradi?', options: ['print()', 'show()', 'type()', 'echo()'], answer: 'print()' },
      { question: 'HTML da eng katta sarlavha tegini tanlang.', options: ['<h1>', '<p>', '<h3>', '<title>'], answer: '<h1>' },
      { question: 'Qaysi kodning ma\'nosi “faqat qaysi sahifa”?', options: ['CSS', 'HTML', 'JS', 'PNG'], answer: 'HTML' },
      { question: 'Qaysi buyruq faylni saqlashga yordam beradi?', options: ['save()', 'write()', 'download()', 'open()'], answer: 'save()' },
      { question: 'Qaysi dasturlash tili web sahifalarga interfaol xususiyat beradi?', options: ['JavaScript', 'CSS', 'HTML', 'Python'], answer: 'JavaScript' }
    ],
    orta: [
      { question: 'Qaysi format veb sahifa dizaynini boshqaradi?', options: ['CSS', 'JS', 'HTML', 'XML'], answer: 'CSS' },
      { question: 'Qaysi operator tenglikni tekshiradi?', options: ['==', '=', '===', '!='], answer: '==' },
      { question: 'Massivda elementlarni sanash uchun ishlatiladigan xususiyat?', options: ['length', 'size', 'count', 'total'], answer: 'length' },
      { question: 'Qaysi ma\'lumot turi “haqiqat/yolg\'on” ni saqlaydi?', options: ['boolean', 'string', 'number', 'object'], answer: 'boolean' },
      { question: 'JavaScriptda takrorlash uchun qaysi tsikl ishlatiladi?', options: ['for', 'if', 'switch', 'const'], answer: 'for' }
    ],
    qiyin: [
      { question: 'Qaysi usul massivni tartiblangan qilib qaytaradi?', options: ['sort()', 'join()', 'map()', 'split()'], answer: 'sort()' },
      { question: 'Qaysi funksiya ma\'lumotni JSON formatga aylantiradi?', options: ['JSON.stringify()', 'JSON.parse()', 'Math.random()', 'Array.pop()'], answer: 'JSON.stringify()' },
      { question: 'Qaysi qiymat JSda falsy bo\'ladi?', options: ['0', '""', 'false', 'barchasi'], answer: 'barchasi' },
      { question: 'DOM deganda nima tushuniladi?', options: ['Dokument obyekt modeli', 'Dastur ma\'lumot modeli', 'Dastur o\'zgartirish mexanizmi', 'Down object manager'], answer: 'Dokument obyekt modeli' },
      { question: 'Qaysi operator “va” ma\'nosi bilan ishlatiladi?', options: ['&&', '||', '==', '!='], answer: '&&' }
    ]
  },
  adabiyot: {
    oson: [
      { question: '“Boburnoma” kitobining muallifi kim?', options: ['Bobur', 'Navoiy', 'Furqat', 'Guliston'], answer: 'Bobur' },
      { question: 'Qaysi shoir “Yorqin tush” she\'rini yozgan?', options: ['Navoiy', 'Furqat', 'Hamza', 'Chulpon'], answer: 'Navoiy' },
      { question: '“Qora qog\'oz” asari kimga tegishli?', options: ['Abdulla Qahhor', 'Cho\'lpon', 'Oybek', 'G\'afur G\'ulom'], answer: 'Abdulla Qahhor' },
      { question: 'Qaysi asar “Oltin vodiy” haqida yozilgan?', options: ['“Qorako\'l”', '“Ming bir kecha”', '“Navoiy”', '“O\'zingni o\'zi asir qil”'], answer: '“Qorako\'l”' },
      { question: 'Adabiyotdagi “epik” nima?', options: ['Katta hajmli asar', 'Qisqa she\'r', 'Maqola', 'Dramatik matn'], answer: 'Katta hajmli asar' }
    ],
    orta: [
      { question: '“Farhod va Shirin” poemasining muallifi kim?', options: ['Navoiy', 'Furqat', 'Navoi', 'Hamza'], answer: 'Navoiy' },
      { question: '“Yetti yoqti” shakli qaysi janrga tegishli?', options: ['She\'r', 'Roman', 'Doston', 'Qisqa hikoya'], answer: 'Doston' },
      { question: '“Sovet adabiyoti” qaysi asrga oid?', options: ['20-asr', '18-asr', '10-asr', '17-asr'], answer: '20-asr' },
      { question: 'Qaysi yozuvchi “Shaytanat” asari bilan tanilgan?', options: ['Abdulla Qahhor', 'Tolstoy', 'G\'afur G\'ulom', 'Chulpon'], answer: 'G\'afur G\'ulom' },
      { question: 'Qaysi janrda yoshlar hayoti va muammolari aks etadi?', options: ['Roman', 'Masal', 'Maqola', 'Vaqf'], answer: 'Roman' }
    ],
    qiyin: [
      { question: '“Maqsadim - Hayot” asari kimga tegishli?', options: ['Abdulla Qahhor', 'Chulpon', 'G\'afur G\'ulom', 'Fitrat'], answer: 'Chulpon' },
      { question: '“Qutadgu bilig” asari qanday janrga kiradi?', options: ['Nasr', 'She\'r', 'Doston', 'Dramma'], answer: 'She\'r' },
      { question: 'Qaysi muallif “Shum bola” hikoyasini yozgan?', options: ['Oybek', 'Abdulla Qahhor', 'G\'afur G\'ulom', 'Hamza'], answer: 'Abdulla Qahhor' },
      { question: '“Beyaz” asari qaysi janrga kiradi?', options: ['Roman', 'She\'r', 'Hikoya', 'Doston'], answer: 'Roman' },
      { question: '“Muloqot” so\'zi qaysi ma\'noni bildiradi?', options: ['Suhbat', 'Tushuncha', 'Aqliy xabardorlik', 'Yod'], answer: 'Suhbat' }
    ]
  }
};

const state = {
  selectedSubject: null,
  mode: null,
  difficulty: null,
  questions: [],
  round: 0,
  scores: { p1: 0, p2: 0 },
  timer: 15,
  timerId: null,
  answered: { p1: false, p2: false }
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
  continueBtn: document.getElementById('continueToMode'),
  modeGrid: document.getElementById('modeGrid'),
  difficultyGrid: document.getElementById('difficultyGrid'),
  subjectLabel: document.getElementById('subjectLabel'),
  roundLabel: document.getElementById('roundLabel'),
  timeLabel: document.getElementById('timeLabel'),
  questionText: document.getElementById('questionText'),
  questionTag: document.getElementById('questionTag'),
  versusBoard: document.getElementById('versusBoard'),
  winnerTitle: document.getElementById('winnerTitle'),
  finalScore: document.getElementById('finalScore'),
  resultSummary: document.getElementById('resultSummary'),
  restartBtn: document.getElementById('restartBtn')
};

function shuffle(items) {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function showScreen(name) {
  Object.values(ui.screens).forEach((screen) => screen.classList.remove('active'));
  ui.screens[name].classList.add('active');
}

function resetSelection() {
  state.selectedSubject = null;
  state.mode = null;
  state.difficulty = null;
  state.questions = [];
  state.round = 0;
  state.scores = { p1: 0, p2: 0 };
  state.answered = { p1: false, p2: false };
  clearTimer();
  ui.statusText.textContent = 'Fan tanlang';
  ui.continueBtn.disabled = true;
  ui.subjectGrid.querySelectorAll('.choice-btn').forEach((btn) => btn.classList.remove('selected'));
  ui.modeGrid.querySelectorAll('.choice-btn').forEach((btn) => btn.classList.remove('selected'));
  ui.difficultyGrid.querySelectorAll('.choice-btn').forEach((btn) => btn.classList.remove('selected'));
}

function selectSubject(subject) {
  state.selectedSubject = subject;
  ui.subjectGrid.querySelectorAll('.choice-btn').forEach((btn) => {
    btn.classList.toggle('selected', btn.dataset.subject === subject);
  });
  ui.continueBtn.disabled = false;
  ui.statusText.textContent = `Fan: ${subject}`;
}

function selectMode(mode) {
  state.mode = mode;
  ui.modeGrid.querySelectorAll('.choice-btn').forEach((btn) => {
    btn.classList.toggle('selected', btn.dataset.mode === mode);
  });
  ui.statusText.textContent = mode === 'ai' ? 'VS AI' : 'VS Player';
  showScreen('difficulty');
}

function selectDifficulty(level) {
  state.difficulty = level;
  ui.difficultyGrid.querySelectorAll('.choice-btn').forEach((btn) => {
    btn.classList.toggle('selected', btn.dataset.difficulty === level);
  });
  startGame();
}

function startGame() {
  if (!state.selectedSubject || !state.mode || !state.difficulty) return;

  const pool = questionBank[state.selectedSubject][state.difficulty];
  state.questions = shuffle(pool).slice(0, 5);
  state.round = 0;
  state.scores = { p1: 0, p2: 0 };
  state.answered = { p1: false, p2: false };
  ui.subjectLabel.textContent = state.selectedSubject;
  ui.statusText.textContent = `${state.selectedSubject} • ${state.difficulty}`;
  showScreen('game');
  renderQuestion();
}

function clearTimer() {
  if (state.timerId) {
    clearInterval(state.timerId);
    state.timerId = null;
  }
}

function startTimer() {
  clearTimer();
  state.timer = 15;
  ui.timeLabel.textContent = String(state.timer);

  state.timerId = setInterval(() => {
    state.timer -= 1;
    ui.timeLabel.textContent = String(state.timer);

    if (state.timer <= 0) {
      clearTimer();
      if (state.mode === 'ai') {
        handleAiTimeout();
      } else {
        handlePlayerTimeout();
      }
    }
  }, 1000);
}

function getAiAnswer(question) {
  const wrongOptions = question.options.filter((option) => option !== question.answer);
  const chance = Math.random();

  if (chance < 0.7) {
    return question.answer;
  }

  return wrongOptions[Math.floor(Math.random() * wrongOptions.length)];
}

function renderQuestion() {
  const current = state.questions[state.round];
  const total = state.questions.length;

  ui.roundLabel.textContent = `${state.round + 1} / ${total}`;
  ui.questionTag.textContent = `Savol ${state.round + 1}`;
  ui.questionText.textContent = current.question;

  const board = ui.versusBoard;
  board.innerHTML = '';
  board.classList.toggle('single', state.mode === 'ai');

  const panels = state.mode === 'ai'
    ? [{ label: '1-player', key: 'p1' }]
    : [{ label: '1-player', key: 'p1' }, { label: '2-player', key: 'p2' }];

  panels.forEach(({ label, key }) => {
    const panel = document.createElement('div');
    panel.className = 'player-panel';

    const heading = document.createElement('h3');
    heading.textContent = label;
    panel.appendChild(heading);

    const list = document.createElement('div');
    list.className = 'option-list';

    current.options.forEach((option) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'option-btn';
      btn.textContent = option;
      btn.dataset.player = key;
      btn.dataset.value = option;
      btn.addEventListener('click', () => handleChoice(key, option));
      list.appendChild(btn);
    });

    panel.appendChild(list);
    board.appendChild(panel);
  });

  state.answered = { p1: false, p2: false };
  startTimer();
}

function handleChoice(playerKey, selectedValue) {
  if (state.answered[playerKey]) return;

  const current = state.questions[state.round];
  const correct = selectedValue === current.answer;
  state.answered[playerKey] = true;

  const buttons = document.querySelectorAll(`.option-btn[data-player="${playerKey}"]`);
  buttons.forEach((btn) => {
    btn.disabled = true;

    if (btn.dataset.value === current.answer) {
      btn.classList.add('correct');
    }

    if (btn.dataset.value === selectedValue && !correct) {
      btn.classList.add('wrong');
    }
  });

  if (correct) {
    state.scores[playerKey] += 10;
  }

  if (state.mode === 'ai') {
    setTimeout(() => finishRound(), 850);
    return;
  }

  if (state.answered.p1 && state.answered.p2) {
    setTimeout(() => finishRound(), 850);
  }
}

function handlePlayerTimeout() {
  const current = state.questions[state.round];
  const playerButtons = document.querySelectorAll('.option-btn[data-player="p1"]');
  const player2Buttons = document.querySelectorAll('.option-btn[data-player="p2"]');

  if (!state.answered.p1) {
    const fallback = current.answer;
    state.answered.p1 = true;
    playerButtons.forEach((btn) => {
      btn.disabled = true;
      if (btn.dataset.value === current.answer) {
        btn.classList.add('correct');
      }
    });
    state.scores.p1 += 10;
  }

  if (!state.answered.p2) {
    const chosen = getAiAnswer(current);
    state.answered.p2 = true;
    player2Buttons.forEach((btn) => {
      btn.disabled = true;
      if (btn.dataset.value === current.answer) {
        btn.classList.add('correct');
      }
      if (btn.dataset.value === chosen && chosen !== current.answer) {
        btn.classList.add('wrong');
      }
    });
    if (chosen === current.answer) {
      state.scores.p2 += 10;
    }
  }

  setTimeout(() => finishRound(), 850);
}

function handleAiTimeout() {
  const current = state.questions[state.round];
  const buttons = document.querySelectorAll('.option-btn[data-player="p1"]');

  if (!state.answered.p1) {
    const autoChoice = getAiAnswer(current);
    state.answered.p1 = true;
    buttons.forEach((btn) => {
      btn.disabled = true;
      if (btn.dataset.value === current.answer) {
        btn.classList.add('correct');
      }
      if (btn.dataset.value === autoChoice && autoChoice !== current.answer) {
        btn.classList.add('wrong');
      }
    });
    if (autoChoice === current.answer) {
      state.scores.p1 += 10;
    }
  }

  setTimeout(() => finishRound(), 850);
}

function finishRound() {
  clearTimer();

  if (state.round + 1 >= state.questions.length) {
    finishGame();
    return;
  }

  state.round += 1;
  renderQuestion();
}

function finishGame() {
  clearTimer();

  const p1 = state.scores.p1;
  const p2 = state.scores.p2;

  let winnerText = 'Durrang!';
  if (p1 > p2) winnerText = '1-player yutdi!';
  else if (p2 > p1) winnerText = state.mode === 'ai' ? 'AI yutdi!' : '2-player yutdi!';

  ui.winnerTitle.textContent = winnerText;
  ui.finalScore.textContent = `${p1} - ${p2}`;
  ui.resultSummary.textContent = `${state.selectedSubject.toUpperCase()} • ${state.difficulty.toUpperCase()} • ${state.mode === 'ai' ? 'VS AI' : 'VS Player'}`;
  showScreen('result');
}

ui.subjectGrid.addEventListener('click', (event) => {
  const btn = event.target.closest('[data-subject]');
  if (!btn) return;
  selectSubject(btn.dataset.subject);
});

ui.continueBtn.addEventListener('click', () => {
  if (!state.selectedSubject) return;
  showScreen('mode');
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
  resetSelection();
  showScreen('start');
});

resetSelection();
showScreen('start');
window.addEventListener('beforeunload', clearTimer);
