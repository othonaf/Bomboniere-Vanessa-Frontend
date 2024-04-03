import { useState, useEffect, useRef } from 'react';
import Quagga from 'quagga';

export function LerCodBarras() {
  const [barcode, setBarcode] = useState(null);
  const scannerRef = useRef(null);
  

  useEffect(() => {
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
        readers: ["code_128_reader"]
      }
    }, function(err) {
      if (err) {
        console.log(err);
        return;
      }
      Quagga.start();
    });

    Quagga.onDetected((data) => {
      console.log(data.codeResult.code);
      setBarcode(data.codeResult.code);
      
    });

    return () => {
      Quagga.offDetected();
      Quagga.stop();
    };
  }, []);

  return { barcode, scannerRef };
}
