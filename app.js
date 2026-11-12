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
const ORDER_GAMES = new Set(["order-ar", "order-name"]);
const VOCAB_GAMES = new Set(["vocab-learn", "vocab-ar2en", "vocab-en2ar"]);
const VOCAB_PART_SIZE = 500;
const VOCAB_PART_COUNT = 8;           // vocab/words-1.js … words-N.js that exist so far
const VOCAB_SIZE_STEP = 50;           // the word-set slider moves 50 words at a time
const VOCAB_MAX = VOCAB_PART_COUNT * VOCAB_PART_SIZE;
// The vocabulary range is words #vocabFrom+1 … #vocabTo, both multiples of 50.
// Older saves only had vocabSize (the first N words).
function vocabRange(saved) {
  const ok = v => Number.isInteger(v) && v % VOCAB_SIZE_STEP === 0 && v >= 0 && v <= VOCAB_MAX;
  let from = ok(saved.vocabFrom) ? saved.vocabFrom : 0;
  let to = ok(saved.vocabTo) ? saved.vocabTo : ok(saved.vocabSize) ? saved.vocabSize : VOCAB_SIZE_STEP;
  if (to < VOCAB_SIZE_STEP) to = VOCAB_SIZE_STEP;
  if (from >= to) from = to - VOCAB_SIZE_STEP;
  return { vocabFrom: from, vocabTo: to };
}
const VOCAB_CHOICE_COUNTS = [4, 6];
const ROUND_SIZES = { min: 10, max: 100, step: 10 };   // words per round in word & vocabulary games

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
  vocab: [],         // the loaded vocabulary words
  loadToken: 0,      // bumped on every start/go-home so a slow word load can't take over
};

