/**
 * A függvény feladata az, hogy egy megadott paraméter alapján (arrray, tömb) létrehoz egy táblázatot a html-en
 * 
 * @param {Array} array a tömb ami alapján generáljuk a táblázatot
 */
function RenderTable(array) { // RenderTable függvény létrehozása
    fejlecGen() //meghivjuk a fejlecGen fuggvenyt

    const tbody = document.createElement('tbody') // tbody létrehozása
    table.appendChild(tbody) // a tbody-t hozzáadjuk a table-hez

    for (let i = 0; i < array.length; i++) { // végigmegyünk a tömbön egy i-vel
        const tr = document.createElement('tr') // létrehozzuk a sort
        tbody.appendChild(tr) // a sort hozzácsatoljuk a tbody-hoz

        const aktual = array[i] //az aktualis objektumot kiveszem egsy valtozoba
        let index = 0 //az index alap erteke 0
        let tulajdszam = 0 //a tulajdszam azt jeloli, hogy hany tualdjsonága van az aktualis objektumnek

        for (const j in aktual) { //végigmegyunk az aktualis obj tulajdonsagain
            tulajdszam++ //minden tulajdonsagnal noveljuk egyel a tulajdszam-ot
        }

        for (const j in aktual) { //végig megyunk az objektum tualjdonsagain
            if (index == 0) { //ha az index 0 akkor megyunk be
                const td1 = document.createElement('td') // létrehozzuk első cellát a sorban 
                td1.innerHTML = aktual[j] // az első td szövege a tömb i. objektumának ter tulajdonsága
                tr.appendChild(td1) // hozzácsatoljuk a cellát a sorhoz
            }
            if (index == 1) {//ha az index 1 akkor megyunk be
                const td2 = document.createElement('td') // létrehozzuk a második cellát a sorban 
                td2.innerHTML = aktual[j] // a második td szövege a tömb i. objektumának ido tulajdonsága
                tr.appendChild(td2) // hozzácsatoljuk a cellát a sorhoz
            }
            if (index == 2) {//ha az index 2 akkor megyunk be
                const td3 = document.createElement('td') // létrehozzuk a harmadik cellát a sorban 
                td3.innerHTML = aktual[j] // a harmadik td szövege a tömb i. objektumának kepv tulajdonsága

                if (tulajdszam === 3) { //Ha nincs 4. tulajdonság, azaz a tulajdszam = 3-al akkor megyunk be
                    td3.setAttribute('colspan', '2') //beallitjuk a colspant a cellara
                }
                tr.appendChild(td3) // hozzácsatoljuk a cellát a sorhoz
            }
            if (index == 3) {//ha az index 3 akkor megyunk be
                const td4 = document.createElement('td') // létrehozzuk a negyedik cellát a sorban 
                td4.innerHTML = aktual[j] // a negyedik td szövege a tömb i. objektumának kepv2 tulajdonsága
                tr.appendChild(td4) // hozzácsatoljuk a cellát a sorhoz
            }

            index++//az indexet novekljuk egyel
        }
    }
}

/**
 * A  föggvény feladata az, hogy megnézi, hogy az első paramétenek (validelem) van e szövege, és 
 * amennyiben nincs az error helyéhesz kíírja az errorszovege paraméternek megadott szöveget
 * 
 * @param {HTMLElement} validelem a validálni kívánt HTML elem
 * @param {string} errorszovege  a szöveg, ami az error lesz
 * @returns True, ha átmegy, False ha nem
 */
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


/**
 * A függvény feladata az, hogy össszemér két elemet (validelem1, validelem2), ha mindkettő üres akkor 
 * mindkettőhhöz kiírja error-nak az errorszovege paraméternek megadott szöveget, viszont ha csak 
 * az egyik üres akkor a másikhoz nem ír semmit errornak
 * 
 * @param {HTMLElement} validelem1 az első HTML elem
 * @param {HTMLElement} validelem2 a másidok HTML elem
 * @param {string} errorszovege az error szövege
 * @returns True, ha átmegy, False ha nem
 */
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


/**
 * A függvény, egy függvéynen belüli objektum alapján létrehozza a táblázat fejlécét
 */
