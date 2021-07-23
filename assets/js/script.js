//transición suave a #secciones
$(document).ready(function() {
    $("a").click(function(event) {
        event.preventDefault();

        var gato = this.hash;

        $("html").animate({
                scrollTop: $(gato).offset().top,
            },
            800
        );
    });
});

//toggle tarjetas seccion destacados
$("#card1").hide();
$("#card2").hide();
$("#card3").hide();
$("#card4").hide();

$("h5").on('click', function() {
    var cardId = $(this).attr('data-card');
    $('#' + cardId).toggle(500);
    $(function() {
        $(".flexbox").toggleClass("hidden");
    });
});

//tooltip "haz click para ver descripcion"
$(function() {
    $('[data-toggle="tooltip"]').tooltip()
});