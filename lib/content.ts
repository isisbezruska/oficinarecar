/**
 * Catálogo das fotos e dos textos da página.
 *
 * Origem das imagens:
 * - `entrega-*.webp` — publicações do Instagram @recar_reparacao_automotiva,
 *   baixadas e convertidas para WebP. São 640px no lado maior, o máximo que o
 *   Instagram entrega publicamente; use-as só em grade/lightbox, nunca em hero.
 * - as demais — site antigo (https://oficinarecar.wixsite.com/recar), sobretudo
 *   a página /antesedepois.
 *
 * Cada alt descreve o que a foto realmente mostra — confira a imagem antes de
 * editar qualquer descrição aqui.
 */

export type Photo = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

/**
 * Enquadramento fechado na lataria: mostra o acabamento da pintura sem depender
 * de um modelo de carro específico e não quebra em nenhuma proporção de tela.
 */
export const aboutImage: Photo = {
  src: "/images/pintura-preta-polida.webp",
  alt: "Lateral de um carro preto com a pintura polida refletindo o entorno, ao lado da roda esportiva",
  width: 960,
  height: 720,
};

/**
 * Fachada da oficina na R. José Rubens de Lima, 400, com a placa da RECAR. Usada
 * no hero em tela cheia: com 1920px de largura, fica um pouco macia em telas de
 * alta densidade, o que o véu escuro por cima disfarça.
 */
export const shopImage: Photo = {
  src: "/images/recar-fachada-sao-braz.webp",
  alt: "Fachada da RECAR no bairro São Braz, em Curitiba, com a placa da oficina e um Fusca preto estacionado na frente",
  width: 1920,
  height: 961,
};

export const trustItems = [
  "+30 anos de experiência",
  "Orçamento sem compromisso",
  "Atendimento em Curitiba",
  "Equipe especializada",
] as const;

export const services = [
  {
    title: "Funilaria e reparo de colisão",
    description:
      "Recuperação de veículos batidos, com reparo de portas, capô, laterais, pinos e soldas.",
    featured: true,
    image: {
      src: "/images/antes-cruze-frente.jpg",
      alt: "Chevrolet Cruze com danos de colisão na dianteira antes do reparo",
      width: 575,
      height: 1024,
    },
  },
  {
    title: "Pintura automotiva",
    description:
      "Repintura e acerto de cor, em pinturas comuns e especiais. Parceria com a Tropical Tintas há mais de vinte anos.",
    featured: true,
    image: {
      src: "/images/depois-cruze-frente.jpg",
      alt: "Chevrolet Cruze com a funilaria e a pintura refeitas após o reparo",
      width: 575,
      height: 1024,
    },
  },
  {
    title: "Martelinho de ouro",
    description:
      "Amassados tratados com martelinho de ouro, no mesmo cuidado da funilaria.",
    featured: false,
  },
  {
    title: "Recuperação de rodas",
    description: "Reparo e renovação do acabamento de rodas, inclusive superfícies diamantadas.",
    featured: false,
  },
  {
    title: "Polimento",
    description:
      "Polimento técnico, com proteção por selagem, cristalização ou vitrificação.",
    featured: false,
  },
  {
    title: "Estética automotiva",
    description:
      "Detalhamento do veículo: lavagem, higienização interna e limpeza de rodas e motor.",
    featured: false,
  },
] as const;

export type Comparison = {
  title: string;
  before: Photo;
  after: Photo;
};

/** Comparativos identificados de serviços executados pela própria oficina. */
export const collisionComparisons: Comparison[] = [
  {
    title: "Recuperação dianteira após colisão",
    before: {
      src: "/images/antes-cruze-frente.jpg",
      alt: "Dianteira de um Chevrolet Cruze bastante danificada antes do reparo",
      width: 575,
      height: 1024,
    },
    after: {
      src: "/images/depois-cruze-frente.jpg",
      alt: "Chevrolet Cruze visto pela dianteira depois da recuperação",
      width: 575,
      height: 1024,
    },
  },
  {
    title: "Recuperação traseira e lateral",
    before: {
      src: "/images/antes-cruze-traseira.jpg",
      alt: "Traseira e lateral de um Chevrolet Cruze danificadas antes do reparo",
      width: 575,
      height: 1024,
    },
    after: {
      src: "/images/depois-cruze-traseira.jpg",
      alt: "Chevrolet Cruze visto pela traseira depois da recuperação",
      width: 575,
      height: 1024,
    },
  },
  {
    title: "Funilaria e pintura",
    before: {
      src: "/images/antes-gol.jpg",
      alt: "Paralama dianteiro de um Volkswagen Gol amassado antes do reparo",
      width: 575,
      height: 1024,
    },
    after: {
      src: "/images/depois-gol.jpg",
      alt: "Volkswagen Gol com o paralama recuperado e a pintura finalizada",
      width: 575,
      height: 1024,
    },
  },
  {
    title: "Reparo localizado de lataria",
    before: {
      src: "/images/antes-audi.jpg",
      alt: "Traseira de um Audi com amassado próximo à lanterna antes do reparo",
      width: 575,
      height: 1024,
    },
    after: {
      src: "/images/depois-audi.jpg",
      alt: "Traseira do Audi recuperada e com o acabamento finalizado",
      width: 575,
      height: 1024,
    },
  },
  {
    title: "Recuperação de roda diamantada",
    before: {
      src: "/images/antes-roda.jpg",
      alt: "Roda diamantada Volkswagen com marcas antes da recuperação",
      width: 575,
      height: 1024,
    },
    after: {
      src: "/images/depois-roda.jpg",
      alt: "Roda Volkswagen depois da recuperação e renovação do acabamento",
      width: 575,
      height: 1024,
    },
  },
];

