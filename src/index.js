function towelSort(matrix) {
    let ar = [];

    if (matrix.length == 0) {
        return [];
    } else if ((matrix.length = 1)) {
        matrix = matrix[0];
    }
    const flatArray = function (arr) {
        for (let i = 0; i < arr.length; i++) {
            let cur = arr[i];
            if (typeof cur !== "number") {
                flatArray(cur);
            } else {
                ar.push(cur);
            }
        }
    };

    const flatArrayReverse = function (arr) {
        for (let i = arr.length - 1; i >= 0; i--) {
            let cut = arr[i];
            if (typeof cut !== "number") {
                flatArrayReverse(cut);
            } else {
                ar.push(cut);
            }
        }
    };

    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 != 0) {
            flatArrayReverse(matrix[i]);
        } else {
            flatArray(matrix[i]);
        }
    }

    return ar;
}

module.exports = function towelSort(matrix) {
    return matrix;
};
