import { useState } from 'react';

export default function GerenciadorTarefas() {
  const [descricao, setDescricao] = useState('');
  const [prioridade, setPrioridade] = useState('Média');
  const [filtro, setFiltro] = useState('Todas');
  const [tarefas, setTarefas] = useState([]);

  const adicionarTarefa = () => {
    if (descricao.trim() === '') return;
    
    const novaTarefa = {
      id: Date.now(),
      descricao,
      prioridade
    };
    
    setTarefas([...tarefas, novaTarefa]);
    setDescricao('');
    setPrioridade('Média');
  };

  const removerTarefa = (id) => {
    setTarefas(tarefas.filter(tarefa => tarefa.id !== id));
  };

  const tarefasFiltradas = filtro === 'Todas' 
    ? tarefas 
    : tarefas.filter(tarefa => tarefa.prioridade === filtro);

  return (
    <div className="exercise">
      <h3>11. Lista de Tarefas com Formulário</h3>
      
      <div className="adicionar-tarefa">
        <h4>Adicionar Tarefa</h4>
        <input 
          type="text"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          placeholder="Descrição da tarefa"
        />
        <select value={prioridade} onChange={(e) => setPrioridade(e.target.value)}>
          <option value="Baixa">Baixa</option>
          <option value="Média">Média</option>
          <option value="Alta">Alta</option>
        </select>
        <button onClick={adicionarTarefa}>Adicionar</button>
      </div>

      <div className="filtro">
        <h4>Filtrar por prioridade</h4>
        <select value={filtro} onChange={(e) => setFiltro(e.target.value)}>
          <option value="Todas">Todas</option>
          <option value="Baixa">Baixa</option>
          <option value="Média">Média</option>
          <option value="Alta">Alta</option>
        </select>
      </div>

      <div className="lista-tarefas">
        <h4>Tarefas ({tarefasFiltradas.length})</h4>
        {tarefasFiltradas.length === 0 ? (
          <p>Nenhuma tarefa encontrada.</p>
        ) : (
          <ul>
            {tarefasFiltradas.map(tarefa => (
              <li key={tarefa.id}>
                {tarefa.descricao} - Prioridade: {tarefa.prioridade}
                <button onClick={() => removerTarefa(tarefa.id)}>Remover</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
