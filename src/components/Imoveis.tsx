import { useEffect, useRef, useState } from "react";
import {
  FaBath,
  FaBed,
  FaChevronLeft,
  FaChevronRight,
  FaMapMarkerAlt,
  FaRulerCombined,
  FaWhatsapp,
} from "react-icons/fa";
import { WHATSAPP_NUMBER } from "../constants";

type Imovel = {
  id: string;
  nome: string;
  localizacao: string;
  preco: string;
  metragem: string;
  quartos: number;
  banheiros: number;
  tag: string;
  imagem: string;
};

const imoveis: Imovel[] = [
  {
    id: "vila-do-reinado",
    nome: "Vila do Reinado",
    localizacao: "Centro, São Lourenço da Mata - PE",
    preco: "A partir de R$ 210.000,00",
    metragem: "50,80 m²",
    quartos: 2,
    banheiros: 2,
    tag: "Minha Casa Minha Vida",
    imagem:
      "https://res.cloudinary.com/dkgjwrjpv/image/upload/f_auto,q_auto,w_900/v1786572033/vilaDoReinado_hll2zk.png",
  },
  {
    id: "engenho-paulista",
    nome: "Engenho Paulista",
    localizacao: "Paulista - PE",
    preco: "A partir de R$ 219.990,00",
    metragem: "36 m²",
    quartos: 2,
    banheiros: 1,
    tag: "Minha Casa Minha Vida",
    imagem:
      "https://res.cloudinary.com/dkgjwrjpv/image/upload/f_auto,q_auto,w_900/v1786571816/engenhoPaulista_xsxbhj.webp",
  },
  {
    id: "morada-beberibe",
    nome: "Morada Beberibe",
    localizacao: "Dois Unidos, Recife - PE",
    preco: "A partir de R$ 240.000,00",
    metragem: "36 m²",
    quartos: 2,
    banheiros: 1,
    tag: "Minha Casa Minha Vida",
    imagem:
      "https://res.cloudinary.com/dkgjwrjpv/image/upload/f_auto,q_auto,w_900/v1786571888/moradaBeberibe_fkuzwy.webp",
  },
  {
    id: "jaqueira-prime",
    nome: "Jaqueira Prime",
    localizacao: "Várzea, Recife - PE",
    preco: "A partir de R$ 220.00,00",
    metragem: "46,45 m²",
    quartos: 2,
    banheiros: 2,
    tag: "Minha Casa Minha Vida",
    imagem:
      "https://res.cloudinary.com/dkgjwrjpv/image/upload/f_auto,q_auto,w_900/v1786571768/jaqueiraPrime_rz33x1.png",
  },
  {
    id: "bosque-dos-camaras",
    nome: "Bosque dos Camarás",
    localizacao: "Camaragibe - PE",
    preco: "A partir de R$ 230.000,00",
    metragem: "40,55 m²",
    quartos: 2,
    banheiros: 1,
    tag: "Minha Casa Minha Vida",
    imagem:
      "https://res.cloudinary.com/dkgjwrjpv/image/upload/f_auto,q_auto,w_900/v1786572033/bosqueDosCamar%C3%A1s_trhbc2.png",
  },
  {
    id: "rooftop-olinda-prime",
    nome: "Rooftop Olinda Prime",
    localizacao: "Olinda - PE",
    preco: "A partir de R$ 221.000,00",
    metragem: "39,78 m²",
    quartos: 2,
    banheiros: 1,
    tag: "",
    imagem:
      "https://res.cloudinary.com/dkgjwrjpv/image/upload/v1786648340/rooftopFachada_z9eodj.png",
  },
  {
    id: "estrada-marcos-2",
    nome: "Estrada Dos Marcos II",
    localizacao: "Olinda - PE",
    preco: "A partir de R$ 180.000,00",
    metragem: "50 m²",
    quartos: 2,
    banheiros: 1,
    tag: "Minha Casa Minha Vida",
    imagem:
      "https://res.cloudinary.com/dkgjwrjpv/image/upload/v1786648340/estradaDosMarcos2_zhfjb0.png",
  },
];

function whatsappImovel(imovel: Imovel) {
  const mensagem = `Olá, Alexandre! Tenho interesse no imóvel *${imovel.nome}* (${imovel.localizacao}). Gostaria de mais informações.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`;
}

