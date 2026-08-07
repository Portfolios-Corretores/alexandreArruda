import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import { WHATSAPP_URL } from "../constants";

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Imóveis", href: "#imoveis" },
  { label: "Serviços", href: "#servicos" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-30 flex items-center justify-between px-6 py-5 transition-[background-color,backdrop-filter,border-color] duration-300 md:px-10 lg:px-22 ${
          scrolled || menuOpen
            ? "border-b border-ink/5 bg-white/80 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <a
          href="#"
          className={`relative z-40 flex flex-col leading-tight transition-colors ${
            scrolled || menuOpen ? "text-ink" : "text-white xl:text-ink"
          }`}
          style={{ animation: "hero-rise 0.8s ease both" }}
        >
          <span className="font-display text-lg font-bold tracking-tight md:text-xl">
            Felipe Conrado
          </span>
          <span
            className={`text-[11px] font-semibold uppercase tracking-[0.14em] ${
              scrolled || menuOpen ? "text-muted" : "text-white/70 xl:text-muted"
            }`}
          >
            CRESCI 00000
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
                  className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/80 transition hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar no WhatsApp"
            className="grid h-11 w-11 place-items-center rounded-full bg-brand text-white transition hover:bg-brand-dark"
          >
            <FaWhatsapp size={20} />
          </a>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          className="relative z-40 grid h-11 w-11 place-items-center rounded-full bg-brand text-white lg:hidden"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-20 bg-ink/95 px-8 pt-28 lg:hidden">
          <ul className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-display text-2xl font-bold text-white"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