// ---------- Settings (persisted) ----------
const ALL_FORMS = ["isolated", "initial", "medial", "final"];
const STORE_KEY = "arabic-alphabet-settings";
const CHOICE_COUNTS = [4, 6, 8];
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
      choices: CHOICE_COUNTS.includes(saved.choices) ? saved.choices : 4,
      vocabChoices: VOCAB_CHOICE_COUNTS.includes(saved.vocabChoices) ? saved.vocabChoices : 4,
      roundSize: Number.isInteger(saved.roundSize) && saved.roundSize >= ROUND_SIZES.min
        && saved.roundSize <= ROUND_SIZES.max && saved.roundSize % ROUND_SIZES.step === 0 ? saved.roundSize : 10,
      learnNext: Number.isInteger(saved.learnNext) && saved.learnNext >= 0 ? saved.learnNext : 0,
      ...vocabRange(saved),
      learnTable: saved.learnTable === true,
      harakat: saved.harakat !== false,
    };
  } catch {
    return { forms: [...ALL_FORMS], letters: new Set(ALL_LETTERS.map(l => l.ar)), osk: false, choices: 4, vocabChoices: 4, vocabFrom: 0, vocabTo: VOCAB_SIZE_STEP, learnNext: 0, roundSize: 10, learnTable: false, harakat: true };
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
const isOrderGame = () => ORDER_GAMES.has(state.game);
const isVocabGame = () => VOCAB_GAMES.has(state.game);
const drill = () => DRILL_GAMES[state.game];
const isDrillQuiz = () => !!drill() && !drill().table;
// Games that offer 4 or 6 answer choices (saved as vocabChoices).
const usesVocabChoices = () => isVocabGame() || isDrillQuiz();

async function startGame(game, items = null) {
  state.game = game;
  const token = ++state.loadToken;   // a newer start (or going home) cancels this one
  const chosen = selectedLetters();
  // Wrong answers come from your chosen letters, as long as there are enough of them.
  state.pool = chosen.length >= 4 ? chosen : ALL_LETTERS;
  $("homeBtn").classList.remove("hidden");
  // Show only the answer area for this game.
  $("options").classList.toggle("hidden", isWordGame());
  $("spellArea").classList.toggle("hidden", game !== "spell");
  $("readArea").classList.toggle("hidden", game !== "read");
  $("options").classList.toggle("order-grid", isOrderGame());
  $("options").classList.toggle("names", game === "order-name");
  // Settings that apply to this game.
  $("formsSection").classList.toggle("hidden", isWordGame() || isVocabGame() || !!drill());
  $("choicesSection").classList.toggle("hidden", isWordGame() || game === "vocab-learn");
  const unscored = game === "vocab-learn" || !!drill()?.table;          // flashcards and tables aren't scored
  $("scorePill").classList.toggle("hidden", unscored);
  $("lettersSection").classList.toggle("hidden", isVocabGame() || !!drill());
  $("vocabSection").classList.toggle("hidden", !isVocabGame());
  $("roundSection").classList.toggle("hidden", !isWordGame() && !isVocabGame() && !isDrillQuiz());
  renderRoundSize();
  renderChoiceCount();
  renderVocabRange();
  renderLearnInfo();
  $("tableBtn").classList.toggle("hidden", game !== "vocab-learn");
  setTableView(game === "vocab-learn" && settings.learnTable);
  // The order games always use the whole alphabet, so they have no settings.
  $("settingsBtn").classList.toggle("hidden", isOrderGame() || unscored && !isVocabGame());
  if (isOrderGame() || drill()?.table) toggleSettings(false);
  // In Read it, show the answer right under Check rather than below the tiles.
  if (game === "read") $("readTools").after($("feedback"));
  else $("game").appendChild($("feedback"));
  show("game");

  state.deck = [];                     // the old round is over (matters while words load)
  state.current = null;
  if (isVocabGame()) {
    state.answered = true;             // nothing to answer while the words load
    showVocabStatus("Loading words…");
    try {
      state.vocab = await loadVocab(settings.vocabFrom, settings.vocabTo);
    } catch {
      if (token === state.loadToken) showVocabStatus("Couldn't load the word list. Check your connection and try again.");
      return;
    }
    if (token !== state.loadToken) return;
  }
  if (game === "vocab-learn") renderWordTable();

  // Learn goes through the range in order, picking up where you left off
  // (or at the start of the range if you left off outside it).
  state.learnFrom = game === "vocab-learn" && !items ? learnStart() : null;
  state.retry = !!items;
  state.deck = items ? shuffle(items)
    : state.learnFrom !== null ? learnDeck(settings.roundSize)
    : isVocabGame() ? shuffle(state.vocab).slice(0, settings.roundSize)
    : isWordGame() ? shuffle(wordsFor(settings.letters)).slice(0, settings.roundSize)
    : drill()?.table ? drill().set        // one table per verb / sentence
    : drill() ? shuffle(drillQuestions(drill().set)).slice(0, settings.roundSize)
    : isOrderGame() ? [LETTERS]          // one pass through the whole alphabet
    : shuffle(chosen);
  state.index = 0;
  state.score = 0;
  state.missed = [];
  $("total").textContent = state.deck.length;
  nextQuestion();
}

// Where Learn starts, as a position in the loaded range (settings.learnNext is a word number, 0-based).
const learnStart = () => settings.learnNext >= settings.vocabFrom && settings.learnNext < settings.vocabTo
  ? settings.learnNext - settings.vocabFrom : 0;

// The next n words of the list in order, from where Learn left off.
function learnDeck(n) {
  const len = state.vocab.length;
  return Array.from({ length: Math.min(n, len) }, (_, i) => state.vocab[(state.learnFrom + i) % len]);
}

function renderRoundSize() {
  $("roundSize").value = settings.roundSize;
  $("roundSizeLabel").textContent = settings.roundSize;
}

// Change the length of the running round: add more words or drop ones not reached yet.
function resizeRound(n) {
  settings.roundSize = n;
  saveSettings();
  if (!state.deck.length || state.retry || (!isWordGame() && !isVocabGame() && !isDrillQuiz())) return;
  if (state.learnFrom !== null) {
    state.deck = learnDeck(n);
  } else if (n > state.deck.length) {
    const inDeck = new Set(state.deck);
    const pool = isVocabGame() ? state.vocab : isDrillQuiz() ? drillQuestions(drill().set) : wordsFor(settings.letters);
    state.deck.push(...shuffle(pool.filter(w => !inDeck.has(w))).slice(0, n - state.deck.length));
  }
  // Never cut the word you're on (or ones already played).
  state.deck.length = Math.max(Math.min(n, state.deck.length), state.index + 1);
  $("total").textContent = state.deck.length;
  updateStats();
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
  const wrongCount = settings.choices - 1;
  let pool = state.pool.filter(fits);
  if (pool.length < wrongCount) pool = ALL_LETTERS.filter(fits);
  const similar = shuffle(pool.filter(l => l.group === correct.group));
  const others = shuffle(pool.filter(l => l.group !== correct.group));
  // About half the wrong answers are look-alikes (2 of 3, 3 of 5, 4 of 7).
  const distractors = [...similar.slice(0, settings.choices / 2), ...others].slice(0, wrongCount);
  return shuffle([correct, ...distractors]);
}

function nextQuestion() {
  if (state.index >= state.deck.length) return endGame();
  if (isWordGame()) {
    state.current = { word: state.deck[state.index] };
    return renderWord();
  }
  if (isVocabGame()) {
    state.current = { word: state.deck[state.index] };
    return state.game === "vocab-learn" ? renderStudy() : renderVocab();
  }
  if (drill()) {
    state.current = { word: state.deck[state.index] };
    return drill().table ? renderDrillTable() : renderDrillQuiz();
  }
  if (isOrderGame()) {
    state.current = { step: 0, wrongHere: 0 };
    return renderOrder();
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
  opts.dataset.count = settings.choices;

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

// ---------- Vocabulary games ----------
// The word list is split into files of 500 words (vocab/words-1.js … words-8.js),
// most common first. Only the files needed for the chosen word set are loaded.
const VOCAB_VERSION = document.documentElement.dataset.vocab || "";
const vocabParts = {};               // part number -> Promise of its words
window.VOCAB_PARTS = window.VOCAB_PARTS || {};

function loadVocabPart(i) {
  if (vocabParts[i]) return vocabParts[i];
  return vocabParts[i] = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = `vocab/words-${i}.js?v=${VOCAB_VERSION}`;
    const fail = () => { delete vocabParts[i]; script.remove(); reject(new Error(`vocab part ${i}`)); };
    script.onload = () => {
      const rows = window.VOCAB_PARTS[i];
      if (!rows) return fail();
      // n: the word's number in the whole list (1 = most common)
      // ar: plain spelling (used to tell words apart); voc: with vowel marks (harakat)
      resolve(rows.map(([voc, en, say], j) =>
        ({ ar: voc.replace(HARAKAT, ""), voc, en, say, n: (i - 1) * VOCAB_PART_SIZE + j + 1 })));
    };
    script.onerror = fail;
    document.head.appendChild(script);
  });
}

// Words #from+1 … #to, loading only the files that hold them.
async function loadVocab(from, to) {
  const first = Math.floor(from / VOCAB_PART_SIZE), last = Math.ceil(to / VOCAB_PART_SIZE);
  const parts = Array.from({ length: last - first }, (_, i) => loadVocabPart(first + i + 1));
  const offset = first * VOCAB_PART_SIZE;
  return (await Promise.all(parts)).flat().slice(from - offset, to - offset);
}

// ---------- Vowel marks (harakat) ----------
const HARAKAT = /[ً-ْٰ]/g;
const FATHA = "َ", DAMMA = "ُ", KASRA = "ِ", SUKUN = "ْ", SHADDA = "ّ";
const FATHATAN = "ً", DAMMATAN = "ٌ", KASRATAN = "ٍ", DAGGER_ALIF = "ٰ";
// How a vocabulary word is shown: with or without the vowel marks (a setting).
const arOf = w => settings.harakat ? w.voc : w.ar;

// Split a word into letters, each with its marks and what it sounds like:
// { ch: "بَ", name: "baa", vowel: "fatha", sound: "a", double: false }
function letterSounds(voc) {
  const out = [];
  for (const c of voc) {
    if (c >= "ً" && c <= "ْ" || c === DAGGER_ALIF) { if (out.length) out.at(-1).marks += c; }
    else out.push({ base: c, marks: "" });
  }
  out.forEach((l, i) => {
    const m = l.marks, prev = out[i - 1]?.marks || "";
    l.ch = l.base + m;
    l.name = LETTER_BY_AR[l.base]?.name || "";
    l.double = m.includes(SHADDA);
    [l.vowel, l.sound] =
        m.includes(FATHA) ? ["fatha", "a"] : m.includes(DAMMA) ? ["damma", "u"] : m.includes(KASRA) ? ["kasra", "i"]
      : m.includes(FATHATAN) ? ["fatha", "an"] : m.includes(DAMMATAN) ? ["damma", "un"] : m.includes(KASRATAN) ? ["kasra", "in"]
      : m.includes(DAGGER_ALIF) ? ["fatha", "aa"] : m.includes(SUKUN) ? ["sukun", "–"]
      // a long vowel: alif after fatha, waaw after damma, yaa after kasra
      : "اى".includes(l.base) && prev.includes(FATHA) ? ["fatha", "aa"]
      : l.base === "و" && prev.includes(DAMMA) ? ["damma", "uu"]
      : l.base === "ي" && prev.includes(KASRA) ? ["kasra", "ii"]
      : ["", ""];
  });
  return out;
}

// The four marks, as on the chart: fatha a, damma u, kasra i, sukun (no vowel). Plus shadda.
const HARAKAT_LEGEND = `<div class="harakat-legend">
  <span class="fatha"><b>ـَ</b> fatha = a</span><span class="damma"><b>ـُ</b> damma = u</span>
  <span class="kasra"><b>ـِ</b> kasra = i</span><span class="sukun"><b>ـْ</b> sukun = no vowel</span>
  <span><b>ـّ</b> shadda = say the letter twice</span>
  <span class="long">Long vowels: <b>ـَا</b> aa · <b>ـُو</b> uu · <b>ـِي</b> ii</span></div>`;

const escapeHtml = s => s.replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);

