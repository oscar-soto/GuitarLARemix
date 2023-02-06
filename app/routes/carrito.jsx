import styles from '~/styles/cart.css';
export const meta = () => {
  return {
    title: 'GuitarraLA - Carrito de Compras',
    description: 'GuitarraLA - Venta de guitarras, Música, Blog, Carrito de Compras, Tienda',
  };
};

export const links = () => {
  return [
    {
      rel: 'stylesheet',
      href: styles,
    },
  ];
};

const Cart = () => {
  return (
    <main className="container">
      <h1 className="heading">Carrito de Compras</h1>

      <div className="content">
        <div className="cart">
          <h2>Articulos</h2>
        </div>

        <aside className="summary">
          <h3>Resumen del Pedido</h3>
          <p>Total de pagar: $</p>
        </aside>
      </div>
    </main>
  );
};

export default Cart;
