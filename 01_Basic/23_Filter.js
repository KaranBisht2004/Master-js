// Eilter

// Basic Example: Numbers ko filter karna (Sirf Even Numbers chahiye)
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const evenNumbers = numbers.filter((num) => {
    return num % 2 === 0; // Agar true hoga, toh naye array me jayega
});

console.log(evenNumbers); //  Output: [2, 4, 6, 8]
console.log(numbers);     //  Asli array bilkul safe hai: [1, 2, 3, 4, 5, 6, 7, 8]


//  2. Real-World Use Case: Array of Objects ko filter karna 

const codingLang = [
    { languageName: "JavaScript", type: "Frontend/Backend" },
    { languageName: "Python", type: "Data Science" },
    { languageName: "Java", type: "Backend" },
    { languageName: "C++", type: "System" }
];

// Maan lo hume sirf wo languages chahiye jo Backend me use hoti hain:
const backendLang = codingLang.filter((lang) => {
    return lang.type.includes("Backend");
});

console.log(backendLang);
/* 
   Output: 
  [
    { languageName: 'JavaScript', type: 'Frontend/Backend' },
    { languageName: 'Java', type: 'Backend' }
  ]
*/


//  3. THE BIG INTERVIEW TRAP: Agar koi item match na ho toh kya milega?

// "Agar filter ki condition kisi se match na kare, toh kya milega? null ya undefined?"
// Jawab hai: EK KHALI ARRAY `[]` Null ya undefined nahi milta.

const proLang = codingLang.filter(lang => lang.languageName === "Ruby");
console.log(proLang); // Output: [] (Empty Array)


//  SUMMARY 
// ---------------------------------------------------------------------------------
// 1. Returns New Array: Yeh humesha ek naya array return karta hai.
// 2. Pure Method: Asli array me koi badlav (mutation) nahi karta.
// 3. Callback Expectations: Iske callback function se hamesha ek boolean value (true/false) return honi chahiye.








const books = [
    {
        title: "The Hobbit",
        genre: "Fantasy",
        edition: 2012,
        published: 1937
    },
    {
        title: "A Brief History of Time",
        genre: "Science",
        edition: 1998,
        published: 1988
    },
    {
        title: "Atomic Habits",
        genre: "Self-Help",
        edition: 2018,
        published: 2018
    },
    {
        title: "To Kill a Mockingbird",
        genre: "Fiction",
        edition: 2006,
        published: 1960
    },
    {
        title: "Sapiens: A Brief History of Humankind",
        genre: "History",
        edition: 2015,
        published: 2011
    },
    {
        title: "Dune",
        genre: "Sci-Fi",
        edition: 2019,
        published: 1965
    },
    {
        title: "The Silent Patient",
        genre: "Thriller",
        edition: 2019,
        published: 2019
    },
    {
        title: "Deep Work",
        genre: "Self-Help",
        edition: 2016,
        published: 2016
    }
];

const SelfHelpBooks = books.filter( bookGenre => bookGenre.genre === "Self-Help")
console.log(SelfHelpBooks);

const comparison = books.filter(booksComparison => booksComparison.published < 2000)
console.log(comparison);

const Conditions = books.filter ( book => (book.genre === "Sci-Fi" || book.genre === "Science") && book.edition > 2010 )
console.log(Conditions);

const Search = books.filter(history => history.title.includes("History"))
console.log(Search);

const allGenres = books.map(book => book.genre);
const uniqueGenres = [...new Set(allGenres)];
console.log(uniqueGenres);
