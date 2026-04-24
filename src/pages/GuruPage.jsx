
export default function GuruPage() {
  const cards = [
    {
      img: "/src/assets/reni darlina.jpeg",
      title: "Reni Darlina M.Kom",
      desc: "Kepala Program Keahlian Rekayasa Perangkat Lunak"
    },
    {
      img: "/src/assets/dewi.jpeg",
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
      img: "/src/assets/yolan.jpeg",
      title: "Yolan Andrika Refi S.Pd",
      desc: "Guru Mata Pelajaran Produktif RPL"
    }
  ];

  return (
    <div
      className={`max-w-6xl mx-auto p-7 m-7 rounded-xl shadow-2xl border-2 border-pink-300/60 bg-white shadow-pink-200/60 transition-all duration-1000 ease-out `}
    >
      <h1 className="text-3xl font-bold text-center p-7 mb-7" data-aos="fade-up">Daftar Guru</h1>
      <div className="flex flex-wrap p-3 m-3 justify-center gap-6">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="w-full sm:w-1/2 md:w-1/3 max-w-xs bg-gray-200/5 rounded-lg shadow-lg overflow-hidden"
            data-aos="zoom-in"
            data-aos-delay={100 * (idx + 1)}
            data-aos-duration="800"
          >
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
