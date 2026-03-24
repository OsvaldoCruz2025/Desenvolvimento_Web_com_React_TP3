import { useState } from 'react';

// Componente para exibir resumo do cadastro
function ResumoCadastro({ dados }) {
  return (
    <div className="resumo-cadastro">
      <h4>Cadastro Realizado com Sucesso!</h4>
      <p><strong>Nome Completo:</strong> {dados.nome}</p>
      <p><strong>Email:</strong> {dados.email}</p>
      <p><strong>Tipo de Conta:</strong> {dados.tipoConta}</p>
    </div>
  );
}

export default function CadastroUsuario() {
  const [dados, setDados] = useState({
    nome: '',
    email: '',
    senha: '',
    confirmarSenha: '',
    tipoConta: 'pessoaFisica',
    termos: false
  });

  const [erros, setErros] = useState({});
  const [cadastroRealizado, setCadastroRealizado] = useState(false);
  const [dadosCadastrados, setDadosCadastrados] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setDados(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Validação em tempo real
    validarCampo(name, type === 'checkbox' ? checked : value);
  };

  const validarCampo = (campo, valor) => {
    let novoErro = '';

    switch(campo) {
      case 'nome':
        if (valor.length < 3 && valor.length > 0) {
          novoErro = 'Nome deve ter pelo menos 3 caracteres';
        }
        break;
      case 'email':
        if (valor && !valor.includes('@')) {
          novoErro = 'Email deve conter @';
        }
        break;
      case 'senha':
        if (valor.length < 6 && valor.length > 0) {
          novoErro = 'Senha deve ter pelo menos 6 caracteres';
        }
        break;
      case 'confirmarSenha':
        if (valor !== dados.senha) {
          novoErro = 'As senhas não coincidem';
        }
        break;
      default:
        break;
    }

    setErros(prev => ({
      ...prev,
      [campo]: novoErro
    }));
  };

  const formularioValido = () => {
    return (
      dados.nome.length >= 3 &&
      dados.email.includes('@') &&
      dados.senha.length >= 6 &&
      dados.senha === dados.confirmarSenha &&
      dados.termos &&
      !Object.values(erros).some(erro => erro !== '')
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formularioValido()) {
      setDadosCadastrados({
        nome: dados.nome,
        email: dados.email,
        tipoConta: dados.tipoConta === 'pessoaFisica' ? 'Pessoa Física' : 'Pessoa Jurídica'
      });
      setCadastroRealizado(true);
      
      // Limpar formulário
      setDados({
        nome: '',
        email: '',
        senha: '',
        confirmarSenha: '',
        tipoConta: 'pessoaFisica',
        termos: false
      });
      setErros({});
    }
  };

  return (
    <div className="exercise">
      <h3>12. Formulário de Cadastro com Validação</h3>
      
      {cadastroRealizado && dadosCadastrados && (
        <ResumoCadastro dados={dadosCadastrados} />
      )}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nome Completo: *</label>
          <input 
            type="text" 
            name="nome"
            value={dados.nome}
            onChange={handleChange}
            required
          />
          {erros.nome && <span className="erro">{erros.nome}</span>}
        </div>

        <div className="form-group">
          <label>Email: *</label>
          <input 
            type="email" 
            name="email"
            value={dados.email}
            onChange={handleChange}
            required
          />
          {erros.email && <span className="erro">{erros.email}</span>}
        </div>

        <div className="form-group">
          <label>Senha: *</label>
          <input 
            type="password" 
            name="senha"
            value={dados.senha}
            onChange={handleChange}
            required
          />
          {erros.senha && <span className="erro">{erros.senha}</span>}
        </div>

        <div className="form-group">
          <label>Confirmar Senha: *</label>
          <input 
            type="password" 
            name="confirmarSenha"
            value={dados.confirmarSenha}
            onChange={handleChange}
            required
          />
          {erros.confirmarSenha && <span className="erro">{erros.confirmarSenha}</span>}
        </div>

        <div className="form-group">
          <label>Tipo de Conta: *</label>
          <div>
            <label>
              <input 
                type="radio" 
                name="tipoConta"
                value="pessoaFisica"
                checked={dados.tipoConta === 'pessoaFisica'}
                onChange={handleChange}
              />
              Pessoa Física
            </label>
            <label>
              <input 
                type="radio" 
                name="tipoConta"
                value="pessoaJuridica"
                checked={dados.tipoConta === 'pessoaJuridica'}
                onChange={handleChange}
              />
              Pessoa Jurídica
            </label>
          </div>
        </div>

        <div className="form-group">
          <label>
            <input 
              type="checkbox" 
              name="termos"
              checked={dados.termos}
              onChange={handleChange}
            />
            Aceito os Termos de Uso *
          </label>
        </div>

        <button 
          type="submit" 
          disabled={!formularioValido()}
          className={formularioValido() ? 'ativo' : 'inativo'}
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}
