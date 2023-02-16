function shout(string){
    return string.toUpperCase()
}
function whisper(string){
    return string.toLowerCase()
}
function logShout(string){

    
    console.log(string.toUpperCase())    
}

function logWhisper(string){

    console.log(string.toLowerCase())
}

const string = "HELLO"

function sayHiToHeadphonedRoommate(string){

    let response;

if (string === string.toLowerCase()){

    response = "I can't hear you!"
}
if (string === string.toUpperCase()){

    response = "YES INDEED!"
}
if (string === "Let's have dinner together!"){

    response = "I would love to!"
}
console.log(response)
return response
}
/*sayHiToHeadphonedRoommate("hello")
sayHiToHeadphonedRoommate("HELLO")
sayHiToHeadphonedRoommate("Let's have dinner together!")*/



    
