/* =====================================================================
   💗  BIRTHDAY GIFT WEBSITE  —  script.js
   ---------------------------------------------------------------------
   ✏️  EVERYTHING YOU MAY WANT TO PERSONALISE IS IN "CONFIG" BELOW.
       - Keep the "quotes" around text and the commas at the end of lines.
       - In the letter, *stars* make a word pretty & italic.
       - Test before her birthday by opening the site with  ?preview  at the end
         of the link, e.g.  https://you.github.io/happy-birthday/?preview
   ===================================================================== */

const CONFIG = {

  /* ---------- names ---------- */
  herName: "My Pasandita Aurat",   // ✏️ her real name for the certificate
  myName: "your boyfriend",         // ✏️ your name for the signature

  /* ---------- 🔒 time lock ----------
     The site stays locked until this exact moment (her phone's local time).
     02:02 on purpose — the minute she was born, and the reason you didn't wish at 12. */
  lock: { enabled: true, year: 2026, month: 10, day: 19, hour: 2, minute: 2 },

  birthMoment: { year: 2002, month: 10, day: 19, hour: 2, minute: 2 },
  age: 24,

  /* ---------- 🎵 the song that plays when the letter ends ----------
     Put the mp3 inside  assets/music/  — any of these file names works
     (capital letters matter on GitHub!). The first one found is played.
     No file found? A little music-box tune plays instead. */
  ourSong: {
    files: [
      "assets/music/our-song.mp3",
      "assets/music/Alfaaz.mp3",
      "assets/music/alfaaz.mp3",
      "assets/music/Alfaaz - Hamza Malik x Zain Zohaib.mp3",
      "assets/music/Alfaaz by Hamza Malik x Zain Zohaib.mp3",
      "assets/music/song.mp3",
      "assets/music/our-song.m4a"
    ],
    title: "Alfaaz",
    artist: "Hamza Malik x Zain Zohaib",
    fallbackTitle: "a little music-box tune",
    fallbackArtist: "made just for you ♡"
  },

  /* ---------- letter page header ---------- */
  heroTitle: "Happiest 24th Birthday, My Baby ♡",
  heroSub: "19.10.2026 — a little celebration for someone very special.",
  heroPhoto: "assets/photos/My birthday View.jpg",

  /* ---------- THE BIRTHDAY LETTER (your original words) ---------- */
  letter: [
    "First of all, don't feel sad that I didn't wish you at 12 AM. It doesn't mean I forgot your birthday, baby. I was waiting for *2:02 AM*, the exact time you were born on 19th October 2002, because I wanted to wish you at the very moment you came into this beautiful world. ❤️",
    "This day is special for your friends, your family, and everyone who loves you, because it's the day the world was blessed with a soul like yours. And I'm so grateful for it, because otherwise, how would I have gotten the chance to love someone as beautiful as you? 🫶🏻",
    "OMG, I still can't believe my *pasandita aurat* is turning 24 today! 😭 How can someone grow older and somehow become even more innocent, cuter, prettier, and hotter at the same time? 😂 The one word that describes your innocence is *'NIRAGAS.'* There's something so pure about you, and the more I get to know you, the more I realise how beautiful your heart is, not just your face.",
    "Knowing you this past year, I've noticed so many little things: the way you don't rush to judge people, the way you look at life, and the way you try not to let the people you love feel upset. You care so beautifully, sometimes without realising how much it means to them. I hope you never lose that. ❤️",
    "I know how deeply connected you are to your family, and yet you stepped out of your comfort zone and moved away from home to build the career you've always imagined, especially to make your dad proud. 🥹 I admire that so much. I hope life gives you everything you've ever prayed for, and that one day your dad's eyes fill with pride because of everything you achieve.",
    "And somewhere in the middle of this journey, you accidentally met me. 😂❤️",
    "Sometimes I wish I had met you earlier and been there for more of your birthdays, but maybe we met exactly when we were supposed to. This is your first birthday with me, and I hope it's the first of many, many more: your 25th, your 26th, your 30th, and every one after. I want to be there when you blow out your candles, and when you look across the table and find me smiling at you, thinking how lucky I am to have you.",
    "This year, I won't just be a message. I'll be on the other side of the table, celebrating *YOU*, looking at you with all the love in my heart, and making memories we'll talk about for years. ❤️",
    "On your 24th birthday, I have just one wish: may you always keep that *niragas* little heart, may that beautiful smile never fade, and may life always give you reasons to be happy. And whenever things get difficult, remember you don't always have to be strong on your own. You deserve someone who listens, understands you, and holds you close.",
    "I can't promise perfect words or that I'll never make mistakes, but I want to keep learning you and loving you in ways that truly matter. I want to know every version of you: the happy one, the emotional one, the overthinking one, the childish one, and even the one who doesn't feel like talking. I want you to feel safe being completely yourself with me. ❤️",
    "Happiest 24th birthday to my baby, my cutie, my beautiful girl, and my pasandita aurat. 🥹❤️🎂"
  ],

  clockMessage: "Some moments become special because of what they mean to us. This is the moment the world got you, and somewhere along the way, I got lucky enough to meet you.",

  /* ---------- 📸 couple photos (the swipe stack) — occasions from your file names ---------- */
  story: [
    { src: "assets/photos/IFYKYK.jpg", label: "the IFYKYK date 🤫", note: "if you know, you know.", secret: true },
    { src: "assets/photos/SIP Meeting.jpg", label: "the SIP meeting 📈", note: "most productive meeting I've ever attended." },
    { src: "assets/photos/pandal hoping 1.jpg", label: "pandal hopping 🪔", note: "part one." },
    { src: "assets/photos/pandal hoping 2.jpg", label: "pandal hopping 🪔", note: "part two: the selfie edition." },
    { src: "assets/photos/pic1.jpg", label: "us ♡", note: "a little moment worth keeping." },
    { src: "assets/photos/pic3.jpg", label: "us, again ♡", note: "proof that this moment happened." },
    { src: "assets/photos/My birthday View.jpg", label: "my birthday view 🎂", note: "the best view I had on my birthday." }
  ],

  /* ---------- ✨ then & now (left = then, right = now) ---------- */
  thenNow: [
    { then: "assets/photos/childhood1.jpg", now: "assets/photos/My birthday View.jpg", tab: "1", caption: "the tiny human era → the birthday-view era" },
    { then: "assets/photos/childhood3.jpg", now: "assets/photos/pic2.jpg", tab: "2", caption: "same smile. slightly more height ♡" },
    { then: "assets/photos/childhood2.jpg", now: "assets/photos/pic4.jpg", tab: "3", caption: "cute then. cute now. consistent queen." }
  ],

  /* ---------- 💗 why I love you (the jar) ---------- */
  loveJar: [
    "your niragas little heart — the purest one I know.",
    "you don't rush to judge people.",
    "the way you look at life.",
    "you try so hard to never let the people you love feel upset.",
    "you care so beautifully, sometimes without even realising how much it means.",
    "how deeply connected you are to your family.",
    "you stepped out of your comfort zone to build the career you've always imagined.",
    "you're working so hard to make your dad proud. (you will.)",
    "that beautiful smile. please never let it fade.",
    "you somehow get cuter, prettier (and hotter) every single year.",
    "every version of you — the happy one, the emotional one, the overthinking one, the childish one.",
    "you make me want to keep learning you, every day.",
    "your nautanki. every single episode.",
    "you're my pasandita aurat. honestly, that's the whole reason."
  ],

  /* ---------- reasons I fell for you (flip cards) ---------- */
  fellFor: [
    { e: "🎭", title: "NAUTANKI", text: "because apparently, peace and quiet were never part of the plan." },
    { e: "🎬", title: "ACTING", text: "someone deserves an award for these performances." },
    { e: "✨", title: "HUSYARI", text: "that little clever side of yours never goes unnoticed." },
    { e: "📏", title: "YOUR HEIGHT", text: "yes, this made the list. no further explanation required." },
    { e: "😊", title: "YOUR SMILE", text: "the one I hope never, ever fades." },
    { e: "🤍", title: "NIRAGAS HEART", text: "the most innocent heart I've ever known." }
  ],

  /* ---------- ☕ top 5 cafés in Mumbai ---------- */
  cafes: [
    { e: "🎭", name: "Prithvi Café", area: "Juhu · inside Prithvi Theatre", eat: "Irani chai, a caramel cappuccino and a chocolate croissant — and maybe a play right after." },
    { e: "🥐", name: "Subko Coffee Roasters", area: "Bandra West", eat: "an espresso each and their chocolate-cardamom croissant (I get the bigger half)." },
    { e: "🫖", name: "Kyani & Co.", area: "Marine Lines · since 1904", eat: "bun maska, mawa cake and sweet Irani chai, the old-Bombay way." },
    { e: "🎶", name: "Café Mondegar", area: "Colaba Causeway", eat: "chocolate mousse and a cold coffee while the old jukebox plays." },
    { e: "🥞", name: "Café Madras", area: "Matunga · King's Circle", eat: "Mysore masala dosa and filter coffee — the most underrated date ever." }
  ],

  /* ---------- 🇮🇳 top 5 places in India (yes / no… please?) ---------- */
  places: [
    { e: "🏰", name: "Udaipur", region: "Rajasthan", line: "a boat ride on Lake Pichola at sunset, then dinner looking at the palace.", please: "please? 🥺 sunsets + palaces + you = a whole movie." },
    { e: "🏔️", name: "Kashmir", region: "Srinagar & Gulmarg", line: "a shikara on Dal Lake, kahwa in our hands, and snow in Gulmarg.", please: "please? 🥺 I'll carry all the extra jackets." },
    { e: "🏖️", name: "Goa", region: "the beaches", line: "beach shacks, sunsets, long walks… and fine, a crab or two 🦀.", please: "please? 🥺 the beach is literally waiting for you." },
    { e: "🛶", name: "Kerala", region: "Munnar & Alleppey", line: "tea gardens in Munnar and a night on a houseboat in Alleppey.", please: "please? 🥺 houseboat. stars. you. think about it." },
    { e: "🐠", name: "Andaman", region: "Havelock (Swaraj Dweep)", line: "Radhanagar beach, the clearest water in India, and scuba diving (you hold my hand).", please: "please? 🥺 the fishes want to meet you." }
  ],
  placePleas: ["pleaseeee 🥺🥺 I'll plan everything.", "pretty please with a coffee on top ☕🥺"],

  /* ---------- 🎧 top 10 Hindi romantic songs (the dark song picker) ---------- */
  songs: [
    { title: "Saiyaara", artist: "Faheem Abdullah, Arslan Nizami", from: "Saiyaara", e: "🌙", c: ["#3a1c71", "#d76d77"] },
    { title: "Jo Tum Mere Ho", artist: "Anuv Jain", from: "single", e: "🫶", c: ["#2b5876", "#4e4376"] },
    { title: "Raanjhan", artist: "Sachet–Parampara", from: "Do Patti", e: "💫", c: ["#614385", "#516395"] },
    { title: "Sahiba", artist: "Aditya Rikhari", from: "single", e: "🌸", c: ["#ee9ca7", "#7b344a"] },
    { title: "Apna Bana Le", artist: "Arijit Singh", from: "Bhediya", e: "🌿", c: ["#134e5e", "#71b280"] },
    { title: "Kesariya", artist: "Arijit Singh", from: "Brahmastra", e: "🧡", c: ["#f12711", "#f5af19"] },
    { title: "Raataan Lambiyan", artist: "Jubin Nautiyal, Asees Kaur", from: "Shershaah", e: "🌌", c: ["#0f2027", "#2c5364"] },
    { title: "Tum Hi Ho", artist: "Arijit Singh", from: "Aashiqui 2", e: "☔", c: ["#232526", "#606c88"] },
    { title: "Pehle Bhi Main", artist: "Vishal Mishra", from: "Animal", e: "🕊️", c: ["#41295a", "#2f0743"] },
    { title: "Ishq", artist: "Faheem Abdullah, Rauhan Malik", from: "single", e: "❤️‍🔥", c: ["#8e0e00", "#1f1c18"] }
  ],

  /* ---------- 🍿 top 10 romantic movies (the dark movie picker) ---------- */
  movies: [
    { title: "Dilwale Dulhania Le Jayenge", year: 1995, e: "🌻", c: ["#f7971e", "#7b344a"] },
    { title: "Jab We Met", year: 2007, e: "🚂", c: ["#e65c00", "#f9d423"] },
    { title: "Kuch Kuch Hota Hai", year: 1998, e: "🏀", c: ["#c31432", "#240b36"] },
    { title: "Yeh Jawaani Hai Deewani", year: 2013, e: "🏔️", c: ["#1488cc", "#2b32b2"] },
    { title: "Kal Ho Naa Ho", year: 2003, e: "🌉", c: ["#373b44", "#4286f4"] },
    { title: "Veer-Zaara", year: 2004, e: "💛", c: ["#c79081", "#5b2c3a"] },
    { title: "Rab Ne Bana Di Jodi", year: 2008, e: "💃", c: ["#ff512f", "#dd2476"] },
    { title: "Barfi!", year: 2012, e: "🎈", c: ["#56ab2f", "#a8e063"] },
    { title: "Rockstar", year: 2011, e: "🎸", c: ["#000000", "#c94b4b"] },
    { title: "Saiyaara", year: 2025, e: "🌙", c: ["#3a1c71", "#d76d77"] }
  ],

  /* =================================================================
     💬 THE QUESTIONS — one per page. Every answer has its own outcome.
       type: choice | multi | yesno | map | pop | slider | scratch
             cafes | places | songs | movies | summary | final
       sticker: the big emoji on the card
       save + saveLabel: shows her answer on the "official plans" ticket
       next: jump to another question id
       {nick} = the nickname she picks
     ================================================================= */
  journey: [
    { id: "hello", type: "choice", sticker: "🎂", q: "first things first… are you the birthday girl?",
      options: [
        { e: "💅", label: "yes, obviously", outcome: "hehe hi ♡ this whole thing was made for you. let's go." },
        { e: "👀", label: "no, just snooping", outcome: "hmm. suspicious. I'll allow it… only because it's a birthday." }
      ] },
    { id: "nick", type: "choice", sticker: "🥹", save: "nick", saveLabel: "you are",
      q: "what should I call you today?", sub: "choose wisely. it will be used for the rest of the questions.",
      options: [
        { e: "🥹", label: "my baby", outcome: "my baby it is. (honestly, it was always going to be my baby.)" },
        { e: "🎀", label: "my cutie", outcome: "cutie mode activated. I'm blushing." },
        { e: "🌷", label: "my beautiful girl", outcome: "accurate. very accurate. moving on before I get emotional." },
        { e: "👑", label: "pasandita aurat", outcome: "the pasandita aurat has spoken. all hail. 👑" }
      ] },
    { id: "mood", type: "choice", sticker: "🌤️", save: "mood", saveLabel: "birthday mood",
      q: "how are we feeling today, {nick}?",
      options: [
        { e: "🥳", label: "birthday mode: ON", outcome: "as you should. today the whole world revolves around you." },
        { e: "🥹", label: "emotional already", outcome: "already?? you just read the letter. okay, fair. tissues nearby." },
        { e: "😴", label: "sleepy but cute", outcome: "sleepy birthday girl detected. coffee is literally the next question." },
        { e: "🎭", label: "nautanki loading…", outcome: "ah yes, the famous nautanki. my favourite show. please continue." }
      ] },
    { id: "coffee", type: "choice", sticker: "☕", save: "coffee", saveLabel: "coffee order",
      q: "coffee first?",
      options: [
        { e: "☕", label: "hot coffee", outcome: "a classic. warm cup, warm heart. order noted." },
        { e: "🧋", label: "cold coffee", outcome: "cold coffee for the hottest girl. obviously. order noted." },
        { e: "🧊", label: "iced latte, extra ice", outcome: "extra ice, extra cute. order noted." },
        { e: "💧", label: "water (as I should)", outcome: "look at you being responsible on your birthday. proud. (coffee later though.)" }
      ] },
    { id: "flowers", type: "choice", sticker: "🌷", save: "flowersWanted",
      q: "do you want flowers?",
      options: [
        { e: "🌷", label: "yes", next: "flowerpick", outcome: "yay. let's build your bouquet." },
        { e: "💐", label: "YESSS obviously", next: "flowerpick", outcome: "correct answer. bouquet loading…" },
        { e: "🎁", label: "surprise me", next: "cafes", saveAlso: { flowers: "a surprise bouquet 🎁" }, outcome: "a surprise bouquet it is. you'll know it when you see it ♡" },
        { e: "🙅‍♀️", label: "no", next: "flowerpick", outcome: "wrong answer. flowers are coming anyway. you can still pick them though 😌" }
      ] },
    { id: "flowerpick", type: "multi", sticker: "💐", save: "flowers", saveLabel: "bouquet", max: 3,
      q: "pick up to 3 flowers for your bouquet",
      options: [
        { e: "🌷", label: "tulips" }, { e: "🌹", label: "roses" }, { e: "🌻", label: "sunflowers" }, { e: "🌼", label: "daisies" },
        { e: "🌸", label: "cherry blossoms" }, { e: "🪻", label: "lavender" }, { e: "🤍", label: "white lilies" }, { e: "🌺", label: "hibiscus" }
      ],
      outcome: "your bouquet: {flowers}. very good taste. (as expected.)" },
    { id: "cafes", type: "cafes", sticker: "☕", save: "cafes", saveLabel: "café dates",
      q: "café hopping in Mumbai — 5 cafés, one by one. say yes to the ones you want ☕" },
    { id: "dateidea", type: "choice", sticker: "💌", save: "dateIdea", saveLabel: "next date",
      q: "what's your ideal date, {nick}?",
      options: [
        { e: "☕", label: "a cozy coffee date", outcome: "a slow coffee date. we'll talk so much the coffee goes cold. perfect." },
        { e: "💐", label: "flower shopping", outcome: "flower shopping it is. you pick, I carry." },
        { e: "🚗", label: "a long drive", outcome: "long drive, good songs, and your commentary on everything. sounds perfect." },
        { e: "🎬", label: "a movie date", outcome: "movie date! (we'll pick the movies in a bit 👀)" },
        { e: "🪔", label: "pandal hopping", outcome: "pandal hopping! lots of walking, lots of photos, lots of prasad." },
        { e: "🌅", label: "a sunset walk", outcome: "a sunset walk. slow, quiet, cute. the sky better behave." }
      ] },
    { id: "dinner", type: "choice", sticker: "🕯️", save: "dinner", saveLabel: "dinner",
      q: "dinner together — what are we eating?",
      options: [
        { e: "🍛", label: "biryani", outcome: "biryani. no further questions. the best decision you'll make today." },
        { e: "🍕", label: "pizza & pasta", outcome: "pizza & pasta date. extra cheese, extra love." },
        { e: "🥢", label: "Chinese", outcome: "Chinese it is. I'll fight you for the last momo." },
        { e: "🥘", label: "fancy candlelight dinner", outcome: "candles, soft music, you dressed up… I'm already nervous." },
        { e: "🥟", label: "street food crawl", outcome: "pani puri, vada pav, everything. a street food crawl with you = heaven." },
        { e: "🦀", label: "crab. obviously.", outcome: "I should have known. crab dinner, booked. 🦀" }
      ] },
    { id: "dessert", type: "choice", sticker: "🍨", save: "dessert", saveLabel: "dessert",
      q: "and dessert after dinner?",
      options: [
        { e: "🍨", label: "ice cream", outcome: "ice cream walk after dinner. I'm in." },
        { e: "🍫", label: "a warm brownie", outcome: "warm brownie with ice cream on top. a woman of culture." },
        { e: "🍰", label: "cheesecake", outcome: "cheesecake. one slice. two spoons." },
        { e: "🥄", label: "a bite of yours", outcome: "so you'll steal my dessert. I already knew. I'll order two." }
      ] },
    { id: "bill", type: "choice", sticker: "🧾", save: "bill", saveLabel: "who pays",
      q: "important: who is paying for dinner?",
      options: [
        { e: "🙋‍♂️", label: "you, obviously", outcome: "obviously. it's your birthday. (and every other day too.)" },
        { e: "🎂", label: "me — birthday treat!", outcome: "aww. no. not happening. nice try though ♡" },
        { e: "✂️", label: "split it", outcome: "split it?? on YOUR birthday? request denied." },
        { e: "✊", label: "rock paper scissors", outcome: "okay deal. (I'm choosing paper. I'm telling you now so you can win.)" }
      ] },
    { id: "songs", type: "songs", dark: true, save: "songs", saveLabel: "songs for us",
      q: "which songs would you like to listen to with me?" },
    { id: "movies", type: "movies", dark: true, save: "movies", saveLabel: "movie list",
      q: "which romantic movies should we watch together?" },
    { id: "popcorn", type: "choice", layout: "two", sticker: "🍿", save: "popcorn", saveLabel: "popcorn",
      q: "movie night snack?",
      options: [
        { e: "🧂", label: "salted popcorn", outcome: "salted. classic. but you're sharing." },
        { e: "🍯", label: "caramel popcorn", outcome: "caramel popcorn for a caramel-sweet girl. (sorry. it's your birthday, I'm allowed.)" }
      ] },
    { id: "where", type: "choice", sticker: "🎬", save: "movieWhere", saveLabel: "movie night at",
      q: "and where do we watch it?",
      options: [
        { e: "🎟️", label: "theatre, last row", outcome: "last row, big screen, your head on my shoulder. booked." },
        { e: "🛋️", label: "home, blanket, lights off", outcome: "blanket fort movie night. I'll bring snacks, you bring the commentary." },
        { e: "💻", label: "laptop on the bed", outcome: "laptop + bed + snacks. the most comfortable cinema in the world." }
      ] },
    { id: "pop", type: "pop", count: 8, q: "quick! pop 8 hearts to unlock the next question 💗",
      outcome: "8 out of 8. you're officially very good at collecting love." },
    { id: "places", type: "places", sticker: "🇮🇳", save: "trips", saveLabel: "trips together",
      q: "5 places in India I want to see with you. yes or no?" },
    { id: "crabdate", type: "yesno", sticker: "🦀", kicker: "the important one",
      q: "let's plan a crab date 🦀", sub: "will you go on a crab date with me?",
      yes: "YES 🦀",
      noLabels: ["no", "are you sure?", "really sure??", "think about the crabs", "please 🥺", "okay fine, yes 🦀"],
      outcomeYes: "she said yes!!! 🦀💗",
      outcomeForced: "took you {tries} tries, but a yes is a yes ♡",
      save: "crabDate", saveLabel: "crab date", next: "worldmap" },
    { id: "worldmap", type: "map",
      title: "these are all the countries I want to visit with you and have crabs 🦀",
      note: "every country is marked except India — India is home, and we'll have crabs here anyway 🏠" },
    { id: "nautanki", type: "slider", save: "nautanki", saveLabel: "bigger nautanki",
      q: "be honest… who is the bigger nautanki? 🎭", left: "me (him)", right: "you (her)",
      outcomes: [
        { upTo: 35, text: "lies. absolute lies. but okay, I'll accept it.", label: "apparently him" },
        { upTo: 65, text: "a balanced nautanki household. 50/50. very healthy.", label: "a perfect tie" },
        { upTo: 100, text: "finally, some honesty 🎭 the award goes to you.", label: "her (award winner)" }
      ] },
    { id: "height", type: "choice", sticker: "📏", q: "what is the perfect height for a girlfriend?",
      options: [
        { e: "📏", label: "exactly yours", outcome: "correct. your height literally made my list. no further explanation required." },
        { e: "📐", label: "exactly yours", outcome: "also correct. there was never a wrong answer here ♡" },
        { e: "✨", label: "exactly yours (but cuter)", outcome: "the cutest correct answer. your height is my favourite height." }
      ] },
    { id: "coupon", type: "scratch", q: "scratch to reveal your birthday coupon 🎟️",
      prizeTitle: "1 dinner date + 1 movie night + 1 bouquet",
      prizeFine: "valid forever-ish • no expiry • only for you",
      outcome: "coupon saved ♡ screenshot it and claim it whenever you want." },
    { id: "birthdays", type: "choice", sticker: "🎈", save: "birthdays", saveLabel: "future birthdays",
      q: "can I be there for your 25th birthday too?",
      options: [
        { e: "🎂", label: "yes", outcome: "yay. 25th: booked ♡" },
        { e: "🎈", label: "and the 26th", outcome: "25th and 26th, booked. look at you planning ahead." },
        { e: "🎉", label: "and the 30th", outcome: "all the way to 30? okay. I'll be there, smiling at you across the table." },
        { e: "♾️", label: "every single one", outcome: "every single one. that's exactly what I was hoping you'd say. 🥹" }
      ] },
    { id: "summary", type: "summary", q: "our official plans 🎟️" },
    { id: "final", type: "final", q: "all questions answered ♡" }
  ],

  /* ---------- memory quiz ---------- answer = index of the correct option (0 = first) */
  quiz: [
    { q: "what time were you born?", options: ["12:00 AM", "2:02 AM", "2:20 AM", "honestly, no idea"], answer: 1 },
    { q: "the one word I used for your innocence?", options: ["nautanki", "husyari", "NIRAGAS", "pasandita"], answer: 2 },
    { q: "which photo is from the tiny human era?", photos: ["assets/photos/pic2.jpg", "assets/photos/childhood2.jpg", "assets/photos/pic4.jpg"], answer: 1 },
    { q: "what was the occasion of this photo?", photo: "assets/photos/SIP Meeting.jpg", options: ["pandal hopping", "the SIP meeting", "my birthday", "a random Tuesday"], answer: 1 },
    { q: "and this one?", photo: "assets/photos/pandal hoping 2.jpg", options: ["the IFYKYK date", "the SIP meeting", "pandal hopping", "a café date"], answer: 2 },
    { q: "why didn't I wish you at exactly 12 AM?", options: ["I forgot (never)", "I fell asleep", "I was waiting for 2:02 AM", "my phone died"], answer: 2 },
    { q: "which birthday are we celebrating?", options: ["23rd", "24th", "25th", "it's a secret"], answer: 1 },
    { q: "according to this website, you love…", options: ["crabs, flowers & coffee", "cats, chai & cake", "sleep, sleep & sleep", "spiders (no)"], answer: 0 }
  ],
  quizCorrect: "OKAYYY, LOOK AT THAT MEMORY 😭💗",
  quizWrong: "the archives require further investigation.",

  /* ---------- sliding puzzle ---------- */
  puzzle: { photo: "assets/photos/pandal hoping 2.jpg", focusY: 0.5, caption: "one memory, back in one piece. just like it should be ♡" },

  /* ---------- romantic quotes (classic, public-domain writers) ---------- */
  quotes: [
    { text: "How do I love thee? Let me count the ways.", by: "Elizabeth Barrett Browning" },
    { text: "Whatever our souls are made of, his and mine are the same.", by: "Emily Brontë, Wuthering Heights" },
    { text: "My bounty is as boundless as the sea, my love as deep; the more I give to thee, the more I have, for both are infinite.", by: "William Shakespeare, Romeo and Juliet" },
    { text: "You pierce my soul. I am half agony, half hope.", by: "Jane Austen, Persuasion" },
    { text: "Doubt thou the stars are fire; doubt that the sun doth move; doubt truth to be a liar; but never doubt I love.", by: "William Shakespeare, Hamlet" },
    { text: "Ishq ne 'Ghalib' nikamma kar diya, varna hum bhi aadmi the kaam ke.", by: "Mirza Ghalib", note: "(love made me useless — otherwise I was a man of some use. relatable.)" },
    { text: "Grow old along with me! The best is yet to be.", by: "Robert Browning" }
  ],

  /* ---------- a poem, written for her ---------- */
  poem: {
    title: "two minutes past two",
    stanzas: [
      ["At two minutes past two, the world got you,", "a little before sunrise, a little bit new.", "Twenty-four years of nautanki and grace,", "of coffee-cup mornings and that niragas face."],
      ["I wasn't there for the candles before,", "but I'm here for this one — and I'm asking for more:", "the twenty-fifth, thirtieth, every one after,", "the drama, the acting, the overthinking, the laughter."],
      ["So here's to the girl of coffee and flowers", "(and crabs, apparently — for hours and hours),", "my baby, my cutie, my beautiful girl,", "my pasandita aurat, my favourite in the world."]
    ]
  },

  /* ---------- open when… ---------- */
  openWhen: [
    { title: "open when you need a smile", msg: "hi. it's me. just checking if you've smiled yet. no? okay — imagine me trying to be serious while you do your nautanki. better? I knew it." },
    { title: "open when you're bored", msg: "boredom emergency kit: 1) call me. 2) pick a café from our list and let's go. 3) send me your worst selfie and I'll send back an even worse one. deal?" },
    { title: "open when you need a little encouragement", msg: "you moved away from home to build the life you want. that already takes more courage than most people realise. whatever today is throwing at you, you've handled hard things before. and you don't have to handle this one alone. ♡" },
    { title: "open when you want to revisit a happy memory", msg: "scroll back to 'little pieces of us', pick your favourite picture, and then tell me what you remember about that day. I want to hear it in your words." },
    { title: "open when you need a reminder of how loved you are", msg: "in case you forgot: you are loved by your family, your friends, and one person who made an entire website just for you. that's a lot of love. please collect it. ♡" }
  ],

  /* ---------- Q&A ---------- */
  qna: [
    { q: "Why didn't you wish me at exactly 12 AM?", a: "Because someone was waiting for 2:02 AM to wish the birthday girl at the exact time she entered this world. The timing had to be right. ♡" },
    { q: "What does NIRAGAS mean to you?", a: "That innocent, pure-hearted side of you that makes you so uniquely you." },
    { q: "What do I love about you?", a: "Your nautanki, your acting, your husyari, your height, and all the little things that make you who you are." },
    { q: "What do you hope for my future?", a: "I hope you achieve the career you've dreamed of, make your dad proud, and find happiness in all the things you've worked so hard for." },
    { q: "What is the plan for future birthdays?", a: "Hopefully, lots more birthdays together. Your 25th, your 26th, your 30th, and all the ones after that." }
  ],

  /* ---------- certificate ---------- */
  certificate: {
    title: "OFFICIALLY CERTIFIED: THE CUTEST HUMAN ALIVE",
    qualifications: [
      "Outstanding dramatic performance (nautanki, level: expert).",
      "Certified owner of a niragas little heart.",
      "Excellent taste in coffee and flowers.",
      "Professional crab enthusiast.",
      "Lifetime membership in the cutest-human club."
    ],
    awardedOn: "19 October 2026"
  },

  /* ---------- the last page ---------- */
  secret: [
    "Out of all the little things I've made for you, this one is my way of saying that I'm really glad our paths crossed.",
    "I hope this birthday brings you happiness, new adventures, beautiful memories, and plenty of reasons to smile.",
    "And selfishly, I hope I get to be part of many more of those memories.",
    "Happy birthday, my pasandita aurat. ❤️"
  ]
};
/* ===================== ✋ END OF EDITABLE CONTENT ===================== */


