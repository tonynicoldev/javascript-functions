// Function returns the number of times char appears in the string inString
function countChar(inString, char) {
  let count = 0
  for (let i = 0; i < inString.length; i++) {
    if (inString.charAt(i) === char) {
      count++
    }
  }
  return count
}


// Main program
const CHAR_TO_FIND = 'e'
let sentence = 'This is a sentence for testing.'

const numHits = countChar(sentence,CHAR_TO_FIND)

console.log(`Character '${CHAR_TO_FIND}' appears ${numHits} times in: ${sentence}`)

console.log(`Character '${CHAR_TO_FIND}' appears ${countChar(sentence,CHAR_TO_FIND)} times in: ${sentence}`)



