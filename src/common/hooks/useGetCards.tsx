import CARDS from "../../assets/altered-data/SETS/CYCLONE/CYCLONE_EN.json";

export const useGetCards = () => {
  const commons = CARDS.filter(
    (card) =>
      !card.cardType.reference.includes("TOKEN") &&
      card.cardType.reference !== "HERO" &&
      card.rarity.reference === "COMMON"
  );
  const rares = CARDS.filter(
    (card) =>
      !card.cardType.reference.includes("TOKEN") &&
      card.cardType.reference !== "HERO" &&
      card.rarity.reference === "RARE"
  );

  const heroes = CARDS.filter((card) => card.cardType.reference === "HERO");

  return { commons, rares, heroes };
};
