export function isPangram(input, index = 0) {
  const ABC = "abcdefghijklmnopqrstuvwxyz";
  input = input.toLowerCase();
  return (index === ABC.length) ? true
  : !input.includes(ABC[index]) ? false
  : isPangram(input, (index = index + 1));
}
