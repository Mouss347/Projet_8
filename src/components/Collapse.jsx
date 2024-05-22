import { useState } from 'react';
import icone from "../assets/img/angle-up.svg";

const CollapseComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <div className="container_collapse">
        <button className={`Button_collapse ${isOpen ? 'rotate' : ''}`} onClick={toggleCollapse}>
          <img src={icone} alt="icone" className={`icon ${isOpen ? 'rotate-icon' : ''}`} />
          {/* si il est ouvert alor ajouter la classe rotateicone a mon icone */}
        </button>
        <h4>{props.title}</h4>
      </div>
      {isOpen && <h5>{props.paragraphe}</h5>}
    </div>
  );
};

export default CollapseComponent;