/* =====================================================================
   HELPERS
   ===================================================================== */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const rand = (a, b) => Math.random() * (b - a) + a;
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const photoUrl = (src) => encodeURI(src); // spaces in file names are fine
const pad = (n) => String(n).padStart(2, "0");
const isPreview = /[?&]preview\b/.test(location.search);

const store = {
  get(key, fallback) {
    try { const v = localStorage.getItem("bday." + key); return v == null ? fallback : JSON.parse(v); }
    catch (e) { return fallback; }
  },
  set(key, val) { try { localStorage.setItem("bday." + key, JSON.stringify(val)); } catch (e) { /* ignore */ } },
  clear() { try { Object.keys(localStorage).filter((k) => k.startsWith("bday.")).forEach((k) => localStorage.removeItem(k)); } catch (e) { /* ignore */ } }
};

const prefersReducedMotion = () =>
  document.documentElement.classList.contains("reduce-motion") ||
  (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);

let notifTimer;
function notify(msg, icon = "💗", app = "psst") {
  const n = $("#notif");
  $("#notifMsg").textContent = msg;
  $("#notifIcon").textContent = icon;
  $("#notifApp").textContent = app;
  n.classList.add("is-on");
  clearTimeout(notifTimer);
  notifTimer = setTimeout(() => n.classList.remove("is-on"), 3200);
}

