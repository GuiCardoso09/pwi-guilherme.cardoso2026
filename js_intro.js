    
   // Este comando "espera" o HTML carregar completamente
document.addEventListener('DOMContentLoaded', () => {
    
    const links = document.querySelectorAll('a[target="conteudo-pilar"]');
    const intro = document.getElementById('intro-texto');
    const iframe = document.getElementById('iframe-conteudo');

    links.forEach(link => {
        link.addEventListener('click', function() {
            if (intro && iframe) {
                intro.style.display = 'none';
                iframe.style.display = 'block';
            } else {
                console.error("Erro: Elementos não encontrados. Verifique os IDs no HTML.");
            }
        });
    });
    
});