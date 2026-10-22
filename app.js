// Underlined first letter (as on the chart) marks the "heavy" letters
// that would otherwise share a name with another letter.
const LETTERS = [
  { ar: "ا", name: "alif",  word: "أناناس", meaning: "pineapple",  emoji: "🍍", group: "alif" },
  { ar: "ب", name: "baa",   word: "بيت",    meaning: "house",      emoji: "🏠", group: "b" },
  { ar: "ت", name: "taa",   word: "تفاحة",  meaning: "apple",      emoji: "🍎", group: "b" },
  { ar: "ث", name: "thaa",  word: "ثلج",    meaning: "snow",       emoji: "❄️", group: "b" },
  { ar: "ج", name: "djiim", word: "جزر",    meaning: "carrot",     emoji: "🥕", group: "j" },
  { ar: "ح", name: "<u>h</u>aa", word: "حقيبة", meaning: "bag", emoji: "🎒", group: "j" },
  { ar: "خ", name: "khaa",  word: "خبز",    meaning: "bread",      emoji: "🍞", group: "j" },
  { ar: "د", name: "daal",  word: "دراجة",  meaning: "bicycle",    emoji: "🚲", group: "d" },
  { ar: "ذ", name: "dhaal", word: "ذرة",    meaning: "corn",       emoji: "🌽", group: "d" },
  { ar: "ر", name: "raa",   word: "ريشة",   meaning: "feather",    emoji: "🪶", group: "r" },
  { ar: "ز", name: "zaay",  word: "زيتون",  meaning: "olive",      emoji: "🫒", group: "r" },
  { ar: "س", name: "siin",  word: "سفينة",  meaning: "ship",       emoji: "⛵", group: "s" },
  { ar: "ش", name: "shiin", word: "شمس",    meaning: "sun",        emoji: "☀️", group: "s" },
  { ar: "ص", name: "<u>s</u>aad", word: "صاروخ", meaning: "rocket", emoji: "🚀", group: "sad" },
  { ar: "ض", name: "<u>d</u>aad", word: "ضوء",   meaning: "light",  emoji: "💡", group: "sad" },
  { ar: "ط", name: "<u>t</u>aa",  word: "طائرة", meaning: "airplane", emoji: "✈️", group: "ta" },
  { ar: "ظ", name: "<u>dh</u>aa", word: "ظرف", meaning: "envelope", emoji: "✉️", group: "ta" },
  { ar: "ع", name: "ayn",   word: "عنب",    meaning: "grapes",     emoji: "🍇", group: "ayn" },
  { ar: "غ", name: "ghayn", word: "غيم",    meaning: "clouds",     emoji: "☁️", group: "ayn" },
  { ar: "ف", name: "faa",   word: "فراولة", meaning: "strawberry", emoji: "🍓", group: "f" },
  { ar: "ق", name: "qaaf",  word: "قلم",    meaning: "pencil",     emoji: "✏️", group: "f" },
  { ar: "ك", name: "kaaf",  word: "كرسي",   meaning: "chair",      emoji: "🪑", group: "k" },
  { ar: "ل", name: "laam",  word: "ليمون",  meaning: "lemon",      emoji: "🍋", group: "k" },
  { ar: "م", name: "miim",  word: "موز",    meaning: "banana",     emoji: "🍌", group: "m" },
  { ar: "ن", name: "noon",  word: "نجمة",   meaning: "star",       emoji: "⭐", group: "b" },
  { ar: "ه", name: "haa",   word: "هدية",   meaning: "gift",       emoji: "🎁", group: "h" },
  { ar: "و", name: "waaw",  word: "وردة",   meaning: "flower",     emoji: "🌸", group: "r" },
  { ar: "ي", name: "yaa",   word: "يقطين",  meaning: "pumpkin",    emoji: "🎃", group: "b" },
];
// Extra letter shapes that appear in real words: hamza forms, taa marbuta, alif maqsura.
// `forms` lists the shapes a letter really has (the 28 main letters have all four).
const EXTRA_LETTERS = [
  { ar: "ء", name: "hamza",          group: "hamza", word: "ماء",   forms: ["isolated"],
    note: "a glottal stop — a short catch in the throat" },
  { ar: "أ", name: "alif-hamza",     group: "alif",  word: "أسد",
    note: "hamza sitting on top of alif" },
  { ar: "إ", name: "alif-hamza below", group: "alif", word: "إبرة",
    note: "hamza under alif (an \"i\" sound at the start)" },
  { ar: "آ", name: "alif-madda",     group: "alif",  word: "مرآة",
    note: "a long \"aa\" — alif with a wavy madda on top" },
  { ar: "ؤ", name: "waaw-hamza",     group: "r",     word: "لؤلؤ",
    note: "hamza sitting on waaw" },
  { ar: "ئ", name: "yaa-hamza",      group: "b",     word: "ذئب",
    note: "hamza on a dotless yaa" },
  { ar: "ة", name: "taa marbuta",    group: "h",     word: "تفاحة", forms: ["isolated", "final"],
    note: "\"tied taa\" — only at the end of a word, usually sounds like \"a\"" },
  { ar: "ى", name: "alif maqsura",   group: "b",     word: "مستشفى", forms: ["isolated", "final"],
    note: "a dotless yaa at the end of a word that sounds like \"aa\"" },
].map(l => ({ ...l, extra: true }));
const ALL_LETTERS = [...LETTERS, ...EXTRA_LETTERS];
const LETTER_BY_AR = Object.fromEntries(ALL_LETTERS.map(l => [l.ar, l]));

