//import uuid with an alias so that it is more descriptive
//npm i uuid (Universally unique id)

import { v4 as uuidV4 } from 'uuid';
import paletteData from './palette.json'
import { getPalettes } from './data-store'
import './style.css'


console.log("uuid", uuidV4())

console.log('Hello World')
console.log('palette json:', paletteData[0].title)
console.log(getPalettes())