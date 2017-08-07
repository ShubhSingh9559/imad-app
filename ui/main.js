//Code for counter
var button= document.getElementById('counter');
button.onclick= function(){

    //Create request for counter endpoint
    var request= new XMLHttpRequest();
    //Capture response and store it in variable
    request.onreadystatechange=function(){
    if (request.readyState ===XMLHttprequest.DONE){
        //take action
        if(request.status === 200){
            var counter=request.responeText;
            var span=document.getElementById('count');
            span.innerHTML=counter.toString();
            
        }
    }
    };
        
    //Make request
    request.open('GET','http://singhshubham102.imad.hasura-app.io/counter',true);
    request.send(null);
    
}