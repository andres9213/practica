$(document).ready(function(){
  function galery (){
    var contenedor = $('ul');
    var items = contenedor.children();
    var widt_marc = $('#marco').width();
    var items_num = items.length;
    var items_wid =  items.outerWidth(true);
    var widt_conte = items_wid * items_num;
    var items_more = Math.floor(widt_marc / items_wid);
    var item_one = 1;
    var movi = false;

    $(contenedor).css('width', (items_num + items_more) * items_wid);
    for(var i = 0; i < items_more; i++ ){
      $(contenedor).append(items.eq(i).clone());
    }
    $('#siguiente').click(function(){
      if(item_one > items_num){
        item_one = items_more;
        $(contenedor).css('left', '0px');
      }
      else{
        item_one++;
      }        
      $(contenedor).animate({
        left: '-=' + items_wid,
      });
    });
    $('#anterior').click(function(){
      if(item_one == 1){
        $(contenedor).css('left', items_num * items_wid * -1);
        item_one = items_num;
      }
      else{
        item_one--;
      }
      $(contenedor).animate({
        left: '+=' + items_wid,
      });
    });

    console.log(item_one);

  }
  galery('#marco');
});