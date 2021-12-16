import { bubbleSort } from './bubble-sort';
import { heapSort } from './heap-sort';
import { insertionSort } from './insertion-sort';
import { mergeSort } from './merge-sort';
import { selectionSort } from './selection-sort';
import { quickSort } from './quick-sort';

const dataset = [[], [1], [2, 1], [9, 1, 10, 2, 3, 50, 26, 6]];

type SortFct = (values: number[]) => number[];

function assertTestCases(sort: (values: number[]) => number[]) {
    dataset.forEach((data) => {
        const expected = [...data].sort((a, b) => a - b);
        expect(sort(data)).toEqual(expected);
    });
}

describe('sorting with', () => {
    test('bubble-sort', () => {
        assertTestCases(bubbleSort);
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
