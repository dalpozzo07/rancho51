export const SITE = {
  name: "Rancho 51",
  tagline: "Autêntico até nos detalhes.",
  description:
    "Comida caseira, porções caprichadas e o sabor de churrasqueira que faz você querer voltar. Peça agora ou venha conhecer o Rancho 51.",
  instagram: {
    handle: "@botecorancho51",
    url: "https://www.instagram.com/botecorancho51/",
    bio: "Boteco raiz. Cerveja trincando. Petiscos direto da churrasqueira.",
  },
  whatsappNumber: "5542999521768",
  phoneDisplay: "(42) 99952-1768",
  address: {
    street: "R. Dr. Laranjeiras, 84",
    city: "Guarapuava",
    state: "PR",
    zip: "85010-030",
  },
  hours: {
    opens: "10h",
    // TODO: confirmar horário de fechamento e dias de funcionamento.
    note: "A partir das 10h",
  },
} as const;

const WHATSAPP_ORDER_MESSAGE = "Olá! Vim pelo site do Rancho 51 e quero fazer um pedido.";

export const DELIVERY_LINKS = {
  whatsapp: `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(WHATSAPP_ORDER_MESSAGE)}`,
  // TODO: preencher assim que os links estiverem disponíveis.
  ifood: "",
  aiqfome: "",
};

const FULL_ADDRESS = `${SITE.name}, ${SITE.address.street}, ${SITE.address.city} - ${SITE.address.state}, ${SITE.address.zip}`;

export const MAPS_EMBED_SRC = `https://www.google.com/maps?q=${encodeURIComponent(FULL_ADDRESS)}&output=embed`;

export const MAPS_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(FULL_ADDRESS)}`;
