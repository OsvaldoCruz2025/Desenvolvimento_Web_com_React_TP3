import { useState } from 'react';

export default function FormularioContato() {
  const [dados, setDados] = useState({
    nome: '',
    email: '',
    telefone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDados(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="exercise">
      <h3>7. Múltiplos Inputs Controlados</h3>
      <div>
        <label>Nome:</label>
        <input 
          type="text" 
          name="nome"
          value={dados.nome}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email:</label>
        <input 
          type="email" 
          name="email"
          value={dados.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Telefone:</label>
        <input 
          type="tel" 
          name="telefone"
          value={dados.telefone}
          onChange={handleChange}
        />
      </div>
      <div className="resultado">
        <h4>Dados em tempo real:</h4>
        <p>Nome: {dados.nome}</p>
        <p>Email: {dados.email}</p>
        <p>Telefone: {dados.telefone}</p>
      </div>
    </div>
  );
}
