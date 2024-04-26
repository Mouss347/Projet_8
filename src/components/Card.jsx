import {useParams} from "react-router-dom";
import cards from "../data/data.json";

const find_card_id =(id) => {
    return cards.find((card)=> card.id === id);
}

const Card = () => {
    const{id} = useParams();
    const card = find_card_id(id);
    const pictures = livre.pictures;
  return (
    <div>
        <p>hjuuh {id}</p>
        <p>hjuuh {card.title}</p>
    </div>
  )
}

export default Card