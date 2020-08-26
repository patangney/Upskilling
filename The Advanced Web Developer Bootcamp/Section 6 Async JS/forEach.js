//Old Style

var arr = [1,2,3,4,5,6];

function double(arr) {
    for (var i = 0; i < arr.length; i++){
        console.log(arr[i] + 2);
    }
}

double(arr);

var strings = ["my", "forEach", "example"];

var results = "";

function callback(curElement, curIndex, array){
    // callback implemented by caller of function
}

function forEach(arr, callback){
    for (var i = 0; i < arr.length; i++){
        callback(arr[i], i, arr);
    }
}

function findIndex(arr, callback){
    //findIndex code to be implemented
    for (var i = 0; i < arr.length; i++){
        if (callback(arr[i], i, arr)) {
            return i;
        }
    }

    return -1;
}

// var num = 0;
// var intervalId = setInterval(function(){
//     num++;
//     console.log("num: ",num);
//     if (num === 3){
//         clearInterval(intervalId);
//     }
// },1000);

// Your goal is to implement a function called countDown.  The function will accept 1 parameter which is a time in seconds for the count down.  The function should console.log the time remaining every second.  Once the timer gets to 0, the timer should be stopped and you should console.log "Ring Ring Ring!!!".

// HINT: You will need to use setInterval() to count down and clearInterval to stop the timer.

// Example:

// countDown(3) 

// Console output

// Timer: 2
// Timer: 1
// Ring Ring Ring!!!

// var num = 0;
// var intervalId = setInterval(function(){
//     num++;
//     console.log("num: ",num);
//     if (num === 3){
//         clearInterval(intervalId);
//     }
// },1000);


function countDown(time){

    var intervalId = setInterval(function(){
        time--;

        if (time > 0){
            console.log("Timer: ", time);
        } else {
            console.log("Ring Ring Ring!!!");
            clearInterval(intervalId);
        }

    }, 1000);
    
    
}
// countDown(6);


//Promises
var p1 = new Promise(function(resolve, reject) {
    resolve([1,2,3,4]);
});

p1.then(function(arr) {
    console.log("Promise p1 resolved with data: ",arr);
});

var p2 = new Promise(function(resolve, reject) {
    reject("Error");
});

p2.then(function(data){
    console.log("Promise p2 resolved with data:",data);
}).catch(function(data){
    console.log("Promise p2 was rejected wit data: ",data);
});


var randomNum = new Promise(function(resolve, reject) {
    var num = Math.random();
    if (num < 0.5){
        resolve(num);
    } else {
        reject(num);
    }
});

randomNum.then(function(result){
    console.log("Success: ",result);
}).catch(function(error){
    console.log("Error: ",error);
    
});

var promise = new Promise(function(resolve, reject){
    setTimeout(function(){
        var randomInt = Math.floor(Math.random() * 10);
        resolve(randomInt);
    },4000);
});

promise.then(function(data) {
    console.log("Random int passed to resolve: ",data);
})


//Combine Async tasks into a chain of Promises
//Old nested Async Callbacks - hard to read | logic is difficult to reason about | code is not modular 
// var counter = 0;
// setTimeout(function(){
//     counter++;
//     console.log("Counter: ", counter);
//     setTimeout(function(){
//         counter++;
//         console.log("Counter: ", counter);
//         setTimeout(function(){
//             counter++;
//             console.log("Counter: ", counter);
//         },3000);
//     },2000);
// },1000);

var pChain = new Promise(function(resolve, reject){
    setTimeout(function(){
        randomInt = Math.floor(Math.random() * 10 );
        resolve(randomInt);
    },500);
});

pChain.then(function(data){
    console.log("random int passed to resolve: ",data);
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve(Math.floor(Math.random() * 10));
        }, 3000);
    });
}).then(function(data) {
    console.log("Second random int passed to resolve: ", data);
});


var pChain2 = new Promise(function(resolve, reject){
    resolve(5);
});

pChain2.then(function(data) {
    return data * 2;
}).then(function(data) {
    return data + 20;
}).then(function(data) {
    console.log("Data: ",data);
});


var counter = 0;
function inCounter(){
    counter++;
    console.log("Counter CB: ",counter);
}

function runLater(callback, timeInMS){
    var p = new Promise(function(resolve, reject){
        setTimeout(function(){
            const newLocal = callback();
            var res = newLocal;
            resolve(res);
        },timeInMS);
    });
    return p;
}

runLater(inCounter, 1000).then(function(){
    return runLater(inCounter,2000);
}).then(function(){
    return runLater(inCounter,3000);
}).then(function(){
    // not necessary
});



