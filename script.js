async function fetchOffers() {
    const response = await fetch("https://www.codepassport.dev/api/offers");
    // console.log(response);
    const offers = await response.json();
    
    document.querySelector("h1").style.display = "block";
    for (let i =0; i < offers.length; i++) {
        // console.log(offers[i].titre) // affiche les titres
        // console.log(offers[i].description) // affiche les description

        // console.log(offers[i]) 
        const elementTitle= document.createElement("h2"); // titres
        elementTitle.innerHTML = offers[i].titre;

        const elementDescriptions= document.createElement("p"); // description
        elementDescriptions.innerHTML = offers[i].description;

        document.querySelector('#offers-container').appendChild(elementTitle);
        document.querySelector('#offers-container').appendChild(elementDescriptions);
    }
    document.querySelector("h1").style.display = "none";
};
fetchOffers();

