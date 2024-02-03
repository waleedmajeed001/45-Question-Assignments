// They think of something you could store in a TypeScript Object. Write a
// program that creates Objects containing these items.

interface Book {
    title: string;
    author: string;
    publicationYear: number;
}

let book1: Book = {
    title: "Bang-e-Dra",
    author: "Allama Iqbal",
    publicationYear: 1924,
}

let book2: Book = {
    title: "Zarb-i-Kalim",
    author: "Allama Iqbal",
    publicationYear: 1936,
}
  
console.log("Book 1:", book1);
console.log("Book 2:", book2);
  
