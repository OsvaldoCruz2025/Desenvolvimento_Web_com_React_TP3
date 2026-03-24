import { useState } from 'react';

export default function TermosServico() {
  const [aceito, setAceito] = useState(false);

  return (
    <div className="exercise">
      <h3>2. Checkbox Controlado</h3>
      <label>
        <input 
          type="checkbox" 
          checked={aceito}
          onChange={(e) => setAceito(e.target.checked)}
        />
        Aceito os termos de serviço
      </label>
      <p>
        {aceito 
          ? "Você ACEITOU os termos" 
          : "Você NÃO aceitou os termos"
        }
      </p>
    </div>
  );
}
