import React from 'react'

export default function GuruPage() {
  const cards = [
    {
      img: "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?auto=format&fit=crop&q=80&w=1160",
      title: "Reni Darlina M.Kom",
      desc: "Kepala Program Keahlian Rekayasa Perangkat Lunak"
    },
    {
      img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&q=80&w=1160",
      title: "Dewi Wulan Sari S.Kom",
      desc: "Guru Mata Pelajaran Produktif RPL"
    },
    {
      img: "/src/assets/eva.jpeg",
      title: "Eva Saulina Manik S.Pd",
      desc: "Guru Mata Pelajaran Produktif RPL"
    },
    {
      img: "/src/assets/resti.jpeg",
      title: "Resti Rahmi Khairati Costa S.Pd",
      desc: "Guru Mata Pelajaran Produktif RPL"
    },
    {
      img: "/src/assets/yolan.jpeg" ,
      title: "Yolan Andrika Refi S.Pd",
      desc: "Guru Mata Pelajaran Produktif RPL"
    }
  ];
  return (
    <div className="p-7 m-7 rounded-sm shadow-2xl">
      <h1 className="text-3xl font-bold text-center p-7 mb-7">Daftar Guru</h1>
      <div className="flex flex-wrap p-3 m-3 justify-center gap-6">
        {cards.map((card, idx) => (
          <div key={idx} className="w-full sm:w-1/2 md:w-1/3 max-w-xs bg-orange-100 rounded-lg shadow-lg overflow-hidden">
            <a href="#" className="block">
              <img alt="" src={card.img} className="h-100 w-full object-cover" />
              <div className="p-4">
                <h3 className="mt-2 text-lg font-bold text-center text-gray-900 sm:text-xl">{card.title}</h3>
                <p className="text-semibold text-gray-600 text-center">{card.desc}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
