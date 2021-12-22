import { countingSort } from './counting-sort';

/**
 * Radix sort using base B
 *
 * TLDR:
 *  T(n) = d * O(n+k) => logB(max(n)) * O(n) = O(n)
 *
 * @param values - values to sort
 * @returns the sorted values
 */
export function radixSort<T>(values: T[], hashFct: HashFct<T, number>, base = 10): T[] {
    if (values.length <= 1) {
        return values;
    }

    const maxDigits = computeMaxDigits(values.map(hashFct), base);

    for (let i = maxDigits; i > 0; i--) {
        const radixHashFct = createRadixHashFct(maxDigits, i, hashFct, base);
        values = countingSort<T>(values, base * 2, radixHashFct);
    }

    return values;
}

function createRadixHashFct<T>(
    maxDigits: number,
    i: number,
    hashFct: HashFct<T, number>,
    base: number
): HashFct<T, number> {
    return (value: T) => {
        const hash = hashFct(value);
        return Math.floor(hash / Math.pow(base, maxDigits - i)) % base;
    };
}

function computeMaxDigits(values: number[], base: number): number {
    let maxDigits = 1;
    const maxValue = Math.max(...values);
    for (let value = maxValue; value != 0; maxDigits++) {
        value = Math.floor(value / base);
    }

    return maxDigits;
}
