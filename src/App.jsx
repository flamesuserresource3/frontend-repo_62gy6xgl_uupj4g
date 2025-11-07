import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Top Navigation */}
      <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#beranda" className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-emerald-600" />
            <span className="font-semibold tracking-tight">Portofolio Web Dev</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#layanan" className="text-gray-700 hover:text-emerald-700">Layanan</a>
            <a href="#testimoni" className="text-gray-700 hover:text-emerald-700">Testimoni</a>
            <a href="#kontak" className="text-gray-700 hover:text-emerald-700">WhatsApp</a>
            <a
              href="https://wa.me/6281234567890?text=Halo%2C%20saya%20ingin%20konsultasi%20pembuatan%20website.%20Boleh%20minta%20informasi%20lebih%20lanjut%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-emerald-600 text-white px-4 py-2 hover:bg-emerald-700 transition-colors"
            >
              Tanya Dulu Lewat WhatsApp
            </a>
          </nav>
        </div>
      </header>

      {/* Sections */}
      <main>
        <Hero />
        <Services />
        <Testimonials />
        <CTA />
      </main>

      {/* Footer */}
      <footer className="border-t border-emerald-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Portofolio Web Dev — Minimalis, Modern, Profesional.
        </div>
      </footer>
    </div>
  );
}

export default App;