function showVocabStatus(message) {
  $("formTag").textContent = "Vocabulary";
  $("prompt").className = "vocab-status";
  $("prompt").textContent = message;
  $("promptSub").textContent = "";
  $("options").innerHTML = "";
  $("feedback").classList.add("hidden");
  $("speakBtn").classList.add("hidden");
  if (state.game === "vocab-learn") {
    $("wordTableBody").innerHTML = `<tr><td colspan="4" class="n">${escapeHtml(message)}</td></tr>`;
  }
}

// Learn's word list: every word in the range. Tap a row to hear it.
function renderWordTable() {
  $("tableLegend").innerHTML = settings.harakat ? HARAKAT_LEGEND : "";
  $("wordTableBody").innerHTML = state.vocab.map((w, i) =>
    `<tr data-i="${i}"><td class="n">${w.n}</td><td class="ar" dir="rtl" lang="ar">${escapeHtml(arOf(w))}</td>`
    + `<td>${sayHtml(w.say)}</td><td>${escapeHtml(w.en)}</td></tr>`).join("");
}

function setTableView(on) {
  $("game").classList.toggle("table-view", on);
  $("tableBtn").setAttribute("aria-pressed", on);
  $("tableBtn").textContent = on ? "🃏 Flashcards" : "📋 Word list";
}

// Wrong answers: other words with different spellings and meanings. Verbs ("to …")
// are matched with verbs and other words with other words, so the answer isn't obvious.
function vocabOptions(word) {
  const isVerb = w => w.en.startsWith("to ");
  const others = state.vocab.filter(w => w.ar !== word.ar && w.en !== word.en);
  const ordered = [...shuffle(others.filter(w => isVerb(w) === isVerb(word))),
                   ...shuffle(others.filter(w => isVerb(w) !== isVerb(word)))];
  const usedAr = new Set([word.ar]), usedEn = new Set([word.en]);
  const picked = [];
  for (const w of ordered) {
    if (picked.length === settings.vocabChoices - 1) break;
    if (usedAr.has(w.ar) || usedEn.has(w.en)) continue;
    usedAr.add(w.ar);
    usedEn.add(w.en);
    picked.push(w);
  }
  return shuffle([word, ...picked]);
}

