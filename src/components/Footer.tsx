import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { INSTAGRAM_URL, WHATSAPP_URL } from "../constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-soft">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 top-0 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(37,117,210,0.14)_0%,rgba(37,117,210,0)_70%)]"
      />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-3 py-10 text-center sm:flex-row sm:px-4 sm:text-left md:px-5">
        <div>
          <p className="font-display text-lg font-bold tracking-tight text-ink">
            Alexandre Arruda
          </p>
          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-muted">
            CRECI 21679
          </p>
          <p className="mt-3 text-sm text-muted">
            © {year} Alexandre Arruda. Todos os direitos reservados.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="grid size-11 place-items-center rounded-full bg-brand text-white transition hover:bg-brand-dark"
          >
            <FaWhatsapp size={20} aria-hidden />
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="grid size-11 place-items-center rounded-full border border-brand/20 bg-white text-brand transition hover:border-brand hover:bg-brand/5"
          >
            <FaInstagram size={20} aria-hidden />
          </a>
        </div>
      </div>
    </footer>
  );
}