export const aestheticPhotos: Array<Photo & { title: string }> = [
  {
    src: "/images/antes-farol.jpg",
    alt: "Farol opaco antes do processo de restauração",
    width: 575,
    height: 1024,
    title: "Restauração de faróis — antes",
  },
  {
    src: "/images/depois-farol.jpg",
    alt: "Farol transparente depois do processo de restauração",
    width: 575,
    height: 1024,
    title: "Restauração de faróis — depois",
  },
  {
    src: "/images/antes-depois-bancos-tecido.jpg",
    alt: "Comparativo de bancos de tecido antes e depois da higienização",
    width: 575,
    height: 1024,
    title: "Higienização de bancos de tecido",
  },
  {
    src: "/images/antes-depois-banco-couro.jpg",
    alt: "Banco de couro comparado antes e depois da limpeza",
    width: 575,
    height: 1024,
    title: "Limpeza de banco de couro",
  },
  {
    src: "/images/antes-depois-cromado.jpg",
    alt: "Peça cromada antes e depois da remoção de oxidação",
    width: 575,
    height: 1024,
    title: "Recuperação de cromados",
  },
  {
    src: "/images/antes-depois-plasticos.jpg",
    alt: "Plástico interno comparado antes e depois da revitalização",
    width: 575,
    height: 1024,
    title: "Revitalização de plásticos internos",
  },
  {
    src: "/images/antes-depois-polimento.webp",
    alt: "Pintura branca comparada antes e depois do polimento técnico",
    width: 575,
    height: 1024,
    title: "Polimento técnico",
  },
];

/**
 * Carros prontos, fotografados no mesmo ponto da oficina (o painel amarelo com a
 * marca da RECAR) antes de voltarem para o cliente. É o conjunto mais recente e o
 * que melhor mostra o carro do dia a dia, então abre a galeria.
 */
export const deliveredPhotos: Photo[] = [
  {
    src: "/images/entrega-toyota-corolla-branco.webp",
    alt: "Toyota Corolla branco pronto para a entrega",
    width: 640,
    height: 640,
  },
  {
    src: "/images/entrega-renault-captur.webp",
    alt: "Renault Captur marrom com a pintura refeita, pronto para a entrega na oficina",
    width: 624,
    height: 640,
  },
  {
    src: "/images/entrega-ford-fiesta-vermelho.webp",
    alt: "Ford Fiesta vermelho com a pintura polida, pronto para a entrega na oficina",
    width: 640,
    height: 640,
  },
  {
    src: "/images/entrega-renault-fluence-branco.webp",
    alt: "Renault Fluence branco pronto para a entrega",
    width: 640,
    height: 640,
  },
  {
    src: "/images/entrega-mitsubishi-lancer-branco.webp",
    alt: "Mitsubishi Lancer branco pronto após o serviço",
    width: 613,
    height: 640,
  },
  {
    src: "/images/entrega-bmw-preto.webp",
    alt: "BMW preto com a pintura espelhada, pronto para a entrega",
    width: 640,
    height: 640,
  },
  {
    src: "/images/entrega-hatch-prata.webp",
    alt: "Hatch prata com a frente recuperada e a pintura polida, pronto para a entrega",
    width: 512,
    height: 640,
  },
  {
    src: "/images/entrega-cupe-vermelho.webp",
    alt: "Cupê esportivo vermelho com a pintura refeita",
    width: 640,
    height: 640,
  },
  {
    src: "/images/entrega-perua-preta.webp",
    alt: "Perua preta com rack de teto, pronta para a entrega",
    width: 640,
    height: 640,
  },
  {
    src: "/images/entrega-sedan-fiat-preto.webp",
    alt: "Sedã Fiat preto com a pintura espelhada e rodas de liga, pronto para a entrega",
    width: 640,
    height: 640,
  },
];

export const steps = [
  {
    title: "Envie fotos",
    text: "Mostre pelo WhatsApp o que aconteceu com o veículo.",
  },
  {
    title: "Solicite seu orçamento",
    text: "Nossa equipe avalia o serviço necessário.",
  },
  {
    title: "Agende o reparo",
    text: "Combine o melhor momento para trazer seu veículo.",
  },
] as const;

/** Veículos recentes prontos para a entrega. */
export const galleryPhotos: Photo[] = deliveredPhotos;
