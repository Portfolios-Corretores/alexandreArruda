const depoimentos = [
  {
    id: "beatriz-geovane",
    nomes: "Beatriz & Geovane",
    texto:
      "Sonho realizado com acompanhamento próximo em cada etapa. Atendimento humano, claro e seguro do começo ao fim.",
    imagem:
      "https://res.cloudinary.com/dkgjwrjpv/image/upload/v1786565145/1000774231_kgljqw.jpg",
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
] as const;

export default function Depoimentos() {
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

        <ul className="mt-14 grid gap-6 md:grid-cols-3 md:gap-7">
          {depoimentos.map((item) => (
            <li key={item.id}>
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
