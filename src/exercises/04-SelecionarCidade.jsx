import { useState } from 'react';

export default function SelecionarCidade() {
  const [cidade, setCidade] = useState('');

  return (
    <div className="exercise">
      <h3>4. Select Controlado</h3>
      <select value={cidade} onChange={(e) => setCidade(e.target.value)}>
        <option value="">Selecione uma cidade</option>
        <option value="São Paulo">São Paulo</option>
        <option value="Rio de Janeiro">Rio de Janeiro</option>
        <option value="Belo Horizonte">Belo Horizonte</option>
      </select>
      <p>Cidade selecionada: {cidade || "Nenhuma"}</p>
    </div>
  );
}
