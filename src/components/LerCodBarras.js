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
    },
    locator: {
      patchSize: "small", // tamanho do patch de busca
      halfSample: false // subamostragem da imagem para melhorar a performance
    },
    numOfWorkers: 3,
    frequency: 7, // ajustar a frequência de processamento
    locate: true // habilitar a localização do código de barras
  }, function (err) {
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
