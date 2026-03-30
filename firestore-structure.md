# Struktur Firestore untuk Project CRUD & Login

## Koleksi: users
- id: (UID dari Firebase Auth, otomatis)
- email: string
- role: string ("admin" atau "user")

## Koleksi: blogs
- id: (otomatis dari Firestore)
- title: string
- content: string
- thumbnail: string (URL gambar)
- date: timestamp
- authorId: UID user

## Koleksi: gallery
- id: (otomatis dari Firestore)
- title: string
- description: string
- image_url: string (URL gambar)
- date: timestamp
- uploaderId: UID user

---

# Contoh Penambahan Data Blog
```js
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase/firebaseClient';

await addDoc(collection(db, 'blogs'), {
  title: 'Judul Blog',
  content: 'Isi blog...',
  thumbnail: 'url-gambar',
  date: serverTimestamp(),
  authorId: user.uid
});
```

# Contoh Membaca Data Blog
```js
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebaseClient';

const querySnapshot = await getDocs(collection(db, 'blogs'));
const blogs = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
```

# Contoh Update Data Blog
```js
import { doc, updateDoc } from 'firebase/firestore';
await updateDoc(doc(db, 'blogs', blogId), { title: 'Baru', content: 'Baru' });
```

# Contoh Delete Data Blog
```js
import { doc, deleteDoc } from 'firebase/firestore';
await deleteDoc(doc(db, 'blogs', blogId));
```

---

# Langkah Setup di Firebase Console
1. Buka Firebase Console → Firestore Database → Buat database.
2. Tambahkan koleksi: `users`, `blogs`, `gallery`.
3. Atur rules Firestore agar hanya user login yang bisa CRUD sesuai role.
