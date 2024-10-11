import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removerLivro } from '../redux/actions';

const ListaLivros = () => {
  const livros = useSelector(state => state.livros);
  const dispatch = useDispatch();

  const handleRemover = (id) => {
    dispatch(removerLivro(id));
  };

  return (
    <div>
      <h2>Lista de Livros</h2>
      <ul>
        {livros.map((livro) => (
          <li key={livro.id}>
            {livro.titulo} - {livro.autor}
            <button onClick={() => handleRemover(livro.id)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaLivros;