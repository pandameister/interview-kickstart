import { partitionValues, aggregateValues } from './bucket-sort';

/**
 * Sorting algo on the structure of the sorting key
 
 * Time Complexity Analysis
 *
 * TLDR:
 *    - O(n + k) where k is the size of the key space
 *    - Not in place: O(n + k) extra space
 *    - Stable
 *
 * @param values - values to sort
 * @param k - the size of the key space
 * @param hash - the key hashing function that maps to the key space
 * @returns the sorted values
 */
export function countingSort<T>(values: T[], k: number, hashFct: HashFct<T, number>): T[] {
    const mid = k / 2;
    const partitionFct = (n: number) => mid + (n % mid);

    // partition the values into buckets all containing values of the same rank and aggregate them back together
    return aggregateValues(
        partitionValues(values, k, (n: T) => partitionFct(hashFct(n))),
        values.length
    );
}
