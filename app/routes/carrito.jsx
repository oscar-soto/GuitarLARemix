import { useOutletContext } from '@remix-run/react';
import { useEffect, useState } from 'react';
import { ClientOnly } from 'remix-utils';
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
  const [total, setTotal] = useState(0);
  const { cart, updateAmount, deleteGuitar } = useOutletContext();

  useEffect(() => {
    const sumTotal = cart.reduce(
      (total, product) => total + product.amount * product.price,
      0
    );

    setTotal(sumTotal);
  }, [cart]);

  return (
    <ClientOnly fallback={'Cargando...'}>
      {() => (
        <main className="container">
          <h1 className="heading">Carrito de Compras</h1>

          <div className="content">
            <div className="cart">
              <h2>Articulos</h2>

              {cart?.length > 0 &&
                cart?.map((product) => (
                  <div key={product.id} className="product">
                    <div>
                      <img
                        src={product.image}
                        alt={`Imagen del producto ${product.name}`}
                      />
                    </div>

                    <div>
                      <p className="name">{product.name}</p>
                      <p>Cantidad</p>

                      <select
                        value={product.amount}
                        className="select"
                        onChange={(e) =>
                          updateAmount({
                            amount: +e.target.value,
                            id: product.id,
                          })
                        }
                      >
                        <option value="0">-- Seleccione --</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>

                      <p className="price">
                        $ <span>{product.price}</span>
                      </p>
                      <p className="subtotal">
                        Subtotal$ <span>{product.amount * product.price}</span>
                      </p>
                    </div>

                    <button
                      type="button"
                      className="btn_delete"
                      onClick={() => deleteGuitar(product.id)}
                    >
                      x
                    </button>
                  </div>
                ))}
            </div>

            <aside className="summary">
              <h3>Resumen del Pedido</h3>
              <p>Total de pagar: ${total}</p>
            </aside>
          </div>
        </main>
      )}
    </ClientOnly>
  );
};

export default Cart;
