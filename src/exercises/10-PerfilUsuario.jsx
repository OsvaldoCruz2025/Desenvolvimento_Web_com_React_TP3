import { useState } from 'react';

export default function PerfilUsuario() {
  const [dados, setDados] = useState({
    nome: '',
    idade: '',
    newsletter: false,
    experiencia: '',
    biografia: ''
  });

  const [mostrarResumo, setMostrarResumo] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setDados(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMostrarResumo(true);
  };

  return (
    <div className="exercise">
      <h3>10. Formulário com Múltiplos Tipos</h3>
      <form onSubmit={handleSubmit}>
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
          <label>Idade:</label>
          <input 
            type="number" 
            name="idade"
            value={dados.idade}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>
            <input 
              type="checkbox" 
              name="newsletter"
              checked={dados.newsletter}
              onChange={handleChange}
            />
            Receber newsletter
          </label>
        </div>
        <div>
          <label>Nível de experiência:</label>
          <select name="experiencia" value={dados.experiencia} onChange={handleChange}>
            <option value="">Selecione</option>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
        </div>
        <div>
          <label>Biografia:</label>
          <textarea 
            name="biografia"
            value={dados.biografia}
            onChange={handleChange}
            rows="4"
          />
        </div>
        <button type="submit">Enviar</button>
      </form>

      {mostrarResumo && (
        <div className="resumo">
          <h4>Resumo do Perfil:</h4>
          <p><strong>Nome:</strong> {dados.nome}</p>
          <p><strong>Idade:</strong> {dados.idade}</p>
          <p><strong>Newsletter:</strong> {dados.newsletter ? 'Sim' : 'Não'}</p>
          <p><strong>Experiência:</strong> {dados.experiencia}</p>
          <p><strong>Biografia:</strong> {dados.biografia}</p>
        </div>
      )}
    </div>
  );
}
