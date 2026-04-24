import React, { useState, useEffect } from "react";
import FaqFormModal from "./FaqFormModal";
import { db } from '../../firebase/firebaseClient';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';

export default function FaqManagement() {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editFaq, setEditFaq] = useState(null);
  const [notif, setNotif] = useState(null);

  const fetchFaqs = async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, 'faqs'));
      const faqsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setFaqs(faqsData);
      setNotif(null);
    } catch (err) {
      setNotif({ type: "error", message: 'Gagal mengambil data FAQ.' });
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchFaqs();
  }, []);

  const handleAdd = () => {
    setEditFaq(null);
    setModalOpen(true);
  };

  const handleEdit = (faq) => {
    setEditFaq(faq);
    setModalOpen(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this FAQ?")) return;
    try {
      await deleteDoc(doc(db, 'faqs', id));
      setNotif({ type: "success", message: 'FAQ berhasil dihapus.' });
      fetchFaqs();
    } catch (err) {
      setNotif({ type: "error", message: 'Gagal menghapus FAQ.' });
    }
  };

  const handleModalClose = (refresh, msg) => {
    setModalOpen(false);
    setEditFaq(null);
    if (refresh) fetchFaqs();
    if (msg) setNotif(msg);
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Manajemen FAQ</h2>
      <div className="bg-white rounded shadow p-4">
        <div className="flex justify-between items-center mb-4">
          <span className="font-semibold">Daftar FAQ</span>
          <button className="px-4 py-2 bg-blue-600 text-white rounded" onClick={handleAdd}>Tambah FAQ</button>
        </div>
        {notif && <div className={`mb-2 ${notif.type === 'error' ? 'text-red-600' : 'text-green-600'}`}>{notif.message}</div>}
        {loading ? (
          <div>Loading...</div>
        ) : faqs.length === 0 ? (
          <div>Tidak ada FAQ.</div>
        ) : (
          <table className="w-full border">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 border">Pertanyaan</th>
                <th className="p-2 border">Jawaban</th>
                <th className="p-2 border">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {faqs.map(faq => (
                <tr key={faq.id}>
                  <td className="p-2 border align-top w-1/3">{faq.question}</td>
                  <td className="p-2 border align-top">{faq.answer}</td>
                  <td className="p-2 border align-top w-32">
                    <button className="px-2 py-1 bg-yellow-400 rounded mr-2" onClick={() => handleEdit(faq)}>Edit</button>
                    <button className="px-2 py-1 bg-red-500 text-white rounded" onClick={() => handleDelete(faq.id)}>Hapus</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <FaqFormModal open={modalOpen} onClose={handleModalClose} faq={editFaq} />
    </div>
  );
}
