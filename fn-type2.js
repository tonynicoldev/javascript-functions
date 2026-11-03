// Parameters can be used to modify the effect of the function
// This makes it much more flexible but of course more complex

// A function with parameters
function divider(width, msg) {
  let lineStars = ''; // build up a line as a string
  let lineMsg = '';   // Create centred message

  // Create and output a string of stars
  for (let i = 0; i < width; i++) {
    lineStars += '*';
  }
  console.log(lineStars);

  // Create and output a centred message. If width or message are odd, remove one star from right
  lineMsg = '*';
  let numSpaces = ((width - msg.length - 2) / 2); // 2 are stars
  for (let i = 0; i < numSpaces; i++) {
    lineMsg += ' ';
  }
  lineMsg += msg;

  // If width or msg are odd (not both) remove 1 space
  if ((width - msg.length) % 2 != 0) {
    numSpaces--;
  }

  for (let i = 0; i < numSpaces; i++) {
    lineMsg += ' ';
  }
  lineMsg += '*';

  console.log(lineMsg); // Output the centred message
  console.log(lineStars);
}

// Test with all combinations of odd and even
divider(20, 'Even')  // even even num chars in title but even divider
divider(51, 'Even')  // odd width but even title
divider(21, 'Event') // odd width and odd title
divider(20, 'Event') // even width and odd title
divider(3, 'Event')  // This will break it