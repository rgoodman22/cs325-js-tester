//conditionals
export const sumOfSquares = (x, y) => x * x + y * y;

export const maxOfThree = (x, y, z) => Math.max(x, y, z);

export const isLeapYear = (y) => y % 4 === 0 && (y % 100 !== 0 || y % 400 === 0);

//loops
export const allEvens = a => a.filter(e => e % 2 === 0);

export const listSquares = a => a.map(e => e * e);

export const listSum = a => a.reduce((prev, cur) => prev + cur, 0);

export const listSquaresSum = a => a.reduce((prev, cur) => prev + cur * cur, 0);
