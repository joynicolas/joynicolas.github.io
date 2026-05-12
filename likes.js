// likes.js

import { firebaseConfig } from './firebase-config.js';

import {
  initializeApp
} from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js';

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  increment
} from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js';

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const heartBtn = document.getElementById('likeButton');
const countEl = document.getElementById('likeCount');

const STORAGE_KEY = 'joy-site-liked';

const docRef = doc(db, 'site', 'likes');

const COLORS = [
  '#2B43FF',
  '#FF4D6D',
  '#FFD166',
  '#06D6A0',
  '#8338EC',
  '#FB5607'
];

async function initializeLikes() {

  const snapshot = await getDoc(docRef);

  if (!snapshot.exists()) {
    await setDoc(docRef, {
      count: 0
    });

    countEl.textContent = '0';
  } else {
    countEl.textContent = snapshot.data().count;
  }

  if (localStorage.getItem(STORAGE_KEY)) {
    heartBtn.classList.add('liked');
  }

}

async function incrementLike() {

  if (localStorage.getItem(STORAGE_KEY)) {
    return;
  }

  await updateDoc(docRef, {
    count: increment(1)
  });

  const updated = await getDoc(docRef);

  countEl.textContent = updated.data().count;

  localStorage.setItem(STORAGE_KEY, 'true');

  heartBtn.classList.add('liked');

  burstParticles();

}

function burstParticles() {

  const rect = heartBtn.getBoundingClientRect();

  for (let i = 0; i < 18; i++) {

    const particle = document.createElement('span');

    particle.className = 'like-particle';

    particle.style.left =
      rect.left + rect.width / 2 + 'px';

    particle.style.top =
      rect.top + rect.height / 2 + 'px';

    particle.style.background =
      COLORS[Math.floor(Math.random() * COLORS.length)];

    const angle = Math.random() * Math.PI * 2;

    const distance = 50 + Math.random() * 50;

    particle.style.setProperty(
      '--x',
      `${Math.cos(angle) * distance}px`
    );

    particle.style.setProperty(
      '--y',
      `${Math.sin(angle) * distance}px`
    );

    document.body.appendChild(particle);

    setTimeout(() => {
      particle.remove();
    }, 1000);

  }

}

heartBtn?.addEventListener('click', incrementLike);

initializeLikes();