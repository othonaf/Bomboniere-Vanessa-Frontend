import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { LoginDiv, InputText, DivInputLogin, ButtonLogin, DivLoginInt, TituloLogin, BotaoLoginDiv, LinkLogin } from './styled';
import Carregando from './Carregando';

const api = axios.create({
    baseURL: 'http://localhost:3003', //'https://gerenciador-estoque-backend-gi4a.vercel.app',
});

const Login = () => {
    const [cpf, setUsername] = useState('');
    const [senha, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false); 
    const navigate = useNavigate();

    const handleLogin = async () => {
        setLoading(true);
        try {
            const response = await api.post('/api/login', { cpf, senha });
            const { token } = response.data;
            localStorage.setItem('token', token);
            navigate('/PaginaDeNavegacao'); 
        } catch (error) {
            console.error('Erro no login:', error);
            setError('Usuário ou senha inválidos');
        }
        setLoading(false);
    };
    if (loading) {
        return <Carregando />;
    }

    return (
        <LoginDiv>
            <DivLoginInt>
                <TituloLogin>Login</TituloLogin>
                <DivInputLogin>
                    <InputText
                        type="text"
                        placeholder="CPF"
                        value={cpf}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </DivInputLogin>
                <DivInputLogin>
                    <InputText
                        type="password"
                        placeholder="Senha"
                        value={senha}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </DivInputLogin>
                {error && <p>{error}</p>}
                <BotaoLoginDiv>
                    <ButtonLogin onClick={handleLogin}>Entrar</ButtonLogin>
                    <LinkLogin href='/EnviarEmailRecupSenha'>Esqueci a Senha</LinkLogin>
                    <LinkLogin href='/criarLogin'>Criar Login</LinkLogin>
                </BotaoLoginDiv>

            </DivLoginInt>
        </LoginDiv>
    );
};

export default Login;