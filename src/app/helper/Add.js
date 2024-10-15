export function add(numbers) {
    if (!numbers) return 0;
  
    let delimiter = ',';
    if (numbers.startsWith('//')) {
      const delimiterEnd = numbers.indexOf('\n');
      delimiter = numbers.substring(2, delimiterEnd);
      numbers = numbers.substring(delimiterEnd + 1);
    }
  
    const tokens = numbers.split(new RegExp(`[${delimiter}\n]`));
    const negatives = tokens.filter(n => parseInt(n) < 0);
  
    if (negatives.length) {
      throw new Error(`Negative numbers not allowed: ${negatives.join(', ')}`);
    }
  
    return tokens.reduce((sum, num) => sum + (parseInt(num) || 0), 0);
  }
  