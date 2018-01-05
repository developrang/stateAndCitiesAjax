$(document).ready(function(){
    $.get('statencities.json', function(data, status){
        console.log("Data: " + data + "\nStatus: " + status);
    })
})