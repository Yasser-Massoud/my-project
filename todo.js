window.onload = function(){
alert("WELCOME TO MY FIRST WEB PAGE .HOPE YOU WILL LIKE IT.");
    $("#add").click(function() {
        var val = $("input").val();
        if(val !== '') {
            var elem = $("<li></li>").text(val);
            $(elem).append("<button class='rem'>X</button>");
            $("#mylist").append(elem);
            $("input").val("");
            $(".rem").click( function() {
                $(this).parent().hide('slow')
            });
        }
    });
};
