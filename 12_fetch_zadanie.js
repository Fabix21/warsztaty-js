const prompt = require("prompt-sync")({ sigint: true });

// Pobranie kodu waluty od użytkownika
const currencyCode = prompt("Podaj kod waluty (np. USD, EUR): ").toUpperCase();

// Utworzenie adresu URL API
const url = `https://api.nbp.pl/api/exchangerates/rates/a/${currencyCode}`;

// Pobranie danych kursu waluty
fetch(url)
    .then((response) => response.json())
    .then((data) => {
        // Wyświetlenie kursu
        console.log(`Kurs ${currencyCode} z dnia ${data.rates[0].effectiveDate}:`);
        console.log(`1 ${currencyCode} = ${data.rates[0].mid} PLN`);
    })
    .catch((error) => {
        // Wyświetlenie błędu
        console.error(`Błąd pobierania kursu: ${error.message}`);
    });