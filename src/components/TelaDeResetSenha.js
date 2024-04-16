import React, { useState,  } from 'react';
import axios from 'axios';
import { EnviarEmail, InputText, DivInput, Button, DivFormEmail, TituloReset, BotaoLoginDiv, InfoProduto } from './styled';
import { GiConfirmed } from "react-icons/gi";
import { TiWarning } from "react-icons/ti";

const backend = axios.create({ baseURL: 'https://gerenciador-estoque-backend-gi4a.vercel.app', })

function TelaDeResetSenha() {
    const [senha, setSenha] = useState('');
    const [data, setData] = useState('');
    const [error, setError] = useState(null);
    const [senhaConfirmacao, setSenhaConfirmacao] = useState('');

    const recuperaSenha = async () => {
        if (senha !== senhaConfirmacao) {
            setError('As senhas não coincidem');
            return;
        }
        try {
            const token = localStorage.getItem('token');
            const response = await backend.put('/api/resetaSenha',
                { senha },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            setData(response.data)
        } catch (error) {
            setError(error.response.data)
        }
    }

    return (
        <EnviarEmail>
            <DivFormEmail>
                <TituloReset>Digite a nova Senha:</TituloReset>
                <DivInput>
                    <InputText
                        type="text"
                        placeholder="Sua nova Senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    />
                </DivInput>
                <DivInput>
                    <InputText
                        type="password"
                        placeholder="Confirme a senha"
                        value={senhaConfirmacao}
                        onChange={(e) => setSenhaConfirmacao(e.target.value)}
                    />
                </DivInput>

                {error && <InfoProduto><TiWarning />{error}</InfoProduto>}
                {data && <InfoProduto><GiConfirmed /> {data}</InfoProduto>}
                <BotaoLoginDiv>
                    <Button onClick={recuperaSenha}>Enviar</Button>
                </BotaoLoginDiv>

            </DivFormEmail>

        </EnviarEmail>
    );
}

export default TelaDeResetSenha;
