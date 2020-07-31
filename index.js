const axios = require('axios');
const letters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

letters.forEach((letter) => {
  letters.forEach((inletter) => {
    let newUsername = `${letter}${inletter}`;
    axios
      .get(`https://api.github.com/users/${newUsername}`)
      .then((res) => res.data)
      .catch((err) => {
        if (err) console.log(newUsername);
      });
  });
});