// Words for the spelling games.
const WORDS = [
  ["بيت", "house", "🏠"],   ["باب", "door", "🚪"],    ["كتاب", "book", "📖"],
  ["ثلج", "snow", "❄️"],    ["جزر", "carrots", "🥕"], ["خبز", "bread", "🍞"],
  ["زيتون", "olives", "🫒"], ["شمس", "sun", "☀️"],    ["صاروخ", "rocket", "🚀"],
  ["عنب", "grapes", "🍇"],  ["غيم", "clouds", "☁️"],  ["ظرف", "envelope", "✉️"],
  ["قلم", "pen", "✏️"],     ["كرسي", "chair", "🪑"],  ["ليمون", "lemon", "🍋"],
  ["موز", "bananas", "🍌"], ["يقطين", "pumpkin", "🎃"], ["قمر", "moon", "🌙"],
  ["بحر", "sea", "🌊"],     ["سمك", "fish", "🐟"],    ["ولد", "boy", "👦"],
  ["بنت", "girl", "👧"],    ["كلب", "dog", "🐕"],     ["قط", "cat", "🐈"],
  ["فيل", "elephant", "🐘"], ["حليب", "milk", "🥛"],  ["نار", "fire", "🔥"],
  ["شجر", "trees", "🌳"],   ["ورد", "roses", "🌹"],   ["بيض", "eggs", "🥚"],
  ["جمل", "camel", "🐪"],   ["حصان", "horse", "🐎"],  ["خروف", "sheep", "🐑"],
  ["دب", "bear", "🐻"],     ["ذهب", "gold", "🥇"],    ["ثوم", "garlic", "🧄"],
  ["بصل", "onion", "🧅"],   ["عسل", "honey", "🍯"],   ["تمر", "dates", "🌴"],
  ["نمر", "tiger", "🐅"],   ["ديك", "rooster", "🐓"], ["وجه", "face", "🙂"],
  ["يد", "hand", "✋"],     ["عين", "eye", "👁️"],     ["فم", "mouth", "👄"],
  ["قلب", "heart", "❤️"],   ["مفتاح", "key", "🔑"],   ["سرير", "bed", "🛏️"],
  ["مطر", "rain", "🌧️"],    ["ثعلب", "fox", "🦊"],    ["ضفدع", "frog", "🐸"],
  ["غزال", "gazelle", "🦌"], ["هاتف", "phone", "📱"], ["حوت", "whale", "🐋"],
  ["مسجد", "mosque", "🕌"], ["قطار", "train", "🚆"],  ["بطيخ", "watermelon", "🍉"],
  ["خيار", "cucumber", "🥒"], ["شاي", "tea", "🍵"],   ["صقر", "falcon", "🦅"], ["باز", "hawk", "🦅"],
  ["سكين", "knife", "🔪"],  ["صحن", "plate", "🍽️"],  ["طفل", "child", "🧒"],
  // With the extra letters (ء أ إ آ ؤ ئ ة ى)
  ["أناناس", "pineapple", "🍍"], ["أسد", "lion", "🦁"],    ["أرنب", "rabbit", "🐇"],
  ["إصبع", "finger", "👆"],  ["إبرة", "needle", "🪡"],   ["قرآن", "Quran", "📖"],
  ["مرآة", "mirror", "🪞"],  ["لؤلؤ", "pearls", "🦪"],   ["ذئب", "wolf", "🐺"],
  ["طائرة", "airplane", "✈️"], ["ماء", "water", "💧"],   ["سماء", "sky", "🌌"],
  ["ضوء", "light", "💡"],    ["تفاحة", "apple", "🍎"],   ["ذرة", "corn", "🌽"],
  ["ريشة", "feather", "🪶"], ["سفينة", "ship", "⛵"],    ["فراولة", "strawberry", "🍓"],
  ["نجمة", "star", "⭐"],    ["هدية", "gift", "🎁"],     ["وردة", "flower", "🌸"],
  ["دراجة", "bicycle", "🚲"], ["حقيبة", "bag", "🎒"],    ["قهوة", "coffee", "☕"],
  ["فراشة", "butterfly", "🦋"], ["شجرة", "tree", "🌳"],  ["سيارة", "car", "🚗"],
  ["مدرسة", "school", "🏫"], ["بقرة", "cow", "🐄"],     ["مستشفى", "hospital", "🏥"],
  ["موسيقى", "music", "🎵"],
  // Colours, numbers, people, body, animals, food, home, clothes, school, places, time, everyday words
  ["أحمر", "red", "🔴"], ["أزرق", "blue", "🔵"], ["أخضر", "green", "🟢"],
  ["أصفر", "yellow", "🟡"], ["أسود", "black", "⚫"], ["أبيض", "white", "⚪"],
  ["برتقالي", "orange (colour)", "🟠"], ["بني", "brown", "🟤"], ["وردي", "pink", "🩷"],
  ["بنفسجي", "purple", "🟣"], ["رمادي", "grey", "🩶"], ["ذهبي", "golden", "✨"],
  ["فضي", "silver", "🥈"], ["واحد", "one", "1️⃣"], ["اثنان", "two", "2️⃣"],
  ["ثلاثة", "three", "3️⃣"], ["أربعة", "four", "4️⃣"], ["خمسة", "five", "5️⃣"],
  ["ستة", "six", "6️⃣"], ["سبعة", "seven", "7️⃣"], ["ثمانية", "eight", "8️⃣"],
  ["تسعة", "nine", "9️⃣"], ["عشرة", "ten", "🔟"], ["أب", "father", "👨"],
  ["أم", "mother", "👩"], ["أخ", "brother", "🧑"], ["أخت", "sister", "👧"],
  ["جد", "grandfather", "👴"], ["جدة", "grandmother", "👵"], ["رجل", "man", "🧔"],
  ["امرأة", "woman", "👩‍🦱"], ["صديق", "friend", "🤝"], ["معلم", "teacher", "🧑‍🏫"],
  ["طبيب", "doctor", "🧑‍⚕️"], ["عائلة", "family", "👨‍👩‍👧"], ["طالب", "student", "🧑‍🎓"],
  ["ملك", "king", "🤴"], ["رأس", "head", "🗣️"], ["أنف", "nose", "👃"],
  ["أذن", "ear", "👂"], ["لسان", "tongue", "👅"], ["سن", "tooth", "🦷"],
  ["قدم", "foot", "🦶"], ["ظهر", "back", "🧍"], ["بطن", "belly", "🫃"],
  ["عظم", "bone", "🦴"], ["دم", "blood", "🩸"], ["كتف", "shoulder", "🤷"],
  ["ركبة", "knee", "🦵"], ["شفة", "lip", "💋"], ["شعر", "hair", "💇"],
  ["قرد", "monkey", "🐒"], ["فأر", "mouse", "🐭"], ["بطة", "duck", "🦆"],
  ["دجاجة", "chicken", "🐔"], ["حمار", "donkey", "🫏"], ["ثور", "bull", "🐂"],
  ["زرافة", "giraffe", "🦒"], ["تمساح", "crocodile", "🐊"], ["ثعبان", "snake", "🐍"],
  ["سلحفاة", "turtle", "🐢"], ["نحلة", "bee", "🐝"], ["نملة", "ant", "🐜"],
  ["عنكبوت", "spider", "🕷️"], ["بومة", "owl", "🦉"], ["ببغاء", "parrot", "🦜"],
  ["حمامة", "dove", "🕊️"], ["طاووس", "peacock", "🦚"], ["دلفين", "dolphin", "🐬"],
  ["قرش", "shark", "🦈"], ["أخطبوط", "octopus", "🐙"], ["خنزير", "pig", "🐖"],
  ["كنغر", "kangaroo", "🦘"], ["باندا", "panda", "🐼"], ["خفاش", "bat", "🦇"],
  ["عصفور", "sparrow", "🐦"], ["طائر", "bird", "🐤"], ["ماعز", "goat", "🐐"],
  ["قنفذ", "hedgehog", "🦔"], ["حلزون", "snail", "🐌"], ["ذبابة", "fly", "🪰"],
  ["بعوضة", "mosquito", "🦟"], ["سنجاب", "squirrel", "🐿️"], ["أرز", "rice", "🍚"],
  ["لحم", "meat", "🥩"], ["جبن", "cheese", "🧀"], ["زبدة", "butter", "🧈"],
  ["سكر", "sugar", "🍬"], ["ملح", "salt", "🧂"], ["فلفل", "pepper", "🌶️"],
  ["طماطم", "tomatoes", "🍅"], ["بطاطا", "potatoes", "🥔"], ["جوز", "walnuts", "🌰"],
  ["برتقال", "oranges", "🍊"], ["خوخ", "peaches", "🍑"], ["كرز", "cherries", "🍒"],
  ["إجاص", "pears", "🍐"], ["مانجو", "mango", "🥭"], ["أفوكادو", "avocado", "🥑"],
  ["فطر", "mushrooms", "🍄"], ["خس", "lettuce", "🥬"], ["باذنجان", "eggplant", "🍆"],
  ["بروكلي", "broccoli", "🥦"], ["كعكة", "cake", "🎂"], ["حلوى", "sweets", "🍭"],
  ["شوكولاتة", "chocolate", "🍫"], ["بسكويت", "biscuits", "🍪"], ["شطيرة", "sandwich", "🥪"],
  ["بيتزا", "pizza", "🍕"], ["عصير", "juice", "🧃"], ["مربى", "jam", "🫙"],
  ["زيت", "oil", "🫗"], ["حساء", "soup", "🍲"], ["فطيرة", "pie", "🥧"],
  ["بوظة", "ice cream", "🍦"], ["فشار", "popcorn", "🍿"], ["غرفة", "room", "🛋️"],
  ["مطبخ", "kitchen", "🍳"], ["حمام", "bathroom", "🛁"], ["نافذة", "window", "🪟"],
  ["طاولة", "table", "🍽️"], ["كأس", "glass", "🥛"], ["كوب", "cup", "☕"],
  ["ملعقة", "spoon", "🥄"], ["شوكة", "fork", "🍴"], ["ساعة", "clock", "⏰"],
  ["مصباح", "lamp", "🪔"], ["مظلة", "umbrella", "☂️"], ["مقص", "scissors", "✂️"],
  ["صابون", "soap", "🧼"], ["فرشاة", "brush", "🪥"], ["مشط", "comb", "🪮"],
  ["مرحاض", "toilet", "🚽"], ["وسادة", "pillow", "🛏️"], ["بطانية", "blanket", "🛌"],
  ["صندوق", "box", "📦"], ["شمعة", "candle", "🕯️"], ["جرس", "bell", "🔔"],
  ["حاسوب", "computer", "💻"], ["تلفاز", "television", "📺"], ["ثلاجة", "fridge", "🧊"],
  ["كاميرا", "camera", "📷"], ["مكنسة", "broom", "🧹"], ["قفل", "lock", "🔒"],
  ["سلم", "ladder", "🪜"], ["قميص", "shirt", "👕"], ["بنطال", "trousers", "👖"],
  ["فستان", "dress", "👗"], ["حذاء", "shoe", "👞"], ["قبعة", "hat", "🧢"],
  ["جوارب", "socks", "🧦"], ["نظارة", "glasses", "👓"], ["خاتم", "ring", "💍"],
  ["تاج", "crown", "👑"], ["وشاح", "scarf", "🧣"], ["قفاز", "glove", "🧤"],
  ["معطف", "coat", "🧥"], ["دفتر", "notebook", "📓"], ["ورقة", "paper", "📄"],
  ["مكتب", "desk", "🗄️"], ["مسطرة", "ruler", "📏"], ["رسالة", "letter (mail)", "📨"],
  ["خريطة", "map", "🗺️"], ["جريدة", "newspaper", "📰"], ["مكتبة", "library", "📚"],
  ["درس", "lesson", "📝"], ["سؤال", "question", "❓"], ["جواب", "answer", "💬"],
  ["اسم", "name", "🏷️"], ["لغة", "language", "🗣️"], ["عربي", "Arabic", "🔤"],
  ["جبل", "mountain", "⛰️"], ["نهر", "river", "🏞️"], ["بحيرة", "lake", "🛶"],
  ["صحراء", "desert", "🏜️"], ["غابة", "forest", "🌲"], ["جزيرة", "island", "🏝️"],
  ["أرض", "earth", "🌍"], ["رمل", "sand", "⏳"], ["حجر", "stone", "🪨"],
  ["ريح", "wind", "🌬️"], ["برق", "lightning", "⚡"], ["رعد", "thunder", "⛈️"],
  ["زهرة", "flower (blossom)", "🌼"], ["عشب", "grass", "🌱"], ["بركان", "volcano", "🌋"],
  ["موجة", "wave", "🌊"], ["شاطئ", "beach", "🏖️"], ["مدينة", "city", "🏙️"],
  ["قرية", "village", "🏘️"], ["شارع", "street", "🛣️"], ["سوق", "market", "🛒"],
  ["مطعم", "restaurant", "🍝"], ["حديقة", "garden", "🌷"], ["ملعب", "playground", "🏟️"],
  ["مطار", "airport", "🛫"], ["بنك", "bank", "🏦"], ["فندق", "hotel", "🏨"],
  ["جسر", "bridge", "🌉"], ["قلعة", "castle", "🏰"], ["خيمة", "tent", "⛺"],
  ["كوكب", "planet", "🪐"], ["حافلة", "bus", "🚌"], ["قارب", "boat", "🚤"],
  ["طريق", "road", "🛤️"], ["شاحنة", "truck", "🚚"], ["إسعاف", "ambulance", "🚑"],
  ["مروحية", "helicopter", "🚁"], ["يوم", "day", "📅"], ["ليل", "night", "🌃"],
  ["نهار", "daytime", "🌞"], ["صباح", "morning", "🌅"], ["مساء", "evening", "🌆"],
  ["أسبوع", "week", "🗓️"], ["شهر", "month", "🈷️"], ["سنة", "year", "📆"],
  ["صيف", "summer", "🩱"], ["شتاء", "winter", "⛄"], ["ربيع", "spring", "🌸"],
  ["خريف", "autumn", "🍂"], ["كبير", "big", "🐘"], ["صغير", "small", "🐜"],
  ["طويل", "tall", "🦒"], ["قصير", "short", "🩳"], ["حار", "hot", "🥵"],
  ["بارد", "cold", "🥶"], ["جديد", "new", "🆕"], ["قديم", "old", "🏚️"],
  ["سعيد", "happy", "😊"], ["حزين", "sad", "😢"], ["جميل", "beautiful", "😍"],
  ["سريع", "fast", "🐆"], ["بطيء", "slow", "🐌"], ["جائع", "hungry", "😋"],
  ["عطشان", "thirsty", "🥤"], ["نظيف", "clean", "✨"], ["مريض", "sick", "🤒"],
  ["نعم", "yes", "✅"], ["لا", "no", "❌"], ["سلام", "peace", "☮️"],
  ["شكرا", "thank you", "🙏"], ["مرحبا", "hello", "👋"], ["أهلا", "welcome", "🤗"],
  ["حب", "love", "💕"], ["نوم", "sleep", "😴"], ["أكل", "food", "🍛"],
  ["لعب", "playing", "🎲"], ["كرة", "ball", "⚽"], ["دمية", "doll", "🪆"],
  ["لعبة", "toy", "🧸"], ["رسم", "drawing", "🎨"], ["صورة", "picture", "🖼️"],
  ["فيلم", "film", "🎬"], ["أغنية", "song", "🎶"], ["طبل", "drum", "🥁"],
  ["عود", "oud", "🪕"], ["هدف", "goal", "🥅"], ["سباحة", "swimming", "🏊"],
  ["رياضة", "sport", "🏅"], ["عيد", "festival", "🎉"], ["حفلة", "party", "🥳"],
  ["بالون", "balloon", "🎈"],
].map(([ar, meaning, emoji]) => ({ ar, meaning, emoji, letters: [...ar].map(c => LETTER_BY_AR[c]) }));

