const urlAPI = 'http://api.nbp.pl/api/cenyzlota';

// Funkcja do pobrania danych z API
async function pobierzCeneZlota() {
    const response = await fetch(urlAPI);
    const data = await response.json();

    // Pobranie wartości ceny złota
    const cenaZlota = data[0].cena;

    // Wyświetlenie ceny złota
    console.log(`Aktualna cena złota: ${cenaZlota} zł/g`);
}

// Wywołanie funkcji
pobierzCeneZlota();