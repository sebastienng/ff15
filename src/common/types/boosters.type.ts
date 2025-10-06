import type { CardType } from "./cards.type.";

export type BoosterType = {
  boosterId: string;
  commonCards: CardType[];
  rareCards: CardType[];
};
