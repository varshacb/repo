function checkScope(){
    "use strict";
    var i="function scope";
    if(true){
       var i ="block scope";
       i="hello";
        console.log("Block scope i is:",i);

    }
    console.log("Function scope i is:",i);
    return i;
}
checkScope();
