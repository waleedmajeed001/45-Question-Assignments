// Greetings: Start with the array you used in Exercise 11, but instead of
// just printing each person’s name, print a message to them. The text of
// each message should be the same, but each message should be personalized
// with the person’s name.

let friendsName: string[] = ["Sulman","Talha","Raza","Taha"];

for (let a = 0; a < friendsName.length; a++) {
    let message = (`Hello ${friendsName[a]}, Can you come my home and starts our groups studys`);
    console.log(message);
}
