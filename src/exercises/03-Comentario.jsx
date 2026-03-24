import { useState } from 'react';

export default function Comentario() {
  const [texto, setTexto] = useState('');
  const maxCaracteres = 140;

  const handleChange = (e) => {
    const novoTexto = e.target.value;
    if (novoTexto.length <= maxCaracteres) {
      setTexto(novoTexto);
    }
  };

  return (
    <div className="exercise">
      <h3>3. Textarea Controlado</h3>
      <textarea 
        value={texto}
        onChange={handleChange}
        placeholder="Escreva seu comentário (máx. 140 caracteres)"
        rows="4"
        cols="50"
      />
      <p>Caracteres: {texto.length}/{maxCaracteres}</p>
    </div>
  );
}
