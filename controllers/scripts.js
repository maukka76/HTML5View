"use strict";
console.log("Here we go!!");

//This variable is shown to every function
var g_person_data;

//Wait document ready event
$(document).ready(function() {
    
    
    console.log("jquery onload triggered");
    
    $("#head").css("background-color","lightblue")
        .css("padding","20px").css("border-radius","8px");
    
    $(".about").html("<b>New text</b>");
    $("[data-dummy]").html("<p>Hello World</p>");
    
    var setting = {
        
        method:"GET",
        url:"http://localhost:3000/persons",
        dataType:"json",
    }
    
    $.ajax(setting).done(function(data){
        
        console.log(data);
        //Get all keys (attribute names) from json object
        console.log(Object.keys(data[0]));
        
        //Check that there are elements in array
        if(data.length > 0){
            //Create table headers dynamically
            var headers = Object.keys(data[3]);
            //Create row for headers
            var row = $("<tr></tr>");
            for(var i = 1; i < headers.length; i++){
                //Create header and add it to orw
                $("<th>" + headers[i] + "</th>").appendTo(row);
            }
            //Add row to thead element
            $(row).appendTo("thead");
        }
        
        //Create table content dynamically
        for(var i=0; i < data.length; i++){
            
            var html = "<tr>" +
                       "<td>" + data[i].name + "</td>" +
                       "<td>"+ data[i].address + "</td>" +
                       "<td>" + data[i].age + "</td>" +
                       "<td><input type='button' id=" + data[i]._id + " value='Modify'/></td>" +
                       "</tr>";
            
            $(html).appendTo("tbody");
        }
        
        $("[type=button]").click(function(click_data){
            
            //Loop trough all the values
            for(var i = 0; i < data.length; i++){
                
                //Check if id from button matches one of 
                //person id
            if(click_data.currentTarget.id == data[i]._id)
            {
                buildModifyUI(data[i]);
                break;
            }
                
                
            }
        });
        
    });
    
    //Get all elements from DOM where element has
    //attribute 'type' with value 'button'. Then add
    //event handler for click event for each of them
    
    
});


function buildModifyUI(person_data){
    
    var html = "<input type='text' value='" + person_data.name + "'/>";
    
    $("body").html(html);
}

/*
$(document).ready(domReady);

function domReady(){
}*/

/*
window.onload = function(event){
    
    console.log(event);
    para1.innerHTML = "Changed from JS";
    //para1.style.backgroundColor = "yellow";
    
    var tempP = document.createElement("p");
    tempP.innerHTML = "New Element";
    para1.appendChild(tempP);
}*/

/*
window.onload = domReady;

function domReady(event){
    
    return 2;
}

function someFunction(nimi){
    
    console.log(nimi);
}*/

//someFunction(21);
//someFunction("Markus");