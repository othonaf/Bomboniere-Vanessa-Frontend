import React, { useState, useRef } from 'react';
import Quagga from 'quagga';

function Content() {
    const [code, setCode] = useState('');
    const scannerRef = useRef(null);

    const iniciaLeitor = () => {
        Quagga.init({
            inputStream: {
                name: 'Live',
                type: 'LiveStream',
                target: scannerRef.current
            },
            decoder: {
                readers: ['ean_reader']
            }
        }, function (err) {
            if (err) {
                console.log(err);
                return;
            }
            console.log('Initialization finished. Ready to start');
            Quagga.start();
            Quagga.onDetected(onDetected);
        });
    };

    const stopReader = () => {
        Quagga.stop();
    };

    const onDetected = (data) => {
        setCode(data.codeResult.code);
        stopReader();
        console.log(data);
    };

    const copyCode = () => {
        navigator.clipboard.writeText(code)
            .then(() => {
                alert('Código de barras copiado com sucesso!');
            })
            .catch(() => {
                alert('Erro ao copiar Código de barras!');
            });
    };

    return (
        <div>
            <button onClick={iniciaLeitor}>
                Iniciar Leitura
            </button>
            {code && (
                <p>
                    Código Lido: {code}
                    <button onClick={copyCode}>
                        Copiar código
                    </button>
                </p>
            )}
            <div id="interactive" ref={scannerRef} />
        </div>
    );
}

export default Content;
