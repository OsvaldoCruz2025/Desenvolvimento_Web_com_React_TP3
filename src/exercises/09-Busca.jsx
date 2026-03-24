import { useState } from 'react';

// Componente filho EntradaBusca
function EntradaBusca({ valor, onChange }) {
  return (
    <input 
      type="text" 
      value={valor}
      onChange={onChange}
      placeholder="Digite para buscar..."
    />
  );
}

// Componente filho ResultadoBusca
function ResultadoBusca({ termo }) {
  return (
    <p>Você está buscando: {termo || "(nada ainda)"}</p>
  );
}

// Componente pai Busca
export default function Busca() {
  const [termoBusca, setTermoBusca] = useState('');

  return (
    <div className="exercise">
      <h3>9. Elevação de Estado</h3>
      <EntradaBusca 
        valor={termoBusca} 
        onChange={(e) => setTermoBusca(e.target.value)}
      />
      <ResultadoBusca termo={termoBusca} />
    </div>
  );
}
