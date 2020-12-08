$(document).ready(function () {
    $('select').select2({
        theme: "bootstrap",
        width: '100%'
    });
    $('#categories').select2({
        theme: "bootstrap",
        width: '100%',
        placeholder: "Filtrirajte po kategorijama"
    });
    $('#difficulties').select2({
        theme: "bootstrap",
        width: '100%',
        placeholder: "Filtrirajte po zahtjevnostima"
    });
    $('#durations').select2({
        theme: "bootstrap",
        width: '100%',
        placeholder: "Filtrirajte po dužini pripreme"
    });

    hiddenIngreds = $(".extra").length;
    if (hiddenIngreds === 0) {
        $(".explanation").hide()
    }
    $(".extra").click(function () {

        var a = ($(this).attr("value"));
        $('select option[value=' + a + ']').attr('selected', 'selected');
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