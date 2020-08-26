console.log("test");

var currentPrice = document.getElementById("price");
var btn = document.querySelector("#btn");
console.log(typeof(currentPrice));
var url = "https://api.coindesk.com/v1/bpi/currentprice.json";

btn.addEventListener("click", function(){

    //make the request
    var XHR = new XMLHttpRequest();

    XHR.onreadystatechange = function(){
        if(XHR.readyState == 4 && XHR.status == 200){
            var data = JSON.parse(XHR.responseText);
            console.log(data);

            var lastUpdated = data.time.updated;
            console.log(lastUpdated);

            var euro = data.bpi.EUR.rate;
            console.log(euro);

            currentPrice.innerText = euro;

        }
    }

    

    XHR.open("GET", url);
    XHR.send();
});

//fetch

// fetch(url)
// .then(function(data){
//     console.log(data);
//     console.log("status code was: "+ data.status)
// });

// parsing JSON with Fetch
fetch(url)
.then(function(response){
    console.log(response);
    return response.json().then(function(data){
        console.log(data)
    })
});

// or do it this way
fetch(url)
.then(function(response){
    console.log(response);
    return response.json()
})
.then(function(data){
    console.log(data.bpi.EUR.rate);
});

// fetch options - https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
// fetch(url, {method: "POST"})
// .then(function(response){
//     console.log(response);
//     return response.json()
// })
// .then(function(data){
//     console.log(data.bpi.EUR.rate);
// });