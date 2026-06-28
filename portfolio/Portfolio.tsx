// Portfolio.tsx — portfólio minimalista da mood. (React + TailwindCSS)
// Fonte de design: inspiration.md (identidade visual mood.)
// Fontes: importe Inter e JetBrains Mono no <head> ou via tailwind.config.

const cases = [
  { tag: "ODONTOLOGIA", title: "Aro — Dr. Luiz", desc: "CRM + agente de IA no WhatsApp. Captação organizada e follow-up automático." },
  { tag: "ACADEMIA", title: "Evolvtion", desc: "Dois agentes de IA + CRM em duas unidades. Leads qualificados sem fila." },
  { tag: "ESTÉTICA", title: "Estética Júlia", desc: "Agente Sofia para atendimento e agendamento 24/7." },
  { tag: "SAÚDE", title: "Unimed Sudoeste", desc: "Tráfego, social, vídeo e captação de eventos. Marca presente e consistente." },
];

const servicos = [
  { letter: "M", name: "Mapear", desc: "Diagnóstico: gargalos, dependências e oportunidades." },
  { letter: "O", name: "Organizar", desc: "Processos, papéis e indicadores que sustentam o crescimento." },
  { letter: "O", name: "Orquestrar", desc: "Pessoas, processos e tecnologia num só sistema." },
  { letter: "D", name: "Desenvolver", desc: "Autonomia das equipes e melhoria contínua." },
];

const Label = ({ children }: { children: React.ReactNode }) => (
  <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#69727D]">{children}</span>
);

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#1F2124] antialiased [font-family:Inter,sans-serif]">
      {/* Nav */}
      <header className="sticky top-0 z-10 border-b border-black/5 bg-white/80 backdrop-blur">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <a href="#" className="text-2xl font-extrabold tracking-tight">
            mood<span className="text-[#7435B7]">.</span>
          </a>
          <div className="hidden gap-8 md:flex">
            {["Método", "Cases", "Contato"].map((i) => (
              <a key={i} href={`#${i.toLowerCase()}`} className="text-sm text-[#69727D] transition hover:text-[#1F2124]">
                {i}
              </a>
            ))}
          </div>
          <a href="#contato" className="rounded-full bg-[#1F2124] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#5A4E89]">
            Falar com a Mia
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 pb-24 pt-24 md:pt-32">
        <Label>Estruturação empresarial com IA</Label>
        <h1 className="mt-6 max-w-3xl text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl">
          O caos vira clareza.<br />
          A clareza vira <span className="text-[#7435B7]">calma</span>.
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-[#69727D]">
          Transformamos crescimento desorganizado em crescimento estruturado. Tecnologia,
          automação e IA são meios, nunca o objetivo.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a href="#cases" className="rounded-full bg-[#5A4E89] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#7435B7]">
            Ver cases
          </a>
          <a href="#método" className="rounded-full border border-black/10 px-7 py-3 text-sm font-semibold transition hover:border-black/30">
            Conhecer o método
          </a>
        </div>
      </section>

      {/* Método M.O.O.D. */}
      <section id="método" className="border-y border-black/5 bg-[#FAFAFB] py-24">
        <div className="mx-auto max-w-5xl px-6">
          <Label>O método</Label>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl">M.O.O.D.</h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-black/5 bg-black/5 sm:grid-cols-2 lg:grid-cols-4">
            {servicos.map((s, i) => (
              <div key={i} className="bg-white p-8">
                <div className="font-mono text-3xl font-bold text-[#7435B7]">{s.letter}.</div>
                <h3 className="mt-4 text-lg font-semibold">{s.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#69727D]">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cases */}
      <section id="cases" className="mx-auto max-w-5xl px-6 py-24">
        <Label>Cases</Label>
        <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl">Estrutura que vira resultado</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {cases.map((c, i) => (
            <article key={i} className="group rounded-2xl border border-black/5 p-8 transition hover:border-[#5A4E89]/40 hover:shadow-lg hover:shadow-[#5A4E89]/5">
              <Label>{c.tag}</Label>
              <h3 className="mt-3 text-xl font-bold">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#69727D]">{c.desc}</p>
              <span className="mt-6 inline-block text-sm font-semibold text-[#7435B7] opacity-0 transition group-hover:opacity-100">
                Ver case →
              </span>
            </article>
          ))}
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="bg-[#1F2124] py-24 text-white">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="max-w-2xl text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
            Estrutura antes da escala.
          </h2>
          <p className="mt-6 max-w-lg text-lg text-white/60">
            O problema não é crescer. É sustentar o crescimento. Vamos construir juntos.
          </p>
          <a href="mailto:agenciamood.oficial@gmail.com" className="mt-10 inline-block rounded-full bg-[#7435B7] px-8 py-3 text-sm font-semibold transition hover:bg-white hover:text-[#1F2124]">
            Falar com a Mia
          </a>
          <div className="mt-16 flex flex-col justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/40 sm:flex-row">
            <span className="text-xl font-extrabold text-white">mood<span className="text-[#7435B7]">.</span></span>
            <span className="font-mono uppercase tracking-widest">moodcomia.com.br · Itapeva/SP</span>
          </div>
        </div>
      </section>
    </div>
  );
}