// How each word sounds, in English letters. Capitals mark the "heavy" letters
// (T S D H DH = ط ص ض ح ظ) and are shown underlined, like the names on the chart.
// ' = hamza (a short stop in the throat), ʿ = ayn (a deep sound from the throat).
const SAY = {
  "بيت": "bayt", "باب": "baab", "كتاب": "kitaab", "ثلج": "thalj", "جزر": "jazar",
  "خبز": "khubz", "زيتون": "zaytuun", "شمس": "shams", "صاروخ": "Saaruukh", "عنب": "ʿinab",
  "غيم": "ghaym", "ظرف": "DHarf", "قلم": "qalam", "كرسي": "kursii", "ليمون": "laymuun",
  "موز": "mawz", "يقطين": "yaqTiin", "قمر": "qamar", "بحر": "baHr", "سمك": "samak",
  "ولد": "walad", "بنت": "bint", "كلب": "kalb", "قط": "qiTT", "فيل": "fiil",
  "حليب": "Haliib", "نار": "naar", "شجر": "shajar", "ورد": "ward", "بيض": "bayD",
  "جمل": "jamal", "حصان": "HiSaan", "خروف": "kharuuf", "دب": "dubb", "ذهب": "dhahab",
  "ثوم": "thuum", "بصل": "baSal", "عسل": "ʿasal", "تمر": "tamr", "نمر": "namir",
  "ديك": "diik", "وجه": "wajh", "يد": "yad", "عين": "ʿayn", "فم": "fam",
  "قلب": "qalb", "مفتاح": "miftaaH", "سرير": "sariir", "مطر": "maTar", "ثعلب": "thaʿlab",
  "ضفدع": "Difdaʿ", "غزال": "ghazaal", "هاتف": "haatif", "حوت": "Huut", "مسجد": "masjid",
  "قطار": "qiTaar", "بطيخ": "baTTiikh", "خيار": "khiyaar", "شاي": "shaay", "صقر": "Saqr", "باز": "baaz",
  "سكين": "sikkiin", "صحن": "SaHn", "طفل": "Tifl", "أناناس": "'anaanaas", "أسد": "'asad",
  "أرنب": "'arnab", "إصبع": "'iSbaʿ", "إبرة": "'ibra", "قرآن": "qur'aan", "مرآة": "mir'aa",
  "لؤلؤ": "lu'lu'", "ذئب": "dhi'b", "طائرة": "Taa'ira", "ماء": "maa'", "سماء": "samaa'",
  "ضوء": "Daw'", "تفاحة": "tuffaaHa", "ذرة": "dhura", "ريشة": "riisha", "سفينة": "safiina",
  "فراولة": "faraawla", "نجمة": "najma", "هدية": "hadiyya", "وردة": "warda", "دراجة": "darraaja",
  "حقيبة": "Haqiiba", "قهوة": "qahwa", "فراشة": "faraasha", "شجرة": "shajara", "سيارة": "sayyaara",
  "مدرسة": "madrasa", "بقرة": "baqara", "مستشفى": "mustashfaa", "موسيقى": "muusiiqaa",
  "أحمر": "'aHmar", "أزرق": "'azraq", "أخضر": "'akhDar", "أصفر": "'aSfar", "أسود": "'aswad",
  "أبيض": "'abyaD", "برتقالي": "burtuqaalii", "بني": "bunnii", "وردي": "wardii", "بنفسجي": "banafsajii",
  "رمادي": "ramaadii", "ذهبي": "dhahabii", "فضي": "fiDDii", "واحد": "waaHid", "اثنان": "ithnaan",
  "ثلاثة": "thalaatha", "أربعة": "'arbaʿa", "خمسة": "khamsa", "ستة": "sitta", "سبعة": "sabʿa",
  "ثمانية": "thamaaniya", "تسعة": "tisʿa", "عشرة": "ʿashara", "أب": "'ab", "أم": "'umm",
  "أخ": "'akh", "أخت": "'ukht", "جد": "jadd", "جدة": "jadda", "رجل": "rajul",
  "امرأة": "imra'a", "صديق": "Sadiiq", "معلم": "muʿallim", "طبيب": "Tabiib", "عائلة": "ʿaa'ila",
  "طالب": "Taalib", "ملك": "malik", "رأس": "ra's", "أنف": "'anf", "أذن": "'udhun",
  "لسان": "lisaan", "سن": "sinn", "قدم": "qadam", "ظهر": "DHahr", "بطن": "baTn",
  "عظم": "ʿaDHm", "دم": "dam", "كتف": "katif", "ركبة": "rukba", "شفة": "shafa",
  "شعر": "shaʿr", "قرد": "qird", "فأر": "fa'r", "بطة": "baTTa", "دجاجة": "dajaaja",
  "حمار": "Himaar", "ثور": "thawr", "زرافة": "zaraafa", "تمساح": "timsaaH", "ثعبان": "thuʿbaan",
  "سلحفاة": "sulaHfaa", "نحلة": "naHla", "نملة": "namla", "عنكبوت": "ʿankabuut", "بومة": "buuma",
  "ببغاء": "babbaghaa'", "حمامة": "Hamaama", "طاووس": "Taawuus", "دلفين": "dulfiin", "قرش": "qirsh",
  "أخطبوط": "'ukhTubuuT", "خنزير": "khinziir", "كنغر": "kanghar", "باندا": "baandaa", "خفاش": "khuffaash",
  "عصفور": "ʿuSfuur", "طائر": "Taa'ir", "ماعز": "maaʿiz", "قنفذ": "qunfudh", "حلزون": "Halazuun",
  "ذبابة": "dhubaaba", "بعوضة": "baʿuuDa", "سنجاب": "sinjaab", "أرز": "'aruzz", "لحم": "laHm",
  "جبن": "jubn", "زبدة": "zubda", "سكر": "sukkar", "ملح": "milH", "فلفل": "filfil",
  "طماطم": "TamaaTim", "بطاطا": "baTaaTaa", "جوز": "jawz", "برتقال": "burtuqaal", "خوخ": "khawkh",
  "كرز": "karaz", "إجاص": "'ijjaaS", "مانجو": "maanjuu", "أفوكادو": "'afuukaaduu", "فطر": "fuTr",
  "خس": "khass", "باذنجان": "baadhinjaan", "بروكلي": "bruukulii", "كعكة": "kaʿka", "حلوى": "Halwaa",
  "شوكولاتة": "shuukuulaata", "بسكويت": "baskawiit", "شطيرة": "shaTiira", "بيتزا": "biitzaa", "عصير": "ʿaSiir",
  "مربى": "murabbaa", "زيت": "zayt", "حساء": "Hasaa'", "فطيرة": "faTiira", "بوظة": "buuDHa",
  "فشار": "fushaar", "غرفة": "ghurfa", "مطبخ": "maTbakh", "حمام": "Hammaam", "نافذة": "naafidha",
  "طاولة": "Taawila", "كأس": "ka's", "كوب": "kuub", "ملعقة": "milʿaqa", "شوكة": "shawka",
  "ساعة": "saaʿa", "مصباح": "miSbaaH", "مظلة": "miDHalla", "مقص": "miqaSS", "صابون": "Saabuun",
  "فرشاة": "furshaa", "مشط": "mushT", "مرحاض": "mirHaaD", "وسادة": "wisaada", "بطانية": "baTTaaniyya",
  "صندوق": "Sunduuq", "شمعة": "shamʿa", "جرس": "jaras", "حاسوب": "Haasuub", "تلفاز": "tilfaaz",
  "ثلاجة": "thallaaja", "كاميرا": "kaamiiraa", "مكنسة": "miknasa", "قفل": "qufl", "سلم": "sullam",
  "قميص": "qamiiS", "بنطال": "binTaal", "فستان": "fustaan", "حذاء": "Hidhaa'", "قبعة": "qubbaʿa",
  "جوارب": "jawaarib", "نظارة": "naDHDHaara", "خاتم": "khaatim", "تاج": "taaj", "وشاح": "wishaaH",
  "قفاز": "quffaaz", "معطف": "miʿTaf", "دفتر": "daftar", "ورقة": "waraqa", "مكتب": "maktab",
  "مسطرة": "misTara", "رسالة": "risaala", "خريطة": "khariiTa", "جريدة": "jariida", "مكتبة": "maktaba",
  "درس": "dars", "سؤال": "su'aal", "جواب": "jawaab", "اسم": "ism", "لغة": "lugha",
  "عربي": "ʿarabii", "جبل": "jabal", "نهر": "nahr", "بحيرة": "buHayra", "صحراء": "SaHraa'",
  "غابة": "ghaaba", "جزيرة": "jaziira", "أرض": "'arD", "رمل": "raml", "حجر": "Hajar",
  "ريح": "riiH", "برق": "barq", "رعد": "raʿd", "زهرة": "zahra", "عشب": "ʿushb",
  "بركان": "burkaan", "موجة": "mawja", "شاطئ": "shaaTi'", "مدينة": "madiina", "قرية": "qarya",
  "شارع": "shaariʿ", "سوق": "suuq", "مطعم": "maTʿam", "حديقة": "Hadiiqa", "ملعب": "malʿab",
  "مطار": "maTaar", "بنك": "bank", "فندق": "funduq", "جسر": "jisr", "قلعة": "qalʿa",
  "خيمة": "khayma", "كوكب": "kawkab", "حافلة": "Haafila", "قارب": "qaarib", "طريق": "Tariiq",
  "شاحنة": "shaaHina", "إسعاف": "'isʿaaf", "مروحية": "marwaHiyya", "يوم": "yawm", "ليل": "layl",
  "نهار": "nahaar", "صباح": "SabaaH", "مساء": "masaa'", "أسبوع": "'usbuuʿ", "شهر": "shahr",
  "سنة": "sana", "صيف": "Sayf", "شتاء": "shitaa'", "ربيع": "rabiiʿ", "خريف": "khariif",
  "كبير": "kabiir", "صغير": "Saghiir", "طويل": "Tawiil", "قصير": "qaSiir", "حار": "Haarr",
  "بارد": "baarid", "جديد": "jadiid", "قديم": "qadiim", "سعيد": "saʿiid", "حزين": "Haziin",
  "جميل": "jamiil", "سريع": "sariiʿ", "بطيء": "baTii'", "جائع": "jaa'iʿ", "عطشان": "ʿaTshaan",
  "نظيف": "naDHiif", "مريض": "mariiD", "نعم": "naʿam", "لا": "laa", "سلام": "salaam",
  "شكرا": "shukran", "مرحبا": "marHaban", "أهلا": "'ahlan", "حب": "Hubb", "نوم": "nawm",
  "أكل": "'akl", "لعب": "laʿib", "كرة": "kura", "دمية": "dumya", "لعبة": "luʿba",
  "رسم": "rasm", "صورة": "Suura", "فيلم": "film", "أغنية": "'ughniya", "طبل": "Tabl",
  "عود": "ʿuud", "هدف": "hadaf", "سباحة": "sibaaHa", "رياضة": "riyaaDa", "عيد": "ʿiid",
  "حفلة": "Hafla", "بالون": "baaluun",
};
for (const w of WORDS) w.say = SAY[w.ar];
for (const l of ALL_LETTERS) l.say = SAY[l.word];
for (const l of EXTRA_LETTERS) {           // example picture/meaning come from the word list
  const w = WORDS.find(w => w.ar === l.word);
  l.emoji = w.emoji;
  l.meaning = w.meaning;
}

