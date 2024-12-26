import { Glasses } from "./glasses.js";
import { GlassesList } from "./glassesList.js";

const dataGlasses = [
    { id: "G1", src: "./img/g1.jpg", virtualImg: "./img/v1.png", brand: "Armani Exchange", name: "Bamboo wood", color: "Brown", price: 150, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? " },
    { id: "G2", src: "./img/g2.jpg", virtualImg: "./img/v2.png", brand: "Arnette", name: "American flag", color: "American flag", price: 150, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G3", src: "./img/g3.jpg", virtualImg: "./img/v3.png", brand: "Burberry", name: "Belt of Hippolyte", color: "Blue", price: 100, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G4", src: "./img/g4.jpg", virtualImg: "./img/v4.png", brand: "Coarch", name: "Cretan Bull", color: "Red", price: 100, description: "In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G5", src: "./img/g5.jpg", virtualImg: "./img/v5.png", brand: "D&G", name: "JOYRIDE", color: "Gold", price: 180, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?" },
    { id: "G6", src: "./img/g6.jpg", virtualImg: "./img/v6.png", brand: "Polo", name: "NATTY ICE", color: "Blue, White", price: 120, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G7", src: "./img/g7.jpg", virtualImg: "./img/v7.png", brand: "Ralph", name: "TORTOISE", color: "Black, Yellow", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam." },
    { id: "G8", src: "./img/g8.jpg", virtualImg: "./img/v8.png", brand: "Polo", name: "NATTY ICE", color: "Red, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim." },
    { id: "G9", src: "./img/g9.jpg", virtualImg: "./img/v9.png", brand: "Coarch", name: "MIDNIGHT VIXEN REMIX", color: "Blue, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet." }
];


const getEle = (id) => {
    return document.getElementById(id);
}

let glassesList = new GlassesList();

const showGlassesList = () => {
    const glassesListDiv = getEle("vglassesList");
    dataGlasses.map((glasses) => {
        const glassesItem = new Glasses(glasses.id, glasses.src, glasses.virtualImg, glasses.brand, glasses.name, glasses.color, glasses.price, glasses.description);
        glassesList.addGlasses(glassesItem);
    });
    glassesListDiv.innerHTML = glassesList.renderGlasses();
}
showGlassesList();
const wareGlasses = (e) =>{
    let glassesId = e.target.getAttribute("data-id");
    let glasses = {};
    for(let value of glassesList.glasses){
        if(value.id == glassesId){
            glasses = value;
        }
    }
     showGlassesInfo(glasses);
}
const showGlassesInfo = (object) =>{
    let divAvatar = getEle("avatar");
    let divGlassesInfo = getEle("glassesInfo");
    divAvatar.innerHTML = `
        <img id="glassesId" src="${object.virtualImg}" alt = "${object.name}">
    `
    let status = object.status ? "Stocking" : "Sale out";
    divGlassesInfo.innerHTML = `
        <h5>${object.name} - ${object.brand} (${object.color})</h5>
        <p class="card-text">
            <span class="btn btn-danger btn-sm mr-2">$${object.price}</span>
            <span class="text-success">${status}</span>
        </p>
        <p class="card-text">${object.description}</p>
    `;
    divGlassesInfo.style.display = "block";
}

const removeGlasses = (isDisplay)=>{
    let glasses = getEle("glassesId");
    if(glasses){
        isDisplay ? glasses.style.opacity = 0.9 : glasses.style.opacity = 0;
    }
}
window.wareGlasses = wareGlasses;
window.removeGlasses = removeGlasses;
  



