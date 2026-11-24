import type { Metadata } from "next";
import Link from "next/link";
import Stars from "@/components/Stars";
import { INTRO, SECTIONS, SOURCE_URL } from "@/lib/guiaFestival";

export const metadata: Metadata = {
  title: "Guía del festival · Rumbo a Tomorrowland",
  description:
    "Consejos de Tomorrowland, DreamVille, hoteles, qué llevar e información importante. Traducción al español de la guía de la comunidad r/Tomorrowland.",
};

export default function GuiaFestival() {
  return (
    <>
      <header className="hero hero-compact">
        <Stars />
        <span className="badge">Guía de la comunidad · no oficial</span>
        <h1>Guía del festival</h1>
        <div className="ornament" aria-hidden="true">
          <span />✦<span />
        </div>
        <p className="lead">
          Traducción al español de la guía de{" "}
          <a href={SOURCE_URL}>r/Tomorrowland</a>, con los consejos que la comunidad ha ido reuniendo durante años.
        </p>
        <Link href="/" className="back-link">
          ← Volver al FAQ
        </Link>
      </header>

      <main className="gf">
        <div className="gf-intro">
          {INTRO.map((p, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
          ))}
        </div>

        <nav className="gf-toc" aria-label="Secciones de la guía">
          <h2 className="section-label">Contenido</h2>
          <ol>
            {SECTIONS.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`}>{s.title}</a>
              </li>
            ))}
          </ol>
        </nav>

        {SECTIONS.map((s) => (
          <section key={s.id} id={s.id} className="gf-section" aria-labelledby={`${s.id}-title`}>
            <h2 id={`${s.id}-title`}>{s.title}</h2>
            {s.items.some((it) => it.q) ? (
              s.items.map((it) => (
                <div key={it.q} className="gf-qa">
                  <h3>{it.q}</h3>
                  <div dangerouslySetInnerHTML={{ __html: it.a }} />
                </div>
              ))
            ) : (
              <ul className="gf-tips">
                {s.items.map((it, i) => (
                  <li key={i} dangerouslySetInnerHTML={{ __html: it.a }} />
                ))}
              </ul>
            )}
          </section>
        ))}

        <footer>
          <p>
            Texto original en inglés de la comunidad de r/Tomorrowland:{" "}
            <a href={SOURCE_URL}>Tomorrowland Summer Guide</a>. Se basa en ediciones anteriores y puede cambiar: confirma
            siempre lo importante en la <a href="https://belgium.tomorrowland.com/en/welcome/">web oficial</a>.
          </p>
          <p>
            <Link href="/">← Volver al FAQ de Rumbo a Tomorrowland</Link>
          </p>
          <p className="motto">Live Today · Love Tomorrow · Unite Forever</p>
        </footer>
      </main>
    </>
  );
}
