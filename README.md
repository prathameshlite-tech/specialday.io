# 💌 Her Birthday Website

A birthday story that opens page after page. It's locked until **19 October, 02:02 AM**, then shows:

1. 🔒 a lock screen with a countdown (until 19 Oct, 02:02)
2. 💌 an envelope, then **the letter**. When she reaches the end, **a song starts playing**.
3. 🕑 02:02, the moment she arrived
4. 📸 *little pieces of us*: swipe-away polaroids labelled with the occasions (IFYKYK date, SIP meeting, pandal hopping, my birthday view…)
5. ✨ *then & now*: drag the line (right = childhood photo, left = now)
6. 💗 *why I love you* (a jar of reasons) + *reasons I fell for you* (flip cards)
7. 💬 25 questions, one per page: coffee, flowers, **5 Mumbai cafés one by one**, date ideas, **dinner**, dessert, who pays, **dark Spotify-style song picker**, **dark movie picker**, popcorn, **5 places in India (yes / no → please 🥺)**, the crab date + world map, and more. It ends with an "official plans" ticket.
8. 🍽️ the crab cooking game (basket → pot → plate)
9. 🧩 photo puzzle · 👀 memory quiz
10. 📜 romantic quotes + a poem written for her
11. 🎧 *songs for us*: the songs and movies she picked, with "open in Spotify" links
12. ✉️ open-when letters · 🙋 Q&A · 🏅 certificate · ♡ one last note

Everything runs in the browser, so it works on **GitHub Pages** with no server.

```
birthday-gift/
├── index.html
├── style.css
├── script.js      ← ✏️ ALL text you can edit is at the TOP (CONFIG)
├── games.js       ← photo stack, then&now, jar, cooking game, puzzle, quiz
├── map-data.js    ← world map shapes (don't edit)
└── assets/
    ├── photos/    ← your photos
    ├── music/     ← put our-song.mp3 here (optional)
    └── icons/
```

---

## 1. Test it BEFORE her birthday 👀

The site shows the lock screen until 19 Oct 02:02. To see everything now, add **`?preview`** to the link:

- on your computer: open `index.html`, then add `?preview` to the end of the address bar
- once online: `https://YOUR-USERNAME.github.io/happy-birthday/?preview`

**Don't send her the `?preview` link.** Send the normal one.

> Want it to open at midnight instead of 02:02? In `script.js` change `lock: { … hour: 2, minute: 2 }` to `hour: 0, minute: 0`.
> The lock uses the clock on her phone. It's a cute surprise lock, not a bank vault.

## 2. Add your song 🎵

1. Put the mp3 in `assets/music/` and name it **`our-song.mp3`**.
2. In `script.js`, change `ourSong.title` and `ourSong.artist`.

When she finishes the letter, it plays automatically (she has already tapped the envelope, so phones allow it). If there's no mp3, an original little music-box tune plays instead.

## 3. Change names and messages ✏️

Open `script.js`. Everything is in `CONFIG` at the top:

| What | In CONFIG |
|---|---|
| **Her name on the certificate** | `herName` |
| **Your signature** | `myName` |
| Unlock date/time | `lock` |
| The letter | `letter` (one paragraph per line, `*word*` = pretty italics) |
| Swipe photos + their occasions | `story` |
| Then & now pairs | `thenNow` |
| Why I love you (jar) | `loveJar` |
| Reasons I fell for you | `fellFor` |
| Mumbai cafés | `cafes` |
| India places + the "please" lines | `places`, `placePleas` |
| Song list / movie list | `songs`, `movies` |
| All the questions | `journey` |
| Quotes / poem | `quotes`, `poem` |
| Open-when letters, Q&A, certificate, last note | `openWhen`, `qna`, `certificate`, `secret` |

Rules so nothing breaks: keep the `"quotes"`, keep the commas at line ends, and write `\"` if you need a quote mark inside a message.

**Questions:** each answer has its own `outcome` (the reply she sees). `next: "id"` jumps to a different question. `{nick}` becomes the nickname she picks.

## 4. Put it online with GitHub Pages (free) 🌐

1. Make a free account at **github.com**.
2. Click **+** → **New repository** → name it e.g. `happy-birthday` → **Public** → **Create repository**.
3. Click **"uploading an existing file"**.
4. Open the `birthday-gift` folder, **select everything inside it** (not the folder itself) and drag it into the browser. `index.html` must sit at the top level.
5. Click **Commit changes**.
6. Go to **Settings** → **Pages**.
7. Under **Source**, choose **Deploy from a branch**. Under **Branch**, pick **main** and **/ (root)**, then click **Save**.
8. Wait 1–2 minutes and refresh. Your link appears: `https://YOUR-USERNAME.github.io/happy-birthday/`
9. Test it with `?preview` on your phone, then send her the normal link 💌

To edit later, open the file on GitHub, click ✏️, then **Commit changes**.

> Privacy: a public repo can be found by others. Only share the link with her.

## Little extras
- iPhone: Safari → Share → **Add to Home Screen** gives it an app icon.
- The ☰ button on every page lists all pages, plus *reduce motion* and *reset answers*.
- Answers and scores stay on her phone only. Nothing is sent anywhere.
- Fonts: on iPhone it uses Apple's own SF Pro Rounded + New York.
