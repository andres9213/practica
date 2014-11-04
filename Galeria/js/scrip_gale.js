;(function($, window, undefined){    
  $.fn.andres = function(prev,sig){
    return this.each(function(){
      $container = $(this).children().eq(0);
      if($container){
        var $fotos = $container.children();
        var cantidad = $fotos.length;
        var incremeto = $fotos.outerWidth(true);
        var galeria = Math.floor($(this).width() / incremeto);
        var primerele = 1;
        var movi = false;

      }
      $container.css('width', (cantidad + galeria) * incremeto);
      for(var i = 0; i < galeria; i++){
        $container.append($fotos.eq(i).clone());
      }
      $(sig).click(function(e) {
        e.preventDefault();


        console.log(primerele);

        if(!movi){
        if(primerele > cantidad){
          primerele = 2;
          $container.css('left', '0px');
        }else{
          primerele++;
        }
          movi = true;
          $container.animate({
            left: '-=' + incremeto,
          },'swing', function(){
            movi = false;
          });
        }
      });
      $(prev).click(function(e){
        e.preventDefault();



        console.log('hola');
        if(!movi){
          if(primerele == 1){
          $container.css('left', cantidad * incremeto * -1);
          primerele = cantidad;
          }else{
            primerele--;
          }
          movi = true;
          $container.animate({
            left: '+=' + incremeto,
          },'swing', function(){
            movi = false;
          });
        }
      });
    });
   }

})(jQuery, window)