/* =====================================================================
   📸🎮 PHOTO PAGES + GAMES
   swipe-stack of our photos, then & now slider, love jar,
   crab cooking game, sliding puzzle, memory quiz.
   All the content comes from CONFIG at the top of script.js.
   ===================================================================== */
document.addEventListener("bday:ready", () => {
  const { CONFIG, crabSVG, notify, burstHearts, confetti, store, onRoute, rand, pick, esc, $, $$, setImg, photoUrl, prefersReducedMotion, openLightbox } = window.BDAY;

  /* =================================================================
     1. LITTLE PIECES OF US — a stack of polaroids you swipe away
     ================================================================= */
  (function photoStack() {
    const items = CONFIG.story;
    const stack = $("#stack");
    let idx = 0, cards = [];
    const unblurred = new Set();

    function build() {
      stack.innerHTML = "";
      cards = items.map((it, k) => {
        const c = document.createElement("div");
        c.className = "scard" + (it.secret ? " is-secret" : "");
        c.style.setProperty("--rot", `${[-4, 3, -2, 4, -3, 2, -1][k % 7]}deg`);
        c.innerHTML = `
          <span class="scard__tape">${esc(it.label)}</span>
          <span class="scard__img"><img alt="${esc(it.label)}" draggable="false"></span>
          <span class="scard__note">${esc(it.note)}</span>
          ${it.secret ? `<button class="scard__unlock" type="button">tap if you know 👀</button>` : ""}`;
        setImg($("img", c), it.src, it.label);
        stack.appendChild(c);
        return c;
      });
      const end = document.createElement("div");
      end.className = "scard scard--end";
      end.innerHTML = `<div><p class="scard__endtitle">that's us… so far ♡</p><p class="muted">more pages get added every year.</p><button class="btn btn--primary" id="stackAgain" type="button">see them again</button></div>`;
      stack.prepend(end);
      $("#stackAgain").addEventListener("click", () => { idx = 0; layout(); $("#filmstrip").hidden = true; });
      layout();
    }
    function layout() {
      cards.forEach((c, k) => {
        const d = k - idx;
        c.classList.toggle("is-gone", d < 0);
        c.style.zIndex = String(100 - k);
        if (d >= 0) {
          c.style.transform = d === 0 ? "" : `translateY(${Math.min(d, 3) * 10}px) scale(${1 - Math.min(d, 3) * 0.04}) rotate(var(--rot))`;
          c.style.opacity = d > 3 ? "0" : "1";
        }
      });
      $("#stackBack").disabled = idx === 0;
      $("#stackNext").disabled = idx >= cards.length;
      $("#stackNext").textContent = idx >= cards.length - 1 ? "last one ›" : "next photo ›";
      if (idx >= cards.length) showFilmstrip();
    }
    function throwTop(dir) {
      if (idx >= cards.length) return;
      const c = cards[idx];
      c.style.transition = "transform .45s cubic-bezier(.2,.8,.2,1), opacity .45s";
      c.style.transform = `translate(${dir * 130}%, -10%) rotate(${dir * 25}deg)`;
      c.style.opacity = "0";
      idx++;
      setTimeout(() => { c.style.transition = ""; layout(); }, prefersReducedMotion() ? 0 : 420);
    }
    function showFilmstrip() {
      const fs = $("#filmstrip");
      fs.hidden = false;
      fs.innerHTML = `<p class="filmstrip__title hand">all of them, in one strip ♡</p><div class="filmstrip__row">${items.map((it, k) => `
        <button class="filmstrip__frame" data-k="${k}" aria-label="${esc(it.label)}"><img src="${photoUrl(it.src)}" alt="" class="${it.secret && !unblurred.has(k) ? "is-blur" : ""}"><span>${esc(it.label)}</span></button>`).join("")}</div>`;
      $$(".filmstrip__frame", fs).forEach((b) => b.addEventListener("click", () => {
        const k = +b.dataset.k;
        if (items[k].secret && !unblurred.has(k)) { unblurred.add(k); $("img", b).classList.remove("is-blur"); burstHearts(null, null, 8, ["👀", "💗"]); return; }
        openLightbox(items, k);
      }));
    }
    // drag / swipe the top card
    let sx = 0, sy = 0, dx = 0, dragging = false, moved = false;
    stack.addEventListener("pointerdown", (e) => {
      const c = cards[idx];
      if (!c || !c.contains(e.target) || e.target.closest(".scard__unlock")) return;
      dragging = true; moved = false; sx = e.clientX; sy = e.clientY; dx = 0;
      c.setPointerCapture(e.pointerId);
      c.style.transition = "none";
    });
    stack.addEventListener("pointermove", (e) => {
      if (!dragging) return;
      dx = e.clientX - sx; const dy = e.clientY - sy;
      if (Math.abs(dx) > 6 || Math.abs(dy) > 6) moved = true;
      cards[idx].style.transform = `translate(${dx}px, ${dy * 0.3}px) rotate(${dx / 14}deg)`;
    });
    const end = () => {
      if (!dragging) return;
      dragging = false;
      const c = cards[idx];
      if (Math.abs(dx) > 90) { throwTop(dx > 0 ? 1 : -1); return; }
      c.style.transition = "transform .35s cubic-bezier(.34,1.56,.64,1)";
      c.style.transform = "";
      if (!moved) {
        const it = items[idx];
        if (it.secret && !unblurred.has(idx)) return;
        openLightbox(items, idx);
      }
    };
    stack.addEventListener("pointerup", end);
    stack.addEventListener("pointercancel", end);
    stack.addEventListener("click", (e) => {
      const btn = e.target.closest(".scard__unlock");
      if (!btn) return;
      const k = cards.indexOf(btn.closest(".scard"));
      unblurred.add(k);
      btn.closest(".scard").classList.add("is-unlocked");
      btn.remove();
      burstHearts(e.clientX, e.clientY, 10, ["👀", "🤫", "💗"]);
    });
    $("#stackNext").addEventListener("click", () => throwTop(idx % 2 ? 1 : -1));
    $("#stackBack").addEventListener("click", () => { if (idx > 0) { idx--; $("#filmstrip").hidden = true; layout(); } });
    onRoute("story", { init: build });
  })();

  /* =================================================================
     2. THEN & NOW — drag the line (right = then, left = now)
     ================================================================= */
  (function thenNow() {
    const pairs = CONFIG.thenNow;
    const range = $("#cmpRange"), wrap = $("#cmpThenWrap"), line = $("#cmpLine");
    let cur = 0;
    const set = (v) => {
      wrap.style.clipPath = `inset(0 ${100 - v}% 0 0)`;
      wrap.style.webkitClipPath = `inset(0 ${100 - v}% 0 0)`;
      line.style.left = v + "%";
      $("#compare").classList.toggle("at-then", v > 97);
      $("#compare").classList.toggle("at-now", v < 3);
    };
    const load = (k) => {
      cur = k;
      const p = pairs[k];
      setImg($("#cmpThen"), p.then, "then"); setImg($("#cmpNow"), p.now, "now");
      $("#cmpCap").textContent = p.caption;
      $$("#compareTabs button").forEach((b, n) => { b.classList.toggle("is-active", n === k); b.setAttribute("aria-selected", n === k); });
      range.value = 50; set(50);
    };
    $("#compareTabs").innerHTML = pairs.map((p, k) => `<button type="button" role="tab">${esc(p.tab)}</button>`).join("");
    $$("#compareTabs button").forEach((b, k) => b.addEventListener("click", () => load(k)));
    range.addEventListener("input", () => set(+range.value));
    onRoute("thennow", { init: () => load(0) });
  })();

  /* =================================================================
     3. WHY I LOVE YOU — the jar  +  reasons I fell for you (flip cards)
     ================================================================= */
  (function reasons() {
    const R = CONFIG.loveJar;
    let n = 0;
    const notes = $("#jarNotes");
    const colors = ["#F8DDE6", "#F7E7A9", "#E8DDF7", "#FFFFFF", "#F4C2D0", "#DCEFF3"];
    const drawNotes = () => {
      const left = R.length - n;
      notes.innerHTML = Array.from({ length: left }, (_, k) => `<i style="background:${colors[k % colors.length]};left:${8 + ((k * 37) % 70)}%;bottom:${4 + Math.floor(k / 4) * 13}%;transform:rotate(${(k * 47) % 60 - 30}deg)"></i>`).join("");
      $("#jarCount").textContent = n === 0 ? `${R.length} reasons inside` : `${n} of ${R.length} opened`;
    };
    $("#jar").addEventListener("click", (e) => {
      const note = $("#jarNote");
      if (n >= R.length) {
        n = 0; drawNotes();
        note.innerHTML = `<span class="hand">refilled ♡ (I could write a thousand more)</span>`;
        return;
      }
      note.innerHTML = `<span class="jar-note__n">reason #${n + 1}</span><span class="jar-note__t">${esc(R[n])}</span>`;
      note.classList.remove("is-in"); void note.offsetWidth; note.classList.add("is-in");
      n++; drawNotes();
      $("#jar").classList.remove("is-shake"); void $("#jar").offsetWidth; $("#jar").classList.add("is-shake");
      burstHearts(e.clientX, e.clientY, 5);
      if (n === R.length) setTimeout(() => notify(`all ${R.length} reasons opened. (the jar refills if you tap again ♡)`, "🫙", "love jar"), 600);
    });
    drawNotes();

    $("#adoreGrid").innerHTML = CONFIG.fellFor.map((a) => `
      <button class="flipcard" aria-label="${esc(a.title)} — tap to flip">
        <span class="flipcard__inner">
          <span class="flipcard__face flipcard__front"><span>${a.e}</span><b>${esc(a.title)}</b></span>
          <span class="flipcard__face flipcard__back">“${esc(a.text)}”</span>
        </span>
      </button>`).join("");
    $$("#adoreGrid .flipcard").forEach((c) => c.addEventListener("click", (e) => {
      c.classList.toggle("is-flipped");
      if (c.classList.contains("is-flipped")) burstHearts(e.clientX, e.clientY, 5);
    }));
  })();

  /* =================================================================
     4. DINNER IS ON ME — grab a crab → into the pot → cooked → onto the plate
     ================================================================= */
  (function cookGame() {
    const kitchen = $("#kitchen"), basket = $("#kBasket"), pot = $("#kPot"), plate = $("#kPlate");
    const inside = $("#kPotInside"), ring = $("#kRing"), ringText = $("#kRingText"), help = $("#kHelp");
    const RAW = { body: "#7E93A8", dark: "#5D7086" }, COOKED = { body: "#F2643F", dark: "#C4442A" };
    const TOTAL = 3, SLOTS = [[8, 30], [46, 20], [27, 48]];
    let cooked = 0, busy = false, selected = null;

    $("#kPotSvg").innerHTML = `<svg viewBox="0 0 220 160" aria-hidden="true">
      <rect x="0" y="54" width="34" height="16" rx="8" fill="#B23A54"/><rect x="186" y="54" width="34" height="16" rx="8" fill="#B23A54"/>
      <path d="M22 50 H198 V116 a32 32 0 0 1 -32 32 H54 a32 32 0 0 1 -32 -32 Z" fill="#D94B64"/>
      <path d="M36 66 V112 a20 20 0 0 0 20 20" stroke="#fff" stroke-width="6" fill="none" stroke-linecap="round" opacity=".35"/>
      <rect x="16" y="42" width="188" height="14" rx="7" fill="#E8758A"/>
      <circle cx="110" cy="96" r="13" fill="#fff" opacity=".9"/><path transform="translate(110 89) scale(.55)" d="M0 6 C0 -2 -12 -2 -12 6 C-12 12 -4 17 0 22 C4 17 12 12 12 6 C12 -2 0 -2 0 6 Z" fill="#D94B64"/>
    </svg>`;

    function newCrab(k) {
      const b = document.createElement("button");
      b.type = "button"; b.className = "k-crab";
      b.setAttribute("aria-label", `crab ${k + 1} — drag it into the pot`);
      b.style.left = [6, 36, 64][k] + "%"; b.style.top = [34, 50, 30][k] + "%";
      b.innerHTML = crabSVG(Object.assign({ mood: "happy" }, RAW));
      basket.appendChild(b);
      wireDrag(b);
    }
    function reset() {
      cooked = 0; busy = false; selected = null;
      $$(".k-crab", basket).forEach((c) => c.remove());
      $$(".k-served, .k-garnish", plate).forEach((c) => c.remove());
      for (let k = 0; k < TOTAL; k++) newCrab(k);
      $("#kDone").hidden = true;
      help.textContent = "grab a crab from the basket and drop it into the pot. (or tap a crab, then tap the pot.)";
    }
    const potRect = () => pot.getBoundingClientRect();
    const overPot = (x, y) => { const r = potRect(); return x > r.left - 20 && x < r.right + 20 && y > r.top - 40 && y < r.bottom; };

    function wireDrag(c) {
      let sx = 0, sy = 0, drag = false, moved = false;
      c.addEventListener("pointerdown", (e) => {
        if (busy) { notify("one at a time! the pot is busy 🍲", "🍲", "kitchen"); return; }
        e.preventDefault();
        drag = true; moved = false; sx = e.clientX; sy = e.clientY;
        c.setPointerCapture(e.pointerId); c.classList.add("is-dragging");
      });
      c.addEventListener("pointermove", (e) => {
        if (!drag) return;
        const dx = e.clientX - sx, dy = e.clientY - sy;
        if (Math.abs(dx) + Math.abs(dy) > 8) moved = true;
        c.style.transform = `translate(${dx}px, ${dy}px) rotate(${dx / 10}deg) scale(1.15)`;
        pot.classList.toggle("is-target", overPot(e.clientX, e.clientY));
      });
      const up = (e) => {
        if (!drag) return;
        drag = false; c.classList.remove("is-dragging"); pot.classList.remove("is-target");
        if (moved && overPot(e.clientX, e.clientY)) { c.style.transform = ""; cook(c); return; }
        c.style.transform = "";
        if (!moved) select(c);
      };
      c.addEventListener("pointerup", up);
      c.addEventListener("pointercancel", up);
      c.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); if (!busy) cook(c); } });
    }
    function select(c) {
      $$(".k-crab", basket).forEach((x) => x.classList.toggle("is-selected", x === c && selected !== c));
      selected = selected === c ? null : c;
      help.textContent = selected ? "now tap the pot 🍲" : "grab a crab from the basket and drop it into the pot.";
    }
    pot.addEventListener("click", () => { if (selected && !busy) { const c = selected; selected = null; cook(c); } });
    pot.addEventListener("keydown", (e) => { if ((e.key === "Enter" || e.key === " ") && selected && !busy) { e.preventDefault(); const c = selected; selected = null; cook(c); } });

    function cook(c) {
      busy = true;
      c.remove();
      help.textContent = pick(["into the pot it goes 🫕", "cooking with love (and zero skills) 🔥", "smells amazing already 😋"]);
      inside.innerHTML = `<div class="k-in k-in--raw">${crabSVG(Object.assign({ mood: "surprised" }, RAW))}</div><div class="k-in k-in--cooked">${crabSVG(Object.assign({ mood: "shy" }, COOKED))}</div>`;
      inside.classList.remove("is-cooked");
      pot.classList.add("is-cooking");
      ring.hidden = false;
      const dur = prefersReducedMotion() ? 900 : 2600, t0 = performance.now();
      const step = (t) => {
        const p = Math.min(1, (t - t0) / dur);
        ringText.textContent = Math.round(p * 100) + "%";
        ring.style.setProperty("--p", p * 360 + "deg");
        if (p > 0.55) inside.classList.add("is-cooked");
        if (p < 1) requestAnimationFrame(step); else popOut();
      };
      requestAnimationFrame(step);
    }
    function popOut() {
      ring.hidden = true;
      pot.classList.remove("is-cooking");
      inside.innerHTML = "";
      const kr = kitchen.getBoundingClientRect(), pr = potRect();
      const dish = $(".k-plate__dish", plate).getBoundingClientRect();
      const slot = SLOTS[cooked % SLOTS.length];
      const fly = document.createElement("div");
      fly.className = "k-fly";
      fly.innerHTML = crabSVG(Object.assign({ mood: "heart" }, COOKED));
      kitchen.appendChild(fly);
      const w = fly.offsetWidth;
      const x0 = pr.left - kr.left + pr.width / 2 - w / 2, y0 = pr.top - kr.top - w * 0.2;
      const x1 = dish.left - kr.left + dish.width * slot[0] / 100, y1 = dish.top - kr.top + dish.height * slot[1] / 100;
      const midX = (x0 + x1) / 2, midY = Math.min(y0, y1) - kr.height * 0.28;
      const finish = () => {
        fly.remove();
        const s = document.createElement("div");
        s.className = "k-served";
        s.style.left = slot[0] + "%"; s.style.top = slot[1] + "%";
        s.innerHTML = crabSVG(Object.assign({ mood: "heart" }, COOKED));
        $(".k-plate__dish", plate).appendChild(s);
        cooked++; busy = false;
        burstHearts(dish.left + dish.width / 2, dish.top + dish.height / 2, 6, ["✨", "😋", "💗"]);
        if (cooked >= TOTAL) done();
        else help.textContent = `${cooked} on the plate! ${TOTAL - cooked} more to go 🦀`;
      };
      if (prefersReducedMotion() || !fly.animate) { finish(); return; }
      const a = fly.animate([
        { transform: `translate(${x0}px, ${y0}px) scale(.5) rotate(0deg)` },
        { transform: `translate(${x0}px, ${y0 - 40}px) scale(.9) rotate(-20deg)`, offset: 0.2 },
        { transform: `translate(${midX}px, ${midY}px) scale(1.05) rotate(200deg)`, offset: 0.6 },
        { transform: `translate(${x1}px, ${y1}px) scale(.62) rotate(360deg)` }
      ], { duration: 950, easing: "cubic-bezier(.3,.7,.4,1)" });
      a.onfinish = finish;
    }
    function done() {
      const dish = $(".k-plate__dish", plate);
      ["🍋", "🧄", "🌿"].forEach((g, k) => {
        const s = document.createElement("span");
        s.className = "k-garnish"; s.textContent = g;
        s.style.left = [70, 6, 74][k] + "%"; s.style.top = [62, 70, 18][k] + "%";
        dish.appendChild(s);
      });
      const nick = (store.get("journeyAnswers", {}) || {}).nick || "my baby";
      help.textContent = "bon appétit 😋";
      $("#kDoneTitle").textContent = "dinner is served 🍽️";
      $("#kDoneMsg").textContent = `three butter-garlic crabs for ${nick}, cooked with a lot of love (and very little cooking skill). the real one is on me — that's a promise.`;
      $("#kDone").hidden = false;
      confetti(60);
      setTimeout(() => $("#kDone").scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth", block: "center" }), 200);
    }
    $("#kAgain").addEventListener("click", reset);
    onRoute("cook", { init: reset });
  })();

  /* =================================================================
     5. ONE MEMORY, NINE LITTLE PIECES 🧩
     ================================================================= */
  (function puzzle() {
    const board = $("#puzzleBoard"), movesEl = $("#pzMoves"), bestEl = $("#pzBest");
    const cfg = CONFIG.puzzle;
    const N = 3, BLANK = N * N - 1;
    let cellOf = [], moves = 0, solved = false, ratio = 4 / 3, tiles = [];
    const best = () => store.get("puzzleBest", null);
    bestEl.textContent = best() || "—";
    function bgFor(tile) {
      const c = tile % N, r = Math.floor(tile / N), f = cfg.focusY == null ? 0.5 : cfg.focusY;
      if (ratio >= 1) {
        const k = ratio, offY = (N * k - N) * f + r;
        return { size: `${N * 100}% auto`, pos: `${(c / (N - 1)) * 100}% ${(offY / (N * k - 1)) * 100}%` };
      }
      const k = 1 / ratio, offX = (N * k - N) * 0.5 + c;
      return { size: `auto ${N * 100}%`, pos: `${(offX / (N * k - 1)) * 100}% ${(r / (N - 1)) * 100}%` };
    }
    function build() {
      board.innerHTML = ""; tiles = [];
      for (let t = 0; t < N * N; t++) {
        const b = document.createElement("button");
        b.className = "tile"; b.type = "button";
        const bg = bgFor(t);
        b.innerHTML = `<span style="background-image:url('${photoUrl(cfg.photo)}');background-size:${bg.size};background-position:${bg.pos}"></span>`;
        b.setAttribute("aria-label", `piece ${t + 1}`);
        if (t === BLANK) { b.style.visibility = "hidden"; b.tabIndex = -1; }
        b.addEventListener("click", () => tryMove(t));
        board.appendChild(b); tiles.push(b);
      }
    }
    function layout() { tiles.forEach((b, t) => { const cell = cellOf[t]; b.style.left = (cell % N) * (100 / N) + "%"; b.style.top = Math.floor(cell / N) * (100 / N) + "%"; }); }
    const adjacent = (a, b) => (Math.abs((a % N) - (b % N)) + Math.abs(Math.floor(a / N) - Math.floor(b / N))) === 1;
    const isSolved = () => cellOf.every((cell, t) => cell === t);
    function shuffle() { // random LEGAL moves from solved → always solvable
      cellOf = [...Array(N * N).keys()];
      let last = -1;
      for (let i = 0; i < 160 || isSolved(); i++) {
        const opts = [];
        for (let t = 0; t < BLANK; t++) if (adjacent(cellOf[t], cellOf[BLANK]) && t !== last) opts.push(t);
        const t = pick(opts);
        [cellOf[t], cellOf[BLANK]] = [cellOf[BLANK], cellOf[t]]; last = t;
      }
    }
    function tryMove(t) {
      if (solved || t === BLANK || !adjacent(cellOf[t], cellOf[BLANK])) return;
      [cellOf[t], cellOf[BLANK]] = [cellOf[BLANK], cellOf[t]];
      moves++; movesEl.textContent = moves; layout();
      if (isSolved()) win();
    }
    function win() {
      solved = true;
      setTimeout(() => {
        board.classList.add("is-solved"); tiles[BLANK].style.visibility = "visible";
        const b = best();
        if (!b || moves < b) { store.set("puzzleBest", moves); bestEl.textContent = moves; }
        $("#pzCaption").textContent = cfg.caption;
        $("#pzStats").textContent = `solved in ${moves} moves${!b || moves < b ? " — a new record ✨" : ""}`;
        $("#pzResult").hidden = false; confetti(70); burstHearts(null, null, 14);
      }, 220);
    }
    function restart() {
      solved = false; moves = 0; movesEl.textContent = "0";
      board.classList.remove("is-solved"); $("#pzResult").hidden = true;
      if (tiles[BLANK]) tiles[BLANK].style.visibility = "hidden";
      shuffle(); layout();
    }
    window.BDAY.puzzleState = () => ({ cellOf: cellOf.slice(), solved, moves });
    function init() {
      const img = new Image();
      img.onload = () => { ratio = img.naturalHeight / img.naturalWidth; build(); restart(); };
      img.onerror = () => { board.innerHTML = `<div class="photo-missing">puzzle photo missing ♡</div>`; };
      img.src = photoUrl(cfg.photo);
      const ref = $("#puzzleRef");
      ref.src = photoUrl(cfg.photo);
      ref.style.objectPosition = `center ${(cfg.focusY == null ? .5 : cfg.focusY) * 100}%`;
      $("#pzPeek").addEventListener("click", (e) => {
        const show = ref.hidden; ref.hidden = !show;
        e.currentTarget.setAttribute("aria-pressed", show);
        e.currentTarget.textContent = show ? "hide the photo 🙈" : "peek at the photo 👀";
      });
      $("#pzRestart").addEventListener("click", restart);
    }
    onRoute("puzzle", { init });
  })();

  /* =================================================================
     6. HOW GOOD IS YOUR MEMORY, MISS? 👀
     ================================================================= */
  (function quiz() {
    const stage = $("#quizStage"), bar = $("#quizBar"), Q = CONFIG.quiz;
    let i = 0, score = 0;
    function render() {
      bar.style.width = (i / Q.length) * 100 + "%";
      if (i >= Q.length) return renderEnd();
      const q = Q[i];
      const opts = q.photos
        ? `<div class="quiz-photos">${q.photos.map((p, k) => `<button class="opt" data-k="${k}"><img src="${photoUrl(p)}" alt="option ${k + 1}"><span>${k + 1}</span></button>`).join("")}</div>`
        : `<div class="options">${q.options.map((o, k) => `<button class="opt" data-k="${k}"><span class="opt__e">${"ABCD"[k] || "•"}</span><span>${esc(o)}</span></button>`).join("")}</div>`;
      stage.innerHTML = `<div class="qcard" style="margin-top:14px">
        <p class="qcard__kicker">question ${i + 1} of ${Q.length}</p>
        ${q.photo ? `<img class="quiz-photo" src="${photoUrl(q.photo)}" alt="">` : ""}
        <h3 class="qcard__q">${esc(q.q)}</h3>${opts}<div id="quizFeedback"></div></div>`;
      $$(".opt", stage).forEach((b) => b.addEventListener("click", (e) => answer(+b.dataset.k, e)));
    }
    function answer(k, e) {
      const q = Q[i], btns = $$(".opt", stage);
      if (btns.some((b) => b.disabled)) return;
      btns.forEach((b) => (b.disabled = true));
      const right = k === q.answer;
      btns[q.answer].classList.add("is-right");
      if (!right) btns[k].classList.add("is-wrong"); else { score++; burstHearts(e.clientX, e.clientY, 8); }
      $("#quizFeedback").innerHTML = `<p class="feedback" style="color:${right ? "#2f8a4f" : "#D94B64"}">${esc(right ? CONFIG.quizCorrect : CONFIG.quizWrong)}</p>
        <button class="btn btn--primary" id="quizNext">${i === Q.length - 1 ? "see my score ›" : "next question ›"}</button>`;
      $("#quizNext").addEventListener("click", () => { i++; render(); });
    }
    function renderEnd() {
      const pct = score / Q.length;
      const msg = pct === 1 ? "PERFECT SCORE. the archives bow to you. 👑" : pct >= .7 ? "very impressive memory, miss." : pct >= .4 ? "not bad! the archives require slight further investigation." : "okay… maybe read the letter again 😌";
      stage.innerHTML = `<div class="qcard result-card" style="margin-top:14px">
        <div class="qcard__emoji">${pct === 1 ? "👑" : pct >= .7 ? "🥹" : "🙈"}</div>
        <h3>you scored ${score} / ${Q.length}</h3><p>${esc(msg)}</p>
        <div class="row-btns"><button class="btn btn--soft" id="quizAgain">play again</button></div></div>`;
      if (pct >= .7) confetti(50);
      $("#quizAgain").addEventListener("click", () => { i = 0; score = 0; render(); });
    }
    onRoute("quiz", { init: render });
  })();
});
