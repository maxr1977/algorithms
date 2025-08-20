function quickSortIterative(array) {
    const stack = [];

    stack.push({ low: 0, high: array.length - 1 });

    while (stack.length > 0) {
        const { low, high } = stack.pop();

        if (low < high) {
            const pi = partition(array, low, high);

            stack.push({ low: low, high: pi - 1 });
            stack.push({ low: pi + 1, high: high });
        }
    }

    return array;
}

function partition(array, low, high) {
    const pivot = array[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
        if (array[j] <= pivot) {
            i++;
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    [array[i + 1], array[high]] = [array[high], array[i + 1]];
    return i + 1;
}

const arr = [9, 4, 6, 2, 8, 1];
console.log(quickSortIterative(arr));
