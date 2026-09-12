import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js';
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  collection,
  query,
  where,
  limit,
  getDocs,
  serverTimestamp,
} from 'https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js';
import { firebaseConfig } from './firebase-config.js';

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  doc,
  setDoc,
  getDoc,
  collection,
  query,
  where,
  limit,
  getDocs,
  serverTimestamp,
};

// Cria a conta de autenticação + o documento de perfil do dentista.
// Nasce com approved:false — só você aprova manualmente no console do Firebase.
export async function signUpDentist({ name, email, password, cro, clinic, specialty }) {
  const credentials = await createUserWithEmailAndPassword(auth, email, password);
  const uid = credentials.user.uid;
  await setDoc(doc(db, 'dentists', uid), {
    name,
    email,
    cro,
    clinic,
    specialty,
    approved: false,
    createdAt: serverTimestamp(),
  });
  return uid;
}

export function loginDentist(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function logoutDentist() {
  return signOut(auth);
}

export async function getDentistProfile(uid) {
  const snap = await getDoc(doc(db, 'dentists', uid));
  return snap.exists() ? { id: snap.id, ...snap.data() } : null;
}

// Só dentistas aprovados manualmente — garante a exclusividade do app.
export async function getApprovedDentists(specialty, max = 50) {
  const conditions = [where('approved', '==', true)];
  if (specialty) conditions.push(where('specialty', '==', specialty));
  const q = query(collection(db, 'dentists'), ...conditions, limit(max));
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
}
