const xMarcacao = document.querySelector('#x-da-marcacao');
const yMarcacao = document.querySelector('#y-da-marcacao');
const larguraMarcacao = document.querySelector('#largura-da-marcacao');
const alturaMarcacao = document.querySelector('#altura-da-marcacao');
const tituloMarcacao = document.querySelector('#titulo-da-marcacao');
const conteudoMarcacao = document.querySelector('#conteudo-da-marcacao');
const corMarcacao = document.querySelector('#cor-da-marcacao');
const formatos = ['formato-oval', 'formato-retangular'];
const formatList = formatos.map(format => document.querySelector(`input[value="${format}"]`));

let selecionada = document.querySelector('.selecionada');


const ancestral = document.querySelector('body');
const visibilidade = document.querySelector('#visibilidade-das-marcacoes');

visibilidade.addEventListener('input', () => {
    console.log("clicando")
    ancestral.classList.toggle(visibilidade.value, visibilidade.checked);
})

marcacoes.forEach(marcacao => {
    marcacao.addEventListener('click', () => {
        selecionada.classList.remove('selecionada');
        selecionada = marcacao;
        selecionada.classList.add('selecionada');

        xMarcacao.value = parseInt(selecionada.style.left);
        yMarcacao.value = parseInt(selecionada.style.top);
        larguraMarcacao.value = parseInt(selecionada.style.width);
        alturaMarcacao.value = parseInt(selecionada.style.height);
        tituloMarcacao.value = selecionada.dataset.titulo;
        conteudoMarcacao.value = selecionada.dataset.conteudo;
        corMarcacao.value = selecionada.dataset.cor;

        formatList.forEach(format => {
            format.checked = selecionada.classList.contains(format.value);
        });
    });
});

xMarcacao.addEventListener('input', () => {
    selecionada.style.left = `${xMarcacao.value}px`;
});
yMarcacao.addEventListener('input', () => {
    selecionada.style.top = `${yMarcacao.value}px`;
});
larguraMarcacao.addEventListener('input', () => {
    selecionada.style.width = `${larguraMarcacao.value}px`;
});
alturaMarcacao.addEventListener('input', () => {
    selecionada.style.height = `${alturaMarcacao.value}px`;
});
tituloMarcacao.addEventListener('input', () => {
    selecionada.dataset.titulo = tituloMarcacao.value;
});
conteudoMarcacao.addEventListener('input', () => {
    selecionada.dataset.conteudo = conteudoMarcacao.value;
});
corMarcacao.addEventListener('input', () => {
    selecionada.dataset.cor = corMarcacao.value;
});

formatList.forEach(format => {
    format.addEventListener('input', () => {
        formatos.forEach(form => selecionada.classList.remove(form));
        selecionada.classList.add(format.value);
    });
});