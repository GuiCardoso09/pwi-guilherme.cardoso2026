
document.addEventListener('DOMContentLoaded', (ty) => {
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

// Ouve qualquer mudança (change) que aconteça no documento
document.addEventListener('change', (mapa) => {
    
    // Verifica se a mudança veio especificamente do nosso select de mapas
    if (mapa.target && mapa.target.id === 'seletor-mapas') {
        
        const urlMapa = mapa.target.value; // Pega o link (value) da opção escolhida
        const container = document.getElementById('container-dinamico'); // Seleciona a div do mapa

        // Se o usuário escolheu um local válido (diferente de vazio)
        if (urlMapa !== "" && container) {
            
            // Substitui todo o conteúdo interno da div por um novo iframe
            // Usamos template strings (as crases ``) para montar o HTML do iframe com a URL dinâmica
            container.innerHTML = `
                <iframe 
                    src="${urlMapa}" 
                    style="width:100%; height:100%; border:0;" 
                    allowfullscreen="" 
                    loading="lazy">
                </iframe>`;
        }
    }
});


function processarForm(manter) {
    // Esta linha impede que a página recarregue e os dados sumam
    preventDefault();
    
    // Aqui você pode adicionar o que quiser que aconteça ao clicar em enviar
    console.log("Dados mantidos na tela!");
};