function arrayCopy(from: number[], to: number[], offset: number) {
    for (let i = 0; i < from.length; i++) {
        to[offset + i] = from[i];
    }
    return to;
}

function merge(values: number[], start: number, middle: number, end: number): number[] {
    const temp = new Array(end - start + 1);

    let i = start;
    let j = middle + 1;
    let k = 0;

    const len = temp.length;
    while (k < len) {
        if (j > end) {
            temp[k++] = values[i++];
        } else if (i > middle) {
            temp[k++] = values[j++];
        } else if (values[i] < values[j]) {
            temp[k++] = values[i++];
        } else {
            temp[k++] = values[j++];
        }
    }

    return arrayCopy(temp, values, start);
}

function mergeSortHelper(values: number[], start: number, end: number): number[] {
    if (end <= start) {
        return values;
    }

    const middle = start + Math.floor((end - start) / 2);

    mergeSortHelper(values, start, middle);
    mergeSortHelper(values, middle + 1, end);

    return merge(values, start, middle, end);
}

export function mergeSort(values: number[]) {
    return mergeSortHelper(values, 0, values.length - 1);
}
