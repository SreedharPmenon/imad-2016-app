var button1=document.getElementById('times');
button1.onclick = function(){    
     var request = new XMLHttpRequest();
     request.onreadystatechange=function(){
     if(request.readyState === XMLHttpRequest.DONE)
     {
          if(request.status=== 200){
                var counter= request.responseText;
                var spanning=document.getElementById('count');
                spanning.innerHTML=counter.toString();
               

          }
     }
     };	
     request.open('GET','http://localhost:8080/counter',true);
request.send(null);
 
     };
var submitbutton = document.getElementById('sbt_btn');
submitbutton.onclick = function(){


 var request = new XMLHttpRequest();
     request.onreadystatechange=function(){
     if(request.readyState === XMLHttpRequest.DONE)
     {
          if(request.status=== 200){
            var names =request.responseText;
            names = JSON.parse(names);
            var list = '';
           for(var i=0; i<names.length; i++)
           {
            list += '<li>' + names[i] + '</li>';
           }
       var ul=document.getElementById('ullist');
      ul.innerHTML = list;
    }
}
};
var nameInput=document.getElementById('myname');
var name=nameInput.value;
request.open('GET','http://localhost:8080/submit-button?name='+name,true);
request.send(null);
}; 




