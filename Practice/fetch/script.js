console.log("HELLO! I AM PRACTICING fetch()!"); 

//random kitten pictures
const getKittens = async function () {
    const result = await fetch("http://placekitten.com/200/300");
    const picture = await result.blob(); 
    console.log(picture); 
};

getKittens(); 


//Get data on random users at randomuser.me following video example
const getRandomUserData = () => {
    fetch("https://randomuser.me/api/").then(data => data.json()).then(data => console.log(data)); 
    // console.log("Fetching random user data.");
}; 

getRandomUserData();

//Same as above, but using format I learned previously (More familiar)
const getUserData = async function () {
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();
    console.log(data); 
}; 
getUserData(); 

//Yay - both versions above work