// Render a pronunciation, underlining the heavy letters.
function sayHtml(say) {
  if (!say) return "";
  const html = say.replace(/DH|[TSDH]/g, m => `<u>${m.toLowerCase()}</u>`);
  return `<span class="say" title="' = short stop (hamza) · ʿ = ayn, a deep throat sound · underlined = heavy letter">“${html}”</span>`;
}

const WORD_GAMES = new Set(["spell", "read"]);
const WORDS_PER_ROUND = 10;

// Letters that never join to the following letter.
const NON_CONNECTORS = new Set(["ا", "د", "ذ", "ر", "ز", "و", "أ", "إ", "آ", "ؤ", "ء"]);

const ZWJ = "\u200D"; // zero-width joiner forces the contextual shape
const formsOf = letter => letter.forms || ["isolated", "initial", "medial", "final"];
const FORM_LABELS = { isolated: "Isolated", initial: "Beginning", medial: "Middle", final: "End" };

function shape(letter, form) {
  switch (form) {
    case "initial": return letter + ZWJ;
    case "medial":  return ZWJ + letter + ZWJ;
    case "final":   return ZWJ + letter;
    default:        return letter;
  }
}

const shuffle = arr => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};
const pick = arr => arr[Math.floor(Math.random() * arr.length)];

