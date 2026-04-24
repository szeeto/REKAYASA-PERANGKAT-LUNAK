import React, { useEffect, useState } from 'react';
import { db } from '../firebase/firebaseClient';
import { collection, getDocs } from 'firebase/firestore';

export default function FaqPage() {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFaqs = async () => {
      setLoading(true);
      try {
        const querySnapshot = await getDocs(collection(db, 'faqs'));
        const faqsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setFaqs(faqsData);
      } catch (err) {
        setFaqs([]);
      }
      setLoading(false);
    };
    fetchFaqs();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-7 m-7 rounded-xl shadow-2xl border-2 border-purple-300/60 bg-white shadow-purple-200/60" data-aos="fade-up">
      <h2 className='text-3xl font-bold text-center p-7 mb-7' id='faq' data-aos="fade-down">Pertanyaan Yang Sering Ditanyakan</h2>
      <div className='p-3 m-3 text-bold' data-aos="fade-right">
        <div className="space-y-2" data-aos="fade-left">
          {loading ? (
            <div className="text-center">Loading...</div>
          ) : faqs.length === 0 ? (
            <div className="text-center">Belum ada FAQ.</div>
          ) : faqs.map((faq, idx) => (
            <details className="group [&_summary::-webkit-details-marker]:hidden" data-aos="flip-up" data-aos-delay={100 * (idx + 1)} key={faq.id}>
              <summary className="flex cursor-pointer items-center justify-between gap-4 rounded-lg border border-gray-200 bg-white px-4 py-3 font-medium text-gray-900 hover:bg-gray-50">
                <span>{faq.question}</span>
                <svg className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </summary>
              <div className="p-4">
                <p className="text-black-700 text-base font-medium rounded shadow-md shadow-emerald-500 m-2 p-2">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}
