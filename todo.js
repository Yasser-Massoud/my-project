 alert("WELCOME TO MY FIRST WEB PAGE .HOPE YOU WILL LIKE IT.");

 var button = document.getElementById("update").onclick=myUpdate=function(){
        
    var userInput= document.getElementById("userInput").value;
    if(userInput===""){
       
        alert("please write something")
    } else {
    var list = document.getElementById("mylist");
   
    var items= document.createElement("li");
    
    var todoItem = document.createTextNode(userInput);
    
    items.appendChild(todoItem);
  
    list.appendChild(items);
    
    document.getElementById("userInput").value ='';

    var closebtn= document.createElement('button');

    closebtn.textContent='X';

    closebtn.setAttribute("class", "closebtn")
    
    items.appendChild(closebtn);

    closebtn.onclick =function(){
        list.removeChild(items)
        items.removeChild(closebtn);
    }
    }}

 // it work with javascript and jquery . 



//-------------------------------------------------------
  
/*window.onload = function(){

    $("#update").click(function() {
        var val = $("userInput").val();
        if(val !== '') {
            var elem = $("<li></li>").text(val);
            $(elem).append("<button class='closebtn'>X</button>");
            $("#mylist").append(elem);
            //$("userInput").val("");
            $(".closebtn").click( function() {
                $(this).parent().hide('slow')
            });
        }
    });
};*/