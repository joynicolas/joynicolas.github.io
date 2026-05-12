import { firebaseConfig } from './firebase.js';

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  increment
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// 1. INIT APP
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 2. UI ELEMENTS
const heartBtn = document.getElementById("likeButton");
const countEl = document.getElementById("likeCount");

// 3. DB REFERENCE
const docRef = doc(db, "site", "likes");

// 4. LOCAL STORAGE (prevent double like)
const STORAGE_KEY = "liked_site";

async function init() {
  const snap = await getDoc(docRef);

  if (!snap.exists()) {
    await setDoc(docRef, { count: 0 });
    countEl.textContent = 0;
  } else {
    countEl.textContent = snap.data().count;
  }

  if (localStorage.getItem(STORAGE_KEY)) {
    heartBtn.classList.add("liked");
  }
}

async function like() {
  if (localStorage.getItem(STORAGE_KEY)) return;

  await updateDoc(docRef, {
    count: increment(1)
  });

  const snap = await getDoc(docRef);
  countEl.textContent = snap.data().count;

  localStorage.setItem(STORAGE_KEY, "true");

  heartBtn.classList.add("liked");

  burstParticles();
}

// simple particle effect hook (you already have CSS)
function burstParticles() {
  for (let i = 0; i < 15; i++) {
    const p = document.createElement("span");
    p.className = "like-particle";

    const colors = ["#2B43FF","#FF4D6D","#FFD166","#06D6A0","#8338EC"];

    p.style.background =
      colors[Math.floor(Math.random() * colors.length)];

    p.style.left = window.innerWidth / 2 + "px";
    p.style.top = window.innerHeight / 2 + "px";

    document.body.appendChild(p);

    setTimeout(() => p.remove(), 1000);
  }
}

// EVENTS
heartBtn?.addEventListener("click", like);

// INIT
init();
