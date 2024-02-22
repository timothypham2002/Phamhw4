const message = () => {
  const input = prompt("Enter any word (type Stop to end): ");
  return input.trim().toLowerCase();
};
const words = [];
let input = message();
while (input !== 'stop') {
  words.push(input);
  input = message();
}
if (words.length === 0) {
  console.log("No words to display, Stop was the first word entered.");
} else {
  console.log("You entered the following words:");
  words.forEach(word => console.log(word));
}
