import React, { useState } from 'react';
import axios from 'axios';
import { LoginDiv, InputText, DivInputLogin, ButtonLogin, DivLoginInt, TituloLogin, BotaoLoginDiv, InfoProduto, ErrorMessage} from './styled';
import { TiWarning } from "react-icons/ti";

const api = axios.create({
    baseURL: 'https://gerenciador-estoque-backend-gi4a.vercel.app',
});

const CriarLogin = () => {
    const [cpf, setUsername] = useState('');
    const [senha, setPassword] = useState('');
    const [senhaConfirmacao, setSenhaConfirmacao] = useState('');
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null);


    const handleLogin = async () => {
        if (senha !== senhaConfirmacao) {
            setError('As senhas não coincidem');
            return;
        }
        try {
            const response = await api.post('/api/criarUsuario', { cpf, senha });
            setMessage(response.data)
        } catch (error) {
            console.error('Erro no login:', error);
            setError(error.response.data);
        }
    }

    return (
        <LoginDiv id='criarLogin'>
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
                        type="text"
                        placeholder="Nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
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
                <DivInputLogin>
                    <InputText
                        type="password"
                        placeholder="Confirme a senha"
                        value={senhaConfirmacao}
                        onChange={(e) => setSenhaConfirmacao(e.target.value)}
                    />
                </DivInputLogin>
                <DivInputLogin>
                    <InputText
                        type="text"
                        placeholder="E-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </DivInputLogin>
                <DivInputLogin>
                    <InputText
                        type="text"
                        placeholder="Telefone"
                        value={telefone}
                        onChange={(e) => setTelefone(e.target.value)}
                    />
                </DivInputLogin>
                <BotaoLoginDiv>
                    {message && <InfoProduto>{message}</InfoProduto>}
                    {error && <ErrorMessage className="error"><TiWarning/>{error}</ErrorMessage>}
                    <ButtonLogin onClick={handleLogin}>Criar</ButtonLogin>
                </BotaoLoginDiv>

            </DivLoginInt>
        </LoginDiv>
    );
};

export default CriarLogin;