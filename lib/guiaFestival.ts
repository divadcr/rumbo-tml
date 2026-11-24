/**
 * Guía del festival: traducción al español de la guía de la comunidad r/Tomorrowland
 * (https://www.reddit.com/r/Tomorrowland/wiki/summer/guide/), manteniendo su estructura.
 * Los nombres de sitios, zonas, escenarios y servicios se dejan en inglés, como aparecen allí.
 * Los textos son HTML.
 */

export type GuideItem = { q?: string; a: string };
export type GuideSection = { id: string; title: string; items: GuideItem[] };

export const SOURCE_URL = "https://www.reddit.com/r/Tomorrowland/wiki/summer/guide/";

export const INTRO = [
  "Aquí está todo lo que la comunidad de r/Tomorrowland ha aprendido en los últimos 20 años para que saques el máximo partido al festival. Tomorrowland 2027: ¡no podemos esperar!",
  `<strong>Ojo:</strong> todo se basa en la experiencia de años anteriores y puede cambiar. También se basa en las normas oficiales: puede que a alguien le dejen pasar de todo, pero <strong>nunca</strong> cuentes con ello. La información oficial está en la <a href="https://belgium.tomorrowland.com/en/welcome/">web de Tomorrowland</a>, en el <a href="https://faq.tomorrowland.com/hc/en-us/sections/360007365532-General">FAQ de Tomorrowland</a> y en el <a href="https://faq.tomorrowland.com/hc/en-us/categories/360002419811-DreamVille">FAQ de DreamVille</a>.`,
  `Si tienes dudas concretas, puedes preguntar en Reddit o en el <a href="https://tomorrow.land/discord">Discord oficial de Tomorrowland</a>, donde se abre un ticket de soporte desde el enlace de arriba a la izquierda de la lista de canales.`,
];

