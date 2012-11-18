(function(){

// Function constructor section is need try catch
try {
    (new Function('alert("Function constructor");'))();
} catch (e) {
    console.error('Function constructor: ' + e);
}

// eval section is need try catch
try {
    eval('alert("eval");');
} catch (e) {
    console.error('eval: ' + e);
}

// setTimeout section
setTimeout('alert("setTimeout");', 10);

// setInterval section
var intervalId = setInterval('alert("setInterval");', 1000);
setTimeout(function(){
    clearInterval(intervalId);
}, 1000);

}());
