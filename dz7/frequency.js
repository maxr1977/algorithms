function createLetterFrequencyMap(text) {
  const frequencyMap = {};
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  for (let i = 0; i < text.length; i++) {
    const char = text[i].toLowerCase();

    if (alphabet.includes(char)) {
      if (frequencyMap[char]) {
        frequencyMap[char]++;
      } else {
        frequencyMap[char] = 1;
      }
    }
  }
  return frequencyMap;
}

const myText = "Tom gave up the brush with reluctance in his face, but alacrity in his heart. And while the late steamer Big Missouri worked and sweated in the sun, the retired artist sat on a barrel in the shade close by, dangled his legs, munched his apple, and planned the slaughter of more innocents.";
const result = createLetterFrequencyMap(myText);
console.log(result);