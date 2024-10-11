
const initialState = {
    livros: []
  };


  const LivrosReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'Adicionar_Livro':
        return {
          ...state,
          livros: [...state.livros, action.payload]  // Adiciona o livro à lista
        };
      case 'Remover_Livro':
        return {
          ...state,
          livros: state.livros.filter(livro => livro.id !== action.payload)  // Remove o livro pelo ID
        };
      default:
        return state;
    }
  };
  
  export default LivrosReducer;