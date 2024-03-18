const delayTime = 500;

const atividades = [
  {
    title: "Certificados de conclusão",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt, purus nec lacinia aliquet, urna velit suscipit tortor, eget facilisis odio eros eget lectus.",
    images: Array<any>(9)
      .fill(0)
      .map((_, i) => `/atividades/certificados/${i}.webp`),
    url: "https://www.instagram.com/p/C1Up3GSO2yc/",
  },
  {
    title: "Primeiros socorros",
    description: "Capacitação com equipe técnica, coordenadores e monitores. Aulas de primeiros socorros com o corpo de bombeiros.",
    images: Array<any>(7)
      .fill(0)
      .map((_, i) => `/atividades/bombeiros/${i}.webp`),
    url: "https://www.instagram.com/p/Cwu6jg-Ox3o/",
  },
  {
    title: "Panificação",
    description: "Trabalhando capacitação e reinserção dos acolhidos atraves da profissionalização na área da panificação.",
    images: Array<any>(9)
      .fill(0)
      .map((_, i) => `/atividades/panificacao/${i}.webp`),
    url: "https://www.instagram.com/p/CwSInHOuF1r/",
  },
];

const equipe = [
  {
    name: "Genival Costa",
    imgSrc: "/equipe/genival.jpeg",
    role: "Diretor",
  },
  {
    name: "Asinete Montenegro",
    imgSrc: "/equipe/asinete.jpeg",
    role: "Pedagoga",
  },
  {
    name: "Flávia Saturnino",
    imgSrc: "/equipe/flavia.jpeg",
    role: "Psicóloga",
  },
  {
    name: "Mariana Julia",
    imgSrc: "/equipe/mariana.jpeg",
    role: "Assistente Social",
  },
  {
    name: "Robério",
    imgSrc: "/equipe/roberio.jpeg",
    role: "Terapeuta Holístico",
  },
  {
    name: "Angela Modesto",
    imgSrc: "/equipe/angela.jpeg",
    role: "Assistente Social",
  },
  {
    name: "Fabiano",
    imgSrc: "/equipe/fabiano.jpeg",
    role: "Monitor",
  },
  {
    name: "Manoel Cleures",
    imgSrc: "/equipe/manoel.jpeg",
    role: "Monitor",
  },
];

type Equipe = typeof equipe;
type Atividades = typeof atividades;

export type { Equipe, Atividades };

export default {
  get: (url: string) => {
    return new Promise<{ data: Equipe | Atividades }>((resolve, reject) => {
      setTimeout(() => {
        if (url === "/equipe") {
          resolve({ data: equipe });
        } else if (url === "/atividades") {
          resolve({ data: atividades });
        } else {
          reject(new Error("Not found"));
        }
      }, delayTime);
    });
  },
};
