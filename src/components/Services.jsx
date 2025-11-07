import { Code, Smartphone, Globe, Sparkles } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Custom Website',
    desc: 'Website tailor-made sesuai kebutuhan brand dan goal bisnis Anda.'
  },
  {
    icon: Smartphone,
    title: 'Responsive & Mobile-First',
    desc: 'Desain adaptif untuk semua ukuran layar, dari smartphone hingga desktop.'
  },
  {
    icon: Globe,
    title: 'SEO & Performance',
    desc: 'Struktur bersih, loading cepat, dan siap bersaing di hasil pencarian.'
  },
  {
    icon: Sparkles,
    title: 'UI/UX Modern',
    desc: 'Tampilan minimalis, profesional, dan mudah digunakan.'
  }
];

export default function Services() {
  return (
    <section id="layanan" className="py-20 bg-emerald-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">Produk & Layanan</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Pilihan layanan fleksibel untuk membantu Anda hadir online secara maksimal.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div key={i} className="rounded-xl bg-white border border-emerald-100 p-6 hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-lg bg-emerald-600 text-white grid place-items-center mb-4">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
