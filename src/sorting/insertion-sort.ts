import { sortScaffold } from './utils';

/**
 * Deck of cards sorting
 * worst case: O(n^2)
 * best case: O(n)
 * @param values
 * @returns
 */
function insertionSort(values: number[]) {
    for (let i = 1; i < values.length; i++) {
        const nextValue = values[i];

        let j = i - 1;
        while (j >= 0 && values[j] > nextValue) {
            values[j + 1] = values[j];
            j--;
        }
        values[j + 1] = nextValue;
    }

    return values;
}

sortScaffold(insertionSort);
