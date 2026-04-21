import estilo from './configuracao.module.css'
import { useState } from 'react'
import axios from 'axios'

function Configuração(){

    const [email, setEmail] = useState('');
    const [novaSenha, setNovaSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');

    async function alterarSenha() {
        if (novaSenha !== confirmarSenha) {
            alert("As senhas não coincidem!");
            return;
        }

        try {
            const res = await axios.put(
      "https://realizeventos.onrender.com/adm/alterar-senha",
      {
        email,
        novaSenha
      },
      {
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "true"
        }
      }
    );

            alert("Senha alterada com sucesso!");

            
            setEmail('');
            setNovaSenha('');
            setConfirmarSenha('');

        } catch (erro) {
            console.error("Erro ao alterar senha:", erro);
            alert("Erro ao alterar senha");
        }
    }

    return(
        <div className={estilo.app}>
            <main className={estilo.dashboard}>

                <div className={estilo.topbar}>
                    <h2>Configurações</h2>
                    <span>{new Date().toLocaleDateString('pt-BR')}</span>
                </div>

                <div className={estilo.content}>
                    <div className={estilo.actions}>
                        <h4>Configurações do Painel</h4>
                    </div>

                    <div className={estilo.recent}>
                        <h4>Alterar Senha de Acesso</h4>

                        <label>Email de Acesso</label>
                        <input 
                            type="email" 
                            placeholder='Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <label>Nova Senha</label>
                        <input 
                            type="password" 
                            placeholder='Nova Senha'
                            value={novaSenha}
                            onChange={(e) => setNovaSenha(e.target.value)}
                        />

                        <label>Confirmar Nova Senha</label>
                        <input 
                            type="password" 
                            placeholder='Confirmar Senha'
                            value={confirmarSenha}
                            onChange={(e) => setConfirmarSenha(e.target.value)}
                        />

                        <button onClick={alterarSenha}>
                            SALVAR ALTERAÇÕES
                        </button>
                    </div>
                </div>


            </main>
        </div>
    )
}

export default Configuração;