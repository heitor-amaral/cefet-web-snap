const balaozinho = document.querySelector('#balaozinho');
const marcacoes = document.querySelectorAll('.marcacao');

marcacoes.forEach(marcacao => {
    marcacao.addEventListener('mouseover', (e) => {
        const mark = e.target

        const titulo = marcacao.getAttribute('data-titulo');
        const conteudo = marcacao.getAttribute('data-conteudo');
        const cor = marcacao.getAttribute('data-cor');

        balaozinho.innerHTML = `<h2>${titulo}</h2>
        <p>${conteudo}</p>`
        balaozinho.style.background = cor;
        balaozinho.style.top = `${e.pageY}px`;
        balaozinho.style.left = `${e.pageX}px`;
        
    })

    marcacao.addEventListener('mouseout', () => {
        balaozinho.innerHTML = '';
    })

    marcacao.addEventListener('mousemove', (event) => {
        balaozinho.style.left = `${event.pageX}px`;
        balaozinho.style.top = `${event.pageY}px`;
    })
})