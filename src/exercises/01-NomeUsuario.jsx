import { useState } from 'react';

export default function NomeUsuario() {
  const [nome, setNome] = useState('');

  return (
    <div className="exercise">
      <h3>1. Input Controlado Básico</h3>
      <input 
        type="text" 
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Digite seu nome"
      />
      <p>Seu nome é: {nome}</p>
    </div>
  );
}
