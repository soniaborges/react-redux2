import todosProdutos from './todosProdutos';

const initialState = todosProdutos.map((item) => ({ ...item, qty: 0 }));

//a funcao vai conter dois parametros voltara o estado e fara diferente acoes sobre meu estado

export default function cart(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return state.map((item) => {
        item.id === action.id && item.qty++;
        return item;
      });

    case 'REMOVE_FROM_CART':
      return state.map((item) => {
        item.id === action.id && item.qty--;
        return item;
      });

    case 'CLEAR_CART':
      return state.map((item) => {
        item.qty = 0;
        return item;
      });

    default:
      return state;
  }
}


