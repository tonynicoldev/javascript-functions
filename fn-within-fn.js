// Create a width wide message box using char and centre a message msg in the box
function divider(width, msg, char) {
  let lineMsg = '';   // Hold centred message

  console.log(makeStr(char, width)); // Output line of chars

  // Create and output a centred message. If width or message are odd, remove one star from right
  lineMsg = char;
  let numSpaces = ((width - msg.length - 2) / 2); // 2 are other chars
  lineMsg += makeStr(' ', numSpaces);
  lineMsg += msg;

  // If width or msg are odd (not both) remove 1 space
  if ((width - msg.length) % 2 != 0) {
    numSpaces--;
  }

  lineMsg += makeStr(' ', numSpaces);
  lineMsg += char;

  console.log(lineMsg); // Output the centred message
  console.log(makeStr(char, width));
}

// Return a string of numChar chars of char
function makeStr(char, numChars){
  let str = '';
  for (let i=0; i < numChars; i++) {
    str += char;
  }
  return str;
}

// Test with all combinations of odd and even
divider(20, 'Even', '*');  // even even
divider(21, 'Even', '-');  // odd even
divider(21, 'Event', '#'); // odd odd
divider(20, 'Event', '/'); // even odd