// Learn: flashcards, no quiz. Each card shows the word, how it sounds, what it means
// and the letters it's written with.
function renderStudy() {
  const { word } = state.current;
  state.current.studying = true;
  state.answered = true;                 // nothing to answer here
  updateStats();
  $("feedback").classList.add("hidden");
  $("formTag").textContent = `Word #${word.n} · range ${settings.vocabFrom + 1}–${settings.vocabTo}`;
  $("prompt").className = "prompt-word";
  $("prompt").textContent = arOf(word);
  // Each letter with its name and, when the marks are shown, its vowel in the chart's colours.
  const letters = letterSounds(settings.harakat ? word.voc : word.ar).map(l => !l.base.trim()
    ? `<span class="gap"></span>`
    : `<span>${l.ch}<small>${l.name}</small>`
      + (settings.harakat && (l.sound || l.double)
        ? `<em class="vowel ${l.vowel}">${l.double ? "×2 " : ""}${l.sound}</em>` : "")
      + `</span>`).join("");
  $("promptSub").innerHTML = `<div class="study-meaning">${sayHtml(word.say)} <b>${escapeHtml(word.en)}</b></div>`
    + `<div class="forms-row word study-letters">${letters}</div>`
    + (settings.harakat ? HARAKAT_LEGEND : "");
  $("speakBtn").classList.toggle("hidden", !arabicVoice);
  const opts = $("options");
  opts.innerHTML = "";
  delete opts.dataset.count;
  const go = document.createElement("button");
  go.className = "btn study-go";
  go.textContent = state.index + 1 < state.deck.length ? "Next word →" : "Finish ✓";
  go.addEventListener("click", nextCard);
  opts.appendChild(go);
  go.focus();
  speak(word.voc);
}

function nextCard() {
  if (!state.current || !state.current.studying || !state.deck.length) return;
  state.current.studying = false;
  // Remember how far you got, so the next round starts with the following words.
  if (state.learnFrom !== null) {
    settings.learnNext = state.vocab[(state.learnFrom + state.index + 1) % state.vocab.length].n - 1;
    saveSettings();
    renderLearnInfo();
  }
  state.index++;
  nextQuestion();
}

const vocabAr2En = () => state.game !== "vocab-en2ar";

function renderVocab() {
  const { word } = state.current;
  const ar2en = vocabAr2En();
  state.answered = false;
  updateStats();
  $("feedback").classList.add("hidden");
  $("speakBtn").classList.add("hidden");
  $("formTag").textContent = ar2en ? "What does it mean?" : "Pick the Arabic";
  $("speakBtn").classList.add("hidden");
  $("prompt").className = ar2en ? "prompt-word" : "prompt-en vocab";
  $("prompt").textContent = ar2en ? arOf(word) : word.en;
  $("promptSub").textContent = "";

  const opts = $("options");
  opts.innerHTML = "";
  opts.dataset.count = settings.vocabChoices;
  vocabOptions(word).forEach((w, i) => {
    const b = document.createElement("button");
    b.className = "option " + (ar2en ? "vocab-en" : "ar vocab-ar");
    b.dataset.key = w.ar;
    b.innerHTML = `<span class="key">${i + 1}</span>`;
    const label = document.createElement("span");
    label.textContent = ar2en ? w.en : arOf(w);
    b.appendChild(label);
    b.addEventListener("click", () => answerVocab(b, w));
    opts.appendChild(b);
  });
}

function answerVocab(btn, chosen) {
  if (state.answered) return;
  state.answered = true;
  const { word } = state.current;
  const correct = chosen === word;
  document.querySelectorAll(".option").forEach(b => {
    b.disabled = true;
    if (b.dataset.key === word.ar) b.classList.add("correct");
  });
  recordResult(correct, word);
  if (!correct) {
    btn.classList.add("wrong");
    $("fbMsg").innerHTML = vocabAr2En()
      ? `Not quite — it means <b>${escapeHtml(word.en)}</b>`
      : `Not quite — it's <span class="arf" style="font-size:1.5rem">${arOf(word)}</span>`;
  }
  $("fbExample").innerHTML = `<span class="word">${arOf(word)}</span> ${sayHtml(word.say)} — ${escapeHtml(word.en)}`;
  $("fbForms").className = "forms-row";
  $("fbForms").innerHTML = "";
  $("feedback").classList.remove("hidden");
  $("nextBtn").focus();
  speak(word.voc);
}

function renderLearnInfo() {
  const show = state.game === "vocab-learn";
  $("learnInfo").classList.toggle("hidden", !show);
  if (!show) return;
  $("learnNext").textContent = `Next new word: #${settings.vocabFrom + learnStart() + 1}.`;
  $("learnRestartBtn").textContent = `Start again from #${settings.vocabFrom + 1}`;
}

// Draw the two-handled range slider (while dragging, from/to are the unsaved values).
function renderVocabRange(from = settings.vocabFrom, to = settings.vocabTo) {
  for (const [id, v] of [["vocabFrom", from], ["vocabTo", to]]) {
    const s = $(id);
    s.min = 0;
    s.max = VOCAB_MAX;
    s.step = VOCAB_SIZE_STEP;
    s.value = v;
  }
  // When the handles meet at the far right, the left one must be on top so it can be dragged.
  $("vocabFrom").classList.toggle("on-top", to === VOCAB_MAX && to - from <= VOCAB_SIZE_STEP * 2);
  $("vocabFill").style.left = (from / VOCAB_MAX * 100) + "%";
  $("vocabFill").style.width = ((to - from) / VOCAB_MAX * 100) + "%";
  $("vocabRangeLabel").textContent = `${from + 1}–${to}`;
  $("vocabCountLabel").textContent = `(${to - from} words)`;
  $("vocabPrevBtn").disabled = from === 0;
  $("vocabNextBtn").disabled = to === VOCAB_MAX;
}

// Keep at least 50 words between the handles while dragging.
function dragVocabRange(e) {
  let from = +$("vocabFrom").value, to = +$("vocabTo").value;
  if (to - from < VOCAB_SIZE_STEP) {
    if (e.target.id === "vocabFrom") from = to - VOCAB_SIZE_STEP;
    else to = from + VOCAB_SIZE_STEP;
  }
  renderVocabRange(from, to);
}

function setVocabRange(from, to) {
  if (from === settings.vocabFrom && to === settings.vocabTo) return renderVocabRange();
  settings.vocabFrom = from;
  settings.vocabTo = to;
  saveSettings();
  renderVocabRange();
  startGame(state.game);             // new round with the new words
}