function fejlecGen(){ //letrehozom a fejlecgeneralas fuggvenyet
    const fejlec = { //a fejlec objektuma
        ter: "Fizika területe",  //az objektum ter tulajdonsága
        ido: "Időszak" ,  //az objektum ido tulajdonsága
        kepv: "Képviselők"  //az objektum kepv tulajdonsága
    }
    const thead = document.createElement('thead') // table letrehozasa
    table.appendChild(thead) //a thead hozzaadasa a tablehez

    const theadr = document.createElement('tr') //tr letrehozasa
    thead.appendChild(theadr) //a tr hozzaadasa a thead hez
    
    let index = 0 // letrehozok egy index valtozot, ami ha lefut a ciklus novekszik egyell

    //a colspan miatt bevezetek egy index valtozot, ami novekszik amikor a ciklus veget er, 
    // amikor ez 2-vel egyenlo azaz a 3. tulajdonság jkövetkezik, és a colspanes, 3. 
    // cellát generálja akkor egy elágazás miatt colspannel hozza létre

    for(const i in fejlec){ //vegigmegyunk a fejelc objektumon
        if(index === 2){ //ha az index a 2, azaz a 3. objektumnál jár az i akkor megyunk be
            const th3 = document.createElement('th') //az elso th letrehozasa
            th3.colSpan = 2 //beallitjuk a colspant a cellara
            th3.innerHTML = fejlec[i] //az elso th szovege a fejlec i. tulajdonsága
            theadr.appendChild(th3) //a th-t hozzaadjuk a trhez
        }
        else{
            const th = document.createElement('th') //laz elso th letrehozasa
            th.innerHTML = fejlec[i] //az elso th szovege a fejlec i. tulajdonsága
            theadr.appendChild(th) //a th-t hozzaadjuk a trhez
        }
        index++ //az indexet novelem 1-el
    }
}

/**
 * A függvény egy a függvényen belüli tömb alapján létrehoz egy formot a HTML-en
 */
function formGen(){ //letrehozzuk a formgeneralas fuggvenyt
    const formtomb = [ //letrehozzuk a formtombot, ami alapjan generalodik a form
        {
            id: "fizika", //a formtomb elso objektumanak id tulajdonsága "fizika"
            label: "Terület megnevezése:" //a formtomb elso objektumanak label tulajdonsága "Terület megnevezése"
        },
        {
            id: "ido", //a formtomb masodik objektumanak id tulajdonsága "ido"
            label: "Időszak:" //a formtomb masodik objektumanak label tulajdonsága "Időszak"
        },
        {
            id: "tudos1", //a formtomb haramdik objektumanak id tulajdonsága "tudos1"
            label: "Első tudós:" //a formtomb haramdik objektumanak label tulajdonsága "Első tudós"
        },
        {
            id: "tudos2", //a formtomb negyedik objektumanak id tulajdonsága "tudos2"
            label: "Második tudós:" //a formtomb negyedik objektumanak label tulajdonsága "Második tudós"
        }
    ]

    const form = document.createElement('form') //letrehozzuk a formot
    form.id = "form" //a form id ja form
    form.action = "#" //a form actionje #
    document.body.appendChild(form) //a formot hozzáadjuk a bodyhoz

    for(let i = 0; i < formtomb.length; i++){ //vegigmegyunk a formtomb-on 
        const div = document.createElement('div') //letrehoznk egy divet
        form.appendChild(div) //a divez hozzáadjuk a formhoz

        const label = document.createElement('label') //letrehozunk egy labelt
        label.innerHTML = formtomb[i].label //a label szovege a label tulajdonság az i. objektumbol
        div.appendChild(label) ///a divhez hozzáadjuk a labelt

        const br = document.createElement('br') //létrehozunk egy br-t 
        div.appendChild(br) //a brt hozzáadjuk a divhez

        const input = document.createElement('input') //létrehozunk egy input mezőt
        div.appendChild(input)  //a inputot hozzáadjuk a divhez
        input.type = "text" //az input type "text"
        input.id = formtomb[i].id //az input idja az id tulajdonság az i. objektumbol
        input.name = formtomb[i].id //az input nameje az id tulajdonság az i. objektumbol

        const br2 = document.createElement('br') //létrehpzunk megegy brt
        div.appendChild(br2) //a brt hozzáadjuk a divhez

        const span = document.createElement('span') //létrehozunk egy spant az errornak
        div.appendChild(span) //a divhez hozzáadjkuk a spant
        span.className = "error" //a span class = error
        
        const br3 = document.createElement('br') //létrehozunk mégegy br-t
        div.appendChild(br3) //a brt hozzáadjuk a divhez
    }

    const button = document.createElement('button')
    button.innerHTML = "Hozzáadás"
    form.appendChild(button)

}

