const fejlec = { //a fejlec objektuma
    ter: "Fizika területe",  //az objektum ter tulajdonsága
    ido: "Időszak" ,  //az objektum ido tulajdonsága
    kepv: "Képviselők"  //az objektum kepv tulajdonsága
}

const elso = { //az elso sor objektuma
    ter: "Optika", //az objektum ter tulajdonsága
    ido: "XI. század" ,  //az objektum ido tulajdonsága
    kepv: "Alhazen"  //az objektum kepv tulajdonsága
}

const masodik = { //a masodik sor objektuma
    ter: "Asztronómia", //az objektum ter tulajdonsága
    ido: "reneszánsz" , //az objektum ido tulajdonsága
    kepv: "Kepler", //az objektum kepv tulajdonsága
    kepv2: "Galilei" //az objektum kepv2 tulajdonsága
}

const harmadik = { //a harmadik sor objektuma
    ter: "Kvantumfizika", //az objektum ter tulajdonsága
    ido: "XIX-XX. század" , //az objektum ido tulajdonsága
    kepv: "Max Planck", //az objektum kepv tulajdonsága 
    kepv2: "Albert Einstein" //az objektum kepv2 tulajdonsága
}

const negyedik = { //a negyedik sor objektuma
    ter: "Modern fizika", //az objektum ter tulajdonsága
    ido: "XX-XXI. század" , //az objektum ido tulajdonsága
    kepv: "Richard Feynman", //az obbjektum kepv tulajdonsága
    kepv2: "Stephen Hawking" //az objektum kepv2 tulajdonsága
}


const table = document.createElement('table') // table letrehozasa
document.body.appendChild(table) //a table hozzaadasa a bodyhoz

const thead = document.createElement('thead') // table letrehozasa
table.appendChild(thead) //a thead hozzaadasa a tablehez

const theadr = document.createElement('tr') //tr letrehozasa
thead.appendChild(theadr) //a tr hozzaadasa a thead hez

const thc1 = document.createElement('th') //laz elso th letrehozasa
thc1.innerHTML = fejlec.ter //az elso th szovege a fejlec ter tulajdonsága
theadr.appendChild(thc1) //a th-t hozzaadjuk a trhez
 
const thc2 = document.createElement('th') //a haramdik th letrehozasa
thc2.innerHTML = fejlec.ido //a masodik th szovege fejlec ido tulajdonsága
theadr.appendChild(thc2) //a th-t hozzaadjuk a trhez

const thc3 = document.createElement('th') //a masodik th letrehozasa 
thc3.colSpan = 2 //beallitjuk a colspant a cellara
thc3.innerHTML = fejlec.kepv //a hatmadik th szovege dejlec kepv tulajdonsága
theadr.appendChild(thc3) //a th-t hozzaadjuk a trhez

const tbody = document.createElement('tbody') //tbody letrehozasa
table.appendChild(tbody) //a tbdoyt hozzaadjuk a table-hez

//1
const tbr1 = document.createElement('tr') //létrehozzuk a tbody 1. sorát  
tbody.appendChild(tbr1) //az 1. sort hozzácsatoljuk a tbody hoz

const r1td1 = document.createElement('td') //létrehozzuk elso cellat a sorban 
r1td1.innerHTML = elso.ter //az elso td szovege az elso sor objektum ter tulajdonsága
tbr1.appendChild(r1td1) //hozzáadjuk a cellát az 1. sorhoz

const r1td2 = document.createElement('td') //létrehozzuk a masodik cellat a sorban 
r1td2.innerHTML = elso.ido //az masodik td szovege az elso sor objektum ido tulajdonsága
tbr1.appendChild(r1td2) //hozzáadjuk a cellát az 1. sorhoz

const r1td3 = document.createElement('td') //lletrehozzuk a harmadik cellat a sorban
r1td3.colSpan = 2 //beallitjuk a colspant a cellara
r1td3.innerHTML = elso.kepv //a harmadik td szovege az elso sor objektum kepv tulajdonsága
tbr1.appendChild(r1td3) //hozzáadjuk a cellát az 1. sorhoz

//2
const tbr2 = document.createElement('tr') //létrehozzuk a tbody 2. sorát  
tbody.appendChild(tbr2) //a 2. sort hozzácsatoljuk a tbody- hozz

