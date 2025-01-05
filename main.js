const table = document.createElement('table') // table letrehozasa
document.body.appendChild(table) //a table hozzaadasa a bodyhoz

const thead = document.createElement('thead') // table letrehozasa
table.appendChild(thead) //a thead hozzaadasa a tablehez

const theadr = document.createElement('tr') //tr letrehozasa
thead.appendChild(theadr) //a tr hozzaadasa a thead hez

const thc1 = document.createElement('th') //laz elso th letrehozasa
thc1.innerHTML = "Fizika területe" //az elso th szovege: Fizika területe
theadr.appendChild(thc1) //a th-t hozzaadjuk a trhez
 
const thc2 = document.createElement('th') //a haramdik th letrehozasa
thc2.innerHTML = "Időszak" //a masodik th szovege: Időszak
theadr.appendChild(thc2) //a th-t hozzaadjuk a trhez

const thc3 = document.createElement('th') //a masodik th letrehozasa 
thc3.colSpan = 2 //beallitjuk a colspant a cellara
thc3.innerHTML = "Képviselők" //a hatmadik th szovege: Képviselők
theadr.appendChild(thc3) //a th-t hozzaadjuk a trhez

const tbody = document.createElement('tbody') //tbody letrehozasa
table.appendChild(tbody) //a tbdoyt hozzaadjuk a table-hez

//1
const tbr1 = document.createElement('tr') //létrehozzuk a tbody 1. sorát  
tbody.appendChild(tbr1) //az 1. sort hozzácsatoljuk a tbody hoz

const r1td1 = document.createElement('td') //létrehozzuk elso cellat a sorban 
r1td1.innerHTML = "Optika" //az elso td szovege: Optika
tbr1.appendChild(r1td1) //hozzáadjuk a cellát az 1. sorhoz

const r1td2 = document.createElement('td') //létrehozzuk a masodik cellat a sorban 
r1td2.innerHTML = "XI. század" //az masodik td szovege: XI. század
tbr1.appendChild(r1td2) //hozzáadjuk a cellát az 1. sorhoz

const r1td3 = document.createElement('td') //lletrehozzuk a harmadik cellat a sorban
r1td3.colSpan = 2 //beallitjuk a colspant a cellara
r1td3.innerHTML = "Alhazen" //a harmadik td szovege: Alhazen
tbr1.appendChild(r1td3) //hozzáadjuk a cellát az 1. sorhoz

//2
const tbr2 = document.createElement('tr') //létrehozzuk a tbody 2. sorát  
tbody.appendChild(tbr2) //a 2. sort hozzácsatoljuk a tbody- hozz

const r2td1 = document.createElement('td') //létrehozzuk elso cellat a sorban 
r2td1.innerHTML = "Asztronómia" //az elso td szovege: Asztronómia
tbr2.appendChild(r2td1) // hozzácsatoljuk a cellát a 2. sorhoz

const r2td2 = document.createElement('td') //létrehozzuk a masodik cellat a sorban 
r2td2.innerHTML = "reneszánsz" //az masodik td szovege: reneszánsz
tbr2.appendChild(r2td2) // hozzácsatoljuk a cellát a 2. sorhoz

const r2td3 = document.createElement('td') //lletrehozzuk a harmadik cellat a sorban
r2td3.innerHTML = "Kepler" //a harmadik td szovege: Kepler
tbr2.appendChild(r2td3) // hozzácsatoljuk a cellát a 2. sorhoz

const r2td4 = document.createElement('td') //lletrehozzuk a negyedik cellat a sorban
r2td4.innerHTML = "Galilei" //a ngyedik td szovege: Galilei
tbr2.appendChild(r2td4) // hozzácsatoljuk a cellát a 2. sorhoz

//3
const tbr3 = document.createElement('tr') //létrehozzuk a tbody 3. sorát  
tbody.appendChild(tbr3) //az 3. sort hozzácsatoljuk a tbody- hozz

const r3td1 = document.createElement('td') //létrehozzuk az elso cellat a sorban  
r3td1.innerHTML = "Kvantumfizika" //az elso td szovege: Kvantumfizika
tbr3.appendChild(r3td1) // hozzácsatoljuk a cellát a 3. sorhoz

const r3td2 = document.createElement('td') //létrehozzuk a masodik cellat a sorban  
r3td2.innerHTML = "XIX-XX. század" //az masodik td szovege: XIX-XX. század
tbr3.appendChild(r3td2) // hozzácsatoljuk a cellát a 3. sorhoz

const r3td3 = document.createElement('td') //létrehozzuk a harmadik cellat a sorban   
r3td3.innerHTML = "Max Planck" //a harmadik td szovege: Max Planck
tbr3.appendChild(r3td3) // hozzácsatoljuk a cellát a 3. sorhoz

const r3td4 = document.createElement('td') //létrehozzuk a negyedik cellat a sorban  
r3td4.innerHTML = "Albert Einstein" //a ngyedik td szovege: Albert Einstein
tbr3.appendChild(r3td4) // hozzácsatoljuk a cellát a 3. sorhoz

//4
const tbr4 = document.createElement('tr') //létrehozzuk a tbody 4. sorát  
tbody.appendChild(tbr4) //a 4. sort hozzácsatoljuk a tbody- hozz

const r4td1 = document.createElement('td') //létrehozzuk az elso cellat a sorban   
r4td1.innerHTML = "Modern fizika" //az elso td szovege: Modern fizika
tbr4.appendChild(r4td1) // hozzácsatoljuk a cellát a 4. sorhoz

const r4td2 = document.createElement('td') //létrehozzuk a masodik cellat a sorban  
r4td2.innerHTML = "XX-XXI. század" //az masodik td szovege: XX-XXI. század
tbr4.appendChild(r4td2) // hozzácsatoljuk a cellát a 4. sorhoz

const r4td3 = document.createElement('td') //létrehozzuk a harmadik cellat a sorban  
r4td3.innerHTML = "Richard Feynman" //a harmadik td szovege: Richard Feynman
tbr4.appendChild(r4td3) // hozzácsatoljuk a cellát a 4. sorhoz

const r4td4 = document.createElement('td') //létrehozzuk a negyedik cellat a sorban  
r4td4.innerHTML = "Stephen Hawking" //a ngyedik td szovege: Stephen Hawking
tbr4.appendChild(r4td4) // hozzácsatoljuk a cellát a 4. sorhoz

