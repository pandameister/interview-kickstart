import { bubbleSort } from './bubble-sort';
import { bucketSort } from './bucket-sort';
import { countingSort } from './counting-sort';
import { heapSort } from './heap-sort';
import { insertionSort } from './insertion-sort';
import { mergeSort } from './merge-sort';
import { radixSort } from './radix-sort';
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

    test('bucket-sort', () => {
        assertTestCases((values) =>
            bucketSort(
                values,
                (n) => n,
                4,
                (n) => Math.floor(n / 25)
            )
        );
    });

    test('counting-sort', () => {
        assertTestCases((values) => countingSort(values, 100, (n) => n));
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
