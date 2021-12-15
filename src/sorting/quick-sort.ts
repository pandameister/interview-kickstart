import { swap, sortScaffold } from './utils';

function quickSort(values: number[], start: number, end: number) {
    if (start >= end) {
        return;
    }

    let left = start + 1;
    let right = end;

    while (left < right) {
        if (values[left] < values[start]) {
            left++;
        } else {
            while (values[right] > values[start]) {
                right--;
            }

            swap(left, right, values);
            left++;
            right--;
        }
    }

    swap(start, left, values);

    quickSort(values, start, left - 1);
    quickSort(values, left + 1, end);

    return values;
}

sortScaffold((values) => {
    quickSort(values, 0, values.length - 1);
    return values;
});
