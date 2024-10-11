import React, { useContext } from 'react';
import { TemaContext } from '../API_context/TemaContext';

const AlterarTema = () => {
  const { tema, AlterarTema } = useContext(TemaContext);

  return (
    <button onClick={AlterarTema} style={{ marginBottom: '20px' }}>
      Alternar para o tema {tema === 'light' ? 'dark' : 'light'}
    </button>
  );
};

export default AlterarTema;