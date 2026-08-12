import { FaBath, FaBed, FaMapMarkerAlt, FaRulerCombined, FaWhatsapp } from "react-icons/fa";
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
    id: "botanik-torre",
    nome: "Botanik Torre",
    localizacao: "Torre, Recife - PE",
    preco: "A partir de R$ 779.000,00",
    metragem: "76 m²",
    quartos: 3,
    banheiros: 3,
    tag: "Médio Padrão",
    imagem:
      "https://res.cloudinary.com/dkgjwrjpv/image/upload/f_auto,q_auto,w_900/v1786033695/botanikTorre_s2m18w.jpg",
  },
  {
    id: "patio-hori",
    nome: "Pátio Horí",
    localizacao: "Caxangá, Recife - PE",
    preco: "A partir de R$ 314.000,00",
    metragem: "52,28 m²",
    quartos: 2,
    banheiros: 2,
    tag: "Médio Padrão",
    imagem:
      "https://res.cloudinary.com/dkgjwrjpv/image/upload/f_auto,q_auto,w_900/v1786033693/patioHori_o2ypsg.webp",
  },
  {
    id: "patio-camino",
    nome: "Pátio Camino",
    localizacao: "Iputinga, Recife - PE",
    preco: "A partir de R$ 359.000,00",
    metragem: "45,68 m²",
    quartos: 2,
    banheiros: 2,
    tag: "Médio Padrão",
    imagem:
      "https://res.cloudinary.com/dkgjwrjpv/image/upload/f_auto,q_auto,w_900/v1786033693/patioCamino_sxxhk3.webp",
  },
];

function whatsappImovel(imovel: Imovel) {
  const mensagem = `Olá, Alexandre! Tenho interesse no imóvel *${imovel.nome}* (${imovel.localizacao}). Gostaria de mais informações.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`;
}

export default function Imoveis() {
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

        <ul className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {imoveis.map((imovel) => (
            <li key={imovel.id}>
              <article className="group flex h-full flex-col">
                <div className="relative overflow-hidden rounded-[1.75rem] bg-white">
                  <img
                    src={imovel.imagem}
                    alt={imovel.nome}
                    className="aspect-[4/3.4] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand shadow-sm">
                    {imovel.tag}
                  </span>
                </div>

                <div className="flex flex-1 flex-col pt-5">
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
                    className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(37,117,210,0.22)] transition hover:bg-brand-dark"
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
