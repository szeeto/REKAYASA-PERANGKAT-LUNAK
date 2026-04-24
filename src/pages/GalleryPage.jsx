import React, { useEffect, useState } from 'react';
import { db } from '../firebase/firebaseClient';
import { collection, getDocs } from 'firebase/firestore';

export default function GalleryPage() {
	const [gallery, setGallery] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchGallery = async () => {
			setLoading(true);
			try {
				const querySnapshot = await getDocs(collection(db, 'gallery'));
				const galleryData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
				setGallery(galleryData);
			} catch (err) {
				setGallery([]);
			}
			setLoading(false);
		};
		fetchGallery();
	}, []);

	return (
		<div className="max-w-6xl mx-auto p-7 m-7 rounded-xl shadow-2xl border-2 border-indigo-300/60 bg-white shadow-indigo-200/60">
			<h1 className="text-3xl font-bold text-center p-7 mb-7" id='galery' data-aos="fade-up">Galeri RPL</h1>
			<div className="flex flex-wrap p-3 m-3 justify-center gap-4">
				{loading ? (
					<div className="w-full text-center">Loading...</div>
				) : gallery.length === 0 ? (
					<div className="w-full text-center">Belum ada galeri.</div>
				) : gallery.map((img, idx) => (
					<div
						key={img.id}
						className="shadow-lg rounded-lg overflow-hidden"
						data-aos="zoom-in"
						data-aos-delay={100 * (idx + 1)}
						data-aos-duration="800"
					>
						<img src={img.image_url} alt={img.title} className="w-72 h-64 object-cover" />
						<div className="p-2 text-center font-semibold">{img.title}</div>
					</div>
				))}
			</div>
		</div>
	);
}
