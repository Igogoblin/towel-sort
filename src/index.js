// function towelSort(matrix) {
//     // let ar = [];
//     // if (matrix.length == 0) {
//     //     return [];
//     // } else if ((matrix.length = 1)) {
//     //     matrix = matrix[0];
//     // }
//     // const flatArray = function (arr) {
//     //     for (let i = 0; i < arr.length; i++) {
//     //         let cur = arr[i];
//     //         if (typeof cur !== "number") {
//     //             flatArray(cur);
//     //         } else {
//     //             ar.push(cur);
//     //         }
//     //     }
//     // };
//     // const flatArrayReverse = function (arr) {
//     //     for (let i = arr.length - 1; i >= 0; i--) {
//     //         let cut = arr[i];
//     //         if (typeof cut !== "number") {
//     //             flatArrayReverse(cut);
//     //         } else {
//     //             ar.push(cut);
//     //         }
//     //     }
//     // };
//     // for (let i = 0; i < matrix.length; i++) {
//     //     if (i % 2 != 0) {
//     //         flatArrayReverse(matrix[i]);
//     //     } else {
//     //         flatArray(matrix[i]);
//     //     }
//     // }
//     // return ar;
//     // return matrix.reduce((acc, cur, i) => {
//     //     cur.sort((a, b) => (!(i & 1) ? a - b : b - a)).map((e) => acc.push(e));
//     //     return acc;
//     // }, []);
//     if (matrix == undefined) {
//         return [];
//       }
//       let towelSortArr = [];   
//       for ( let i = 0; i < matrix.length; i++)
//       if (i % 2 === 0) {
//        for( let j = 0; j < matrix[i].length; j++){
//         towelSortArr.push( matrix[i][j]);
//        }}
//        else {
//         for (let j = (matrix[i].length - 1); j >= 0; j--) {
//           towelSortArr.push(matrix[i][j]);
//         }
//       }
//       return towelSortArr;
// }

module.exports = function towelSort(matrix) {
    if (matrix == undefined) {
        return [];
      }
      let towelSortArr = [];
      for ( let i = 0; i < matrix.length; i++)
      if (i % 2 === 0) {
       for( let j = 0; j < matrix[i].length; j++){
        towelSortArr.push( matrix[i][j]);
       }}
       else {
        for (let j = (matrix[i].length - 1); j >= 0; j--) {
          towelSortArr.push(matrix[i][j]);
        }
      }
      return towelSortArr;
};