// Previous / Next: slide the whole range by its own size, e.g. 101–150 → 151–200.
function shiftVocabRange(dir) {
  const size = settings.vocabTo - settings.vocabFrom;
  const from = Math.min(Math.max(settings.vocabFrom + dir * size, 0), VOCAB_MAX - size);
  setVocabRange(from, from + size);
}

// ---------- Spoken Arabic: pronoun drills ----------
// One word in the sentence changes with the pronoun: a verb's prefix/ending (أَشْرَب، تَشْرَب، يَشْرَب…)
// or a possessive ending (اِسْمِي، اِسْمَك، اِسْمُو…). Each set has a table per item and a fill-in quiz.
// Colloquial (spoken) forms, as in the class notes.
const PRONOUNS = [
  { ar: "أَنَا",    say: "'anaa",  en: "I",         pre: "أ", suf: "" },
  { ar: "أَنْتَ",   say: "'anta",  en: "you (m.)",  pre: "ت", suf: "" },
  { ar: "أَنْتِ",   say: "'anti",  en: "you (f.)",  pre: "ت", suf: "ي" },
  { ar: "هُوَ",    say: "huwa",   en: "he",        pre: "ي", suf: "", third: true },
  { ar: "هِيَ",    say: "hiya",   en: "she",       pre: "ت", suf: "", third: true },
  { ar: "أَنْتُمْ",  say: "'antum", en: "you (pl.)", pre: "ت", suf: "و" },
  { ar: "نَحْنُ",   say: "naHnu",  en: "we",        pre: "ن", suf: "" },
  { ar: "هُمْ",    say: "hum",    en: "they",      pre: "ي", suf: "و" },
];
const PREFIX_SAY = { "أ": "'", "ت": "t", "ي": "y", "ن": "n" };

// Present-tense verbs: [stem (as after the prefix), how the stem sounds, English].
// The prefix takes a fatha (تَشْرَب) unless the stem starts with alif (تاكُل, آكُل).
const VERBS = [
  ["نَام", "naam", "sleep"], ["شْرَب", "shrab", "drink"], ["اكُل", "aakul", "eat"],
  ["كْتُب", "ktub", "write"], ["دْرُس", "drus", "study"], ["لْعَب", "lʿab", "play"],
  ["فْهَم", "fham", "understand"], ["سْمَع", "smaʿ", "hear"], ["فْتَح", "ftaH", "open"],
  ["طْبُخ", "Tbukh", "cook"], ["غْسِل", "ghsil", "wash"], ["دْخُل", "dkhul", "go in"],
  ["نْزِل", "nzil", "go down"], ["رْسُم", "rsum", "draw"], ["عْرِف", "ʿrif", "know"],
  ["ضْحَك", "D-Hak", "laugh"], ["جْلِس", "jlis", "sit"], ["رُوح", "ruuH", "go"],
  ["شُوف", "shuuf", "see"], ["زُور", "zuur", "visit"], ["قُول", "quul", "say"],
  ["بِيع", "biiʿ", "sell"],
];

// "he sleeps", "she goes", "he studies", "he washes"
function thirdPerson(en) {
  const [verb, ...rest] = en.split(" ");
  const s = verb === "go" || /(s|sh|ch|x|z)$/.test(verb) ? verb + "es"
    : /[^aeiou]y$/.test(verb) ? verb.slice(0, -1) + "ies" : verb + "s";
  return [s, ...rest].join(" ");
}
const capitalise = s => s[0].toUpperCase() + s.slice(1);

// A verb's form for one pronoun, as [prefix, stem, ending] plus how it sounds.
function verbParts([stem, stemSay], p) {
  const vowel = stem.startsWith("ا") ? "" : FATHA;
  let pre = p.pre + vowel, preSay = PREFIX_SAY[p.pre] + (vowel ? "a" : "");
  if (p.pre === "أ" && stem.startsWith("ا")) { pre = "آ"; stem = stem.slice(1); }   // أ + اكُل → آكُل
  const suf = p.suf;
  if (suf) stem += suf === "ي" ? KASRA : DAMMA;
  return { parts: [pre, stem, suf], say: preSay + stemSay + (suf === "ي" ? "ii" : suf ? "uu" : "") };
}

const VERB_SET = VERBS.map(v => {
  const rows = PRONOUNS.map(p => {
    const { parts, say } = verbParts(v, p);
    return { p, slot: parts, sentenceSay: `${p.say} ${say}`,
             en: `${capitalise(p.en)} ${p.third ? thirdPerson(v[2]) : v[2]}` };
  });
  return { title: rows[0].slot.join(""), titleEn: "to " + v[2], rows };
});

