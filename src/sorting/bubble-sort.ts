import { swap } from './utils';

/**
 * Pairwise swap until the smallest bubbles to the front

 * worst case: O(n^2)
 * best case: O(n)
 *
 * @param values
 * @returns
 */
export function bubbleSort<T>(values: T[]): T[] {
    const len = values.length;

    for (let i = 0; i < len - 1; i++) {
        let swapCount = 0;
        for (let j = 0; j < len - i - 1; j++) {
            if (values[j] > values[j + 1]) {
                swap(j, j + 1, values);
                swapCount++;
            }
        }
        if (swapCount === 0) {
            break;
        }
    }

    return values;
}