function burstHearts(x, y, count = 10, chars = ["💗", "♡", "✨", "💕"]) {
  if (prefersReducedMotion()) count = Math.min(count, 3);
  if (x == null) { x = window.innerWidth / 2; y = window.innerHeight / 2; }
  for (let i = 0; i < count; i++) {
    const s = document.createElement("span");
    s.className = "heart-burst";
    s.textContent = pick(chars);
    const ang = rand(0, Math.PI * 2), dist = rand(50, 130);
    s.style.left = x + "px"; s.style.top = y + "px";
    s.style.setProperty("--dx", Math.cos(ang) * dist + "px");
    s.style.setProperty("--dy", Math.sin(ang) * dist - 30 + "px");
    s.style.setProperty("--rot", rand(-40, 40) + "deg");
    s.style.color = "#D94B64";
    document.body.appendChild(s);
    setTimeout(() => s.remove(), 1400);
  }
}

function confetti(n = 40) {
  if (prefersReducedMotion()) return;
  const colors = ["#F8DDE6", "#D98CA5", "#D94B64", "#F7E7A9", "#E8DDF7", "#BFE0EA"];
  for (let i = 0; i < n; i++) {
    const c = document.createElement("span");
    c.className = "confetti";
    c.style.left = rand(0, 100) + "vw";
    c.style.background = pick(colors);
    c.style.animationDuration = rand(1.8, 3.4) + "s";
    c.style.animationDelay = rand(0, .5) + "s";
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 4200);
  }
}

/* image with a cute placeholder if the file is missing */
function setImg(img, src, alt) {
  img.alt = alt || "";
  img.decoding = "async";
  img.onerror = () => {
    const ph = document.createElement("div");
    ph.className = "photo-missing";
    ph.innerHTML = `photo coming soon ♡<br><small>${esc(String(src).split("/").pop())}</small>`;
    img.replaceWith(ph);
  };
  img.src = photoUrl(src);
}

/* =====================================================================
   THE CRAB 🦀 (only shows up for crab things now)
   crabSVG({ mood, hat, heart, body, dark })
   ===================================================================== */
function crabSVG(o = {}) {
  const mood = o.mood || "happy";
  const body = o.body || "#EC6F84";
  const dark = o.dark || "#C94A62";
  const ink = "#4B2634";
  const side = `<path d="M56 120 Q34 122 22 140" /><path d="M58 130 Q40 138 34 156" /><path d="M68 138 Q58 150 56 166" />`;
  const arm = `
    <path d="M62 100 Q38 92 40 66" stroke="${body}" stroke-width="10" fill="none" stroke-linecap="round"/>
    <g transform="translate(38 50) rotate(-18)">
      <path d="M0 20 C-18 16 -20 -12 -2 -20 C10 -25 21 -17 22 -8 L7 -2 L22 5 C20 16 11 22 0 20 Z" fill="${body}" stroke="${dark}" stroke-width="2.5" stroke-linejoin="round"/>
      <circle cx="-4" cy="-9" r="3" fill="#fff" opacity=".45"/>
    </g>`;
  const heartPath = (cx, cy, s, fill) =>
    `<path transform="translate(${cx} ${cy}) scale(${s})" d="M0 6 C0 -2 -12 -2 -12 6 C-12 12 -4 17 0 22 C4 17 12 12 12 6 C12 -2 0 -2 0 6 Z" fill="${fill}"/>`;
  const eyeWhite = `<circle cx="80" cy="44" r="13" fill="#fff" stroke="${dark}" stroke-width="2.5"/><circle cx="120" cy="44" r="13" fill="#fff" stroke="${dark}" stroke-width="2.5"/>`;
  let eyes = "", mouth = "";
  switch (mood) {
    case "shy":
      eyes = eyeWhite + `<path d="M73 47 Q80 39 87 47" stroke="${ink}" stroke-width="3.5" fill="none" stroke-linecap="round"/><path d="M113 47 Q120 39 127 47" stroke="${ink}" stroke-width="3.5" fill="none" stroke-linecap="round"/>`;
      mouth = `<path d="M92 118 Q100 126 108 118" stroke="${ink}" stroke-width="3.5" fill="none" stroke-linecap="round"/>`;
      break;
    case "heart":
      eyes = eyeWhite + heartPath(80, 36, .62, "#D94B64") + heartPath(120, 36, .62, "#D94B64");
      mouth = `<path d="M86 114 Q100 134 114 114 Z" fill="${ink}"/><path d="M93 122 Q100 128 107 122 Z" fill="#FF8FA3"/>`;
      break;
    case "surprised":
      eyes = eyeWhite + `<circle cx="80" cy="44" r="4.5" fill="${ink}"/><circle cx="120" cy="44" r="4.5" fill="${ink}"/>`;
      mouth = `<circle cx="100" cy="121" r="6" fill="none" stroke="${ink}" stroke-width="3.5"/>`;
      break;
    case "wink":
      eyes = eyeWhite + `<circle cx="81" cy="46" r="6.5" fill="${ink}"/><circle cx="83.5" cy="43" r="2.2" fill="#fff"/><path d="M113 46 Q120 52 127 46" stroke="${ink}" stroke-width="3.5" fill="none" stroke-linecap="round"/>`;
      mouth = `<path d="M88 116 Q100 130 112 116" stroke="${ink}" stroke-width="3.5" fill="none" stroke-linecap="round"/>`;
      break;
    default:
      eyes = eyeWhite + `<circle cx="81" cy="46" r="6.5" fill="${ink}"/><circle cx="121" cy="46" r="6.5" fill="${ink}"/><circle cx="83.5" cy="43" r="2.2" fill="#fff"/><circle cx="123.5" cy="43" r="2.2" fill="#fff"/>`;
      mouth = `<path d="M88 116 Q100 129 112 116" stroke="${ink}" stroke-width="3.5" fill="none" stroke-linecap="round"/>`;
  }
  const hat = o.hat ? `<g><path d="M84 76 L100 22 L116 76 Z" fill="#F7E7A9" stroke="#D9B44A" stroke-width="2" stroke-linejoin="round"/><path d="M92 50 L108 50 M88 63 L112 63" stroke="#D98CA5" stroke-width="4" stroke-linecap="round"/><circle cx="100" cy="21" r="7" fill="#D94B64"/></g>` : "";
  const held = o.heart ? heartPath(100, 128, 1.45, "#D94B64") : "";
  return `<svg viewBox="0 0 200 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="a cute crab">
    <g stroke="${dark}" stroke-width="7" fill="none" stroke-linecap="round">${side}</g>
    <g transform="translate(200 0) scale(-1 1)" stroke="${dark}" stroke-width="7" fill="none" stroke-linecap="round">${side}</g>
    ${arm}<g transform="translate(200 0) scale(-1 1)">${arm}</g>
    <path d="M84 80 L80 54" stroke="${body}" stroke-width="7" stroke-linecap="round"/>
    <path d="M116 80 L120 54" stroke="${body}" stroke-width="7" stroke-linecap="round"/>
    <ellipse cx="100" cy="114" rx="60" ry="42" fill="${body}"/>
    <ellipse cx="100" cy="128" rx="40" ry="18" fill="#fff" opacity=".16"/>
    <ellipse cx="78" cy="96" rx="14" ry="7" fill="#fff" opacity=".22" transform="rotate(-20 78 96)"/>
    <ellipse cx="70" cy="120" rx="9.5" ry="6" fill="#FF9DB0" opacity=".75"/>
    <ellipse cx="130" cy="120" rx="9.5" ry="6" fill="#FF9DB0" opacity=".75"/>
    ${eyes}${mouth}${hat}${held}
  </svg>`;
}

