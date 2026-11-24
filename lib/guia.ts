/**
 * Datos de la "Guía selección de entrada".
 * Los nombres en inglés (`name`) son los que hay que buscar en la tienda oficial el día de la venta.
 */

export type Choice<K extends string = string> = {
  key: K;
  title: string;
  text: string;
  /** Nombre oficial en inglés que se muestra destacado en la tarjeta. */
  name?: string;
  tag?: string;
};

export type Transport = "bus" | "train" | "flight";
export type Zone = "mg" | "et" | "mon";

export const START: Choice<"gj" | "normal">[] = [
  {
    key: "gj",
    title: "Global Journey",
    text: "Esta opción te organiza todo (transporte y alojamiento), pero es un poco más cara que ir por tu cuenta.",
  },
  {
    key: "normal",
    title: "Entradas Normales",
    text: "Entradas sueltas con o sin camping. Esta opción es más barata.",
  },
];

export const TRANSPORTS: (Choice<Transport> & { short: string; detail: string })[] = [
  {
    key: "bus",
    title: "Autobús",
    name: "Bus Package",
    short: "Bus",
    text: "Autocar desde tu ciudad hasta el festival.",
    detail: "Autocar de ida y vuelta hasta el festival",
  },
  {
    key: "train",
    title: "Tren",
    name: "Train Package",
    short: "Train",
    text: "Tren hasta Bélgica y traslado al festival.",
    detail: "Tren de ida y vuelta y traslado al festival",
  },
  {
    key: "flight",
    title: "Avión",
    name: "Flight Package",
    short: "Flight",
    tag: "Recomendado si vas desde España",
    text: "Vuelo de ida y vuelta y traslado del aeropuerto al festival.",
    detail: "Vuelo de ida y vuelta y traslados desde el aeropuerto",
  },
];

export const GJ_LODGING: Choice<"hotel" | "camping">[] = [
  {
    key: "hotel",
    title: "Hotel",
    text: "Cama, ducha y desayuno. Un bus te lleva cada día al festival y te trae de vuelta.",
  },
  {
    key: "camping",
    title: "Camping",
    text: "Duermes en DreamVille, el camping del festival, y te levantas ya dentro del ambiente.",
  },
];

export const TICKET_TYPES: Choice<"nocamp" | "camp">[] = [
  {
    key: "nocamp",
    title: "Sin camping",
    text: "Solo la entrada al festival. El alojamiento y el transporte corren de tu cuenta.",
  },
  {
    key: "camp",
    title: "Con camping",
    text: "Entrada al festival y plaza en DreamVille, el camping oficial.",
  },
];

export const ZONES: Choice<Zone>[] = [
  { key: "mg", title: "Magnificent Greens", text: "Camping general, la opción más barata." },
  { key: "et", title: "Easy Tent", text: "Camping intermedio con tiendas de campaña ya montadas." },
  {
    key: "mon",
    title: "Montagoe",
    text: "Zona Glamping, con estructuras grandes, camas de verdad, electricidad y una zona VIP más exclusiva y cara.",
  },
];

export const ZONE_OPTIONS: Record<Zone, Choice[]> = {
  mg: [
    {
      key: "mg",
      title: "Con tu propia tienda",
      name: "Magnificent Greens Package",
      text: "Llevas tu propia tienda y equipo de acampada y buscas un sitio libre para montarlo.",
    },
    {
      key: "mg-tent",
      title: "Con tienda oficial",
      name: "Magnificent Greens Tent 1P / 2P Package",
      text: "Recoges allí una tienda oficial de Tomorrowland (con saco y colchón) y la montas donde encuentres sitio.",
    },
  ],
  et: [
    {
      key: "et",
      title: "Easy Tent",
      name: "Easy Tent 2P / 4P Package",
      text: "Tienda de campaña oficial pre-montada (para 2 o 4 personas) con colchón de aire y saco de dormir.",
    },
    {
      key: "et-spectacular",
      title: "Spectacular Easy Tent",
      name: "Spectacular Easy Tent 2P / 4P Package",
      text: "Tienda pre-montada sobre plataforma de madera, con enchufe (220V) y mejores acabados.",
    },
    {
      key: "et-supreme",
      title: "Supreme Easy Tent",
      name: "Supreme Easy Tent 2P Package",
      text: "Tienda más grande y lujosa, con camas de verdad y ropa de cama.",
    },
  ],
  mon: [
    {
      key: "relax-room",
      title: "Relax Room",
      name: "Relax Room 2P Package",
      text: "Cabina sólida con cerradura, camas reales, toma de corriente y perchero.",
    },
    {
      key: "dreamlodge",
      title: "DreamLodge",
      name: "DreamLodge 2P Package",
      text: "Tienda espaciosa tipo safari con terraza, suelo de madera y camas reales.",
    },
    {
      key: "kokono",
      title: "Kokono",
      name: "Kokono 2P Package",
      text: "Tienda elevada muy espaciosa con doble techo para aislar mejor del calor.",
    },
    {
      key: "cabana",
      title: "Cabana",
      name: "Cabana 2P Package",
      text: "Cabaña de madera con pequeño patio exterior y mobiliario.",
    },
    {
      key: "astera",
      title: "Astera",
      name: "Astera 2P Package",
      text: "Alojamiento con diseño especial tipo cúpula para mantener el interior más fresco.",
    },
    {
      key: "marivela",
      title: "Marivela",
      name: "Marivela 2P Package",
      text: "Alojamiento de lujo con aire acondicionado y baño privado completo (ducha e inodoro).",
    },
    {
      key: "ensuite",
      title: "Ensuite",
      name: "Ensuite 2P Package",
      tag: "Solo 12 unidades",
      text: "El alojamiento más exclusivo de Montagoe (solo hay 12 unidades), con el máximo espacio, aire acondicionado y baño privado.",
    },
  ],
};

