import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_URL } from "../constants";

const HERO_IMAGE =
  "https://res.cloudinary.com/dkgjwrjpv/image/upload/v1786033682/patioSolare_ovjtim.webp";

export default function Hero() {
  return (
    <section className="relative min-h-dvh overflow-hidden bg-white">
      <svg width="0" height="0" className="absolute" aria-hidden>
        <defs>
          <clipPath id="hero-organic" clipPathUnits="objectBoundingBox">
            <path d="M0.35,0.02 C0.5,-0.03,0.72,0,0.9,0.08 C1.05,0.18,1.15,0.35,1.14,0.52 C1.13,0.7,1.05,0.88,0.9,0.98 C0.72,1.08,0.45,1.05,0.28,0.94 C0.12,0.83,0.04,0.62,0.06,0.4 C0.08,0.2,0.2,0.06,0.35,0.02 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* Fundo full-bleed em mobile e tablet */}
      <div className="absolute inset-0 xl:hidden" aria-hidden>
        <img
          src={HERO_IMAGE}
          alt=""
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(12_18_34/0.55)_0%,rgb(12_18_34/0.72)_55%,rgb(12_18_34/0.88)_100%)]" />
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute right-[6%] top-[10%] hidden h-[46vmin] w-[46vmin] rounded-full bg-[radial-gradient(circle,rgba(37,117,210,0.2)_0%,rgba(37,117,210,0)_70%)] xl:block"
        style={{ animation: "blob-float 10s ease-in-out infinite" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[22%] top-[52%] hidden h-[30vmin] w-[30vmin] rounded-full bg-[radial-gradient(circle,rgba(37,117,210,0.14)_0%,rgba(37,117,210,0)_72%)] xl:block"
        style={{ animation: "blob-float 12s ease-in-out infinite reverse" }}
      />

      <div className="relative z-10 grid min-h-dvh xl:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
        <div className="relative flex flex-col justify-center px-6 pb-14 pt-28 md:px-10 lg:px-14 xl:pb-24 xl:pt-35 xl:pl-20">
          <div className="max-w-xl">
            <h1
              className="mt-20 font-display text-[clamp(2rem,4.5vw,5rem)] font-extrabold uppercase leading-[0.92] tracking-[-0.03em] text-white xl:text-ink"
              style={{ animation: "hero-rise 0.9s ease 0.15s both" }}
            >
              Felipe
              <br />
              Conrado
            </h1>

            <p
              className="mt-6 max-w-xl text-base leading-relaxed text-white/85 md:text-lg xl:text-muted"
              style={{ animation: "hero-rise 0.9s ease 0.28s both" }}
            >
              Encontre o imóvel dos seus sonhos com consultoria personalizada e
              exclusiva — segurança e sofisticação em cada escolha.
            </p>

            <div
              className="mt-9 flex flex-wrap items-center gap-3"
              style={{ animation: "hero-rise 0.9s ease 0.4s both" }}
            >
              <a
                href="#contato"
                className="inline-flex items-center rounded-full bg-brand px-7 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(37,117,210,0.28)] transition hover:bg-brand-dark"
              >
                Agendar consultoria
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white/60 hover:bg-white/15 xl:border-brand/20 xl:bg-white xl:text-brand xl:hover:border-brand xl:hover:bg-brand/5"
              >
                <FaWhatsapp size={18} />
                WhatsApp
              </a>
            </div>
          </div>

          <div
            aria-hidden
            className="mt-16 hidden w-fit grid-cols-5 gap-2.5 xl:grid"
            style={{ animation: "dots-fade 1.2s ease 0.6s both" }}
          >
            {Array.from({ length: 20 }).map((_, i) => (
              <span key={i} className="h-1.5 w-1.5 rounded-full bg-dot" />
            ))}
          </div>
        </div>

        {/* Círculo só em desktop largo */}
        <div className="relative hidden min-h-full xl:block">
          <div
            className="absolute inset-0 overflow-visible"
            style={{ animation: "hero-mask-in 1.15s ease 0.2s both" }}
          >
            <div className="hero-mask absolute top-1/2 right-0 aspect-square w-[min(54vw,82vh)] -translate-y-1/2 translate-x-[5%] overflow-hidden">
              <img
                src={HERO_IMAGE}
                alt="Empreendimento Patio Solare"
                className="h-full w-full object-contain object-center"
              />
              <div className="absolute inset-0 bg-linear-to-br from-ink/15 via-transparent to-brand/15" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
