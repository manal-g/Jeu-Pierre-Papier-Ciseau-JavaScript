const contenantChoixOrdinateur = document.getElementById('choix-ordinateur');
const contenantChoixUtilisateur = document.getElementById('choix-utilisateur');

const contenantResultat = document.getElementById('resultat');

const choixPossibles = document.querySelectorAll('button');
let choixUtilisateur
let resultat
let choixOrdinateur
let cheminIconeUtilisateur 
let cheminIconeOrdinateur 


//Evenement 'Click sur les buttons

choixPossibles.forEach(choixPossible => choixPossible.addEventListener('click',(e)=>{
    //recuperation de l'ID du button clique
    choixUtilisateur=e.target.id;
    //on ajoute l'image qui correspond  au choix
    cheminIconeUtilisateur=`file:///D:/projet%20javascript/jeu%20Pierre-Papier-Ciseaux/${choixUtilisateur}.png`;
    cheminIconeOrdinateur= `file:///D:/projet%20javascript/jeu%20Pierre-Papier-Ciseaux/${choixOrdinateur}.png`;
    contenantChoixUtilisateur.innerHTML = `<img src="${cheminIconeUtilisateur}">`;
    generer_choix_ordinateur()
    verifier()
}))

//Fonction pour generer le choix de l'ordinateur

function generer_choix_ordinateur(){

    random = Math.floor(Math.random() * 3)+1//Generer des nombres compris entre 1 et 3
    //alert(random)
    if(random === 1){ //si random = a 1
        choixOrdinateur = "pierre"

    }
    if(random === 2){ //si random = a 2
        choixOrdinateur = "papier"

    }
    if(random === 3){ //si random = a 3
        choixOrdinateur = "ciseaux"

    }
    //on ajoute l'image qui correspond au choix
    contenantChoixOrdinateur.innerHTML = `<img src="${cheminIconeOrdinateur}">`;
}

//Fonction pour verifier si le joueur a gagne ou pas 
function verifier(){
//les cas ou le joueur perd
    if(choixUtilisateur == choixOrdinateur){
        resultat = "Egalité";
    }
    if(choixUtilisateur =="pierre" && choixOrdinateur=="papier"){
        resultat = "Perdu !";
    }
    if(choixUtilisateur =="papier" && choixOrdinateur=="ciseaux"){
        resultat = "Perdu !";
    }
    if(choixUtilisateur =="ciseaux" && choixOrdinateur=="pierre"){
        resultat = "Perdu !";
    }
    //les cas ou le joueur gagne
    if(choixUtilisateur =="pierre" && choixOrdinateur=="ciseaux"){
        resultat = "Gagné !"
    }
    if(choixUtilisateur =="ciseaux" && choixOrdinateur=="papier"){
        resultat = "Gagné !"
    }
    if(choixUtilisateur =="papier" && choixOrdinateur=="pierre"){
        resultat = "Gagné !"
    }
    contenantResultat.innerHTML = resultat;

}

