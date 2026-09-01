import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { INSTAGRAM_URL, WHATSAPP_URL } from "../constants";

const ABOUT_IMAGE =
  "https://res.cloudinary.com/dkgjwrjpv/image/upload/v1786564824/fotoAlexandre_yliizt.jpg";

export default function About() {
  return (
    <section
      id="sobre"
      className="relative overflow-hidden bg-white px-6 py-20 md:px-10 md:py-28 lg:px-14 xl:px-20"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(37,117,210,0.12)_0%,rgba(37,117,210,0)_70%)]"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-24">
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div
            aria-hidden
            className="absolute -bottom-4 -right-4 h-full w-full rounded-4xl bg-brand/10"
          />
          <div className="relative overflow-hidden rounded-4xl">
            <img
              src={ABOUT_IMAGE}
              alt="Alexandre Arruda, corretor de imóveis"
              className="aspect-4/5 w-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-linear-to-t from-ink/25 via-transparent to-transparent" />
          </div>
        </div>

        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">
            Sobre mim
          </p>

          <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.25rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-ink">
            Corretor de Imóveis
          </h2>

          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted md:text-lg">
            <p>
              Com vasta experiência, atuo no
              mercado imobiliário como especialista em{" "}
              <strong className="font-bold text-ink">Minha Casa Minha Vida</strong>,
              ajudando pessoas a encontrar o imóvel certo para cada momento de
              suas vidas.
            </p>
            <p>
              Meu trabalho é baseado em escuta, transparência e acompanhamento
              próximo em todas as etapas — da primeira conversa à assinatura do
              contrato. Busco entender o que realmente importa para cada cliente
              e transformar a busca por um imóvel em uma experiência segura,
              clara e tranquila.
            </p>
            <p>
              Uno conhecimento de mercado, visão estratégica e atendimento
              personalizado para quem deseja comprar, vender ou investir em
              imóveis com confiança e segurança.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(37,117,210,0.22)] transition hover:bg-brand-dark"
            >
              <FaWhatsapp size={18} aria-hidden />
              WhatsApp
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-white px-6 py-3 text-sm font-semibold text-brand transition hover:border-brand hover:bg-brand/5"
            >
              <FaInstagram size={18} aria-hidden />
              Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
