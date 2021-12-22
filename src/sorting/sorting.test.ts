import { bubbleSort } from './bubble-sort';
import { bucketSort } from './bucket-sort';
import { countingSort } from './counting-sort';
import { heapSort } from './heap-sort';
import { insertionSort } from './insertion-sort';
import { mergeSort } from './merge-sort';
import { radixSort } from './radix-sort';
import { selectionSort } from './selection-sort';
import { quickSort } from './quick-sort';

const datasets = [
    [],
    [1],
    [2, 1],
    [9, 1, 10, 2, 3, 50, 26, 6],
    [-1, 3, 4, 1, 8, -6],
    [8, -1, 0, 34, 2, -7, 7, 8, -8, 77, -77]
];

function assertTestCases(sort: (values: number[]) => number[]) {
    datasets.forEach((data) => {
        expect(sort([...data])).toEqual(data.sort((a, b) => a - b));
    });
}

describe('sorting with', () => {
    test('bubble-sort', () => {
        assertTestCases(bubbleSort);
    });

    test('bucket-sort', () => {
        const numPartitions = 8;
        assertTestCases((values) => bucketSort(values, (n) => n, numPartitions));
    });

    test('counting-sort', () => {
        assertTestCases((values) => countingSort(values, 200, (n) => n));
    });

    test('heap-sort', () => {
        assertTestCases((values) => heapSort(values, (n) => n));
    });

    test('insertion-sort', () => {
        assertTestCases(insertionSort);
    });
    test('merge-sort', () => {
        assertTestCases(mergeSort);
    });

    test('radix-sort', () => {
        assertTestCases((values) => radixSort(values, (n) => n, 256));
    });

    test('selection-sort', () => {
        assertTestCases(selectionSort);
    });
    test('quick-sort', () => {
        assertTestCases(quickSort);
    });
});
