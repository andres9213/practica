$(document).ready(function(){
  $('.boton').click(function(){
    $('#marco').effect("Transfer", 500);
  });
  function finis(){
    setTimeout(function(){
      $( "#marco" ).removeAttr( "style" ).hide().fadeIn();
    },1000);
  }
});