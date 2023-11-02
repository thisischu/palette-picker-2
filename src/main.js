//import uuid with an alias so that it is more descriptive
//npm i uuid (Universally unique id)

import { v4 as uuidV4 } from "uuid";
import paletteData from "./palette.json";
import { getPalettes } from "./data-store";
import "./style.css";

// Add an event listener to the form
const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Get values from the form inputs
  const paletteTitle = document.getElementById("paletteTitleInput").value;
  const color1 = document.getElementById("color1").value;
  const color2 = document.getElementById("color2").value;
  const color3 = document.getElementById("color3").value;

  let temperature;
  const temperatureOptions = document.getElementsByName("temperature");
  
  for (const option of temperatureOptions) {
    if (option.checked) {
      temperature = option.value;
      break;
    }
  }

  // You can now use the extracted values as needed, for example, send them to a server
  console.log("Palette Title: " + paletteTitle);
  console.log("Color 1: " + color1);
  console.log("Color 2: " + color2);
  console.log("Color 3: " + color3);
  console.log("Temperature: " + temperature);
});

// console.log("uuid", uuidV4())

// console.log('Hello World')
// console.log('palette json:', paletteData[0].title)
// console.log(getPalettes())

//git init > git status > git add .> git commit -am "" > go to github and create a new repo without a readme file > copy the commands and paste it into the terminal
