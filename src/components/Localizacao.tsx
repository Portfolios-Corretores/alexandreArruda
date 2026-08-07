import { FaExternalLinkAlt, FaMapMarkerAlt } from "react-icons/fa";

const ENDERECO = "Av. Caxangá, 5405 - Várzea, Recife - PE, 50740-000";

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Av.+Caxang%C3%A1,+5405+-+V%C3%A1rzea,+Recife+-+PE,+50740-000";

const GOOGLE_MAPS_EMBED_URL =
  "https://www.google.com/maps?q=Av.+Caxang%C3%A1,+5405+-+V%C3%A1rzea,+Recife+-+PE,+50740-000&output=embed";

export default function Localizacao() {
  return (
    <section
      id="localizacao"
      className="relative overflow-hidden bg-soft px-6 py-20 md:px-10 md:py-28 lg:px-14 xl:px-20"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 bottom-10 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(37,117,210,0.14)_0%,rgba(37,117,210,0)_70%)]"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">
            Localização
          </p>
          <h2 className="mt-4 font-display text-[clamp(1.75rem,3.2vw,2.5rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-ink">
            Onde me encontrar?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
            Atendimento presencial no escritório da New Palace Imobiliária, em
            localização estratégica na Av. Caxangá.
          </p>

          <div className="mt-8 flex items-start gap-3">
            <span className="mt-0.5 grid size-10 shrink-0 place-items-center rounded-full bg-brand/10 text-brand">
              <FaMapMarkerAlt aria-hidden />
            </span>
            <div>
              <p className="text-sm font-semibold text-ink">
                New Palace Imobiliária
              </p>
              <address className="mt-1 not-italic text-base leading-relaxed text-muted">
                {ENDERECO}
              </address>
            </div>
          </div>

          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(37,117,210,0.28)] transition hover:bg-brand-dark"
          >
            Abrir no Google Maps
            <FaExternalLinkAlt className="text-xs" aria-hidden />
          </a>
        </div>

        <div className="overflow-hidden rounded-[1.75rem] bg-white shadow-[0_16px_40px_rgba(12,18,34,0.08)]">
          <iframe
            title="Localização no Google Maps — New Palace Imobiliária"
            src={GOOGLE_MAPS_EMBED_URL}
            className="aspect-4/3 w-full border-0 lg:aspect-auto lg:min-h-90"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
