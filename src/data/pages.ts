import { readImagesBySlugs } from "./images";
import { readLastWorks } from "./works";

export const readIndexPage = async () => {
  const COUNT = 3;

  const [[heroImg, formImg], works] = await Promise.all([
    readImagesBySlugs(["mes-inspirations-et-mes-techniques", "beaute-i"]),
    readLastWorks(COUNT),
  ]);

  return {
    contact: {
      content: "N’hésitez pas à m’écrire pour tout complément d’information. Je répondrai dans les plus brefs délais.",
      image: formImg,
      title: ["Vous souhaitez", "me contacter ?"],
    },
    hero: {
      button: "Me contacter",
      content: "Je vous aide à retrouver le calme intérieur et à exprimer votre créativité sans jugement à travers l’art et le yoga.",
      image: heroImg,
      title: ["Bienvenue!", "Je suis Eliana"],
    },
    quote: {
      author: "Wayne Dyer",
      sentence: `" Don’t die with your song still inside you"`,
    },
    works: {
      items: works,
      title: ["Mes dernières ", "créations"],
    },
  };
};