/* =====================================================================
   🎵 MUSIC — plays your mp3 if it exists, otherwise an original music-box tune
   (No autoplay on load. It starts when she reaches the end of the letter,
    after she has already tapped things — browsers allow that.)
   ===================================================================== */
const Music = (() => {
  let ctx = null, master = null, buffer = null, source = null, fileState = "unknown"; // unknown | buffer | element | none
  let playing = false, startAt = 0, offset = 0, duration = 0, synthNodes = [], rafId = 0, synthEndTimer = 0;
  const audioEl = () => $("#songAudio");

  // original waltz melody (MIDI note, beats) — written for this site
  const MEL = [[76,1],[79,1],[84,1],[83,2],[79,1],[81,1],[77,1],[81,1],[79,3],[76,1],[79,1],[84,1],[86,2],[84,1],[83,1],[81,1],[83,1],[84,3],
               [81,1],[84,1],[81,1],[79,2],[76,1],[77,1],[81,1],[79,1],[76,3],[74,1],[76,1],[77,1],[79,2],[84,1],[83,1],[86,1],[83,1],[84,3]];
  const ROOTS = [48,43,53,48,48,43,43,48,45,48,53,48,50,48,43,48];
  const MINOR = { 8: true, 12: true };
  const BEAT = 60 / 84, LOOPS = 2, SYNTH_LEN = 48 * BEAT * LOOPS + 2;
  const hz = (m) => 440 * Math.pow(2, (m - 69) / 12);

  function ensureCtx() {
    if (!ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      ctx = new AC();
      master = ctx.createGain(); master.gain.value = 0.9; master.connect(ctx.destination);
    }
    if (ctx.state === "suspended") ctx.resume();
    return ctx;
  }
  // look for the song file as soon as the page loads (no sound yet)
  let rawData = null, foundUrl = null, pendingPlay = false;
  function probe() {
    if (fileState !== "unknown") return;
    fileState = "checking";
    const list = (CONFIG.ourSong.files || [CONFIG.ourSong.file]).filter(Boolean).map(photoUrl);
    const viaFetch = (i) => {
      if (i >= list.length) return viaElement(0);
      fetch(list[i]).then((r) => { if (!r.ok) throw new Error("missing"); return r.arrayBuffer(); })
        .then((ab) => { rawData = ab; foundUrl = list[i]; fileState = "data"; updateLabels(); if (ctx) decode(); })
        .catch(() => viaFetch(i + 1));
    };
    // opening index.html straight from your computer blocks fetch — try a normal <audio> element instead
    const viaElement = (i) => {
      if (i >= list.length) { fileState = "none"; updateLabels(); if (pendingPlay) { pendingPlay = false; play(); } return; }
      const a = audioEl();
      a.onloadedmetadata = () => { foundUrl = list[i]; fileState = "element"; duration = a.duration; updateLabels(); if (pendingPlay) { pendingPlay = false; play(); } };
      a.onerror = () => viaElement(i + 1);
      a.preload = "metadata"; a.src = list[i]; a.load();
    };
    viaFetch(0);
  }
  function decode() {
    if (fileState !== "data" || !rawData) return;
    fileState = "decoding";
    ctx.decodeAudioData(rawData.slice(0), (b) => {
      buffer = b; duration = b.duration; fileState = "buffer"; updateLabels();
      if (pendingPlay) { pendingPlay = false; play(); }
    }, () => { // can't decode → play it with a normal <audio> element
      const a = audioEl(); a.src = foundUrl; fileState = "element"; a.load();
      if (pendingPlay) { pendingPlay = false; play(); }
    });
  }
  // called on the first tap anywhere — "unlocks" sound on iPhone
  function unlock() {
    ensureCtx();
    if (fileState === "unknown") probe();
    if (fileState === "data") decode();
  }
  function usingFile() { return fileState === "buffer" || fileState === "element"; }

  function bell(freq, t, vol, len) {
    const g = ctx.createGain();
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(vol, t + 0.008);
    g.gain.exponentialRampToValueAtTime(0.0008, t + len);
    g.connect(synthBus);
    [[1, 1, "sine"], [2, 0.28, "sine"], [4, 0.06, "triangle"]].forEach(([mul, v, type]) => {
      const o = ctx.createOscillator(); const og = ctx.createGain();
      o.type = type; o.frequency.value = freq * mul; og.gain.value = v;
      o.connect(og); og.connect(g); o.start(t); o.stop(t + len + 0.05);
      synthNodes.push(o);
    });
  }
  let synthBus = null;
  function playSynth() {
    ensureCtx();
    synthBus = ctx.createGain(); synthBus.gain.value = 0.16;
    const delay = ctx.createDelay(); delay.delayTime.value = 0.27;
    const fb = ctx.createGain(); fb.gain.value = 0.28;
    synthBus.connect(master); synthBus.connect(delay); delay.connect(fb); fb.connect(delay); delay.connect(master);
    const t0 = ctx.currentTime + 0.08;
    for (let loop = 0; loop < LOOPS; loop++) {
      let beat = loop * 48;
      MEL.forEach(([m, b]) => { bell(hz(m), t0 + beat * BEAT, 0.55, Math.max(1.2, b * BEAT * 1.6)); beat += b; });
      ROOTS.forEach((r, bar) => {
        const t = t0 + (loop * 48 + bar * 3) * BEAT;
        const third = MINOR[bar] ? 3 : 4;
        bell(hz(r), t, 0.32, 2.2);
        bell(hz(r + 12 + third), t + BEAT, 0.12, 1.2);
        bell(hz(r + 19), t + 2 * BEAT, 0.12, 1.2);
      });
    }
    startAt = ctx.currentTime; duration = SYNTH_LEN;
    clearTimeout(synthEndTimer);
    synthEndTimer = setTimeout(() => stop(true), SYNTH_LEN * 1000);
  }
  function stopSynth() {
    clearTimeout(synthEndTimer);
    synthNodes.forEach((n) => { try { n.stop(); } catch (e) { /* already stopped */ } });
    synthNodes = [];
    if (synthBus) { try { synthBus.disconnect(); } catch (e) { /* ignore */ } synthBus = null; }
  }

  function play() {
    if (playing) return;
    ensureCtx();
    // still looking for / preparing the mp3? start the moment it's ready
    if (fileState === "unknown" || fileState === "checking" || fileState === "data" || fileState === "decoding") {
      pendingPlay = true; if (fileState === "unknown") probe(); if (fileState === "data") decode();
      return;
    }
    if (fileState === "buffer") {
      source = ctx.createBufferSource(); source.buffer = buffer; source.connect(master);
      source.onended = () => { if (playing && ctx.currentTime - startAt >= duration - 0.3) stop(true); };
      if (offset >= duration) offset = 0;
      source.start(0, offset); startAt = ctx.currentTime - offset;
    } else if (fileState === "element") {
      const a = audioEl(); a.onended = () => stop(true);
      a.play().catch(() => playSynthFallback());
    } else {
      playSynth();
    }
    playing = true; updateUI(); tick();
  }
  function playSynthFallback() { fileState = "none"; updateLabels(); playSynth(); }
  function pause() {
    if (!playing) return;
    if (fileState === "buffer") { offset = ctx.currentTime - startAt; try { source.stop(); } catch (e) { /* ignore */ } }
    else if (fileState === "element") audioEl().pause();
    else stopSynth();
    playing = false; updateUI();
  }
  function stop(ended) {
    if (fileState === "buffer" && source) { try { source.stop(); } catch (e) { /* ignore */ } offset = 0; }
    if (fileState === "element") { audioEl().pause(); audioEl().currentTime = 0; }
    stopSynth();
    playing = false; updateUI();
    if (ended) $$("[data-song-progress]").forEach((p) => (p.style.width = "100%"));
  }
  function toggle() { playing ? pause() : play(); }
  function progress() {
    if (!playing || !duration) return 0;
    if (fileState === "element") return audioEl().currentTime / (audioEl().duration || 1);
    return Math.min(1, (ctx.currentTime - startAt) / duration);
  }
  function tick() {
    cancelAnimationFrame(rafId);
    const loop = () => {
      $$("[data-song-progress]").forEach((p) => (p.style.width = progress() * 100 + "%"));
      if (playing) rafId = requestAnimationFrame(loop);
    };
    loop();
  }
  function updateLabels() {
    // shows your song's name unless we know for sure the file is missing
    const s = CONFIG.ourSong, real = fileState !== "none";
    $$("[data-song-title]").forEach((e) => (e.textContent = real ? s.title : s.fallbackTitle));
    $$("[data-song-artist]").forEach((e) => (e.textContent = real ? s.artist : s.fallbackArtist));
  }
  function updateUI() {
    $$("[data-song-toggle]").forEach((b) => { b.textContent = playing ? "❚❚" : "▶"; b.setAttribute("aria-pressed", playing); });
    $$(".songcard").forEach((c) => c.classList.toggle("is-playing", playing));
  }
  return { unlock, probe, play, pause, toggle, stop, updateLabels, get playing() { return playing; }, get state() { return fileState; }, get file() { return foundUrl; } };
})();

/* =====================================================================
   CHAPTERS — the pages open one after another
   ===================================================================== */
const CHAPTERS = [
  { id: "letter", title: "a letter for you", e: "💌" },
  { id: "clock", title: "02:02", e: "🕑" },
  { id: "story", title: "little pieces of us", e: "📸" },
  { id: "thennow", title: "then & now", e: "✨" },
  { id: "reasons", title: "why I love you", e: "💗" },
  { id: "journey", title: "very important questions", e: "💬" },
  { id: "cook", title: "dinner is on me", e: "🍽️" },
  { id: "puzzle", title: "one memory, nine pieces", e: "🧩" },
  { id: "quiz", title: "memory quiz", e: "👀" },
  { id: "words", title: "quotes & a poem", e: "📜" },
  { id: "playlist", title: "songs for us", e: "🎧" },
  { id: "openwhen", title: "open when…", e: "✉️" },
  { id: "qna", title: "serious answers", e: "🙋" },
  { id: "certificate", title: "an official document", e: "🏅" },
  { id: "final", title: "one last thing", e: "♡" }
];
const chapterIndex = (id) => CHAPTERS.findIndex((c) => c.id === id);

const routeHooks = {};
function onRoute(name, hooks) { routeHooks[name] = Object.assign(routeHooks[name] || {}, hooks); }

/* 🔒 lock */
function unlockDate() { const l = CONFIG.lock; return new Date(l.year, l.month - 1, l.day, l.hour, l.minute, 0); }
function isLocked() { return CONFIG.lock.enabled && !isPreview && Date.now() < unlockDate().getTime(); }

let currentRoute = null;
function showRoute(name) {
  if (isLocked()) name = "lock";
  else if (name === "lock") name = "intro";
  if (!$("#screen-" + name)) name = "intro";
  if (name === currentRoute) return;
  const prev = currentRoute;
  if (prev && routeHooks[prev] && routeHooks[prev].leave) routeHooks[prev].leave();
  const goingBack = prev && chapterIndex(name) > -1 && chapterIndex(prev) > chapterIndex(name);
  $$(".screen").forEach((s) => s.classList.remove("is-active", "is-back"));
  const el = $("#screen-" + name);
  el.classList.add("is-active");
  if (goingBack) el.classList.add("is-back");
  document.body.classList.toggle("on-dark", el.classList.contains("page--dark"));
  document.body.classList.remove("dark-step");
  window.scrollTo(0, 0);
  requestAnimationFrame(() => window.scrollTo(0, 0));
  const ci = chapterIndex(name);
  $("#chapterBar") && ($("#chapterBar").style.width = ci < 0 ? "0" : ((ci + 1) / CHAPTERS.length) * 100 + "%");
  if (ci > -1) store.set("lastChapter", name);
  const h = routeHooks[name];
  if (h) { if (!h.inited && h.init) h.init(); h.inited = true; if (h.enter) h.enter(); }
  currentRoute = name;
}
function routeFromHash() { return (location.hash || "").replace("#", "").split("/")[0] || "intro"; }
function go(name) { if (location.hash === "#" + name) showRoute(name); else location.hash = name; }
window.addEventListener("hashchange", () => showRoute(routeFromHash()));

