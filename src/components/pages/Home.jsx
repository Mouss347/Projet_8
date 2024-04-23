import img_banner_home from '../../assets/img/banner_img1.png';

const Home = () => {
  return (
    <div className="home">
        <div className="banner">
          <img src= {img_banner_home} alt ="image de la mer et rocher"/>
          <h1>Chez vous, partout et ailleurs</h1>
        </div>
    </div>
  )
}

export default Home