// Introducing yourself. Same pronouns, but "we" is the spoken إِحْنَا.
const INTRO_PRONOUNS = PRONOUNS.map(p => p.en === "we" ? { ...p, ar: "إِحْنَا", say: "'iHna" } : p);
const SUBJECT = ["I am", "You (m.) are", "You (f.) are", "He is", "She is", "You (pl.) are", "We are", "They are"];
const POSSESSIVE = ["My", "Your (m.)", "Your (f.)", "His", "Her", "Your (pl.)", "Our", "Their"];
// Each form: [before, stem, ending, how it sounds] – the before/ending parts are highlighted.
const INTRO = [
  { titleEn: "My name is Michael", rest: ["مِيخَائِيل", "miikhaa'iil"], en: i => `${POSSESSIVE[i]} name is Michael`,
    forms: [["", "اِسْمِ", "ي", "ismi"], ["", "اِسْمَ", "ك", "ismak"], ["", "اِسْمِ", "ك", "ismik"],
            ["", "اِسْمُ", "و", "ismu"], ["", "اِسِمْ", "هَا", "isimha"], ["", "اِسِمْ", "كُمْ", "isimkum"],
            ["", "اِسِمْ", "نَا", "isimna"], ["", "اِسِمْ", "هُمْ", "isimhum"]] },
  { titleEn: "I am forty", rest: ["أَرْبَعِين", "'arbaʿiin"], en: i => `${SUBJECT[i]} forty`,
    forms: [["", "عُمْرِ", "ي", "ʿumri"], ["", "عُمْرَ", "ك", "ʿumrak"], ["", "عُمْرِ", "ك", "ʿumrik"],
            ["", "عُمْرُ", "و", "ʿumru"], ["", "عُمُرْ", "هَا", "ʿumurha"], ["", "عُمُرْ", "كُمْ", "ʿumurkum"],
            ["", "عُمُرْ", "نَا", "ʿumurna"], ["", "عُمُرْ", "هُمْ", "ʿumurhum"]] },
  { titleEn: "I am from Jerusalem", rest: ["مِن الْقُدْس", "min il-quds"], en: i => `${SUBJECT[i]} from Jerusalem`,
    forms: null },                       // nothing changes but the pronoun itself
  { titleEn: "I work with computers", rest: ["بِالْحَاسُوب", "bil-Haasuub"],
    en: i => `${capitalise(PRONOUNS[i].en)} ${PRONOUNS[i].third ? "works" : "work"} with computers`,
    forms: [["بَ", "شْتَغِل", "", "bashtaghil"], ["بْتِ", "شْتَغِل", "", "btishtaghil"],
            ["بْتِ", "شْتَغْلِ", "ي", "btishtaghli"], ["بِ", "شْتَغِل", "", "bishtaghil"],
            ["بْتِ", "شْتَغِل", "", "btishtaghil"], ["بْتِ", "شْتَغْلُ", "و", "btishtaghlu"],
            ["بِنِ", "شْتَغِل", "", "binishtaghil"], ["بِ", "شْتَغْلُ", "و", "bishtaghlu"]] },
];
const INTRO_SET = INTRO.map(item => {
  const rows = INTRO_PRONOUNS.map((p, i) => {
    const f = item.forms?.[i];
    return f
      ? { p, slot: f.slice(0, 3), rest: item.rest[0], sentenceSay: `${p.say} ${f[3]} ${item.rest[1]}`, en: item.en(i) }
      // the pronoun is the word that changes
      : { p, slot: [p.ar, "", ""], pronounSlot: true, rest: item.rest[0], sentenceSay: `${p.say} ${item.rest[1]}`, en: item.en(i) };
  });
  const first = rows[0];
  return { title: (first.pronounSlot ? "" : first.p.ar + " ") + first.slot.join("") + " " + item.rest[0],
           titleEn: item.titleEn, rows };
});

const DRILL_GAMES = {
  "verb-table": { set: VERB_SET, table: true },
  "verb-quiz":  { set: VERB_SET },
  "intro-table": { set: INTRO_SET, table: true },
  "intro-quiz":  { set: INTRO_SET },
};
// Every quiz question: one row (a pronoun) of one item.
for (const set of [VERB_SET, INTRO_SET]) for (const item of set) for (const r of item.rows) r.item = item;
const drillQuestions = set => set.flatMap(item => item.rows);
const slotText = r => r.slot.join("");
const sentenceText = r => [r.pronounSlot ? "" : r.p.ar, slotText(r), r.rest || ""].filter(Boolean).join(" ");

// The changing word with its prefix/ending in green. A zero-width joiner on each side of a
// boundary keeps the letters joined even where the browser shapes each coloured part on its own.
function slotHtml(parts) {
  const html = [];
  parts.forEach((part, i) => {
    if (!part) return;
    const prev = parts.slice(0, i).join("").replace(HARAKAT, "").at(-1);
    const joins = prev && !NON_CONNECTORS.has(prev) && prev !== "ة" && prev !== "ى";
    const text = (joins ? ZWJ : "") + escapeHtml(part) + (i < 2 && parts.slice(i + 1).join("") && !NON_CONNECTORS.has(part.replace(HARAKAT, "").at(-1)) ? ZWJ : "");
    html.push(i === 1 ? text : `<span class="affix">${text}</span>`);
  });
  return html.join("");
}
const sentenceHtml = (r, blank = false) => [r.pronounSlot ? "" : escapeHtml(r.p.ar),
  blank ? `<span class="blank">…</span>` : slotHtml(r.slot), r.rest ? escapeHtml(r.rest) : ""].filter(Boolean).join(" ");

// Table: every pronoun's sentence for one verb (or one sentence about yourself).
function renderDrillTable() {
  const item = state.current.word;
  state.current.studying = true;
  state.answered = true;
  updateStats();
  $("feedback").classList.add("hidden");
  $("formTag").textContent = state.game === "verb-table" ? "Present tense" : "Introduce yourself";
  $("prompt").className = "prompt-sentence";
  $("prompt").textContent = item.title;
  $("promptSub").innerHTML = `<div class="study-meaning"><b>${escapeHtml(item.titleEn)}</b></div>
    <table class="drill-table"><tbody>${item.rows.map((r, i) =>
      `<tr data-i="${i}"><td class="ar" dir="rtl" lang="ar">${sentenceHtml(r)}</td><td>${sayHtml(r.sentenceSay)}</td><td>${escapeHtml(r.en)}</td></tr>`).join("")}
    </tbody></table>`;
  $("speakBtn").classList.add("hidden");
  const opts = $("options");
  opts.innerHTML = "";
  delete opts.dataset.count;
  const go = document.createElement("button");
  go.className = "btn study-go";
  go.textContent = state.index + 1 < state.deck.length ? "Next →" : "Finish ✓";
  go.addEventListener("click", nextCard);
  opts.appendChild(go);
  go.focus();
}

