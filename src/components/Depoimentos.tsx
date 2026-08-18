import { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const depoimentoVideo =
  "https://res.cloudinary.com/dkgjwrjpv/video/upload/v1787081534/depoimentoEmVideo_xk1sxb.mp4";

const depoimentos = [
  {
    id: "lucas-hayrqui",
    nomes: "Lucas Hayrqui",
    texto:
      "Receber as chaves do meu imóvel foi a confirmação de um sonho. O Alexandre conduziu tudo com atenção e segurança, do primeiro contato até a entrega.",
    imagem:
      "https://res.cloudinary.com/dkgjwrjpv/image/upload/v1787081533/WhatsApp_Image_2026-08-17_at_19.50.40_x3jk46.jpg",
  },
  {
    id: "nacildo-wanessa",
    nomes: "Nacildo & Wanessa",
    texto:
      "Quero deixar meu agradecimento  ao melhor corretor! Sua atenção aos detalhes, paciência e transparência tornaram todo o processo extremamente leve e seguro. É visível o quanto você trabalha com dedicação e compromisso de verdade com o cliente. Excelente profissional, recomendo de olhos fechados a qualquer pessoa! Ouso dizer que não é apenas um excelente profissional, mas um verdadeiro parceiro de conquistas.",
    imagem:
      "https://res.cloudinary.com/dkgjwrjpv/image/upload/v1786648339/WhatsApp_Image_2026-08-13_at_15.40.14_1_qt1dfl.jpg",
  },
  {
    id: "kimberly-pedro",
    nomes: "Kimberly & Pedro",
    texto:
      "Processo leve e bem conduzido. Encontramos o imóvel certo com orientação transparente e total confiança.",
    imagem:
      "https://res.cloudinary.com/dkgjwrjpv/image/upload/v1786565566/1000774218_ukimcl.jpg",
  },
  {
    id: "julio-maria",
    nomes: "Julio & Maria",
    texto:
      "Mais uma conquista com o suporte certo. Clareza, agilidade e compromisso do primeiro contato até a chave.",
    imagem:
      "https://res.cloudinary.com/dkgjwrjpv/image/upload/v1786565144/1000774221_fmllhg.jpg",
  },
  {
    id: "jackson-beatriz",
    nomes: "Jackson & Beatriz",
    texto:
      "Encontrei meu lar em um imóvel que ficou na ponta dos dedos com a ajuda do corretor. Transparência, agilidade e suporte tornaram tudo muito tranquilo. Hoje estamos em casa e muito gratos.",
    imagem:
      "https://res.cloudinary.com/dkgjwrjpv/image/upload/v1786648339/WhatsApp_Image_2026-08-13_at_15.40.14_2_msx3ap.jpg",
  },
  {
    id: "angela-ginaldo",
    nomes: "Ângela & Ginaldo",
    texto:
      "Desde o primeiro contato sentimos segurança. Você explicou cada etapa com calma e sempre esteve disponível para tirar nossas dúvidas. A busca pelo lar ficou leve justamente por essa parceria.",
    imagem:
      "https://res.cloudinary.com/dkgjwrjpv/image/upload/v1786648339/WhatsApp_Image_2026-08-13_at_15.40.14_ebnugn.jpg",
  },
  {
    id: "joseane-familia",
    nomes: "Joseane & Família",
    texto:
      "Foi emocionante ver a família reunida na entrega das chaves. O Alexandre cuidou de tudo com paciência e respeito, sempre pensando no que era melhor para nós. Recomendamos de coração.",
    imagem:
      "https://res.cloudinary.com/dkgjwrjpv/image/upload/v1786648339/WhatsApp_Image_2026-08-13_at_15.40.13_fyqtbu.jpg",
  },
  {
    id: "jadmas-julio",
    nomes: "Jadmas & Júlio",
    texto:
      "O Alexandre acompanhou cada detalhe da negociação e nos deu clareza para decidir com confiança. Sem pressa, sem enrolação — só um trabalho honesto até fecharmos o imóvel.",
    imagem:
      "https://res.cloudinary.com/dkgjwrjpv/image/upload/v1786648340/WhatsApp_Image_2026-08-13_at_15.40.15_b7u1pt.jpg",
  },
] as const;

export default function Depoimentos() {
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
      id="depoimentos"
      className="relative overflow-hidden bg-white px-6 py-20 md:px-10 md:py-28 lg:px-14 xl:px-20"
      aria-labelledby="depoimentos-titulo"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(37,117,210,0.12)_0%,rgba(37,117,210,0)_70%)]"
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">
              Depoimentos
            </p>
            <h2
              id="depoimentos-titulo"
              className="mt-4 font-display text-[clamp(1.75rem,3.2vw,2.5rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-ink"
            >
              Histórias de quem realizou o sonho
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
              Famílias que confiaram no Alexandre Arruda para conquistar o
              próprio imóvel.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start sm:self-end">
            <span className="text-sm font-medium text-muted">
              Para ver mais depoimentos
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => rolar(-1)}
                disabled={!podeVoltar}
                className="flex size-10 cursor-pointer items-center justify-center rounded-full border border-brand/20 text-brand transition hover:border-brand hover:bg-brand/5 disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:border-brand/20 disabled:hover:bg-transparent"
                aria-label="Depoimentos anteriores"
              >
                <FaChevronLeft aria-hidden />
              </button>
              <button
                type="button"
                onClick={() => rolar(1)}
                disabled={!podeAvancar}
                className="flex size-10 cursor-pointer items-center justify-center rounded-full border border-brand/20 text-brand transition hover:border-brand hover:bg-brand/5 disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:border-brand/20 disabled:hover:bg-transparent"
                aria-label="Próximos depoimentos"
              >
                <FaChevronRight aria-hidden />
              </button>
            </div>
          </div>
        </div>

        <ul
          ref={scrollerRef}
          className="mt-14 flex items-stretch snap-x snap-mandatory gap-6 overflow-x-auto overflow-y-hidden scroll-smooth scrollbar-none"
        >
          <li className="w-full shrink-0 snap-start sm:w-[calc((100%-1.5rem)/2)] md:w-[calc((100%-3rem)/3)]">
            <article className="relative flex min-h-112 overflow-hidden rounded-[1.75rem] bg-ink sm:min-h-120">
              <video
                src={depoimentoVideo}
                className="absolute inset-0 h-full w-full object-cover"
                controls
                playsInline
                preload="metadata"
                aria-label="Depoimento em vídeo de cliente"
              />
            </article>
          </li>
          {depoimentos.map((item) => (
            <li
              key={item.id}
              className="w-full shrink-0 snap-start sm:w-[calc((100%-1.5rem)/2)] md:w-[calc((100%-3rem)/3)]"
            >
              <article className="group relative flex min-h-112 flex-col justify-end overflow-hidden rounded-[1.75rem] sm:min-h-120">
                <img
                  src={item.imagem}
                  alt={`Entrega das chaves — ${item.nomes}`}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 bg-linear-to-t from-ink/90 via-ink/55 to-ink/15"
                  aria-hidden
                />

                <div className="relative z-10 p-6 sm:p-7">
                  <p className="text-[0.95rem] leading-relaxed text-white/95 md:text-base">
                    “{item.texto}”
                  </p>
                  <p className="mt-5 font-display text-lg font-bold tracking-tight text-white">
                    {item.nomes}
                  </p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-white/65">
                    Clientes
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
