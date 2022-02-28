//appel console

console.log("Hello World");
alert("Salut");
prompt("Comment vas-tu?");

//JS Array
const arr1 = ["A", "B"];
const arr2 = ["C", "D", "E"];
const arr3 = ["F","G","H","I","J","K"]

//array1.concat(array2, array3, ..., arrayX)
const children = arr1.concat(arr2);
//>> ["A", "B","C", "D", "E"]
/*
- concatène (joint) deux tableaux ou plus.
- renvoie un nouveau tableau contenant les tableaux joints.
- ne modifie pas les tableaux existants.
*/

//array.fill(value, start, end)
arr2.fill("X");
//>>["X","X","X"]
arr2.fill("X", 2, 3);
//>>["C","X","X"]
/*
- remplit les éléments spécifiés dans un tableau avec une valeur.
- écrase le tableau d'origine.
Les positions de début et de fin peuvent être spécifiées.
Sinon, tous les éléments seront renseignés.
*/

//array.includes(element, start)
arr1.includes("H");
//>>["A","B","H"]
arr1.includes("H",1);
//>>["A","H","B"]
/*
- méthode retourne true si un tableau contient une valeur spécifiée.
- retourne false si la valeur n'est pas trouvée.
- est sensible à la casse.
*/

//array.pop()
/*
- retire le dernier element d'un array
*/

//array.Shift()
/*
- retire le premier element d'un array
*/

//array.unshift(item1, item2, ..., itemX)
/*
- ajoute des elements au début un array
*/

//array.push(item1, item2, ..., itemX)
/*
- ajoute des elements en fin un array
*/

//array.splice(index, howmany, item1, ....., itemX)
arr2.splice(2,1,"Y","Z");
//>>["C","D","Y","Z"]
/*
- ajoute et/ou supprime des éléments de tableau.
        splice(position, suppression, ajout)
- écrase le tableau d'origine.
*/

//array.slice(start, end)
arr3.slice(2,4);
//>>["H","I"]
/*
- renvoie les éléments sélectionnés dans un tableau, sous la forme d'un nouveau tableau.
- sélectionne à partir d'un début donné , jusqu'à une fin donnée (non incluse) .
- ne modifie pas le tableau d'origine.
*/


//array.constructor
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let text = fruits.constructor;
/*
- renvoie la fonction qui a créé le prototype Array.
Pour les tableaux JavaScript, constructor renvoie :

function Array() { [code natif] }
*/

//
