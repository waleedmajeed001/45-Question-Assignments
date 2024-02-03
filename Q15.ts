// Changing Guest List: You just heard that one of your guests can’t make
// the dinner, so you need to send out a new set of invitations. You’ll
// have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the
// end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it
// with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is
// still in your list.

let guestList: string[] = ["Sulman", "Talha", "Raza", "Taha"];
let guestWhoCantMakeIt: string = "Guest2";
console.log(`${guestWhoCantMakeIt} can't make it to the dinner.`);
var indexOfGuestWhoCantMakeIt: number = guestList.indexOf(guestWhoCantMakeIt);

if (indexOfGuestWhoCantMakeIt !== 1) {
    let newPersonToInvite: string = "NewGuest";
    guestList[indexOfGuestWhoCantMakeIt] = newPersonToInvite;
    console.log("Updated Invitation List:");

    for (let guest of guestList) {
        console.log(`Dear ${guest}, you are invited to the dinner.`);
    }
} else {
    console.log(`${guestWhoCantMakeIt} is not in the guest list.`);
}
