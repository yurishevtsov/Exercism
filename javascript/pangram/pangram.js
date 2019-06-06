export function isPangram (input) {
      const ALPHABET = "abcdefghijklmnopqrstuvwxyz";
      input = input.toLowerCase();
      for (let letter of ALPHABET) {
        if (!input.includes(letter)) return false;
      }
      return true;
    }
