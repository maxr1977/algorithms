function findKthElement(arr1, arr2, k) {
    let i = 0, j = 0, count = 0;
    let result;

    while (count < k) {
        if (i < arr1.length && (j >= arr2.length || arr1[i] <= arr2[j])) {
            result = arr1[i];
            i++;
        } else {
            result = arr2[j];
            j++;
        }
        count++;
    }
    return result;
}

const arr1 = [100, 112, 256, 349, 770];
const arr2 = [72, 86, 113, 119, 265, 445, 892];
const k = 7;

console.log(findKthElement(arr1, arr2, k));
