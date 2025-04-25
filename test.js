"use strict";

    
fetch('https://fakestoreapi.com/products')
.then(response => {
    if(!response.ok){
    }
    
    return response.json()}
)

.then(data => {
    console.log(data);
    utiliserAPI(data)
})

.catch(error => console.error ('Erreur:', error));





function utiliserAPI(products){
    const container = document.querySelector('.products-container');
    container.innerHTML = "";
    if (products.length === 0) {
        container.innerHTML = '<p class="erreur"> Aucun produit trouvé.</p>';
        return; // Arrête la fonction ici
    }
    // products.forEach(pourChaqueProduit)
    /* for (let index = 0; index < products.length; index++) {
        const produit = products[index];
        pourChaqueProduit(produit);
    } */
   for (const produit of products) {
    pourChaqueProduit(produit);
   }
}
function pourChaqueProduit(produit)
{
    console.log(produit);
    const unproduit = document.createElement("div");
    unproduit.className = "MonProduit";
    unproduit.innerHTML = `
    <img src="${produit.image}" alt="${produit.title}">
    <div class="categorie">${produit.category}</div>
    <div class="titre">${produit.title}</div>
    <div class="prix">${produit.price} €</div>
    <p>${produit.description}</p>
    `;
    const container = document.querySelector('.products-container');
    container.appendChild(unproduit)
}

    








/* Bien comprendre la requête de manière plus précise ! */


// const promesseQueLaRéponseVaArriver = fetch('https://fakestoreapi.com/products');
// promesseQueLaRéponseVaArriver.then(récupèreLaRéponseDeLaRequête).catch(attrapeLErreurPourNePasFairePlanterLeCode);
/**
 * Traite la requête envoyé à l'api
 * @param {Response} réponse réponse indiquant si la requête s'est bien passé
 */
function récupèreLaRéponseDeLaRequête(réponse)
{
    if(réponse.ok === false)return;
    const promesseQueLesDonnéesVontÊtreTraité = réponse.json().catch(attrapeLErreurPourNePasFairePlanterLeCode);
    promesseQueLesDonnéesVontÊtreTraité.then(récupèreLesDonnéesJsonSousFormeDobjetJS);
}
/**
 * Traite les données renvoyé par l'api
 * @param {Object} data données trouvées dans l'api 
 */
function récupèreLesDonnéesJsonSousFormeDobjetJS(data)
{
    console.log(data);
}
/**
 * Traite les erreurs envoyées par notre requête ou notre json
 * @param {Error} error erreur provoqué par le fetch ou le json
 */
function attrapeLErreurPourNePasFairePlanterLeCode(error)
{
    console.warn(error);    
}

















