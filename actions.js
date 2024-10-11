export const adicionarLivro = (livro) => {
    return {
      type: 'Adicionar_Livro',
      payload: livro
    };
  };


  export const removerLivro = (livroId) => {
    return {
      type: 'Remover_Livro',
      payload: livroId
    };
  };