export function swap(i: number, j: number, values: any[]) {
    const tmp = values[i];
    values[i] = values[j];
    values[j] = tmp;
}
