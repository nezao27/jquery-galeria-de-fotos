$(document).ready(function(){ //O $ chama o jQuery//
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('botao-cancelar').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const enderecoNovaImagem = $('endereco-imagem-nova').val();
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src="${enderecoNovaImagem}" />`).apendTo(novoItem);
        $(`<div class="overlay-imagem-link">
                <a href="${enderecoNovaImagem}" target="_blank" title="Ver imagem em tamanho real">
                    Ver imagem em tamanhov real
                </a>
            </div>`).apendTo(novoItem);
        $(novoItem).apendTo('ul');
        $(novoItem).fadeIn(1000);
        $('endereco-imagem-nova').val('');
    })
})