const courses = [
    {
        id: 1,
        title: "Maths - 2ème Bac",
        matiere: "Maths",
        niveau: "2ème Bac",
        creneau: "Samedi 10h - 12h",
        prix: 350,
        places: 8
    },
    {
        id: 2,
        title: "Physique - 2ème Bac",
        matiere: "Physique",
        niveau: "2ème Bac",
        creneau: "Samedi 14h - 16h",
        prix: 350,
        places: 0
    },
    {
        id: 3,
        title: "Maths - 3ème Collège",
        matiere: "Maths",
        niveau: "3ème Collège",
        creneau: "Mercredi 15h - 17h",
        prix: 350,
        places: 12
    },
    {
        id: 4,
        title: "Français - 6ème Primaire",
        matiere: "Français",
        niveau: "6ème Primaire",
        creneau: "Lundi 16h - 17h30",
        prix: 350,
        places: 10
    },
    {
        id: 5,
        title: "Anglais - 3ème Collège",
        matiere: "Anglais",
        niveau: "3ème Collège",
        creneau: "Mardi 17h - 18h30",
        prix: 350,
        places: 6
    },
    {
        id: 6,
        title: "Physique - 1ère Bac",
        matiere: "Physique",
        niveau: "1ère Bac",
        creneau: "Dimanche 10h - 12h",
        prix: 350,
        places: 5
    },
    {
        id: 7,
        title: "Maths - 1ère Bac",
        matiere: "Maths",
        niveau: "1ère Bac",
        creneau: "Dimanche 14h - 16h",
        prix: 350,
        places: 0
    },
    {
        id: 8,
        title: "Arabe - 6ème Primaire",
        matiere: "Arabe",
        niveau: "6ème Primaire",
        creneau: "Jeudi 16h - 17h",
        prix: 350,
        places: 14
    },
    {
        id: 9,
        title: "Français - 1ère Bac",
        matiere: "Français",
        niveau: "1ère Bac",
        creneau: "Vendredi 17h - 19h",
        prix: 350,
        places: 9
    },
    {
        id: 10,
        title: "Anglais - 2ème Bac",
        matiere: "Anglais",
        niveau: "2ème Bac",
        creneau: "Samedi 16h - 18h",
        prix: 350,
        places: 7
    },
    {
        id: 11,
        title: "SVT - 2ème Bac",
        matiere: "SVT",
        niveau: "2ème Bac",
        creneau: "Mercredi 18h - 20h",
        prix: 350,
        places: 4
    },
    {
        id: 12,
        title: "Maths - 6ème Primaire",
        matiere: "Maths",
        niveau: "6ème Primaire",
        creneau: "Samedi 9h - 10h30",
        prix: 350,
        places: 11
    }
];


let coursSelectionnes = [];

const container = document.querySelector("#cart-cours");

function afficherCours() {

const matiere = document.getElementById("filtre-matiere").value;
const niveau = document.getElementById("filtre-niveau").value;
    container.innerHTML ="";
    let compteur = 0;
    for (let i = 0 ; i < courses.length ; i++ ) {
    if (matiere !== courses[i].matiere && matiere !== "Tout") continue
    if (niveau !== courses[i].niveau && niveau !== "Tout") continue
    compteur++

    let coulur;
    let buton;
    let clickbutton;
    let stylbutton
    if (courses[i].places > 0){
        coulur = "disponible" 
        buton = "Ajouter" 
        clickbutton = ""
        stylbutton = "ok"
    }else {
        coulur = "complet" 
        buton = "Complet"
        clickbutton = "disabled"
        stylbutton = "no-ok"
    }
    container.innerHTML += `
    <div class="card">
    <div class="card-title">
    <span>${courses[i].matiere}</span>
    </div>
    
    <p class="card-niveau">${courses[i].niveau}</p>
    
    <div class="card-info">
    <span class="card-icon">⏰</span>
    <span class="card-badge">${courses[i].creneau}</span>
    </div>
    
    <div class="card-info">
    <span class="card-icon">🏷️</span>
    <span class="card-badge">${courses[i].prix}  DH</span>
    </div>
    <p class="card-places ${coulur}"> places   ${courses[i].places}</p>
    <button data-id="${courses[i].id}" class="card-btn ${coulur} ${stylbutton}" type="button" ${clickbutton}>${buton}</button>
    </div>
    
    `
  }
let resultat = document.getElementById("nombre-resultats");

if (compteur === 0) {
    resultat.textContent = "Aucun cours trouvé";
    resultat.classList.add("aucun-resultat");
} else {
    resultat.textContent = compteur + " cours trouvés";
    resultat.classList.remove("aucun-resultat");
}
}
afficherCours()

