import img_banner_about from '../../assets/img/banner_img2.png';
import Collapse from '../Collapse';

const About = () => {

  return (
  <div className="container_about">
    <div className="about">
          <img src= {img_banner_about} alt ="image de montagnes"/>
    </div>

  <div className="collapses">
    <Collapse title="Fiabilité" 
      paragraphe 
        = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont réguliérement vérifiées par nos équipes."/>

    <Collapse title="Respect" 
      paragraphe 
        = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement desciminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme."/>

    <Collapse title="Service" 
      paragraphe 
        = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement desciminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme."/>

    <Collapse title="Sécurité" 
      paragraphe 
        = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critéres de sécurité établis par nos services. En laissant une notre aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des atelirs sur la sécurité domestique pour nos hôtes."/>
  </div>
</div>
  )
}

export default About