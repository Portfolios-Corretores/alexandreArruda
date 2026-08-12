import { useState, type FormEvent } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_NUMBER } from "../constants";

const estadosCivis = [
  "Solteiro(a)",
  "Casado(a)",
  "União estável",
  "Divorciado(a)",
  "Viúvo(a)",
];

const faixasRenda = [
  "Até R$ 3.000",
  "R$ 3.000 a R$ 6.000",
  "R$ 6.000 a R$ 10.000",
  "R$ 10.000 a R$ 20.000",
  "Acima de R$ 20.000",
  "Prefiro não informar",
];

type FormState = {
  nome: string;
  interesse: string;
  renda: string;
  estadoCivil: string;
};

const initialForm: FormState = {
  nome: "",
  interesse: "",
  renda: "",
  estadoCivil: "",
};

function montarMensagem(data: FormState) {
  return [
    "Olá, Alexandre! Gostaria de agendar uma consultoria.",
    "",
    `*Nome:* ${data.nome}`,
    `*Interesse em comprar em:* ${data.interesse}`,
    `*Renda média:* ${data.renda}`,
    `*Estado civil:* ${data.estadoCivil}`,
    "",
    "Vim direcionado da sua leading page.",
  ].join("\n");
}

export default function Agendamento() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [enviado, setEnviado] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      montarMensagem(form),
    )}`;

    // Abre o WhatsApp em nova aba — a página atual não é redirecionada
    window.open(url, "_blank", "noopener,noreferrer");

    setEnviado(true);
    setForm(initialForm);
  }

  return (
    <section
      id="contato"
      className="relative overflow-hidden bg-white px-6 py-20 md:px-10 md:py-28 lg:px-14 xl:px-20"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-20 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(37,117,210,0.14)_0%,rgba(37,117,210,0)_70%)]"
      />

      <div className="relative mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">
            Agendamento
          </p>
          <h2 className="mt-4 font-display text-[clamp(1.75rem,3.2vw,2.5rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-ink">
            Agende sua consultoria
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
            Preencha o formulário e envie seus dados pelo WhatsApp. Assim
            consigo entender melhor o seu perfil e indicar as melhores
            oportunidades.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-[1.75rem] bg-soft p-6 sm:p-8 md:p-10"
        >
          <div className="grid gap-5">
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-ink">
                Nome completo
              </span>
              <input
                type="text"
                required
                name="nome"
                autoComplete="name"
                value={form.nome}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, nome: e.target.value }))
                }
                placeholder="Seu nome"
                className="w-full rounded-2xl border border-transparent bg-white px-4 py-3.5 text-sm text-ink outline-none transition placeholder:text-muted/70 focus:border-brand/30 focus:ring-2 focus:ring-brand/15"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-ink">
                Onde tem interesse em comprar
              </span>
              <input
                type="text"
                required
                name="interesse"
                value={form.interesse}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, interesse: e.target.value }))
                }
                placeholder="Ex.: Boa Viagem, Recife, litoral..."
                className="w-full rounded-2xl border border-transparent bg-white px-4 py-3.5 text-sm text-ink outline-none transition placeholder:text-muted/70 focus:border-brand/30 focus:ring-2 focus:ring-brand/15"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-ink">
                Renda média
              </span>
              <select
                required
                name="renda"
                value={form.renda}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, renda: e.target.value }))
                }
                className="w-full appearance-none rounded-2xl border border-transparent bg-white px-4 py-3.5 text-sm text-ink outline-none transition focus:border-brand/30 focus:ring-2 focus:ring-brand/15"
              >
                <option value="" disabled>
                  Selecione uma faixa
                </option>
                {faixasRenda.map((faixa) => (
                  <option key={faixa} value={faixa}>
                    {faixa}
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-ink">
                Estado civil
              </span>
              <select
                required
                name="estadoCivil"
                value={form.estadoCivil}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, estadoCivil: e.target.value }))
                }
                className="w-full appearance-none rounded-2xl border border-transparent bg-white px-4 py-3.5 text-sm text-ink outline-none transition focus:border-brand/30 focus:ring-2 focus:ring-brand/15"
              >
                <option value="" disabled>
                  Selecione
                </option>
                {estadosCivis.map((estado) => (
                  <option key={estado} value={estado}>
                    {estado}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <button
            type="submit"
            className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(37,117,210,0.28)] transition hover:bg-brand-dark"
          >
            <FaWhatsapp size={18} aria-hidden />
            Enviar pelo WhatsApp
          </button>

          {enviado && (
            <p className="mt-4 text-center text-sm text-muted" role="status">
              Dados preparados. Confirme o envio na aba do WhatsApp que abriu.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
