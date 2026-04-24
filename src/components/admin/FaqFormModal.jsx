import React, { useState } from "react";
import { db } from '../../firebase/firebaseClient';
import { collection, addDoc, updateDoc, doc } from 'firebase/firestore';

const FaqFormModal = ({ open, onClose, faq }) => {
    const [form, setForm] = useState({
        question: faq?.question || "",
        answer: faq?.answer || "",
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        try {
            if (faq && faq.id) {
                // Edit mode
                await updateDoc(doc(db, 'faqs', faq.id), form);
                onClose(true, { type: 'success', message: 'FAQ berhasil diupdate.' });
            } else {
                // Add mode
                await addDoc(collection(db, 'faqs'), form);
                onClose(true, { type: 'success', message: 'FAQ berhasil ditambahkan.' });
            }
            setLoading(false);
        } catch (err) {
            setLoading(false);
            setError(err.message || "Gagal menyimpan data.");
        }
    };

    if (!open) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 relative">
                <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-700" onClick={() => onClose(false)}>&times;</button>
                <h3 className="text-xl font-bold mb-4">{faq ? "Edit FAQ" : "Add FAQ"}</h3>
                {error && <div className="mb-2 text-red-600">{error}</div>}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block mb-1 font-medium">Pertanyaan</label>
                        <input name="question" value={form.question} onChange={handleChange} required className="w-full border rounded px-3 py-2" />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Jawaban</label>
                        <textarea name="answer" value={form.answer} onChange={handleChange} required className="w-full border rounded px-3 py-2 min-h-20" />
                    </div>
                    <div className="flex justify-end gap-2">
                        <button type="button" className="px-4 py-2 bg-gray-200 rounded" onClick={() => onClose(false)}>Batal</button>
                        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded" disabled={loading}>{loading ? "Menyimpan..." : faq ? "Update" : "Tambah"}</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FaqFormModal;
