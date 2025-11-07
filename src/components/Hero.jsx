import { MessageCircle, Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section id="beranda" className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-white" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center rounded-full bg-emerald-100 text-emerald-700 px-3 py-1 text-xs font-medium">
              Web Developer • Portofolio Jasa
            </span>
            <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900">
              Bangun Website Profesional yang Menghasilkan
            </h1>
            <p className="mt-5 text-gray-600 text-lg leading-relaxed">
              Saya membantu bisnis dan personal memiliki website modern, cepat, dan ramah SEO. Fokus pada hasil: tampilan rapi, performa optimal, dan mudah dikelola.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#layanan"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 font-medium transition-colors"
              >
                <Rocket className="h-5 w-5" /> Lihat Layanan
              </a>
              <a
                href="https://wa.me/6281234567890?text=Halo%2C%20saya%20ingin%20konsultasi%20pembuatan%20website.%20Boleh%20minta%20informasi%20lebih%20lanjut%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-emerald-200 text-emerald-700 hover:bg-emerald-50 px-5 py-3 font-medium transition-colors"
              >
                <MessageCircle className="h-5 w-5" /> Tanya Dulu Lewat WhatsApp
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-video w-full rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-500/10 to-emerald-200/20 p-6">
              <div className="h-full w-full rounded-xl bg-white shadow-sm grid place-items-center">
                <div className="text-center p-6">
                  <div className="mx-auto mb-4 h-14 w-14 rounded-xl bg-emerald-600 text-white grid place-items-center">
                    <Rocket className="h-7 w-7" />
                  </div>
                  <p className="text-xl font-semibold text-gray-900">Website cepat, responsif, dan siap scale</p>
                  <p className="mt-2 text-gray-600">Dibangun dengan teknologi modern dan best practice untuk performa.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
