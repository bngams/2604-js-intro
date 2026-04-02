/*
 * UNE INSTRUCTION EN JAVASCRIPT
 */
// premiere instruction
// on manipule l'objet console
// appelle la function (ou methode) log de l'objet console
console.log('Hello, World!');

/*
 * UNE FONCTION EN JAVASCRIPT
 */
// premiere fonction
// déclarer et coder la fonction
function sayHello(name) {
    // concatene le nom avec le message et affiche le resultat dans la console
    // console.log('Hello, ' + name + '!');

    // utilise une template string pour afficher le message
    console.log(`Hello, ${name}!`);
}
// utiliser la fonction
// appel de la fonction sayHello avec l'argument 'Boris'
sayHello('Boris');


/*
 * UNE FONCTION "FLECHEE" EN JAVASCRIPT
 */
// autre syntaxe pour déclarer une fonction
// premiere fonction flechee
// const = mot-clé pour déclarer une variable constante
const sayHelloBis = (name) => {
    console.log(`Hello bis, ${name}!`);
}

// utiliser la fonction flechee
sayHelloBis('Boris');


/*
 * VARIABLES EN JAVASCRIPT
 */

// mot clé var (deprecated)
// /!\ var est une ancienne façon de déclarer une variable en JavaScript
// /!\ var => portée globale, peut causer des problèmes de scope => Hoisting
// var something = 'Hello';

// variables simples
// cette variable peut être modifiée
let name = 'Boris';

// /!\ en JavaScript, n'est pas strictement typé
// name = true; // on peut changer le type de la variable

// variable constante
// cette variable ne peut pas être modifiée
const PI = 3.14;
const DISPLAY_ERRORS = true;


// variables de type tableau
const fruits = ['apple', 'banana', 'orange'];
// cette variable est constante, mais le contenu du tableau peut être modifié
fruits.push('grape'); // on peut ajouter un élément au tableau
console.log(fruits); // affiche ['apple', 'banana', 'orange', 'grape']

// interdit de réassigner la variable fruits
// fruits = ['pear', 'peach']; // TypeError: Assignment to constant variable.

const numbers = [1, 2, 3, 4, 5];
console.log(numbers); // affiche [1, 2, 3, 4, 5]
console.log(numbers[0]); // affiche la valeur 1 contenue à l'index 0 du tableau
// modifier une valeur du tableau
numbers[0] = 10;
console.log(numbers[0]); // affiche 10


/*
 * BOUCLES EN JAVASCRIPT
 */

console.log('Affichage des fruits avec une boucle for:');
// boucle for i (classique)
// (avec i++ au lieu de i = i + 1)
for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
    // ...
    // console.log('---');
    // ...
}

console.log('Affichage des fruits avec une boucle for...of:');
for(let fruit of fruits) {
    console.log(fruit);
}

console.log('Affichage des fruits avec une boucle forEach:');
// boucle forEach (plus moderne)
// fruits.forEach(function) 
// /!\ forEach attend une fonction particulière => voir doc
// (method) Array<string>.forEach(callbackfn: (value: string, index: number, array: string[]) => void, thisArg?: any): void 
fruits.forEach((fruit) => {
    console.log(fruit);
});

let whileIndex = 0;
while(fruits.length > 0) {
    console.log(fruits[whileIndex]);
    whileIndex++;
}

do {
    console.log('do ... while => executé au moins une fois');
} while(fruits.length > 0);


/*
 * OBJETS EN JAVASCRIPT
 */

const user = {
    name: 'Boris',
    age: 30,
    sayHello: function() {
        console.log(`Hello, I am ${this.name} 
            and I am ${this.age} years old.`);
    }
};

console.log(user); // affiche { name: 'Boris', age: 30 }
console.log(user.name); // affiche 'Boris'

user.name = 'Alice'; // on peut modifier les propriétés de l'objet
user.email = 'alice@example.com'; // on peut ajouter de nouvelles propriétés à l'objet
console.log(user); // affiche { name: 'Alice', age: 30, email: 'alice@example.com' }


class User {
    // constructeur = initialiser un objet
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // méthode de l'objet User
    sayHello() {
        console.log(`Hello, I am ${this.name} 
            and I am ${this.age} years old.`);
    }
}

const user1 = new User('Boris', 30);
user1.sayHello(); // affiche "Hello, I am Boris and I am 30 years old."