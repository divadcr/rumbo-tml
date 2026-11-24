import FaqBrowser from "@/components/FaqBrowser";
import Stars from "@/components/Stars";
import TicketGuide from "@/components/TicketGuide";
import { faq, formatDate, questionById } from "@/lib/faq";

const LINKS = [
  { href: "https://belgium.tomorrowland.com/en/tickets/", label: "Entradas (web oficial)" },
  { href: "https://belgium.tomorrowland.com/en/tickets/accommodations/", label: "Alojamientos DreamVille" },
  { href: "https://belgium.tomorrowland.com/en/tickets/global-journey/", label: "Global Journey" },
  { href: "https://my.tomorrowland.com/support", label: "Soporte My Tomorrowland" },
];

export default function Home() {
  const { summary } = faq;

  return (
    <>
      <header className="hero">
        <Stars />
        <span className="badge">Grupo de asistentes · no oficial</span>
        <h1>Rumbo a Tomorrowland</h1>
        <div className="ornament" aria-hidden="true">
          <span />✦<span />
        </div>
        <p className="lead">
          Las dudas que más se repiten en el grupo, respondidas por quienes ya han ido. Edición Bélgica 2027.
        </p>
        <TicketGuide />
      </header>

      <main>
        <section className="summary" aria-labelledby="summary-title">
          <p className="summary-kicker">Empieza por aquí</p>
          <h2 id="summary-title">Resumen inicial</h2>
          <p className="summary-intro">{summary.intro}</p>

          <div className="dates">
            <h3 className="section-label">Fechas clave 2026–2027</h3>
            <ol className="timeline">
              {summary.dates.map((d) => (
                <li key={d.when} className={d.key ? "key" : undefined}>
                  <span className="when">{d.when}</span>
                  <span className="what">{d.what}</span>
                  <span className="hour">{d.hour}</span>
                </li>
              ))}
            </ol>
            <p className="tz-note">{summary.datesNote}</p>
          </div>

          <h3 className="section-label">Lo más importante</h3>
          <ol className="points">
            {summary.points.map((p, i) => (
              <li key={p.title}>
                <span className="point-num" aria-hidden="true">{i + 1}</span>
                <div>
                  <h4>{p.title}</h4>
                  <div className="point-text" dangerouslySetInnerHTML={{ __html: p.text }} />
                  <ul className="point-links" aria-label="Más detalles">
                    {p.links.map((id) => (
                      <li key={id}>
                        <a href={`#${id}`}>{questionById(id).q}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <h2 className="section-label faq-label" id="preguntas">Todas las preguntas</h2>
        <FaqBrowser categories={faq.categories} />

        <footer>
          <p>
            Esta información la ha reunido el grupo a partir de su experiencia. Precios y condiciones pueden cambiar:
            confírmalo siempre en la web oficial antes de comprar.
          </p>
          <ul>
            {LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
          <p>Actualizado el {formatDate(faq.updated)}.</p>
          <p className="motto">Live Today · Love Tomorrow · Unite Forever</p>
        </footer>
      </main>
    </>
  );
}
