import { swap } from './utils';

function quickSortHelper(values: number[], start: number, end: number) {
    console.log([start, end]);
    if (end <= start) {
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

export function quickSort(values: number[]) {
    return quickSortHelper(values, 0, values.length - 1);
}
