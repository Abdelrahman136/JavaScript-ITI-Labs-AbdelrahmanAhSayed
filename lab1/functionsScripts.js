// 1- 
var printVariables = function (value1, value2, value3=6){
    // console.log(arguments);
    console.log(localVar);
    console.log(testingVar);
    var localVar = 3,
    testingVar = 5;
    return [value1, value2, value3];
}