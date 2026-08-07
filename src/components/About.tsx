const ABOUT_IMAGE =
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=80";

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
              alt="Felipe Conrado, corretor de imóveis"
              className="aspect-4/5 w-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-lienar-to-t from-ink/25 via-transparent to-transparent" />
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
              Com experiência no mercado imobiliário, Felipe Conrado atua com
              foco em escuta, clareza e acompanhamento próximo em cada etapa da
              negociação — da primeira visita até a assinatura.
            </p>
            <p>
              Seu trabalho une visão estratégica e atendimento personalizado
              para quem busca comprar, vender ou investir com segurança,
              transparência e sofisticação. CRECI Z 00000.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
