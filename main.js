$(document).ready(function () {
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit', function(e) { //seleciona a tag form; adiciona um listener em forma jQuery; cria função do evento
        e.preventDefault();
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val(); //.val() é do jQuery; cria uma variavel que recebe o link do input
        const novoItem = $('<li style="display:none"></li>'); //cria lista HTML em jQuery e insere em uma variável; display none para omitir a imagem antes de aplicar o efeito
        $(`<img src="${enderecoDaNovaImagem}"/>`).appendTo(novoItem) // cria a tag html <img> que recebe a variável e envia para dentro da <li> através da variável novoItem
        $(`
            <div class="overlay-imagem-link">
                <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver imagem em tamanho real"
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem); // cria + div + a; envia para novoItem
        $(novoItem).appendTo('ul'); //cria ul e insere novoItem dentro
        $(novoItem).fadeIn(1000) // aplica efeito fadein ao inserir imagem. 5000 milisegundos
        $('#endereco-imagem-nova').val('') //limpa campo de input após submeter o form
    })
})