/* top bar + "next" button on every chapter */
function buildChrome() {
  const bar = document.createElement("div");
  bar.className = "topprogress"; bar.innerHTML = `<span id="chapterBar"></span>`;
  document.body.prepend(bar);
  CHAPTERS.forEach((c, i) => {
    const sec = $("#screen-" + c.id);
    const prev = i === 0 ? "intro" : CHAPTERS[i - 1].id;
    const nav = document.createElement("header");
    nav.className = "navbar";
    nav.innerHTML = `<a class="navbar__back" href="#${prev}" aria-label="previous page"><b>‹</b></a>
      <span class="navbar__title"><small>${i + 1} of ${CHAPTERS.length}</small>${esc(c.title)}</span>
      <button class="navbar__menu" type="button" aria-label="all pages">☰</button>`;
    sec.prepend(nav);
    $(".navbar__menu", nav).addEventListener("click", openMenu);
    const next = CHAPTERS[i + 1];
    if (next) {
      const f = document.createElement("div");
      f.className = "chapter-next";
      f.innerHTML = c.id === "journey"
        ? `<a class="link-btn" href="#${next.id}">skip the questions ›</a>`
        : `<a class="btn btn--primary btn--lg next-btn" href="#${next.id}">next: ${esc(next.title)} ${next.e} <b>›</b></a>`;
      ($(".page-body", sec) || $(".journey", sec)).appendChild(f);
    }
  });
  // menu
  $("#menuList").innerHTML = CHAPTERS.map((c, i) => `<li><a href="#${c.id}"><span>${c.e}</span>${esc(c.title)}<small>${i + 1}</small></a></li>`).join("");
  $$("#menuList a").forEach((a) => a.addEventListener("click", closeMenu));
  $("#menuClose").addEventListener("click", closeMenu);
  $("#menu").addEventListener("click", (e) => { if (e.target.id === "menu") closeMenu(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !$("#menu").hidden) closeMenu(); });
}
function openMenu() { $("#menu").hidden = false; }
function closeMenu() { $("#menu").hidden = true; }

function buildBackground() {
  const wrap = $("#bgDeco");
  ["♡", "🌷", "✨", "♡", "☕", "♡", "🌸"].forEach((c, i) => {
    const s = document.createElement("span");
    s.textContent = c;
    s.style.left = (8 + i * 13 + rand(-4, 4)) + "%";
    s.style.animationDelay = (i * 2.3) + "s";
    s.style.animationDuration = rand(14, 20) + "s";
    s.style.color = "#D98CA5";
    s.style.fontSize = rand(14, 22) + "px";
    wrap.appendChild(s);
  });
}

/* =====================================================================
   🔒 LOCK SCREEN
   ===================================================================== */
function setupLock() {
  const d = unlockDate();
  const dayName = d.toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long" }).toLowerCase();
  const time = `${pad(CONFIG.lock.hour)}:${pad(CONFIG.lock.minute)}`;
  $("#lockSub").innerHTML = `it opens on <b>${esc(dayName)}</b> at <b>${time} ${CONFIG.lock.hour < 12 ? "AM" : "PM"}</b> ♡<br>come back then, birthday girl.`;
  let wasLocked = isLocked();
  const tick = () => {
    const ms = d.getTime() - Date.now();
    if (ms > 0 && !isPreview) {
      const s = Math.floor(ms / 1000);
      const parts = [["days", Math.floor(s / 86400)], ["hours", Math.floor((s % 86400) / 3600)], ["mins", Math.floor((s % 3600) / 60)], ["secs", s % 60]];
      $("#lockCountdown").innerHTML = parts.map(([k, v]) => `<div><b>${pad(v)}</b><span>${k}</span></div>`).join("");
    } else if (wasLocked) {
      wasLocked = false;
      $("#lockIcon").textContent = "🔓";
      $("#lockTitle").textContent = "it's time ♡";
      $("#lockSub").textContent = "happy birthday, my baby. your surprise is ready.";
      $("#lockCountdown").innerHTML = "";
      $("#lockHint").hidden = true;
      $("#lockOpen").hidden = false;
      if (currentRoute === "lock") { confetti(60); burstHearts(null, null, 16); }
    }
  };
  tick();
  setInterval(tick, 1000);
  $("#lockOpen").addEventListener("click", () => go("intro"));
}

/* =====================================================================
   ENVELOPE
   ===================================================================== */
function setupIntro() {
  const env = $("#envelope");
  let opened = false;
  const open = () => {
    if (opened) { go("letter"); return; }
    opened = true;
    env.classList.add("is-open");
    $(".intro").classList.add("is-opened");
    const r = env.getBoundingClientRect();
    setTimeout(() => burstHearts(r.left + r.width / 2, r.top + r.height / 3, 16), 500);
    $("#openSurprise").textContent = "read your letter ♡";
    setTimeout(() => { if (currentRoute === "intro") go("letter"); }, prefersReducedMotion() ? 900 : 2600);
  };
  env.addEventListener("click", open);
  $("#openSurprise").addEventListener("click", open);
  $("#resumeBtn").addEventListener("click", () => go(store.get("lastChapter", "letter")));
  onRoute("intro", {
    enter() {
      opened = false;
      env.classList.remove("is-open");
      $(".intro").classList.remove("is-opened");
      $("#openSurprise").textContent = "open your surprise 💌";
      const last = store.get("lastChapter", null);
      $("#resumeBtn").hidden = !last || last === "letter";
    }
  });
  const d = unlockDate();
  $("#introDate").textContent = d.toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long" }).toLowerCase();
}

/* =====================================================================
   LETTER (+ song at the end)
   ===================================================================== */
function setupLetter() {
  $("#heroTitle").textContent = CONFIG.heroTitle;
  $("#heroSub").textContent = CONFIG.heroSub;
  $("#heroDate").textContent = `turning ${CONFIG.age} ♡`;
  setImg($("#heroPhoto"), CONFIG.heroPhoto, "the birthday girl");

  const body = $("#letterBody");
  const fmt = (t) => esc(t).replace(/\*(.+?)\*/g, "<em>$1</em>");
  const last = CONFIG.letter.length - 1;
  body.innerHTML = CONFIG.letter.map((p, i) => `<p class="${i === 0 ? "is-dropcap" : ""}${i === last ? " closing" : ""}">${fmt(p)}</p>`).join("");

  const letter = $("#letterCard"), ctrls = $("#letterSlowControls"), nextBtn = $("#letterNext"), count = $("#letterSlowCount");
  const paras = $$("p", body);
  let shown = 0, mode = "full", songStarted = false, letterEnteredAt = Date.now();
  onRoute("letter", { enter() { letterEnteredAt = Date.now(); } });

  const startSong = () => {
    const card = $("#songCard");
    if (card.hidden) { card.hidden = false; setTimeout(() => card.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth", block: "center" }), 250); }
    if (!songStarted) { songStarted = true; Music.play(); burstHearts(null, null, 12); }
  };
  const updateSlow = () => {
    paras.forEach((p, i) => p.classList.toggle("is-shown", i < shown));
    count.textContent = `${shown} of ${paras.length}`;
    nextBtn.textContent = shown >= paras.length ? "read it all again ♡" : shown === 0 ? "begin ♡" : "next paragraph ♡";
  };
  const setMode = (m) => {
    mode = m;
    $$("[data-letter-mode]").forEach((b) => { const on = b.dataset.letterMode === m; b.classList.toggle("is-active", on); b.setAttribute("aria-selected", on); });
    letter.classList.toggle("is-slow", m === "slow");
    ctrls.hidden = m !== "slow";
    if (m === "slow") { shown = 1; updateSlow(); }
  };
  $$("[data-letter-mode]").forEach((b) => b.addEventListener("click", () => setMode(b.dataset.letterMode)));
  nextBtn.addEventListener("click", () => {
    if (shown >= paras.length) { shown = 1; window.scrollTo({ top: 0, behavior: "smooth" }); }
    else {
      shown++;
      setTimeout(() => paras[shown - 1].scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth", block: "center" }), 50);
      if (shown === paras.length) startSong();
    }
    updateSlow();
  });
  // full mode: when she scrolls to the end of the letter, the song starts
  if ("IntersectionObserver" in window) {
    new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        // only when she has actually scrolled down to the end (not on page load)
        if (en.isIntersecting && mode === "full" && currentRoute === "letter" && window.scrollY > 400 && Date.now() - letterEnteredAt > 1500) startSong();
      });
    }, { threshold: 1 }).observe($("#letterEnd"));
  }
}

/* =====================================================================
   02:02 — and a live "you've been alive for" counter
   ===================================================================== */
function setupClock() {
  $("#clockMsg").textContent = CONFIG.clockMessage;
  const b = CONFIG.birthMoment;
  const born = new Date(b.year, b.month - 1, b.day, b.hour, b.minute);
  const tick = () => {
    const s = Math.max(0, Math.floor((Date.now() - born.getTime()) / 1000));
    const parts = [["days", Math.floor(s / 86400).toLocaleString("en-IN")], ["hours", pad(Math.floor((s % 86400) / 3600))], ["mins", pad(Math.floor((s % 3600) / 60))], ["secs", pad(s % 60)]];
    $("#ageCounter").innerHTML = parts.map(([k, v]) => `<div><b>${v}</b><span>${k}</span></div>`).join("");
  };
  tick();
  setInterval(() => { if (currentRoute === "clock") tick(); }, 1000);
}

/* =====================================================================
   💬 THE QUESTION JOURNEY — one question per page
   ===================================================================== */
const J = { steps: CONFIG.journey, index: 0, history: [], answers: {} };

function fill(text) {
  const a = J.answers;
  const list = (v) => (Array.isArray(v) ? v.join(", ") : v);
  return String(text || "")
    .replace(/\{nick\}/g, a.nick || "my baby")
    .replace(/\{flowers\}/g, list(a.flowers) || "flowers")
    .replace(/\{tries\}/g, a._tries || "a few");
}
function saveJourney() { store.set("journeyAnswers", J.answers); store.set("journeyIndex", J.index); store.set("journeyHistory", J.history); }
function stepIndexById(id) { return J.steps.findIndex((s) => s.id === id); }

function journeyGo(target, pushHistory = true) {
  let idx = typeof target === "string" ? stepIndexById(target) : target;
  if (idx < 0 || idx >= J.steps.length) idx = J.steps.length - 1;
  if (pushHistory && idx !== J.index) J.history.push(J.index);
  J.index = idx;
  saveJourney();
  const old = $("#journeyStage").firstElementChild;
  const draw = () => { renderStep(); window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? "auto" : "smooth" }); };
  if (old && !prefersReducedMotion()) { old.classList.add("is-leaving"); setTimeout(draw, 240); } else draw();
}
function journeyNextFrom(step, option) {
  const next = (option && option.next) || step.next;
  journeyGo(next != null ? next : J.index + 1);
}
function card(inner, cls = "") {
  const back = J.history.length ? `<button class="link-btn qcard__back" data-j-back>‹ back</button>` : "";
  return `<div class="qcard ${cls}">${back}${inner}</div>`;
}
const stickerHTML = (e) => `<div class="qcard__emoji">${e}</div>`;

