// Magicians: Make a array of magician’s names. Pass the array to a function called
// show_magicians(), which prints the name of each magician in the array.

let magicianNames: string[] = ["Harry Houdini", "David Copperfield", "Derren Brown", "Penn Jillette", "Teller"];
 
function showMagicians(magicians: string[]): void {
  console.log("Magicians:");
 
  magicians.forEach((magician, index) => {
    console.log(`${index + 1}. ${magician}`);
  });
}
 
showMagicians(magicianNames);
