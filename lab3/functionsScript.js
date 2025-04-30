/* 1- Function accept a full name string and convert each letter of
first world to Capital and the remaining to small (Pascal
    Case). //Example : 'the quick brown fox' */
    //Output : 'The Quick Brown Fox'
function PascalCase(fullName) {
    let wordsList = fullName.split(" ")
    wordsList = wordsList.map(word=>{
        return word.charAt(0).toUpperCase() + word.slice(1);
    })
    // console.log(wordsList)
    fullName = wordsList.join(" ");
    return fullName
}
// -------------------------------------------------------------
/*
    2- Function that accept a sentence and return the longest word
within the input
//Example : 'Web Development Tutorial'
//Output : 'Development'
*/
function getLongestWord(sentence) {
    let splitWords = sentence.split(" ");
    let indexs = []
    indexs = splitWords.map(word => {
        // console.log(word)
        return word.length;
    })
    const maxValue = Math.max(...indexs);
    return splitWords[indexs.indexOf(maxValue)];
}
//-----------------------------------------------------
/*
    3- Write a JavaScript Function that returns a passed string with
letters in alphabetical order
//Example : javascript
//Output : aacijprstv
*/
function alphabeticalOrder(sentence) {
    let splittedLetters = sentence.split("")
    let orderdList = splittedLetters.sort()
    orderdList = orderdList.join("");
    return orderdList;
}
//------------------------------------------------
/*
4- Write a function that takes two arrays and returns an array of common
elements using filter() or a loop.
//Example: const arr1 = [1, 2, 3]; const arr2 = [2, 3, 4]; Returns [2, 3].
*/
function getCommenElement(arr1, arr2){
    return arr1.filter(e =>arr2.includes(e));
}
// ----------------------------------------------------------
/**
 * 5- make Array of duplicates numbers and remove it in new array
 */
function removeDuplicates(arr) {
    let uniqueArr = []
    for(let i = 0; i < arr.length; i++) {
        if(!uniqueArr.includes(arr[i])) {
            uniqueArr.push(arr[i]);
        }
    }
    return uniqueArr;
}