export default function Imoveis() {
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [podeVoltar, setPodeVoltar] = useState(false);
  const [podeAvancar, setPodeAvancar] = useState(true);

  const atualizarSetas = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    setPodeVoltar(el.scrollLeft > 4);
    setPodeAvancar(el.scrollLeft < maxScroll - 4);
  };

  const rolar = (direcao: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector("li");
    const gap = 24;
    const passo = card ? card.getBoundingClientRect().width + gap : 320;
    el.scrollBy({ left: direcao * passo, behavior: "smooth" });
  };

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    atualizarSetas();
    el.addEventListener("scroll", atualizarSetas, { passive: true });
    window.addEventListener("resize", atualizarSetas);

    return () => {
      el.removeEventListener("scroll", atualizarSetas);
      window.removeEventListener("resize", atualizarSetas);
    };
  }, []);

  return (
    <section
      id="imoveis"
      className="relative overflow-hidden bg-soft px-6 py-20 md:px-10 md:py-28 lg:px-14 xl:px-20"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-16 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(37,117,210,0.16)_0%,rgba(37,117,210,0)_70%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-16 bottom-10 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(37,117,210,0.1)_0%,rgba(37,117,210,0)_72%)]"
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">
              Imóveis
            </p>
            <h2 className="mt-4 font-display text-[clamp(1.75rem,3.2vw,2.5rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-ink">
              Oportunidades selecionadas
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
              Um portfólio curado com foco em localização, valorização e
              qualidade de vida — para morar ou investir com segurança.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start sm:self-end">
            <span className="text-sm font-medium text-muted">
              Para ver mais imóveis
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => rolar(-1)}
                disabled={!podeVoltar}
                className="flex size-10 cursor-pointer items-center justify-center rounded-full border border-brand/20 text-brand transition hover:border-brand hover:bg-brand/5 disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:border-brand/20 disabled:hover:bg-transparent"
                aria-label="Imóveis anteriores"
              >
                <FaChevronLeft aria-hidden />
              </button>
              <button
                type="button"
                onClick={() => rolar(1)}
                disabled={!podeAvancar}
                className="flex size-10 cursor-pointer items-center justify-center rounded-full border border-brand/20 text-brand transition hover:border-brand hover:bg-brand/5 disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:border-brand/20 disabled:hover:bg-transparent"
                aria-label="Próximos imóveis"
              >
                <FaChevronRight aria-hidden />
              </button>
            </div>
          </div>
        </div>

        <ul
          ref={scrollerRef}
          className="mt-14 flex items-start snap-x snap-mandatory gap-6 overflow-x-auto overflow-y-hidden scroll-smooth scrollbar-none"
        >
          {imoveis.map((imovel, index) => (
            <li
              key={imovel.id}
              className="w-full shrink-0 snap-start sm:w-[calc((100%-1.5rem)/2)] md:w-[calc((100%-3rem)/3)]"
            >
              <article className="group flex flex-col">
                <div className="relative overflow-hidden rounded-[1.75rem] bg-white">
                  <img
                    src={imovel.imagem}
                    alt={imovel.nome}
                    className="aspect-[4/3.4] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    loading={index < 3 ? "eager" : "lazy"}
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand shadow-sm">
                    {imovel.tag}
                  </span>
                </div>

                <div className="flex flex-col pt-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-display text-xl font-bold tracking-tight text-ink">
                        {imovel.nome}
                      </h3>
                      <p className="mt-1.5 flex items-center gap-1.5 text-sm text-muted">
                        <FaMapMarkerAlt className="text-brand" aria-hidden />
                        {imovel.localizacao}
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 text-lg font-semibold text-ink">
                    {imovel.preco}
                  </p>

                  <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted">
                    <li className="inline-flex items-center gap-1.5">
                      <FaRulerCombined className="text-brand" aria-hidden />
                      {imovel.metragem}
                    </li>
                    <li className="inline-flex items-center gap-1.5">
                      <FaBed className="text-brand" aria-hidden />
                      {imovel.quartos} quartos
                    </li>
                    <li className="inline-flex items-center gap-1.5">
                      <FaBath className="text-brand" aria-hidden />
                      {imovel.banheiros} banheiros
                    </li>
                  </ul>

                  <a
                    href={whatsappImovel(imovel)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark"
                  >
                    <FaWhatsapp size={16} aria-hidden />
                    Tenho interesse
                  </a>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
