import React, { useContext } from 'react';
import AlterarTema from './components/AlterarTema';
import { TemaContext } from './API_context/TemaContext';
import FormularioLivros from './components/FormularioLivros';
import ListaLivros from './components/ListaLivros';

function App() {
  const { tema } = useContext(TemaContext);

  const appStyle = {
    backgroundColor: tema === 'light' ? '#f5f1e8' : '#2c2c2c',
    color: tema === 'light' ? '#3e3e3e' : '#f0e6d2',
    minHeight: '100vh',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: `'Merriweather', serif`,
    transition: 'all 0.3s ease-in-out',
  };

  const headerStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '20px',
    borderBottom: tema === 'light' ? '2px solid #c1a57b' : '2px solid #f0e6d2',
    paddingBottom: '10px',
    textAlign: 'center',
  };

  return (
    <div style={appStyle}>
      <h1 style={headerStyle}>Biblioteca dos Sonhos</h1>
      <AlterarTema />
      <FormularioLivros /> 
      <ListaLivros />
    </div>
  );
}

export default App;