import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { LoginDiv, InputText, DivInputLogin, ButtonLogin, DivLoginInt, TituloLogin, BotaoLoginDiv, LinkLogin } from './styled'

const api = axios.create({
    baseURL: 'https://gerenciador-estoque-backend-gi4a.vercel.app',
});

const Login = () => {
    const [cpf, setUsername] = useState('');
    const [senha, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await api.post('/api/login', { cpf, senha });
            const { token } = response.data;
            localStorage.setItem('token', token);
            navigate('/Orcamento'); // *******************   CORRIGIR ESTA LINHA AQUI
        } catch (error) {
            console.error('Erro no login:', error);
            setError('Usuário ou senha inválidos');
        }
    };

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
                    <LinkLogin href='/'>Esqueci a Senha</LinkLogin>
                    <LinkLogin href='/criarLogin'>Criar Login</LinkLogin>
                </BotaoLoginDiv>

            </DivLoginInt>
        </LoginDiv>
    );
};

export default Login;