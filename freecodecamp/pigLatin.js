// convert an english word into pig latin

function pigLatin(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u'],
    result = str.split('');

  // if the first letter is a vowel, add "way" to the end of the word
  if (vowels.includes(str[0])) {
    return (str += 'way');
  } else {
    for (let i = 0; i < str.length; i++) {
      if (!vowels.includes(str[i])) {
        result.push(result.shift());
      } else {
        result.push('ay');
        return result.join('');
      }
    }
  }
}

pigLatin('eight'); // eightway
