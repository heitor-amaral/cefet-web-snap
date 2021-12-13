const filtro = document.querySelector('#filtro-da-foto');
const imagem = document.querySelector('#imagem');
const fotoSelecionada = document.querySelector('.foto-anotada > img');

filtro.addEventListener('input', () => {
    fotoSelecionada.style.filter = filtro.value;
});

imagem.addEventListener('change', event => {
    readImage(event.target.files[0]);
});


// Desafio 1
function readImage(imagem) {
    if (imagem.type && !imagem.type.startsWith('image/')) {
        return;
    }

    const leitor = new FileReader();
    leitor.addEventListener('load', (event) => {
        fotoSelecionada.src = event.target.result;
    });
    leitor.readAsDataURL(imagem);
}