// ---------- State ----------
const state = {
  game: null,
  deck: [],
  index: 0,
  score: 0,
  missed: [],
  current: null,
  answered: false,
  pool: LETTERS,     // letters used for wrong-answer choices this round
};

// ---------- Settings (persisted) ----------
const ALL_FORMS = ["isolated", "initial", "medial", "final"];
const STORE_KEY = "arabic-alphabet-settings";
const settings = (() => {
  try {
    const saved = JSON.parse(localStorage.getItem(STORE_KEY)) || {};
    const forms = (saved.forms || []).filter(f => ALL_FORMS.includes(f));
    const letters = (saved.letters || []).filter(a => LETTER_BY_AR[a]);
    // Settings saved before the extra letters existed: switch them on.
    if (letters.length && saved.v !== 2) letters.push(...EXTRA_LETTERS.map(l => l.ar));
    return {
      forms: forms.length ? forms : [...ALL_FORMS],
      letters: new Set(letters.length ? letters : ALL_LETTERS.map(l => l.ar)),
      osk: saved.osk === true,
    };
  } catch {
    return { forms: [...ALL_FORMS], letters: new Set(ALL_LETTERS.map(l => l.ar)), osk: false };
  }
})();
// Letters picked in the grid but not yet applied to the running round.
let pendingLetters = new Set(settings.letters);

