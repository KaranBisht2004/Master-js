// for...in Loop Kya Hai?
// Yeh loop kisi bhi Object ke andar ki saari Keys (Properties) par ek-ek karke ghumta hai.


for (const key in object) {
    // Code jo chalega
}


const myObj = {
    HTML : "HyperText Markup Language",
    CSS : "Cascading Style Sheets",
    JS : "javaScript",
    Py : "python"
}
for(const key in myObj){
console.log(myObj[key]);

}



const employee = {
    name: "Rahul",
    role: "Graphic Designer",
    salary: "2.4 LPA"
};

// Is loop me 'key' variable me automatic: "name", "role", "salary" aayega
for (const key in employee) {
    console.log(`Key Name: ${key} | Value: ${employee[key]}`);
}
/* 
  Output:
  Key Name: name | Value: Rahul
  Key Name: role | Value: Graphic Designer
  Key Name: salary | Value: 2.4 LPA
*/



const colors = ["red", "green", "blue"];

for (const index in colors) {
    console.log(colors[index]); //  Output: red green blue
}