console.log("HELLO! I AM PRACTICING fetch()!"); 

//Random kitten pictures
//Define the async function
const getKittens = async function () {
    //Store the response
    const result = await fetch("http://placekitten.com/200/300");
    //Convert the response 
    const picture = await result.blob(); 
    console.log(picture); 
    //Grab the kitten div and insert the fetched/converted blob into the src
    //Note: URL.createObjectURL is a method used to convert 
    document.getElementById("kitten").src = URL.createObjectURL(picture);
};

//Call the async function
getKittens(); 



//Get data on random users at randomuser.me following video example
const getRandomUserData = () => {
    fetch("https://randomuser.me/api/").then(data => data.json()).then(data => console.log(data)); 
    // console.log("Fetching random user data.");
}; 

getRandomUserData();

//Same as above, but using format I learned previously (More familiar)
//Define the async function
const getUserData = async function () {
    //Store the response
    const response = await fetch("https://randomuser.me/api/");
    //Convert the response 
    const data = await response.json();
    console.log(data); 
}; 
//Call the async function
getUserData(); 

//Yay - both versions above work




