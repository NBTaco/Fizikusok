const ter = "Fizika területe" //Létrehozunk egy változót a "Fizika területe"-nek
const ido = "Időszak" //Létrehozunk egy változót az "Időszak"-nak
const kepv = "Képviselők" //Létrehozunk egy változót a "Képviselők"-nek
const ter1 = "Optika" //Létrehozunk egy változót az "Optika"-nak
const ido1 = "XI. század" //Létrehozunk egy változót a "XI. század"-nak
const kepv1 = "Alhazen" //Létrehozunk egy változót az "Alhazen"-nek
const ter2 = "Asztronómia" //Létrehozunk egy változót az "Asztronómia"-nek
const ido2 = "reneszánsz" //Létrehozunk egy változót a "reneszánsz"-nak
const kepv2 = "Kepler" //Létrehozunk egy változót a "Kepler"-nek
const kepv3 = "Galilei" //Létrehozunk egy változót a "Galilei"-nek
const ter3 = "Kvantumfizika" //Létrehozunk egy változót a "Kvantumfizika"-nak
const ido3 = "XIX-XX. század" //Létrehozunk egy változót a "XIX-XX. század"-nak
const kepv4 = "Max Planck" //Létrehozunk egy változót a "Max Planck"-nek
const kepv5 = "Albert Einstein" //Létrehozunk egy változót az "Albert Einstein"-nek
const ter4 = "Modern fizika" //Létrehozunk egy változót a "Modern fizika"-nak
const ido4 = "XX-XXI. század" //Létrehozunk egy változót a "XX-XXI. század"-nak
const kepv6 = "Richard Feynman" //Létrehozunk egy változót a "Richard Feynman"-nek
const kepv7 = "Stephen Hawking" //Létrehozunk egy változót a "Stephen Hawking"-nak


const table = document.createElement('table') // table letrehozasa
document.body.appendChild(table) //a table hozzaadasa a bodyhoz

const thead = document.createElement('thead') // table letrehozasa
table.appendChild(thead) //a thead hozzaadasa a tablehez

const theadr = document.createElement('tr') //tr letrehozasa
thead.appendChild(theadr) //a tr hozzaadasa a thead hez

const thc1 = document.createElement('th') //laz elso th letrehozasa
thc1.innerHTML = ter //az elso th szovege ter valtozo
theadr.appendChild(thc1) //a th-t hozzaadjuk a trhez
 
const thc2 = document.createElement('th') //a haramdik th letrehozasa
thc2.innerHTML = ido //a masodik th szovege ido valtozo
theadr.appendChild(thc2) //a th-t hozzaadjuk a trhez

const thc3 = document.createElement('th') //a masodik th letrehozasa 
thc3.colSpan = 2 //beallitjuk a colspant a cellara
thc3.innerHTML = kepv //a hatmadik th szovege kepv valtozo
theadr.appendChild(thc3) //a th-t hozzaadjuk a trhez

const tbody = document.createElement('tbody') //tbody letrehozasa
table.appendChild(tbody) //a tbdoyt hozzaadjuk a table-hez

//1
const tbr1 = document.createElement('tr') //létrehozzuk a tbody 1. sorát  
tbody.appendChild(tbr1) //az 1. sort hozzácsatoljuk a tbody hoz

const r1td1 = document.createElement('td') //létrehozzuk elso cellat a sorban 
r1td1.innerHTML = ter1 //az elso td szovege ter1 valtozo
tbr1.appendChild(r1td1) //hozzáadjuk a cellát az 1. sorhoz

const r1td2 = document.createElement('td') //létrehozzuk a masodik cellat a sorban 
r1td2.innerHTML = ido1 //az masodik td szovege ido1 valtozo
tbr1.appendChild(r1td2) //hozzáadjuk a cellát az 1. sorhoz

const r1td3 = document.createElement('td') //lletrehozzuk a harmadik cellat a sorban
r1td3.colSpan = 2 //beallitjuk a colspant a cellara
r1td3.innerHTML = kepv1 //a harmadik td szovege kepv1 valtozo
tbr1.appendChild(r1td3) //hozzáadjuk a cellát az 1. sorhoz

