import { useState } from 'react';

export default function FormularioSenha() {
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const senhasCoincdem = senha === confirmarSenha && senha !== '';

  return (
    <div className="exercise">
      <h3>8. Validação Simples</h3>
      <div>
        <label>Senha:</label>
        <input 
          type="password" 
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
      </div>
      <div>
        <label>Confirmar Senha:</label>
        <input 
          type="password" 
          value={confirmarSenha}
          onChange={(e) => setConfirmarSenha(e.target.value)}
        />
      </div>
      {senha && confirmarSenha && (
        <p style={{ color: senhasCoincdem ? 'green' : 'red' }}>
          {senhasCoincdem ? 'Senhas coincidem' : 'Senhas diferentes'}
        </p>
      )}
      <button disabled={!senhasCoincdem}>Cadastrar</button>
    </div>
  );
}
