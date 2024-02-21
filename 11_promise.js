const checkPartAvailability = (carModel, partName) => {
    return new Promise((resolve, reject) => {
        // Symulacja zapytania do API
        setTimeout(() => {
            const isAvailable = Math.random() > 0.5; // Losowy wynik
            if (isAvailable) {
                resolve(`Część ${partName} do ${carModel} jest dostępna!`);
            } else {
                reject(`Część ${partName} do ${carModel} jest niedostępna.`);
            }
        }, 2000); // Symulacja czasu oczekiwania na odpowiedź
    });
};

checkPartAvailability("BMW", "tylni spojler")
    .then(message => console.log(message))
    .catch(fail => console.log(fail));

/// Zagadnienie Event loop ->  https://www.youtube.com/watch?v=cCOL7MC4Pl0
/// zagadka
console.log("syncro 1") //wojtek 1 2 4 3 // mateusz 1 2 3 4 // 1 4 2 3
setTimeout(()=> console.log("timeout 2"),0);
Promise.resolve().then(() => console.log("Promise 3"));
console.log("Syncro 4")