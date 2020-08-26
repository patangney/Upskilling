var btn = document.querySelector("button");
var url = 'https://api.github.com/users/patangneyasdf';
console.log("test");

// btn.addEventListener("click", function(){

//     fetch(url)
//     .then(function(request){
        
//         console.log(request.status);
//         // use the request.ok property
//         if(!request.ok){
//             console.log("Error with response status");
//         } 
//         console.log("Everything is fine");        
//     })
//     .catch(function(){
//         // how to handle 404
//         // promise is rejected if there is a problem with the promise
//         console.log("There is a problem");
//     })
// });

// better way to write this

btn.addEventListener("click", function(){

    fetch(url)
    .then(handleErrors)
    .then(function(request){
        console.log("Everything is fine for now")
        console.log(request);
    })
    .catch(function(error){
        // how to handle 404
        // promise is rejected if there is a problem with the promise
        console.log("There is a problem \n" + error);
    })
});

function handleErrors(request){
    if(!request.ok){
        throw Error(request.status);
    }
    return request;
}