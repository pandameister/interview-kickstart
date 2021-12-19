import { mergeSort } from './merge-sort';

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
export function bucketSort<T>(
    values: T[],
    hashFct: HashFct<T, number>,
    p: number,
    partitionFct: HashFct<number, number>
): T[] {
    let bucketFct = (value: T) => partitionFct(hashFct(value));

    // partition the values into buckets
    let buckets = partitionValues(values, p, bucketFct);

    // sort the buckets using a sorting algo
    buckets = buckets.map((bucket) => mergeSort(bucket));

    // and aggregate back together
    return aggregateValues(buckets, values.length);
}

export function aggregateValues<T>(partitions: T[][], count: number) {
    const res = new Array<T>(count);

    for (let i = 0, j = 0; i < partitions.length; i++) {
        const values = partitions[i];
        if (values != null) {
            values.forEach((value) => (res[j++] = value));
        }
    }
    return res;
}

export function partitionValues<T>(values: T[], p: number, partitionFct: HashFct<T, number>): T[][] {
    const partitionSpace = new Array<T[]>(p);

    // partition all the value into the partitionSpace array, using and auxiliaury linked list for each hash
    values.forEach((value) => {
        const key = partitionFct(value);
        let partitionValues = partitionSpace[key];

        if (!partitionValues) {
            partitionSpace[key] = partitionValues = [];
        }

        partitionValues.push(value);
    });

    return partitionSpace;
}
