const count = string => {
  let obj = {};
  for (let i = 0; i < string.length; i++) {
    let char = string.charAt(i);
    if (obj[char]) {
      obj[char]++;
    } else {
      obj[char] = 1;
    }
  }
  return obj;
}

// The main idea is to count all the occuring characters(UTF-8) in string. If you have string like this aba then the result should be { 'a': 2, 'b': 1 }

// What if the string is empty ? Then the result should be empty object literal { }

// For C#: Use a Dictionary<char, int> for this kata!
