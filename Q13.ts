// Your Own Array: Think of your favorite mode of transportation, such as
// a motorcycle or a car, and make a list that stores several examples.
// Use your list to print a series of statements about these items, such
// as “I would like to own a Honda motorcycle.”

let favoriteMotorcycle: string[] = ["motorcycle", "car", "bicycle", "scooter"];

for (let i = 0; i < favoriteMotorcycle.length; i++) {
    let condition = (`I would like to own a ${favoriteMotorcycle[i]}.`);
    console.log(condition);
}