const r2td1 = document.createElement('td') //létrehozzuk elso cellat a sorban 
r2td1.innerHTML = masodik.ter //az elso td szovege a masodik sor objektumanak ter tulajdonsága
tbr2.appendChild(r2td1) // hozzácsatoljuk a cellát a 2. sorhoz

const r2td2 = document.createElement('td') //létrehozzuk a masodik cellat a sorban 
r2td2.innerHTML = masodik.ido //az masodik td szovege a masodik sor objektumanak ido tulajdonsága
tbr2.appendChild(r2td2) // hozzácsatoljuk a cellát a 2. sorhoz

const r2td3 = document.createElement('td') //lletrehozzuk a harmadik cellat a sorban
r2td3.innerHTML = masodik.kepv //a harmadik td szovege a masodik sor objektumanak kepv tulajdonsága
tbr2.appendChild(r2td3) // hozzácsatoljuk a cellát a 2. sorhoz

const r2td4 = document.createElement('td') //lletrehozzuk a negyedik cellat a sorban
r2td4.innerHTML = masodik.kepv2 //a ngyedik td szovege a masodik sor objektumanak kepv2 tulajdonsága
tbr2.appendChild(r2td4) // hozzácsatoljuk a cellát a 2. sorhoz

//3
const tbr3 = document.createElement('tr') //létrehozzuk a tbody 3. sorát  
tbody.appendChild(tbr3) //az 3. sort hozzácsatoljuk a tbody- hozz

const r3td1 = document.createElement('td') //létrehozzuk az elso cellat a sorban  
r3td1.innerHTML = harmadik.ter //az elso td szovege a harmadik sor objektumanak ter tulajdonsága
tbr3.appendChild(r3td1) // hozzácsatoljuk a cellát a 3. sorhoz

const r3td2 = document.createElement('td') //létrehozzuk a masodik cellat a sorban  
r3td2.innerHTML = harmadik.ido //az masodik td szovege a harmadik sor objektumanak ido tulajdonsága
tbr3.appendChild(r3td2) // hozzácsatoljuk a cellát a 3. sorhoz

const r3td3 = document.createElement('td') //létrehozzuk a harmadik cellat a sorban   
r3td3.innerHTML = harmadik.kepv //a harmadik td szovege a harmadik sor objektumanak kepv tulajdonsága
tbr3.appendChild(r3td3) // hozzácsatoljuk a cellát a 3. sorhoz

const r3td4 = document.createElement('td') //létrehozzuk a negyedik cellat a sorban  
r3td4.innerHTML = harmadik.kepv2 //a ngyedik td szovege a harmadik sor objektumanak kepv2 tulajdonsága
tbr3.appendChild(r3td4) // hozzácsatoljuk a cellát a 3. sorhoz

//4
const tbr4 = document.createElement('tr') //létrehozzuk a tbody 4. sorát  
tbody.appendChild(tbr4) //a 4. sort hozzácsatoljuk a tbody- hozz

const r4td1 = document.createElement('td') //létrehozzuk az elso cellat a sorban   
r4td1.innerHTML = negyedik.ter //az elso td szovege a negyedik sor objektumanak ter tulajdonsága
tbr4.appendChild(r4td1) // hozzácsatoljuk a cellát a 4. sorhoz

const r4td2 = document.createElement('td') //létrehozzuk a masodik cellat a sorban  
r4td2.innerHTML = negyedik.ido //az masodik td szovege a negyedik sor objektumanak ido tulajdonsága
tbr4.appendChild(r4td2) // hozzácsatoljuk a cellát a 4. sorhoz

const r4td3 = document.createElement('td') //létrehozzuk a harmadik cellat a sorban  
r4td3.innerHTML = negyedik.kepv //a harmadik td szovege a negyedik sor objektumanak kepv tulajdonsága
tbr4.appendChild(r4td3) // hozzácsatoljuk a cellát a 4. sorhoz

const r4td4 = document.createElement('td') //létrehozzuk a negyedik cellat a sorban  
r4td4.innerHTML = negyedik.kepv2 //a ngyedik td szovege a negyedik sor objektumanak kepv2 tulajdonsága
tbr4.appendChild(r4td4) // hozzácsatoljuk a cellát a 4. sorhoz

