"use client";

import { useEffect, useRef, useState } from "react";
import {
  GJ_LODGING,
  START,
  TICKET_TYPES,
  TRANSPORTS,
  ZONES,
  ZONE_OPTIONS,
  resultFor,
  screenFor,
  trail,
  type Answers,
  type Choice,
  type Screen,
} from "@/lib/guia";

const TITLES: Record<Screen, { title: string; lead?: string }> = {
  start: { title: "¿Cómo quieres ir?", lead: "Responde unas preguntas y te decimos qué paquete buscar el día de la venta." },
  transport: { title: "¿Cómo quieres viajar?", lead: "El transporte va incluido en el paquete, desde tu ciudad." },
  gjLodging: { title: "¿Dónde quieres dormir?" },
  ticket: { title: "¿Qué tipo de entrada?" },
  zone: { title: "Elige zona de DreamVille", lead: "DreamVille es el camping oficial del festival." },
  options: { title: "Elige tu alojamiento", lead: "Este es el nombre que verás en la tienda oficial." },
  result: { title: "Tu entrada ideal" },
};

function Cards({ choices, onPick }: { choices: Choice[]; onPick: (key: string) => void }) {
  return (
    <div className="g-cards">
      {choices.map((c) => (
        <button key={c.key} type="button" className="g-card" onClick={() => onPick(c.key)}>
          {c.tag && <span className="g-tag">{c.tag}</span>}
          <span className="g-card-title">{c.title}</span>
          {c.name && <span className="g-name">{c.name}</span>}
          <span className="g-card-text">{c.text}</span>
        </button>
      ))}
    </div>
  );
}

function CopyName({ name, note }: { name: string; note?: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <div className="g-result-name">
      <div>
        <strong>{name}</strong>
        {note && <span className="g-note"> · {note}</span>}
      </div>
      <button
        type="button"
        className="g-copy"
        onClick={async () => {
          try {
            await navigator.clipboard.writeText(name);
            setCopied(true);
            setTimeout(() => setCopied(false), 1800);
          } catch {
            /* el portapapeles puede no estar disponible; el nombre sigue visible */
          }
        }}
      >
        {copied ? "¡Copiado!" : "Copiar"}
      </button>
    </div>
  );
}

export default function TicketGuide() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [history, setHistory] = useState<Answers[]>([{}]);
  const [dir, setDir] = useState<"fwd" | "back">("fwd");

  const answers = history[history.length - 1];
  const screen = screenFor(answers);
  const crumbs = trail(answers);

  const open = () => {
    setHistory([{}]);
    setDir("fwd");
    dialogRef.current?.showModal();
  };

  // #guia abre la guía directamente (enlace compartible).
  useEffect(() => {
    const check = () => {
      if (location.hash === "#guia" && !dialogRef.current?.open) open();
    };
    check();
    window.addEventListener("hashchange", check);
    return () => window.removeEventListener("hashchange", check);
  }, []);

  // Al cambiar de pantalla, el foco va al título para que los lectores de pantalla lo anuncien.
  useEffect(() => {
    if (dialogRef.current?.open) headingRef.current?.focus({ preventScroll: true });
    dialogRef.current?.querySelector(".g-body")?.scrollTo({ top: 0 });
  }, [history]);

  const pick = (patch: Answers) => {
    setDir("fwd");
    setHistory((h) => [...h, { ...h[h.length - 1], ...patch }]);
  };
  const back = () => {
    setDir("back");
    setHistory((h) => (h.length > 1 ? h.slice(0, -1) : h));
  };
  const restart = () => {
    setDir("back");
    setHistory([{}]);
  };
  const close = () => dialogRef.current?.close();

  const onClose = () => {
    if (location.hash === "#guia") clearGuideHash();
  };

  let body: React.ReactNode;
  switch (screen) {
    case "start":
      body = <Cards choices={START} onPick={(k) => pick({ path: k as Answers["path"] })} />;
      break;
    case "transport":
      body = <Cards choices={TRANSPORTS} onPick={(k) => pick({ transport: k as Answers["transport"] })} />;
      break;
    case "gjLodging":
      body = <Cards choices={GJ_LODGING} onPick={(k) => pick({ lodging: k as Answers["lodging"] })} />;
      break;
    case "ticket":
      body = <Cards choices={TICKET_TYPES} onPick={(k) => pick({ ticket: k as Answers["ticket"] })} />;
      break;
    case "zone":
      body = <Cards choices={ZONES} onPick={(k) => pick({ zone: k as Answers["zone"] })} />;
      break;
    case "options":
      body = <Cards choices={ZONE_OPTIONS[answers.zone!]} onPick={(k) => pick({ option: k })} />;
      break;
    case "result": {
      const r = resultFor(answers);
      body = (
        <div className="g-result">
          <p className="g-result-label">
            {r.names.length > 1 ? "Busca uno de estos nombres en la tienda oficial" : "Busca este nombre en la tienda oficial"}
          </p>
          {r.names.map((n) => (
            <CopyName key={n.name} name={n.name} note={n.note} />
          ))}
          <dl className="g-breakdown">
            {r.breakdown.map((b) => (
              <div key={b.label}>
                <dt>{b.label}</dt>
                <dd>{b.value}</dd>
              </div>
            ))}
            <div>
              <dt>Cuándo se vende</dt>
              <dd>{r.sale}</dd>
            </div>
          </dl>
          <p className="g-disclaimer">
            Los nombres y lo que incluye cada paquete pueden cambiar de un año a otro. Compruébalo en el simulador y en la{" "}
            <a href="https://belgium.tomorrowland.com/en/tickets/">web oficial</a> antes de la venta.
          </p>
        </div>
      );
      break;
    }
  }

  const { title, lead } = TITLES[screen];

  return (
    <>
      <button type="button" className="guide-launch" onClick={open}>
        <span aria-hidden="true">✦</span> Guía selección de entrada
      </button>

      <dialog
        ref={dialogRef}
        className="guide"
        aria-labelledby="guide-title"
        onClose={onClose}
        onClick={(e) => {
          if (e.target === dialogRef.current) close(); // clic fuera del panel
        }}
      >
        <div className="g-panel">
          <div className="g-top">
            <span className="g-kicker">Guía selección de entrada</span>
            <button type="button" className="g-close" onClick={close} aria-label="Cerrar la guía">
              ✕
            </button>
          </div>

          {crumbs.length > 0 && (
            <ol className="g-trail" aria-label="Lo que has elegido">
              {crumbs.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ol>
          )}

          <div className="g-body">
            <div key={history.length + screen} className="g-step" data-dir={dir}>
              <h2 id="guide-title" ref={headingRef} tabIndex={-1}>
                {title}
              </h2>
              {lead && <p className="g-lead">{lead}</p>}
              {body}
            </div>
          </div>

          <div className="g-actions">
            {history.length > 1 ? (
              <button type="button" className="g-btn" onClick={back}>
                ← Volver atrás
              </button>
            ) : (
              <span />
            )}
            {screen === "result" && (
              <button type="button" className="g-btn g-btn-primary" onClick={restart}>
                Volver a empezar
              </button>
            )}
          </div>
        </div>
      </dialog>
    </>
  );
}

/** Quita #guia de la URL al cerrar, sin saltar de posición. */
function clearGuideHash() {
  window.history.replaceState(null, "", location.pathname + location.search);
}
