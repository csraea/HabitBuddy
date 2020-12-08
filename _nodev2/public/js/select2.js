$(document).ready(function(){
  $('select').select2({
    theme: "bootstrap",
  });

    $('.select--overview').select2({
      theme: "bootstrap",
      placeholder:"Izaberite ili ukucajte neke sastojke..."
    });
 
    $('.select--recipe-ingreds').select2({
      theme: "bootstrap",
      placeholder:"Izaberite ili ukucajte neke sastojke..."
    });
 
 
    $('.select--recipe-categs').select2({
      theme: "bootstrap",
      placeholder:"Izaberite kategorije..."
    });
 
    $('.select--recipe-difs').select2({
      theme: "bootstrap",
      placeholder:"i težinu pripreme..."
    });
 
    $('.select--recipe-durs').select2({
      theme: "bootstrap",
      placeholder:"i dužinu pripreme?"
    });
 

    hiddenIngreds = $(".extra").length;
    if (hiddenIngreds === 0) {
      $(".explanation").hide()
    }
    $(".extra").click(function () {

      var a = ($(this).attr("value"));
      console.log(a)
      $('select option[data-ing=' + a + ']').attr('selected', 'selected');
      $('select').select2().trigger('change');
      //   $( "ul .select2-selection__rendered").append( "<p>Test</p>" );
      //console.log($('select  option[value='+a+']'))
      //$('select').hide().show();

      $(this).hide();
      $('select').select2({
        theme: "bootstrap",
        width: '100%'
      });
      hiddenIngreds--;
      if (hiddenIngreds === 0) {
        $(".explanation").hide()
      }
    });






  });

 