import { Link } from "react-router-dom";
import { ElevateButton } from "@/components/shared/ElevateButton";

export default function NotFound() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-primary-white min-h-screen flex items-center">
      <div className="container mx-auto text-center">
        <div className="max-w-2xl mx-auto">
          <p className="mb-2 font-semibold uppercase tracking-[0.3em] text-xs text-dark-accent">
            — Out of Frame —
          </p>

          <div className="relative my-12 md:my-16">
            <p
              aria-hidden="true"
              className="text-[15vw] md:text-[12vw] font-bold text-primary-black/5 leading-none select-none"
            >
              OOPS!
            </p>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="flex items-center gap-4 md:gap-6 justify-center">
                  <span className="text-7xl md:text-9xl lg:text-[10rem] font-bold text-primary-black leading-none">4</span>
                  <span className="relative">
                    <span className="text-7xl md:text-9xl lg:text-[10rem] font-bold text-accent-yellow leading-none relative z-10">0</span>
                    <span
                      aria-hidden="true"
                      className="absolute -top-4 -right-4 w-8 h-8 md:w-12 md:h-12 bg-accent-yellow/20 rounded-full animate-ping"
                    />
                  </span>
                  <span className="text-7xl md:text-9xl lg:text-[10rem] font-bold text-primary-black leading-none">4</span>
                </div>
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-accent-yellow to-transparent rounded-full" />
              </div>
            </div>
          </div>

          <div className="space-y-4 mb-12">
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-black uppercase leading-tight">
              This Scene Doesn't Exist
            </p>
            <p className="md:text-lg text-primary-black/70 max-w-lg mx-auto leading-relaxed">
              Sepertinya halaman ini terpotong di meja editing — atau mungkin belum masuk storyboard. Sementara itu, kami punya banyak karya yang sudah siap tayang.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <ElevateButton asChild variant="accent" size="lg">
              <Link to="/">Kembali ke Beranda</Link>
            </ElevateButton>
            <ElevateButton asChild variant="outlineInvert" size="lg">
              <Link to="/portfolio">Lihat Karya</Link>
            </ElevateButton>
          </div>

          <div className="mt-16 md:mt-20">
            <p className="text-xs text-primary-black/40 uppercase tracking-[0.15em]">
              Atau mulai dari sini &rarr;
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-4 text-sm text-primary-black/60">
              <Link to="/#services" className="hover:text-accent-yellow transition-colors underline underline-offset-4 decoration-primary-black/20 hover:decoration-accent-yellow">
                Layanan
              </Link>
              <Link to="/#process" className="hover:text-accent-yellow transition-colors underline underline-offset-4 decoration-primary-black/20 hover:decoration-accent-yellow">
                Cara Kerja
              </Link>
              <Link to="/#contact" className="hover:text-accent-yellow transition-colors underline underline-offset-4 decoration-primary-black/20 hover:decoration-accent-yellow">
                Hubungi Kami
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
