import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

function VerificaAutenticacao({ children }) {
    const navigate = useNavigate();
    const location = useLocation();

    
    useEffect(() => {
        const verificaToken = async () => {
            const token = localStorage.getItem('token');
            //console.log(token)
            if (!token) {
                navigate('/Login');
            } else {
                try {
                    //'http://localhost:3003/api/testaToken' 
                    const response = await axios.get('https://gerenciador-estoque-backend-gi4a.vercel.app', {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    });
                    //console.log(response)
                    if (response.data === 'Token é válido') {
                        navigate(location.pathname, { replace: true });
                    } else {
                        navigate('/Login');
                    }
                } catch (error) {
                    console.error(error);
                    navigate('/Login');
                }
            }
        };
        verificaToken();
    }, [location.pathname, navigate]);

    // Renderiza os filhos se o token for válido, caso contrário, nada será renderizado.
    const token = localStorage.getItem('token');
    return token ? children : null;
}

export default VerificaAutenticacao;
