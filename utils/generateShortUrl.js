const base_62 = (apiKey) => {
  apiKey = parseInt(apiKey);
  let base_62_number = "";
  const charEncode = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ];

  while (apiKey > 61) {
    let remainder = apiKey % 62;
    apiKey = Math.floor(apiKey / 62);
    base_62_number = base_62_number + charEncode[remainder];
  }
  return base_62_number;
};

const generateShortUrl = (apiKey) => {
  const decoded = base_62(apiKey);
  return decoded;
};

export { generateShortUrl };
