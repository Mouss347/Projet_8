import React, { useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import cards from "../../data/data.json";
import Collapse from "../Collapse";
import Stars from "../Stars";  // Import du nouveau composant

import leftArrow from "../../assets/img/angle-left.svg";
import rightArrow from "../../assets/img/angle-right.svg";

const Card = () => {
  const { id } = useParams();
  const card = cards.find((card) => card.id === id);

  if (!card) {
    return <Navigate to="/error" />;
  }

  //condition pour rediriger vers la page d'erreur en cas d'erreur dans l'id

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const totalImages = card.pictures.length;

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === totalImages - 1 ? 0 : prevIndex + 1));
  };
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? totalImages - 1 : prevIndex - 1));
  };

  return (
    <div className="container_logement">
      <div className="container_txt">
        {totalImages > 1 && (
          <div className="picture_nav">
            <img src={leftArrow} className="btn_prev" onClick={prevImage} alt="image précédente" />
            <p>{`${currentImageIndex + 1} / ${totalImages}`}</p>
            <img src={rightArrow} className="btn_next" onClick={nextImage} alt="image suivante" />
          </div>
        )}

        <div className="picture_slide">
          {totalImages === 1 ? (
            <img src={card.pictures[0]} alt={`Image 0`} />
          ) : (
            <img src={card.pictures[currentImageIndex]} alt={`Image ${currentImageIndex}`} />
          )}
        </div>
        <div className="content_card">
          <div className="content_presentation">
            <h1>{card.title}</h1>
            <h2>{card.location}</h2>
            <div className="content_tag">
              {card.tags.map((tag, index) => (
                <p key={index} className="tag">{tag}</p>
              ))}
            </div>
          </div>
          <div className="content_hote">
            <div className="hote">
              <h3>{card.host.name}</h3>
              <img src={card.host.picture} alt="image de l'hote" className="img_hote"/>
            </div>
            <Stars rating={card.rating} /> {/* Utilisation du composant pour les étoiles*/}
          </div>
        </div>
      </div>
      <div className="collapse_card">
        <Collapse className="description_collapse" 
                  title="Description" 
                  paragraphe={card.description} 
                />
        <Collapse className="equipements_collapse" 
                  title="Equipements" 
                  paragraphe={card.equipments.map((equipment, index) => 
                  <div key={index}>{equipment}</div>
                  )} 
                />
      </div>
    </div>
  );
};

export default Card;
