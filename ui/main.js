//Code for counter
var button= document.getElementById('counter');
var counter=0;
button.onclick= function(){

    /*//Create request object
    var request= new XMLHttpRequest();
    //Capture response and store it in variable
    request.onreadystatechange = function(){
    if (request.readyState === XMLHttpRequest.DONE){
        //take action
        if(request.status === 200){
            var counter = request.responseText;
            var span=document.getElementById('count');
            span.innerHTML=counter.toString();
            
        }
     }
    };
        
    //Make request
    request.open('GET','http://singhshubham102.imad.hasura-app.io/counter',true);
    request.send(null);
    */
    counter=counter+1;
    var span=document.getElementById('count');
    span.innerHTML=counter.toString();
};