export function swap(i: number, j: number, values: number[]) {
    const tmp = values[i];
    values[i] = values[j];
    values[j] = tmp;
}

const dataset = [[], [1], [2, 1], [9, 1, 10, 2, 3, 50, 26, 6]];

type SortFct = (values: number[]) => number[];

export const sortScaffold = (sortFct: SortFct) => {
    dataset.forEach((data) => console.log(sortFct(data)));
};