function renderStep() {
  const step = J.steps[J.index];
  const stage = $("#journeyStage");
  const total = J.steps.length;
  document.body.classList.toggle("dark-step", !!step.dark);
  $("#journeyBar").style.width = Math.round((J.index / (total - 1)) * 100) + "%";
  $("#journeyCount").textContent = step.type === "final" ? "done ♡" : `question ${J.index + 1} of ${total}`;
  const kicker = step.kicker ? `<p class="qcard__kicker">${esc(step.kicker)}</p>` : "";
  const qh = step.q ? `<h2 class="qcard__q">${esc(fill(step.q))}</h2>` : "";
  const sub = step.sub ? `<p class="qcard__sub">${esc(fill(step.sub))}</p>` : "";
  let html = "";
  switch (step.type) {
    case "choice":
      html = card(`${stickerHTML(step.sticker || "💗")}${kicker}${qh}${sub}
        <div class="options ${step.layout === "two" ? "options--2" : ""}">
          ${step.options.map((o, i) => `<button class="opt" data-opt="${i}"><span class="opt__e">${o.e || "♡"}</span><span>${esc(fill(o.label))}</span></button>`).join("")}
        </div>`);
      break;
    case "multi":
      html = card(`${stickerHTML(step.sticker || "💐")}${qh}
        <p class="qcard__sub">tap to choose · <b id="multiCount">0</b>/${step.max} picked</p>
        <div class="multi">${step.options.map((o, i) => `<button class="opt" data-multi="${i}" aria-pressed="false"><span class="opt__e">${o.e}</span><span>${esc(o.label)}</span></button>`).join("")}</div>
        <button class="btn btn--primary btn--lg" id="multiDone" disabled>done ♡</button>`);
      break;
    case "yesno":
      html = card(`<div class="qcard__crab">${crabSVG({ mood: "heart", heart: true })}</div>${kicker}${qh}${sub}
        <div class="yesno" id="yesno">
          <button class="btn btn--primary btn--lg btn-yes" id="btnYes">${esc(step.yes)}</button>
          <button class="btn btn--soft btn-no" id="btnNo">${esc(step.noLabels[0])}</button>
        </div>`);
      break;
    case "map":
      html = card(`<div id="journeyMap"></div><button class="btn btn--primary btn--lg" data-next style="margin-top:16px">next ›</button>`);
      break;
    case "pop":
      html = card(`${qh}<p class="popcount"><span id="popN">0</span> / ${step.count} 💗</p><div class="popbox" id="popbox"></div>`);
      break;
    case "slider":
      html = card(`${qh}
        <div class="slider-face" id="sliderFace">🤔</div>
        <div class="slider-wrap">
          <input type="range" min="0" max="100" value="50" class="cute-range" id="slider" aria-label="${esc(step.q)}">
          <div class="slider-ends"><span>${esc(step.left)}</span><span>${esc(step.right)}</span></div>
        </div>
        <p class="slider-read" id="sliderRead"></p>
        <button class="btn btn--primary btn--lg" id="sliderDone">lock it in 🔒</button>`);
      break;
    case "scratch":
      html = card(`${qh}
        <div class="scratch" id="scratch">
          <div class="scratch__prize"><div><h4>${esc(step.prizeTitle)}</h4><p>${esc(step.prizeFine)}</p></div></div>
          <canvas id="scratchCanvas" aria-label="scratch card, rub it to reveal"></canvas>
        </div>
        <div class="row-btns"><button class="btn btn--soft" id="scratchReveal">just show me 👀</button><button class="btn btn--primary" id="scratchNext" hidden>next ›</button></div>`);
      break;
    case "cafes":
    case "places":
      html = card(`<div id="carousel"></div>`, "qcard--carousel");
      break;
    case "songs":
      html = `<div class="qcard qcard--dark">${J.history.length ? `<button class="link-btn qcard__back" data-j-back>‹ back</button>` : ""}
        <div class="pl-head"><div class="pl-cover" aria-hidden="true">♫</div><div><p class="pl-kicker">made for ${esc(J.answers.nick || "my baby")}</p><h2 class="pl-title">${esc(fill(step.q))}</h2><p class="pl-meta">top 10 hindi romantic songs · tap to add</p></div></div>
        <div class="tracklist">${CONFIG.songs.map((s, i) => `
          <button class="track" data-track="${i}" aria-pressed="false">
            <span class="track__n">${i + 1}</span>
            <span class="track__art" style="background:linear-gradient(135deg,${s.c[0]},${s.c[1]})">${s.e}</span>
            <span class="track__txt"><b>${esc(s.title)}</b><small>${esc(s.artist)} · ${esc(s.from)}</small></span>
            <span class="track__add" aria-hidden="true">+</span>
          </button>`).join("")}</div>
        <button class="btn btn--green btn--lg" id="pickDone" disabled>add to our playlist</button></div>`;
      break;
    case "movies":
      html = `<div class="qcard qcard--dark">${J.history.length ? `<button class="link-btn qcard__back" data-j-back>‹ back</button>` : ""}
        <div class="pl-head"><div class="pl-cover pl-cover--movie" aria-hidden="true">🍿</div><div><p class="pl-kicker">movie nights with ${esc(J.answers.nick || "my baby")}</p><h2 class="pl-title">${esc(fill(step.q))}</h2><p class="pl-meta">top 10 romantic movies · pick as many as you want</p></div></div>
        <div class="movie-grid">${CONFIG.movies.map((m, i) => `
          <button class="movie" data-movie="${i}" aria-pressed="false">
            <span class="movie__poster" style="background:linear-gradient(160deg,${m.c[0]},${m.c[1]})"><span>${m.e}</span></span>
            <b>${esc(m.title)}</b><small>${m.year}</small>
            <span class="movie__check" aria-hidden="true">✓</span>
          </button>`).join("")}</div>
        <button class="btn btn--green btn--lg" id="pickDone" disabled>save our movie list</button></div>`;
      break;
    case "summary": {
      const rows = J.steps.filter((s) => s.save && s.saveLabel && J.answers[s.save] != null && J.answers[s.save] !== "" && !(Array.isArray(J.answers[s.save]) && !J.answers[s.save].length))
        .map((s) => {
          let v = J.answers[s.save];
          if (Array.isArray(v)) v = v.length > 3 ? `${v.slice(0, 3).join(", ")} +${v.length - 3} more` : v.join(", ");
          return `<dt>${esc(s.saveLabel)}</dt><dd>${esc(v)}</dd>`;
        });
      if (J.answers.coupon) rows.push(`<dt>coupon</dt><dd>${esc(J.answers.coupon)}</dd>`);
      html = card(`${stickerHTML("🎟️")}${qh}<p class="qcard__sub">screenshot this. it's binding now. 📸</p>
        <div class="ticket"><span class="ticket__stamp">APPROVED ♡</span><h3>for: ${esc(J.answers.nick || "my baby")} ♡</h3><dl>${rows.join("") || "<dt>plans</dt><dd>all of them ♡</dd>"}</dl></div>
        <button class="btn btn--primary btn--lg" data-next style="margin-top:18px">one more thing ›</button>`);
      break;
    }
    case "final": {
      const ni = chapterIndex("journey") + 1;
      const n = CHAPTERS[ni];
      html = card(`${stickerHTML("🥹")}${qh}<p class="qcard__sub">every answer saved. the plans are official now.</p>
        <div class="row-btns" style="flex-direction:column;align-items:stretch">
          <a class="btn btn--primary btn--lg" href="#${n.id}">next: ${esc(n.title)} ${n.e} ›</a>
          <button class="link-btn" id="journeyRestart">answer everything again</button>
        </div>`);
      store.set("journeyDone", true);
      setTimeout(() => confetti(50), 300);
      break;
    }
  }
  stage.innerHTML = html;
  wireStep(step);
}

function showOutcome(step, { text, emoji, option } = {}) {
  const cur = $("#journeyStage .qcard");
  const dark = step.dark ? " qcard--dark qcard--center" : "";
  const doRender = () => {
    $("#journeyStage").innerHTML = `<div class="qcard${dark}">
      ${stickerHTML(emoji || (option && option.e) || step.sticker || "💗")}
      <p class="qcard__outcome">${esc(fill(text))}</p>
      <button class="btn ${step.dark ? "btn--green" : "btn--primary"} btn--lg" data-continue>next ›</button>
    </div>`;
    $("[data-continue]").addEventListener("click", () => journeyNextFrom(step, option));
    $("[data-continue]").focus({ preventScroll: true });
  };
  if (cur && !prefersReducedMotion()) { cur.classList.add("is-leaving"); setTimeout(doRender, 240); } else doRender();
}

function wireStep(step) {
  const stage = $("#journeyStage");
  const back = $("[data-j-back]", stage);
  if (back) back.addEventListener("click", () => { const p = J.history.pop(); if (p != null) journeyGo(p, false); });
  const nextBtn = $("[data-next]", stage);
  if (nextBtn) nextBtn.addEventListener("click", () => journeyNextFrom(step));

  if (step.type === "choice") {
    $$("[data-opt]", stage).forEach((b) => b.addEventListener("click", (e) => {
      const o = step.options[+b.dataset.opt];
      b.classList.add("is-picked");
      if (step.save) J.answers[step.save] = o.value || o.label;
      if (o.saveAlso) Object.assign(J.answers, o.saveAlso);
      saveJourney();
      burstHearts(e.clientX, e.clientY, 6);
      setTimeout(() => showOutcome(step, { text: o.outcome, option: o }), 180);
    }));
  }
  if (step.type === "multi") {
    const chosen = new Set(), done = $("#multiDone");
    $$("[data-multi]", stage).forEach((b) => b.addEventListener("click", () => {
      const i = +b.dataset.multi;
      if (chosen.has(i)) chosen.delete(i);
      else { if (chosen.size >= step.max) { notify(`only ${step.max}! (the bouquet has rules)`, "💐", "florist"); return; } chosen.add(i); }
      b.classList.toggle("is-picked", chosen.has(i)); b.setAttribute("aria-pressed", chosen.has(i));
      $("#multiCount").textContent = chosen.size; done.disabled = chosen.size === 0;
    }));
    done.addEventListener("click", () => {
      J.answers[step.save] = [...chosen].sort().map((i) => step.options[i].e + " " + step.options[i].label);
      saveJourney();
      showOutcome(step, { text: step.outcome, emoji: "💐" });
    });
  }
  if (step.type === "yesno") setupRunawayNo(step);
  if (step.type === "map") renderWorldMap($("#journeyMap"), step);
  if (step.type === "pop") setupPopGame(step);
  if (step.type === "slider") setupSlider(step);
  if (step.type === "scratch") setupScratch(step);
  if (step.type === "cafes") setupCafes(step);
  if (step.type === "places") setupPlaces(step);
  if (step.type === "songs" || step.type === "movies") setupPicker(step);
  if (step.type === "final") $("#journeyRestart").addEventListener("click", () => { J.answers = {}; J.history = []; store.set("journeyDone", false); journeyGo(0, false); });
}

/* --- ☕ cafés, one after another --- */
function setupCafes(step) {
  const list = CONFIG.cafes, picked = [];
  let i = 0;
  const box = $("#carousel");
  const draw = () => {
    const c = list[i];
    box.innerHTML = `<p class="qcard__kicker">${esc(fill(step.q))}</p>
      <div class="dots">${list.map((_, k) => `<i class="${k < i ? "done" : k === i ? "on" : ""}"></i>`).join("")}</div>
      <div class="placecard">
        <div class="placecard__e">${c.e}</div>
        <p class="placecard__n">café ${i + 1} of ${list.length}</p>
        <h3 class="placecard__name">${esc(c.name)}</h3>
        <p class="placecard__where">📍 ${esc(c.area)}</p>
        <p class="placecard__line"><span>what we'll eat</span>${esc(c.eat)}</p>
      </div>
      <div class="row-btns">
        <button class="btn btn--primary btn--lg" id="cYes">yes, take me ☕</button>
        <button class="btn btn--soft" id="cNo">maybe another day</button>
      </div>`;
    $("#cYes").addEventListener("click", (e) => { picked.push(c.name); burstHearts(e.clientX, e.clientY, 8, ["☕", "💗"]); advance(); });
    $("#cNo").addEventListener("click", advance);
  };
  const advance = () => {
    i++;
    if (i < list.length) { const pc = $(".placecard", box); if (pc && !prefersReducedMotion()) { pc.classList.add("is-out"); setTimeout(draw, 260); } else draw(); return; }
    J.answers[step.save] = picked; saveJourney();
    const txt = picked.length === list.length ? "all five?! café hopping marathon it is. I'm booking every single one ☕💗"
      : picked.length ? `${picked.length} café date${picked.length > 1 ? "s" : ""} on the list: ${picked.join(", ")}. booking them all.`
      : "none?? okay, then I'm choosing. surprise café date it is ☕";
    showOutcome(step, { text: txt, emoji: "☕" });
  };
  draw();
}

