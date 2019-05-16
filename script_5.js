/*
affichera dans la console les questions suivantes et leurs réponses :

    Est-ce que tous les livres ont été au moins empruntés une fois ?
    Quel est livre le plus emprunté ?
    Quel est le livre le moins emprunté ?
    Trouve le livre avec l'ID: 873495 ;
    Supprime le livre avec l'ID: 133712 ;
    Trie les livres par ordre alphabétique.
*/

const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Les frères Karamazov', id: 450911, rented: 5 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
  ];

// Est-ce que tous les livres ont été au moins empruntés une fois ?
for(let index in books) {
    // console.log(books[index]['title']); 
    (books[index]['rented']>1) ? console.log(books[index]['title'] + " empruntés plus d'une fois "):console.log('jamais empruntés ou une fois');
}
console.log('---------------------------');

//Quel est livre le plus emprunté ?
let moreRead = "";
let pred = 0;

books.forEach(book => {
    if (book.rented > pred) {
        pred = book.rented;
        moreRead = book.title;
    }
  });
console.log(moreRead);
console.log('---------------------------');

// Quel est le livre le moins emprunté ?
let lessRead = "";
let pred2 = 100000; //c'est pas propore mais je verai la correction des best...

books.forEach(book => {
    if (book.rented < pred) {
        pred = book.rented;
        lessRead = book.title;
    }
  });
console.log(lessRead);
console.log('---------------------------');

// Trouve le livre avec l'ID: 873495 
let livre = books.find(item => item.id == 873495);
console.log("le livre avec l'ID: 873495 est :" + livre.title);
console.log('---------------------------');

// Supprime le livre avec l'ID: 133712 ;
let bookDelete = books.findIndex(item => item.id == 133712);
delete books[bookDelete];
console.log("le livre "  + bookDelete.title + "avec l'ID: 133712 a été supprimé.");
console.log('---------------------------');

// Trie les livres par ordre alphabétique.
books.sort((a, b) => (a.title > b.title) ? 1 : -1);
console.log(books);
console.log('---------------------------');