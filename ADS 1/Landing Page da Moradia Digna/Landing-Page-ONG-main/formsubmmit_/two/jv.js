document.addEventListener('DOMContentLoaded', function() {
    // Função melhorada para pegar parâmetros da URL
    function getParameterByName(name) {
        const url = window.location.href;
        name = name.replace(/[\[\]]/g, '\\$&');
        const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
        const results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }

    // Pegar os valores da URL
    const nome = getParameterByName('nome') || 'Doador';
    let valor = getParameterByName('valor') || '0.00';

    // Formatar o valor para exibição
    valor = parseFloat(valor).toFixed(2).replace('.', ',');

    // Formatar a data atual
    const agora = new Date();
    const options = { 
        day: '2-digit', 
        month: '2-digit', 
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    const dataFormatada = agora.toLocaleDateString('pt-BR', options);

    // Atualizar a página com os valores
    document.getElementById('donationValue').textContent = `Valor: R$ ${valor}`;
    document.getElementById('donationDate').textContent = `Data: ${dataFormatada}`;

    // Personalizar mensagem se tiver nome
    if (nome !== 'Doador') {
        document.querySelector('.thank-you-message').innerHTML = 
            `<strong>${nome}</strong>, agradecemos sua doação!<br>Sua contribuição ajuda famílias a terem moradias dignas.`;
    }

    // Debug no console (pode remover depois)
    console.log('Dados recebidos:', { nome, valor, dataFormatada });
});