/* --- 🇮🇳 places with yes / no… please? --- */
function setupPlaces(step) {
  const list = CONFIG.places, yes = [];
  let i = 0, nos = 0;
  const box = $("#carousel");
  const draw = () => {
    const p = list[i];
    nos = 0;
    box.innerHTML = `<p class="qcard__kicker">${esc(fill(step.q))}</p>
      <div class="dots">${list.map((_, k) => `<i class="${k < i ? "done" : k === i ? "on" : ""}"></i>`).join("")}</div>
      <div class="placecard placecard--trip">
        <div class="placecard__e">${p.e}</div>
        <p class="placecard__n">place ${i + 1} of ${list.length}</p>
        <h3 class="placecard__name">${esc(p.name)}</h3>
        <p class="placecard__where">📍 ${esc(p.region)}</p>
        <p class="placecard__line"><span>what we'll do</span>${esc(p.line)}</p>
        <p class="placecard__plea" id="plea" hidden></p>
      </div>
      <p class="placecard__ask">will you go here with me?</p>
      <div class="row-btns">
        <button class="btn btn--primary btn--lg" id="pYes">yes 💗</button>
        <button class="btn btn--soft" id="pNo">no</button>
      </div>`;
    $("#pYes").addEventListener("click", (e) => {
      yes.push(p.name);
      burstHearts(e.clientX, e.clientY, 10, ["✈️", "💗", "✨"]);
      notify(nos ? `${p.name} — yayyy, you said yes (after ${nos} no${nos > 1 ? "s" : ""}) ✈️` : `${p.name} — added to our trips ✈️`, p.e, "trips");
      advance();
    });
    $("#pNo").addEventListener("click", () => {
      nos++;
      const plea = $("#plea"), noBtn = $("#pNo"), card = $(".placecard", box);
      if (nos >= 3) {
        notify(`okay okay… saving ${p.name} for later. (asking again next year 🥲)`, "🥲", "trips");
        advance(); return;
      }
      plea.hidden = false;
      plea.textContent = nos === 1 ? p.please : CONFIG.placePleas[nos - 2] || CONFIG.placePleas[0];
      noBtn.textContent = nos === 1 ? "still no 😤" : "no. final answer.";
      $("#pYes").style.transform = `scale(${1 + nos * 0.12})`;
      if (!prefersReducedMotion()) card.animate([{ transform: "translateX(0)" }, { transform: "translateX(-8px)" }, { transform: "translateX(8px)" }, { transform: "translateX(0)" }], { duration: 300 });
    });
  };
  const advance = () => {
    i++;
    if (i < list.length) { const pc = $(".placecard", box); if (pc && !prefersReducedMotion()) { pc.classList.add("is-out"); setTimeout(draw, 260); } else draw(); return; }
    J.answers[step.save] = yes; saveJourney();
    const txt = yes.length === list.length ? "YES to all five 😭 okay, I'm opening a savings account called 'trips with her'."
      : yes.length ? `trips we're taking: ${yes.join(", ")}. the rest… I'm asking again next year 😌`
      : "zero?? okay. I'll just keep asking. every. single. year. 🥲";
    showOutcome(step, { text: txt, emoji: yes.length ? "✈️" : "🥲" });
  };
  draw();
}

/* --- 🎧🍿 dark song / movie pickers --- */
function setupPicker(step) {
  const stage = $("#journeyStage");
  const isSongs = step.type === "songs";
  const items = isSongs ? CONFIG.songs : CONFIG.movies;
  const chosen = new Set();
  const done = $("#pickDone");
  const label = () => (isSongs ? (chosen.size ? `add ${chosen.size} song${chosen.size > 1 ? "s" : ""} to our playlist` : "add to our playlist") : (chosen.size ? `save ${chosen.size} movie${chosen.size > 1 ? "s" : ""}` : "save our movie list"));
  $$(isSongs ? "[data-track]" : "[data-movie]", stage).forEach((b) => b.addEventListener("click", () => {
    const i = +(isSongs ? b.dataset.track : b.dataset.movie);
    chosen.has(i) ? chosen.delete(i) : chosen.add(i);
    b.classList.toggle("is-on", chosen.has(i));
    b.setAttribute("aria-pressed", chosen.has(i));
    const add = $(".track__add", b); if (add) add.textContent = chosen.has(i) ? "✓" : "+";
    done.disabled = !chosen.size; done.textContent = label();
  }));
  done.addEventListener("click", () => {
    const list = [...chosen].sort((a, b) => a - b).map((i) => items[i].title);
    J.answers[step.save] = list; saveJourney();
    const text = isSongs
      ? (list.length >= 8 ? `${list.length} songs?! okay, that's a whole road trip playlist. saved to "songs for us" 🎧` : `${list.length} song${list.length > 1 ? "s" : ""} saved to our playlist 🎧 — you'll find ${list.length > 1 ? "them" : "it"} near the end.`)
      : (list.length >= 6 ? `${list.length} movies = ${list.length} movie nights. I'll bring the blanket 🍿` : `movie list saved: ${list.join(", ")}. I'll bring the blanket 🍿`);
    showOutcome(step, { text, emoji: isSongs ? "🎧" : "🍿" });
  });
}

/* --- the "no" button that runs away --- */
function setupRunawayNo(step) {
  const box = $("#yesno"), yes = $("#btnYes"), no = $("#btnNo");
  let tries = 0;
  const sayYes = (forced) => {
    J.answers[step.save] = forced || tries ? `yes (after ${tries} tries 😌)` : "YES";
    J.answers._tries = tries; saveJourney();
    const r = yes.getBoundingClientRect();
    burstHearts(r.left + r.width / 2, r.top + r.height / 2, 18, ["🦀", "💗", "✨"]);
    confetti(30);
    showOutcome(step, { text: forced || tries > 0 ? step.outcomeForced : step.outcomeYes, emoji: "🦀" });
  };
  const dodge = () => {
    tries++;
    const last = step.noLabels.length - 1;
    if (tries >= last) {
      no.textContent = step.noLabels[last];
      no.classList.remove("btn--soft"); no.classList.add("btn--primary");
      no.style.left = ""; no.style.top = ""; no.classList.remove("is-running");
      yes.style.transform = "scale(1.1)";
      no.dataset.converted = "1";
      no.onclick = () => sayYes(true);
      return;
    }
    no.textContent = step.noLabels[Math.min(tries, last - 1)];
    yes.style.transform = `scale(${1 + tries * 0.12})`;
    const bw = box.clientWidth, bh = box.clientHeight;
    no.classList.add("is-running");
    const nw = no.offsetWidth, nh = no.offsetHeight, k = 1 + tries * .12;
    const yr = { l: yes.offsetLeft - 20, t: yes.offsetTop - 20, r: yes.offsetLeft + yes.offsetWidth * k + 20, b: yes.offsetTop + yes.offsetHeight * k + 20 };
    let x = 0, y = 0;
    for (let n = 0; n < 20; n++) {
      x = rand(0, Math.max(0, bw - nw)); y = rand(0, Math.max(0, bh - nh));
      if (!(x < yr.r && x + nw > yr.l && y < yr.b && y + nh > yr.t)) break;
    }
    no.style.left = x + "px"; no.style.top = y + "px";
  };
  yes.addEventListener("click", () => sayYes(false));
  no.addEventListener("mouseenter", () => { if (!no.dataset.converted) dodge(); });
  no.addEventListener("touchstart", (e) => { if (!no.dataset.converted) { e.preventDefault(); dodge(); } }, { passive: false });
  no.addEventListener("click", (e) => { if (!no.dataset.converted) { e.preventDefault(); dodge(); } });
}

function setupPopGame(step) {
  const box = $("#popbox");
  let popped = 0, finished = false;
  const spawn = () => {
    const h = document.createElement("button");
    h.className = "popheart"; h.type = "button"; h.setAttribute("aria-label", "pop this heart");
    h.textContent = pick(["💗", "💖", "💕", "💓", "❤️"]);
    h.style.left = rand(4, 78) + "%"; h.style.top = rand(6, 70) + "%";
    h.style.animationDuration = rand(2.2, 3.6) + "s";
    const popIt = (x, y) => {
      if (finished || h.classList.contains("is-popped")) return;
      h.classList.add("is-popped"); popped++;
      $("#popN").textContent = popped;
      burstHearts(x, y, 4);
      setTimeout(() => h.remove(), 350);
      if (popped >= step.count) { finished = true; setTimeout(() => showOutcome(step, { text: step.outcome, emoji: "💗" }), 450); }
      else if (box.querySelectorAll(".popheart:not(.is-popped)").length < 3) spawn();
    };
    h.addEventListener("pointerdown", (e) => { e.preventDefault(); popIt(e.clientX, e.clientY); });
    h.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { const r = h.getBoundingClientRect(); popIt(r.left, r.top); } });
    box.appendChild(h);
  };
  for (let i = 0; i < 5; i++) spawn();
}

function setupSlider(step) {
  const s = $("#slider"), face = $("#sliderFace"), read = $("#sliderRead");
  const faces = ["😇", "🙂", "😏", "🎭", "🎬"];
  const update = () => {
    const v = +s.value;
    face.textContent = faces[Math.min(4, Math.floor(v / 20.01))];
    face.style.transform = `rotate(${(v - 50) / 3}deg) scale(${1 + Math.abs(v - 50) / 200})`;
    read.textContent = step.outcomes.find((x) => v <= x.upTo).label;
  };
  s.addEventListener("input", update); update();
  $("#sliderDone").addEventListener("click", () => {
    const o = step.outcomes.find((x) => +s.value <= x.upTo);
    J.answers[step.save] = o.label; saveJourney();
    showOutcome(step, { text: o.text, emoji: +s.value > 65 ? "🏆" : +s.value < 35 ? "🙄" : "🤝" });
  });
}

function setupScratch(step) {
  const canvas = $("#scratchCanvas"), wrap = $("#scratch");
  const ctx = canvas.getContext("2d");
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  let revealed = false, drawing = false, strokes = 0;
  const r = wrap.getBoundingClientRect();
  canvas.width = r.width * dpr; canvas.height = r.height * dpr;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  const g = ctx.createLinearGradient(0, 0, r.width, r.height);
  g.addColorStop(0, "#E9B7C7"); g.addColorStop(.5, "#F3D3DE"); g.addColorStop(1, "#D9C3EE");
  ctx.fillStyle = g; ctx.fillRect(0, 0, r.width, r.height);
  ctx.fillStyle = "rgba(255,255,255,.92)"; ctx.textAlign = "center";
  ctx.font = "800 20px ui-rounded, 'SF Pro Rounded', Nunito, system-ui, sans-serif";
  ctx.fillText("scratch me ✨", r.width / 2, r.height / 2 + 6);
  ctx.font = "600 13px ui-rounded, Nunito, system-ui, sans-serif";
  ctx.fillText("(use your finger)", r.width / 2, r.height / 2 + 28);
  const reveal = () => {
    if (revealed) return; revealed = true;
    canvas.style.opacity = "0"; setTimeout(() => (canvas.style.display = "none"), 500);
    J.answers.coupon = step.prizeTitle; saveJourney(); confetti(40);
    $("#scratchReveal").hidden = true;
    const nb = $("#scratchNext"); nb.hidden = false;
    nb.onclick = () => showOutcome(step, { text: step.outcome, emoji: "🎟️" });
  };
  const checkCleared = () => {
    try {
      const d = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
      let clear = 0, total = 0;
      for (let i = 3; i < d.length; i += 64) { total++; if (d[i] === 0) clear++; }
      if (clear / total > 0.45) reveal();
    } catch (err) { if (strokes > 60) reveal(); }
  };
  const at = (e) => {
    const b = canvas.getBoundingClientRect();
    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath(); ctx.arc(e.clientX - b.left, e.clientY - b.top, 22, 0, Math.PI * 2); ctx.fill();
    ctx.globalCompositeOperation = "source-over";
    if (++strokes % 12 === 0) checkCleared();
  };
  canvas.addEventListener("pointerdown", (e) => { drawing = true; canvas.setPointerCapture(e.pointerId); at(e); });
  canvas.addEventListener("pointermove", (e) => { if (drawing) at(e); });
  canvas.addEventListener("pointerup", () => { drawing = false; checkCleared(); });
  canvas.addEventListener("pointercancel", () => { drawing = false; });
  $("#scratchReveal").addEventListener("click", reveal);
}

function setupJourney() {
  J.answers = store.get("journeyAnswers", {}) || {};
  J.index = store.get("journeyIndex", 0) || 0;
  J.history = store.get("journeyHistory", []) || [];
  if (J.index >= J.steps.length) J.index = 0;
  onRoute("journey", { enter() { renderStep(); }, leave() { document.body.classList.remove("dark-step"); } });
}

/* =====================================================================
   🗺️ THE CRAB WORLD MAP — every country except India gets marked
   ===================================================================== */
