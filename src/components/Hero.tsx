import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_URL } from "../constants";

const HERO_IMAGE =
  "https://res.cloudinary.com/dkgjwrjpv/image/upload/v1786033692/madaStudio_jc5ykr.webp";

export default function Hero() {
  return (
    <section className="relative min-h-dvh overflow-hidden">
      {/* Imagem em largura total do hero */}
      <div className="absolute inset-0" aria-hidden>
        <img
          src={HERO_IMAGE}
          alt=""
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgb(12_18_34/0.78)_0%,rgb(12_18_34/0.55)_42%,rgb(12_18_34/0.28)_100%)] max-xl:bg-[linear-gradient(180deg,rgb(12_18_34/0.55)_0%,rgb(12_18_34/0.72)_55%,rgb(12_18_34/0.88)_100%)]" />
      </div>

      <div className="relative z-10 flex min-h-dvh items-center px-6 pb-14 pt-28 md:px-10 lg:px-14 xl:px-20 xl:pb-24 xl:pt-35">
        <div className="max-w-xl">
          <h1
            className="mt-20 font-display text-[clamp(2rem,4.5vw,5rem)] font-extrabold uppercase leading-[0.92] tracking-[-0.03em] text-white"
            style={{ animation: "hero-rise 0.9s ease 0.15s both" }}
          >
            Alexandre
            <br />
            Arruda
          </h1>

          <p
            className="mt-6 max-w-xl text-base leading-relaxed text-white/85 md:text-lg"
            style={{ animation: "hero-rise 0.9s ease 0.28s both" }}
          >
            Imóveis selecionados em Recife 
            para quem valoriza localização, exclusividade e qualidade em cada detalhe.
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
              className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white/60 hover:bg-white/15"
            >
              <FaWhatsapp size={18} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
