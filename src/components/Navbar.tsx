import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_URL } from "../constants";

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Imóveis", href: "#imoveis" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-30 flex items-center justify-between px-6 py-5 transition-[background-color,backdrop-filter,border-color] duration-300 md:px-10 lg:px-22 ${
        scrolled
          ? "border-b border-ink/5 bg-white/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <a
        href="#"
        className={`relative z-40 flex flex-col leading-tight transition-colors ${
          scrolled ? "text-ink" : "text-white"
        }`}
        style={{ animation: "hero-rise 0.8s ease both" }}
      >
        <span className="font-display text-lg font-bold tracking-tight md:text-xl">
          Alexandre Arruda
        </span>
        <span
          className={`text-[11px] font-semibold uppercase tracking-[0.14em] ${
            scrolled ? "text-muted" : "text-white/70"
          }`}
        >
          CRECI 21679
        </span>
      </a>

      <div
        className="hidden items-center gap-8 lg:flex"
        style={{ animation: "hero-rise 0.9s ease 0.1s both" }}
      >
        <ul className="flex items-center gap-7">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-xs font-semibold uppercase tracking-[0.18em] transition ${
                  scrolled
                    ? "text-ink/80 hover:text-ink"
                    : "text-white/85 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="relative z-40 grid h-11 w-11 place-items-center rounded-full bg-brand text-white transition hover:bg-brand-dark"
        style={{ animation: "hero-rise 0.9s ease 0.1s both" }}
      >
        <FaWhatsapp size={20} />
      </a>
    </nav>
  );
}
