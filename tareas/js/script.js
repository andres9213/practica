$(document).ready(function(){
  //Agregar tarea
  $('.but_add').click(function(){
  	var texto = $(".form-text").val();
    if(texto != ''){
      $('.news article').append('<div class="task">' + '<span>' + texto + '</span>' + '<input type="checkbox" class="checkbox">'  + '</div>' );
    }
    $(".form-text").val('');
  });
  //Eliminar tareasss
  function delete_task(button, selectinp){
    $(button).click(function(){
      $(selectinp).each(function(ind, oj){
        if($(oj).is(':checked')){
          $(oj).parent().remove();
        }
      });
    });
  }
  //Intercambio tareas
  function exchange(button, selectinp, destination, removecheck){
    $(button).click(function(){
      $(selectinp).each(function(ind, oj){
        if($(oj).is(':checked')){
          $(oj).parent().clone().appendTo(destination);
          $(oj).parent().remove();
          $(removecheck).removeAttr('checked');
        }
      });
    });    
  }
  //Borrar todas las tareas
  function clear_all(button, selectiremove){
    $(button).click(function(){
      $(selectiremove).remove();
    });
  }
  //Movimiento de tareas
  $(function() {
    $('article').sortable();
    $('article').disableSelection();
  });
  //Llamado de funsiones
  clear_all('.news .clear-all', '.news article .task');
  clear_all('.completed .clear-all', '.completed article .task');
  delete_task('.news .clear','.news .checkbox');
  exchange('.news .shift','.news .checkbox','.completed article','.completed input');
  delete_task('.completed .clear','.completed .checkbox');
  exchange('.completed .shift','.completed .checkbox','.news article','.news input');
  //Personalizar checkbox

});





