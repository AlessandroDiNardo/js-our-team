/*Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.*/


// Creare l’array di oggetti con le informazioni e stampa in console
const teamData = [
    {
        "name" : "Wayne Barnett",
        "role" : "Founder & CEO",
        "img" : "img/wayne-barnett-founder-ceo.jpg"
    },
    {
        "name" : "Angela Caroll",
        "role" : "Chief Editor",
        "img" : "img/angela-caroll-chief-editor.jpg"
    },
    {
        "name" : "Walter Gordon",
        "role" : "Office Manager",
        "img" : "img/walter-gordon-office-manager.jpg"
    },
    {
        "name" : "Angela Lopez",
        "role" : "Social Media Manager",
        "img" : "img/angela-lopez-social-media-manager.jpg"
    },
    {
        "name" : "Scott Estrada",
        "role" : "Developer",
        "img" : "img/scott-estrada-developer.jpg"
    },
    {
        "name" : "Barbara Ramos",
        "role" : "Grapic Designer",
        "img" : "img/barbara-ramos-graphic-designer.jpg"
    }
];

console.log(teamData);

data();

// funzione per creare i div contenenti le img e i dati
function data() {
    for (let i = 0; i < teamData.length; i++) {
        let cards =`
            <div class="cards">
                 <div class="top-cards">
                    <img src="${teamData[i].img}" alt="">
                 </div>
                 <div class="bottom-cards">
                     <div>${teamData[i].name}</div>
                     <div>${teamData[i].role}</div>
                 </div>
            </div>
        `
     
        let myContainer = document.querySelector("div.container").innerHTML += cards;
    }
};



