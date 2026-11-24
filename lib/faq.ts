import data from "@/faq.json";

export type FaqItem = { id?: string; q: string; a: string };
export type FaqCategory = { id: string; title: string; items: FaqItem[] };
export type KeyDate = { when: string; what: string; hour: string; key?: boolean };
export type SummaryPoint = { title: string; text: string; links: string[] };
export type Summary = { intro: string; dates: KeyDate[]; datesNote: string; points: SummaryPoint[] };
export type FaqData = { updated: string; summary: Summary; categories: FaqCategory[] };

export const faq = data as FaqData;

/** Pregunta por id, para los enlaces del resumen. Falla en la compilación si un id no existe. */
const byId = new Map<string, FaqItem>();
for (const c of faq.categories) for (const it of c.items) if (it.id) byId.set(it.id, it);

export function questionById(id: string): FaqItem {
  const it = byId.get(id);
  if (!it) throw new Error(`faq.json: el resumen enlaza a la pregunta "${id}", que no existe.`);
  return it;
}

/** "2026-11-20" -> "20 de noviembre de 2026" */
export function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  return new Intl.DateTimeFormat("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(y, m - 1, d)));
}