/** Respuestas elegidas hasta ahora. */
export type Answers = {
  path?: "gj" | "normal";
  transport?: Transport;
  lodging?: "hotel" | "camping";
  ticket?: "nocamp" | "camp";
  zone?: Zone;
  option?: string;
};

export type Screen = "start" | "transport" | "gjLodging" | "ticket" | "zone" | "options" | "result";

export function screenFor(a: Answers): Screen {
  if (!a.path) return "start";
  if (a.path === "gj") {
    if (!a.transport) return "transport";
    if (!a.lodging) return "gjLodging";
    if (a.lodging === "hotel") return "result";
  } else {
    if (!a.ticket) return "ticket";
    if (a.ticket === "nocamp") return "result";
  }
  if (!a.zone) return "zone";
  if (!a.option) return "options";
  return "result";
}

export type ResultName = { name: string; note?: string };
export type Result = {
  names: ResultName[];
  breakdown: { label: string; value: string }[];
  sale: string;
};

const find = <T extends Choice>(list: T[], key?: string) => list.find((c) => c.key === key);

export function resultFor(a: Answers): Result {
  const transport = find(TRANSPORTS, a.transport);
  const zone = find(ZONES, a.zone);
  const option = a.zone ? find(ZONE_OPTIONS[a.zone], a.option) : undefined;
  const where = zone && option && option.title !== zone.title && !option.title.startsWith("Con ")
    ? `${zone.title} · ${option.title}`
    : zone?.title;
  const lodgingValue = option ? `${where}: ${option.text}` : "";

  if (a.path === "gj" && transport) {
    const transportRow = { label: "Transporte", value: `${transport.detail} (${transport.name}).` };
    const ticketRow = { label: "Entrada", value: "Incluida: acceso al festival el fin de semana completo." };
    const sale = "Venta Global Journey: 30 de enero, 17:00 CET.";
    if (a.lodging === "hotel") {
      return {
        names: [{ name: `Global Journey ${transport.short} + Hotel Package` }],
        breakdown: [
          transportRow,
          ticketRow,
          { label: "Alojamiento", value: "Hotel con desayuno y bus diario de ida y vuelta al festival." },
        ],
        sale,
      };
    }
    return {
      names: [{ name: `Global Journey ${transport.name} + ${option?.name}` }],
      breakdown: [transportRow, ticketRow, { label: "Alojamiento", value: lodgingValue }],
      sale,
    };
  }

  const ownTransport = { label: "Transporte", value: "Por tu cuenta: tú organizas cómo llegar a Boom (Bélgica)." };
  const sale = "Preventa: 6 de febrero. Venta general: 13 de febrero. Ambas a las 17:00 CET.";
  if (a.ticket === "nocamp") {
    return {
      names: [
        { name: "Full Madness Pass", note: "abono de 3 días" },
        { name: "Day Pass", note: "entrada de 1 día" },
      ],
      breakdown: [
        ownTransport,
        { label: "Entrada", value: "Full Madness Pass para los 3 días o Day Pass para un solo día." },
        { label: "Alojamiento", value: "Por tu cuenta: hotel, apartamento o similar fuera del festival." },
      ],
      sale,
    };
  }
  return {
    names: [{ name: option?.name ?? "" }],
    breakdown: [
      ownTransport,
      { label: "Entrada", value: "Incluida en el paquete de DreamVille: acceso al festival el fin de semana completo." },
      { label: "Alojamiento", value: lodgingValue },
    ],
    sale,
  };
}

/** Etiquetas cortas de lo elegido, para el rastro de migas de la guía. */
export function trail(a: Answers): string[] {
  const out: string[] = [];
  if (a.path) out.push(find(START, a.path)!.title);
  if (a.transport) out.push(find(TRANSPORTS, a.transport)!.title);
  if (a.lodging) out.push(find(GJ_LODGING, a.lodging)!.title);
  if (a.ticket) out.push(find(TICKET_TYPES, a.ticket)!.title);
  if (a.zone) out.push(find(ZONES, a.zone)!.title);
  if (a.zone && a.option) {
    const t = find(ZONE_OPTIONS[a.zone], a.option)!.title;
    if (t !== out[out.length - 1]) out.push(t);
  }
  return out;
}
