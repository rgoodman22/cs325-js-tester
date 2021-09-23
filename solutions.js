//conditionals
export const sumOfSquares = (x, y) => x * x + y * y;

export const maxOfThree = (x, y, z) => Math.max(x, y, z);

export const isLeapYear = (y) => y % 4 === 0 && (y % 100 !== 0 || y % 400 === 0);

//loops
export const allEvens = a => a.filter(e => e % 2 === 0);

export const listSquares = a => a.map(e => e * e);

export const listSum = a => a.reduce((prev, cur) => prev + cur, 0);

export const listSquaresSum = a => a.reduce((prev, cur) => prev + cur * cur, 0);

//mapping
export const subArray = (a, i) => i.map(index => a[index]);

export const getRepeats = a => a.reduce((prev, curr, ind) => (
    !prev.includes(curr) && a.slice(ind + 1).includes(curr)
        ? [...prev, curr]
        : prev), []);

export const over21 = a => a.filter(e => e.age >= 21);

export const makeHtmlList = a => a.reduce((prev, curr, ind) => (
    prev += ind === 0
        ? `<ul><li>${curr}</li>`
        : ind === a.length - 1
            ? `<li>${curr}</li></ul>`
            : `<li>${curr}</li>`
), '')
