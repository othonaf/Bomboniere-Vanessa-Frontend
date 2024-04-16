import React, { useState,  } from 'react';
import axios from 'axios';
import { EnviarEmail, InputText, DivInput, Button, DivFormEmail, TituloReset, BotaoLoginDiv, InfoProduto } from './styled';
import { GiConfirmed } from "react-icons/gi";
import { TiWarning } from "react-icons/ti";



const backend = axios.create({ baseURL: 'https://gerenciador-estoque-backend-gi4a.vercel.app', })
//'https://gerenciador-estoque-backend-gi4a.vercel.app' = PRODUÇÃO
//'http://localhost:3003' = DESENVOLVIMENTO

function EnviarEmailRecupSenha() {
    const [email, setEmail] = useState('');
    const [data, setData] = useState('');
    const [error, setError] = useState(null);

    const recuperaSenha = async () => {
        try {
            const response = await backend.post('/api/emailResetaSenha',
                { email });
            setData(response.data)
        } catch (error) {
            setError(error.response.data)
        }
    }

    return (
        <EnviarEmail>
            <DivFormEmail>
                <TituloReset>Digite o E-mail cadastrado para recuperação de Senha:</TituloReset>
                <DivInput>
                    <InputText
                        type="text"
                        placeholder="Seu E-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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

export default EnviarEmailRecupSenha;