container.addEventListener("click", function(event) {
        if (event.target.classList.contains("card-btn")) {
            let id = Number(event.target.dataset.id);
            let cours = courses.find(function(element) {
            return element.id === Number(id);
        });
        let existe = false ;
        for ( let i = 0 ; i < coursSelectionnes.length ; i ++) {
            if (coursSelectionnes[i].id === cours.id) {
                existe = true;
                break;
            }
        }
            if (existe === false && cours.places > 0) {
                coursSelectionnes.push(cours)
                afficherSelection();
                afficherCours();
            }   
        }

    });


function afficherSelection() {

    let selection = document.getElementById("cours-selectionnes");

    selection.innerHTML = "";
    for (let i = 0 ; i < coursSelectionnes.length ; i ++) {

        selection.innerHTML += `
            <div class="cours-choisi">
                <p>${coursSelectionnes[i].title} :</p>
                <p>${coursSelectionnes[i].prix} DH/mois</p>

            <button
                class="btn-supprimer"
                data-id="${coursSelectionnes[i].id}"
                type="button">
                Suppr
            </button>
            </div>
        `
    }
    let total = 0 
    for ( let i = 0 ; i < coursSelectionnes.length ; i ++) {
        total += coursSelectionnes[i].prix
    }
    document.getElementById("total").textContent = total

}

const selectionContainer = document.getElementById("cours-selectionnes");

selectionContainer.addEventListener("click", function(event) {
    if (event.target.classList.contains("btn-supprimer")) {
        let id = Number(event.target.dataset.id);
    
    for ( let i = 0 ; i < coursSelectionnes.length ; i ++) {
        if (coursSelectionnes[i].id === id) {
            coursSelectionnes.splice(i , 1)
            break
        }
    }
}
    afficherSelection();
})

const parent = document.getElementById("nom-parent")

parent.addEventListener("input", function(event) {
    let parentname = event.target.value
    let virifie = document.getElementById("erreur-nom")
    if (parentname.trim() === "") {
        virifie.classList.add("erreur")
        virifie.classList.remove("succes")
        parent.classList.add("invalide")
        parent.classList.remove("valide")
        virifie.textContent = "Le nom est obligatoire"
    }else {
        virifie.classList.add("succes")
        virifie.classList.remove("erreur")
        parent.classList.add("valide")
        parent.classList.remove("invalide")
        virifie.textContent = "Nom valide"
    }
})

const email = document.getElementById("email")
let Emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
email.addEventListener("input", function(event) {
    let emailuser = event.target.value
    
    let virifie = document.getElementById("erreur-email")
    if (Emailregex.test(emailuser) === true) {
        virifie.textContent = "Email valide"
        virifie.classList.add("succes")
        virifie.classList.remove("erreur")
        email.classList.add("valide")
        email.classList.remove("invalide")
    }else {
        virifie.textContent = "Email invalide"
        virifie.classList.add("erreur")
        virifie.classList.remove("succes")
        email.classList.add("invalide")
        email.classList.remove("valide")
    }
})

const telephone = document.getElementById("telephone")
let Numeroregex = /^(0[67][0-9]{8}|\+212[67][0-9]{8})$/
telephone.addEventListener("input", function(event) {
    let numeroTelephone = event.target.value
    
    let virifie = document.getElementById("erreur-telephone")
    if ( Numeroregex.test(numeroTelephone) === true) {
        virifie.textContent = "Numero téléphone valide"
        virifie.classList.add("succes")
        virifie.classList.remove("erreur")
        telephone.classList.add("valide")
        telephone.classList.remove("invalide")
    }else {
        virifie.textContent = "Numero téléphone invalide"
        virifie.classList.add("erreur")
        virifie.classList.remove("succes")
        telephone.classList.add("invalide")
        telephone.classList.remove("valide")
    }
})

