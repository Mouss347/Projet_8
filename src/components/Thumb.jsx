import ProprTypes from "prop-types";
import {Link} from "react-router-dom";

const Thumb = ({cards}) => {
  return (
    cards.map((card) => (
        <Link to ={`/card/${card.id}`} className="thumb" key= {card.id}>
            <img src = {card.cover} alt={card.title}/>
            <h3>{card.title}</h3>
        </Link>
    ))
  )
}

Thumb.ProprTypes = {
    cards : ProprTypes.array.isRequired
}
export default Thumb