$(".title").on("click", function() {
    $(this).parent().children(".detail").clone().dialog({
        buttons: [
            {
                text: "Ok",
                icons: {
                    primary: "ui-icon-heart"
                },
                click: function() {
                    $( this ).dialog( "close" );
                }
            }
        ]
    });
});

$( "#dialog" ).dialog({
    dialogClass: "no-close",
    buttons: [
        {
            text: "OK",
            click: function() {
                $( this ).dialog( "close" );
            }
        }
    ]
});
