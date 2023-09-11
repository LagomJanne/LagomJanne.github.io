/*

const jokebutt = document.getElementById("jokebutton");
jokebutt.addEventListener("click", getJoke);

function getJoke(e){
    //alert("skemkt")
    fetch('https://v2.jokeapi.dev/joke/Any?type=single', 
    (
        
        method:"GET",

        headers: new Headers({
            Accept: "application/json"})
    )
    )
    .then(res => res.json())
    .then(response)
            let joke = response.joke 
            
    
   

 



}  */






function getjoke() {
    fetch ('https://v2.jokeapi.dev/joke/Any?type=single')
    .then((r) => r.json())
    .then((data) => {
            updateUI(data);
    });
}
function updateUI(jokeData) {
    document.getElementById("pskemt").innerHTML = jokeData.joke;
}
