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

function RenderTable(){ //RenderTable fuggveny letrehozasa
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

    for(let i = 0; i < tomb.length; i++){ //végigmegyunk a tombon egy i vel
        const tr = document.createElement('tr') //létrehozzuk a sort  
        tbody.appendChild(tr) //a sort hozzácsatoljuk a tbody hoz
    
        const td1 = document.createElement('td') //létrehozzuk elso cellat a sorban 
        td1.innerHTML = tomb[i].ter //az elso td szovege a tomb i. objektumanak ter tulajdonsága
        tr.appendChild(td1) // hozzácsatoljuk a cellát a sorhoz
    
        const td2 = document.createElement('td') //létrehozzuk a masodik cellat a sorban 
        td2.innerHTML = tomb[i].ido //az masodik td szovege a tomb i. objektumanak ido tulajdonsága
        tr.appendChild(td2) // hozzácsatoljuk a cellát a sorhoz
    
        if(tomb[i].kepv2){ //ha van kepv2 akkor megyunk be
            const td3 = document.createElement('td') //lletrehozzuk a harmadik cellat a sorban
            td3.innerHTML = tomb[i].kepv //a harmadik td szovege a tomb i. objektumanak kepv tulajdonsága
            tr.appendChild(td3) // hozzácsatoljuk a cellát a sorhoz
    
            const td4 = document.createElement('td') //lletrehozzuk a negyedik cellat a sorban
            td4.innerHTML = tomb[i].kepv2 //a ngyedik td szovege a tomb i. objektumanak kepv2 tulajdonsága
            tr.appendChild(td4) // hozzácsatoljuk a cellát a sorhoz
        }
        else{
            const td3 = document.createElement('td') //lletrehozzuk a harmadik cellat a sorban
            td3.colSpan = 2 //beallitjuk a colspant a cellára
            td3.innerHTML = tomb[i].kepv //a harmadik td szovege a tomb i. objektumanak kepv tulajdonsága
            tr.appendChild(td3) // hozzácsatoljuk a cellát a sorhoz
        }
    }
}

function validate(validelem, errorszovege){ //letrehozzuk a validate fuggvenyt
    let valid = true //a valid alapertek true
    if(validelem.value === ""){ //ha a validelem ures akkor megyunk be
        const parent = validelem.parentElement //a parentet kivesszuk egy valotozba
        const error = parent.querySelector('.error') //a parenthez tartozo class erroros spant kivesszuk egy valotozoba
        if(error != ""){ //ha az error nem ures akkor megyunk be
            error.innerHTML = errorszovege //az error szovege az errorszoveg paraméter
        }
        valid = false //a validot falserea allitjuk
    }
    return valid //a valid ertekve terunk vissza
}


function validate2(validelem1, validelem2, errorszovege){
    let valid = true //a valid alapertek true
    if(validelem1.value === "" && validelem2.value === ""){ // ha a validelem1 és a validelem2 is üres akkkor megyunk be
        const parent = validelem1.parentElement //a validelem1 paarentjét kivesszuk egy valtozoba
        const error = parent.querySelector('.error') //a parent erro classos spanjét kivesszuk egy valtozoba
        error.innerHTML = errorszovege //az error szovege errorszovege paraméter

        const parent2 = validelem2.parentElement //a validelem2 parentjét kivesszuk egy valtozoba
        const error2 = parent2.querySelector('.error') //a parent2 error classos spanjét kivesszuk egy valtozoba
        error2.innerHTML = errorszovege //az error2 szovege errorszovege paraméter
        valid = false //a validot falserea allitjuk
    }

    if(validelem2.value === "" && validelem1.value != ""){ //ha csak a validelem2 üres akkor megyunk be
        const parent = validelem2.parentElement //a validelem2 parentjét kivesszük egy valtozoba
        const error = parent.querySelector('.error') //a pernthez tertozo class errort kivesszuk egy valtozoba
        error.innerHTML = "" //az error szovege semmi 
    }

    if(validelem1.value === "" && validelem2.value != ""){ //ha csak a validelem1 üres akkor megyunk be
        const parent = validelem1.parentElement //a validelem1 parentjét kivesszük egy valtozoba
        const error = parent.querySelector('.error') //a pernthez tertozo class errort kivesszuk egy valtozoba
        error.innerHTML = "" //az error szovege semmi 
    }
    return valid //a valid ertekevel treunk vissza
}

RenderTable()//meghivom a RenderTable fuggvenyt

const form = document.getElementById('form') //a formot kivesszuk egy valtozoba

form.addEventListener('submit', function(e){ //a form submit eseményére teszek egy eseménykezelőt
    e.preventDefault() //meggatolom az alapveto mukodeset
    const terHTML = document.getElementById('fizika') //elkerem a html rol a fizikat
    const idoHTML = document.getElementById('ido') //elkerem a html rol a idot
    const kepvHTML = document.getElementById('tudos1') //elkerem a html rol a tudos1-et
    const kepv2HTML = document.getElementById('tudos2') //elkerem a html rol a tudos2-t

    const terV = terHTML.value //a terHTML eretekt kiveszem a terV változóba
    const idoV = idoHTML.value //a idoHTML eretekt kiveszem a idoV változóba
    const kepvV = kepvHTML.value //a kepvHTML eretekt kiveszem a kepvV változóba
    const kepv2V = kepv2HTML.value //a kepv2HTML eretekt kiveszem a kepv2V változóba

    const errorsz = "A mező kitöltése kötelező!" //az error szöveget berakjuk egy valtozoba
    const errorszkepv = "Legalább egy tudóst meg kell adni!" //az error szöveget a kepviselokhoz berakjuk egy valtozoba
    const aktual = e.currentTarget //az aktual valtozo a az aktualis elem
    const errorok = aktual.querySelectorAll('.error') //az errorokat kivesszuk egy valtozoba
    let valid = true //a valid alap értéke true

    for(const i of errorok)     //Az összes error
        i.innerHTML = ""        //helyet uresre allitjuk

    if(!validate(terHTML, errorsz)){ //ha a validate falseal ter vissza akkor megyunk be
        valid = false //a valid erteket falsera allitjuk
    }

    if(!validate(idoHTML, errorsz)){ //ha a validate falseal ter vissza akkor megyunk be
        valid = false //a valid erteket falsera allitjuk
    }

    if(!validate2(kepvHTML, kepv2HTML, errorszkepv)) //ha a validate2 falseal tér vissza akkor megyunk be
        valid = false //a valid erteket falsera allitjuk

    if(valid){ //ha a vaid true akkor megyunk be
        if(kepvV == ""){  //ha a kepvV ures akkor megyunk be 
            const uj =  { //létrehozok egy uj objektumot
                ter: terV, //a ter tulajdonsag erteke terV
                ido: idoV, //a ido tulajdonsag erteke idoV
                kepv: kepv2V, //a kepv tulajdonsag erteke kepv2V
            }
            tomb.push(uj) //a tombbe berakom az uj objektumot
        }
        else{ 
        const uj =  { //létrehozok egy uj objektumot
                ter: terV, //a ter tulajdonsag erteke terV
                ido: idoV, //a ido tulajdonsag erteke idoV
                kepv: kepvV, //a kepv tulajdonsag erteke kepvV
                kepv2: kepv2V, //a kepv2 tulajdonsag erteke kepv2V
        }
        tomb.push(uj) //a tombbe berakom az uj objektumot
    }
    }
    table.innerHTML = "" //a table-t clearelem
    RenderTable() //meghivom a RenderTable függvényt
})