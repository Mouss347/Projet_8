import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="Error404">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
        {/* utilisation de link pour le renvoi vers la page d'accueil */}
      <Link to="/">Retourner sur la page d'accueil</Link>
    </div>
  );
}

export default Error;
