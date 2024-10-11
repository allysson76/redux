import React, { createContext, useState } from 'react';

export const TemaContext = createContext();

const TemaClaro = ({ children }) => {
  const [tema, setTema] = useState('light');  // O tema inicial será 'light' (claro)

  const AlterarTema = () => {
    setTema((prevTema) => (prevTema === 'light' ? 'dark' : 'light'));
  };

  return (
    <TemaContext.Provider value={{ tema, AlterarTema }}>
      {children}
    </TemaContext.Provider>
  );
};

export default TemaClaro;