export function capitalizeWord(word) {
  return word.toString().replace(/\b(\w)/g, w => w.toUpperCase());
}
