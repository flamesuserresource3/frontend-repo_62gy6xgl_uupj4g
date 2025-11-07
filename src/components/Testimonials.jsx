import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Rina — Owner Toko Bunga',
    text: 'Website toko online kami jadi terlihat profesional dan penjualan naik karena tampilannya rapi dan cepat. Prosesnya jelas dan komunikasi sangat baik.'
  },
  {
    name: 'Andi — Konsultan',
    text: 'Landing page yang dibuat sangat meyakinkan dan konversi lead meningkat. Respons cepat dan hasil sesuai ekspektasi.'
  },
  {
    name: 'Dewi — UMKM Kuliner',
    text: 'Desain minimalis namun kuat, website mudah dikelola. Sangat membantu promosi bisnis saya.'
  }
];

export default function Testimonials() {
  return (
    <section id="testimoni" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">Testimoni Klien</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Cerita singkat dari klien yang sudah merasakan manfaat website profesional.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="rounded-xl border border-emerald-100 bg-emerald-50/30 p-6">
              <div className="flex items-center gap-1 text-emerald-600 mb-3">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed">“{t.text}”</p>
              <p className="mt-4 text-sm font-medium text-gray-900">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
