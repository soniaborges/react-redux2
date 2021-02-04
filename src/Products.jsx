import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function Products() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  return (
    <div style={panelStyle}>
      <h2>Flores Disponíveis</h2>
      
      <br/>

      <div style={cardsDivStyle}>
        {products.map((item) => (
          <div key={item.id} style={cardStyle}>
            <p>{item.nome}</p>
            <br/>   
            <p>R$ {item.preco.toFixed(2)}</p>
            <br/>
            <button
              onClick={() => dispatch({ type: 'ADD_TO_CART', id: item.id })}
            >
              Adicione ao carrinho
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

const panelStyle = {
  height: '100vh',
  width: '50vw',
  background: '#c5cae9',
  padding: '10px',
};

const cardStyle = {
  background: '#3f51b5',
  width: '120px',
  height: '150px',
  fontWeight: 'bold',
  borderRadius: '15px',
  margin: '5px',
  padding: '15px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignContent: 'center',
  textAlign: 'center',
};

const cardsDivStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
};
