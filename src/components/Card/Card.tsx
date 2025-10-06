import type { CardType } from "../../common/types/cards.type.";
import { CardContainer, CardImage } from "./Card.style";

type CardProps = {
  card: CardType;
};

export const Card = ({ card }: CardProps) => {
  return (
    <CardContainer>
      <CardImage src={card.imagePath} alt={card.name} />
    </CardContainer>
  );
};
