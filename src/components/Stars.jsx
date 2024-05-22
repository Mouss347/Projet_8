import star_actif from "../assets/img/star_actif.svg";
import star_inactif from "../assets/img/star_inactif.svg";

const Stars = ({ rating }) => {
  return (
    <div className="stars">
      {[...Array(5)].map((_, i) => (
        <img 
          key={i} 
          src={i < rating ? star_actif : star_inactif} 
          alt={i < rating ? "étoile active" : "étoile inactive"} 
        />
      ))}
    </div>
  );
};

export default Stars;
