var form = ('#formulario'),
    button = ('#mostrar-form'),
    list = ('#contenido'),
    post = $('.item').first();

function mostrarFormulario(){
  $(form).slideToggle();
  $(list).slideToggle();
  return false;
}
function agregarPost(){
  var url = $('#url').val(),
      titulo = $('#titulo').val(),
      clone = $(post).clone();


  $(clone).find('.titulo_item a').text(titulo).attr('hreh', url);
  $(clone).hide();
  $(list).prepend(clone);
  mostrarFormulario();
  $(clone).fadeIn();
  return false;
};


//Entos
$(button).click(mostrarFormulario);
$(form).on('submit', agregarPost);



var dia = {
  dia1 : "lunes",
  dia2 : "martes",
  dia3 : "mircoles",
  dia4 : "jueves"
}
console.log(dia.dia3);







