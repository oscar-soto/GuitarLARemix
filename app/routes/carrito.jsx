import { useOutletContext } from '@remix-run/react';
import styles from '~/styles/cart.css';

export const meta = () => {
  return {
    title: 'GuitarraLA - Carrito de Compras',
    description:
      'GuitarraLA - Venta de guitarras, Música, Blog, Carrito de Compras, Tienda',
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
  const { cart } = useOutletContext();

  return (
    <main className="container">
      <h1 className="heading">Carrito de Compras</h1>

      <div className="content">
        <div className="cart">
          <h2>Articulos</h2>

          {cart.length > 0 &&
            cart.map((product) => (
              <div key={product.id} className="product">
                <div>
                  <img
                    src={product.image}
                    alt={`Imagen del producto ${product.name}`}
                  />
                </div>

                <div>
                  <p className="name">{product.name}</p>
                  <p>Cantidad {product.amount}</p>
                  
                  <p className="price">$ <span>{product.price}</span></p>
                  <p className="subtotal">Subtotal$ <span>{product.amount * product.price}</span></p>
                </div>
              </div>
            ))}
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
