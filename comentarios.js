/* $(document).ready(function() { //document = seletor
    alert("Olá, jQuery") //tudo que utiliza jQuery precisa estar dentro deste escopo
}) //o jQuery funciona através do cifrão e dos parentesês */

$(document).ready(function() {
    console.log(document.querySelector('header button')); //forma de selecionar no JS
    console.log($('header button'))  //selecionar usando jQuery

    document.querySelector('header button').addEventListener('click', function(e) { //callback para click; forma do JS
    
    }) 

    $('header button').click(function () { //callback forma jQuery
        alert("Expandir formulário")
    })

    $('form').on('submit', function(e) {
        console.log("submit");
        e.preventDefault();
    })
})