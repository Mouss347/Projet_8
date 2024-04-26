import img_banner_home from '../../assets/img/banner_img1.png';
import Thumb from '../Thumb';
import cards from '../../data/data.json'

const Home = () => {
  return (
    <div className="home">
        <div className="banner">
          <img src= {img_banner_home} alt ="image de la mer et rocher"/>
          <h1>Chez vous, partout et ailleurs</h1>
        </div>
        <div className="gallery">
          <Thumb cards = {cards}/> 
          {/* transfere ma variable card dans une props card et je les transfere au composant thumb */}
        </div>
    </div>
  )
}

export default Home