//2
const tbr2 = document.createElement('tr') //létrehozzuk a tbody 2. sorát  
tbody.appendChild(tbr2) //a 2. sort hozzácsatoljuk a tbody- hozz

const r2td1 = document.createElement('td') //létrehozzuk elso cellat a sorban 
r2td1.innerHTML = ter1 //az elso td szovege ter2 valtozo
tbr2.appendChild(r2td1) // hozzácsatoljuk a cellát a 2. sorhoz

const r2td2 = document.createElement('td') //létrehozzuk a masodik cellat a sorban 
r2td2.innerHTML = ido2 //az masodik td szovege ido2 valtozo
tbr2.appendChild(r2td2) // hozzácsatoljuk a cellát a 2. sorhoz

const r2td3 = document.createElement('td') //lletrehozzuk a harmadik cellat a sorban
r2td3.innerHTML = kepv2 //a harmadik td szovege kepv2 valtozo
tbr2.appendChild(r2td3) // hozzácsatoljuk a cellát a 2. sorhoz

const r2td4 = document.createElement('td') //lletrehozzuk a negyedik cellat a sorban
r2td4.innerHTML = kepv3 //a ngyedik td szovege kepv3 valtozo
tbr2.appendChild(r2td4) // hozzácsatoljuk a cellát a 2. sorhoz

//3
const tbr3 = document.createElement('tr') //létrehozzuk a tbody 3. sorát  
tbody.appendChild(tbr3) //az 3. sort hozzácsatoljuk a tbody- hozz

const r3td1 = document.createElement('td') //létrehozzuk az elso cellat a sorban  
r3td1.innerHTML = ter3 //az elso td szovege ter3 valtozo
tbr3.appendChild(r3td1) // hozzácsatoljuk a cellát a 3. sorhoz

const r3td2 = document.createElement('td') //létrehozzuk a masodik cellat a sorban  
r3td2.innerHTML = ido3 //az masodik td szovege ido3 valtozo
tbr3.appendChild(r3td2) // hozzácsatoljuk a cellát a 3. sorhoz

const r3td3 = document.createElement('td') //létrehozzuk a harmadik cellat a sorban   
r3td3.innerHTML = kepv4 //a harmadik td szovege kepv4 valtozo
tbr3.appendChild(r3td3) // hozzácsatoljuk a cellát a 3. sorhoz

const r3td4 = document.createElement('td') //létrehozzuk a negyedik cellat a sorban  
r3td4.innerHTML = kepv5 //a ngyedik td szovege kepv5 valtozo
tbr3.appendChild(r3td4) // hozzácsatoljuk a cellát a 3. sorhoz

//4
const tbr4 = document.createElement('tr') //létrehozzuk a tbody 4. sorát  
tbody.appendChild(tbr4) //a 4. sort hozzácsatoljuk a tbody- hozz

const r4td1 = document.createElement('td') //létrehozzuk az elso cellat a sorban   
r4td1.innerHTML = ter4 //az elso td szovege ter4 valtozo
tbr4.appendChild(r4td1) // hozzácsatoljuk a cellát a 4. sorhoz

const r4td2 = document.createElement('td') //létrehozzuk a masodik cellat a sorban  
r4td2.innerHTML = ido4 //az masodik td szovege ido4 vaoltozo
tbr4.appendChild(r4td2) // hozzácsatoljuk a cellát a 4. sorhoz

const r4td3 = document.createElement('td') //létrehozzuk a harmadik cellat a sorban  
r4td3.innerHTML = kepv6 //a harmadik td szovege kepv6 vaoltozo
tbr4.appendChild(r4td3) // hozzácsatoljuk a cellát a 4. sorhoz

const r4td4 = document.createElement('td') //létrehozzuk a negyedik cellat a sorban  
r4td4.innerHTML = kepv7 //a ngyedik td szovege kepv7 valtozo
tbr4.appendChild(r4td4) // hozzácsatoljuk a cellát a 4. sorhoz