function saveSettings() {
  try {
    localStorage.setItem(STORE_KEY, JSON.stringify({
      ...settings,
      v: 2,
      letters: [...settings.letters],
    }));
  } catch { /* storage unavailable — settings just won't persist */ }
}

const selectedLetters = () => ALL_LETTERS.filter(l => settings.letters.has(l.ar));

// Words made only from the given letters; if too few, any word using at least one of them.
function wordsFor(letterSet) {
  const only = WORDS.filter(w => w.letters.every(l => letterSet.has(l.ar)));
  if (only.length >= 3) return only;
  const some = WORDS.filter(w => w.letters.some(l => letterSet.has(l.ar)));
  return some.length ? some : WORDS;
}

const $ = id => document.getElementById(id);
const show = (...ids) => ["menu", "game", "summary"].forEach(s => $(s).classList.toggle("hidden", !ids.includes(s)));

// ---------- Speech (optional) ----------
let arabicVoice = null;
function loadVoice() {
  if (!("speechSynthesis" in window)) return;
  arabicVoice = speechSynthesis.getVoices().find(v => v.lang && v.lang.toLowerCase().startsWith("ar")) || null;
}
if ("speechSynthesis" in window) {
  loadVoice();
  speechSynthesis.onvoiceschanged = loadVoice;
}
function speak(text) {
  if (!arabicVoice) return;
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.voice = arabicVoice;
  u.lang = arabicVoice.lang;
  u.rate = 0.8;
  speechSynthesis.speak(u);
}

// ---------- Game flow ----------
const isWordGame = () => WORD_GAMES.has(state.game);

function startGame(game, items = null) {
  state.game = game;
  const chosen = selectedLetters();
  // Wrong answers come from your chosen letters, as long as there are enough of them.
  state.pool = chosen.length >= 4 ? chosen : ALL_LETTERS;
  state.deck = items ? shuffle(items)
    : isWordGame() ? shuffle(wordsFor(settings.letters)).slice(0, WORDS_PER_ROUND)
    : shuffle(chosen);
  state.index = 0;
  state.score = 0;
  state.missed = [];
  $("total").textContent = state.deck.length;
  $("homeBtn").classList.remove("hidden");
  // Show only the answer area for this game.
  $("options").classList.toggle("hidden", isWordGame());
  $("spellArea").classList.toggle("hidden", game !== "spell");
  $("readArea").classList.toggle("hidden", game !== "read");
  $("formsSection").classList.toggle("hidden", isWordGame());
  // In Read it, show the answer right under Check rather than below the tiles.
  if (game === "read") $("readTools").after($("feedback"));
  else $("game").appendChild($("feedback"));
  show("game");
  nextQuestion();
}

function updateStats() {
  $("count").textContent = Math.min(state.index + 1, state.deck.length);
  $("bar").style.width = (state.index / state.deck.length * 100) + "%";
  $("score").textContent = state.score;
}

function recordResult(correct, item) {
  if (correct) {
    state.score++;
    $("fbMsg").textContent = pick(["Correct! 🎉", "Great job! ⭐", "Well done! 👏", "Excellent! 🌟"]);
    $("fbMsg").className = "msg good";
  } else {
    if (!state.missed.includes(item)) state.missed.push(item);
    $("fbMsg").className = "msg bad";
  }
  $("score").textContent = state.score;
}

// ---------- Word games ----------
// Normalise typed Arabic: compose hamza/madda marks onto their letters, then drop
// vowel marks, tatweel, spaces and joiners. Hamza forms, ة and ى must be typed exactly.
function normaliseArabic(s) {
  return s.normalize("NFC")
    .replace(/[\u064B-\u065F\u0670\u0640\s\u200C\u200D]/g, "")
    .replace(/\u0671/g, "\u0627"); // ٱ (alif wasla) → ا
}

function renderWord() {
  const { word } = state.current;
  state.answered = false;
  updateStats();
  $("feedback").classList.add("hidden");
  $("promptSub").textContent = "";
  $("speakBtn").classList.add("hidden");
  const prompt = $("prompt");

  if (state.game === "spell") {
    $("formTag").textContent = "Spell the word";
    prompt.className = "";
    prompt.innerHTML =
      `<div class="prompt-names">${word.letters.map((l, i) =>
        `<span class="name-chip"><sup>${i + 1}</sup>${l.name}</span>`).join("")}</div>
       <div class="prompt-meaning">${word.emoji} ${word.meaning} · ${sayHtml(word.say)}</div>`;
    const input = $("spellInput");
    input.value = "";
    input.disabled = false;
    input.className = "word-input";
    $("checkSpellBtn").disabled = false;
    if (!settings.osk) input.focus();
  } else {
    $("formTag").textContent = "Read the word";
    prompt.className = "prompt-word";
    prompt.textContent = word.ar;
    state.built = [];
    renderTiles();
    renderBuilt();
  }
}

function showWordFeedback(correct, wrongPositions = new Set()) {
  const { word } = state.current;
  recordResult(correct, word);
  if (!correct) $("fbMsg").innerHTML = `Not quite — it's <span class="arf" style="font-size:1.5rem">${word.ar}</span>`;
  const extras = [...new Set(word.letters.filter(l => l.extra))];
  $("fbExample").innerHTML = `${word.emoji} <span class="word">${word.ar}</span> ${sayHtml(word.say)} — ${word.meaning}` +
    extras.map(l => `<div class="note"><span class="arf">${l.ar}</span> <b>${l.name}</b>: ${l.note}</div>`).join("");
  $("fbForms").className = "forms-row word";
  $("fbForms").innerHTML = word.letters.map((l, i) =>
    `<span class="${wrongPositions.has(i) ? "bad" : ""}">${l.ar}<small>${l.name}</small></span>`).join("");
  $("feedback").classList.remove("hidden");
  $("nextBtn").focus();
  speak(word.ar);
}

