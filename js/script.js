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
  document.getElementById("nombre-resultats").textContent = compteur + "  cours trouvés"
}
afficherCours()

container.addEventListener("click", function(event) {
        if (event.target.classList.contains("card-btn")) {
            let id = event.target.dataset.id;

            console.log(id)
        }
    }
);

document.getElementById("filtre-matiere").addEventListener("change", afficherCours)
document.getElementById("filtre-niveau").addEventListener("change", afficherCours)