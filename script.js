const jmeno = prompt("Zadejte vaše jméno (bez diakritiky):")
const prijmeni = prompt("Zadejte vaše příjmení (bez diakritiky):")
const domena = "@fit.cvut.cz"

const uzivatelskeJmeno = prijmeni.trim().slice(0,5).toLowerCase() + jmeno.trim().slice(0,3).toLowerCase()

document.body.innerHTML = ` Vaše FIT emailová adresa je: ${uzivatelskeJmeno + domena}
`
