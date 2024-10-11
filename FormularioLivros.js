import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { adicionarLivro } from '../redux/actions';

const FormularioLivro = () => {
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const novoLivro = {
      id: Date.now(),
      titulo,
      autor
    };
    dispatch(adicionarLivro(novoLivro));
    setTitulo('');
    setAutor('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Título:</label>
        <input
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Autor:</label>
        <input
          type="text"
          value={autor}
          onChange={(e) => setAutor(e.target.value)}
          required
        />
      </div>
      <button type="submit">Adicionar Livro</button>
    </form>
  );
};

export default FormularioLivro;