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
        </button>
        <h4>{props.title}</h4>
      </div>
      {isOpen && <p>{props.paragraphe}</p>}
    </div>
  );
};

export default CollapseComponent;
