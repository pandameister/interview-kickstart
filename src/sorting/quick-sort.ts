import { swap } from './utils';

function quickSortHelper<T>(values: T[], start: number, end: number) {
    if (end - start <= 1) {
        return values;
    }

    let left = start + 1;
    let right = end;
    let pivotValue = values[start];

    while (left <= right) {
        if (values[left] <= pivotValue) {
            left++;
        } else if (values[right] > pivotValue) {
            right--;
        } else {
            swap(left, right, values);
            left++;
            right--;
        }
    }

    swap(start, left - 1, values);

    quickSortHelper(values, start, left - 1);
    quickSortHelper(values, left, end);

    return values;
}

export function quickSort<T>(values: T[]) {
    return quickSortHelper(values, 0, values.length - 1);
}
