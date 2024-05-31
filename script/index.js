//Destructuring

// for obecjects
// let person = {
//     age:40,
//     name:'bob'

// }
// let {name,age} = person;  //variable and property name must be the same in order for this to work

// // console.log(name,age);

// // for arrays - based on the order of the array
// let people = ['bob', 'john', 'garth'];
// let [first,second,third] = people;


// console.log(third);

// let result
// async function fetchData() {
//     let {results} = await (await fetch('https://randomuser.me/api?results=10')).json()
//     // let {results} = await data.json()
//     result = results
//     // console.log(result);
//     writeData()
// }
// fetchData()

// let tbody = document.querySelector('tbody');
// function writeData() {
//     result.forEach(item => { //callback function - because you passing a function as an argument.
//         tbody.innerHTML += `<tr>
//                                 <td>${item.id.name}</td>
//                                 <td>${item.name.first}</td>
//                                 <td>${item.name.last}</td>
//                                 <td>${item.location.city}</td>
//                                 <td><img src="${item.picture.thumbnail}"></td>
//                                 <td>${item.dob.age}</td>
//                                 <td>${item.dob.date}</td>
//                             </tr>
//                             `
//     })
// }

// rest operator
let theArgs = []

function sum(...theArgs) {
    let total = 0;
    for (const arg of theArgs) {
        total += arg; // you of used reduce() to add all values inside the array
    }
    return total;
}

console.log(sum(5, 2, 1));
//Expected output 8

console.log(sum(2, 1, 9, 10));
//Expected output 22


function moreArgs(a, b, ...otherArgs){
    console.log(a);
    console.log(b);
    console.log(otherArgs);
}

moreArgs(10, 9, 3, 5, 7,9 ,8)

// defaut parameters
function multiply(a, b=2){
    return a*b
}

console.log('Addition: ' + multiply(5));
