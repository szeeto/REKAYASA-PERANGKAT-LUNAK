import { Link } from 'react-router-dom';

const FooterComponents = () => {
  return (
    <footer className="bg-[#f6f7fb] text-[#231942] py-10 animate__animated animate__fadeInUp" style={{ animationDelay: '0.3s' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-row justify-between gap-8 flex-wrap">
          {/* Left: Brand & Contact */}
          <div className="w-full md:w-1/2 lg:w-5/12 mb-8 lg:mb-0">
            <h3 className="font-bold text-5xl mb-8">Path.Course</h3>
            <p className="mb-8 text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique voluptas eum officia amet tenetur deserunt magnam minus voluptatem explicabo perspiciatis.</p>
            <div className="mb-4 mt-8 text-xl">
              <div className="mb-4">+62 123-456-789</div>
              <div>person@example.com</div>
            </div>
          </div>
          {/* Center: Menu */}
          <div className="w-full md:w-1/4 lg:w-2/12 mb-8 lg:mb-0 flex flex-col justify-start">
            <h5 className="font-bold text-3xl mb-8">Menu</h5>
            <Link className="mb-6 text-2xl hover:underline" to="/">Home</Link>
            <Link className="mb-6 text-2xl hover:underline" to="/kelas">Kelas</Link>
            <Link className="mb-6 text-2xl hover:underline" to="/testimoni">Testimonial</Link>
            <Link className="mb-6 text-2xl hover:underline" to="/faq">FAQ</Link>
            <Link className="text-2xl hover:underline" to="/syaratketen">Syarat & Ketentuan</Link>
          </div>
          {/* Right: Subscribe */}
          <div className="w-full md:w-1/4 lg:w-4/12 flex flex-col justify-start">
            <h5 className="font-bold text-3xl mb-6">Subscribe Untuk Info Menarik</h5>
            <div className="flex mb-3">
              <input type="text" placeholder="Subscribe..." className="rounded-l px-5 py-3 w-full text-2xl text-[#231942] bg-white border border-gray-300 focus:outline-none" />
              <button className="bg-[#e63946] text-white px-8 py-3 rounded-r text-2xl hover:bg-[#d90429]">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-300 pt-4">
          <p className="text-center text-2xl">&copy; Copyright {new Date().getFullYear()} by <span className="font-bold">Patra Sawali</span>, All Right Reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default FooterComponents