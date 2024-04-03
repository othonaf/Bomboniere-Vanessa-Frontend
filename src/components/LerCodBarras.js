import Quagga from 'quagga';

export const initReader = (onDetected) => {
  Quagga.init({
    inputStream: {
      name: 'Live',
      type: 'LiveStream',
      target: '#interactive' // ID da Div
    },
    decoder: {
      readers: ['ean_reader'] // code_128_reader
    }
  }, function(err) {
    if (err) {
      console.log(err);
      return;
    }
    console.log('Inicialização concluída. Pronto para começar');
    Quagga.start();
    Quagga.onDetected(onDetected);
  });
};

export const stopReader = () => {
  Quagga.stop();
};
