let heading = document.getElementById("heading")
let generateBTN = document.getElementById("generateBTN")


const codingQuestions = [
  "What is the difference between '==' and '===' in JavaScript?",
  "Explain the concept of closures in JavaScript with a real-world example.",
  "What is event bubbling and event capturing in the DOM?",
  "Explain the difference between 'let', 'const', and 'var' regarding hoisting.",
  "How does the JavaScript V8 engine handle asynchronous code execution?",
  "What is the difference between Prototypal and Classical inheritance?",
  "Explain the difference between call(), apply(), and bind() methods.",
  "What are Promises in JS, and how do they differ from simple callbacks?",
  "What is the difference between localStorage, sessionStorage, and cookies?",
  "Explain the concept of debouncing and throttling in frontend performance.",
  "How do you find the missing number in a given integer array of 1 to 100?",
  "Write a function to check if a given string is a palindrome.",
  "How do you find the duplicate numbers in an array if it contains multiple duplicates?",
  "Explain the difference between a Shallow copy and a Deep copy of an object.",
  "Write a function to find the factorial of a number using recursion.",
  "How do you reverse a linked list in-place?",
  "What is the time complexity of searching an element in a Binary Search Tree (BST)?",
  "Explain the difference between Breadth-First Search (BFS) and Depth-First Search (DFS).",
  "How do you detect a loop/cycle in a Singly Linked List?",
  "Write a function to find the longest common prefix string amongst an array of strings.",
  "How does the Merge Sort algorithm work, and what is its time complexity?",
  "What is a Hash Map, and how are collisions handled in it?",
  "Write a function to find the Fibonacci sequence up to the N-th term using dynamic programming.",
  "How do you find the middle element of a singly linked list in a single pass?",
  "What is the difference between a Stack and a Queue? Give real-world examples.",
  "You have 8 coins, 7 weigh the same, and 1 is lighter. How do you find the light coin using a balance scale only twice?",
  "Why are manhole covers round instead of square?",
  "A man has to take a wolf, a goat, and a cabbage across a river in a boat. He can only take one at a time. How does he do it without anything getting eaten?",
  "You have a 3-liter jug and a 5-liter jug. How can you measure exactly 4 liters of water?",
  "If a clock strikes 6 times in 5 seconds, how long will it take to strike 12 times?",
  "What is the Virtual DOM, and how does React use it to optimize rendering?",
  "Explain the React component lifecycle and how hooks like useEffect replace it.",
  "What is the difference between State and Props in React?",
  "When and why would you use React.memo() or the useMemo hook?",
  "Explain the concept of 'prop drilling' and how you can avoid it.",
  "What is the difference between Controlled and Uncontrolled components in React?",
  "How does React's Reconciliation process work?",
  "What is the difference between SQL (Relational) and NoSQL (Non-Relational) databases?",
  "Explain the concept of RESTful APIs and list the common HTTP methods.",
  "What is MVC (Model-View-Controller) architecture?",
  "What is JWT (JSON Web Token), and how is it used for authentication?",
  "Explain the difference between authentication and authorization.",
  "What is MongoDB, and how does it store data compared to MySQL?",
  "What is middleware in Node.js/Express, and how does it work?",
  "Explain the concept of Indexes in databases and how they speed up queries.",
  "What is CORS (Cross-Origin Resource Sharing), and how do you resolve CORS errors?",
  "What is the difference between Monolithic and Microservices architecture?",
  "How does a load balancer work in a scalable system?",
  "What is the purpose of Git rebase, and how does it differ from Git merge?",
  "Explain the concept of ACID properties in database management systems."
];

generateBTN.addEventListener("click",()=>{
let random  = Math.floor(Math.random()*50)
heading.textContent = codingQuestions[random]
})