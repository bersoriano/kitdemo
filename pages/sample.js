let arr = [1, 2, 3, 4, 5, 6];
let maxVal = (arr) => {
    console.log("Getting max val");
    var maxValue = arr[0];
    arr.reduce((element) => {
        element > maxValue ? maxValue = element : maxValue = maxValue;
    });
    return maxValue;
}
maxVal(arr);