function renderWorldMap(mount, opts = {}) {
  const data = window.WORLD_MAP;
  const title = opts.title, note = opts.note;
  if (!data) { mount.innerHTML = `<p class="map-title">${esc(title)}</p><p class="muted center">(map-data.js didn't load)</p>`; return; }
  const isHome = (c) => c.n === "India";
  const home = data.countries.find(isHome);
  const biggest = data.countries.filter((c) => !isHome(c)).sort((a, b) => b.a - a.a).slice(0, 16);
  mount.innerHTML = `
    <p class="map-title">${esc(title)}</p>
    <div class="worldmap">
      <svg viewBox="0 0 ${data.width} ${data.height}" role="img" aria-label="world map with every country except India marked">
        <g>${data.countries.map((c, i) => `<path class="country${isHome(c) ? " is-home" : ""}" data-i="${i}" d="${c.d}"><title>${esc(c.n)}</title></path>`).join("")}</g>
        ${biggest.map((c) => `<text class="map-crab" x="${c.c[0]}" y="${c.c[1] + 5}" text-anchor="middle">🦀</text>`).join("")}
        ${home ? `<text class="home-pin" x="${home.c[0]}" y="${home.c[1] - 8}" text-anchor="middle">🏠</text>` : ""}
      </svg>
    </div>
    <div class="map-stats">
      <span class="hud-pill"><strong class="map-count">0</strong> countries</span>
      <span class="hud-pill"><strong>∞</strong> crabs</span>
      <span class="hud-pill"><strong>1</strong> you ♡</span>
    </div>
    <p class="muted center small" style="margin-top:6px">${esc(note)}</p>`;
  const paths = $$(".country", mount);
  const countEl = $(".map-count", mount);
  const toMark = paths.filter((p) => !p.classList.contains("is-home"));
  for (let i = toMark.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [toMark[i], toMark[j]] = [toMark[j], toMark[i]]; }
  const crabs = $$(".map-crab", mount);
  if (prefersReducedMotion()) { toMark.forEach((p) => p.classList.add("is-marked")); countEl.textContent = toMark.length; crabs.forEach((c) => c.classList.add("is-on")); }
  else {
    const total = toMark.length, duration = 2600, t0 = performance.now();
    let done = 0;
    const step = (t) => {
      if (!mount.isConnected) return;
      const target = Math.min(total, Math.round(((t - t0) / duration) * total));
      while (done < target) { toMark[done].classList.add("is-marked"); done++; }
      countEl.textContent = done;
      if (done < total) requestAnimationFrame(step);
      else crabs.forEach((c, i) => setTimeout(() => c.classList.add("is-on"), i * 60));
    };
    requestAnimationFrame(step);
  }
  paths.forEach((p) => p.addEventListener("click", () => {
    const c = data.countries[+p.dataset.i];
    if (isHome(c)) notify("India — home 🏠 crabs here too, obviously.", "🏠", "crab atlas");
    else notify(`${c.n} — date approved ✓`, "✈️", "crab atlas");
  }));
}

/* =====================================================================
   WORDS — quotes carousel + poem
   ===================================================================== */
function setupWords() {
  const Q = CONFIG.quotes;
  let i = 0;
  const box = $("#quotes");
  box.innerHTML = `<div class="quote-card" id="quoteCard"></div>
    <div class="quote-nav"><button class="btn btn--soft" id="qPrev" aria-label="previous quote">‹</button><div class="dots" id="qDots"></div><button class="btn btn--soft" id="qNext" aria-label="next quote">›</button></div>`;
  const draw = () => {
    const q = Q[i];
    $("#quoteCard").innerHTML = `<span class="quote-card__mark">“</span><p class="quote-card__text">${esc(q.text)}</p>${q.note ? `<p class="quote-card__note">${esc(q.note)}</p>` : ""}<p class="quote-card__by">— ${esc(q.by)}</p>`;
    $("#quoteCard").classList.remove("is-in"); void $("#quoteCard").offsetWidth; $("#quoteCard").classList.add("is-in");
    $("#qDots").innerHTML = Q.map((_, k) => `<i class="${k === i ? "on" : ""}"></i>`).join("");
  };
  $("#qPrev").addEventListener("click", () => { i = (i - 1 + Q.length) % Q.length; draw(); });
  $("#qNext").addEventListener("click", () => { i = (i + 1) % Q.length; draw(); });
  let sx = null;
  $("#quoteCard").addEventListener("touchstart", (e) => { sx = e.touches[0].clientX; }, { passive: true });
  $("#quoteCard").addEventListener("touchend", (e) => { if (sx == null) return; const dx = e.changedTouches[0].clientX - sx; if (Math.abs(dx) > 40) { i = (i + (dx < 0 ? 1 : -1) + Q.length) % Q.length; draw(); } sx = null; });
  draw();
  const p = CONFIG.poem;
  $("#poem").innerHTML = `<h3 class="poem__title">${esc(p.title)}</h3>${p.stanzas.map((s) => `<p>${s.map(esc).join("<br>")}</p>`).join("")}<p class="poem__sign hand">— yours ♡</p>`;
}

/* =====================================================================
   🎧 SONGS FOR US (her picks from the questions)
   ===================================================================== */
function renderPlaylist() {
  const a = store.get("journeyAnswers", {}) || {};
  const songs = Array.isArray(a.songs) && a.songs.length ? CONFIG.songs.filter((s) => a.songs.includes(s.title)) : CONFIG.songs;
  const movies = Array.isArray(a.movies) && a.movies.length ? CONFIG.movies.filter((m) => a.movies.includes(m.title)) : CONFIG.movies;
  $("#plMeta").textContent = `made for ${a.nick || "my baby"} · ${songs.length} songs · ${movies.length} movies`;
  const spot = (s) => "https://open.spotify.com/search/" + encodeURIComponent(`${s.title} ${s.artist.split(",")[0]}`);
  $("#plSongs").innerHTML = songs.map((s, i) => `
    <a class="track is-on" href="${spot(s)}" target="_blank" rel="noopener">
      <span class="track__n">${i + 1}</span>
      <span class="track__art" style="background:linear-gradient(135deg,${s.c[0]},${s.c[1]})">${s.e}</span>
      <span class="track__txt"><b>${esc(s.title)}</b><small>${esc(s.artist)} · ${esc(s.from)}</small></span>
      <span class="track__open">open ↗</span>
    </a>`).join("") + (a.songs && a.songs.length ? "" : `<p class="pl-note">(answer the questions to pick your own — showing all 10 for now)</p>`);
  $("#plMovies").innerHTML = movies.map((m) => `
    <div class="movie is-on"><span class="movie__poster" style="background:linear-gradient(160deg,${m.c[0]},${m.c[1]})"><span>${m.e}</span></span><b>${esc(m.title)}</b><small>${m.year}</small></div>`).join("");
}

/* =====================================================================
   OPEN WHEN / Q&A / CERTIFICATE / FINAL
   ===================================================================== */
function setupOpenWhen() {
  $("#openWhen").innerHTML = CONFIG.openWhen.map((o, i) => `
    <div class="ow">
      <button class="ow__head" aria-expanded="false" aria-controls="ow-${i}">
        <span class="ow__env" aria-hidden="true"></span>
        <span class="ow__title">${esc(o.title)}<small>tap to open</small></span>
        <span class="ow__chev" aria-hidden="true">›</span>
      </button>
      <div class="ow__body" id="ow-${i}"><div><p class="ow__msg paper">${esc(o.msg)}</p></div></div>
    </div>`).join("");
  $$("#openWhen .ow").forEach((w) => {
    const head = $(".ow__head", w);
    head.addEventListener("click", () => {
      const open = !w.classList.contains("is-open");
      w.classList.toggle("is-open", open); head.setAttribute("aria-expanded", open);
      $("small", head).textContent = open ? "tap to close" : "tap to open";
    });
  });
}
function setupQna() {
  $("#qnaList").innerHTML = CONFIG.qna.map((x, i) => `
    <div class="acc">
      <button class="acc__q" aria-expanded="false" aria-controls="qa-${i}"><span>${esc(x.q)}</span><span class="acc__icon" aria-hidden="true">+</span></button>
      <div class="acc__a" id="qa-${i}" role="region"><div><p>${esc(x.a)}</p></div></div>
    </div>`).join("");
  $$("#qnaList .acc").forEach((a) => {
    const q = $(".acc__q", a);
    q.addEventListener("click", () => { const open = !a.classList.contains("is-open"); a.classList.toggle("is-open", open); q.setAttribute("aria-expanded", open); });
  });
}
function setupCertificate() {
  const c = CONFIG.certificate;
  $("#certCard").innerHTML = `
    <div class="cert__inner">
      <div class="cert__stars" aria-hidden="true">✦ ✧ ✦ 🌷 ✦ ✧ ✦</div>
      <p class="cert__kicker">this certifies that</p>
      <h3 class="cert__title">${esc(c.title)}</h3>
      <p class="cert__kicker">awarded to</p>
      <p class="cert__name">${esc(CONFIG.herName)}</p>
      <p class="cert__kicker">special qualifications</p>
      <ul class="cert__list">${c.qualifications.map((q) => `<li>${esc(q)}</li>`).join("")}</ul>
      <div class="cert__foot">
        <div><span class="muted">awarded on</span><b>${esc(c.awardedOn)}</b></div>
        <div class="cert__stamp" aria-label="official stamp">${crabSVG({ mood: "wink" })}</div>
        <div style="text-align:right"><span class="muted">signed</span><b>${esc(CONFIG.myName)}</b></div>
      </div>
    </div>`;
  $("#printCert").addEventListener("click", () => window.print());
}
function setupFinal() {
  const s = CONFIG.secret;
  $("#secretCard").innerHTML = s.map((p, i) => `<p class="${i === s.length - 1 ? "closing" : ""}">${esc(p)}</p>`).join("");
  $("#startOver").addEventListener("click", () => go("intro"));
  onRoute("final", { enter() { setTimeout(() => { burstHearts(null, window.innerHeight / 3, 22); confetti(50); }, 300); } });
}

/* =====================================================================
   LIGHTBOX (used by the photo pages)
   ===================================================================== */
let lbList = [], lbIndex = 0, lbLastFocus = null;
function openLightbox(list, i) {
  lbList = list; lbIndex = i; lbLastFocus = document.activeElement;
  updateLightbox(); $("#lightbox").hidden = false; $("#lbClose").focus();
}
function updateLightbox() {
  const it = lbList[lbIndex], img = $("#lbImg");
  img.style.display = "";
  img.onerror = () => { img.style.display = "none"; $("#lbCap").textContent = "this photo is hiding ♡"; };
  img.src = photoUrl(it.src); img.alt = it.label || "";
  $("#lbCap").textContent = it.label ? `${it.label} — ${it.note || ""}` : "";
}
function closeLightbox() { $("#lightbox").hidden = true; if (lbLastFocus) lbLastFocus.focus(); }
function lbStep(d) { lbIndex = (lbIndex + d + lbList.length) % lbList.length; updateLightbox(); }
function setupLightbox() {
  const lb = $("#lightbox");
  $("#lbClose").addEventListener("click", closeLightbox);
  $("#lbPrev").addEventListener("click", (e) => { e.stopPropagation(); lbStep(-1); });
  $("#lbNext").addEventListener("click", (e) => { e.stopPropagation(); lbStep(1); });
  lb.addEventListener("click", (e) => { if (e.target === lb || e.target.classList.contains("lightbox__figure")) closeLightbox(); });
  document.addEventListener("keydown", (e) => {
    if (lb.hidden) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") lbStep(-1);
    if (e.key === "ArrowRight") lbStep(1);
  });
  let sx = null;
  lb.addEventListener("touchstart", (e) => { sx = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener("touchend", (e) => { if (sx == null) return; const dx = e.changedTouches[0].clientX - sx; if (Math.abs(dx) > 50) lbStep(dx < 0 ? 1 : -1); sx = null; });
}

/* =====================================================================
   SETTINGS (inside the ☰ menu)
   ===================================================================== */
function setupSettings() {
  const sw = $("#setReduce");
  const apply = (on) => document.documentElement.classList.toggle("reduce-motion", on);
  const saved = store.get("reduceMotion", false);
  sw.checked = saved; apply(saved);
  sw.addEventListener("change", () => { apply(sw.checked); store.set("reduceMotion", sw.checked); });
  $("#setReset").addEventListener("click", () => {
    const keep = store.get("reduceMotion", false);
    store.clear(); store.set("reduceMotion", keep);
    J.answers = {}; J.index = 0; J.history = [];
    notify("all answers & scores reset ♡", "🔄", "settings");
  });
}

/* =====================================================================
   START
   ===================================================================== */
window.BDAY = { CONFIG, crabSVG, notify, burstHearts, confetti, store, onRoute, rand, pick, esc, $, $$, setImg, photoUrl, prefersReducedMotion, go, openLightbox, Music };

document.addEventListener("DOMContentLoaded", () => {
  buildChrome();
  buildBackground();
  setupSettings();
  setupLock();
  setupIntro();
  setupLetter();
  setupClock();
  setupJourney();
  setupWords();
  setupOpenWhen();
  setupQna();
  setupCertificate();
  setupFinal();
  setupLightbox();
  onRoute("playlist", { enter: renderPlaylist });

  // sound: unlock on the first tap; song buttons
  const unlockOnce = () => { Music.unlock(); window.removeEventListener("pointerdown", unlockOnce, true); window.removeEventListener("keydown", unlockOnce, true); };
  window.addEventListener("pointerdown", unlockOnce, true);
  window.addEventListener("keydown", unlockOnce, true);
  $$("[data-song-toggle]").forEach((b) => b.addEventListener("click", () => Music.toggle()));
  Music.updateLabels();
  Music.probe();

  if (isPreview) { $("#previewPill").hidden = false; setTimeout(() => ($("#previewPill").hidden = true), 6000); }
  document.dispatchEvent(new Event("bday:ready"));
  showRoute(routeFromHash());
});
