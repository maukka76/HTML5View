$(document).ready(function(){
    
    $("#login").click(loginHandler);
    $("#register").click(registerHandler);

});

/**
  *This function is called when login button is 
  *pressed
  */
function loginHandler(event){
    
    var requestData = {
        
        username:$("#username").val(),
        password:$("#password").val()
    }
    
    //Send login request to server
    $.ajax({
        
        method:'POST',
        url:'localhost:3000/friends/login',
        data:requestData,
        dataType:'json'
    
    });
}

/**
  *This function is called when register button is 
  *pressed
  */
function registerHandler(event){
    console.log("Register handler called");
    var requestData = {

        username:$("#username").val(),
        password:$("#password").val()
    }
    
    //Send login request to server
    $.ajax({
        
        method:'POST',
        url:'http://localhost:3000/friends/register',
        data:requestData,
        dataType:'json'
    
    }).done(registerResponseHandler);
}

/**
  *This function is called when register response 
  *arrives in some point of time
  */
function registerResponseHandler(data){
    
    $("#status").text(data.status);
}











