//Code for counter
var counter= document.getElementById('counter');
button.onclick= function(){

    //Create request for counter endpoint
    var request= new XMLHttpRequest();
    //Capture response and store it in variable
    request.onreadystatechnage=function(){
    if (request.readyState ===XMLHttprequest.DONE){
        //take action
        if(request.status === 200){
            var counter=request.responeText;
            var span=document.getElementByID('count');
            span.InnerHTML=counter.toString();
            
        }
    }
    };
        
    //Make request
    request.open('GET','http://singhshubham102.imad.hasura-app.io/counter');
    request=send(null);
    
}