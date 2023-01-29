import imagen from '../../public/img/nosotros.jpg';
import styles from '~/styles/us.css';

export const meta = () => {
  return {
    title: 'GuitarraLA - Sobre Nosotros',
    description: 'GuitarraLA, Ventas de guitarras, blog de música y mas',
  };
};
export const links = () => {
  return [
    {
      rel: 'stylesheet',
      href: styles,
    },
    {
      rel: 'preload',
      href: imagen,
      as: 'image',
    },
  ];
};
const Nosotros = () => {
  return (
    <main className="container us-section">
      <h2 className="heading">Nosotros</h2>

      <div className="content">
        <figure>
          <img src={imagen} alt="Imagen sobre nosotros" />
        </figure>

        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            alias soluta doloribus harum ducimus dolore debitis ratione quasi
            assumenda odit eveniet atque perspiciatis facere eum temporibus
            deleniti libero, neque maxime?
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            alias soluta doloribus harum ducimus dolore debitis ratione quasi
            assumenda odit eveniet atque perspiciatis facere eum temporibus
            deleniti libero, neque maxime?
          </p>
        </div>
      </div>
    </main>
  );
};

export default Nosotros;
