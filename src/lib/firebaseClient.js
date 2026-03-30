import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// Fungsi untuk membuat user admin baru di Firestore dan Authentication
// Panggil fungsi ini dari komponen admin sesuai kebutuhan
export async function createAdminUser(email, password) {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  await setDoc(doc(db, 'users', userCredential.user.uid), {
    email,
    role: 'admin',
  });
  return userCredential.user;
}

// Contoh penggunaan fungsi createAdminUser untuk membuat user dummy admin
// Jalankan kode ini sekali saja (misal, lewat tombol khusus di halaman admin)
export async function createDummyAdmin() {
  // Ganti email dan password sesuai kebutuhan
  const email = 'admin@dummy.com';
  const password = 'admin1234';
  try {
    const user = await createAdminUser(email, password);
    console.log('Dummy admin created:', user);
    return user;
  } catch (err) {
    console.error('Failed to create dummy admin:', err);
    throw err;
  }
}
