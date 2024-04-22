import logokasa from "../assets/img/logo.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
       <img src= {logokasa} alt ="logo kasa"/>
       <nav>
        <ul>
            <NavLink to="/" className={({isActive}) => (isActive ? 'underline' : "")}>
                <li>Accueil</li>
            </NavLink>
            {/* Au clique de chaque Li on change l'url selon le Li selectionner */}
            {/* si il est activer alor underline si non alors rien */}
            <NavLink to="/About"  className={({isActive}) => (isActive ? 'underline' : "")}> 
                <li>A propos</li>
            </NavLink>
        </ul>
       </nav>
    </div>
  )
}

export default Header