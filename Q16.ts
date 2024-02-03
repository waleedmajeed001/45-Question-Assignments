// More Guests: You just found a bigger dinner table, so now more space is
// available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the
// end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add
// one new guest to the end of your list. • Print a new set of invitation
// messages, one for each person in your list.

let guests: string[] = ["Sulman", "Talha", "Taha"];
console.log("Good news! We found a bigger dinner table!");

guests.unshift("Taha");

let middleIndex = Math.floor(guests.length / 2);
guests.splice(middleIndex, 0, "Noman");

guests.push("Sulman");

guests.forEach((guest, index) => {
  console.log(`Dear ${guest}, you are invited to dinner. Please join us at ${index + 1} PM.`);
});
