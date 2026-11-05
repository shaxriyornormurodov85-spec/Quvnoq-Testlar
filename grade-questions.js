/* Grade-aware question selection and randomized answer positions. */
(function () {
  const extraQuestions = {
    matematika: {
      5: [
        { question: '3/4 kasrini foizda ifodalang.', options: ['25%', '50%', '75%', '80%'], answer: '75%' },
        { question: 'To‘g‘ri to‘rtburchakning bo‘yi 9 sm, eni 4 sm. Perimetri qancha?', options: ['13 sm', '26 sm', '36 sm', '72 sm'], answer: '26 sm' },
        { question: 'Bir sonning 5 baravari 45. Sonni toping.', options: ['8', '9', '10', '40'], answer: '9' }
      ],
      8: [
        { question: '3x − 7 = 20 tenglamani yeching.', options: ['7', '8', '9', '13'], answer: '9' },
        { question: 'Tomonlari 6 va 8 bo‘lgan to‘g‘ri burchakli uchburchak gipotenuzasi nechaga teng?', options: ['9', '10', '12', '14'], answer: '10' },
        { question: '5, 8, 11, 14, ... ketma-ketlikning 10-hadini toping.', options: ['29', '30', '32', '35'], answer: '32' }
      ],
      11: [
        { question: 'x² − 5x + 6 = 0 tenglamaning ildizlari qaysi?', options: ['1 va 6', '2 va 3', '−2 va −3', '0 va 5'], answer: '2 va 3' },
        { question: 'sin 30° + cos 60° qiymatini toping.', options: ['0', '1/2', '1', '√3'], answer: '1' },
        { question: 'f(x)=x²−4x funksiyaning hosilasi qaysi?', options: ['2x−4', 'x−4', '2x', 'x²−4'], answer: '2x−4' }
      ]
    },
    biologiya: {
      5: [
        { question: 'O‘simlik bargida fotosintez uchun zarur bo‘lgan yashil pigment nima?', options: ['Gemoglobin', 'Xlorofill', 'Keratin', 'Melanin'], answer: 'Xlorofill' },
        { question: 'Oziq zanjirida o‘simliklar qanday ataladi?', options: ['Iste’molchilar', 'Parchalovchilar', 'Ishlab chiqaruvchilar', 'Yirtqichlar'], answer: 'Ishlab chiqaruvchilar' },
        { question: 'Sutemizuvchilar bolasini asosan nima bilan oziqlantiradi?', options: ['Sut', 'Urug‘', 'Nektar', 'Barg'], answer: 'Sut' }
      ],
      8: [
        { question: 'Hujayrada oqsil sintezi qaysi organoidda amalga oshadi?', options: ['Ribosomada', 'Lizosomada', 'Vakuolada', 'Sentriolada'], answer: 'Ribosomada' },
        { question: 'Aa × Aa chatishtirishda retsessiv fenotip chiqish ehtimoli qancha?', options: ['0%', '25%', '50%', '75%'], answer: '25%' },
        { question: 'O‘simliklarda suv va mineral moddalarni yuqoriga tashuvchi to‘qima qaysi?', options: ['Floema', 'Ksilema', 'Epidermis', 'Kambiy'], answer: 'Ksilema' }
      ],
      11: [
        { question: 'DNK replikatsiyasi yarim konservativ deyilishining sababi nima?', options: ['Har yangi DNKda bitta eski va bitta yangi zanjir bo‘ladi', 'Ikkala zanjir ham yangidan sintezlanadi', 'Faqat bitta zanjir ko‘payadi', 'DNK RNKga aylanadi'], answer: 'Har yangi DNKda bitta eski va bitta yangi zanjir bo‘ladi' },
        { question: 'Tabiiy tanlanish evolyutsiyada nimaga olib kelishi mumkin?', options: ['Muhitga mos belgilar chastotasining ortishiga', 'Barcha mutatsiyalarning yo‘qolishiga', 'Organizmlarning o‘zgarmasligiga', 'Har bir individning bir xil bo‘lishiga'], answer: 'Muhitga mos belgilar chastotasining ortishiga' },
        { question: 'Aerob nafas olishda elektron tashish zanjiri asosan qayerda joylashadi?', options: ['Mitoxondriya ichki membranasida', 'Yadro qobig‘ida', 'Ribosomada', 'Golji apparatida'], answer: 'Mitoxondriya ichki membranasida' }
      ]
    },
    informatika: {
      5: [
        { question: 'Algoritm nima?', options: ['Muammoni yechish uchun aniq ketma-ket ko‘rsatmalar', 'Kompyuterning jismoniy qismi', 'Faqat rasm chizish dasturi', 'Internet manzili'], answer: 'Muammoni yechish uchun aniq ketma-ket ko‘rsatmalar' },
        { question: 'Faylni papkaga ko‘chirish nimani anglatadi?', options: ['Fayl nusxasini boshqa joyga joylash', 'Faylni internetga chiqarish', 'Kompyuterni o‘chirish', 'Matnni chop etish'], answer: 'Fayl nusxasini boshqa joyga joylash' },
        { question: 'Ikkilik sanoq tizimida qaysi raqamlar ishlatiladi?', options: ['0 va 1', '1 va 2', '0 dan 9 gacha', 'A va B'], answer: '0 va 1' }
      ],
      8: [
        { question: 'JavaScriptda [2, 4, 6].map(x => x * 2) natijasi nima?', options: ['[4, 8, 12]', '[2, 4, 6, 2]', '[12]', '[2, 8, 18]'], answer: '[4, 8, 12]' },
        { question: 'HTML formasida foydalanuvchidan matn olish uchun qaysi element ishlatiladi?', options: ['<input>', '<section>', '<title>', '<footer>'], answer: '<input>' },
        { question: 'Algoritmning O(n) murakkabligi odatda nimani bildiradi?', options: ['Ish hajmi kirish o‘lchamiga mutanosib o‘sadi', 'Ish vaqti doimiy', 'Xotira ishlatilmaydi', 'Ish hajmi n² bo‘lib o‘sadi'], answer: 'Ish hajmi kirish o‘lchamiga mutanosib o‘sadi' }
      ],
      11: [
        { question: 'Binary search qaysi shartda to‘g‘ri ishlaydi?', options: ['Ma’lumotlar tartiblangan bo‘lishi kerak', 'Ro‘yxatda faqat juft sonlar bo‘lishi kerak', 'Ro‘yxat bo‘sh bo‘lishi kerak', 'Faqat matn bilan ishlaydi'], answer: 'Ma’lumotlar tartiblangan bo‘lishi kerak' },
        { question: 'JavaScript Promise holatlarining to‘g‘ri to‘plami qaysi?', options: ['pending, fulfilled, rejected', 'open, closed, waiting', 'start, run, stop', 'true, false, null'], answer: 'pending, fulfilled, rejected' },
        { question: 'Ma’lumotlar bazasida bir jadvaldagi yozuvni yagona aniqlash uchun nima ishlatiladi?', options: ['Birlamchi kalit (primary key)', 'CSS selektori', 'Cookie', 'Loop'], answer: 'Birlamchi kalit (primary key)' }
      ]
    },
    english: {
      5: [
        { question: 'Choose the correct sentence.', options: ['She have two brothers.', 'She has two brothers.', 'She having two brothers.', 'She haves two brothers.'], answer: 'She has two brothers.' },
        { question: 'Complete: “There ___ three books on the desk.”', options: ['is', 'are', 'am', 'be'], answer: 'are' },
        { question: 'What is the past form of “buy”?', options: ['buyed', 'bought', 'buys', 'buying'], answer: 'bought' }
      ],
      8: [
        { question: 'Complete: “I have lived here ___ 2020.”', options: ['for', 'since', 'during', 'by'], answer: 'since' },
        { question: 'Choose the correct passive form: “They built the bridge in 1990.”', options: ['The bridge was built in 1990.', 'The bridge is build in 1990.', 'The bridge built them in 1990.', 'The bridge has build in 1990.'], answer: 'The bridge was built in 1990.' },
        { question: 'If it rains tomorrow, we ___ at home.', options: ['stay', 'stayed', 'will stay', 'would stayed'], answer: 'will stay' }
      ],
      11: [
        { question: 'Choose the correct third conditional sentence.', options: ['If I studied, I will pass.', 'If I had studied, I would have passed.', 'If I have studied, I passed.', 'If I would study, I had passed.'], answer: 'If I had studied, I would have passed.' },
        { question: 'Which sentence uses reported speech correctly? “I am tired,” she said.', options: ['She said that she was tired.', 'She said that I am tired.', 'She told she is tired.', 'She says that she tired.'], answer: 'She said that she was tired.' },
        { question: 'Choose the correct phrase: “The report ___ by Friday.”', options: ['must be submitted', 'must submitted', 'must be submit', 'must submitting'], answer: 'must be submitted' }
      ]
    },
    russian: {
      5: [
        { question: 'Выберите правильное множественное число слова «книга».', options: ['книги', 'книг', 'книгой', 'книгу'], answer: 'книги' },
        { question: 'Какое слово является глаголом?', options: ['быстро', 'красивый', 'читать', 'книга'], answer: 'читать' },
        { question: 'Выберите правильное предложение.', options: ['Я учится в школе.', 'Я учусь в школе.', 'Я учатся в школе.', 'Я учишься в школе.'], answer: 'Я учусь в школе.' }
      ],
      8: [
        { question: 'Какой падеж отвечает на вопрос «кому? чему?»', options: ['Именительный', 'Родительный', 'Дательный', 'Творительный'], answer: 'Дательный' },
        { question: 'Выберите правильную форму: «Я горжусь ___».', options: ['брат', 'брата', 'брату', 'братом'], answer: 'братом' },
        { question: 'В каком времени стоит глагол «прочитал»?', options: ['В настоящем', 'В прошедшем', 'В будущем', 'В повелительном'], answer: 'В прошедшем' }
      ],
      11: [
        { question: 'В каком предложении правильно расставлены знаки препинания?', options: ['Когда закончился дождь, мы вышли на улицу.', 'Когда закончился дождь мы, вышли на улицу.', 'Когда, закончился дождь мы вышли на улицу.', 'Когда закончился, дождь мы вышли на улицу.'], answer: 'Когда закончился дождь, мы вышли на улицу.' },
        { question: 'Какой частью речи является слово «прочитав»?', options: ['Деепричастие', 'Прилагательное', 'Существительное', 'Предлог'], answer: 'Деепричастие' },
        { question: 'Выберите сложноподчинённое предложение.', options: ['Солнце село, и стало прохладно.', 'Я знаю, что ты придёшь.', 'Ветер усилился.', 'Закрыв окно, он сел за стол.'], answer: 'Я знаю, что ты придёшь.' }
      ]
    },
    iq: {
      5: [
        { question: 'Ketma-ketlikni davom ettiring: 2, 6, 12, 20, ...', options: ['26', '28', '30', '32'], answer: '30' },
        { question: 'Ali Validdan baland, Vali esa Sardordan baland. Eng past bo‘yli kim?', options: ['Ali', 'Vali', 'Sardor', 'Aniqlab bo‘lmaydi'], answer: 'Sardor' },
        { question: 'Soat 3:00 da soat va minut millari orasidagi burchak qancha?', options: ['45°', '90°', '120°', '180°'], answer: '90°' }
      ],
      8: [
        { question: 'Ketma-ketlik: 1, 4, 10, 22, 46, ... Keyingi sonni toping.', options: ['88', '92', '94', '96'], answer: '94' },
        { question: 'Barcha Zorblar Lemit, hech bir Lemit ko‘k emas. Qaysi xulosa aniq?', options: ['Hech bir Zorb ko‘k emas', 'Barcha ko‘klar Zorb', 'Ba’zi Zorblar ko‘k', 'Xulosa qilib bo‘lmaydi'], answer: 'Hech bir Zorb ko‘k emas' },
        { question: 'Ikki kub tashlanganda yig‘indi 7 chiqishining nechta teng ehtimolli yo‘li bor?', options: ['4', '5', '6', '7'], answer: '6' }
      ],
      11: [
        { question: 'Agar p → q va p rost bo‘lsa, mantiqan nima kelib chiqadi?', options: ['q rost', 'q yolg‘on', 'p yolg‘on', 'Hech qanday xulosa yo‘q'], answer: 'q rost' },
        { question: '5 kishi bir-biri bilan bir martadan qo‘l berib ko‘rishsa, jami nechta qo‘l berish bo‘ladi?', options: ['5', '10', '15', '20'], answer: '10' },
        { question: 'Ketma-ketlik: 2, 3, 5, 9, 17, ... Keyingi hadni toping.', options: ['25', '31', '33', '34'], answer: '33' }
      ]
    }
  };

  const originalGetQuestions = window.getQuestionsForDifficulty;
  window.getQuestionsForDifficulty = function getGradeQuestions() {
    const grade = Number(state.selectedGrade || 5);
    const subjectExtras = extraQuestions[state.selectedSubject];
    const gradeExtras = subjectExtras && subjectExtras[grade] ? subjectExtras[grade] : [];
    const bank = questionBank[state.selectedSubject];
    if (!bank) return gradeExtras.slice();

    const useAdvanced = grade >= 11 || (grade >= 8 && state.selectedDifficulty !== 'oson') || state.selectedDifficulty === 'qiyin';
    const primary = useAdvanced ? (bank.advanced || bank.basic || []) : (bank.basic || []);
    const secondary = state.selectedDifficulty === 'qiyin' ? (bank.basic || []) : [];
    const combined = [...primary, ...gradeExtras, ...secondary];
    return combined.length ? combined : originalGetQuestions.call(window);
  };

  // Shuffle only the displayed button order. Button values and answer checking stay intact.
  function shuffleAnswerOptions() {
    document.querySelectorAll('#versusBoard .option-list').forEach((list) => {
      if (list.dataset.optionsShuffled === 'true') return;
      list.dataset.optionsShuffled = 'true';
      const buttons = Array.from(list.children);
      for (let i = buttons.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [buttons[i], buttons[j]] = [buttons[j], buttons[i]];
      }
      buttons.forEach((button) => list.appendChild(button));
    });
  }

  const board = document.getElementById('versusBoard');
  if (board) {
    new MutationObserver(shuffleAnswerOptions).observe(board, { childList: true, subtree: true });
  }
})();
