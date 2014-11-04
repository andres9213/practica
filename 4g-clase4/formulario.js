var form = ('#formulario'),
    button = ('#mostrar-form'),
    list = ('#contenido'),
    post = $('.item').first();


if(localStorage.getItem('autosave')){
  $(titulo).val(sessionStorage.getItem('titulo'));
  $(url).val(sessionStorage.getItem('url'));
}
var id = setInterval(function(){
  sessionStorage.setItem('titulo', $(titulo).val());
  sessionStorage.setItem('url', $(url).val());
},1000);


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
  $(titulo).val('');
  $(url).val('');
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







