import estilo from './area-administrador.module.css'
import logo from '../../assets/logo.jfif'
import axios, { Axios } from "axios";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Administrador() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();

    async function handleLogin(e) {
        e.preventDefault(); 

        try {
            const res = await axios.post(
                'https://countable-dismiss-undoing.ngrok-free.dev/adm/login',
                {
                    email: email,
                    senha: senha
                },
                {
                    headers: {
                        "ngrok-skip-browser-warning": "true"
                    }
                }
            );

            console.log(res.data);
            
            localStorage.setItem("token", res.data.token);

            navigate("/Dashboard");

        } catch (erro) {
            console.error("Erro no login:", erro);
            alert("Email ou senha inválidos");
        }
    }
    return (
        <>
            <main className={estilo.main}>
                <div className={estilo.container_principal}>
                    <img src={logo} alt="" />
                    <h1>Área Administrativa</h1>
                    <p>Acesso exclusivo para a equipe Realizeventos</p>
                    <div className={estilo.container_linhas}>
                        <div className={estilo.linha1}></div>
                        <p>Login</p>
                        <div className={estilo.linha2}></div>
                    </div>
                    <div className={estilo.container_login}>
                        <form onSubmit={handleLogin}>
                            <input 
                            type="email" 
                            placeholder='Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                            <input type="password" 
                            placeholder='Senha' 
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}/>

                            <p>Credenciais padrão: admin@realizeeventos.com.br / Realize@2024</p>

                            <button type='submit'>ENTRAR NO PAINEL</button>
                        </form>
                    </div>
                    <a href="/">← Voltar ao site</a>
                </div>
                <footer className={estilo.footer}>© 2026 Realize Eventos</footer>
            </main>
        </>
    )
}
export default Administrador;