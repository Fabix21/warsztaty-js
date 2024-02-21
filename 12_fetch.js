const API_URL = 'http://api.nbp.pl/api/cenyzlota';

fetch(API_URL)
    .then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error(`Błąd pobierania danych: ${response.status}`);
        }
    })
    .then((data) => {
        // Pobranie ceny złota z obiektu JSON
        const cenaZlota = data[0].cena;
        console.log(`Cena złota: ${cenaZlota} zł/g`);
    })
    .catch((error) => {
        console.error(`Wystąpił błąd: ${error.message}`);
    });