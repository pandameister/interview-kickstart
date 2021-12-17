import { swap } from './utils';

/**
 * Sorting algo based on a Heap ADT.
 * A Heap is a complete binary tree where the heap property is respected: the value of any
 * node is greater (max-heap), or smaller (min-heap) than all its decendents. A heap can be efficiently
 * be represented by an array where for any node at index `i`, the index of index of its parent will be
 * at index `floor(i+1/2) - 1`
 *
 * @param values - values to sort
 * @returns the sorted values
 */
export function heapSort(values: number[]): number[] {
    const heap = new Heap(values, (value) => value);

    while (!heap.isEmpty()) {
        heap.extractMax();
    }

    return values;
}

function getLeftChildIndex(parentIndex: number) {
    return 2 * (parentIndex + 1) - 1;
}

function getRightChildIndex(parentIndex: number) {
    return 2 * (parentIndex + 1);
}

class Heap<T> {
    #size: number;

    constructor(private values: T[], private rank: (value: T) => number) {
        this.#size = values.length;
        this.#heapifyAll();
    }

    #rankOf(index: number): number {
        return this.rank(this.values[index]);
    }

    #heapifyDown(index: number) {
        const val = this.#rankOf(index);
        const lIdx = getLeftChildIndex(index);
        if (lIdx >= this.#size) {
            return;
        }

        const lVal = this.#rankOf(lIdx);
        const rIdx = getRightChildIndex(index);

        if (rIdx >= this.#size) {
            if (lVal > val) {
                swap(lIdx, index, this.values);
                this.#heapifyDown(lIdx);
            }
            return;
        }

        const rVal = this.#rankOf(rIdx);
        if (lVal > val || rVal > val) {
            let childSwapIdx = lVal >= rVal ? lIdx : rIdx;
            swap(childSwapIdx, index, this.values);
            this.#heapifyDown(childSwapIdx);
        }
    }

    #heapifyAll() {
        if (this.#size <= 1) {
            return;
        }

        const rightIndex = Math.floor(this.#size / 2) - 1;

        for (let i = rightIndex; i >= 0; i--) {
            this.#heapifyDown(i);
        }
    }

    public isEmpty() {
        return this.#size === 0;
    }

    public extractMax(): T {
        const max = this.values[0];

        if (this.#size > 0) {
            swap(0, this.#size - 1, this.values);
            this.#size--;
            this.#heapifyDown(0);
        }
        return max;
    }
}
