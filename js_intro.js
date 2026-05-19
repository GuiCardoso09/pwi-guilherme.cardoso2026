document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os links que apontam para o conteúdo
    const links = document.querySelectorAll('a[target="conteudo-pilar"]');
    const intro = document.getElementById('intro-texto');
    const iframe = document.getElementById('iframe-conteudo');
    const formFrame = document.querySelector('.form-iframe');

    links.forEach(link => {
        link.addEventListener('click', function() {
            if (intro && iframe) {
                // Esconde o texto de introdução e o formulário
                intro.style.display = 'none';
                if (formFrame) {
                    formFrame.style.display = 'none';
                }
                // Mostra o iframe com o site externo
                iframe.style.display = 'block';
            } else {
                console.error("Erro: Elementos não encontrados. Verifique os IDs no HTML.");
            }
        });
    });
});