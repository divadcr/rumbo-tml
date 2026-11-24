"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { FaqCategory, FaqItem } from "@/lib/faq";

const norm = (s: string) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");

const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** Texto plano de un fragmento HTML, para buscar sin pisar etiquetas ni enlaces. */
const htmlToText = (html: string) =>
  html
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"');

/** Envuelve en <mark> las coincidencias (sin tildes) dentro de los nodos de texto. */
function highlight(html: string, term: string): string {
  if (!term || typeof document === "undefined") return html;
  const tpl = document.createElement("template");
  tpl.innerHTML = html;
  const walker = document.createTreeWalker(tpl.content, NodeFilter.SHOW_TEXT);
  const nodes: Text[] = [];
  while (walker.nextNode()) nodes.push(walker.currentNode as Text);
  for (const n of nodes) {
    const t = n.nodeValue ?? "";
    const nt = norm(t);
    let i = nt.indexOf(term);
    if (i < 0) continue;
    const frag = document.createDocumentFragment();
    let last = 0;
    while (i >= 0) {
      frag.append(t.slice(last, i));
      const m = document.createElement("mark");
      m.textContent = t.slice(i, i + term.length);
      frag.append(m);
      last = i + term.length;
      i = nt.indexOf(term, last);
    }
    frag.append(t.slice(last));
    n.replaceWith(frag);
  }
  return tpl.innerHTML;
}

type IndexedItem = FaqItem & { haystack: string };

function Question({ item, term, hidden }: { item: IndexedItem; term: string; hidden: boolean }) {
  const ref = useRef<HTMLDetailsElement>(null);
  const hit = !hidden && !!term;

  // Al buscar, abre las respuestas que coinciden (como en el prototipo).
  useEffect(() => {
    if (hit && ref.current) ref.current.open = true;
  }, [hit, term]);

  return (
    <details ref={ref} id={item.id} hidden={hidden}>
      <summary dangerouslySetInnerHTML={{ __html: highlight(escapeHtml(item.q), term) }} />
      <div className="answer" dangerouslySetInnerHTML={{ __html: highlight(item.a, term) }} />
    </details>
  );
}

export default function FaqBrowser({ categories }: { categories: FaqCategory[] }) {
  const [input, setInput] = useState("");
  const [term, setTerm] = useState("");
  const [active, setActive] = useState("all");

  // Pequeño retardo para no filtrar en cada pulsación.
  useEffect(() => {
    const t = setTimeout(() => setTerm(norm(input.trim())), 120);
    return () => clearTimeout(t);
  }, [input]);

  // Enlaces del resumen (#id de pregunta): quita filtros, abre la respuesta y la lleva a la vista.
  const [target, setTarget] = useState<{ id: string } | null>(null);

  useEffect(() => {
    const isQuestion = (id: string) => categories.some((c) => c.items.some((it) => it.id === id));
    const go = (id: string) => {
      if (!isQuestion(id)) return false;
      setInput("");
      setTerm("");
      setActive("all");
      setTarget({ id });
      return true;
    };
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element | null)?.closest?.('a[href^="#"]');
      const id = a?.getAttribute("href")?.slice(1);
      if (id && go(id)) {
        e.preventDefault();
        history.pushState(null, "", `#${id}`);
      }
    };
    const onHash = () => go(decodeURIComponent(location.hash.slice(1)));
    onHash();
    document.addEventListener("click", onClick);
    window.addEventListener("hashchange", onHash);
    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("hashchange", onHash);
    };
  }, [categories]);

  useEffect(() => {
    if (!target) return;
    const el = document.getElementById(target.id);
    if (!(el instanceof HTMLDetailsElement)) return;
    el.open = true;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    el.classList.remove("flash");
    void el.offsetWidth; // reinicia la animación si se pulsa dos veces
    el.classList.add("flash");
    el.querySelector("summary")?.focus({ preventScroll: true });
  }, [target]);

  const indexed = useMemo(
    () =>
      categories.map((c) => ({
        ...c,
        items: c.items.map((it) => ({ ...it, haystack: norm(it.q + " " + htmlToText(it.a)) })),
      })),
    [categories],
  );

  let shown = 0;
  const sections = indexed.map((cat) => {
    const catOk = active === "all" || active === cat.id;
    const visible = cat.items.map((it) => catOk && (!term || it.haystack.includes(term)));
    const count = visible.filter(Boolean).length;
    shown += count;
    return { cat, visible, count };
  });

  const chips = [{ id: "all", title: "Todo" }, ...categories];

  return (
    <>
      <div className="tools">
        <div className="search">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" />
          </svg>
          <label htmlFor="q" className="sr-only">Buscar una pregunta</label>
          <input
            id="q"
            type="search"
            placeholder="Busca: pago, cola, tienda, perlas…"
            autoComplete="off"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <div className="chips" role="toolbar" aria-label="Filtrar por tema">
          {chips.map((c) => (
            <button
              key={c.id}
              type="button"
              className="chip"
              aria-pressed={active === c.id}
              onClick={() => setActive(c.id)}
            >
              {c.title}
            </button>
          ))}
        </div>
      </div>

      <div id="faq">
        {sections.map(({ cat, visible, count }) => (
          <section key={cat.id} className="cat" id={cat.id} hidden={count === 0}>
            <h2>
              {cat.title} <small>{cat.items.length} preguntas</small>
            </h2>
            <div className="qa">
              {cat.items.map((it, i) => (
                <Question key={i} item={it} term={term} hidden={!visible[i]} />
              ))}
            </div>
          </section>
        ))}
      </div>
      <p className="empty" data-show={shown === 0}>
        No hay ninguna pregunta con esas palabras. Pregunta en el grupo y la añadiremos.
      </p>
    </>
  );
}
