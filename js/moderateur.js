$(document).ready(function(){
    $("button").click(
        function() {
            $("#resultat").html($('#text').val().replace(/[:;xX=][\(\)\-\\/'OpD@]+/g, "--"));
        }
    )
});
