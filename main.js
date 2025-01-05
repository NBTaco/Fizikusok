const fejlec = { //a fejlec objektuma
    ter: "Fizika területe",  //az objektum ter tulajdonsága
    ido: "Időszak" ,  //az objektum ido tulajdonsága
    kepv: "Képviselők"  //az objektum kepv tulajdonsága
}

const tomb = [
    {
        ter: "Optika", //az elso objektum ter tulajdonsága
        ido: "XI. század" , //az elso objektum ido tulajdonsága
        kepv: "Alhazen"  //az elso objektum kepv tulajdonsága
    },
    
    {
        ter: "Asztronómia", //a masodik objektum ter tulajdonsága
        ido: "reneszánsz" , //a masodik objektum ido tulajdonsága
        kepv: "Kepler", //a masodik objektum kepv tulajdonsága
        kepv2: "Galilei" //a masodik objektum kepv2 tulajdonsága
    },
    
    {
        ter: "Kvantumfizika", //a harmadik objektum ter tulajdonsága
        ido: "XIX-XX. század" , //a harmadik objektum ido tulajdonsága
        kepv: "Max Planck", // /a harmadik objektum kepv tulajdonsága
        kepv2: "Albert Einstein" //a harmadik objektum kepv2 tulajdonsága
    },
    
    {
        ter: "Modern fizika", //a negyedik objektum ter tulajdonsága
        ido: "XX-XXI. század" , //a negyedik objektum ido tulajdonsága
        kepv: "Richard Feynman", //a negyedik objektum kepv tulajdonsága
        kepv2: "Stephen Hawking" //a negyedik objektum kepv2 tulajdonsága
    }
]


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
r1td1.innerHTML = tomb[0].ter //az elso td szovege a tomb elso objektumanak ter tulajdonsága
tbr1.appendChild(r1td1) //hozzáadjuk a cellát az 1. sorhoz

const r1td2 = document.createElement('td') //létrehozzuk a masodik cellat a sorban 
r1td2.innerHTML = tomb[0].ido //az masodik td szovege a tomb elso objektumanak ido tulajdonsága
tbr1.appendChild(r1td2) //hozzáadjuk a cellát az 1. sorhoz

const r1td3 = document.createElement('td') //lletrehozzuk a harmadik cellat a sorban
r1td3.colSpan = 2 //beallitjuk a colspant a cellara
r1td3.innerHTML = tomb[0].kepv //a harmadik td szovege a tomb elso objektumanak kepv tulajdonsága
tbr1.appendChild(r1td3) //hozzáadjuk a cellát az 1. sorhoz

//2
const tbr2 = document.createElement('tr') //létrehozzuk a tbody 2. sorát  
tbody.appendChild(tbr2) //a 2. sort hozzácsatoljuk a tbody- hozz

const r2td1 = document.createElement('td') //létrehozzuk elso cellat a sorban 
r2td1.innerHTML = tomb[1].ter //az elso td szovege a tomb masodik objektumanak ter tulajdonsága
tbr2.appendChild(r2td1) // hozzácsatoljuk a cellát a 2. sorhoz

const r2td2 = document.createElement('td') //létrehozzuk a masodik cellat a sorban 
r2td2.innerHTML = tomb[1].ido //az masodik td szovege a tomb masodik objektumanak ido tulajdonsága

tbr2.appendChild(r2td2) // hozzácsatoljuk a cellát a 2. sorhoz
const r2td3 = document.createElement('td') //lletrehozzuk a harmadik cellat a sorban
r2td3.innerHTML = tomb[1].kepv //a harmadik td szovege a tomb masodik objektumanak kepv tulajdonsága
tbr2.appendChild(r2td3) // hozzácsatoljuk a cellát a 2. sorhoz

const r2td4 = document.createElement('td') //lletrehozzuk a negyedik cellat a sorban
r2td4.innerHTML = tomb[1].kepv2 //a ngyedik td szovege a tomb masodik objektumanak kepv2tulajdonsága
tbr2.appendChild(r2td4) // hozzácsatoljuk a cellát a 2. sorhoz

//3
const tbr3 = document.createElement('tr') //létrehozzuk a tbody 3. sorát  
tbody.appendChild(tbr3) //az 3. sort hozzácsatoljuk a tbody- hozz

const r3td1 = document.createElement('td') //létrehozzuk az elso cellat a sorban  
r3td1.innerHTML = tomb[2].ter //az elso td szovege a tomb harmadik objektumanak ter tulajdonsága
tbr3.appendChild(r3td1) // hozzácsatoljuk a cellát a 3. sorhoz

const r3td2 = document.createElement('td') //létrehozzuk a masodik cellat a sorban  
r3td2.innerHTML = tomb[2].ido //az masodik td szovege a tomb harmadik objektumanak ido tulajdonsága
tbr3.appendChild(r3td2) // hozzácsatoljuk a cellát a 3. sorhoz

const r3td3 = document.createElement('td') //létrehozzuk a harmadik cellat a sorban   
r3td3.innerHTML = tomb[2].kepv //a harmadik td szovege a tomb harmadik objektumanak kepv tulajdonsága
tbr3.appendChild(r3td3) // hozzácsatoljuk a cellát a 3. sorhoz

const r3td4 = document.createElement('td') //létrehozzuk a negyedik cellat a sorban  
r3td4.innerHTML = tomb[2].kepv2 //a ngyedik td szovege a tomb harmadik objektumanak kepv2 tulajdonsága
tbr3.appendChild(r3td4) // hozzácsatoljuk a cellát a 3. sorhoz

//4
const tbr4 = document.createElement('tr') //létrehozzuk a tbody 4. sorát  
tbody.appendChild(tbr4) //a 4. sort hozzácsatoljuk a tbody- hozz

const r4td1 = document.createElement('td') //létrehozzuk az elso cellat a sorban   
r4td1.innerHTML = tomb[3].ter //az elso td szovege a tomb negyedik objektumanak ter tulajdonsága
tbr4.appendChild(r4td1) // hozzácsatoljuk a cellát a 4. sorhoz

const r4td2 = document.createElement('td') //létrehozzuk a masodik cellat a sorban  
r4td2.innerHTML = tomb[3].ido //az masodik td szovege a tomb negyedik objektumanak ido tulajdonsága
tbr4.appendChild(r4td2) // hozzácsatoljuk a cellát a 4. sorhoz

const r4td3 = document.createElement('td') //létrehozzuk a harmadik cellat a sorban  
r4td3.innerHTML = tomb[3].kepv //a harmadik td szovege a tomb negyedik objektumanak kepv tulajdonsága
tbr4.appendChild(r4td3) // hozzácsatoljuk a cellát a 4. sorhoz

const r4td4 = document.createElement('td') //létrehozzuk a negyedik cellat a sorban  
r4td4.innerHTML = tomb[3].kepv2 //a ngyedik td szovege a tomb negyedik objektumanak kepv2 tulajdonsága
tbr4.appendChild(r4td4) // hozzácsatoljuk a cellát a 4. sorhoz

