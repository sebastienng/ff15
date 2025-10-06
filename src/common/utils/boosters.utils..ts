import type { CardType } from "../types/cards.type.";

export const generateBoosters = (
  commonCards: CardType[],
  rareCards: CardType[],
  totalBoosters: number
): {
  boosterId: string;
  commonCards: CardType[];
  rareCards: CardType[];
}[] => {
  const boosters = Array.from({ length: totalBoosters }, (_, index) => ({
    boosterId: `${index + 1}/${totalBoosters}`,
    commonCards: [...getRandomCards(commonCards, 8)],
    rareCards: [...getRandomCards(rareCards, 3)],
  }));
  return boosters;
};

const getRandomCards = (cards: CardType[], count: number) => {
  const shuffled = cards.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};
