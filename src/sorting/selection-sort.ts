import { swap, sortScaffold } from './utils';

/**
 * Brute force: Find the smallest and bring it to the front
 *
 * worst case: O(n^2)
 * best case: O(n^2)
 *
 * @param values
 * @returns
 */
function selectionSort(values: number[]) {
    const len = values.length;

    for (let i = 0; i < len; i++) {
        let minValue = values[i];
        let minValueIdx = i;

        for (let j = i + 1; j < len; j++) {
            if (values[j] < minValue) {
                minValue = values[j];
                minValueIdx = j;
            }
        }

        if (minValueIdx !== i) {
            swap(i, minValueIdx, values);
        }
    }

    return values;
}

sortScaffold(selectionSort);
