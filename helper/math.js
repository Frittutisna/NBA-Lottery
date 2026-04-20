export const getPermutation = (n, r) => {return getFactorial(n) / getFactorial(n - r)};

const getFactorial = (n) => {
    let result = 1;
    while (n > 1) result *= n--;
    return result;
};