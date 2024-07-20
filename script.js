function convertToRoman(num) {

  const romanSymbols = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
  ];

  let result = '';

  
  for (const [roman, value] of romanSymbols) {

    while (num >= value) {
      result += roman;
      num -= value;
    }
  }

  return result;
}

const input = parseInt(prompt("Enter a number"), 10);
if (isNaN(input) || input < 0 || input > 100000) {
  alert("Please enter a valid number between 0 and 100000.");
} else {
  alert(convertToRoman(input));
}