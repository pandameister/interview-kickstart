export function swap(i: number, j: number, values: any[]) {
    const tmp = values[i];
    values[i] = values[j];
    values[j] = tmp;
}

/**
 * Creates a partition function with p partitions
 * Negative numbers will be mapped to the partitions: [0, p/2 -1],
 * and positives to [p/2, p-1]
 *
 * @param p - the number of partitions to use
 * @returns - the partition function
 */
export const createPartitionFct = (p: number) => {
    const mid = p / 2;
    return (n: number) => mid + Math.floor(n / mid);
};
