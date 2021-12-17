import { bubbleSort } from './bubble-sort';
import { heapSort } from './heap-sort';
import { insertionSort } from './insertion-sort';
import { mergeSort } from './merge-sort';
import { selectionSort } from './selection-sort';
import { quickSort } from './quick-sort';

const datasets = [[], [1], [2, 1], [9, 1, 10, 2, 3, 50, 26, 6]];

function assertTestCases(sort: (values: number[]) => number[]) {
    datasets.forEach((data) => {
        expect(sort([...data])).toEqual(data.sort((a, b) => a - b));
    });
}

describe('sorting with', () => {
    test('bubble-sort', () => {
        assertTestCases(bubbleSort);
    });

    test('heap-sort', () => {
        assertTestCases(heapSort);
    });

    test('insertion-sort', () => {
        assertTestCases(insertionSort);
    });
    test('merge-sort', () => {
        assertTestCases(mergeSort);
    });
    test('selection-sort', () => {
        assertTestCases(selectionSort);
    });

    test('quick-sort', () => {
        assertTestCases(quickSort);
    });
});
