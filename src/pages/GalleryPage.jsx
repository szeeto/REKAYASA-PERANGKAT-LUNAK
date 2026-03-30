import React from 'react';

// Import gambar dari assets
import img1 from '../assets/1.jpeg';
import img2 from '../assets/2.jpeg';
import img3 from '../assets/3.jpeg';
import img4 from '../assets/4.jpeg';
import img5 from '../assets/5.jpeg';
import img6 from '../assets/6.jpeg';
import imgXiiRpl from '../assets/xii rpl.jpeg';
import imgxiirpl from '../assets/12B.jpeg';
import imgXiiRpl2 from '../assets/xii rpl ii.jpeg';

const galleryItems = [
	{ title: 'Angkatan XIV', image: img1 },
	{ title: 'Angkatan XIV', image: img2 },
	{ title: 'Angkatan XIV', image: img3 },
	{ title: 'Angkatan XIV', image: img4 },
	{ title: 'Angkatan XIV', image: img5 },
	{ title: 'Angkatan XIV', image: img6 },
	{ title: 'Angkatan XIV', image: imgXiiRpl },
	{ title: 'Angkatan XIV', image: imgxiirpl },
	{ title: 'Angkatan XIV', image: imgXiiRpl2 },
];

export default function GalleryPage() {
	return (
		<div className="max-w-6xl mx-auto p-7 m-7 rounded-xl shadow-2xl border-2 border-indigo-300/60 bg-white shadow-indigo-200/60">
			<h1 className="text-3xl font-bold text-center p-7 mb-7" id='galery' data-aos="fade-up">Galeri RPL</h1>
			<div className="flex flex-wrap p-3 m-3 justify-center gap-4">
				{galleryItems.map((img, idx) => (
					<div
						key={idx}
						className="shadow-lg rounded-lg overflow-hidden"
						data-aos="zoom-in"
						data-aos-delay={100 * (idx + 1)}
						data-aos-duration="800"
					>
						<img src={img.image} alt={img.title} className="w-72 h-64 object-cover" />
						<div className="p-2 text-center font-semibold">{img.title}</div>
					</div>
				))}
			</div>
		</div>
	);
}