export const SECTIONS: GuideSection[] = [
  {
    id: "info-general",
    title: "Información general",
    items: [
      {
        q: "¿Es difícil conseguir entradas?",
        a: `<p>A un precio razonable, sí.</p>
<p>Las entradas de las ventas normales se agotan en un par de minutos.</p>
<p>Si te lo puedes permitir, compra un paquete Global Journey. Es más fácil conseguir entrada en la venta de Global Journey, salvo en los paquetes más buscados (sobre todo todas las opciones de Montagoe). Usa el simulador de Global Journey para saber qué quieres antes de la venta: la tienda real es igual que el simulador. Aun así, las entradas de Global Journey se agotan en pocas horas.</p>
<p>Los dos fines de semana se pueden comprar en una sola compra, salvo con Global Journey, donde hay que hacer dos pedidos distintos. No existen entradas "para los dos fines de semana".</p>
<p>En Global Journey también tienes que hacer pedidos separados si tu grupo quiere tipos de paquete diferentes.</p>`,
      },
      {
        q: "¿Cuánto cuestan las entradas?",
        a: `<p>El precio puede variar entre los distintos momentos de venta. En la Worldwide Pre-Sale las entradas suelen ser algo más baratas que en la Worldwide Sale.</p>
<p>Es solo orientativo, porque hay muchísimos tipos de entrada y de paquete:</p>
<ul>
<li>Day Pass (entrada de un día): desde 144 €</li>
<li>Full Madness Pass (entrada de fin de semana): desde 335 €</li>
<li>Magnificent Greens (entrada de fin de semana + camping): desde 422 €</li>
<li>Paquetes Global Journey: desde unos 900 €</li>
</ul>`,
      },
      {
        q: "¿Cómo se consiguen las entradas?",
        a: `<p>Hay varias ventas distintas; tienes más información en la <a href="https://tomorrowland.com/">web de Tomorrowland</a>. En orden de apertura:</p>
<ul>
<li>NFT Pre-Sale</li>
<li>First 20 Sale</li>
<li>Global Journey and Discover Europe Sale (paquetes de viaje)</li>
<li>Belgian Sale</li>
<li>Worldwide Pre-Sale</li>
<li>Friendship Garden Sale</li>
<li>Worldwide Sale</li>
<li>Travel Partners</li>
<li>Waiting List (lista de espera)</li>
</ul>`,
      },
      {
        q: "He comprado las entradas, ¿por qué no aparecen en mi cuenta?",
        a: `<p>Las entradas aparecen en tu cuenta mucho más tarde. Si tienes el PDF de confirmación y te han cobrado, no tienes de qué preocuparte.</p>`,
      },
      {
        q: "¿Qué son las Pearls?",
        a: `<p>Tomorrowland usa un sistema de pago electrónico integrado en la pulsera. Con la pulsera se paga casi todo (excepto en la tienda Carrefour de DreamVille, los puestos de tabaco y algunos puestos especiales). En lugar de euros, la moneda son las Pearls (perlas). En 2026 el cambio fue de 1 perla = 1,90 €. Se pueden recargar antes y durante el festival, en efectivo, con tarjeta y online. Si recargas online, después del festival te devuelven automáticamente las perlas que no hayas gastado (menos una pequeña comisión).</p>`,
      },
    ],
  },
  {
    id: "tomorrowland",
    title: "Consejos para Tomorrowland",
    items: [
      { a: `<a href="https://festivalviewer.com/tomorrowland/guide#map">Mapas de la edición de 2026.</a>` },
      { a: "No te olvides de los escenarios pequeños. ¡Algunos ofrecen mucho más que otro estilo de música!" },
      {
        a: "Los horarios pueden cambiar con poco aviso. Si quieres ver a un artista concreto, llega con tiempo. En la Tomorrowland Festival App (el icono rosa) puedes marcar tus artistas favoritos y te avisa 10 minutos antes de que empiece su set.",
      },
      {
        a: "Hay dos entradas: la de DreamVille, cerca del Mainstage, y la entrada principal, cerca del Freedom Stage. Con una pulsera que <strong>no</strong> incluye DreamVille solo puedes usar la entrada principal. En ediciones anteriores se podía entrar por la entrada principal con pulsera de DreamVille, pero si entras o sales por la entrada principal no puedes volver a entrar ese mismo día.",
      },
      {
        a: "Hay taquillas (lockers) tanto en DreamVille como en Tomorrowland. No se acaban y se pueden comprar allí mismo, aunque algunos tamaños <strong>sí</strong> pueden agotarse. Las taquillas de Tomorrowland funcionan con código, sin llave. Algunas de DreamVille usan llave.",
      },
      {
        a: "Hay varios restaurantes en el festival. Los vales para las experiencias gastronómicas suelen ponerse a la venta a mediados de junio, y muchas opciones se agotan casi al instante.",
      },
      {
        a: "Antes había un restaurante secreto escondido dentro del Mainstage. Costaba unos 15.000 € para 12 personas. No hay fotos, porque dentro no se permiten móviles.",
      },
      {
        a: "El agua te la venden en lata o en botella sin tapón. Lleva una mochila de hidratación (camelback) <strong>vacía</strong> para llevar agua contigo: se rellena gratis en los baños. Beber agua del grifo es bajo tu responsabilidad, aunque a la mayoría no le sienta mal.",
      },
      {
        a: "Tomorrowland no deja entrar <strong>ninguna</strong> botella de fuera salvo que esté vacía y sea plegable. Solo en DreamVille se puede llevar bebida propia. El cristal no está permitido ni en DreamVille ni en el recinto del festival. Los días de mucho calor puede que te dejen entrar una botella con tapón.",
      },
      {
        a: "¡Ponte crema solar y lleva agua! Hidratarse es muy importante cuando te pasas el día bailando, y mejor no subestimar el sol: otros años se han llegado a 38 grados. En los puntos de información (info points) dan crema solar gratis.",
      },
      {
        a: "Las Comfort areas (Mainstage, Library y Freedom Stage) tienen extras como pago con tarjeta, sitios exclusivos y una piscina. En horas punta pueden estar llenas. No se puede entrar bebida de fuera a las Comfort areas ni sacarla de ellas, porque tienen su propia carta de bebidas, algo más cara.",
      },
      { a: "Un camelback es muy útil si piensas quedarte en primera fila en algún escenario." },
      {
        a: "Protección auditiva. Entre la gente, cerca de los escenarios y en todo Tomorrowland la música está muy alta. ¡Recuerda que quieres seguir oyendo estos temazos cuando te jubiles!",
      },
      {
        a: "Un punto de encuentro: los móviles se quedan sin batería, la cobertura puede ser mala y la gente se pierde entre la multitud. Habla con tu grupo y acordad un sitio al que ir si os perdéis. Casi todo el mundo elige algún punto reconocible del Mainstage.",
      },
      {
        a: "La Ferris Wheel (la noria) es gratis y preciosa, sobre todo de noche. Se accede por el lado izquierdo del Freedom Stage. Si llueve, la cierran.",
      },
      {
        a: "Cada año el Mainstage tiene un espectáculo de apertura en el que el escenario cobra vida. Suele ser todos los días hacia las 17:00, hora local. También hay pequeños espectáculos entre sets: los reconocerás por los huecos de 5 minutos en el horario.",
      },
      {
        a: "En todos los puestos de información hay un horario y un mapa en papel, gratis y de bolsillo. También te recomendamos descargar la Tomorrowland Festival App (icono rosa): puedes marcar tus artistas favoritos y te ayuda a montar tu propio horario.",
      },
      {
        a: "Las distancias entre escenarios son largas. Ir del Mainstage al Freedom Stage puede llevarte hasta 30 minutos. Tenlo en cuenta al planear tu horario para no perderte tus sets favoritos.",
      },
      {
        a: "Cada noche, después del último artista, hay un espectáculo final (endshow) en el Mainstage. Es el mismo todas las noches, así que elige el día que mejor te venga. ¡Mucha gente lo guarda para el último día!",
      },
    ],
  },
  {
    id: "dreamville",
    title: "Consejos para DreamVille",
    items: [
      {
        a: `Hay varios tipos de alojamiento en DreamVille. El camping básico se llama "Magnificent Greens", y todos los alojamientos tienen acceso a la zona de Magnificent Greens. El resto se reparte en otras zonas: Montagoe (por ejemplo DreamLodge, Cabanas, Relax Rooms, Kokono, Noctis, Astera, Luna, Ensuite y Mansions), Friendship Garden, Camp2Camp y Easy Tent. No puedes entrar en zonas de alojamiento distintas de la tuya.`,
      },
      {
        a: "Al llegar, pregunta qué zonas se han llenado ya. Recuerda que casi todo el personal son voluntarios, así que la información puede no ser correcta. Normalmente Magnificent Greens se va llenando desde la entrada 2 (este) hacia la entrada 1 (oeste), salvo la zona naranja junto a la entrada 1, que se llena desde ese lado.",
      },
      {
        a: "Dentro hay un supermercado Lidl por si quieres comprar ingredientes o cualquier otra cosa. El Lidl de DreamVille solo acepta tarjeta de crédito o débito.",
      },
      { a: "En DreamVille hay muchas barbacoas y hamacas de uso gratuito." },
      {
        a: "El agua te la venden casi siempre sin tapón o en lata, así que lleva la tuya o compra botellas en el Lidl. Puedes rellenar gratis en los baños.",
      },
      {
        a: "En la DreamVille Camping Store venden tiendas, sillas, sacos de dormir, colchones hinchables, carpas (gazebos) y cosas parecidas a un precio razonable.",
      },
      {
        a: "El material incluido en tu paquete de tienda, y lo que compres en la venta de extras (add-on sale), se recoge cerca de las dos entradas de DreamVille.",
      },
      { a: "¡Asegúrate de que tu tienda sea de calidad! Algunas de las que se venden en DreamVille <strong>no</strong> aguantan el agua cuando el tiempo es muy malo." },
      {
        a: "Si hay viento fuerte, el personal desmonta todas las carpas. Las tiendas normales las dejan, pero a todos os conviene que estén bien sujetas al suelo y unas a otras.",
      },
      { a: "Si quieres echarte siestas, plantéate llevar un antifaz." },
      {
        a: "En Bélgica llueve mucho. En 2013, 2015, 2017 y 2023 llovió muchísimo, así que impermeabiliza tu tienda y asegúrate de que no salga volando. Guarda la ropa en una bolsa de basura para que no se moje.",
      },
      {
        a: "En DreamVille hay bastantes robos. Si llevas objetos de valor, compra antes un vale de taquilla o un candado para la tienda. ¡Las Easy Tent ya vienen con candado! Hay ladrones que rajan las tiendas, así que nunca dejes nada de valor dentro.",
      },
      { a: "Los sacos de dormir de las Easy Tent son de talla única. Tenlo en cuenta." },
      {
        a: "Tanto DreamVille como Tomorrowland alquilan baterías a buen precio que puedes cambiar por una cargada cuando quieras, aunque puede que no te la den llena del todo. También puedes llevar la tuya, claro, pero ten en cuenta que muy pocos alojamientos tienen enchufe. En Magnificent Greens no hay electricidad, y si acaparas los enchufes de las duchas los demás no te lo agradecerán.",
      },
      {
        a: "DreamVille tiene dos tipos de duchas: interiores y exteriores. Las interiores cuestan un par de perlas y tienen agua caliente. Mira el horario de cada zona de duchas, porque algunas solo abren de día y no de noche cuando acaba el festival. Si no quieres hacer cola, ve muy temprano. Las exteriores son gratis y están abiertas toda la noche. Algunas tienen agua caliente incluso de noche, pero la mayoría solo tiene agua fría, que se agradece los días de calor.",
      },
      {
        a: "En DreamVille apenas hay sombra: prácticamente no hay árboles. Hay algunas carpas públicas, pero pueden llenarse. Si podéis, comprad una carpa para el grupo.",
      },
      {
        a: "Las distancias son largas. De una entrada de DreamVille a la otra hay entre 20 y 30 minutos, y luego otros 10–15 minutos hasta la puerta de Tomorrowland. Ten en cuenta también las distancias dentro del festival: del Mainstage al Freedom Stage puedes tardar hasta 30 minutos, o más si los caminos están llenos.",
      },
      {
        a: "Regla general: cuanto más caro es el camping, más cerca está del recinto del festival. Magnificent Greens es lo más lejano y Mansions lo más cercano.",
      },
      {
        a: "El parking, los shuttles, las taquillas y otros extras se compran en la venta de extras (add-on sale). Si quedan, también se pueden comprar allí. La venta de extras suele abrir a mediados de julio, y algunas opciones populares se agotan rápido.",
      },
      { a: "Hay taquillas tanto en DreamVille como en Tomorrowland. Algunos tamaños se agotan, pero no todos." },
      {
        a: "Fuera de DreamVille hay tiendas con más existencias por si las de dentro se quedan sin algo. La más popular es el Carrefour, a unos 15 minutos andando de la entrada 2 (este) de DreamVille.",
      },
      {
        a: "Si llegas pronto, montar la tienda será una locura: es una carrera por pillar más sitio. Si llegas más tarde estarás más al fondo, pero más tranquilo y con más espacio. Además, de noche habrá menos ruido.",
      },
      { a: "Si puedes, monta la tienda en el camino y luego llévala ya montada hasta tu sitio." },
      {
        a: "Bolsas de basura: aunque tengas papeleras cerca, te facilitan mucho la vida. El personal de DreamVille a veces las da.",
      },
      { a: "La cinta americana es clave para arreglar zapatos, tiendas y carpas, ¡y te salvará en mil situaciones!" },
      {
        a: "Ropa de abrigo: de noche puede hacer <strong>mucho</strong> frío. Lleva pantalones largos, calcetines gordos y sudaderas para dormir.",
      },
      {
        a: "Bolsas impermeables: guárdalo todo en bolsas estancas o de basura. Puede que tu mochila se moje, ¡pero así al menos tus cosas seguirán secas!",
      },
      {
        a: "Comida y bebida: lleva provisiones de sobra a la tienda. No hay nada peor que despertarse con hambre o sed y tener que caminar para conseguir algo. Como mínimo, acuérdate de comprar algo de beber.",
      },
      {
        a: "En DreamVille <strong>no</strong> se permiten botellas de cristal, y eso incluye los perfumes. Compra botellas de plástico y rellénalas. Hay límites para todo excepto el agua y los refrescos (por ejemplo, 6 latas de cerveza por persona), aunque no se suelen controlar mucho. Simplemente, no te pases.",
      },
      { a: "Chanclas: imprescindibles para ducharte y geniales para estar relajado. También las venden en las tiendas de DreamVille." },
      {
        a: "Las toallitas húmedas te salvan la vida: te quitas lo peor de la suciedad sin ir a la ducha. Fácil y práctico.",
      },
      {
        a: "DreamVille tiene dos entradas: una al oeste (entrada 1) y otra al este (entrada 2, antes conocida como \"the rainbow\"). En las dos hay atención para problemas con la entrada, y cerca de ambas hay parking. Si compras parking en la venta de extras, elige la opción que corresponda a tu tipo de alojamiento o entrada. Al llegar, sigue las señales y <strong>no</strong> el GPS, porque cortan algunas carreteras y ponen desvíos.",
      },
      {
        a: "DreamVille puede ponerse dura: puede llover fuerte, hacer mucho frío y mucho viento. Prepararse bien es muy importante. Todo forma parte de la experiencia: ¡disfrútalo!",
      },
      {
        a: "Piensa antes de ir cómo vas a llevar tu material de camping. Lo más probable es que tengas que andar mucho desde el coche, el tren o el taxi hasta tu tienda, y un carrito puede marcar la diferencia entre ir un poco molesto y vivir un auténtico infierno. DreamVille tiene tablones de madera por todas partes, así que los carritos ruedan bien.",
      },
      {
        a: "Plantéate comprar una carpa para el grupo: da sombra, protege de la lluvia y es un sitio para estar juntos. Es muy buena idea y cuesta solo unos 40 €.",
      },
      {
        a: "La zona de Montagoe tiene una entrada aparte y está entre la entrada del festival y la entrada 1 de DreamVille. Algunos alojamientos de Montagoe incluyen toallas. Solo te las cambian si lo pides y se pagan aparte. Suele pasar en todos los alojamientos de gama más alta.",
      },
      {
        a: "Al dejar Montagoe después del festival, el personal de seguridad del alojamiento normalmente tiene que revisarlo. Tienen tu número de habitación y se van comunicando hasta comprobar que la has dejado en buen estado; entonces ya puedes irte.",
      },
    ],
  },
  {
    id: "hoteles",
    title: "Consejos para hoteles",
    items: [
      { a: "Los autobuses pueden llegar algo tarde y puede que los conductores no sepan bien adónde ir. ¡Prepárate para esperar!" },
      {
        a: "Oficialmente, los últimos autobuses salen una hora después de que acabe el festival, pero el personal se asegura de que nadie se quede tirado, salvo que llegues tardísimo. No te quedes por el Mainstage después del último set. Desde la salida hay unos 45 minutos andando hasta los autobuses de Global Journey y unos 15 hasta los City Shuttles.",
      },
      {
        a: "Es <strong>muy importante</strong> que sepas dónde y cuándo salen tus autobuses. Apúntate bien el sitio, porque puede que el personal <strong>no</strong> lo sepa. Sigue las señales correctas en la salida: Global Journey Shuttles a la izquierda y City Shuttles a la derecha.",
      },
      {
        a: "Si tu hotel está en Amberes (Antwerp), puedes coger uno de los trenes nocturnos extra. El último sale unos 90 minutos después de que acabe el festival y solo para en Antwerp Berchem y Antwerp Central. Del festival a la estación hay unos 20–30 minutos andando: gira a la derecha al salir y sigue las señales del suelo. Los trenes se llenan de delante hacia atrás. Sigue las instrucciones del personal y no esperes en las escaleras a que abra otro vagón. Truco: el sábado y el domingo puedes comprar el llamado Weekend Ticket, que incluye la vuelta con un 50 % de descuento. Puede que el personal te diga que no vale para la vuelta del domingo porque ya es lunes: es falso. Si no te dejan subir, compra otro billete y luego reclama a atención al cliente, que te lo devolverán.",
      },
      {
        a: "Elige bien el hotel. A algunos cuesta llegar de noche, otros están lejos y unos son más bonitos que otros.",
      },
      {
        a: "Los hoteles de Global Journey tienen una sola salida de shuttle, a las 12:00 en punto. Normalmente solo los hoteles temáticos tienen dos horarios de salida. Si quieres dormir más, tendrás que ir al festival por tu cuenta: en tren por Amberes o Puurs (unos 12 € por persona) o en taxi (caro).",
      },
      {
        a: `Los shuttles de Global Journey te dejan cerca del festival. Para volver al hotel salen de un parking a unos 2,5 km (<a href="https://maps.app.goo.gl/gGYyYGwx19oEKbBM8">ubicación del shuttle hub</a>). Por el camino hay baños, agua gratis y normalmente algo de animación, y en el shuttle hub también hay puestos de comida y baños. Mira el panel grande para saber de qué andén sale tu shuttle. El personal comprueba la pulsera de shuttle que te dan al hacer el check-in en el hotel, y no puedes subir al shuttle de otro hotel. Los autobuses salen cuando se llenan, y el último sale aproximadamente una hora después de que acabe el festival. Del Mainstage al shuttle hub hay unos 45 minutos andando: tenlo en cuenta y no te quedes mucho después del endshow o podrías perder el autobús.`,
      },
      {
        a: "Hay un shuttle gratuito desde la rotonda cercana a la entrada principal hasta el shuttle hub de Global Journey, pero deja de funcionar unos 30 minutos antes de que acabe el festival. Si llueve mucho, puede que funcione algo más.",
      },
    ],
  },
  {
    id: "que-llevar",
    title: "Qué llevar",
    items: [
      {
        a: "Buen calzado: vas a andar y saltar muchísimo, así que es lo más importante. Se va a ensuciar y puede llover más de lo que imaginas, así que no esperes que tus zapatos vuelvan perfectos.",
      },
      {
        a: "Algo para llevar tus cosas: recomendamos pantalones cortos con bolsillos de cremallera. Hay quien prefiere riñonera. ¡Lo importante es que no te moleste cuando lo des todo bailando!",
      },
      {
        a: "Crema solar: vas a estar de fiesta al sol todo el día, todos los días. Usa protección alta y ponte a menudo. ¡Te puedes quemar aunque esté nublado! En los puntos de información la dan gratis.",
      },
      { a: "Gafas de sol: se pueden comprar en DreamVille y en Tomorrowland. Asegúrate de tener al menos unas, que vas a estar al sol." },
      {
        a: "Ropa de recambio: es obvio, pero como puede llover mucho, hacer mucho frío, mucho viento o mucho calor, lleva ropa para todo.",
      },
      {
        a: "Chubasquero: uno bueno te ahorrará muchos disgustos. Se venden en DreamVille y en Tomorrowland, pero mejor cómpralo antes. Un buen chubasquero sirve para sentarte encima, cabe en el bolsillo y no se rompe fácilmente.",
      },
      {
        a: "Botiquín: lo que creas que vas a necesitar. Preservativos, pastillas para el dolor de cabeza, tiritas, gel frío, etc. Ten en cuenta que los medicamentos con receta solo se permiten con un informe médico.",
      },
      { a: "Una bolsa estanca que se pueda cerrar: puede llover, así que mejor guardar ahí tus objetos de valor." },
      {
        a: "Algo de tu país: banderas, alcohol, snacks, accesorios… ¡Cualquier cosa especial para regalar a la gente que conozcas! Siempre es divertido conocer otras culturas y facilita mucho hacer amigos. Ojo: no se puede entrar comida ni bebida propia al recinto del festival; solo se permite en DreamVille.",
      },
      {
        a: "Efectivo y tarjeta: en Tomorrowland y DreamVille todo se paga con la pulsera, salvo algunos puestos especiales y el Carrefour de DreamVille. El efectivo también viene bien para hacer tratos con otra gente. Puedes recargar la pulsera con efectivo o con tarjeta, tanto en DreamVille como en Tomorrowland.",
      },
      { a: "Tapones para los oídos: la música está muy alta en Tomorrowland, y en DreamVille hay mucho ruido durante la noche." },
      {
        a: "IMPRÍMELO. TODO. O al menos ten copia de todos los documentos en el móvil. Si algo sale mal, es mucho más fácil enseñar en papel los recibos, las entradas y lo que haga falta.",
      },
      {
        a: "¡Prepárate para el tiempo! En 2023, por ejemplo, hubo más de 35 grados y además tormentas. El tiempo puede cambiar muy rápido.",
      },
      {
        a: "<strong>¡ACTITUD POSITIVA!</strong> Todo el mundo está ahí para pasarlo bien. Se romperán cosas, se te rasgará la ropa, te tirarán la bebida y en algún momento lloverá. Todo forma parte de la experiencia: ¡sonríe!",
      },
    ],
  },
  {
    id: "importante",
    title: "Información importante",
    items: [
      {
        a: "Resolver problemas con la pulsera puede llevar tiempo: hay quien ha esperado hasta 3 horas. La información no siempre llega a donde debería. Mantén la calma y recuerda que todos están haciendo su trabajo, y que muchos son voluntarios.",
      },
      {
        a: "No toques ninguna decoración ni en DreamVille ni en Tomorrowland. Son muy estrictos con esto y, si no haces caso, te quitan la pulsera. Sin pulsera no hay acceso.",
      },
      {
        a: "Las drogas están prohibidas. Basta una pastilla o un porro para que te expulsen. ¡No te juegues el fin de semana por las drogas! Tomorrowland es una experiencia mágica solo con agua y buena comida. Y sí, hay perros.",
      },
      {
        a: "Los palos selfi están permitidos hasta 1 metro de largo extendidos, y vienen muy bien para fotos de grupo. Eso sí, deja la Insta360 en casa: sobre todo molesta a los que tienes alrededor. Lo mismo con las banderas grandes o los tótems que tapan la vista a quien está detrás.",
      },
      { a: "Si haces fotos con el móvil, asegúrate de que se suben a la nube por si lo pierdes." },
      {
        a: "Casi todo el personal son voluntarios. Si quieres saber algo importante, asegúrate de que la persona a la que preguntas sabe de lo que habla, o pregunta a varias.",
      },
      {
        a: "Un taxi del aeropuerto de Bruselas a Tomorrowland cuesta unos 100–150 €, según la hora, el tráfico y el tamaño del grupo. Los puntos de información de DreamVille y de Tomorrowland te dan sus teléfonos, y siempre hay taxis cerca de la entrada 2 de DreamVille (este, antes \"the rainbow\"). También hay una parada de taxis para los visitantes de día cerca de la entrada principal del festival: sigue las señales (a la derecha al salir). Los taxis reservados de antemano solo pueden recogerte en las dos zonas Kiss & Ride, que están lejísimos; para una de ellas incluso hay que coger un shuttle. Recomendamos usar los City Shuttles o el transporte público.",
      },
      {
        a: "Un taxi desde Tomorrowland de noche puede costar <strong>mucho</strong> más que de día. No pierdas tus autobuses ni tu transporte. Pregunta el precio antes de subir y no pagues suplementos que no hayas acordado.",
      },
      {
        a: "Los taxistas también son humanos: no conocen todos los destinos y se pierden. En esos casos suelen ser justos con el precio.",
      },
      {
        a: "No hay WiFi público en Tomorrowland ni en DreamVille. Si necesitas internet todo el rato, compra una tarjeta prepago belga o asegúrate de que la tuya funciona en el extranjero.",
      },
      {
        a: "Hay carteristas por todas partes. Ten bien guardados el móvil, la cartera, el pasaporte y todos tus objetos de valor, sobre todo cerca del Mainstage. Entre la multitud es muy fácil robar.",
      },
      {
        a: "Tomorrowland ya no regala ponchos cuando llueve. Puedes comprar uno en los puntos de información y en algunas barras por 6 perlas, o un chubasquero en las Tomorrowland Stores de DreamVille o del recinto del festival.",
      },
      {
        a: "El dinero que necesitas depende sobre todo de cuánto alcohol bebas. Con unas 15–30 perlas al día te llega para comida y bebida sin alcohol. En la wiki de r/Tomorrowland (página de índice) hay precios de ediciones anteriores.",
      },
      { a: `Todos los números del periódico de Tomorrowland están <a href="https://issuu.com/tomorrowlandtoday">aquí</a>.` },
      {
        a: "Fíjate bien en cuántas perlas te cobran al pedir. Pueden equivocarse sin querer y cobrarte de más. Si ves un error, pregunta.",
      },
      { a: "El jueves y el viernes hay shuttles gratis desde la estación de Boom hasta DreamVille, y el lunes de vuelta a la estación." },
      {
        a: `La radio propia de Tomorrowland, <a href="https://oneworldradio.tomorrowland.com/">One World Radio</a>, emite en directo desde el festival. Puedes visitar el estudio, que está al lado del Cage Stage. ¡Hasta puede que te cruces con alguno de tus artistas favoritos!`,
      },
      {
        a: `Puedes usar solo el vuelo de vuelta de tu paquete Global Journey; basta con avisar a Tomorrowland por correo con antelación. Si no coges el vuelo de ida y no lo has avisado antes, el de vuelta se cancela automáticamente. Correo: <a href="mailto:info@globaljourney.com">info@globaljourney.com</a>`,
      },
    ],
  },
];
