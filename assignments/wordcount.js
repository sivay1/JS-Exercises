/**
 * Count number of words in a given string
 * @param {string} text - input text to count words
 * @returns {number} - word count
 */
function countWords(text) {
  if (typeof text !== "string") throw new Error("Input must be a string");

  const trimmedText = text.trim();
  if (!trimmedText) return 0;

  const words = trimmedText.split(/\s+/);
  return words.length;
}
console.log(countWords("siva is good"));