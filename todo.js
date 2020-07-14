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

