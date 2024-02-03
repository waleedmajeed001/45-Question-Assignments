// Favorite Fruit: Make a array of your favorite fruits, and then write a
// series of independent if statements that check for certain fruits in
// your array.

// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of
// fruit is in your array. If the fruit is in your array, the if block
// should print a statement, such as You really like bananas!

let favoriteFruits: string[] = ['banana', 'apple', 'mango'];

if (favoriteFruits.includes('banana')) {
    console.log('You really like bananas!');
}
if (favoriteFruits.includes('apple')) {
    console.log('You really like apples!');
}
if (favoriteFruits.includes('mango')) {
    console.log('You really like mangoes!');
}
if (favoriteFruits.includes('strawberry')) {
    console.log('You really like strawberries!');
} else {
    console.log('Strawberries are not in your list of favorite fruits.');
}
if (favoriteFruits.includes('grape')) {
    console.log('You really like grapes!');
} else {
    console.log('Grapes are not in your list of favorite fruits.');
}