const eleve = document.getElementById("prenom-eleve")

eleve.addEventListener("input", function(event) {
    let elevename = event.target.value
    let virifie = document.getElementById("erreur-prenom")
    if (elevename.trim() === "") {
        virifie.classList.add("erreur")
        virifie.classList.remove("succes")
        eleve.classList.add("invalide")
        eleve.classList.remove("valide")
        virifie.textContent = "Le Prénom est obligatoire"
    }else {
        virifie.classList.add("succes")
        virifie.classList.remove("erreur")
        eleve.classList.add("valide")
        eleve.classList.remove("invalide")
        virifie.textContent = "Prénom valide"
    }
})


const niveau = document.getElementById("niveau-eleve")

niveau.addEventListener("change", function(event) {
    let niveaueleve = event.target.value
    let virifie = document.getElementById("erreur-niveau")
    if (niveaueleve === "") {
        virifie.textContent = "Veuillez faire un choix, s'il vous plaît."
        virifie.classList.add("erreur")
        virifie.classList.remove("succes")
        niveau.classList.add("invalide")
        niveau.classList.remove("valide")
    }else{
        virifie.textContent = "Niveau valide"
        virifie.classList.add("succes")
        virifie.classList.remove("erreur")
        niveau.classList.add("valide")
        niveau.classList.remove("invalide")
    }
})

const password = document.getElementById("password")
let passwordregex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{8,}$/
password.addEventListener("input", virifierconfirmation )

const confirmation = document.getElementById("confirmation")

confirmation.addEventListener("input", virifierconfirmation )
function virifierconfirmation () {
    let userpassword = password.value
    let virifie = document.getElementById("erreur-password")
    if (passwordregex.test(userpassword) === true) {
        virifie.textContent = "Password valide"
        virifie.classList.add("succes")
        virifie.classList.remove("erreur")
        password.classList.add("valide")
        password.classList.remove("invalide")
    }else {
        virifie.textContent = "8 caractères minimum, une majuscule, un chiffre et un caractère spécial."
        virifie.classList.add("erreur")
        virifie.classList.remove("succes")
        password.classList.add("invalide")
        password.classList.remove("valide")
    }
    let confirmationpass = confirmation.value
    let virifie2 = document.getElementById("erreur-confirmation")
    if (confirmationpass === password.value && passwordregex.test(password.value) === true ) {
        virifie2.textContent = "Password confirme"
        virifie2.classList.add("succes")
        virifie2.classList.remove("erreur")
        confirmation.classList.add("valide")
        confirmation.classList.remove("invalide")
    }else {
        virifie2.textContent = "Password invalide"
        virifie2.classList.add("erreur")
        virifie2.classList.remove("succes")
        confirmation.classList.add("invalide")
        confirmation.classList.remove("valide")
    }
}

const consentement = document.getElementById("consentement")

consentement.addEventListener("change", function() {
    let virifie = document.getElementById("erreur-consentement")
    if (consentement.checked === false) {
        virifie.classList.add("erreur")
        virifie.classList.remove("succes")
        virifie.textContent = "Vous devez accepter le traitement des données personnelles."
    } else {
        virifie.textContent = ""
        virifie.classList.remove("erreur")
    }
})

