const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = () => {
//   return tutorials.map((line) => {
//     const tokens = line.split("");
//     const capitalizedTokens = tokens.map(
//       (token) => token.charAt(0).toUppercase() + token.slice(1)
//     );
//     const response = capitalizedTokens.join(" ");
//     return response;
//   });
// };

const titleCased = () => {
  return tutorials.map((line) => {
    const tokens = line.split(" ");
    const capitalizedTokens = tokens.map(
      (token) => token.charAt(0).toUpperCase() + token.slice(1)
    );
    const response = capitalizedTokens.join(" ");
    return response;
  });
};


// consider:

// How can we "iterate" through individual words in a string?
// Can we execute an iteration inside an iteration? How?
// How can we capitalize just the first letter in a word?
