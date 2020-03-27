// Genérateur d'idées pour s'entrainer au design d'interface et de branding
// Chaque idée est gémérée à partir de 3 arrays. Avec 1 element du thême choisi, 1 client et 1 directive supplémentaire
// 
// Ex d'idée générée avec le theme Branding :
// Conçois [une identité graphique] pour [un chef cuisinier] et [finis en 24h].
// 
// Ex d'idée générée avec le theme Products UI/UX :
// Conçois [un kit wireframe] pour [un aeroport] et [utilises beaucoup d'orange].
// 
// Le nb max d'idées gémérées est de 5. Les idées peuvent être générée apres chaque appuie sur le bouton 'Aléatoire'
// En remplacement de la fonction 'Quitter le programme', un bouton 'Reset' à été ajouté pour supprimer les cartes actives et re-initialiser
// le nombre d'idée générées.


// TODO : API generateur de palettes de couleur
// TODO : A propos = contenu en scroll

let howManyGenerated = 1;
let ideaType = 1; //default is unchoosed, other choice is products
let counter = 1;
let selectorClasses;
document.getElementById("counter-display").innerHTML = counter;

/**
 * @param  {} String
 */

function display(arg1, arg2, arg3) {
    const div = document.createElement('div');
    div.className = 'quote-card';
    div.classList.add('slide-in');
    if(ideaType=== 1){div.classList.add('branding');}else{div.classList.add('products');}
    
    div.innerHTML = `Conçois <em>` + arg1 + `</em><br /> pour <em>` + arg2 + `</em><br /> et <em>` + arg3 + `.</em>`;
    // div.style.animation = 'fading 1s 1';
    document.getElementById('quotes').appendChild(div);
}

function increaseCounter() {
    if (counter < 5) {
        counter++;
        document.getElementById("counter-display").innerHTML = counter;
    }
}

function decreaseCounter() {
    if (counter > 1) {
        counter--;
        document.getElementById("counter-display").innerHTML = counter;
    }
}

let selectorType = document.querySelectorAll(".selector");
let header = document.getElementById('header');
function getClasses(obj, abc) {
    selectorClasses = obj.className;
    if (selectorClasses.includes('branding')) {
        ideaType = 1;
        document.getElementById('randomize-button').classList.add('branding');
        document.getElementById('randomize-button').classList.remove('products');
        selectorType[0].classList.add("selected");
        selectorType[1].classList.remove("selected");
        if(header.classList.contains('header-bg-products')){
            header.classList.remove('header-bg-products');
            header.classList.add('header-bg-branding');
        }
    } else if (selectorClasses.includes('products')) {
        ideaType = 2;
        document.getElementById('randomize-button').classList.remove('branding');
        document.getElementById('randomize-button').classList.add('products');
        selectorType[0].classList.remove("selected");
        selectorType[1].classList.add("selected");
        if(header.classList.contains('header-bg-branding')){
            header.classList.remove('header-bg-branding');
            header.classList.add('header-bg-products');
        }
    }
}



// Array for each parts of generated quote
const brandingIdeas = ['un logo', 'un sac de shopping', 'une icone d\'application', 'un kit de presse', 'des stickers', 'des patchs', 'une mascotte', 'un hoodie de team', 'un mockup', 'une nouvelle version d\'un logo', 'une facture', 'des goodies', 'un infographique', 'une carte business', 'une identité graphique', 'une carte d\'accès', 'une cover de magazine', 'un header d\'email'];
const productsIdeas = ['un site promotionnel', 'une interface de support', 'un kit d\'interface Web', 'une application de management', 'une page 404 interactive', 'une application de RA', 'un nouveau produit', 'une navigation mobile', 'une application desktop', 'une facture interactive', 'un produit sans écran', 'trois styles de bouton', 'un kit wireframe', 'un écran de chargement', 'un panneau d\'information', 'un petit produit', 'une interface futuristique', 'une page de profile', 'une brochure', 'un formulaire de retour', 'un bouton survolé', 'une page \'À propos\'', 'un formulaire d\'inscription', 'un chatbot'];
const who = ['un crew de dance', 'une radio d\'actualités à Quebec', 'une conférence d\'un film Marvel', 'une convention de fan de Dr. Who', 'un jardin botanique', 'une école', 'une banque sur Paris', 'Peugeot', 'Chanel', 'Dropbox', 'une application de podcast', 'une pizzeria', 'un groupe de musique Jazz', 'un groupe de musique Rock', 'un groupe de Rap', 'ton équipe de sport préférée', 'un restaurant local au Japon', 'une colonie sur la Lune', 'Microsoft', 'Google', 'Apple', 'Android', 'un motel aux États-Unis', 'un bureau d\'avocats sur Lyon', 'un tailleur', 'une agence de com\'', 'un festival de musique', 'Tesla', 'Nike', 'une station spatiale', 'une escouade militaire', 'la Police Nationale', 'un chef cuisinier', 'un laboratoire de recherche', 'un cabinet de docteur', 'un musée sur l\'ère Crétacée', 'un cinéma', 'un thêatre', 'un aeroport', 'un restaurant de ramen sur Paris', 'une maison de vin au Japon', 'une maison de thé à Londres'];
const more = ['partages sur les réseaux le résultat final', 'envoies nous le résultat sur Twitter', 'essaies un style minimaliste', 'essaies 2 styles différents', 'essaies 3 styles différents', 'rédiges un article sur le processus de réalisation', 'fait une capture vidéo du processus de réalisation', 'réalises une autocritique de ton travail', 'essaies un style 3d', 'essaies de finir en une heure', 'essaies de finir en 30 minutes', 'fais 3 versions différentes', 'commences avec une recherche', 'commences sur papier', 'utilises beaucoup de bleu', 'utilises beaucoup de rouge', 'utilises beaucoup de vert', 'utilises beaucoup d\'orange', 'utilises la palette de couleur générée aléatoirement', 'essaies un style inhabituel', 'partages le résultat pour recevoir des critiques', 'écrit une étude de cas sur la réalisation', 'évites les styles à la mode', 'finis en 24h', 'partages sur Instagram'];

// Generate random indexed array element
const randomArrayElement = (array) => array[Math.floor(Math.random() * array.length)];



function generateBrandingIdeas() {
    for (i = 0; i < counter; i++) {
        display(randomArrayElement(brandingIdeas), randomArrayElement(who), randomArrayElement(more));
    }
}

function generateProductsIdeas() {
    for (i = 0; i < counter; i++) {
        display(randomArrayElement(productsIdeas), randomArrayElement(who), randomArrayElement(more));
    }
}

function removeActiveCards(){
    let activeCards = document.getElementsByClassName('quote-card');
    if (activeCards.length != 0) {
        for (var i; i < activeCards.length; i++) {
            activeCards[0].classList.add('slide-out');
        }
    }
    $('.quote-card').remove();
}

function randomizeButton() {
    removeActiveCards();
    if (ideaType === 2) {
        // Show generated quote
        generateProductsIdeas();
    } else if (ideaType === 1) {
        generateBrandingIdeas();
    }
    let newCards = document.querySelectorAll('.quote-card');
    if (counter >= 4) {
        newCards[newCards.length - 1].classList.add('last-card');
        if (counter == 5) {
            newCards[newCards.length - 2].classList.add('last-card');
        }
    }
    for (i; i < newCards.length; i++) {
        newCards[i].classList.add('slide-in');
    }
}


function resetButton() {
    removeActiveCards();
    counter = 1;
    document.getElementById("counter-display").innerHTML = counter;
}