function checkSpelling() {
  if (state.answered) return;
  const input = $("spellInput");
  const typed = [...normaliseArabic(input.value)];
  if (!typed.length) { input.focus(); return; }
  state.answered = true;
  const target = state.current.word.letters.map(l => l.ar);
  const correct = typed.join("") === target.join("");
  const wrong = new Set(target.map((c, i) => (typed[i] === c ? -1 : i)).filter(i => i >= 0));
  input.disabled = true;
  input.classList.add(correct ? "correct" : "wrong");
  $("checkSpellBtn").disabled = true;
  showWordFeedback(correct, wrong);
}

function renderOsk() {
  $("osk").classList.toggle("hidden", !settings.osk);
  $("oskToggle").setAttribute("aria-pressed", settings.osk);
  // On touch devices, keep the phone keyboard away while ours is shown.
  $("spellInput").setAttribute("inputmode", settings.osk ? "none" : "text");
  if ($("osk").childElementCount) return;
  ALL_LETTERS.forEach(l => {
    const b = document.createElement("button");
    if (l.extra) b.className = "extra";
    b.textContent = l.ar;
    b.title = l.name.replace(/<\/?u>/g, "");
    b.addEventListener("click", () => typeIntoSpell(l.ar));
    $("osk").appendChild(b);
  });
  const back = document.createElement("button");
  back.className = "wide";
  back.textContent = "⌫ Delete";
  back.addEventListener("click", () => typeIntoSpell(null));
  $("osk").appendChild(back);
}

function typeIntoSpell(ch) {
  const input = $("spellInput");
  if (input.disabled) return;
  input.value = ch ? input.value + ch : [...input.value].slice(0, -1).join("");
}

function renderTiles() {
  const { word } = state.current;
  // Your selected letters, plus the word's own letters so it can always be built.
  const letters = ALL_LETTERS.filter(l => settings.letters.has(l.ar) || word.letters.includes(l));
  $("tiles").innerHTML = "";
  letters.forEach(l => {
    const b = document.createElement("button");
    b.className = "tile";
    b.innerHTML = l.name;
    b.disabled = state.answered;
    b.addEventListener("click", () => addBuilt(l));
    $("tiles").appendChild(b);
  });
}

function renderBuilt(wrong = new Set()) {
  const n = state.current.word.letters.length;
  const names = state.built.map((l, i) => `<span class="${wrong.has(i) ? "bad" : ""}">${l.name}</span>`);
  for (let i = state.built.length; i < n; i++) names.push(`<span class="placeholder">${i + 1}</span>`);
  $("builtNames").innerHTML = names.join("");
  $("builtAr").textContent = state.built.map(l => l.ar).join("");
  $("built").className = "built";
}

function addBuilt(letter) {
  if (state.answered || state.built.length >= state.current.word.letters.length + 3) return;
  state.built.push(letter);
  renderBuilt();
}

function undoBuilt() {
  if (state.answered) return;
  state.built = state.built.slice(0, -1);
  renderBuilt();
}

function checkReading() {
  if (state.answered || !state.built.length) return;
  state.answered = true;
  const target = state.current.word.letters;
  const correct = state.built.length === target.length && state.built.every((l, i) => l === target[i]);
  const wrongBuilt = new Set(state.built.map((l, i) => (l === target[i] ? -1 : i)).filter(i => i >= 0));
  const wrongTarget = new Set(target.map((l, i) => (state.built[i] === l ? -1 : i)).filter(i => i >= 0));
  renderBuilt(wrongBuilt);
  $("built").classList.add(correct ? "correct" : "wrong");
  document.querySelectorAll(".tile").forEach(b => { b.disabled = true; });
  showWordFeedback(correct, wrongTarget);
}

function buildOptions(correct, form) {
  // Mix look-alike letters (same shape group) with random ones to keep it challenging.
  // Only use letters that really have this shape (e.g. no ة at the start of a word).
  const fits = l => l !== correct && formsOf(l).includes(form);
  let pool = state.pool.filter(fits);
  if (pool.length < 3) pool = ALL_LETTERS.filter(fits);
  const similar = shuffle(pool.filter(l => l.group === correct.group));
  const others = shuffle(pool.filter(l => l.group !== correct.group));
  const distractors = [...similar.slice(0, 2), ...others].slice(0, 3);
  return shuffle([correct, ...distractors]);
}

function nextQuestion() {
  if (state.index >= state.deck.length) return endGame();
  if (isWordGame()) {
    state.current = { word: state.deck[state.index] };
    return renderWord();
  }
  const letter = state.deck[state.index];
  state.current = { letter, form: pickForm(letter) };
  renderQuestion();
}

// A random form from the chosen ones that this letter really has (or any it has).
function pickForm(letter) {
  const usable = settings.forms.filter(f => formsOf(letter).includes(f));
  return pick(usable.length ? usable : formsOf(letter));
}

function renderQuestion() {
  const { letter, form } = state.current;
  state.answered = false;

  updateStats();
  $("formTag").textContent = FORM_LABELS[form];
  $("feedback").classList.add("hidden");

  const prompt = $("prompt");
  const sub = $("promptSub");
  const opts = $("options");
  opts.innerHTML = "";

  if (state.game === "ar2name") {
    prompt.className = "prompt-ar";
    prompt.textContent = shape(letter.ar, form);
    sub.textContent = letter.ar === "ء" ? "Hamza on its own never joins other letters."
      : letter.forms ? "This letter only comes at the end of a word."
      : NON_CONNECTORS.has(letter.ar) && (form === "initial" || form === "medial")
      ? "This letter never joins to the letter after it." : "";
    $("speakBtn").classList.toggle("hidden", !arabicVoice);
  } else {
    prompt.className = "prompt-en";
    prompt.innerHTML = letter.name;
    sub.textContent = "Pick the letter in its " + FORM_LABELS[form].toLowerCase() + " form";
    $("speakBtn").classList.add("hidden");
  }

  buildOptions(letter, form).forEach((opt, i) => {
    const b = document.createElement("button");
    b.className = "option" + (state.game === "name2ar" ? " ar" : "");
    b.dataset.name = opt.name;
    b.innerHTML = `<span class="key">${i + 1}</span>`;
    const label = document.createElement("span");
    if (state.game === "ar2name") label.innerHTML = opt.name;
    else label.textContent = shape(opt.ar, form);
    b.appendChild(label);
    b.addEventListener("click", () => answer(b, opt));
    opts.appendChild(b);
  });
}