// Quiz: the sentence with the changing word left out; pick the right form.
function renderDrillQuiz() {
  const r = state.current.word;
  state.answered = false;
  updateStats();
  $("feedback").classList.add("hidden");
  $("speakBtn").classList.add("hidden");
  $("formTag").textContent = r.pronounSlot ? "Pick the pronoun" : "Fill in the missing word";
  $("prompt").className = "prompt-sentence";
  $("prompt").innerHTML = sentenceHtml(r, true);
  $("promptSub").innerHTML = `<div class="study-meaning"><b>${escapeHtml(r.en)}</b></div>`
    + (state.game === "verb-quiz" ? `<div class="hint">${escapeHtml(r.item.title)} = ${escapeHtml(r.item.titleEn)}</div>` : "");
  // The other forms of the same word (each written form once).
  const forms = [...new Set(r.item.rows.map(slotText))].filter(f => f !== slotText(r));
  const choices = shuffle([slotText(r), ...shuffle(forms).slice(0, settings.vocabChoices - 1)]);
  const opts = $("options");
  opts.innerHTML = "";
  opts.dataset.count = settings.vocabChoices;
  choices.forEach((f, i) => {
    const b = document.createElement("button");
    b.className = "option ar vocab-ar";
    b.dataset.key = f;
    b.innerHTML = `<span class="key">${i + 1}</span>`;
    const label = document.createElement("span");
    label.textContent = f;
    b.appendChild(label);
    b.addEventListener("click", () => answerDrill(b, f));
    opts.appendChild(b);
  });
}

function answerDrill(btn, chosen) {
  if (state.answered) return;
  state.answered = true;
  const r = state.current.word;
  const correct = chosen === slotText(r);
  document.querySelectorAll(".option").forEach(b => {
    b.disabled = true;
    if (b.dataset.key === slotText(r)) b.classList.add("correct");
  });
  recordResult(correct, r);
  if (!correct) {
    btn.classList.add("wrong");
    $("fbMsg").innerHTML = `Not quite — it's <span class="arf" style="font-size:1.5rem">${escapeHtml(slotText(r))}</span>`;
  }
  $("fbExample").innerHTML = `<span class="word sentence">${sentenceHtml(r)}</span> ${sayHtml(r.sentenceSay)} — ${escapeHtml(r.en)}`;
  $("fbForms").className = "forms-row";
  $("fbForms").innerHTML = "";
  $("feedback").classList.remove("hidden");
  $("nextBtn").focus();
  speak(sentenceText(r));
}

// ---------- Alphabet order games ----------
// All 28 letters, shuffled; tap them in alphabet order. One letter = one point if tapped
// without a wrong tap first. Letters you stumbled on go to the review list.
const orderLabel = l => state.game === "order-ar" ? l.ar : l.name;

function renderOrder() {
  state.answered = false;
  $("feedback").classList.add("hidden");
  $("speakBtn").classList.add("hidden");
  $("formTag").textContent = "Alphabet order";
  $("promptSub").textContent = "Tap all 28 letters in alphabet order, starting with alif";
  renderOrderBuilt();
  const opts = $("options");
  opts.innerHTML = "";
  delete opts.dataset.count;
  shuffle(LETTERS).forEach(l => {
    const b = document.createElement("button");
    b.className = "option" + (state.game === "order-ar" ? " ar" : "");
    b.dataset.ar = l.ar;
    b.innerHTML = `<span>${orderLabel(l)}</span>`;
    b.addEventListener("click", () => tapOrder(b, l));
    opts.appendChild(b);
  });
}

// Letters tapped so far, then a "?" for the next one; progress follows the taps.
function renderOrderBuilt() {
  const { step } = state.current;
  const prompt = $("prompt");
  prompt.className = "order-built" + (state.game === "order-ar" ? " ar" : "");
  prompt.innerHTML = LETTERS.slice(0, step).map(l => `<span>${orderLabel(l)}</span>`).join("")
    + (step < LETTERS.length ? `<span class="placeholder">?</span>` : "");
  $("count").textContent = step;
  $("total").textContent = LETTERS.length;
  $("bar").style.width = (step / LETTERS.length * 100) + "%";
  $("score").textContent = state.score;
}

function tapOrder(btn, letter) {
  const cur = state.current;
  if (state.answered || btn.disabled) return;
  const expected = LETTERS[cur.step];
  if (letter === expected) {
    if (!state.missed.includes(letter)) state.score++;
    btn.classList.remove("hint");
    btn.classList.add("correct");
    btn.disabled = true;
    cur.step++;
    cur.wrongHere = 0;
    renderOrderBuilt();
    if (cur.step === LETTERS.length) {
      state.answered = true;
      // Short pause to see the last tile turn green (skip if you've left the game).
      setTimeout(() => { if (state.current === cur && !$("game").classList.contains("hidden")) endGame(); }, 700);
    }
  } else {
    if (!state.missed.includes(expected)) state.missed.push(expected);
    btn.classList.remove("wrong");
    void btn.offsetWidth; // restart the shake animation
    btn.classList.add("wrong");
    setTimeout(() => btn.classList.remove("wrong"), 400);
    // After 3 wrong taps in a row, point at the right letter.
    if (++cur.wrongHere >= 3) {
      document.querySelectorAll(".option").forEach(b => {
        if (b.dataset.ar === expected.ar) b.classList.add("hint");
      });
    }
  }
}

