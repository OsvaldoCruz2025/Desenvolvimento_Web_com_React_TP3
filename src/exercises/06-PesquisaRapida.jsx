import { useRef, useState } from 'react';

export default function PesquisaRapida() {
  const inputRef = useRef(null);
  const [resultado, setResultado] = useState('');

  const handlePesquisar = () => {
    setResultado(inputRef.current.value);
  };

  return (
    <div className="exercise">
      <h3>6. Input Não Controlado com Ref</h3>
      <input 
        type="text" 
        ref={inputRef}
        placeholder="Digite algo para pesquisar"
      />
      <button onClick={handlePesquisar}>Pesquisar</button>
      {resultado && <p>Você pesquisou: {resultado}</p>}
    </div>
  );
}