const formulaire = document.getElementById("form-inscription")
formulaire.addEventListener("submit", function(event) {
    let virifie1 = document.getElementById("erreur-nom")
    let virifie2 = document.getElementById("erreur-email")
    let virifie3 = document.getElementById("erreur-telephone")
    let virifie4 = document.getElementById("erreur-prenom")
    let virifie5 = document.getElementById("erreur-niveau")
    let virifie6 = document.getElementById("erreur-password")
    let virifie7 = document.getElementById("erreur-confirmation")
    let virifie8 = document.getElementById("erreur-consentement")
    let premierChampInvalide = null;
    event.preventDefault()

if (parent.value.trim() === "") {
        if (premierChampInvalide === null){
            premierChampInvalide = parent
        }
        virifie1.classList.add("erreur")
        virifie1.classList.remove("succes")
        parent.classList.add("invalide")
        parent.classList.remove("valide")
        virifie1.textContent = "Le nom est obligatoire"
    }
    if (Emailregex.test(email.value) === false) {
        if (premierChampInvalide === null){
            premierChampInvalide = email
        }
        virifie2.textContent = "Email invalide"
        virifie2.classList.add("erreur")
        virifie2.classList.remove("succes")
        email.classList.add("invalide")
        email.classList.remove("valide")
    }
    if (Numeroregex.test(telephone.value) === false) {
        if (premierChampInvalide === null){
            premierChampInvalide = telephone
        }
        virifie3.textContent = "Numero téléphone invalide"
        virifie3.classList.add("erreur")
        virifie3.classList.remove("succes")
        telephone.classList.add("invalide")
        telephone.classList.remove("valide")
    }
    if (eleve.value.trim() === "") {
        if (premierChampInvalide === null){
            premierChampInvalide = eleve
        }
        virifie4.classList.add("erreur")
        virifie4.classList.remove("succes")
        eleve.classList.add("invalide")
        eleve.classList.remove("valide")
        virifie4.textContent = "Le Prénom est obligatoire"
    }
    if(niveau.value === "") {
        if (premierChampInvalide === null){
            premierChampInvalide = niveau
        }
        virifie5.textContent = "Veuillez faire un choix, s'il vous plaît."
        virifie5.classList.add("erreur")
        virifie5.classList.remove("succes")
        niveau.classList.add("invalide")
        niveau.classList.remove("valide")
    }
    if (passwordregex.test(password.value) === false) {
        if (premierChampInvalide === null){
            premierChampInvalide = password
        }
        virifie6.textContent = "8 caractères minimum, une majuscule, un chiffre et un caractère spécial."
        virifie6.classList.add("erreur")
        virifie6.classList.remove("succes")
        password.classList.add("invalide")
        password.classList.remove("valide")
    }
    if (password.value !== confirmation.value || passwordregex.test(password.value) === false) {
        if (premierChampInvalide === null){
            premierChampInvalide = confirmation
        }
        virifie7.textContent = "Password invalide"
        virifie7.classList.add("erreur")
        virifie7.classList.remove("succes")
        confirmation.classList.add("invalide")
        confirmation.classList.remove("valide")
    }
    if (consentement.checked === false) {
        if (premierChampInvalide === null) {
            premierChampInvalide = consentement
        }
        virifie8.classList.add("erreur")
        virifie8.classList.remove("succes")
        virifie8.textContent = "Vous devez accepter le traitement des données personnelles."
    }
        
    if (premierChampInvalide !== null) {
        premierChampInvalide.focus()
        return
    }
    let erreur = document.getElementById("erreur-cours")
    if (coursSelectionnes.length === 0) {
    
    let fcours = document.getElementById("cours")
    fcours.scrollIntoView()
    erreur.textContent = "Veuillez sélectionner au moins un cours"
    return
   } else {
    erreur.textContent = ""
   }

   let recapitulatif = document.getElementById("recapitulatif")
       recapitulatif.style.display = "block"
       let listeCours = ""
       coursSelectionnes.forEach(function(cours) {
       listeCours += cours.title + " - " +  "<br>"
       })
  
       recapitulatif.innerHTML = `
    
    <h3 class = "title-inscription">Inscription réussie !</h3>
    <p>Prénom de l'élève : ${eleve.value}</p>
    <p>Cours sélectionnés</p>
    <p class = "addcours">${listeCours}</p>
    
`
})



















document.getElementById("filtre-matiere").addEventListener("change", afficherCours)
document.getElementById("filtre-niveau").addEventListener("change", afficherCours)