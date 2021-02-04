import todosProdutos from './todosProdutos';

const initialState = [...todosProdutos];

export default(state = initialState, action) =>{
    return state;
}