function answer(btn, chosen) {
  if (state.answered) return;
  state.answered = true;
  const { letter, form } = state.current;
  const correct = chosen === letter;

  document.querySelectorAll(".option").forEach(b => {
    b.disabled = true;
    if (b.dataset.name === letter.name) b.classList.add("correct");
  });

  recordResult(correct, letter);
  if (!correct) {
    btn.classList.add("wrong");
    $("fbMsg").innerHTML = `Not quite — it's <b>${letter.name}</b> <span class="arf">${letter.ar}</span>`;
  }

  $("fbExample").innerHTML =
    `${letter.emoji} <span class="word">${letter.word}</span> ${sayHtml(letter.say)} — ${letter.meaning}` +
    (letter.note ? `<div class="note"><b>${letter.name}</b>: ${letter.note}</div>` : "");
  $("fbForms").className = "forms-row";
  $("fbForms").innerHTML = formsOf(letter).map(f =>
    `<span style="${f === form ? "color:var(--accent)" : ""}">${shape(letter.ar, f)}<small>${FORM_LABELS[f]}</small></span>`
  ).join("");

  $("feedback").classList.remove("hidden");
  $("nextBtn").focus();
  speak(letter.ar);
}

function endGame() {
  $("bar").style.width = "100%";
  const total = state.deck.length;
  $("finalScore").textContent = `${state.score} / ${total}`;
  $("missedWrap").classList.toggle("hidden", !state.missed.length);
  $("retryMissedBtn").classList.toggle("hidden", !state.missed.length);
  $("missedTitle").textContent = isWordGame() ? "Words to review:" : "Letters to review:";
  $("missed").innerHTML = state.missed.map(item => isWordGame()
    ? `<div><div class="ar">${item.ar}</div>${sayHtml(item.say)}<br>${item.emoji} ${item.meaning}</div>`
    : `<div><div class="ar">${item.ar}</div>${item.name}</div>`).join("");
  show("summary");
}

function goHome() {
  $("homeBtn").classList.add("hidden");
  show("menu");
}

// ---------- Settings panel ----------
function toggleSettings(open = $("settings").classList.contains("hidden")) {
  $("settings").classList.toggle("hidden", !open);
  $("settingsBtn").setAttribute("aria-expanded", open);
  if (open) {
    pendingLetters = new Set(settings.letters);
    renderLetterGrid();
  }
}

function renderFormChecks() {
  document.querySelectorAll("#formChecks input").forEach(i => { i.checked = settings.forms.includes(i.value); });
}

function onFormsChange(e) {
  const forms = [...document.querySelectorAll("#formChecks input:checked")].map(i => i.value);
  if (!forms.length) {           // always keep at least one form
    e.target.checked = true;
    return;
  }
  settings.forms = forms;
  saveSettings();
  // If the current letter's form was just switched off, re-draw it in an allowed form.
  if (!isWordGame() && state.current && !state.answered && !forms.includes(state.current.form)) {
    const newForm = pickForm(state.current.letter);
    if (newForm === state.current.form) return; // the letter has no other shape
    state.current.form = newForm;
    renderQuestion();
  }
}

function renderLetterGrid() {
  const grid = $("letterGrid");
  grid.innerHTML = "";
  ALL_LETTERS.forEach(l => {
    const b = document.createElement("button");
    b.className = "letter-chip" + (l.extra ? " extra" : "");
    b.setAttribute("aria-pressed", pendingLetters.has(l.ar));
    b.innerHTML = `<span class="arf">${l.ar}</span><small>${l.name}</small>`;
    b.addEventListener("click", () => {
      if (pendingLetters.has(l.ar)) pendingLetters.delete(l.ar);
      else pendingLetters.add(l.ar);
      b.setAttribute("aria-pressed", pendingLetters.has(l.ar));
      updateLettersFooter();
    });
    grid.appendChild(b);
  });
  updateLettersFooter();
}

function updateLettersFooter() {
  const n = pendingLetters.size;
  const changed = n !== settings.letters.size || [...pendingLetters].some(a => !settings.letters.has(a));
  $("letterCount").textContent = `(${n} of ${ALL_LETTERS.length})`;
  $("applyLettersBtn").disabled = !n || !changed;
  let hint = !n ? "Pick at least one letter." : changed ? "Your score resets when you restart." : "";
  if (n && isWordGame()) {
    const only = WORDS.filter(w => w.letters.every(l => pendingLetters.has(l.ar))).length;
    hint = (only >= 3 ? `${only} words use only these letters. `
      : "Few words use only these letters, so words containing them are included. ") + hint;
  }
  $("lettersHint").textContent = hint;
}

// which: "all" (36), "basic" (the 28 from the chart) or "none"
function setAllLetters(which) {
  const list = which === "all" ? ALL_LETTERS : which === "basic" ? LETTERS : [];
  pendingLetters = new Set(list.map(l => l.ar));
  renderLetterGrid();
}

function applyLetters() {
  if (!pendingLetters.size) return;
  settings.letters = new Set(pendingLetters);
  saveSettings();
  toggleSettings(false);
  startGame(state.game);
}

// ---------- Events ----------
renderFormChecks();
$("formChecks").addEventListener("change", onFormsChange);
$("settingsBtn").addEventListener("click", () => toggleSettings());
$("allLettersBtn").addEventListener("click", () => setAllLetters("all"));
$("basicLettersBtn").addEventListener("click", () => setAllLetters("basic"));
$("noLettersBtn").addEventListener("click", () => setAllLetters("none"));
$("applyLettersBtn").addEventListener("click", applyLetters);

document.querySelectorAll(".game-card").forEach(c =>
  c.addEventListener("click", () => startGame(c.dataset.game)));
$("nextBtn").addEventListener("click", () => { state.index++; nextQuestion(); });
$("againBtn").addEventListener("click", () => startGame(state.game));
$("retryMissedBtn").addEventListener("click", () => startGame(state.game, state.missed));
$("menuBtn").addEventListener("click", goHome);
$("homeBtn").addEventListener("click", goHome);
$("speakBtn").addEventListener("click", () => speak(state.current.letter.ar));

// Word games
$("checkSpellBtn").addEventListener("click", checkSpelling);
$("spellInput").addEventListener("keydown", e => {
  if (e.key === "Enter" && !state.answered) { e.preventDefault(); e.stopPropagation(); checkSpelling(); }
});
$("oskToggle").addEventListener("click", () => {
  settings.osk = !settings.osk;
  saveSettings();
  renderOsk();
});
renderOsk();
$("undoBtn").addEventListener("click", () => undoBuilt());
$("checkReadBtn").addEventListener("click", checkReading);

document.addEventListener("keydown", e => {
  if ($("game").classList.contains("hidden")) return;
  if ($("settings").contains(e.target)) return; // don't answer while using the settings panel
  if (!state.answered && !isWordGame() && /^[1-4]$/.test(e.key)) {
    const btn = document.querySelectorAll(".option")[+e.key - 1];
    if (btn) btn.click();
  } else if (!state.answered && state.game === "read" && e.key === "Backspace") {
    e.preventDefault();
    undoBuilt();
  } else if (!state.answered && state.game === "read" && e.key === "Enter" && e.target.tagName !== "BUTTON") {
    checkReading();
  } else if (state.answered && (e.key === "Enter" || e.key === " ") && e.target !== $("nextBtn")) {
    e.preventDefault();
    $("nextBtn").click();
  }
});
