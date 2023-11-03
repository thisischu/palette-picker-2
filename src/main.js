//import uuid with an alias so that it is more descriptive
//npm i uuid (Universally unique id)

import { v4 as uuidV4 } from "uuid";

import paletteData from "./palette.json" assert {type: "json"};

import { getPalettes } from "./data-store";

const setLocalStorageKey = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getLocalStorageValue = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (err) {
    console.error(err);
    return null;
  }
};

// Add an event listener to the form
const getEl = (el) => document.querySelector(el);
const form = getEl("#form");
form.reset()

const createEl = (el) => document.createElement(el);

//display palette
const displayPalette = (title, c1, c2, c3, temp) => {
 //get Elements
 const userCard = getEl(".palette-cards");

 //create

 const li = createEl("li");

 const paletteCard = createEl("div");
 const paletteTitle = createEl("h3");
 const paletteCardContent = createEl("div");
 const color1 = createEl("p");
 const color2 = createEl("p");
 const color3 = createEl("p");
 const deletePalette = createEl("button");
 const paletteTemp = createEl("p");

 //add content
 paletteTitle.innerHTML = `<h3>${title}</h3>`;

 color1.innerHTML = `<p style="background-color:${c1};">${c1}</p>`;

 color2.innerHTML = `<p style="background-color:${c2};">${c2}</p>`;

 color3.innerHTML = `<p style="background-color:${c3};">${c3}</p>`;

 paletteTemp.innerHTML = `<p>${temp}</p>`;

 deletePalette.innerHTML = "delete palette";

 //append data
 paletteCard.appendChild(paletteTitle);

 paletteCardContent.append(color1,color2,color3)

 paletteCard.append(paletteCardContent, deletePalette, paletteTemp)

 li.appendChild(paletteCard);

 userCard.appendChild(li);
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  //get formData
  const formData = new FormData(event.target);

  //turn form data into obj to access
  const {title, color1, color2, color3, temperature} = Object.fromEntries(formData);

  //saving to local storage
  setLocalStorageKey(title, {title, color1, color2, color3, temperature})


  displayPalette(title, color1, color2, color3, temperature)
  

  form.reset()
});

//display local storage items
const displayLocalStorage = () => {
    Object.keys(localStorage).forEach( key => {
        const {title, color1, color2, color3, temperature} = getLocalStorageValue(key)
        displayPalette(title, color1, color2, color3, temperature)
    })
}

displayLocalStorage()

// console.log("uuid", uuidV4())

// console.log('Hello World')
// console.log('palette json:', paletteData[0].title)
// console.log(getPalettes())

//git init > git status > git add .> git commit -am "" > go to github and create a new repo without a readme file > copy the commands and paste it into the terminal
