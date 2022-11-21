/*Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.*/

// DOM
const myContainer = document.querySelector(".container");


// Creare l’array di oggetti con le informazioni e stampa in console
const teamData = [
    {
        "name" : "Wayne Barnett",
        "role" : "Founder & CEO",
        "img" : "wayne-barnett-founder-ceo.jpg"
    },
    {
        "name" : "Angela Caroll",
        "role" : "Chief Editor",
        "img" : "angela-caroll-chief-editor.jpg"
    },
    {
        "name" : "Walter Gordon",
        "role" : "Office Manager",
        "img" : "walter-gordon-office-manager.jpg"
    },
    {
        "name" : "Angela Lopez",
        "role" : "Social Media Manager",
        "img" : "angela-lopez-social-media-manager.jpg"
    },
    {
        "name" : "Scott Estrada",
        "role" : "Developer",
        "img" : "img/scott-estrada-developer.jpg"
    },
    {
        "name" : "Barbara Ramos",
        "role" : "Grapic Designer",
        "img" : "barbara-ramos-graphic-designer.jpg"
    }
];

console.log(teamData);

// stampa dei dati su DOM
for (let i = 0; i < teamData.length; i++) {
    let teamiesimo = teamData[i];
    let bottomCards = document.querySelector(".bottom-cards");
    let divInfo = document.createElement("div");
    divInfo.innerHTML = `${teamiesimo.name} ${teamiesimo.role} ${teamiesimo.img}`;
    bottomCards.append(divInfo);
    console.log(bottomCards)
}