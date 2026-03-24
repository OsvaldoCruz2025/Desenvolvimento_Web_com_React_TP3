import "./styles.css";
import NomeUsuario from "./exercises/01-NomeUsuario";
import TermosServico from "./exercises/02-TermosServico";
import Comentario from "./exercises/03-Comentario";
import SelecionarCidade from "./exercises/04-SelecionarCidade";
import Login from "./exercises/05-Login";
import PesquisaRapida from "./exercises/06-PesquisaRapida";
import FormularioContato from "./exercises/07-FormularioContato";
import FormularioSenha from "./exercises/08-FormularioSenha";
import Busca from "./exercises/09-Busca";
import PerfilUsuario from "./exercises/10-PerfilUsuario";
import GerenciadorTarefas from "./exercises/11-GerenciadorTarefas";
import CadastroUsuario from "./exercises/12-CadastroUsuario";

export default function App() {
  return (
    <div className="App">
      <h1>React - Exercícios de Formulários e Inputs</h1>
      <p className="subtitle">12 exercícios práticos do básico ao avançado</p>
      
      <div className="exercises-container">
        <NomeUsuario />
        <TermosServico />
        <Comentario />
        <SelecionarCidade />
        <Login />
        <PesquisaRapida />
        <FormularioContato />
        <FormularioSenha />
        <Busca />
        <PerfilUsuario />
        <GerenciadorTarefas />
        <CadastroUsuario />
      </div>
    </div>
  );
}
