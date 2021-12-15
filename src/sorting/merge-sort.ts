import { sortScaffold } from './utils';

function arrayCopy(a1: number[], off1: number, a2: number[], off2: number, len: number) {
    for (let i = 0; i < len; i++) {
        a1[off1 + i] = a2[off2 + i];
    }
}

function merge(values: number[], start: number, middle: number, end: number) {
    const temp = new Array(end - start + 1);

    let i = start;
    let j = middle + 1;
    let k = 0;

    while (i <= middle || j <= end) {
        let idx = j > end || values[i] < values[j] ? i++ : j++;
        temp[k++] = values[idx];
    }

    arrayCopy(values, start, temp, 0, end - start + 1);
}

function mergeSort(values: number[], start: number, end: number) {
    if (end - start < 1) {
        return;
    }

    const middle = start + Math.floor((end - start) / 2);
    mergeSort(values, start, middle);
    mergeSort(values, middle + 1, end);

    merge(values, start, middle, end);
}

sortScaffold((values) => {
    mergeSort(values, 0, values.length - 1);
    return values;
});
