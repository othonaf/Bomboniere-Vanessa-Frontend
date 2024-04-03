import React, { useEffect, useRef, useState } from 'react';
import Quagga from 'quagga';

function Content() {
    const scannerRef = useRef(null);
    const [isScanning, setIsScanning] = useState(false);

    useEffect(() => {
        if (isScanning) {
            Quagga.init({
                inputStream: {
                    type: "LiveStream",
                    constraints: {
                        width: 640,
                        height: 480,
                        facingMode: "environment"
                    },
                    target: scannerRef.current
                },
                decoder: {
                    readers: ["ean_reader"]
                }
            }, function (err) {
                if (err) {
                    console.log(err);
                    return;
                }
                Quagga.start();
            });

            Quagga.onDetected(function (result) {
                console.log("Barcode detected and processed : [" + result.codeResult.code + "]",result);
            }); // 

            return () => {
                Quagga.offDetected();
                Quagga.stop();
            };
        }
    }, [isScanning]);

    return (
        <div>
            <button onClick={() => setIsScanning(!isScanning)}>
                {isScanning ? 'Parar Scanner' : 'Iniciar Scanner'}
            </button>
            <div id="interactive" className="viewport" ref={scannerRef} />
        </div>
    );
}

export default Content;
