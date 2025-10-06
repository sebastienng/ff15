import type { BoosterType } from "../../common/types/boosters.type";

import { Card } from "../Card/Card";
import { BoosterContainer, BoosterId, CardList } from "./Booster.style";

type BoosterProps = {
  booster: BoosterType;
};

export const Booster = ({ booster }: BoosterProps) => {
  return (
    <BoosterContainer>
      <BoosterId>Booster {booster.boosterId}</BoosterId>
      <CardList>
        {booster.commonCards.map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </CardList>
      <CardList>
        {booster.rareCards.map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </CardList>
    </BoosterContainer>
  );
};
