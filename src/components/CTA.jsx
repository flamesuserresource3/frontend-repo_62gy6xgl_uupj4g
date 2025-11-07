import { MessageCircle } from 'lucide-react';

export default function CTA() {
  const waLink =
    'https://wa.me/6281234567890?text=Halo%2C%20saya%20ingin%20konsultasi%20pembuatan%20website.%20Boleh%20minta%20informasi%20lebih%20lanjut%3F';

  return (
    <section id="kontak" className="py-20 bg-emerald-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">Siap Diskusi Project Anda?</h2>
        <p className="mt-3 text-gray-600">
          Ceritakan kebutuhan Anda dan saya akan bantu rekomendasikan solusi terbaik.
        </p>
        <div className="mt-8">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 font-medium transition-colors"
          >
            <MessageCircle className="h-5 w-5" /> Tanya Dulu Lewat WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
