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

formGen() //meghivom a formGen fuggvenyt

const table = document.createElement('table') // table letrehozasa
document.body.appendChild(table) //a table hozzaadasa a bodyhoz

const form = document.getElementById('form') //a formot kivesszuk egy valtozoba

RenderTable(tomb) //meghivom a RenderTable fuggvenyt, a tomb paramlterrel

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
        else if(kepv2V == ""){
            const uj =  { //létrehozok egy uj objektumot
                ter: terV, //a ter tulajdonsag erteke terV
                ido: idoV, //a ido tulajdonsag erteke idoV
                kepv: kepvV, //a kepv tulajdonsag erteke kepvV
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
    RenderTable(tomb) //meghivom a RenderTable függvényt
})