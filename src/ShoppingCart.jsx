import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

//importei os metodos do react-redux para recuperar estados

export default function ShoppingCart() {
  const dispatch = useDispatch();

//nessa funcao foi utuluzado para filtrar os items
  const cart = useSelector((state) =>
    state.cart.filter((item) => item.qty > 0)
  );

  //nessa funcao otem o acumulador para calcular a quantidade total
  const totalQty = useSelector((state) =>
    state.cart.reduce((acc, cur) => acc + cur.qty, 0)
  );

  //nessa funcao tem o acumulador e o item atual para calcular o valor total
  const totalPrice = useSelector((state) =>
    state.cart.reduce((acc, cur) => acc + cur.preco * cur.qty, 0)
  );

  return (
    <div style={panelStyle}>
      <h2>
        Carrinho de Compras ({totalQty})
        <button onClick={() => dispatch({ type: 'CLEAR_CART' })}>
          Limpe o seu carrinho

        </button>
      </h2>

      <br/>
      
      <br/>

      <table>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td style={{ width: '180px' }}>{item.nome}</td>
              <td style={{ width: '100px' }}>
                $ {(item.preco * item.qty).toFixed(2)}
              </td>
              <td style={{ width: '80px', textAlign: 'center' }}>
                <button
                  onClick={() =>
                    dispatch({ type: 'REMOVE_FROM_CART', id: item.id })
                  }
                >
                  -
                </button>

                {item.qty}

                <button
                  onClick={() => dispatch({ type: 'ADD_TO_CART', id: item.id })}
                >
                  +
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <br/>
      <hr/>
      <br/>

      <h4>Total: R$ {totalPrice.toFixed(2)}</h4>
    </div>
  );
}

const panelStyle = {
  height: '100vh',
  width: '50vw',
  background: '#80cbc4',
  padding: '10px',
};