function endGame() {
  $("bar").style.width = "100%";
  const total = isOrderGame() ? LETTERS.length : state.deck.length;
  const learn = state.game === "vocab-learn", table = !!drill()?.table;
  $("finalScore").textContent = learn ? `${total} words` : table ? `${total} ${state.game === "verb-table" ? "verbs" : "sentences"} ✓`
    : `${state.score} / ${total}`;
  $("againBtn").textContent = learn ? "Next words →" : table ? "Go through again" : "Play again";
  $("missedWrap").classList.toggle("hidden", !state.missed.length);
  $("retryMissedBtn").classList.toggle("hidden", !state.missed.length || isOrderGame());
  $("missedTitle").textContent = drill() ? "Sentences to review:" : isWordGame() || isVocabGame() ? "Words to review:"
    : isOrderGame() ? "Letters you stumbled on:" : "Letters to review:";
  $("missed").innerHTML = state.missed.map(item => drill()
    ? `<div><div class="ar sentence">${sentenceHtml(item)}</div>${sayHtml(item.sentenceSay)}<br>${escapeHtml(item.en)}</div>`
    : isVocabGame()
    ? `<div><div class="ar">${arOf(item)}</div>${sayHtml(item.say)}<br>${escapeHtml(item.en)}</div>`
    : isWordGame()
    ? `<div><div class="ar">${item.ar}</div>${sayHtml(item.say)}<br>${item.emoji} ${item.meaning}</div>`
    : `<div><div class="ar">${item.ar}</div>${item.name}</div>`).join("");
  show("summary");
}

function goHome() {
  state.loadToken++;               // stop a word list that's still loading from opening the game
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

// Letter games offer 4, 6 or 8 choices; vocabulary games 4 or 6 (saved separately).
function renderChoiceCount() {
  const vocab = usesVocabChoices();
  const current = vocab ? settings.vocabChoices : settings.choices;
  document.querySelectorAll("#choiceCount [data-count]").forEach(b => {
    b.classList.toggle("hidden", vocab && !VOCAB_CHOICE_COUNTS.includes(+b.dataset.count));
    b.setAttribute("aria-pressed", +b.dataset.count === current);
  });
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
$("choiceCount").addEventListener("click", e => {
  const b = e.target.closest("[data-count]");
  if (!b) return;
  if (usesVocabChoices()) settings.vocabChoices = +b.dataset.count;
  else settings.choices = +b.dataset.count;
  saveSettings();
  renderChoiceCount();
  // Redraw the current question with the new number of choices (answered ones change on Next).
  if (!state.current || state.answered) return;
  if (isVocabGame()) renderVocab();
  else if (isDrillQuiz()) renderDrillQuiz();
  else if (!isWordGame() && !isOrderGame()) renderQuestion();
});
renderChoiceCount();
for (const id of ["vocabFrom", "vocabTo"]) {
  $(id).addEventListener("input", dragVocabRange);
  $(id).addEventListener("change", e => {
    dragVocabRange(e);
    setVocabRange(+$("vocabFrom").value, +$("vocabTo").value);
  });
}
$("harakatToggle").checked = settings.harakat;
$("harakatToggle").addEventListener("change", e => {
  settings.harakat = e.target.checked;
  saveSettings();
  if (!state.current || !isVocabGame() || !state.deck.length) return;
  if (state.game === "vocab-learn") {
    renderWordTable();
    if (state.current.studying) renderStudy();
  } else if (!state.answered) {
    // Redraw the question without reshuffling the answers.
    document.querySelectorAll(".option").forEach(b => {
      const w = state.vocab.find(v => v.ar === b.dataset.key);
      if (!vocabAr2En() && w) b.lastChild.textContent = arOf(w);
    });
    if (vocabAr2En()) $("prompt").textContent = arOf(state.current.word);
  }
});
$("promptSub").addEventListener("click", e => {          // tables: tap a sentence to hear it
  const row = e.target.closest(".drill-table tr[data-i]");
  if (row && state.current?.word?.rows) speak(sentenceText(state.current.word.rows[+row.dataset.i]));
});
$("vocabPrevBtn").addEventListener("click", () => shiftVocabRange(-1));
$("vocabNextBtn").addEventListener("click", () => shiftVocabRange(1));
$("tableBtn").addEventListener("click", () => {
  settings.learnTable = !settings.learnTable;
  saveSettings();
  setTableView(settings.learnTable);
  if (!settings.learnTable) $("options").querySelector(".study-go")?.focus();
});
$("wordTableBody").addEventListener("click", e => {
  const row = e.target.closest("tr[data-i]");
  if (row) speak(state.vocab[+row.dataset.i].voc);
});
$("learnRestartBtn").addEventListener("click", () => {
  settings.learnNext = settings.vocabFrom;
  saveSettings();
  toggleSettings(false);
  startGame("vocab-learn");
});
$("roundSize").addEventListener("input", e => { $("roundSizeLabel").textContent = e.target.value; });
$("roundSize").addEventListener("change", e => resizeRound(+e.target.value));
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
$("speakBtn").addEventListener("click", () => {
  const item = state.current.letter || state.current.word;
  speak(item.voc || item.ar);
});

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
  if (!state.answered && !isWordGame() && !isOrderGame() && /^[1-8]$/.test(e.key)) {
    const btn = document.querySelectorAll(".option")[+e.key - 1];
    if (btn) btn.click();
  } else if (!state.answered && state.game === "read" && e.key === "Backspace") {
    e.preventDefault();
    undoBuilt();
  } else if (!state.answered && state.game === "read" && e.key === "Enter" && e.target.tagName !== "BUTTON") {
    checkReading();
  } else if (state.current && state.current.studying && e.key === "Enter" && e.target.tagName !== "BUTTON"
             && !$("game").classList.contains("table-view")) {
    nextCard();
  } else if (state.answered && !$("feedback").classList.contains("hidden")
             && (e.key === "Enter" || e.key === " ") && e.target !== $("nextBtn")) {
    e.preventDefault();
    $("nextBtn").click();
  }
});
